import { Divider } from 'antd'
import DropdownComp from './page1/Dropdown'
import { FaFilter } from 'react-icons/fa'

const CommonData = ({ setFilterData, setListData, className }) => {
  return (
      <div>
          <div className='py-5'>
              <h1 className='text-2xl font-medium py-5 text-cyan-500'>Medical Supplies and Healthcare Products</h1>
              <p className='text-md sm:text-lg pt-1'>Discover a wide range of medical equipment, healthcare products, wellness essentials, and more to support your health and well-being.</p>
          </div>

          <Divider />

          <div className='flex flex-col md:flex-row items-center space-y-5 md:justify-between'>
              <div className='flex justify-between'>
                  <div onClick={() => setFilterData(false)} className={`flex items-center gap-2 bg-stone-100 px-4 rounded-full cursor-pointer ${className}`}>
                      <FaFilter className={`text-sm ${className}`} />
                      <h1> Fliter</h1>
                  </div>

                  <div className=' flex'>
                      <DropdownComp title="Price" />
                      <DropdownComp title="Brand" />
                      <DropdownComp title="Color" />

                  </div>
              </div>
              <div className=' flex items-center cursor-pointer'>
                  <DropdownComp title="Default Sorting" className=" bg-transparent" />
                  <h1 onClick={() => setListData(false)}>List</h1>
                  <Divider type='vertical' />
                  <h1 onClick={() => setListData(true)}>Grid</h1>
              </div>
          </div>
    </div>
  )
}

export default CommonData