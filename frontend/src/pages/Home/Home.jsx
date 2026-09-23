import Header from "@/components/layout/Header/Header";
import PromoBanner from "@/components/layout/PromoBanner/PromoBanner";
import CategorySection from 
  "@/components/layout/CategorySection/CategorySection";
import FeaturedProduct from 
  "@/components/layout/FeaturedProducts/FeaturedProducts";
import Footer from "@/components/layout/Footer/Footer";
import { Divider } from "@/components/ui";

const Home = () => {
  return (
    <div>
      <Header />
      <PromoBanner />
      <Divider />
      <CategorySection />
      <Divider />
      <FeaturedProduct />
      <Footer />
    </div>
  )
}

export default Home