import CategoriesData from '../../assets/images/Data'

const CategoriesCompo = () => {
  return (
      <div className=' flex overflow-auto gap-4  py-10 px-3'>
          {CategoriesData.map(data =>
              <div key={data.id} className=' min-w-max w-full cursor-pointer  flex flex-col items-center gap-2'>
              <img src={data.image} alt={data.title} width={42} height={42} />
              <h1>{data.title}</h1>
            
          </div> )}
      </div>
  )
}

export default CategoriesCompo