import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { storeInfo } from '@/lib/store-data';

export const metadata = {
  title: 'Terms & Conditions | MEXAROSSA',
  description: 'Read the terms and conditions for using MEXAROSSA e-commerce platform.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 bg-background/80 backdrop-blur-xl border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src="/logo.png" alt="MEXAROSSA" width={140} height={44} className="h-10 w-auto" />
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              <span className="text-gradient">Terms & Conditions</span>
            </h1>
            <p className="text-muted-foreground">Last updated: February 2026</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to MEXAROSSA. These terms and conditions outline the rules and regulations 
                  for the use of our website and services. By accessing this website, we assume you 
                  accept these terms and conditions in full. Do not continue to use MEXAROSSA if you 
                  do not accept all of the terms and conditions stated on this page.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Definitions</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground">{'"Company"'}</strong> refers to MEXAROSSA, located at {storeInfo.address}.</p>
                  <p><strong className="text-foreground">{'"Customer"'}</strong> refers to any individual or entity that purchases products from our website.</p>
                  <p><strong className="text-foreground">{'"Website"'}</strong> refers to the MEXAROSSA online store accessible at our domain.</p>
                  <p><strong className="text-foreground">{'"Products"'}</strong> refers to all items listed for sale on our website.</p>
                </div>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Use of Website</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using our website, you agree to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Provide accurate and complete information when creating an account or placing an order</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Not use the website for any illegal or unauthorized purpose</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Not attempt to gain unauthorized access to our systems or data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Not engage in any activity that could harm or disrupt our services</span>
                  </li>
                </ul>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Products and Pricing</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    All products displayed on our website are subject to availability. We reserve the 
                    right to discontinue any product at any time without prior notice.
                  </p>
                  <p className="leading-relaxed">
                    Prices for our products are subject to change without notice. We reserve the right 
                    to modify or discontinue any product without prior notice.
                  </p>
                  <p className="leading-relaxed">
                    All prices are displayed in Indian Rupees (INR) and are inclusive of applicable 
                    taxes unless otherwise stated.
                  </p>
                </div>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Orders and Payment</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    By placing an order, you are making an offer to purchase the products. We reserve 
                    the right to accept or decline your order for any reason.
                  </p>
                  <p className="leading-relaxed">
                    Payment must be made at the time of placing the order. We accept various payment 
                    methods including credit/debit cards, UPI, net banking, and cash on delivery 
                    (where available).
                  </p>
                  <p className="leading-relaxed">
                    You agree to provide current, complete, and accurate purchase and account information 
                    for all purchases made at our store.
                  </p>
                </div>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Shipping and Delivery</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    We ship to addresses within India. Delivery times may vary depending on your location 
                    and product availability.
                  </p>
                  <p className="leading-relaxed">
                    Shipping charges, if applicable, will be calculated and displayed at checkout before 
                    you complete your purchase.
                  </p>
                  <p className="leading-relaxed">
                    Risk of loss and title for products pass to you upon delivery of the products to 
                    your specified address.
                  </p>
                </div>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including but not limited to text, graphics, logos, 
                  images, and software, is the property of MEXAROSSA and is protected by Indian and 
                  international copyright laws. You may not reproduce, distribute, or create derivative 
                  works without our express written permission.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MEXAROSSA shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use or inability to use our services. Our 
                  total liability shall not exceed the amount you paid for the product in question.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs 
                  your use of our website, to understand our practices regarding your personal information.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to update or modify these terms and conditions at any time without 
                  prior notice. Your continued use of the website following any changes constitutes your 
                  acceptance of the new terms.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws 
                  of India. Any disputes arising from these terms shall be subject to the exclusive 
                  jurisdiction of the courts in Hyderabad, Telangana.
                </p>
              </section>

              <section className="bg-gradient-brand-subtle rounded-2xl p-8 border border-primary/20">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-foreground">
                  <p><strong>Email:</strong> {storeInfo.email}</p>
                  <p><strong>Phone:</strong> +91 {storeInfo.phone}</p>
                  <p><strong>Address:</strong> {storeInfo.address}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MEXAROSSA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
