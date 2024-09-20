import { Divider, Pagination, Rate } from 'antd'
import React, { useState } from 'react'
import DropdownComp from './Dropdown'
import { FaFilter } from 'react-icons/fa'
import { FirstPageData } from './Data'
import CardList from '../list/Index'
import PaginationComp from '../list/Pagination'


const FirstScreen = () => {
  const [listData, setListData] = useState(false)
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = FirstPageData.slice(indexOfFirstItem, indexOfLastItem);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <div className='px-5 lg:px-10'>
      <h1 className=' text-md sm:text-lg  pt-10'>Home  /  Electronics  /  Computers  /  Desktop Computers</h1>    
      <div>
        <h1 className='text-2xl font-medium pt-5'>Laptops and Accessories</h1>
        <p className=' text-lg pt-1'>Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more</p>
      </div>

      <Divider />
      
      <div className='flex flex-col md:flex-row items-center space-y-5 md:justify-between'>
        <div className='flex'>
          <div className="flex items-center gap-2 bg-stone-100 px-4 rounded-full cursor-pointer ">
            <FaFilter className=' text-sm' />
            <h1> Filter</h1>
          </div>

            <div  className=' flex'>
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
      {listData ? (
        <>
          <div className='pt-10 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-2'>
            {
              currentItems.map(data =>
                <div key={data.id} className="p-2 border">
                  <img src={data.image} alt="" />
                  <h1 className=' font-semibold text-zinc-400'>{data.brand}</h1>
                  <h1 className=' flex flex-wrap w-52 sm:w-full py-2 font-medium'>{data.title}</h1>
                  <div className="flex gap-2">
                    <Rate value={5} className='text-sm' />
                    <h1>{data.reviews}</h1>
                  </div>

                  <div className='py-2 flex gap-5 text-lg font-medium'>
                    <p>{data.price}</p>
                    <p className='text-gray-500 line-through'>{data.originalPrice}</p>

                  </div>
                </div>
              )
            }
          </div>
          <div className=''>
            <PaginationComp currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={FirstPageData.length} paginate={paginate} />
            <div>
              <h1 className=' flex justify-center text-center'>1 – 20 of 300+ properties found</h1>
            </div>
          </div>
        </>

      ): (
          <div>
            <CardList/>
          </div>
      )
      }
     
      
    </div>
  
  )
}

export default FirstScreen