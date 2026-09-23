import Logo from "./Logo";
import Navbar from "./Nav";

const Header = () => {
  return (
    <header className="max-container w-full padding-x py-4 
      max-sm:py-px flex justify-between items-center">
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header