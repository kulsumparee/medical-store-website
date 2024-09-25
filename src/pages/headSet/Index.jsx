import React from 'react'
import img1 from "../../assets/images/hedset/bg.svg"
import HeadsetData from '../../assets/MapData/pages/headsetData/Data'
import line from "../../assets/images/Rectangle.svg"
import comma from "../../assets/images/comma.svg"

const HeadSetPage = () => {
  return (
      <div className=' pt-5 sm:pt-10   '>
          <img src={img1} alt="" className='h-full w-full' />

      <div className=' relative pt-5 px-10 md:px-56'>
        {
          HeadsetData.map(data => 
          <div>
            <p className='text-gray-400'>Tips & Tricks</p>
            <h1 className=' text-xl font-semibold py-2'>{data.heading1} </h1>
            <p className='text-gray-400'>April 06, 2022</p>
            <p className=' py-5'>{data.title1} </p>
            <h1 className=' font-semibold text-lg'>
              {data.heading2}
            </h1>
              <p className=' py-5'>{data.title2} </p>
              <nav>
                <ul className=' flex flex-col gap-y-3'>
                  <li>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</li>
                  <li>At urna condimentum mattis pellentesque id nibh. Laoreet non curabitur</li>
                  <li>Magna etiam tempor orci eu lobortis elementum.</li>
                  <li>
                    Bibendum est ultricies integer quis. Semper eget duis at tellus.</li>
                </ul>
              </nav>

              <div className=' md:py-8 flex gap-5 md:gap-14 items-center'>
                <div className=' flex items-start md:gap-10 '>
                  <img src={line} alt="hjkdgsk" className=' w-full h-[50vh] md:h-full' />
                  <img src={comma} alt="hjkdgsk" />
                </div>
                <p className=' font-semibold text-lg'>
                  {data.title5}
                </p>
              </div>
              
              <div className=' py-5'>
                {data.title3}
              </div>
              <div>
                {data.title4}
              </div>

              <div className=' flex gap-5 py-5'>
                <div>
                  <img src={data.img} alt="images" />
                  <p className='pt-2'>Donec purus posuere nullam lacus aliquam.</p>
                </div>
                <div>
                  <img src={data.img} alt="images" />
                  <p className='pt-2'>Donec purus posuere nullam lacus aliquam.</p>
                </div>
              </div>

              <div className=' py-5'>
                {data.title3}
              </div>
              <div>
                {data.title4}
              </div>
          </div>
          )
       }

      </div>
      
    </div>
  )
}

export default HeadSetPage
