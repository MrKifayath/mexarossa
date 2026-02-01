'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';
import { getProductImage, FALLBACK_IMAGE } from '@/lib/get-product-image';
import { cn } from '@/lib/utils';

interface CartReviewProps {
  onNext: () => void;
}

export function CartReview({ onNext }: CartReviewProps) {
  const router = useRouter();
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-card rounded-3xl p-12 text-center shadow-lg">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">
          Add some products to your cart to continue shopping
        </p>
        <Button 
          size="lg"
          className="bg-gradient-brand text-white rounded-full"
          onClick={() => router.push('/products')}
        >
          Browse Products
        </Button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        <div className="bg-card rounded-3xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Cart Items ({totalItems})</h2>
          
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
              >
                {/* Image */}
                <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-background flex-shrink-0">
                  <Image
                    src={item.image || getProductImage(item.name)}
                    alt={item.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                    }}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg line-clamp-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {item.brand} • {item.category.replace('-', ' ')}
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-2 bg-background rounded-full p-1">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <span className="text-lg font-bold text-gradient">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Remove Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-10 w-10 rounded-full text-destructive hover:bg-destructive/10"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-card rounded-3xl p-6 shadow-lg sticky top-24">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal ({totalItems} items)</span>
              <span>₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Shipping</span>
              <span className="text-green-600 font-semibold">FREE</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Tax (18% GST)</span>
              <span>₹{Math.round(totalPrice * 0.18).toLocaleString('en-IN')}</span>
            </div>
            <div className="border-t border-border pt-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-gradient">
                  ₹{Math.round(totalPrice * 1.18).toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full bg-gradient-brand text-white rounded-full font-semibold shadow-xl hover:opacity-90"
            onClick={onNext}
          >
            Proceed to Shipping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full mt-3 rounded-full"
            onClick={() => router.push('/products')}
          >
            Continue Shopping
          </Button>

          {/* Trust Badges */}
          <div className="mt-6 pt-6 border-t border-border space-y-3">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Free Shipping on All Orders</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Easy Returns within 30 Days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
