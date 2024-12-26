import ShopData from '../../assets/MapData/shopCategories/Data'
import { Rate } from 'antd'

const ShopCategoriesComp = () => {
  return (
      <div>
          <div className="md:flex justify-between pb-10 px-5 mt-20">
              <h1 className=' flex justify-center pb-4 md:pb-0 font-semibold text-xl text-cyan-500 sm:text-2xl'> Shop Healthcare Categories </h1>

              <nav>
                  <div className="relative md:hidden">
                      <select
                          className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  text-sm"
                          onChange={(e) => {
                              console.log(e.target.value);
                          }} >
                          <option value="Electronic">Surgical Tools</option>
                          <option value="Baby">Baby Care</option>
                          <option value="Clothing">Medicines</option>
                          <option value="Furniture">Mobility Aids</option>
                          <option value="Grocery">All</option>

                      </select>
                  </div>

                  <ul className="hidden md:flex flex-wrap justify-center gap-4 font-medium text-sm md:text-lg text-gray-500">
                     
                      <li className="cursor-pointer hover:border-b-2 border-cyan-500 hover:text-cyan-500">Surgical Tools</li>
                      <li className="cursor-pointer hover:border-b-2 border-cyan-500 hover:text-cyan-500">Baby Care</li>
                      <li className="cursor-pointer hover:border-b-2 border-cyan-500 hover:text-cyan-500">Medicines</li>
                      <li className="cursor-pointer hover:border-b-2 border-cyan-500 hover:text-cyan-500">Mobility Aids</li>
                      <li className="cursor-pointer hover:border-b-2 border-cyan-500 hover:text-cyan-500">All</li>

                  </ul>
              </nav>
          </div>

          <div className='sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-6 px-10 md:px-0 flex flex-col items-center '>
              {
                  ShopData.map(data => 
                      <div key={data.id} className="p-3 hover:shadow-2xl cursor-pointer w-full h-full hover:bg-slate-50 transform group ">
                          <div className=' w-full h-44'>
                              <img src={data.image} alt={data.title} className=' rounded-sm w-full h-full' />
                          </div>
                          <h1 className=' text-md md:text-lg font-medium text-gray-400 py-2'>{data.brand}</h1>
                          <h1 className=' text-md md:text-md font-medium leading-6 w-max] hover:text-cyan-500'>{data.title}</h1>

                          <div className='flex items-center gap-2'>
                              <Rate  className='text-sm lg:text-lg py-2' />
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