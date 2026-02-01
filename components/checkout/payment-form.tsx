'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, CreditCard, Smartphone, Building2, Wallet, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/lib/cart-context';
import { cn } from '@/lib/utils';

interface PaymentFormProps {
  onSubmit: (data: any) => void;
  onBack: () => void;
  shippingData: any;
}

type PaymentMethod = 'card' | 'upi' | 'netbanking' | 'cod';

export function PaymentForm({ onSubmit, onBack, shippingData }: PaymentFormProps) {
  const { totalPrice, totalItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  const paymentMethods = [
    { id: 'card' as PaymentMethod, name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'upi' as PaymentMethod, name: 'UPI', icon: Smartphone },
    { id: 'netbanking' as PaymentMethod, name: 'Net Banking', icon: Building2 },
    { id: 'cod' as PaymentMethod, name: 'Cash on Delivery', icon: Wallet },
  ];

  const banks = [
    'State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank',
    'Kotak Mahindra Bank', 'Punjab National Bank', 'Bank of Baroda', 'Canara Bank'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const paymentData = {
      method: paymentMethod,
      ...(paymentMethod === 'card' && cardData),
      ...(paymentMethod === 'upi' && { upiId }),
      ...(paymentMethod === 'netbanking' && { bank: selectedBank }),
    };

    onSubmit(paymentData);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Payment Form */}
      <div className="lg:col-span-2 space-y-6">
        {/* Payment Method Selection */}
        <div className="bg-card rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-2xl bg-gradient-brand flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Payment Method</h2>
              <p className="text-sm text-muted-foreground">Choose your preferred payment option</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={cn(
                    'relative p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105',
                    paymentMethod === method.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  )}
                >
                  {paymentMethod === method.id && (
                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-brand flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <Icon className={cn(
                    'h-8 w-8 mx-auto mb-2',
                    paymentMethod === method.id ? 'text-primary' : 'text-muted-foreground'
                  )} />
                  <p className={cn(
                    'text-xs font-medium text-center',
                    paymentMethod === method.id ? 'text-foreground' : 'text-muted-foreground'
                  )}>
                    {method.name}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Payment Details Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Card Payment */}
            {paymentMethod === 'card' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    value={cardData.cardNumber}
                    onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    value={cardData.cardName}
                    onChange={(e) => setCardData({ ...cardData, cardName: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      value={cardData.expiryDate}
                      onChange={(e) => setCardData({ ...cardData, expiryDate: e.target.value })}
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      value={cardData.cvv}
                      onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                      placeholder="123"
                      maxLength={3}
                      type="password"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* UPI Payment */}
            {paymentMethod === 'upi' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <Label htmlFor="upiId">UPI ID</Label>
                  <Input
                    id="upiId"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@upi"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter your UPI ID (e.g., 9876543210@paytm, username@oksbi)
                  </p>
                </div>
              </div>
            )}

            {/* Net Banking */}
            {paymentMethod === 'netbanking' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <Label>Select Your Bank</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {banks.map((bank) => (
                      <button
                        key={bank}
                        type="button"
                        onClick={() => setSelectedBank(bank)}
                        className={cn(
                          'p-3 rounded-xl border-2 text-sm transition-all',
                          selectedBank === bank
                            ? 'border-primary bg-primary/5 font-semibold'
                            : 'border-border hover:border-primary/50'
                        )}
                      >
                        {bank}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Cash on Delivery */}
            {paymentMethod === 'cod' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                  <h3 className="font-semibold mb-2">Cash on Delivery</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pay with cash when your order is delivered to your doorstep.
                  </p>
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>No additional charges for COD</span>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={onBack}
                disabled={isProcessing}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back
              </Button>
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-gradient-brand text-white rounded-full font-semibold shadow-xl hover:opacity-90"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>Processing...</>
                ) : (
                  <>
                    Place Order
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Shipping Address Summary */}
        <div className="bg-card rounded-3xl p-6 shadow-lg">
          <h3 className="font-bold mb-4">Shipping Address</h3>
          <div className="text-sm space-y-1 text-muted-foreground">
            <p className="font-semibold text-foreground">{shippingData.fullName}</p>
            <p>{shippingData.address}</p>
            {shippingData.landmark && <p>Landmark: {shippingData.landmark}</p>}
            <p>{shippingData.city}, {shippingData.state} - {shippingData.pincode}</p>
            <p className="pt-2">Phone: {shippingData.phone}</p>
            <p>Email: {shippingData.email}</p>
          </div>
        </div>
      </div>

      {/* Order Summary Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-card rounded-3xl p-6 shadow-lg sticky top-24">
          <h3 className="font-bold mb-4">Order Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Items ({totalItems})</span>
              <span>₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-green-600 font-semibold">FREE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax (18% GST)</span>
              <span>₹{Math.round(totalPrice * 0.18).toLocaleString('en-IN')}</span>
            </div>
            <div className="border-t border-border pt-3">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-gradient">
                  ₹{Math.round(totalPrice * 1.18).toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <span>Your payment information is secure and encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
