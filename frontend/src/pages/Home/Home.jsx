import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import PromoBanner from "@/features/promotions/components/PromoBanner";
import CategorySection from "@/features/categories/components/CategorySection";
import FeaturedProducts from "@/features/products/components/FeaturedProducts";
import { Divider } from "@/components/ui";

const Home = () => {
  return (
    <div>
      <Header />
      <PromoBanner />
      <Divider />
      <CategorySection />
      <Divider />
      <FeaturedProducts />
      <Footer />
    </div>
  )
}

export default Home