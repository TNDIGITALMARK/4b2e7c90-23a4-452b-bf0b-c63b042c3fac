import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/layout/Layout';
import { Camera, Heart, Eye } from 'lucide-react';

const galleryImages = [
  {
    id: '1',
    url: '/generated/hero-cows-field.jpg',
    title: 'Peaceful Pasture',
    description: 'Holstein dairy cows grazing in a golden hour meadow',
    category: 'pastoral',
    photographer: 'Sarah Johnson',
    location: 'Vermont Dairy Farm'
  },
  {
    id: '2',
    url: '/generated/holstein-primary.jpg',
    title: 'Holstein Portrait',
    description: 'Beautiful Holstein cow showcasing classic breed characteristics',
    category: 'breeds',
    photographer: 'Michael Chen',
    location: 'Wisconsin'
  },
  {
    id: '3',
    url: '/generated/angus-primary.jpg',
    title: 'Angus Excellence',
    description: 'Black Angus cow in natural pasture setting',
    category: 'breeds',
    photographer: 'Emily Rodriguez',
    location: 'Texas Ranch'
  },
  {
    id: '4',
    url: '/generated/jersey-primary.jpg',
    title: 'Jersey Grace',
    description: 'Golden Jersey cow representing dairy excellence',
    category: 'breeds',
    photographer: 'James Thompson',
    location: 'California'
  },
  {
    id: '5',
    url: '/generated/hero-cows-field.jpg',
    title: 'Farm Life',
    description: 'Daily life on a sustainable dairy farm',
    category: 'farming',
    photographer: 'Agricultural Team',
    location: 'Iowa'
  },
  {
    id: '6',
    url: '/generated/holstein-primary.jpg',
    title: 'Morning Milking',
    description: 'Early morning dairy operations',
    category: 'farming',
    photographer: 'Farm Staff',
    location: 'Minnesota'
  }
];

const categories = [
  { name: 'All', count: galleryImages.length },
  { name: 'Breeds', count: galleryImages.filter(img => img.category === 'breeds').length },
  { name: 'Pastoral', count: galleryImages.filter(img => img.category === 'pastoral').length },
  { name: 'Farming', count: galleryImages.filter(img => img.category === 'farming').length }
];

export default function GalleryPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Photo Gallery
            </h1>
            <p className="text-xl opacity-90 mb-8">
              A visual journey through the world of cattle farming, showcasing
              the beauty and diversity of different breeds in their natural environments.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                <span>{galleryImages.length} Photos</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>Professional Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Educational Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-card border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden group">
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="mb-2 capitalize bg-white/20 backdrop-blur-sm">
                      {image.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {image.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div>
                      <p className="font-medium">{image.photographer}</p>
                      <p>{image.location}</p>
                    </div>
                    <div className="text-right">
                      <p>Click to view full size</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Gallery Statistics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{galleryImages.length}</div>
              <div className="text-muted-foreground">Total Images</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Breed Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Farm Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}