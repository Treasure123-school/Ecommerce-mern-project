const CategoryCard = ({
  image,
  alt,
  categoryName
}) => {
  return (
    <article className="flex flex-col shrink-0 
      w-[min(50vw,150px)] min-h-[150px] overflow-hidden rounded-3xl
      snap-start p-2 bg-white border border-[#ebebeb]">
      <img
        src={image}
        alt={alt}
        className="w-full rounded-3xl object-cover mb-1.5"
      />
      <h2 className="hover:text-primary text-center 
        text-[clamp(0.87rem,1vw,3rem)] font-bold">
        {categoryName}
      </h2>
    </article>
  )
}

export default CategoryCard