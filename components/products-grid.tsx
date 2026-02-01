'use client';

import { useState, useEffect } from 'react';
import { ArrowUpDown, Grid3x3, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { useProductFilters } from '@/lib/product-filters-context';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ProductsGridProps {
  isVisible: boolean;
}

export function ProductsGrid({ isVisible }: ProductsGridProps) {
  const { filteredProducts, filters, updateFilters } = useProductFilters();
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  return (
    <div 
      className={cn(
        'transition-all duration-700 delay-300',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
    >
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 bg-card rounded-2xl p-4 shadow-lg">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{filteredProducts.length}</span> products found
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Sort */}
          <Select value={filters.sortBy} onValueChange={(value) => updateFilters({ sortBy: value as any })}>
            <SelectTrigger className="w-[180px] rounded-full">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name: A to Z</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>

          {/* View Mode */}
          <div className="hidden sm:flex items-center gap-1 bg-muted rounded-full p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'compact' ? 'default' : 'ghost'}
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => setViewMode('compact')}
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div 
          className={cn(
            'grid gap-6',
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          )}
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-in fade-in duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
            <Grid3x3 className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No products found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your filters to find what you're looking for
          </p>
          <Button 
            variant="outline" 
            className="rounded-full"
            onClick={() => updateFilters({ 
              categories: [], 
              brands: [], 
              priceRange: [0, 200000],
              inStockOnly: false 
            })}
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
}
