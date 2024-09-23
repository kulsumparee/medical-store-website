import React from 'react'
import Logo from "../../assets/images/pakdeals.svg"
import image from "../../assets/images/auth.png"
import Input from '../Input/Index'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
      <div className=' md:grid grid-cols-12 gap-20'>
          <div className="col-span-6 border-t bg-white shadow-lg rounded-md mx-5 sm:mx-10 px-5 sm:px-10 pt-10">
              <div className=" flex justify-center pb-6">
                  <img src={Logo} alt="logo5689" />
              </div>

              <form action="" className=' ' >
                  <h1 className=' text-xl md:text-3xl font-semibold'>Forgot Password</h1>
                  <div className="">
                      <Input title="Email" />
                  </div>
                  

                  <div className=' flex flex-col items-center gap-y-4 py-5'>
                      <Button title="Forgot Password" className=" px-5 " />

                      <h1 className='  sm:text-lg'>New User?
                          <Link to="/sign-Up">
                              <span className='text-[#F5C34B] cursor-pointer font-medium '>Sign up</span>
                          </Link>
                      </h1>
                     


                  </div>
              </form>
          </div>
          <div className="  md:col-span-6 md:flex hidden">
              <img src={image} alt="" className='h-screen w-xxl object-cover' width={600} height={500} />
          </div>

      </div>
  )
}

export default ForgetPassword
