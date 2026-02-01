'use client';

import { useEffect } from 'react';
import { Smartphone, ShoppingBag, Home, Dumbbell, Book, Heart, Watch, Search } from 'lucide-react';
import { useProductFilters } from '@/lib/product-filters-context';

const iconMap = {
  Smartphone,
  ShoppingBag,
  Home,
  Dumbbell,
  Book,
  Heart,
  Watch,
};

interface CategoryHeaderProps {
  category: {
    name: string;
    description: string;
    icon: string;
  };
  slug: string;
  isVisible: boolean;
}

export function CategoryHeader({ category, slug, isVisible }: CategoryHeaderProps) {
  const { filters, updateFilters } = useProductFilters();
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Smartphone;

  useEffect(() => {
    // Only update if the category is not already selected
    if (!filters.categories.includes(slug)) {
      updateFilters({ categories: [slug] });
    }
  }, [slug]); // Only depend on slug

  return (
    <div 
      className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg">
            <IconComponent className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              {category.name}
            </h1>
            <p className="text-muted-foreground mt-1 text-lg">
              {category.description}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search in this category..."
            value={filters.searchQuery}
            onChange={(e) => updateFilters({ searchQuery: e.target.value })}
            className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
