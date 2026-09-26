import AddToCartButton from "@/features/cart/components/AddToCartButton";

const FeaturedProductsCard = ({ cart, addToCart, updateCartQuantity, product }) => {
  return (
    <article
      className="flex w-[min(48vw,220px)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-background pb-3 sm:w-[min(28vw,250px)]"
    >
      <img src={product.image} alt={product.alt} className="mb-3 aspect-[4/3] w-full object-cover" />

      <div className="mx-4 mb-4 flex-1">
        <h2
          className="font-heading text-sm font-bold hover:text-primary sm:text-base"
        >
          {product.name}
        </h2>
        <p className="mt-1 text-sm font-semibold text-secondary">{product.price}</p>
      </div>

      <AddToCartButton
        cart={cart}
        addToCart={addToCart}
        updateCartQuantity={updateCartQuantity}
        product={product}
      />
    </article>
  );
};

export default FeaturedProductsCard;
