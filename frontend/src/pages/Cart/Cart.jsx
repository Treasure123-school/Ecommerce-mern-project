import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  return (
    <div className="min-h-dvh bg-surface-muted">
      <Header />
      <Footer />
    </div>
  );
};

export default Cart;
