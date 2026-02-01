'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';
import { cn } from '@/lib/utils';

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-background shadow-2xl z-50 transition-transform duration-500 ease-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-bold">Your Cart</h2>
            <span className="px-2 py-0.5 text-xs font-bold bg-primary/10 text-primary rounded-full">
              {items.length}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCartOpen(false)}
            className="hover:bg-destructive/10 hover:text-destructive"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">
                Add some products to get started
              </p>
              <Button 
                onClick={() => setIsCartOpen(false)}
                className="bg-gradient-brand text-white hover:opacity-90 rounded-full"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-card rounded-xl border border-border group hover:border-primary/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link 
                      href={`/product/${item.id}`}
                      className="font-semibold text-sm line-clamp-1 hover:text-primary transition-colors"
                      onClick={() => setIsCartOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <p className="text-primary font-bold mt-1">
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium text-sm">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 text-destructive hover:bg-destructive/10 transition-all duration-300"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-2xl font-bold text-gradient">
                ₹{totalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping and taxes calculated at checkout
            </p>

            {/* Actions */}
            <div className="space-y-3">
              <Button
                className="w-full bg-gradient-brand text-white hover:opacity-90 h-12 rounded-full font-semibold shadow-lg"
                asChild
              >
                <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                  Proceed to Checkout
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 rounded-full bg-transparent"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
