
const Scroller = ({ children }) => {
  return (
    <div className="scrollbar flex gap-[0.6rem] 
      overflow-x-auto snap-x snap-mandatory py-[0.6rem] scrollbar-thin 
      [scrollbar-color:var(--color-text-light)_transparent]">
      {children}
    </div>
  )
}

export default Scroller