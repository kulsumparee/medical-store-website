const Button = ({ title, className }) => {
  return (
      <div>
      <button className={` rounded-full py-2 px-5 text-lg  bg-[#f5c34b] hover:bg-[#f5c34b] ${className}`}>{title}</button>         
        
          
    </div>
  )
}

export default Button