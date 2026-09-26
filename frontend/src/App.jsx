import { Route, Routes } from 'react-router-dom';
import { Home, Cart, Order } from "@/pages";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      return [...prevCart, {...product, quantity: 1 }];
    });

    console.log(cart);
  };

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home cart={cart} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App