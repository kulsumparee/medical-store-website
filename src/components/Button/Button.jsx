import React from 'react'

const Button = ({ title, className }) => {
  return (
      <div>
          <button className={` rounded-md py-2 px-3 text-lg bg-[#F5C34B] ${className}`}>{title}</button>         
        
          
    </div>
  )
}

export default Button