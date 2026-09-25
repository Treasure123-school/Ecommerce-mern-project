import { categories } from "@/constants/categories";
import { Scroller } from "@/components/ui";
import SectionHeader from "@/components/ui/SectionHeader";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <section className="w-[min(100%-1rem,1280px)] mx-auto my-8">
      <SectionHeader 
        title="Categories"
        subTitle="Explore our food collections"
      />
      
      <Scroller>
        {categories.map(category => (
          <CategoryCard 
            key={category.id}
            image={category.image}
            alt={category.alt}
            categoryName={category.name}
          />
        ))}
      </Scroller>
    </section>
  )
}

export default CategorySection