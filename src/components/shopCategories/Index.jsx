import React from 'react'
import ShopData from '../../assets/MapData/shopCategories/Data'
import { Rate } from 'antd'

const ShopCategoriesComp = () => {
  return (
      <div>
          <div className="flex justify-between pb-10 px-5">
              <h1 className=' flex justify-center pb-4 md:pb-0 font-semibold text-xl sm:text-2xl'>Shop Categories</h1>

              <nav>
                  <div className="relative md:hidden">
                      {/* Dropdown for small screens */}
                      <select
                          className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  text-sm"
                          onChange={(e) => {
                              // Handle filter logic based on dropdown selection
                              console.log(e.target.value);
                          }}
                      >
                          <option value="Electronic">Electronic</option>
                          <option value="Baby">Baby</option>
                          <option value="Clothing">Clothing</option>
                          <option value="Furniture">Furniture</option>
                          <option value="Grocery">Grocery</option>
                          <option value="Toy&VideoGame">Toy & Video Game</option>
                          <option value="Kitchen">Kitchen</option>
                          <option value="Beauty">Beauty</option>
                      </select>
                  </div>

                  <ul className="hidden md:flex flex-wrap justify-center gap-4 font-medium text-sm md:text-lg text-gray-500">
                      {/* Menu for larger screens */}
                      <li className="cursor-pointer hover:border-b-2 border-black hover:text-black">Electronic</li>
                      <li className="cursor-pointer hover:border-b-2 border-black hover:text-black">Baby</li>
                      <li className="cursor-pointer hover:border-b-2 border-black hover:text-black">Clothing</li>
                      <li className="cursor-pointer hover:border-b-2 border-black hover:text-black">Furniture</li>
                      <li className="cursor-pointer hover:border-b-2 border-black hover:text-black">Grocery</li>
                      <li className="cursor-pointer hover:border-b-2 border-black hover:text-black">Toy & Video Game</li>
                      <li className="cursor-pointer hover:border-b-2 border-black hover:text-black">Kitchen</li>
                      <li className="cursor-pointer hover:border-b-2 border-black hover:text-black">Beauty</li>
                  </ul>
              </nav>
          </div>

          <div className='sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-6 px-10 md:px-0 flex flex-col items-center '>
              {
                  ShopData.map(data => 
                      <div key={data.id} className="p-3 hover:shadow-2xl hover:bg-slate-50 transform group ">
                          <img src={data.image} alt={data.title} />
                          <h1 className=' text-md md:text-lg font-medium text-gray-400 py-2'>{data.brand}</h1>
                          <h1 className=' text-md md:text-md font-medium leading-6 w-64 md:w-40'>{data.title}</h1>

                          <div className='flex items-center'>
                              <Rate value={5} className='text-sm lg:text-lg py-2' />
                              <p>{data.reviews} </p>
                          </div>
                          <div className='flex gap-3 text-lg'>
                              <p>{data.price}</p>
                          <p className='text-gray-500 line-through'>{data.originalPrice} </p>
                             
                          </div>

                      </div>
                  )

              }
          </div>

    </div>
  )
}

export default ShopCategoriesComp