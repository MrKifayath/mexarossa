'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useProductFilters } from '@/lib/product-filters-context';
import { cn } from '@/lib/utils';

interface ProductsFiltersProps {
  isVisible: boolean;
}

const categories = [
  { id: 'electronics', label: 'Electronics', count: 29 },
  { id: 'clothing', label: 'Clothing', count: 20 },
  { id: 'home-garden', label: 'Home & Garden', count: 20 },
  { id: 'sports-outdoors', label: 'Sports & Outdoors', count: 20 },
  { id: 'books-media', label: 'Books & Media', count: 15 },
  { id: 'personal', label: 'Personal Care', count: 4 },
  { id: 'accessories', label: 'Accessories', count: 4 },
];

const brands = [
  'Samsung', 'Apple', 'Xiaomi', 'Realme', 'POCO', 'OnePlus',
  'boAt', 'Noise', 'Fire-Boltt', 'Logitech', 'HP',
  'Van Heusen', 'Lee', 'Decathlon', 'Kanjivaram', 'Libas',
  'Philips', 'LG', 'Nilkamal', 'Penguin', 'SG'
];

export function ProductsFilters({ isVisible }: ProductsFiltersProps) {
  const { filters, updateFilters, clearFilters } = useProductFilters();
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    brand: false,
    availability: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCategoryChange = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter(c => c !== categoryId)
      : [...filters.categories, categoryId];
    updateFilters({ categories: newCategories });
  };

  const handleBrandChange = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    updateFilters({ brands: newBrands });
  };

  const hasActiveFilters = filters.categories.length > 0 || 
    filters.brands.length > 0 || 
    filters.priceRange[0] > 0 || 
    filters.priceRange[1] < 200000 ||
    filters.inStockOnly;

  return (
    <aside 
      className={cn(
        'lg:sticky lg:top-24 h-fit transition-all duration-700 delay-150',
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      )}
    >
      <div className="bg-card rounded-2xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Filters</h2>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-xs text-primary hover:text-primary/80"
            >
              <X className="h-3 w-3 mr-1" />
              Clear All
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div className="border-b border-border pb-6">
            <button
              onClick={() => toggleSection('category')}
              className="flex items-center justify-between w-full mb-4 group"
            >
              <h3 className="font-semibold">Category</h3>
              {expandedSections.category ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              )}
            </button>
            {expandedSections.category && (
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={category.id}
                        checked={filters.categories.includes(category.id)}
                        onCheckedChange={() => handleCategoryChange(category.id)}
                      />
                      <Label
                        htmlFor={category.id}
                        className="text-sm cursor-pointer hover:text-primary transition-colors"
                      >
                        {category.label}
                      </Label>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price Range */}
          <div className="border-b border-border pb-6">
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full mb-4 group"
            >
              <h3 className="font-semibold">Price Range</h3>
              {expandedSections.price ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              )}
            </button>
            {expandedSections.price && (
              <div className="space-y-4">
                <Slider
                  min={0}
                  max={200000}
                  step={1000}
                  value={filters.priceRange}
                  onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
                  className="mt-2"
                />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    ₹{filters.priceRange[0].toLocaleString('en-IN')}
                  </span>
                  <span className="text-muted-foreground">
                    ₹{filters.priceRange[1].toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Brands */}
          <div className="border-b border-border pb-6">
            <button
              onClick={() => toggleSection('brand')}
              className="flex items-center justify-between w-full mb-4 group"
            >
              <h3 className="font-semibold">Brand</h3>
              {expandedSections.brand ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              )}
            </button>
            {expandedSections.brand && (
              <div className="space-y-3 max-h-48 overflow-y-auto">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={filters.brands.includes(brand)}
                      onCheckedChange={() => handleBrandChange(brand)}
                    />
                    <Label
                      htmlFor={`brand-${brand}`}
                      className="text-sm cursor-pointer hover:text-primary transition-colors"
                    >
                      {brand}
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Availability */}
          <div>
            <button
              onClick={() => toggleSection('availability')}
              className="flex items-center justify-between w-full mb-4 group"
            >
              <h3 className="font-semibold">Availability</h3>
              {expandedSections.availability ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              )}
            </button>
            {expandedSections.availability && (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="in-stock"
                  checked={filters.inStockOnly}
                  onCheckedChange={(checked) => updateFilters({ inStockOnly: checked as boolean })}
                />
                <Label
                  htmlFor="in-stock"
                  className="text-sm cursor-pointer hover:text-primary transition-colors"
                >
                  In Stock Only
                </Label>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
