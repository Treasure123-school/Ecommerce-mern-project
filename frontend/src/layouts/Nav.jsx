import { logo } from "@/assets/images";
import { searchIcon, cartIcon } from "@/assets/icons";
import { Button } from "@/components/ui";

const Navbar = () => {
  return (
    <header className="max-container w-full padding-x py-4 flex justify-between bg-blue-100">
      <img src={logo} alt="logo" className="w-25 h-25 object-contain"/>
      
      <nav className="flex">      
        
      </nav>
      
      <div className="flex items-center gap-[40px]">
        <img src={searchIcon} alt="searchIcon" className="w-6 h-6"/>
  
        <div>
          <img src={cartIcon} alt="cartIcon" className="w-6 h-6" />
          <div className="dot"></div>
        </div>
        <Button text="Sign in"/>
      </div>
    </header>
  )
}

export default Navbar