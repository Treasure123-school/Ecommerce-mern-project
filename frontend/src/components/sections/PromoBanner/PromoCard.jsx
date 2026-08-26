
const PromoCard = ({
  image,
  alt,
  eyebrow,
  title,
  description
}) => {
  return (
    <article className="relative isolate shrink-0 w-[min(78vw,640px)]
      aspect-video overflow-hidden rounded-3xl snap-start">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      <div className="absolute inset-0 -z-10 bg-linear-to-r 
        from-[rgb(117_42_0/0.88)] to-[rgb(117_42_0/0.22)]" />

      <div className="flex flex-col w-[min(75%,330px)] h-full 
        justify-center px-8 text-white">

        <p className="text-sm text-accent-light uppercase 
          leading-[2.59]">
          {eyebrow}
        </p>

        <h2 className="font-heading text-[clamp(1.35rem,3vw,2.3rem)] 
          leading-[1.08]">
          {title}
        </h2>
        <p className="leading-[1.45] mt-1 text-[0.95rem] tracking-tight">
          {description}
        </p>
      </div>
    </article>
  )
}

export default PromoCard