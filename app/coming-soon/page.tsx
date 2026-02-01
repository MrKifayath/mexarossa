'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { Rocket, ArrowLeft, Bell, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Back Button */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-brand mb-8 animate-float">
                <Rocket className="h-12 w-12 text-white" />
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                Coming <span className="text-gradient">Soon</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                We're working hard to bring you something amazing. This feature will be available soon!
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Enhanced Features</h3>
                  <p className="text-sm text-muted-foreground">
                    New and improved functionality
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Better Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Smoother and faster performance
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">More Options</h3>
                  <p className="text-sm text-muted-foreground">
                    Additional choices for you
                  </p>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-card rounded-2xl p-8 shadow-xl max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Bell className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Get Notified</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Be the first to know when this feature launches
                </p>

                {subscribed ? (
                  <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 py-3">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-semibold">Thanks for subscribing!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-4 py-3 rounded-full border-2 border-border focus:border-primary focus:outline-none transition-colors"
                    />
                    <Button
                      type="submit"
                      className="bg-gradient-brand text-white hover:opacity-90 rounded-full px-8 shadow-xl whitespace-nowrap"
                    >
                      Notify Me
                    </Button>
                  </form>
                )}
              </div>

              {/* Quick Links */}
              <div className="mt-12 pt-12 border-t border-border">
                <p className="text-muted-foreground mb-6">
                  In the meantime, check out these pages:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/products"
                    className="px-6 py-3 rounded-full border-2 border-border hover:border-primary hover:text-primary transition-colors font-semibold"
                  >
                    Browse Products
                  </Link>
                  <Link
                    href="/faq"
                    className="px-6 py-3 rounded-full border-2 border-border hover:border-primary hover:text-primary transition-colors font-semibold"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/#contact"
                    className="px-6 py-3 rounded-full border-2 border-border hover:border-primary hover:text-primary transition-colors font-semibold"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
