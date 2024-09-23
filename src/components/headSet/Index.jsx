import React from 'react'
import HeadSetData from './Data'
import { Link } from 'react-router-dom'

const HeadSetComp = () => {
  return (
      <div>
          {
        HeadSetData.map(data =>
          <div key={data.id} className='relative py-10'>
            <div className=" ">
              <img src={data.image} alt={data.title2}  className='  object-cover h-[20vh] sm:h-[40vh] md:h-full w-full ' />
            </div>

            <div className=' absolute top-14 sm:top-20 left-5 sm:left-10'>
              <p className=' text-blue-500 text-sm sm:text-lg'>{data.para}</p>
              <h1 className=' text-sm sm:text-lg md:text-3xl font-semibold sm:mt-2'>{data.title1}</h1>
              <h1 className=' text-sm sm:text-lg md:text-3xl font-semibold sm:mb-2'>{data.title2}</h1>
              <Link to="/headset" >
                <button className=' text-sm sm:text-lg hover:underline'>{data.button}</button>
              </Link>
            </div>
              </div> )
          }
    </div>
  )
}

export default HeadSetComp