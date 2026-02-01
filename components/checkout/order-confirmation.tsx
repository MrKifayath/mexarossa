'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Package, MapPin, CreditCard, Download, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';

interface OrderConfirmationProps {
  orderId: string;
  shippingData: any;
  paymentData: any;
}

export function OrderConfirmation({ orderId, shippingData, paymentData }: OrderConfirmationProps) {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();

  useEffect(() => {
    // Clear cart after successful order
    const timer = setTimeout(() => {
      clearCart();
    }, 1000);

    return () => clearTimeout(timer);
  }, [clearCart]);

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Success Message */}
      <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6 animate-in zoom-in duration-500">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">
          Order Placed Successfully!
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted">
          <span className="text-sm text-muted-foreground">Order ID:</span>
          <span className="font-mono font-bold text-gradient">{orderId}</span>
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-muted/50 border border-border">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Package className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Estimated Delivery:</span>
            <span className="font-semibold">
              {estimatedDelivery.toLocaleDateString('en-IN', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Order Details */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Shipping Information */}
        <div className="bg-card rounded-3xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold">Shipping Address</h3>
          </div>
          <div className="text-sm space-y-1 text-muted-foreground">
            <p className="font-semibold text-foreground">{shippingData.fullName}</p>
            <p>{shippingData.address}</p>
            {shippingData.landmark && <p>Landmark: {shippingData.landmark}</p>}
            <p>{shippingData.city}, {shippingData.state} - {shippingData.pincode}</p>
            <p className="pt-2">Phone: {shippingData.phone}</p>
            <p>Email: {shippingData.email}</p>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-card rounded-3xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-secondary" />
            </div>
            <h3 className="font-bold">Payment Method</h3>
          </div>
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Method:</span>
              <span className="font-semibold capitalize">
                {paymentData.method === 'card' ? 'Credit/Debit Card' : 
                 paymentData.method === 'upi' ? 'UPI' :
                 paymentData.method === 'netbanking' ? 'Net Banking' :
                 'Cash on Delivery'}
              </span>
            </div>
            {paymentData.method === 'card' && paymentData.cardNumber && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Card:</span>
                <span className="font-mono">**** **** **** {paymentData.cardNumber.slice(-4)}</span>
              </div>
            )}
            {paymentData.method === 'upi' && paymentData.upiId && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">UPI ID:</span>
                <span className="font-mono">{paymentData.upiId}</span>
              </div>
            )}
            {paymentData.method === 'netbanking' && paymentData.bank && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Bank:</span>
                <span>{paymentData.bank}</span>
              </div>
            )}
            <div className="pt-2 border-t border-border">
              <div className="flex justify-between font-bold">
                <span>Total Paid:</span>
                <span className="text-gradient">
                  ₹{Math.round(totalPrice * 1.18).toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-card rounded-3xl p-6 shadow-lg mb-8">
        <h3 className="font-bold mb-4">Order Items ({items.length})</h3>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-3 rounded-xl bg-muted/50">
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
              </div>
              <p className="font-bold">
                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-border space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal:</span>
            <span>₹{totalPrice.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping:</span>
            <span className="text-green-600 font-semibold">FREE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax (18% GST):</span>
            <span>₹{Math.round(totalPrice * 0.18).toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
            <span>Total:</span>
            <span className="text-gradient">
              ₹{Math.round(totalPrice * 1.18).toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          variant="outline"
          className="flex-1 rounded-full"
          onClick={() => window.print()}
        >
          <Download className="mr-2 h-5 w-5" />
          Download Invoice
        </Button>
        <Button
          size="lg"
          className="flex-1 bg-gradient-brand text-white rounded-full font-semibold shadow-xl hover:opacity-90"
          onClick={() => router.push('/')}
        >
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Button>
      </div>

      {/* Email Confirmation Notice */}
      <div className="mt-8 p-6 rounded-2xl bg-muted/50 border border-border text-center">
        <p className="text-sm text-muted-foreground">
          A confirmation email has been sent to <span className="font-semibold text-foreground">{shippingData.email}</span>
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          You can track your order status using the order ID provided above.
        </p>
      </div>
    </div>
  );
}
