import { Button } from "@/components/ui"

const FeaturedProductsCard = ({
  image,
  alt,
  name,
  price
}) => {
  return (
    <article className="flex flex-col shrink-0 
      w-[min(50vw,150px)] min-h-[150px] overflow-hidden rounded-3xl
      snap-start bg-white border border-[#ebebeb] pb-3">
      <img
        src={image}
        alt={alt}
        className="w-full object-cover mb-1.5"
      />

      <div className="ml-4">
        <h2 className="hover:text-primary text-[clamp(0.87rem,1vw,3rem)] 
        font-bold">
          {name}
        </h2>
        <p>{price}</p>
      </div>

      <Button>Add to Cart</Button>
    </article>
  )
}

export default FeaturedProductsCard