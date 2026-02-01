'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import productsData from '@/products.json';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  brand: string;
  category: string;
  inStock: boolean;
}

interface Filters {
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'name' | 'newest';
  searchQuery: string;
}

interface ProductFiltersContextType {
  filters: Filters;
  updateFilters: (newFilters: Partial<Filters>) => void;
  clearFilters: () => void;
  filteredProducts: Product[];
  allProducts: Product[];
}

const ProductFiltersContext = createContext<ProductFiltersContextType | undefined>(undefined);

const defaultFilters: Filters = {
  categories: [],
  brands: [],
  priceRange: [0, 200000],
  inStockOnly: false,
  sortBy: 'featured',
  searchQuery: '',
};

export function ProductFiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [allProducts] = useState<Product[]>(productsData as Product[]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  useEffect(() => {
    let result = [...allProducts];

    // Filter by categories
    if (filters.categories.length > 0) {
      result = result.filter(product => 
        filters.categories.includes(product.category)
      );
    }

    // Filter by brands
    if (filters.brands.length > 0) {
      result = result.filter(product => 
        filters.brands.includes(product.brand)
      );
    }

    // Filter by price range
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );

    // Filter by stock
    if (filters.inStockOnly) {
      result = result.filter(product => product.inStock);
    }

    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        // Assuming newer products have higher IDs
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(result);
  }, [filters, allProducts]);

  const updateFilters = useCallback((newFilters: Partial<Filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  return (
    <ProductFiltersContext.Provider
      value={{
        filters,
        updateFilters,
        clearFilters,
        filteredProducts,
        allProducts,
      }}
    >
      {children}
    </ProductFiltersContext.Provider>
  );
}

export function useProductFilters() {
  const context = useContext(ProductFiltersContext);
  if (!context) {
    throw new Error('useProductFilters must be used within ProductFiltersProvider');
  }
  return context;
}
