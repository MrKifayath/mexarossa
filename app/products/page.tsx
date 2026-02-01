'use client';

import { useState, useEffect } from 'react';
import { ProductFiltersProvider } from '@/lib/product-filters-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { ProductsGrid } from '@/components/products-grid';
import { ProductsFilters } from '@/components/products-filters';
import { ProductsHeader } from '@/components/products-header';

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <ProductFiltersProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <ProductsHeader isVisible={isVisible} />

            {/* Main Content */}
            <div className="grid lg:grid-cols-[280px_1fr] gap-8">
              {/* Filters Sidebar */}
              <ProductsFilters isVisible={isVisible} />

              {/* Products Grid */}
              <ProductsGrid isVisible={isVisible} />
            </div>
          </div>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </ProductFiltersProvider>
  );
}
