import { ArrowLeftOutlined, DownOutlined } from '@ant-design/icons'
import image1 from "../../assets/profile1.svg"
import img1 from "../../assets/profile/heart 1.svg";
import img2 from "../../assets/profile/graph 1.svg";
import img3 from "../../assets/profile/question 1.svg";
import img4 from "../../assets/profile/share 1.svg";
import img5 from "../../assets/profile/truck 1.svg";
import img6 from "../../assets/profile/shop 1.svg";
import img7 from "../../assets/profile/return-box 1.svg";
import { Divider, Image, Rate } from 'antd'
import React from 'react'
import Counter from './counter'
import AccordionUsage from './accordian/Index';
import { Link } from 'react-router-dom';

const SingleCard = ({ onBackClick }) => {
  return (
      <div className=''>
          <div className=' flex flex-col-reverse  md:flex-row justify-between px-10'>
              <h1 className=' py-10 text-md sm:text-lg pt-10 '>
                  Home / Electronics / Computers / Desktop Computers
              </h1>
              <button onClick={onBackClick}> <ArrowLeftOutlined /> Back to List</button>
</div>
          
          <div className=' grid grid-cols-12 px-10'>
              <div className=" col-span-12 md:col-span-2 flex md:flex-col mb-4 gap-x-3 gap-y-3 ">
                 
                      <Image src={image1} className="border-2 border-grey-200" width={100} />
                      <Image src={image1} className="border-2 border-grey-100" width={100} />
                      <Image src={image1} className="border-2 border-grey-100" width={100} />
                  
              </div>

              <div className=" col-span-12 md:col-span-6 lg:col-span-5 lg:pr-10">
                  <Image src={image1} className="border-2 border-grey-100" />
              </div>

              <div className=" col-span-12 md:col-span-12 md:mx-20 lg:mx-0 mt-10 lg:mt-0 lg:col-span-5">
                  <div className="border-2 p-3 md:p-8  sm:mb-4 lg:mb-0  rounded-md ">
                      <div className="flex">
                          <h1 className="text-gray-500">APPLE</h1>
                          <Divider type="vertical" />
                          <span><Rate /></span> <p className="ml-2">3,014 reviews</p>
                      </div>
                      <h1 className="text-xl md:font-semibold my-4">Apple MacBook Pro 16" (2021) - Space Grey (Apple M1 Pro Chip / 1TB SSD / 16GB RAM)</h1>
                      <Divider />
                      <div className="flex gap-3">
                          <h1 className="text-2xl font-semibold">$3.399</h1>
                          <p className="text-xl line-through text-gray-500">$1,419.92</p>
                      </div>

                      <div className="mt-5 flex gap-3">
                          <Counter />
                          <Link to="/cart" className='w-full'>
                              <button  className="flex justify-center items-center gap-5 py-2 rounded-full text-lg bg-[orange] font-semibold w-[70%]">
                                  Add to cart
                              </button></Link>
                      </div>
                      <div>
                          <button className="flex justify-center flex-wrap items-center font-semibold py-3 border-2 rounded-full w-[100%] mt-5 border-[orange]">Buy Now</button>
                          <div className=" flex flex-wrap mt-5 gap-1 items-center">
                              <div className="flex text-center gap-1 text-xl"><img src={img1} width={20} alt="wishlist" /> wishlist</div>
                              <Divider type="vertical" />
                              <div className="flex text-center gap-1"><img src={img2} alt="compare" width={20} /> Compare</div>
                              <Divider type="vertical" />
                              <div className="flex text-center "><img src={img3} alt="question" width={20} /> Askaquestion</div>
                              <Divider type="vertical" />
                              <div className="flex text-center gap-1"><img src={img4} alt="share" width={20} /> Share</div>
                          </div>
                          <Divider />
                      </div>
                      <div>
                          <div className="flex gap-2">
                              <img src={img5} width={40} alt="truck img" />
                              <h1>Free shipping, arrives by Thu, Jun 2 to Sacramento, 95829</h1>
                          </div>
                          <h1 className="my-4 text-lg ml-7"><span className="font-bold">Want it faster?</span> <span className="underline">Add an address</span> to see options
                              <span className="underline"> More options</span></h1>

                          <div className="flex gap-2">
                              <img src={img6} width={40} alt="ship img" />
                              <h1>Sold and shipped by<br />
                                  <span className="font-bold">TFN-STORE | TUFAN STORE LLC Fulfilled by Zenmart</span>
                              </h1>
                          </div>
                          <div className="flex my-5 ml-7 gap-3">
                              <Rate className=' text-sm md:text-md' /> <h1>965 seller reviews</h1>
                          </div>

                          <div className="flex gap-2  my-4">
                              <img src={img7} width={30} alt="return img" />
                              <h1 className="text-lg">Free 15-Day returns <span className="underline ml-2"> Details</span></h1>
                          </div>
                          <Divider />
                      </div>

                      <div>
                          <h1 className=" font-semibold text-xl">More saller option(2)</h1>
                          <h1 className=" text-lg my-2">Starting from $1,249.00</h1>
                          <h1 className=" underline text-lg">Compare all sellers</h1>
                      </div>
                  </div>
              </div>
              
          </div>
          <div className=' px-10 '>
              
              <div className='lg:w-[55%] relative lg:bottom-80 md:py-10 lg:p-0'>
              <h1 className=' text-xl font-semibold'>OverView</h1>
              <p className=''>The first notebook of its kind, this Apple MacBook Pro is a beast. With the blazing-fast M1 Pro chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need.</p>
              <button className=" flex items-center text-lg gap-2 text-violet-800 mt-2">Show more <DownOutlined /> </button>
              </div>
              <div className=' relative lg:bottom-28 lg:w-[90%]'>
                  <AccordionUsage />
              </div>
          </div>
      </div>
  )
}

export default SingleCard