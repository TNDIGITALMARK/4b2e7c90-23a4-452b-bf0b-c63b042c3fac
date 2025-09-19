'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';
import { cowFacts, searchFacts, getFactsByCategory, getRandomFacts } from '@/data/facts';
import { CowFact } from '@/types';
import { Search, Filter, Clock, Users, BookOpen, Lightbulb, Shuffle } from 'lucide-react';

interface FilterState {
  search: string;
  category: string;
  difficulty: string;
  ageGroup: string;
}

export default function FactsPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: '',
    difficulty: '',
    ageGroup: ''
  });
  const [randomFacts, setRandomFacts] = useState(() => getRandomFacts(3));

  // Filter options
  const filterOptions = useMemo(() => ({
    categories: [...new Set(cowFacts.map(fact => fact.category))],
    difficulties: [...new Set(cowFacts.map(fact => fact.difficulty))],
    ageGroups: [...new Set(cowFacts.map(fact => fact.ageGroup))]
  }), []);

  // Filtered facts
  const filteredFacts = useMemo(() => {
    let results = cowFacts;

    if (filters.search) {
      results = searchFacts(filters.search);
    }

    if (filters.category) {
      results = results.filter(fact => fact.category === filters.category);
    }

    if (filters.difficulty) {
      results = results.filter(fact => fact.difficulty === filters.difficulty);
    }

    if (filters.ageGroup) {
      results = results.filter(fact =>
        fact.ageGroup === filters.ageGroup || fact.ageGroup === 'all'
      );
    }

    return results;
  }, [filters]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      category: '',
      difficulty: '',
      ageGroup: ''
    });
  };

  const generateRandomFacts = () => {
    setRandomFacts(getRandomFacts(3));
  };

  const getCategoryIcon = (category: CowFact['category']) => {
    const icons = {
      nutrition: '🌾',
      behavior: '🐄',
      anatomy: '🫀',
      environment: '🌍',
      history: '📚',
      culture: '🏛️'
    };
    return icons[category] || '📖';
  };

  const getDifficultyColor = (difficulty: CowFact['difficulty']) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const activeFiltersCount = Object.values(filters).filter(value => value !== '').length;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Amazing Cow Facts
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Discover fascinating facts about cattle behavior, anatomy, history, and their
              impact on human civilization. Learn something new today!
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search facts by topic, keyword..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="pl-12 py-3 bg-white text-foreground text-lg"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-card border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  {filterOptions.categories.map(category => (
                    <SelectItem key={category} value={category} className="capitalize">
                      {getCategoryIcon(category)} {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filters.difficulty} onValueChange={(value) => handleFilterChange('difficulty', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="All Difficulties" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Difficulties</SelectItem>
                  {filterOptions.difficulties.map(difficulty => (
                    <SelectItem key={difficulty} value={difficulty} className="capitalize">
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filters.ageGroup} onValueChange={(value) => handleFilterChange('ageGroup', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="All Age Groups" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Ages</SelectItem>
                  {filterOptions.ageGroups.map(ageGroup => (
                    <SelectItem key={ageGroup} value={ageGroup} className="capitalize">
                      {ageGroup}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={clearFilters}
                disabled={activeFiltersCount === 0}
              >
                Clear Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>

              <Button
                variant="outline"
                onClick={generateRandomFacts}
                className="flex items-center gap-2"
              >
                <Shuffle className="h-4 w-4" />
                Random Facts
              </Button>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-6 text-muted-foreground">
            Showing {filteredFacts.length} of {cowFacts.length} facts
          </div>
        </div>
      </section>

      {/* Random Facts Spotlight */}
      {filters.search === '' && filters.category === '' && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Random Facts Spotlight</h2>
              <Button variant="outline" onClick={generateRandomFacts} className="flex items-center gap-2">
                <Shuffle className="h-4 w-4" />
                New Random Facts
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {randomFacts.map((fact) => (
                <Card key={fact.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-4xl">{fact.icon}</span>
                      <Badge variant="outline" className="capitalize">
                        {fact.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{fact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-4">
                      {fact.content}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {fact.readTime} min
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {fact.ageGroup}
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs ${getDifficultyColor(fact.difficulty)}`}
                      >
                        {fact.difficulty}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Facts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredFacts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFacts.map((fact) => (
                <Card key={fact.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-4xl">{fact.icon}</span>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="outline" className="capitalize">
                          {getCategoryIcon(fact.category)} {fact.category}
                        </Badge>
                        {fact.featured && (
                          <Badge className="bg-primary text-primary-foreground text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{fact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {fact.content}
                    </p>

                    <div className="space-y-3">
                      {/* Tags */}
                      {fact.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {fact.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {fact.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{fact.tags.length - 3} more
                            </Badge>
                          )}
                        </div>
                      )}

                      {/* Metadata */}
                      <div className="flex items-center justify-between text-sm border-t pt-3">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{fact.readTime} min</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground capitalize">{fact.ageGroup}</span>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className={`text-xs ${getDifficultyColor(fact.difficulty)}`}
                        >
                          {fact.difficulty}
                        </Badge>
                      </div>

                      {/* Sources */}
                      {fact.sources.length > 0 && (
                        <div className="text-xs text-muted-foreground">
                          <div className="flex items-center gap-1 mb-1">
                            <BookOpen className="h-3 w-3" />
                            Sources:
                          </div>
                          <div className="pl-4">
                            {fact.sources.slice(0, 2).map((source, index) => (
                              <div key={index}>• {source}</div>
                            ))}
                            {fact.sources.length > 2 && (
                              <div>• +{fact.sources.length - 2} more sources</div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <CardContent>
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No facts found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search criteria or filters to find more facts.
                </p>
                <Button onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore by Category</h2>
            <p className="text-xl text-muted-foreground">
              Dive deeper into specific aspects of cattle knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterOptions.categories.map((category) => {
              const categoryFacts = getFactsByCategory(category as CowFact['category']);
              return (
                <Card key={category} className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => handleFilterChange('category', category)}>
                  <CardContent className="text-center pt-6">
                    <div className="text-4xl mb-4">{getCategoryIcon(category as CowFact['category'])}</div>
                    <h3 className="text-xl font-semibold capitalize mb-2">{category}</h3>
                    <p className="text-muted-foreground mb-4">
                      {categoryFacts.length} facts available
                    </p>
                    <Button variant="outline" className="w-full">
                      <Lightbulb className="mr-2 h-4 w-4" />
                      Explore {category}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}