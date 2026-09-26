import SectionHeader from "@/components/ui/SectionHeader";
import FeaturedProductsCard from "./FeaturedProductsCard";
import { products } from "@/constants";
import { Scroller } from "@/components/ui";

const FeaturedProducts = ({ cart, addToCart, updateCartQuantity }) => {
  return (
    <section id="products" className="max-container mb-10 sm:mb-14">
      <div>
        <SectionHeader
          title="Featured Products"
          subTitle="Explore what’s trending."
        />

        <Scroller>
          {products.map(product => (
            <FeaturedProductsCard
              key={product.name}
              product={product}
              cart={cart}
              addToCart={addToCart}
              updateCartQuantity={updateCartQuantity}
            />
          ))}
        </Scroller>
      </div>
    </section>
  )
}

export default FeaturedProducts