import React from 'react'
import HeadSetData from '../../assets/MapData/headsetData/Data'

const HeadSet2Comp = () => {
    return (
        <div className=' pt-10'>
            {
                HeadSetData.map(data =>
                    <div key={data.id} className='relative py-10'>
                        <div className=" ">
                            <img src={data.imag2} alt={data.title2} className='object-cover h-[25vh] sm:h-[40vh]  md:h-full w-full' />
                        </div>

                        <div className=' absolute top-14 md:top-20 left-5 sm:left-10'>
                            <p className=' text-blue-500 text-sm sm:text-lg'>{data.para}</p>
                            <h1 className=' text-md  md:text-3xl font-semibold sm:mt-2'>{data.title1}</h1>
                            <h1 className=' text-sm md:text-3xl font-semibold sm:mb-2'>{data.title2}</h1>
                            <button className=' text-sm sm:text-lg hover:underline'>{data.button}</button>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default HeadSet2Comp