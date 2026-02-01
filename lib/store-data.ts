import { getProductImage } from './get-product-image';
import productsData from '@/products.json';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  image?: string;
  badge?: string;
  rating: number;
  reviews: number;
  features?: string[];
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

// Transform products data to include images and additional fields
export const products: Product[] = productsData.slice(0, 5).map((product: any) => {
  const ratingValue = getDeterministicValue(product.id, 1) % 50;
  const reviewsValue = getDeterministicValue(product.id, 2) % 400;
  const badgeValue = getDeterministicValue(product.id, 3) % 100;

  return {
    ...product,
    image: getProductImage(product.name),
    rating: 4.5 + (ratingValue / 100),
    reviews: reviewsValue + 50,
    badge: badgeValue > 70 ? ['Best Seller', 'Trending', 'New Arrival'][badgeValue % 3] : undefined,
    features: product.category === 'electronics' 
      ? ['Fast Charging', 'Premium Quality', 'Warranty Included', 'Latest Technology']
      : product.category === 'clothing'
      ? ['Premium Fabric', 'Comfortable Fit', 'Easy Care', 'Stylish Design']
      : ['High Quality', 'Durable', 'Great Value', 'Customer Favorite'],
  };
});

export const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets & accessories',
    icon: 'Smartphone',
    color: 'from-primary to-accent',
  },
  {
    id: 'beauty',
    name: 'Beauty',
    description: 'Skincare & cosmetics',
    icon: 'Sparkles',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Trendy styles & accessories',
    icon: 'ShoppingBag',
    color: 'from-accent to-purple-500',
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    description: 'Hair, skin & body care',
    icon: 'Heart',
    color: 'from-secondary to-teal-500',
  },
];

export const storeInfo = {
  name: 'MEXAROSSA',
  phone: '98363 90779',
  address: '3rd Floor, Flat 2-1-305, Venkataraman Apartment, Vidyanagar Nallakunta Main Road, Computer Training Centre, Nalakunta, Hyderabad, Telangana, 500044',
  email: 'support@mexarossa.com',
};
