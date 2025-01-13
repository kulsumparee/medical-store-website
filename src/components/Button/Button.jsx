const Button = ({ title, className }) => {
  return (
      <div>
      <button className={` rounded-full py-2 px-5 text-lg  bg-[#0891b2] hover:bg-[#0e7490] ${className}`}>{title}</button>         
        
          
    </div>
  )
}

export default Button