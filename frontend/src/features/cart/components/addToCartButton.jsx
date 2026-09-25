import { Button } from "@/components/ui"

const addToCartButton = () => {
  return (
    <Button
      onclick={() => console.log("Add to Cart clicked")}
    >
      Add to Cart
    </Button>
  )
}

export default addToCartButton