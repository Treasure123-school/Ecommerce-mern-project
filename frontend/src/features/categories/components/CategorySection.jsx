import { categories } from "@/constants/categories";
import SectionHeader from "@/components/ui/SectionHeader";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <section id="categories" className="max-container my-8 sm:my-12">
      <SectionHeader 
        title="Categories"
        subTitle="Explore our style collections"
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2">
        {categories.map(category => (
          <CategoryCard 
            key={category.id}
            image={category.image}
            alt={category.alt}
            categoryName={category.name}
          />
        ))}
      </div>

    </section>
  )
}

export default CategorySection