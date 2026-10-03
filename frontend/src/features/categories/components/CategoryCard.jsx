const CategoryCard = ({
  image,
  alt,
  categoryName
}) => {
  return (
    <article className="flex group shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-border bg-background p-3 shadow-xs hover:shadow-sm transition-all">
      <img
        src={image}
        alt={alt}
        className="aspect-square w-full rounded-xl object-cover"
      />
      <h2 className="font-heading pt-2 text-center text-sm font-bold group-hover:text-orange">
        {categoryName}
      </h2>
    </article>
  )
}

export default CategoryCard