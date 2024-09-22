import React, { useState } from 'react'
import Logo from "../../assets/pakdeals.svg"
import image from "../../assets/auth.png"
import Input from '../Input/Index'

const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
      <div className=' grid grid-cols-12  gap-20'>
          <div className="col-span-6 bg-white shadow-lg mx-10 px-10">
              <div className=" flex justify-center">
                  <img src={Logo} alt="logo5689" />
              </div>

              <form action="" className=' ' >
                  <h1 className=' text-4xl font-semibold'>Sign In</h1>
                  <div className="">
                      <Input title="Email"/>
                  </div>
                  <div className=' mt-5'>
                      <label className=' font-semibold text-lg' htmlFor="">Password</label>
                      <div className="flex items-center relative ">
                      <input
                          type={showPassword ? "text" : "password"}
                          className="py-2 w-full border rounded-md border-stone-200 mt-2 px-2"
                          placeholder="Enter your password"
                      />
                      <div onClick={() => setShowPassword(!showPassword)} className="p-2 absolute right-0 cursor-pointer">
                          {showPassword ? (
                              <span>👁️</span> 
                          ) : (
                              <span>👁️‍🗨️</span>
                          )}
                      </div>
                  </div>
                  </div>
              </form>
          </div>
          <div className="col-span-6">
              <img src={image} alt="" className='h-screen w-xxl object-cover' width={600} />
          </div>
          
    </div>
  )
}

export default SignInForm