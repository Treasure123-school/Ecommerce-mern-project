import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { cartIcon, minusIcon, plusIcon, trashIcon, truckFastIcon } from "@/assets/icons";
import { Link } from "react-router-dom";

const Cart = ({ cart, updateCartQuantity, removeFromCart }) => {
  const subtotal = cart.reduce((total, item) => {
    const price = Number(String(item.price).replace(/[^0-9.]/g, ""));
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="min-h-dvh bg-surface-muted">
      <Header />
      <main className="max-container min-h-[55dvh] py-8 sm:py-12">
        <div className="mb-8 border-b border-border pb-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-secondary">Fresh picks, ready when you are</p>
          <h1 className="font-heading text-3xl font-bold text-text sm:text-4xl">Your cart</h1>
          <p className="mt-2 text-sm text-text-muted">{cart.length} {cart.length === 1 ? "item" : "items"} selected</p>
        </div>

        {cart.length === 0 ? (
          <section className="mx-auto flex max-w-lg flex-col items-center py-12 text-center sm:py-16">
            <span className="mb-5 flex size-16 items-center justify-center rounded-full bg-white shadow-card">
              <img src={cartIcon} alt="" className="size-7" />
            </span>
            <h2 className="font-heading text-2xl font-bold">Your cart is empty</h2>
            <p className="mt-2 max-w-sm text-text-muted">Browse our fresh selections and add something delicious to get started.</p>
            <Link to="/" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 font-bold text-white transition-colors hover:bg-primary-dark">
              Explore products
            </Link>
          </section>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <section aria-label="Cart items" className="divide-y divide-border border-y border-border bg-background px-4 sm:px-6">
              {cart.map((item) => (
                <article key={item.id} className="flex gap-4 py-5 sm:gap-6">
                  <img className="size-24 shrink-0 rounded-xl bg-white object-cover sm:size-32" src={item.image} alt={item.alt || item.name} />
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="min-w-0">
                      <h2 className="truncate font-heading text-lg font-bold">{item.name}</h2>
                      <p className="mt-1 text-sm text-text-muted">{item.price} each</p>
                      <button type="button" onClick={() => removeFromCart(item.id)} className="mt-3 inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-danger" aria-label={`Remove ${item.name} from cart`}>
                        <img src={trashIcon} alt="" className="size-4" /> Remove
                      </button>
                    </div>
                    <div className="flex items-center justify-between gap-5 sm:justify-end">
                      <div className="flex h-10 items-center gap-3 rounded-full border border-border bg-white px-2">
                        <button type="button" onClick={() => updateCartQuantity(item.id, item.quantity - 1)} className="flex size-8 items-center justify-center rounded-full hover:bg-surface-muted" aria-label={`Decrease ${item.name} quantity`}>
                          <img src={minusIcon} alt="" className="size-4" />
                        </button>
                        <span className="min-w-5 text-center font-bold" aria-live="polite">{item.quantity}</span>
                        <button type="button" onClick={() => updateCartQuantity(item.id, item.quantity + 1)} className="flex size-8 items-center justify-center rounded-full hover:bg-surface-muted" aria-label={`Increase ${item.name} quantity`}>
                          <img src={plusIcon} alt="" className="size-4" />
                        </button>
                      </div>
                      <p className="w-24 text-right font-bold">${(Number(String(item.price).replace(/[^0-9.]/g, "")) * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <aside className="border border-border bg-background p-5 sm:p-6 lg:sticky lg:top-6">
              <h2 className="font-heading text-xl font-bold">Order summary</h2>
              <div className="mt-5 flex justify-between text-sm text-text-muted"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="mt-3 flex justify-between text-sm text-text-muted"><span>Delivery</span><span className="font-semibold text-secondary">Calculated at checkout</span></div>
              <div className="my-5 border-t border-border" />
              <div className="flex justify-between text-lg font-bold"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
              <Link to="/order" className="mt-6 flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-5 font-bold text-white transition-colors hover:bg-primary-dark">
                Continue to checkout
              </Link>
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-text-muted">
                <img src={truckFastIcon} alt="" className="size-4" /> Fresh delivery, handled with care
              </p>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
