import React from 'react'
import SavingsData from '../../assets/MapData/majorSavings/Data'

const SavingsCompo = () => {
  return (
      <div className='w-full py-10 px-5 md:px-10'> 
          <div className='border-2 p-5 md:p-10 rounded-md'>
              <h1 className=' text-2xl font-medium pb-4'>Major savings</h1>
          
          <div className=' grid sm:grid-cols-2 md:grid-cols-3  gap-5 '>
              {
                  SavingsData.map(data =>
                      <div key={data.id} className=' flex flex-col' >

                          <img src={data.image} alt={data.title} />
                          <p className=' pt-2'>{data.title} </p>

                      </div>)
              }
              </div>
          </div>
    </div>
  )
}

export default SavingsCompo