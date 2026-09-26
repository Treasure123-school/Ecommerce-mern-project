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

  };

  const updateCartQuantity = (productId, quantity) => {
    setCart((prevCart) => prevCart
      .map((item) => item.id === productId ? { ...item, quantity } : item)
      .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home cart={cart} cartCount={cartCount} addToCart={addToCart} updateCartQuantity={updateCartQuantity} />} />
        <Route path="/cart" element={<Cart cart={cart} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App