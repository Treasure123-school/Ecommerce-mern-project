import { Link } from "react-router-dom";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <header className="px-2 py-4 flex items-center justify-between">
      <div>
        <h2 className="flex items-center gap-1 text-primary uppercase 
          font-bold tracking-wide text-sm">
          <span className="bg-primary w-2 h-2 rounded-full"></span>
          {title}        
        </h2>
        <p className="text-lg">{subTitle}</p>
      </div>

      <Link to="/Cart" className="underline text-primary">See All</Link>
    </header>
  )
}

export default SectionHeader