import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { ProductsSection } from '@/components/products-section';
import { CategoriesSection } from '@/components/categories-section';
import { NewsletterSection } from '@/components/newsletter-section';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <CategoriesSection />
        <NewsletterSection />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
