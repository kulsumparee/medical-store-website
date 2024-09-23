import React from 'react'
import Logo from "../../assets/images/pakdeals.svg"
import image from "../../assets/images/auth.png"
import Input from '../Input/Index'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
    return (
        <div className=' md:grid grid-cols-12 '>
            <div className="col-span-6 border-t bg-white shadow-lg rounded-md px-5 mx-5 sm:mx-10 py-10 pt-10">
                <div className=" flex justify-center pb-6">
                    <img src={Logo} alt="logo5689" />
                </div>

                <form action="" className=' ' >
                    <div className=' flex justify-center'>
                        <h1 className=' text-xl md:text-3xl font-semibold'>Register</h1>
                    </div>
                    <div className=" md:flex gap-5">
                        <Input title="First Name" />
                        <Input title="Last Name" />
                    </div>

                    <Input title="Email" />
                    <div className=' md:flex gap-5'>
                        <Input title="Password" />
                        <Input title="Conform Password" />
                    </div>

                    <div className=' flex flex-col  pt-5'>
                        <label className=' font-semibold text-lg ' htmlFor="country">Country</label>
                        <select className='py-2 w-full border rounded-md border-stone-200 mt-2 px-2 focus:outline-none' name="" id="">
                            <option value="">select</option>
                            <option value="">Pakistan</option>
                            <option value="">India</option>
                            <option value="">Canada</option>
                            <option value="">UK</option>
                        </select>
                    </div>

                    <Input title="Address" />

                    <div className=' md:flex gap-5'>
                        <Input title="City" />
                        <Input title="State" />
                        <Input title="Zip Code" />
                    </div>

                    <Input title="Phone Number" type="number" />

                    <h1 className=' pt-5 flex justify-center  sm:text-lg'>Already have an account?
                        <Link to="/sign-In">
                            <span className='text-[#F5C34B] cursor-pointer font-medium '>Sign In</span>
                        </Link>
                    </h1>
                </form>
            </div>
            <div className="  w-full md:col-span-6 md:flex hidden">
                <img src={image} alt="" className=' object-cover' width={1024} />
            </div>

        </div>
    )
}

export default SignUpForm
