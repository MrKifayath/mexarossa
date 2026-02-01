'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import productsData from '@/products.json';
import { getProductImage, FALLBACK_IMAGE } from '@/lib/get-product-image';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const results = (productsData as Product[]).filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      ).slice(0, 8); // Limit to 8 results
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-0 left-0 right-0 z-50 animate-in slide-in-from-top duration-300">
        <div className="container mx-auto px-4 pt-6">
          <div className="max-w-3xl mx-auto bg-background rounded-3xl shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-4 p-6 border-b border-border">
              <Search className="h-6 w-6 text-muted-foreground flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for products, brands, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-lg bg-transparent border-none outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {searchQuery.trim() === '' ? (
                <div className="p-12 text-center text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p>Start typing to search products...</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-12 text-center text-muted-foreground">
                  <p>No products found for "{searchQuery}"</p>
                  <p className="text-sm mt-2">Try different keywords</p>
                </div>
              ) : (
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-4 px-2">
                    Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                  </p>
                  <div className="space-y-2">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={onClose}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors group"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <Image
                            src={getProductImage(product.name)}
                            alt={product.name}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {product.brand} • {product.category.replace('-', ' ')}
                          </p>
                          <p className="text-sm font-bold text-primary mt-1">
                            ₹{product.price.toLocaleString('en-IN')}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {searchResults.length === 8 && (
                    <Link
                      href={`/products`}
                      onClick={onClose}
                      className="block text-center py-4 text-sm text-primary hover:underline"
                    >
                      View all results
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
