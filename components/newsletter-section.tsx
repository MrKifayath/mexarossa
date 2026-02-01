'use client';

import React from "react"

import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-brand opacity-90" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 text-balance">
            Stay in the Loop
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Subscribe to get exclusive offers, new arrivals, and insider-only discounts
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 rounded-full px-6 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 transition-all duration-300"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-14 px-8 rounded-full bg-white text-primary hover:bg-white/90 font-semibold shadow-xl transition-all duration-300 hover:scale-105"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Subscribed!
                </>
              ) : (
                <>
                  Subscribe
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          <p className="text-sm text-white/60 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
