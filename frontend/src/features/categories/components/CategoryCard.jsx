const CategoryCard = ({
  image,
  alt,
  categoryName
}) => {
  return (
    <article className="flex w-[min(42vw,200px)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-background p-2 sm:w-[min(28vw,230px)]">
      <img
        src={image}
        alt={alt}
        className="mb-3 aspect-square w-full rounded-xl object-cover"
      />
      <h2 className="pb-2 text-center text-sm font-bold hover:text-primary sm:text-base">
        {categoryName}
      </h2>
    </article>
  )
}

export default CategoryCard