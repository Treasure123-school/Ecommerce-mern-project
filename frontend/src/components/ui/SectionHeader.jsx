import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <header className="flex items-end justify-between gap-4 px-1 py-4 sm:py-5">
      <div>
        <h2 className="flex items-center gap-2 font-medium uppercase tracking-wider text-orange text-xs sm:text-sm font-heading">
          <span className="bg-orange w-2 h-2 rounded-full"></span>
          {title}        
        </h2>
        <p className="font-heading mt-1 tracking-wide font-semibold text-ink text-base  sm:text-lg">{subTitle}</p>
      </div>

      <Link to="/cart" className="flex items-center shrink-0 text-orange text-sm font-semibold font-semibold font-heading">
        See all 
      <ChevronRight className="text-orange w-4 h-4 ml-1" />
      </Link>
    </header>
  )
}

export default SectionHeader