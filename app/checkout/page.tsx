'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CheckoutSteps } from '@/components/checkout-steps';
import { CartReview } from '@/components/checkout/cart-review';
import { ShippingForm } from '@/components/checkout/shipping-form';
import { PaymentForm } from '@/components/checkout/payment-form';
import { OrderConfirmation } from '@/components/checkout/order-confirmation';
import { CartDrawer } from '@/components/cart-drawer';

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingData, setShippingData] = useState<any>(null);
  const [paymentData, setPaymentData] = useState<any>(null);
  const [orderId, setOrderId] = useState<string>('');

  const handleCartReviewNext = () => {
    setCurrentStep(2);
  };

  const handleShippingSubmit = (data: any) => {
    setShippingData(data);
    setCurrentStep(3);
  };

  const handlePaymentSubmit = (data: any) => {
    setPaymentData(data);
    // Generate order ID
    const newOrderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setOrderId(newOrderId);
    setCurrentStep(4);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
              Checkout
            </h1>
            <p className="text-muted-foreground">
              Complete your purchase in a few simple steps
            </p>
          </div>

          {/* Progress Steps */}
          <CheckoutSteps currentStep={currentStep} />

          {/* Step Content */}
          <div className="mt-8">
            {currentStep === 1 && (
              <CartReview onNext={handleCartReviewNext} />
            )}
            {currentStep === 2 && (
              <ShippingForm 
                onSubmit={handleShippingSubmit}
                onBack={() => setCurrentStep(1)}
              />
            )}
            {currentStep === 3 && (
              <PaymentForm 
                onSubmit={handlePaymentSubmit}
                onBack={() => setCurrentStep(2)}
                shippingData={shippingData}
              />
            )}
            {currentStep === 4 && (
              <OrderConfirmation 
                orderId={orderId}
                shippingData={shippingData}
                paymentData={paymentData}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
