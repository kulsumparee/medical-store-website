import { useState } from 'react';
import SavingsData from '../../assets/MapData/majorSavings/Data'
import SingleCard from '../../pages/page3';

const SavingsCompo = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    function handleCardClick(item) {
        setSelectedItem(item);
    }
    const handleBack = () => {
        setSelectedItem(null);
    };

    if (selectedItem) {
        return <SingleCard data={selectedItem} onBackClick={handleBack} />;
    }

  return (
      <div className='w-full py-10  px-5 md:px-10'> 
          <div className='border-2 p-5 md:p-5  rounded-md'>
              <h1 className=' md:text-3xl text-xl font-semibold pb-14 pt-5 text-cyan-500'>Explore Our Healthcare Products</h1>
          
          <div className=' grid sm:grid-cols-2 md:grid-cols-3  gap-5 '>
             
{
    SavingsData.map(data =>
        <div key={data.id} onClick={() => handleCardClick(data)} className=' flex flex-col' >
           
            <div className="w-full h-56 overflow-hidden rounded-md">
                <img src={data.image} alt={data.title} className='w-full h-full object-cover' />
            </div>
            <h1 className=' font-normalsemibold text-lg pt-2'>{data.title} </h1>
            <p className='pb-5'>{data.para} </p>

        </div>)
}
              </div>
              </div>
          </div>

    
  )
}

export default SavingsCompo