import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import PromoBanner from "@/features/promotions/components/PromoBanner";
import CategorySection from "@/features/categories/components/CategorySection";
import FeaturedProducts from "@/features/products/components/FeaturedProducts";

const Home = ({ cart, cartCount, addToCart }) => {
  return (
    <div >
      <Header cartCount={cartCount} />
      <main id="home">
      <PromoBanner />
      <CategorySection />
      <FeaturedProducts cart={cart} addToCart={addToCart} />
      </main>
      <Footer />
    </div>
  )
}

export default Home