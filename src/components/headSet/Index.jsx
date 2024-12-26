import HeadSetData from '../../assets/MapData/headsetData/Data'
import { Link } from 'react-router-dom'

const HeadSetComp = () => {
  return (
    <div className=' py-32'>
      {
        HeadSetData.map(data =>
          <div key={data.id} className='relative '>
            <div className=" w-full h-full ">
              <img src={data.image} alt={data.title2} className=' h-full w-full  object-cover ] ' />
            </div>

            <div className=' absolute top-14 sm:top-20 left-5 sm:left-10'>
              <p className=' text-cyan-700 font-medium sm:text-lg'>{data.para}</p>
              <h1 className=' text-sm sm:text-lg md:text-5xl font-semibold sm:mt-2'>{data.title1}</h1>
              <h1 className=' text-sm sm:text-lg md:text-5xl font-semibold sm:mb-2'>{data.title2}</h1>
              <Link to="/headset" >
                <button className='  font-medium sm:text-lg hover:underline pt-5'>{data.button}</button>
              </Link>
            </div>
          </div>)
      }
    </div>
  )
}

export default HeadSetComp