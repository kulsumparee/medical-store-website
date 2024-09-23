import React from 'react'
import Input from '../../components/Input/Index'
import Button from "../../components/Button/Button"
import { Link } from 'react-router-dom'

const CheckoutCard = () => {
  return (
      <div className=' px-5 md:px-10 pt-10'>
          <h1 className=' text-lg'>Home  /  Electronics  /  Computers  /  Desktop Computers</h1>

          <div className=" flex py-5 justify-center">
              <h1 className=' font-semibold text-2xl py-5 md:py-10'>Checkout</h1>
          </div>

      <div className='grid grid-cols-12 md:gap-10'>
        <div className=" col-span-12 lg:col-span-8">
          <h1 className='text-lg py-2'>Returning customer?
            <Link to="/sign-In">
              <span className=' font-semibold cursor-pointer'> Click here to login</span>
            </Link>
          </h1>
          <h1 className=' text-xl font-semibold py-2'>Billing details</h1>

          <form action="">
            <div className="md:flex gap-10 ">
              <div className='w-full'><Input title="First name *"/></div>
              <div className="w-full"><Input title="Last name *"/></div>
            </div>

            <div className="">
              <Input title="Company name " />
            </div>

            <div className=" pt-5">
              <label htmlFor="" className='font-semibold text-lg '>Country / Region *</label> <br />
              <select className='py-2 w-full border rounded-md border-stone-200 mt-2 focus:outline-none ' name="" id="">
                <option value="">select</option>
                <option value="">Pakistan</option>
                <option value="">India</option>
                <option value="">Canada</option>
                <option value="">UK</option>
             </select>
            </div>

            <div>
              <Input title="Street address *" />
              <Input/>

            </div>

            <div className="">
              <Input title="City / Town *" />
            </div>

            <div className=" pt-5">
              <label htmlFor="" className='font-semibold text-lg ' > State *</label> <br />
              <select className=' py-2 w-full border rounded-md border-stone-200 mt-2 px-2 focus:outline-none' name="" id="">
                <option value="">select</option>
              </select>
            </div>

            <div>
              <Input title="ZIP Code *" />
            </div>

            <div className="md:flex gap-10 ">
              <div className='w-full'><Input text="+92" title="Phone *"/></div>
              <div className="w-full"><Input title="Email address *"/></div>
            </div>

            <div className='flex gap-3 py-5'>
              <input type="checkbox" name="" id="" className='focus:outline-none' />
              <label className=' font-semibold text-lg ' htmlFor="">Create an account?</label>
            </div>

            <div className=" pt-8">
              <h1 className=' text-xl font-semibold py-2'>Shipping details</h1>

              <div className='flex gap-3 py-5'>
                <input type="checkbox" name="" id="" className='' />
                <label className=' font-semibold text-lg ' htmlFor="">Ship to a different address?</label>
              </div>
            </div>

            <div>
              <Input text="Order Notes" title="Order notes (optional)" className=" pb-40" />
            </div>
          </form>

        </div>
        <div className=" col-span-12 py-10 md:py-0 md:col-span-12 lg:col-span-4">
          <div className='  '>
            <div className="max-w-md mx-auto bg-white  border rounded-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Your Order</h2>
                <div className="flex justify-between mb-2">
                  <p className='w-56'>Apple MacBook Pro with Apple M1 Chip x 2</p>
                  <p>$229.99</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p className='w-56'>Apple MacBook Pro with Apple M1 Chip x 2</p>
                  <p>$229.99</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between mb-2">
                  <p className="font-semibold">Sub Total</p>
                  <p className="font-semibold">$854.98</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between mb-2">
                  <p className="font-semibold">Shipping</p>
                  <p className="font-semibold">$20</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <p className="text-lg font-bold">$225.98</p>
                </div>
              </div>
            </div>

            <div>
              <div className="max-w-md mx-auto bg-white border mt-10 rounded-lg overflow-hidden">
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-4">Payment information</h2>
                  <div className="mb-4">
                    <h3 className="font-semibold">Direct bank transfer</h3>
                    <p className="text-gray-600 text-sm">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-semibold">Check Payment</h3>
                  </div>
                  <div>
                    <h3 className="font-semibold">Cash on Delivery</h3>
                  </div>
                </div>
              </div>

              <div className=' flex gap-4 items-start pt-10'>
                <input type="checkbox" name="" id="" className=' mt-2' />
                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
              </div>

              <div className=' flex justify-center pt-5'>
                <Link to="/completeOrder" >
                <Button title="Place Order" className="px-14" />
                </Link>
              </div>
            </div>
         </div>
        </div>

      </div>
    </div>
  )
}

export default CheckoutCard