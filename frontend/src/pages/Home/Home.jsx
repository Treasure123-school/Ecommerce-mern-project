import Header from "@/components/sections/Header/Header";
import PromoBanner from "@/components/sections/PromoBanner/PromoBanner";
import CategorySection from 
  "@/components/sections/CategorySection/CategorySection";
import FeaturedProduct from 
  "@/components/sections/FeaturedProducts/FeaturedProducts";
import Footer from "@/components/sections/Footer/Footer";
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