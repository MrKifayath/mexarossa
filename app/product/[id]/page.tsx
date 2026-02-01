'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, ShoppingBag, Heart, Share2, Truck, Shield, RotateCcw, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { cn } from '@/lib/utils';
import { getProductImage, getProductImages, FALLBACK_IMAGE } from '@/lib/get-product-image';
import productsData from '@/products.json';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  brand: string;
  category: string;
  inStock: boolean;
}

// Generate deterministic values based on product ID
function getDeterministicValue(productId: string, seed: number): number {
  let hash = 0;
  const str = productId + seed;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function ProductDetailContent({ id }: { id: string }) {
  const productData = productsData.find((p: any) => p.id === id) as Product | undefined;
  
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link href="/">Go Back Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Generate deterministic values based on product ID
  const ratingValue = getDeterministicValue(productData.id, 1) % 50;
  const reviewsValue = getDeterministicValue(productData.id, 2) % 400;
  const badgeValue = getDeterministicValue(productData.id, 3) % 100;

  // Transform to include additional fields
  const product = {
    ...productData,
    image: getProductImage(productData.name),
    rating: 4.5 + (ratingValue / 100),
    reviews: reviewsValue + 50,
    badge: badgeValue > 70 ? ['Best Seller', 'Trending', 'New Arrival'][badgeValue % 3] : undefined,
    features: productData.category === 'electronics' 
      ? ['Fast Charging', 'Premium Quality', 'Warranty Included', 'Latest Technology']
      : productData.category === 'clothing'
      ? ['Premium Fabric', 'Comfortable Fit', 'Easy Care', 'Stylish Design']
      : ['High Quality', 'Durable', 'Great Value', 'Customer Favorite'],
  };

  const productImages = getProductImages(product.name);
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product as any);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted">
                <Image
                  src={imageError ? FALLBACK_IMAGE : productImages[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
                {product.badge && (
                  <span className="absolute top-6 left-6 px-4 py-2 text-sm font-bold bg-gradient-brand text-white rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-5 gap-2">
                {productImages.slice(0, 5).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={cn(
                      'relative aspect-square rounded-lg overflow-hidden bg-muted border-2 transition-all',
                      selectedImage === idx ? 'border-primary' : 'border-transparent hover:border-muted-foreground/30'
                    )}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Category & Brand */}
              <div className="flex items-center gap-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full uppercase tracking-wider">
                  {product.category.replace('-', ' ')}
                </span>
                <span className="text-sm text-muted-foreground">
                  by <span className="font-semibold text-foreground">{product.brand}</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'h-5 w-5',
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-muted-foreground/30'
                      )}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating.toFixed(1)} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gradient">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="px-2 py-1 text-sm font-bold bg-destructive/10 text-destructive rounded">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <div className={cn(
                  'h-2 w-2 rounded-full',
                  product.inStock ? 'bg-green-500' : 'bg-red-500'
                )} />
                <span className={cn(
                  'text-sm font-medium',
                  product.inStock ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                )}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              {product.features && (
                <div className="space-y-3">
                  <h3 className="font-semibold">Key Features</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity Selector */}
              {product.inStock && (
                <div className="flex items-center gap-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center gap-3 bg-muted rounded-full p-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-full"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-full"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  className={cn(
                    'flex-1 h-14 text-lg font-semibold rounded-full shadow-xl transition-all duration-300',
                    addedToCart 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gradient-brand text-white hover:opacity-90 hover:shadow-2xl hover:-translate-y-1'
                  )}
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  {addedToCart ? (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      Added!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </>
                  )}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    'h-14 w-14 rounded-full border-2 transition-all duration-300',
                    isLiked && 'bg-primary text-primary-foreground border-primary'
                  )}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={cn('h-5 w-5', isLiked && 'fill-current')} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 w-14 rounded-full border-2 bg-transparent"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Secure Payment</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-6 w-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Easy Returns</p>
                </div>
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

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  
  return (
    <ProductDetailContent id={resolvedParams.id} />
  );
}
