import HeadSetData from '../../assets/MapData/headsetData/Data'
import { Link } from 'react-router-dom'

const HeadSetComp = () => {
  return (
    <div className=' md:py-20'>
      {
        HeadSetData.map(data => (
          <div key={data.id} className="relative">
            {/* Image Section */}
            <div className="w-full  h-[45vh] md:h-[75vh] ">
              <img
                src={data.image}
                alt={data.title2}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="absolute top-10 sm:top-20 md:top-20 left-5 sm:left-10 md:left-16 lg:left-20">
              <p className="text-cyan-700 font-medium text-sm sm:text-lg md:text-xl">
                {data.para}
              </p>
              <h1 className="text-base sm:text-lg md:text-4xl lg:text-5xl font-semibold sm:mt-2">
                {data.title1}
              </h1>
              <h1 className="text-base sm:text-lg md:text-4xl lg:text-5xl font-semibold sm:mb-2">
                {data.title2}
              </h1>
              <Link to="/headset">
                <button className="font-medium text-sm sm:text-lg md:text-xl hover:underline pt-5">
                  {data.button}
                </button>
              </Link>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default HeadSetComp