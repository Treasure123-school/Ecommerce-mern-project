
const Scroller = ({ children }) => {
  return (
    <div className="scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-1 py-3 [scrollbar-color:var(--color-text-light)_transparent] [scrollbar-width:thin]">
      {children}
    </div>
  )
}

export default Scroller