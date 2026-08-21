import { logo } from "@/assets/images";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">    
      <img 
        src={logo} 
        alt="logo" 
        className="w-25 h-25 max-md:w-20 max-md:h-20 object-contain" 
      />
    </Link>
  )
}

export default Logo