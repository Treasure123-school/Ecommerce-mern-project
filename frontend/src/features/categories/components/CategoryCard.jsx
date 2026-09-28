const CategoryCard = ({
  image,
  alt,
  categoryName
}) => {
  return (
    <article className="flex shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-background p-2">
      <img
        src={image}
        alt={alt}
        className="aspect-square w-full rounded-xl object-cover"
      />
      <h2 className="pt-2 text-center text-sm font-bold hover:text-orange">
        {categoryName}
      </h2>
    </article>
  )
}

export default CategoryCard