import Logo from "./Logo";
import Navbar from "./Nav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-cream-soft max-container flex w-full items-center justify-between gap-4 py-6 sm:py-3">
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header