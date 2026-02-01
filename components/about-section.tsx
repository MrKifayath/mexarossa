'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { CheckCircle, Award, Users, Globe } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Customers' },
  { icon: Globe, value: '500+', label: 'Cities Served' },
  { icon: Award, value: '99%', label: 'Satisfaction Rate' },
];

const values = [
  'Premium quality products at competitive prices',
  'Fast and reliable shipping across India',
  'Dedicated customer support team',
  'Easy returns and refund process',
  'Secure payment options',
  'Authentic and genuine products only',
];

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div 
            className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/logo.png"
                alt="MEXAROSSA"
                fill
                className="object-contain p-12 bg-gradient-brand-subtle"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-2xl border border-border">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <Icon className="h-6 w-6 mx-auto text-primary mb-2" />
                      <div className="text-xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div 
            className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">
              Your Trusted <span className="text-gradient">Shopping Destination</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              MEXAROSSA is your premier destination for quality electronics, beauty products, 
              fashion items, and personal care essentials. Based in Hyderabad, we are committed 
              to bringing you the best products at competitive prices with exceptional service.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is simple: to provide our customers with authentic, high-quality products 
              and an unmatched shopping experience. Every product in our collection is carefully 
              curated to meet our strict quality standards.
            </p>

            {/* Values List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${400 + index * 50}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
