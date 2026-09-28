
const Button = ({ 
  children,
  className = "",
  onClick,
  ...props
}) => {
  return (
    <button 
      className={`mx-3 rounded-full font-bold cursor-pointer bg-orange hover:bg-orange-dark text-white transition-colors whitespace-nowrap ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button