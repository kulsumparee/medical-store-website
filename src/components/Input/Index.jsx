import React from 'react'

const Input = ({ title, text, className, type }) => {
  
  return (
    <div className=' pt-5'>
          <label className=' font-semibold text-lg ' htmlFor="">{title}</label>
      <input type={type} name="" id="" className={`py-2 w-full border rounded-md border-stone-200 mt-2 px-2 focus:outline-none 
         
           ${className}`} placeholder={text} />
    </div>
  )
}

export default Input

