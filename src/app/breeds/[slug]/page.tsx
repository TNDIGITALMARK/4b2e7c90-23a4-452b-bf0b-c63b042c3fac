import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Layout } from '@/components/layout/Layout';
import { getBreedBySlug, cowBreeds } from '@/data/breeds';
import { CowBreed } from '@/types';
import {
  MapPin,
  Calendar,
  Weight,
  Milk,
  Heart,
  Clock,
  TrendingUp,
  Users,
  ArrowLeft,
  Star,
  Info
} from 'lucide-react';

interface BreedDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BreedDetailPage({ params }: BreedDetailPageProps) {
  const breed = getBreedBySlug(params.slug);

  if (!breed) {
    notFound();
  }

  // Get related breeds (same purpose, different breeds)
  const relatedBreeds = cowBreeds
    .filter(b => b.id !== breed.id && b.primaryPurpose === breed.primaryPurpose)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={breed.images.primary}
          alt={breed.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />

        {/* Navigation */}
        <div className="absolute top-6 left-6 z-10">
          <Button variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
            <Link href="/breeds">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Breeds
            </Link>
          </Button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    className={`capitalize ${
                      breed.primaryPurpose === 'dairy' ? 'bg-blue-600' :
                      breed.primaryPurpose === 'beef' ? 'bg-red-600' :
                      'bg-green-600'
                    }`}
                  >
                    {breed.primaryPurpose}
                  </Badge>
                  {breed.featured && (
                    <Badge variant="outline" className="border-white/30 text-white">
                      <Star className="mr-1 h-3 w-3" />
                      Featured
                    </Badge>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{breed.name}</h1>
                <p className="text-xl opacity-90">{breed.shortDescription}</p>
              </div>

              {/* Quick Stats */}
              <div className="hidden md:block text-right">
                <div className="flex items-center text-sm opacity-80 mb-2">
                  <MapPin className="mr-1 h-4 w-4" />
                  {breed.origin}
                </div>
                <div className="flex items-center text-sm opacity-80">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  Popularity: {breed.economicValue.popularity}/10
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="characteristics">Traits</TabsTrigger>
                  <TabsTrigger value="care">Care</TabsTrigger>
                  <TabsTrigger value="breeding">Breeding</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>About {breed.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg leading-relaxed mb-6">{breed.description}</p>

                      {/* Key Stats Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-muted/30 rounded-lg">
                          <Weight className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <div className="font-semibold">Average Weight</div>
                          <div className="text-sm text-muted-foreground">
                            ♀ {breed.characteristics.averageWeight.female}kg
                            <br />
                            ♂ {breed.characteristics.averageWeight.male}kg
                          </div>
                        </div>

                        {breed.characteristics.milkProduction && (
                          <div className="text-center p-4 bg-muted/30 rounded-lg">
                            <Milk className="h-8 w-8 mx-auto mb-2 text-primary" />
                            <div className="font-semibold">Milk Production</div>
                            <div className="text-sm text-muted-foreground">
                              {breed.characteristics.milkProduction.toLocaleString()} L/year
                            </div>
                          </div>
                        )}

                        <div className="text-center p-4 bg-muted/30 rounded-lg">
                          <Heart className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <div className="font-semibold">Lifespan</div>
                          <div className="text-sm text-muted-foreground">
                            {breed.characteristics.lifespan} years
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Fun Facts */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Did You Know?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {breed.funFacts.map((fact, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="characteristics" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Physical Characteristics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Size & Build</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Size Classification:</span>
                              <Badge variant="outline" className="capitalize">
                                {breed.characteristics.size}
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span>Male Height:</span>
                              <span>{breed.physicalTraits.height.male} cm</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Female Height:</span>
                              <span>{breed.physicalTraits.height.female} cm</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Colors</h4>
                          <div className="flex flex-wrap gap-2">
                            {breed.characteristics.colors.map((color, index) => (
                              <Badge key={index} variant="outline">
                                {color}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            {breed.physicalTraits.coatPattern}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Distinguishing Features</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {breed.physicalTraits.distinguishingFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="care" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Care Requirements</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Climate Preferences</h4>
                        <div className="flex flex-wrap gap-2">
                          {breed.careRequirements.climate.map((climate, index) => (
                            <Badge key={index} variant="outline">
                              {climate}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Dietary Needs</h4>
                        <ul className="space-y-2">
                          {breed.careRequirements.diet.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Space Requirements</h4>
                        <p className="text-sm bg-muted/30 p-4 rounded-lg">
                          <Info className="inline h-4 w-4 mr-2" />
                          {breed.careRequirements.spaceNeeds}
                        </p>
                      </div>

                      {breed.careRequirements.specialNeeds.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-3">Special Considerations</h4>
                          <ul className="space-y-2">
                            {breed.careRequirements.specialNeeds.map((need, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span className="text-sm">{need}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="breeding" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Breeding Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-muted/30 rounded-lg">
                          <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <div className="font-semibold">Gestation Period</div>
                          <div className="text-2xl font-bold text-primary">
                            {breed.breedingInfo.gestationPeriod}
                          </div>
                          <div className="text-xs text-muted-foreground">days</div>
                        </div>

                        <div className="text-center p-4 bg-muted/30 rounded-lg">
                          <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <div className="font-semibold">Breeding Age</div>
                          <div className="text-2xl font-bold text-primary">
                            {breed.breedingInfo.breedingAge}
                          </div>
                          <div className="text-xs text-muted-foreground">months</div>
                        </div>

                        <div className="text-center p-4 bg-muted/30 rounded-lg">
                          <Heart className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <div className="font-semibold">Calves per Birth</div>
                          <div className="text-2xl font-bold text-primary">
                            {breed.breedingInfo.averageLitterSize}
                          </div>
                          <div className="text-xs text-muted-foreground">typically</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Health Considerations</h4>
                        <div className="space-y-4">
                          {breed.healthInfo.commonIssues.length > 0 && (
                            <div>
                              <h5 className="text-sm font-medium mb-2">Common Health Issues</h5>
                              <ul className="space-y-1">
                                {breed.healthInfo.commonIssues.map((issue, index) => (
                                  <li key={index} className="text-sm text-muted-foreground">
                                    • {issue}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div>
                            <h5 className="text-sm font-medium mb-2">Recommended Vaccinations</h5>
                            <div className="flex flex-wrap gap-2">
                              {breed.healthInfo.vaccinations.map((vaccine, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {vaccine}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="history" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Breed History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose max-w-none">
                        <p className="text-lg leading-relaxed">{breed.history}</p>
                      </div>

                      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold mb-2">Key Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong>Origin:</strong> {breed.origin}
                          </div>
                          <div>
                            <strong>Primary Purpose:</strong> {breed.primaryPurpose}
                          </div>
                          <div>
                            <strong>Temperament:</strong> {breed.characteristics.temperament}
                          </div>
                          <div>
                            <strong>Market Demand:</strong> {breed.economicValue.marketDemand}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Popularity</span>
                    <div className="flex items-center gap-2 flex-1 ml-4">
                      <Progress value={breed.economicValue.popularity * 10} className="flex-1" />
                      <span className="text-sm font-medium">{breed.economicValue.popularity}/10</span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm">Market Demand</span>
                    <Badge
                      variant={
                        breed.economicValue.marketDemand === 'high' ? 'default' :
                        breed.economicValue.marketDemand === 'medium' ? 'secondary' :
                        'outline'
                      }
                      className="capitalize"
                    >
                      {breed.economicValue.marketDemand}
                    </Badge>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm">Cost to Raise</span>
                    <Badge variant="outline" className="capitalize">
                      {breed.economicValue.costToRaise}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {breed.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Breeds */}
              {relatedBreeds.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Related {breed.primaryPurpose} Breeds</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {relatedBreeds.map((relatedBreed) => (
                        <Link
                          key={relatedBreed.id}
                          href={`/breeds/${relatedBreed.slug}`}
                          className="block p-3 rounded-lg border hover:bg-muted/30 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 relative rounded-full overflow-hidden">
                              <Image
                                src={relatedBreed.images.primary}
                                alt={relatedBreed.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{relatedBreed.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {relatedBreed.origin}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}