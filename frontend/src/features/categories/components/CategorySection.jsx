import { categories } from "@/constants/categories";
import { Scroller } from "@/components/ui";
import SectionHeader from "@/components/ui/SectionHeader";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <section id="categories" className="max-container my-8 sm:my-12">
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