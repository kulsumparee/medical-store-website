import { Divider } from 'antd'
import React from 'react'
import DropdownComp from './page1/Dropdown'
import { FaFilter } from 'react-icons/fa'

const CommonData = ({ setFilterData, setListData, className }) => {
  return (
      <div>
          <div>
              <h1 className='text-2xl font-medium pt-5'>Laptops and Accessories</h1>
              <p className=' text-md sm:text-lg pt-1'>Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more</p>
          </div>

          <Divider />

          <div className='flex flex-col md:flex-row items-center space-y-5 md:justify-between'>
              <div className='flex'>
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