import { logo } from "@/assets/images";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">    
      <img 
        src={logo} 
        alt="logo" 
        className="h-16 w-16 object-contain sm:h-20 sm:w-20" 
      />
    </Link>
  )
}

export default Logo