
const Button = ({ children }) => {
  return (
    <button className="py-3 px-8 rounded-full font-bold button-style
      cursor-pointer max-md:hidden">
      {children}
    </button>
  )
}

export default Button