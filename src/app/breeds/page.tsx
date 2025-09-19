'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';
import { BreedCard } from '@/components/breeds/BreedCard';
import { cowBreeds, searchBreeds } from '@/data/breeds';
import { CowBreed } from '@/types';
import { Search, Filter, Grid, List, SortAsc, SortDesc } from 'lucide-react';

interface FilterState {
  search: string;
  purpose: string;
  size: string;
  origin: string;
  popularity: string;
}

type SortOption = 'name-asc' | 'name-desc' | 'popularity-asc' | 'popularity-desc';

export default function BreedsPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    purpose: '',
    size: '',
    origin: '',
    popularity: ''
  });
  const [sortBy, setSortBy] = useState<SortOption>('popularity-desc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get unique values for filter options
  const filterOptions = useMemo(() => ({
    purposes: [...new Set(cowBreeds.map(breed => breed.primaryPurpose))],
    sizes: [...new Set(cowBreeds.map(breed => breed.characteristics.size))],
    origins: [...new Set(cowBreeds.map(breed => breed.origin))].sort()
  }), []);

  // Filter and sort breeds
  const filteredBreeds = useMemo(() => {
    let results = cowBreeds;

    // Apply search filter
    if (filters.search) {
      results = searchBreeds(filters.search);
    }

    // Apply other filters
    if (filters.purpose) {
      results = results.filter(breed => breed.primaryPurpose === filters.purpose);
    }

    if (filters.size) {
      results = results.filter(breed => breed.characteristics.size === filters.size);
    }

    if (filters.origin) {
      results = results.filter(breed => breed.origin === filters.origin);
    }

    if (filters.popularity) {
      const minPopularity = parseInt(filters.popularity);
      results = results.filter(breed => breed.economicValue.popularity >= minPopularity);
    }

    // Apply sorting
    results = [...results].sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'popularity-asc':
          return a.economicValue.popularity - b.economicValue.popularity;
        case 'popularity-desc':
          return b.economicValue.popularity - a.economicValue.popularity;
        default:
          return 0;
      }
    });

    return results;
  }, [filters, sortBy]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      purpose: '',
      size: '',
      origin: '',
      popularity: ''
    });
  };

  const activeFiltersCount = Object.values(filters).filter(value => value !== '').length;

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cattle Breeds Database
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Explore our comprehensive collection of cattle breeds from around the world.
              Discover their characteristics, origins, and unique qualities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search breeds, origins, characteristics..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="pl-12 py-3 bg-white text-foreground"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              <Button
                variant="secondary"
                size="lg"
                onClick={clearFilters}
                disabled={activeFiltersCount === 0}
                className="px-8"
              >
                Clear Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="outline" className="ml-2">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="bg-card border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
            {/* Filters */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={filters.purpose} onValueChange={(value) => handleFilterChange('purpose', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="All Purposes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Purposes</SelectItem>
                  {filterOptions.purposes.map(purpose => (
                    <SelectItem key={purpose} value={purpose} className="capitalize">
                      {purpose}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filters.size} onValueChange={(value) => handleFilterChange('size', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="All Sizes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Sizes</SelectItem>
                  {filterOptions.sizes.map(size => (
                    <SelectItem key={size} value={size} className="capitalize">
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filters.origin} onValueChange={(value) => handleFilterChange('origin', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="All Origins" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Origins</SelectItem>
                  {filterOptions.origins.map(origin => (
                    <SelectItem key={origin} value={origin}>
                      {origin}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filters.popularity} onValueChange={(value) => handleFilterChange('popularity', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Min Popularity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Popularity</SelectItem>
                  <SelectItem value="8">Very Popular (8+)</SelectItem>
                  <SelectItem value="6">Popular (6+)</SelectItem>
                  <SelectItem value="4">Moderate (4+)</SelectItem>
                  <SelectItem value="1">All Breeds</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity-desc">Most Popular</SelectItem>
                  <SelectItem value="popularity-asc">Least Popular</SelectItem>
                  <SelectItem value="name-asc">Name A-Z</SelectItem>
                  <SelectItem value="name-desc">Name Z-A</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none border-l"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-muted-foreground">
              Showing {filteredBreeds.length} of {cowBreeds.length} breeds
            </div>

            {activeFiltersCount > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                <div className="flex gap-2">
                  {filters.search && (
                    <Badge variant="outline" className="text-xs">
                      Search: {filters.search}
                    </Badge>
                  )}
                  {filters.purpose && (
                    <Badge variant="outline" className="text-xs capitalize">
                      Purpose: {filters.purpose}
                    </Badge>
                  )}
                  {filters.size && (
                    <Badge variant="outline" className="text-xs capitalize">
                      Size: {filters.size}
                    </Badge>
                  )}
                  {filters.origin && (
                    <Badge variant="outline" className="text-xs">
                      Origin: {filters.origin}
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Breeds Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredBreeds.length > 0 ? (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
                : 'space-y-6'
            }>
              {filteredBreeds.map((breed) => (
                <BreedCard
                  key={breed.id}
                  breed={breed}
                  variant={viewMode === 'list' ? 'default' : 'compact'}
                />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <CardContent>
                <div className="text-4xl mb-4">🐄</div>
                <h3 className="text-xl font-semibold mb-2">No breeds found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search criteria or filters to find more breeds.
                </p>
                <Button onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Featured Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Comparisons</h2>
            <p className="text-xl text-muted-foreground">
              Compare different breeds side by side to understand their differences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent>
                <h3 className="text-lg font-semibold mb-4">Dairy Champions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Holstein vs Jersey</span>
                    <Button variant="outline" size="sm">Compare</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Holstein vs Guernsey</span>
                    <Button variant="outline" size="sm">Compare</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <h3 className="text-lg font-semibold mb-4">Beef Excellence</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Angus vs Hereford</span>
                    <Button variant="outline" size="sm">Compare</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Charolais vs Simmental</span>
                    <Button variant="outline" size="sm">Compare</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}