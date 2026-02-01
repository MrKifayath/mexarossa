'use client';

import { useEffect, useState, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Amazing quality products! The wireless earbuds I ordered exceeded my expectations. Fast delivery and excellent packaging. Will definitely shop again!',
    product: 'Wireless Earbuds Pro',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Bangalore',
    rating: 5,
    text: 'The Vitamin C serum transformed my skin in just 2 weeks. Genuine products at great prices. MEXAROSSA is now my go-to store for skincare.',
    product: 'Vitamin C Serum',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    location: 'Hyderabad',
    rating: 5,
    text: 'Love my new smartwatch! The features are amazing and battery life is incredible. Customer service was very helpful with my queries.',
    product: 'Smart Watch Elite',
  },
];

export function TestimonialsSection() {
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
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-balance">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied customers who trust MEXAROSSA
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center shadow-lg">
                <Quote className="h-5 w-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {`"${testimonial.text}"`}
              </p>

              {/* Product */}
              <p className="text-xs text-primary font-medium mb-4">
                Purchased: {testimonial.product}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
