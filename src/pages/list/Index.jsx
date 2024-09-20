import { Divider, Image, Rate } from 'antd'
import React, { useState } from 'react'
import { ListData } from './Data'
import PaginationComp from './Pagination'

const CardList = () => {
  const [value, setValue] = useState(3);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ListData.slice(indexOfFirstItem, indexOfLastItem);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const [cartData, setCartData] = useState(false)
  return (
    <>
     
    <div className='w-full'>

      <div className=' w-full my-10 grid sm:grid-cols-2 md:grid-cols-1 '>
        {currentItems && currentItems.map(data => <div key={data.id}>
          <div className=' grid grid-cols-12 mx-5 mt-10 lg:mt-0 border gap-x-3  p-5'>
            <div className=' col-span-12 md:col-span-3 lg":col-span-3  '>
              <Image src={data.image} width={240} height={240} />
           </div>


            <div className=' col-span-12 md:col-span-9 lg:col-span-5  '>
              <h1 className=' text-gray-500'>{data.brand} </h1>
              <div className='hover:text-blue-500 hover:underline cursor-pointer'>
                <h1 className=' font-bold w-[80%]'>{data.title} </h1>
                <h1 className=' font-bold'>{data.title2} </h1>
              </div>
              <div className=' flex  my-2 gap-5'>
                <Rate onChange={setValue} value={value} />
                <p>{data.reviews} </p>

              </div>
              <div>
                <ul className=''>
                  <li className='mt-1'>{data.list1} </li>
                  <li className='mt-1'>{data.list2} </li>
                  <li className='mt-1'>{data.list3} </li>
                  <li className='mt-1'>{data.list4} </li>
                </ul>
              </div>

            </div>

            <Divider type='vertical' />
            <div className=' col-span-12 md:col-span-5 lg:col-span-3 flex flex-col items-center justify-center mt-10 lg:mt-0 '>
              <div className=' flex gap-3 justify-center items-center'>
                <h1 className=' text-xl font-semibold '>{data.price} </h1>
                <h1 className=' text-gray-500 line-through'>{data.originalPrice}</h1>
              </div>
              <button onClick={() => setCartData(false)} className=' my-2 font-semibold  w-full  md:px-20 md:text-sm lg:text-sm  lg:px-16 py-2 bg-[#F5C34B] rounded-sm'>{data.button}</button>

              <div className=' flex hover:cursor-pointer'>
                <h1 className=' '>{data.text}</h1>
                <Divider className='' type='vertical' />
                <div className=' flex gap-2'>
                  <img src={data.logo} />
                  <h1>{data.text1}</h1>
                </div>
              </div>

            </div>
          </div>

        </div>)}
        </div>

      <div className=''>
        <PaginationComp currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={ListData.length} paginate={paginate} />
        <div>
          <h1 className=' flex justify-center text-center'>1 – 20 of 300+ properties found</h1>
        </div>
      </div>
      
    </div>
     
    </>
  )
}

export default CardList
