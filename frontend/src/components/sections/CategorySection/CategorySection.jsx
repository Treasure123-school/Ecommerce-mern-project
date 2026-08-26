import { categories } from "@/constants/categories";
import { Scroller } from "@/components/ui";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <section className="mx-auto mt-4 mb-16 w-[min(100%-1rem,1280px)]">
      <Scroller>
        {categories.map(category => (
          <CategoryCard 
            image={category.image}
            alt={category.alt}
          />
        ))}
      </Scroller>
    </section>
  )
}

export default CategorySection