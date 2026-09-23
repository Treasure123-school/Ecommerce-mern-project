import { categories } from "@/constants/categories";
import { Scroller } from "@/components/ui";
import CategoryCard from "./CategoryCard";
import SectionHeader from 
  "@/components/layout/SectionHeader/SectionHeader";

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