import { Link } from "react-router-dom";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <header className="flex items-end justify-between gap-4 px-1 py-4 sm:py-5">
      <div>
        <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary sm:text-sm">
          <span className="bg-primary w-2 h-2 rounded-full"></span>
          {title}        
        </h2>
        <p className="mt-1 text-base text-text-muted sm:text-lg">{subTitle}</p>
      </div>

      <Link to="/cart" className="shrink-0 text-sm font-bold text-primary underline-offset-4 hover:underline">See all</Link>
    </header>
  )
}

export default SectionHeader