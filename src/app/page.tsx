import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/layout/Layout';
import { BreedCard } from '@/components/breeds/BreedCard';
import { getFeaturedBreeds } from '@/data/breeds';
import { getFeaturedFacts } from '@/data/facts';
import { ArrowRight, BookOpen, Users, Award, Leaf } from 'lucide-react';

export default function HomePage() {
  const featuredBreeds = getFeaturedBreeds();
  const featuredFacts = getFeaturedFacts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-cows-field.jpg"
            alt="Cows grazing in a natural field at golden hour"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-gradient opacity-60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              NURTURING
              <br />
              <span className="text-secondary">NATURE'S FINEST</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in">
              Discover the fascinating world of cattle breeds, from dairy champions
              to beef excellence, and explore their cultural significance across civilizations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/breeds">
                  Explore Breeds
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
              >
                <Link href="/facts">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Breeds Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Breeds
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the most popular and significant cattle breeds from around the world
            </p>
          </div>

          {/* Breed Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredBreeds.slice(0, 3).map((breed) => (
              <div key={breed.id} className="animate-fade-in">
                <BreedCard breed={breed} variant="featured" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/breeds">
                View All Breeds
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Commitment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated to education, sustainability, and animal welfare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Education */}
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">EDUCATION</h3>
                <p className="text-muted-foreground text-sm">
                  Providing comprehensive resources for students, educators, and enthusiasts
                </p>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">COMMUNITY</h3>
                <p className="text-muted-foreground text-sm">
                  Building connections between farmers, researchers, and cattle enthusiasts
                </p>
              </CardContent>
            </Card>

            {/* Sustainability */}
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">SUSTAINABILITY</h3>
                <p className="text-muted-foreground text-sm">
                  Promoting ethical and sustainable farming practices for the future
                </p>
              </CardContent>
            </Card>

            {/* Animal Welfare */}
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-earth-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-earth-light-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">ANIMAL WELFARE</h3>
                <p className="text-muted-foreground text-sm">
                  Ensuring the highest standards of care and respect for all cattle
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Facts Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Did You Know?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fascinating facts about cattle that will amaze and educate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredFacts.slice(0, 3).map((fact) => (
              <Card key={fact.id} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{fact.icon}</span>
                    <Badge variant="outline" className="capitalize">
                      {fact.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{fact.title}</h3>
                  <p className="text-muted-foreground line-clamp-3">
                    {fact.content}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {fact.readTime} min read
                    </span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/facts">Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/facts">
                Explore All Facts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Educational Community
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stay updated with the latest research, breed information, and
              educational resources from the world of cattle farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}