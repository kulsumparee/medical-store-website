import React from 'react'
import HeadSetData from './Data'

const HeadSet2Comp = () => {
    return (
        <div className='pt-20'>
            {
                HeadSetData.map(data =>
                    <div key={data.id} className='relative py-10'>
                        <div className=" ">
                            <img src={data.imag2} alt={data.title2} />
                        </div>

                        <div className=' absolute top-10 sm:top-16 md:top-20 left-10 md:left-20'>
                            <p className=' text-blue-500 text-sm sm:text-lg'>{data.para}</p>
                            <h1 className=' text-sm  md:text-3xl font-semibold sm:mt-2'>{data.title1}</h1>
                            <h1 className=' text-sm md:text-3xl font-semibold sm:mb-2'>{data.title2}</h1>
                            <button className=' text-sm sm:text-lg hover:underline'>{data.button}</button>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default HeadSet2Comp