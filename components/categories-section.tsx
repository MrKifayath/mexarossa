'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Smartphone, Sparkles, ShoppingBag, Heart, ArrowRight, Home, Dumbbell, Book, Watch } from 'lucide-react';

const iconMap = {
  Smartphone,
  Sparkles,
  ShoppingBag,
  Heart,
  Home,
  Dumbbell,
  Book,
  Watch,
};

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets & accessories',
    icon: 'Smartphone',
    color: 'from-primary to-accent',
    slug: 'electronics',
  },
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Fashion & apparel',
    icon: 'ShoppingBag',
    color: 'from-accent to-purple-500',
    slug: 'clothing',
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    description: 'Furniture & appliances',
    icon: 'Home',
    color: 'from-secondary to-teal-500',
    slug: 'home-garden',
  },
  {
    id: 'sports-outdoors',
    name: 'Sports & Outdoors',
    description: 'Fitness & outdoor gear',
    icon: 'Dumbbell',
    color: 'from-pink-500 to-rose-500',
    slug: 'sports-outdoors',
  },
  {
    id: 'books-media',
    name: 'Books & Media',
    description: 'Books & entertainment',
    icon: 'Book',
    color: 'from-purple-500 to-indigo-500',
    slug: 'books-media',
  },
  {
    id: 'personal',
    name: 'Personal Care',
    description: 'Beauty & wellness',
    icon: 'Heart',
    color: 'from-rose-500 to-pink-500',
    slug: 'personal',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Bags, watches & more',
    icon: 'Watch',
    color: 'from-amber-500 to-orange-500',
    slug: 'accessories',
  },
];

export function CategoriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="categories" ref={sectionRef} className="py-20 md:py-32 bg-muted/50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary-foreground bg-secondary text-sm font-medium mb-4">
            Shop by Category
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-balance">
            Explore Our <span className="text-gradient">Collections</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find exactly what you need from our diverse range of products
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`group relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-sm font-medium text-primary">
                  <span>Explore</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>

                {/* Decorative Circle */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
