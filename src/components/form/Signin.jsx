import React, { useState } from 'react'
import Logo from "../../assets/images/pakdeals.svg"
import image from "../../assets/images/auth.png"
import Input from '../Input/Index'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
      <div className=' md:grid grid-cols-12 gap-20'>
          <div className="col-span-6 bg-white shadow-lg rounded-md mx-5 sm:mx-10 px-5 sm:px-10 pt-10">
              <div className=" flex justify-center pb-6 ">
                  <img src={Logo} alt="logo5689" className="transition-transform duration-500 ease-in-out hover:scale-110" />
              </div>

              <form action="" className=' ' >
                  <h1 className=' text-3xl font-semibold'>Sign In</h1>
                  <div className="">
                      <Input title="Email"/>
                  </div>
                  <div className=' mt-5'>
                      <label className=' font-semibold text-lg' htmlFor="">Password</label>
                      <div className="flex items-center relative ">
                          <input
                              id='sign-in'
                              
                          
                          type={showPassword ? "text" : "password"}
                          className="py-2 w-full border rounded-md border-stone-200 mt-2 px-2 focus:outline-none"
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

                  <div className=' flex flex-col items-center gap-y-4 py-5'>
                      <Button title="Sign In" className=" px-5" />

                      <h1 className='  sm:text-lg'>Don't have an account?
                          <Link to="/sign-Up">
                              <span className='text-[#F5C34B] cursor-pointer font-medium '>Sign up</span>
                          </Link>
                      </h1>
                      <Link to="/forget-password" >
                          <h1 className=' text-[#F5C34B] font-semibold text-lg cursor-pointer '>Forgot Password</h1>
                      </Link>
                          
                    
                  </div>
              </form>
          </div>
          <div className="  md:col-span-6 md:flex hidden">
              <img src={image} alt="" className='h-screen w-xxl object-cover' width={600} />
          </div>
          
    </div>
  )
}

export default SignInForm