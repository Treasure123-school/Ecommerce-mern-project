import Logo from "./Logo";
import Navbar from "./Nav";

const Header = ({ cartCount = 0 }) => {
  return (
    <header className="max-container flex w-full items-center justify-between gap-4 py-2 sm:py-3">
      <Logo />
      <Navbar cartCount={cartCount} />
    </header>
  )
}

export default Header