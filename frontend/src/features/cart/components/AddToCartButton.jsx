import { Button } from "@/components/ui"

const AddToCartButton = ({ product, cart, addToCart }) => {
  import [ quantity, ]

  const handleAddToCart = () => {
    addToCart(product);
  }

  const increaseQuantity = (currentQuantity) => {
    setQuantity(currentQuantity + 1);
  }

  const decreaseQuantity = (currentQuantity) => {
    if (currentQuantity > 0) {
      setQuantity(currentQuantity - 1);
    }

    return 0
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
    <div className="flex items-center justify-between font-bold mx-3 px-3 py-1.5 rounded-full bg-orange text-white"
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