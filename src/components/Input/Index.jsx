import React from 'react'

const Input = ({ title, text, className }) => {
  return (
    <div className=' pt-5'>
          <label className=' font-semibold text-lg ' htmlFor="">{title}</label>
          <input type="text" name="" id="" className={`py-2 w-full border rounded-md border-stone-200 mt-2 px-2 ${className}`} placeholder={text} />
    </div>
  )
}

export default Input

