import { searchIcon, cartIcon } from "@/assets/icons";
import { Button } from "@/components/ui";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flex lg:flex-1 items-center">
      <ul className="flex flex-1 justify-center gap-20 max-lg:hidden
        text-text-muted">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="hover:text-primary"
            >
              {item.label}              
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <img src={searchIcon} alt="searchIcon" className="w-6 h-6" />

        <div className="relative">
          <img src={cartIcon} alt="cartIcon" className="w-6 h-6" />
          <span className="flex justify-center items-center text-xs
            text-white absolute w-4 h-4 -top-1 -right-1 
            rounded-full bg-primary border border-background">0</span>
        </div>
        <Button>Sign in</Button>
      </div>
    </nav>
  )
}

export default Navbar