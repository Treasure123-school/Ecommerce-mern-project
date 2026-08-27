import { promotions } from "@/constants";
import { Scroller } from "@/components/ui";
import PromoCard from "./PromoCard";

const PromoBanner = () => {
  return (
    <section className="mx-auto mt-4 w-[min(100%-1rem,1280px)]">
      <Scroller>
        {promotions.map((promotion) => (
          <PromoCard 
            key={promotion.title}
            image={promotion.image}
            eyebrow={promotion.eyebrow}
            title={promotion.title}
            description={promotion.description}
          />
        ))}
      </Scroller>
    </section>
  )
}

export default PromoBanner