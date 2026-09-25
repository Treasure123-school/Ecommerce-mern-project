
const Button = ({ 
  children,
  className = "",
  onclick,
  ...props
}) => {
  return (
    <button 
      className={`mx-3 rounded-full font-bold cursor-pointer bg-primary hover:bg-primary-dark text-white transition-colors whitespace-nowrap ${className}`}
      onClick={onclick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button