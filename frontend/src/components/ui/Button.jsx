
const Button = ({ 
  children,
  className = "",
  
}) => {
  return (
    <button className={`py-3 px-8 rounded-full font-bold button-style cursor-pointer bg-primary text-white transition-colors whitespace-nowrap ${className}`}>
      {children}
    </button>
  )
}

export default Button