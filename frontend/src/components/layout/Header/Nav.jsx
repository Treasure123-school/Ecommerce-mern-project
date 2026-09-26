import { searchIcon, cartIcon } from "@/assets/icons";
import { Button } from "@/components/ui";
import { navLinks } from "@/constants";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount = 0 }) => {
  return (
    <nav className="flex items-center gap-3 sm:flex-1 sm:justify-end sm:gap-5">
      <ul
        className="hidden flex-1 justify-center gap-6 text-sm text-text-muted lg:flex xl:gap-10"
      >
        {navLinks.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:text-primary">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 sm:gap-5">
        <button type="button" aria-label="Search" title="Search" className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-white">
          <img src={searchIcon} alt="" className="size-5" />
        </button>

        <div className="relative">
          <Link to="/cart" aria-label={`Cart, ${cartCount} items`} className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-white">
            <img src={cartIcon} alt="" className="size-5" />
            <span
              className="absolute -right-0.5 -top-0.5 flex size-[18px] items-center justify-center rounded-full border border-background bg-primary text-[10px] font-bold text-white"
            >
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          </Link>
        </div>
        <Button className="hidden px-3 py-2 text-sm sm:block">Sign in</Button>
      </div>
    </nav>
  );
};

export default Navbar;
