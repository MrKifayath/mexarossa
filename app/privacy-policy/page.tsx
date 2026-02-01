import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-brand mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At MEXAROSSA, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  or make a purchase from us.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Name and contact information (email address, phone number, shipping address)</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Order history and preferences</li>
                  <li>Account credentials if you create an account</li>
                  <li>Communications with our customer service team</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders and account</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Detect and prevent fraud or unauthorized activities</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, shipping companies, etc.)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                  or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, 
                  and understand where our visitors are coming from. You can control cookies through your browser settings, 
                  but disabling cookies may affect your ability to use certain features of our website.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is not intended for children under the age of 13. We do not knowingly collect personal information 
                  from children under 13. If you believe we have collected information from a child under 13, please contact us 
                  immediately.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy 
                  Policy periodically.
                </p>
              </div>

              <div className="bg-gradient-brand/10 rounded-2xl p-8 border-2 border-primary/20">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> support@mexarossa.com</p>
                  <p><strong>Phone:</strong> +91 98363 90779</p>
                  <p><strong>Address:</strong> 3rd Floor, Flat 2-1-305, Venkataraman Apartment, Vidyanagar Nallakunta Main Road, Hyderabad, Telangana, 500044</p>
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
