'use client';

import { Search, Sparkles } from 'lucide-react';
import { useProductFilters } from '@/lib/product-filters-context';

interface ProductsHeaderProps {
  isVisible: boolean;
}

export function ProductsHeader({ isVisible }: ProductsHeaderProps) {
  const { filters, updateFilters } = useProductFilters();

  return (
    <div 
      className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              All <span className="text-gradient">Products</span>
            </h1>
            <p className="text-muted-foreground mt-1">
              Discover our complete collection
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={filters.searchQuery}
            onChange={(e) => updateFilters({ searchQuery: e.target.value })}
            className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
