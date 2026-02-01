import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { storeInfo } from '@/lib/store-data';

export const metadata = {
  title: 'Cancellation Policy | MEXAROSSA',
  description: 'Learn about order cancellation process and policies at MEXAROSSA.',
};

export default function CancellationPolicyPage() {
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
              <span className="text-gradient">Cancellation Policy</span>
            </h1>
            <p className="text-muted-foreground">Last updated: February 2026</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that plans change, and you may need to cancel an order. This policy 
                  outlines the process and conditions for cancelling orders placed on MEXAROSSA.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Cancellation Window</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-xl">
                    <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Before Shipment</p>
                      <p className="text-muted-foreground">Orders can be cancelled free of charge if the request is made before the order is shipped.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-xl">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">After Shipment</p>
                      <p className="text-muted-foreground">Once the order has been shipped, cancellation is not possible. You may refuse delivery or initiate a return after receiving the product.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">How to Cancel an Order</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Option 1 - Contact Support:</strong> Call our 
                    customer service at +91 {storeInfo.phone} or email us at{' '}
                    <a href={`mailto:${storeInfo.email}`} className="text-primary hover:underline">
                      {storeInfo.email}
                    </a>{' '}
                    with your order number and request cancellation.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Option 2 - WhatsApp:</strong> Send us a 
                    message on WhatsApp at +91 {storeInfo.phone} with your order details for quick 
                    assistance.
                  </p>
                </div>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Cancellation by MEXAROSSA</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to cancel orders in the following circumstances:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Product is out of stock or discontinued</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Pricing or product information errors on our website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Suspected fraudulent or unauthorized transactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Unable to verify customer information or delivery address</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Force majeure events beyond our control</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  In case we cancel your order, you will be notified immediately, and a full refund 
                  will be processed within 5-7 business days.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Partial Cancellation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you wish to cancel only some items from a multi-item order, please contact us 
                  as soon as possible. Partial cancellations are subject to the shipping status of 
                  individual items. If items have already been packed together, partial cancellation 
                  may not be possible.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Refund for Cancelled Orders</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    For orders cancelled before shipment, you will receive a full refund including 
                    any shipping charges paid.
                  </p>
                  <p className="leading-relaxed">
                    Refunds will be processed to your original payment method within 5-7 business days. 
                    Depending on your bank, it may take an additional 5-10 days for the amount to 
                    reflect in your account.
                  </p>
                </div>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Cash on Delivery (COD) Orders</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For COD orders, cancellation can be done anytime before delivery. Simply refuse 
                  the delivery, and the order will be automatically cancelled. No charges will be 
                  applicable for refused COD deliveries.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Special Circumstances</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Pre-Order Items:</strong> Pre-order items can 
                    be cancelled anytime before the estimated shipping date for a full refund.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Sale Items:</strong> Items purchased during 
                    promotional sales follow the same cancellation policy as regular items.
                  </p>
                </div>
              </section>

              <section className="bg-gradient-brand-subtle rounded-2xl p-8 border border-primary/20">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Need Assistance?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For any questions about cancelling your order or this policy, please reach out:
                </p>
                <div className="space-y-2 text-foreground">
                  <p><strong>Email:</strong> {storeInfo.email}</p>
                  <p><strong>Phone:</strong> +91 {storeInfo.phone}</p>
                  <p><strong>Hours:</strong> Monday - Saturday, 10:00 AM - 7:00 PM IST</p>
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
