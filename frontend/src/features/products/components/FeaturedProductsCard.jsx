import AddToCartButton from "@/features/cart/components/AddToCartButton";

const FeaturedProductsCard = ({ cart, addToCart, product }) => {
  return (
    <article
      className="flex flex-col shrink-0 
      w-[min(50vw,150px)] min-h-[150px] overflow-hidden rounded-3xl
      snap-start bg-white border border-[#ebebeb] pb-3"
    >
      <img src={product.image} alt={product.alt} className="w-full object-cover mb-1.5" />

      <div className="ml-4">
        <h2
          className="hover:text-primary text-[clamp(0.87rem,1vw,3rem)] 
          font-bold"
        >
          {product.name}
        </h2>
        <p>{product.price}</p>
      </div>

      <AddToCartButton
        cart={cart}
        addToCart={addToCart}
        product={product}
      />
    </article>
  );
};

export default FeaturedProductsCard;
