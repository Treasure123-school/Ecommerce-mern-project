import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import PromoBanner from "@/features/promotions/components/PromoBanner";
import CategorySection from "@/features/categories/components/CategorySection";
import FeaturedProducts from "@/features/products/components/FeaturedProducts";
import { Divider } from "@/components/ui";

const Home = ({ cart, cartCount, addToCart, updateCartQuantity }) => {
  return (
    <div className="bg-surface-muted">
      <Header cartCount={cartCount} />
      <main id="home">
      <PromoBanner />
      <Divider />
      <CategorySection />
      <Divider />
      <FeaturedProducts cart={cart} addToCart={addToCart} updateCartQuantity={updateCartQuantity} />
      </main>
      <Footer />
    </div>
  )
}

export default Home