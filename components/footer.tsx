'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { storeInfo } from '@/lib/store-data';
import { Button } from '@/components/ui/button';

const footerLinks = {
  shop: [
    { label: 'All Products', href: '/products' },
    { label: 'Electronics', href: '/category/electronics' },
    { label: 'Clothing', href: '/category/clothing' },
    { label: 'Home & Garden', href: '/category/home-garden' },
    { label: 'Sports & Outdoors', href: '/category/sports-outdoors' },
  ],
  support: [
    { label: 'Contact Us', href: '/coming-soon' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Shipping Info', href: '/coming-soon' },
    { label: 'Track Order', href: '/coming-soon' },
  ],
  policies: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Cancellation Policy', href: '/cancellation-policy' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/95" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-background/10">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-background mb-3">
                Stay Updated with Our Latest Offers
              </h3>
              <p className="text-background/70 mb-6">
                Subscribe to our newsletter and get exclusive deals delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-gradient-brand text-white hover:opacity-90 rounded-full px-8 shadow-xl">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/logo.png"
                  alt="MEXAROSSA"
                  width={360}
                  height={112}
                  className="h-28 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-background/70 mb-6 leading-relaxed max-w-sm">
                Your trusted destination for premium electronics, fashion, home essentials, 
                and lifestyle products. Quality guaranteed.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-background/70 pt-2">{storeInfo.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <a href={`tel:${storeInfo.phone}`} className="text-background/70 hover:text-primary transition-colors pt-2">
                    +91 {storeInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <a href={`mailto:${storeInfo.email}`} className="text-background/70 hover:text-primary transition-colors pt-2">
                    {storeInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-background">Shop</h3>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-background">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-background">Policies</h3>
              <ul className="space-y-3">
                {footerLinks.policies.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-16 pt-12 border-t border-background/10">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-gradient-brand hover:scale-110 transition-all duration-300 group"
                >
                  <Icon className="h-5 w-5 text-background group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
              <p>&copy; {new Date().getFullYear()} MEXAROSSA. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
                <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms</Link>
                <Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
