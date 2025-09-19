import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CowBreed } from '@/types';
import { MapPin, Milk, Weight } from 'lucide-react';

interface BreedCardProps {
  breed: CowBreed;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

export function BreedCard({ breed, variant = 'default', className = '' }: BreedCardProps) {
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';

  return (
    <Link href={`/breeds/${breed.slug}`} className={`block group ${className}`}>
      <Card className={`overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 ${
        isFeatured ? 'border-primary/20 shadow-md' : ''
      }`}>
        {/* Image */}
        <div className={`relative overflow-hidden ${isCompact ? 'h-48' : 'h-64'} bg-muted`}>
          <Image
            src={breed.images.primary}
            alt={breed.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Overlay for featured breeds */}
          {isFeatured && (
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
          )}

          {/* Purpose badge */}
          <div className="absolute top-3 right-3">
            <Badge
              variant="outline"
              className={`capitalize bg-card/90 backdrop-blur-sm ${
                breed.primaryPurpose === 'dairy' ? 'text-blue-600 border-blue-200' :
                breed.primaryPurpose === 'beef' ? 'text-red-600 border-red-200' :
                'text-green-600 border-green-200'
              }`}
            >
              {breed.primaryPurpose}
            </Badge>
          </div>
        </div>

        <CardContent className={`p-4 ${isCompact ? 'pb-4' : 'pb-6'}`}>
          {/* Breed Name */}
          <h3 className={`font-semibold text-foreground mb-2 ${
            isCompact ? 'text-lg' : 'text-xl'
          }`}>
            {breed.name}
          </h3>

          {/* Short Description */}
          <p className={`text-muted-foreground mb-3 line-clamp-2 ${
            isCompact ? 'text-sm' : 'text-base'
          }`}>
            {breed.shortDescription}
          </p>

          {/* Key Stats */}
          <div className={`grid gap-2 mb-4 ${isCompact ? 'grid-cols-1' : 'grid-cols-2'}`}>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{breed.origin}</span>
            </div>

            {breed.characteristics.milkProduction && (
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Milk className="h-4 w-4" />
                <span>{breed.characteristics.milkProduction.toLocaleString()} L/yr</span>
              </div>
            )}

            {!isCompact && (
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Weight className="h-4 w-4" />
                <span>{breed.characteristics.averageWeight.female}kg avg</span>
              </div>
            )}

            {!isCompact && (
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-4 h-4 rounded-full border-2 border-current flex-shrink-0" />
                <span className="capitalize">{breed.characteristics.size}</span>
              </div>
            )}
          </div>

          {/* Color indicators */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">Colors:</span>
              <div className="flex space-x-1">
                {breed.characteristics.colors.slice(0, 2).map((color, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full border border-border ${
                      color.toLowerCase().includes('black') ? 'bg-black' :
                      color.toLowerCase().includes('white') ? 'bg-white' :
                      color.toLowerCase().includes('red') ? 'bg-red-600' :
                      color.toLowerCase().includes('brown') ? 'bg-amber-700' :
                      color.toLowerCase().includes('fawn') ? 'bg-amber-300' :
                      'bg-muted'
                    }`}
                    title={color}
                  />
                ))}
                {breed.characteristics.colors.length > 2 && (
                  <div className="w-4 h-4 rounded-full bg-muted border border-border flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">+</span>
                  </div>
                )}
              </div>
            </div>

            {/* Popularity indicator */}
            {!isCompact && (
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < Math.round(breed.economicValue.popularity / 2)
                        ? 'bg-primary'
                        : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Tags */}
          {!isCompact && breed.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {breed.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}