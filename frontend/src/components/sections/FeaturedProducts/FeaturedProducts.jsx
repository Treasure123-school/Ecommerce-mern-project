import SectionHeader from
  "@/components/sections/SectionHeader/SectionHeader";
import FeaturedProductsCard from "./FeaturedProductsCard";
import { products } from "@/constants";
import { Scroller } from "@/components/ui";

const FeaturedProducts = () => {
  return (
    <section className="bg-background w-[min(100%-1rem,1280px)]
      mx-auto mb-8">
      <div>
        <SectionHeader
          title="Featured Products"
          subTitle="Explore what’s trending."
        />

        <Scroller>
          {products.map(product => (
            <FeaturedProductsCard
              key={product.name}
              image={product.image}
              alt={product.alt}
              name={product.name}
              price={product.price}
            />
          ))}
        </Scroller>
      </div>
    </section>
  )
}

export default FeaturedProducts