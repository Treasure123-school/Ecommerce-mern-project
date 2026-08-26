
const CategoryCard = ({
  image,
  alt
}) => {
  return (
    <article className="relative isolate shrink-0 w-[min(50vw,150px)]
      min-h-[150px] overflow-hidden rounded-3xl snap-start">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />
    </article>
  )
}

export default CategoryCard