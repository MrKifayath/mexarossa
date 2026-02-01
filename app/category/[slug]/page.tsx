'use client';

import { use, useState, useEffect } from 'react';
import { ProductFiltersProvider } from '@/lib/product-filters-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { CategoryHeader } from '@/components/category-header';
import { ProductsGrid } from '@/components/products-grid';
import { ProductsFilters } from '@/components/products-filters';

const categoryInfo: Record<string, { name: string; description: string; icon: string }> = {
  'electronics': {
    name: 'Electronics',
    description: 'Latest gadgets, smartphones, and tech accessories',
    icon: 'Smartphone'
  },
  'clothing': {
    name: 'Clothing',
    description: 'Fashion and apparel for every occasion',
    icon: 'ShoppingBag'
  },
  'home-garden': {
    name: 'Home & Garden',
    description: 'Furniture, appliances, and home essentials',
    icon: 'Home'
  },
  'sports-outdoors': {
    name: 'Sports & Outdoors',
    description: 'Fitness equipment and outdoor gear',
    icon: 'Dumbbell'
  },
  'books-media': {
    name: 'Books & Media',
    description: 'Books, magazines, and entertainment',
    icon: 'Book'
  },
  'personal': {
    name: 'Personal Care',
    description: 'Beauty, grooming, and wellness products',
    icon: 'Heart'
  },
  'accessories': {
    name: 'Accessories',
    description: 'Bags, watches, and fashion accessories',
    icon: 'Watch'
  },
};

function CategoryPageContent({ slug }: { slug: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const category = categoryInfo[slug];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <ProductFiltersProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Category Header */}
            <CategoryHeader 
              category={category}
              slug={slug}
              isVisible={isVisible}
            />

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

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  
  return (
    <CategoryPageContent slug={resolvedParams.slug} />
  );
}
