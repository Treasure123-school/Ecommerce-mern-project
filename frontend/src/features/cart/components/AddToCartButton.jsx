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
        onClick={() => console.log("Add to Cart clicked")}
      >
        Add to Cart
      </Button>
    )
  }
}

export default AddToCartButton