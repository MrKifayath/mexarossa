'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping typically takes 5-7 business days. Express shipping is available and takes 2-3 business days. Delivery times may vary based on your location and product availability.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Currently, we only ship within India. We are working on expanding our shipping to international locations in the near future.',
      },
      {
        q: 'How can I track my order?',
        a: 'Once your order ships, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier\'s website.',
      },
      {
        q: 'What are the shipping charges?',
        a: 'We offer free shipping on orders above ₹999. For orders below this amount, a flat shipping fee of ₹99 applies.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 7 days of delivery for most products. Items must be unused, in original packaging, and with all tags attached. Some products like personal care items and intimate wear are non-returnable for hygiene reasons.',
      },
      {
        q: 'How do I initiate a return?',
        a: 'To initiate a return, please contact our customer service team with your order number and reason for return. We will provide you with return instructions and a return shipping label if applicable.',
      },
      {
        q: 'When will I receive my refund?',
        a: 'Refunds are processed within 5-7 business days after we receive and inspect the returned item. The refund will be credited to your original payment method.',
      },
      {
        q: 'Can I exchange an item?',
        a: 'Yes, we offer exchanges for size or color variations. Please contact our customer service team to arrange an exchange.',
      },
    ],
  },
  {
    category: 'Payment & Security',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, UPI, net banking, and popular digital wallets like Paytm, PhonePe, and Google Pay.',
      },
      {
        q: 'Is my payment information secure?',
        a: 'Yes, we use industry-standard SSL encryption to protect your payment information. We do not store your complete card details on our servers. All transactions are processed through secure payment gateways.',
      },
      {
        q: 'Can I pay cash on delivery?',
        a: 'Cash on Delivery (COD) is available for orders up to ₹50,000. A nominal COD fee of ₹50 applies to all COD orders.',
      },
      {
        q: 'Do you offer EMI options?',
        a: 'Yes, we offer EMI options on orders above ₹3,000 through select credit cards and payment partners. EMI options are displayed at checkout.',
      },
    ],
  },
  {
    category: 'Products & Availability',
    questions: [
      {
        q: 'Are all products genuine?',
        a: 'Yes, we guarantee 100% authentic products. All items are sourced directly from authorized distributors and manufacturers.',
      },
      {
        q: 'What if an item is out of stock?',
        a: 'If an item is out of stock, you can sign up for email notifications to be alerted when it becomes available again. We regularly restock popular items.',
      },
      {
        q: 'Do you offer warranty on products?',
        a: 'Yes, most electronic items come with manufacturer warranty. Warranty details are mentioned on the product page. Please retain your invoice for warranty claims.',
      },
      {
        q: 'Can I cancel my order?',
        a: 'You can cancel your order before it ships. Once shipped, you will need to refuse delivery or initiate a return after receiving the product.',
      },
    ],
  },
  {
    category: 'Account & Support',
    questions: [
      {
        q: 'Do I need an account to place an order?',
        a: 'No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, and enjoy faster checkout.',
      },
      {
        q: 'How do I reset my password?',
        a: 'Click on "Forgot Password" on the login page and enter your registered email. You will receive a password reset link.',
      },
      {
        q: 'How can I contact customer support?',
        a: 'You can reach us via email at support@mexarossa.com or call us at +91 98363 90779. Our support team is available Monday to Saturday, 9 AM to 6 PM IST.',
      },
      {
        q: 'Can I modify my order after placing it?',
        a: 'Order modifications are possible only before the order is shipped. Please contact our customer service team immediately if you need to make changes.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-brand mb-6">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Find answers to common questions about our products and services
              </p>

              {/* Search */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-8">
              {filteredFaqs.map((category, categoryIndex) => (
                <div key={category.category} className="bg-card rounded-2xl p-6 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 text-gradient">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const key = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openIndex === key;

                      return (
                        <div
                          key={questionIndex}
                          className="border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50"
                        >
                          <button
                            onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                          >
                            <span className="font-semibold pr-4">{faq.q}</span>
                            <ChevronDown
                              className={cn(
                                'h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300',
                                isOpen && 'rotate-180'
                              )}
                            />
                          </button>
                          <div
                            className={cn(
                              'overflow-hidden transition-all duration-300',
                              isOpen ? 'max-h-96' : 'max-h-0'
                            )}
                          >
                            <div className="p-4 pt-0 text-muted-foreground leading-relaxed">
                              {faq.a}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="mt-12 bg-gradient-brand/10 rounded-2xl p-8 text-center border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our customer support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@mexarossa.com"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-brand text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Email Us
                </a>
                <a
                  href="tel:+919836390779"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
