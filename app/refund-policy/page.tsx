import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { storeInfo } from '@/lib/store-data';

export const metadata = {
  title: 'Refund Policy | MEXAROSSA',
  description: 'Read our refund policy to understand how returns and refunds are processed at MEXAROSSA.',
};

export default function RefundPolicyPage() {
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
              <span className="text-gradient">Refund Policy</span>
            </h1>
            <p className="text-muted-foreground">Last updated: February 2026</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At MEXAROSSA, customer satisfaction is our priority. We want you to be completely 
                  happy with your purchase. If you are not satisfied, we offer a hassle-free refund 
                  policy to ensure your shopping experience is risk-free.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Eligibility for Refunds</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To be eligible for a refund, your item must meet the following criteria:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>The item must be unused and in the same condition that you received it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>The item must be in its original packaging with all tags attached</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>You must have the receipt or proof of purchase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>The refund request must be made within 7 days of delivery</span>
                  </li>
                </ul>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Non-Refundable Items</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Certain items cannot be refunded for hygiene and safety reasons:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Beauty and personal care products that have been opened or used</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Intimate apparel and undergarments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Gift cards and downloadable products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Products on final sale or marked as non-returnable</span>
                  </li>
                </ul>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Refund Process</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Step 1:</strong> Contact our customer support team at{' '}
                    <a href={`mailto:${storeInfo.email}`} className="text-primary hover:underline">
                      {storeInfo.email}
                    </a>{' '}
                    or call us at +91 {storeInfo.phone} with your order details.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Step 2:</strong> Once your return request is approved, 
                    you will receive instructions on how to ship the item back.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Step 3:</strong> Ship the item to our return address. 
                    Shipping costs for returns are the responsibility of the customer unless the item was 
                    defective or incorrect.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Step 4:</strong> Once we receive and inspect the item, 
                    we will process your refund within 5-7 business days.
                  </p>
                </div>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Refund Timeline</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Refunds will be credited to your original payment method. Please note that it may take 
                  an additional 5-10 business days for the refund to reflect in your account, depending 
                  on your bank or payment provider.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Damaged or Defective Items</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you receive a damaged or defective item, please contact us immediately with photos 
                  of the damage. We will arrange for a free return pickup and either replace the item or 
                  issue a full refund, including shipping charges.
                </p>
              </section>

              <section className="bg-gradient-brand-subtle rounded-2xl p-8 border border-primary/20">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Need Help?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about our refund policy, please do not hesitate to contact us:
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
