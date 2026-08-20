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
              className="hover:text-primary"
            >
              {item.label}              
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-10">
        <img src={searchIcon} alt="searchIcon" className="w-6 h-6" />

        <div className="relative">
          <img src={cartIcon} alt="cartIcon" className="w-6 h-6" />
          <div className="flex justify-center items-center text-xs text-white absolute w-4 h-4 top-0 -right-4 rounded-full bg-primary">0</div>
        </div>
        <Button text="Sign in" />
      </div>
    </header>
  )
}

export default Navbar