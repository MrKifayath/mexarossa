'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Heart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';
import { cn } from '@/lib/utils';
import { getProductImage, getProductImages, FALLBACK_IMAGE } from '@/lib/get-product-image';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  inStock: boolean;
  image?: string;
  badge?: string;
  rating?: number;
  reviews?: number;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

// Generate deterministic values based on product ID
function getDeterministicValue(productId: string, seed: number): number {
  let hash = 0;
  const str = productId + seed;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(() => product.image || getProductImage(product.name));
  const { addToCart } = useCart();

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  // Generate deterministic values based on product ID
  const ratingValue = getDeterministicValue(product.id, 1) % 50;
  const reviewsValue = getDeterministicValue(product.id, 2) % 400;
  const badgeValue = getDeterministicValue(product.id, 3) % 100;

  const rating = product.rating || 4.5 + (ratingValue / 100);
  const reviews = product.reviews || reviewsValue + 50;
  const badge = product.badge || (badgeValue > 80 ? ['Best Seller', 'Trending'][badgeValue % 2] : undefined);

  // Handle image error by trying fallback images
  const handleImageError = () => {
    if (!imageError) {
      // Try numbered images as fallback
      const productImages = getProductImages(product.name);
      const currentIndex = productImages.findIndex(img => img === imageSrc);
      
      if (currentIndex < productImages.length - 1) {
        // Try next image in the list
        setImageSrc(productImages[currentIndex + 1]);
      } else {
        // All images failed, use fallback
        setImageError(true);
        setImageSrc(FALLBACK_IMAGE);
      }
    }
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg shadow-foreground/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className={cn(
              'object-cover transition-all duration-700',
              isHovered ? 'scale-110' : 'scale-100'
            )}
            onError={handleImageError}
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {badge && (
              <span className="px-3 py-1 text-xs font-bold bg-gradient-brand text-white rounded-full">
                {badge}
              </span>
            )}
            {discount > 0 && (
              <span className="px-3 py-1 text-xs font-bold bg-destructive text-destructive-foreground rounded-full">
                -{discount}%
              </span>
            )}
            {!product.inStock && (
              <span className="px-3 py-1 text-xs font-bold bg-muted text-muted-foreground rounded-full">
                Out of Stock
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div 
            className={cn(
              'absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300',
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            )}
          >
            <Button
              size="icon"
              variant="secondary"
              className={cn(
                'h-10 w-10 rounded-full shadow-lg transition-all duration-300 hover:scale-110',
                isLiked ? 'bg-primary text-primary-foreground' : 'bg-card/90 backdrop-blur-sm'
              )}
              onClick={(e) => {
                e.preventDefault();
                setIsLiked(!isLiked);
              }}
            >
              <Heart className={cn('h-4 w-4', isLiked && 'fill-current')} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-10 w-10 rounded-full shadow-lg bg-card/90 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              asChild
            >
              <Link href={`/product/${product.id}`}>
                <Eye className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Add to Cart Button */}
          {product.inStock && (
            <div 
              className={cn(
                'absolute bottom-0 left-0 right-0 p-4 transition-all duration-500',
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
              )}
            >
              <Button 
                className="w-full bg-gradient-brand text-white hover:opacity-90 rounded-full font-semibold shadow-xl"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product as any);
                }}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category & Brand */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              {product.category.replace('-', ' ')}
            </span>
            <span className="text-xs text-muted-foreground">
              {product.brand}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300 mb-2">
            <Link href={`/product/${product.id}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-3.5 w-3.5',
                    i < Math.floor(rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-muted-foreground/30'
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-gradient">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
