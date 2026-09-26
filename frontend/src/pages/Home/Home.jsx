import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import PromoBanner from "@/features/promotions/components/PromoBanner";
import CategorySection from "@/features/categories/components/CategorySection";
import FeaturedProducts from "@/features/products/components/FeaturedProducts";
import { Divider } from "@/components/ui";

const Home = ({ cart, addToCart }) => {
  return (
    <div>
      <Header />
      <PromoBanner />
      <Divider />
      <CategorySection />
      <Divider />
      <FeaturedProducts cart={cart} addToCart={addToCart} />
      <Footer />
    </div>
  )
}

export default Home