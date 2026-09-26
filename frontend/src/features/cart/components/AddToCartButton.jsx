import { Button } from "@/components/ui"

const AddToCartButton = ({ product, cart, addToCart, updateCartQuantity }) => {
  const quantity = cart.find((item) => item.id === product.id)?.quantity ?? 0;

  const handleAddToCart = () => {
    addToCart(product);
  }

  const increaseQuantity = () => {
    updateCartQuantity(product.id, quantity + 1);
  }

  const decreaseQuantity = () => {
    updateCartQuantity(product.id, quantity - 1);
  }


  if (quantity === 0) {
    return (
      <Button
        className="text-sm py-2"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    )
  }

  return (
    <div className="flex items-center justify-between font-bold mx-3 px-3 py-1.5 rounded-full bg-primary text-white"
    >
      <button type="button" onClick={decreaseQuantity} aria-label={`Decrease ${product.name} quantity`}>
        -
      </button>
        {quantity}
      <button type="button" onClick={increaseQuantity} aria-label={`Increase ${product.name} quantity`}>
        +
      </button>
    </div>


  )
}

export default AddToCartButton