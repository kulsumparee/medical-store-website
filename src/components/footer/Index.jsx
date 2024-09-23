import React from 'react'
import Button from '../Button/Button'
import call from "../../assets/images/footer/call.svg"
import email from "../../assets/images/footer/email.svg"
import img1 from "../../assets/images/footer/1.svg"
import img2 from "../../assets/images/footer/2.svg"
import img3 from "../../assets/images/footer/3.svg"
import img4 from "../../assets/images/footer/4.svg"
import img5 from "../../assets/images/footer/5.png"
import img6 from "../../assets/images/footer/6.svg"
import { FaAndroid, FaApple, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Divider } from 'antd'

const FooterSec = () => {
  return (
      <footer className='mt-20 bg-[#F3F5F6] py-10 ' >
          <div className="flex flex-col items-center ">
              <h1 className=' text-xl sm:text-2xl font-semibold py-3'>Subscribe and get 20% discount.</h1>
              <div className="flex gap-5">
                  <input type="text" name="" id=""
                      placeholder='your email address'
                      className=' border border-[#F3F5F6] py-3 w-[200px] sm:w-[400px] md::w-[500px] rounded-md pl-3 placeholder-black'
                  />
                  <Button title="Subscribe" className="py-3 px-5"/>
             </div>
              
          </div>

          <div className='grid grid-cols-12 pt-10 px-8 '>
              <div className=' col-span-12 sm:col-span-6 md:col-span-3'>
                  <h1 className=' text-lg font-medium pb-5'>Contact Us</h1>
                  <div className="flex gap-4">
                          <img src={call} alt="call logo" />
                      <div className='font-medium'>
                  <h1 className=' pb-2'>Monday-Friday: 08am-9pm</h1>
                  <p>+(1) 123 456 7890</p>
                      </div>
                      
                  </div>

                  <div className="flex gap-4 mt-4">
                      <img src={email} alt="call logo" />
                      <div className=" font-medium">
                      <h1 className='pb-2'>Need help with your order?</h1>
                      <p>+(1) 123 456 7890</p>
                      </div>
                  </div>
              </div>

              <div className=" col-span-12 pt-10 sm:pt-0 sm:col-span-3 lg:col-span-2 text-lg">
                  <h1 className=' text-lg font-medium pb-5'>About Zenmart</h1>
                  <p>Track Your Order</p>
                  <p className='py-3'>Product Guides</p>
                  <p>Wishlist</p>
                  
              </div>

              <div className=" col-span-12 pt-10 sm:pt-0  sm:col-span-3 lg:col-span-2 text-lg">
                  <h1 className=' text-lg font-medium pb-5'>Customer Support</h1>
                  <p>Contact Us</p>
                  <p className='py-3'>Help Center</p>
              </div>

              <div className=" col-span-12 sm:col-span-6 mt-10 md:mt-0 md:col-span-3 lg:col-span-2 text-lg">
                  <h1 className=' text-lg font-medium pb-5'>Services</h1>
                  <p>Trade-In Program</p>
                  <p className='py-3'>Electronics Recycling</p>
                  <p>Best Buy Health</p>
              </div>

              <div className=" col-span-12 sm:col-span-6 md:col-span-12 pt-10 lg:pt-0 lg:col-span-3">
                  <h1 className=' text-lg font-medium pb-5'>Follow Us</h1>
                  <div className="flex md:text-sm gap-2 cursor-pointer ">
                      <FaFacebookF className=' text-lg' />
                      <FaTwitter className=' text-lg' />
                      <FaInstagram className=' text-lg' />
                      <FaLinkedinIn className=' text-lg' />
                  </div>

                  <div>
                      <h1 className=' text-lg font-medium py-5'>Mobile Apps</h1>
                      <div className='flex gap-3 items-center pb-3'>
                          <FaApple className=' text-xl' />
                          <p className='text-xl'>iOS App</p>
                      </div>

                      <div className="flex gap-3 items-center">
                          <FaAndroid className=' text-xl' />
                          <p className=' text-xl'>Android App</p>
                      </div>

                      <div className="">
                          <h1 className=' text-lg font-medium pt-5 pb-3'>We Accept</h1>
                          <div className='flex gap-2 flex-wrap'>
                              <img src={img1} alt="card img" width={38} height={24} />
                              <img src={img2} alt="card imgs" width={38} height={24} />
                              <img src={img3} alt="card imgs" width={38} height={24} />
                              <img src={img4} alt="card imgs" width={38} height={24} />
                              <img src={img5} alt="card imgs" width={38} height={24} />
                              <img src={img6} alt="card imgs" width={38} height={24} />
                          </div>
                          
                      </div>
                  </div>
              </div>
              
          </div>
          <div className='px-10'>
              <Divider />
          </div>

          <div className=' flex text-md    sm:text-lg px-10'>
              <div className=' md:flex gap-10'>
                  <p>© 2022 Zeomart. All Rights Reserved</p>
                  <nav>
                      <ul className='flex justify-center gap-5'>
                          <li>Privacy</li>
                          <li>Terms</li>
                          <li>Sitemap</li>
                      </ul>
                  </nav>
              </div>
              
              <div>
                 
              </div>
          </div>
          
    </footer>
  )
}

export default FooterSec