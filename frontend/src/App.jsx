import { Route, Routes } from 'react-router-dom';
import { Home, Cart, Order } from "@/pages";


const App = () => {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App