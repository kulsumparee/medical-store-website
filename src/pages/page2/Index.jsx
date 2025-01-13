import  { useState } from 'react';
import AntCarocel from './Carocel';
import Line from "../../assets/images/line.svg";
import CommonData from '../Common';
import CardList from '../list/Index';
import { FirstPageData } from '../../assets/MapData/pages/page1Data/Data';
import { Rate } from 'antd';
import PaginationComp from '../list/Pagination';
import SingleCard from '../page3';

const SecondPage = () => {
    const [listData, setListData] = useState(true);  
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState(null);  

    const itemsPerPage = 15; 
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = FirstPageData.slice(indexOfFirstItem, indexOfLastItem);  

    const paginate = (pageNumber) => setCurrentPage(pageNumber);  

    const handleCardClick = (item) => {
        setSelectedItem(item);  
    };

    const handleBack = () => {
        setSelectedItem(null);  
    };

    if (selectedItem) {
        return <SingleCard data={selectedItem} onBackClick={handleBack} />;  
    }

    return (
        <div className="">
            <div className='pt-1 px-20'>
                <img src={Line} alt="Line" />
            </div>
            <h1 className='px-10 py-10 text-md sm:text-lg pt-10'>
             Home / Healthcare / Medical Supplies / Health Products            </h1>
            <div>
                <AntCarocel />  
                <div className=' px-5 md:px-10'>
                    <CommonData className="hidden" setListData={setListData} />  
                </div>
                {listData ? ( 
                    <div>
                        <div className='pt-10 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-2'>
                            {currentItems.map((data) => (
                                <div key={data.id} className="p-2 md:border" onClick={() => handleCardClick(data)}>
                                    <div className='w-full h-52'>
                                        <img src={data.image} alt={data.title} className='w-full h-full' />
                                    </div>
                                    <h1 className='font-semibold text-zinc-400'>{data.brand}</h1>
                                    <h1 className='flex flex-wrap w-52 sm:w-full py-2 font-medium'>{data.title}</h1>
                                    <div className="flex gap-2">
                                        <Rate value={5} className='text-sm' />
                                        <h1>{data.reviews}</h1>
                                    </div>
                                    <div className='py-2 flex gap-5 text-lg font-medium'>
                                        <p>{data.price}</p>
                                        <p className='text-gray-500 line-through'>{data.originalPrice}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className=''>
                            <PaginationComp
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                totalItems={FirstPageData.length}
                                paginate={paginate}
                            />
                            <div>
                                <h1 className='flex justify-center text-center'>
                                    1 – {currentItems.length} of {FirstPageData.length} properties found
                                </h1>
                            </div>
                        </div>
                    </div>
                ) : (
                    <CardList /> 
                )}
            </div>
        </div>
    );
};

export default SecondPage;
