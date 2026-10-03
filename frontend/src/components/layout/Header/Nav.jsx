import { FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Button } from "@/components/ui";
import { navLinks } from "@/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-3 sm:flex-1 sm:justify-end sm:gap-5">
      <ul
        className="hidden flex-1 justify-center gap-6 text-sm text-text-muted lg:flex xl:gap-10"
      >
        {navLinks.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:text-orange">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 sm:gap-5">
        <button type="button" aria-label="Search" title="Search" className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-white">
          <FaSearch className="size-4 text-text-muted" />
        </button>

        <div className="relative">
          <Link to="/cart" aria-label={`Cart, 0 items`} className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-white">
            <IoMdCart className="size-4 text-text-muted" />
            <span
              className="absolute -right-0.5 -top-0.5 flex size-[18px] items-center justify-center rounded-full border border-background bg-orange text-[10px] font-bold text-white"
            >
              0
            </span>
          </Link>
        </div>
        <Button className="hidden px-3 py-2 text-sm sm:block">Sign in</Button>
      </div>
    </nav>
  );
};

export default Navbar;
