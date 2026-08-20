import { useState } from "react";
import { logo } from "@/assets/images";
import { searchIcon, cartIcon } from "@/assets/icons";
import { Button } from "@/components/ui";
import { navLinks } from "@/constants"

const Navbar = () => {
  return (
    <header className="max-container w-full padding-x py-4 flex justify-between items-center">
      <img src={logo} alt="logo" className="w-25 h-25 object-contain" />

      <ul className="flex max-sm:hidden gap-20 text-text-muted">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="group relative"
            >
              {item.label}

              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-10">
        <img src={searchIcon} alt="searchIcon" className="w-6 h-6" />

        <div>
          <img src={cartIcon} alt="cartIcon" className="w-6 h-6" />
          <div className="dot"></div>
        </div>
        <Button text="Sign in" />
      </div>
    </header>
  )
}

export default Navbar