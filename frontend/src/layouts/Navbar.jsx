import React from 'react';
import { logo } from "@/assets/images";
import { searchIcon, cartIcon } from "@/assets/icons";
import { Button } from "@/components/ui"

const Navbar = () => {
  return (
    <div className="py-8 flex justify-between items-center w-full">
      <img src={logo} alt="logo" className="w-20 h-20 object-contain"/>   

      <ul className="flex list-none gap-20 font-sans text-text-muted text-[18px]">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact us</li>
      </ul>

      <div className="flex items-center gap-[40px]">
        <img src={searchIcon} alt="searchIcon" className="w-6 h-6"/>

        <div>
          <img src={cartIcon} alt="cartIcon" className="w-6 h-6" />
          <div className="dot"></div>
        </div>
        <button text="Sign in"/>
      </div>
    </div>
  )
}

export default Navbar