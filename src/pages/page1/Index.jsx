import { Divider, Pagination, Rate } from 'antd'
import React, { useState } from 'react'
import { FirstPageData } from '../../assets/MapData/pages/page1Data/Data'
import CardList from '../list/Index'
import PaginationComp from '../list/Pagination'
import SecondPage from '../page2/Index'
import CommonData from '../Common'


const FirstScreen = () => {
  const [filterData, setFilterData] = useState(true)
  const [listData, setListData] = useState(true)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = FirstPageData.slice(indexOfFirstItem, indexOfLastItem);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (

    <>

      {filterData ? (
        <div div className='px-5 lg:px-10' >
          <h1 className=' text-md sm:text-lg  pt-10'>Home  /  Electronics  /  Computers  /  Desktop Computers</h1>
          <CommonData setFilterData={setFilterData} setListData={setListData} />

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

          ) : (
            <div>
              <CardList />
            </div>
          )
          }


        </div>
      ) : (
        <SecondPage />
      )}
    </>



  )
}

export default FirstScreen