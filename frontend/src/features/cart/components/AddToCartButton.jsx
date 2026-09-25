import { Button } from "@/components/ui"
import { useState } from "react";

const AddToCartButton = () => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
  }

  const increaseQuantity = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  }

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) => {
      if (currentQuantity > 0) {
        return currentQuantity - 1;
      }
    });
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
    <div className="flex items-center justify-between font-bold mx-3 px-3 py-1.5 rounded-full cursor-pointer bg-primary text-white transition-colors whitespace-nowrap"
    >
      <button onClick={decreaseQuantity}>
        -
      </button>
        {quantity}
      <button onClick={increaseQuantity}>
        +
      </button>
    </div>


  )
}

export default AddToCartButton