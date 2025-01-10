import { useRef } from 'react';
import { Carousel } from 'antd';
import CarocelData from '../../assets/MapData/pages/page2Data/CarocelData';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Button from '../../components/Button/Button';

const AntCarocel = () => {
    const Navigate = useRef(null);

    function LeftSlide() {
        Navigate.current.prev();
    }

    function RightSlide() {
        Navigate.current.next();
    }

    return (
        <>
            <div className="relative">
                <Carousel ref={Navigate} dots={false} className="AntCarocel p-0">
                    {CarocelData.map(data => (
                        <div key={data.id} className='relative h-[40vh] sm:h-[70vh] text-white w-full'>
                            <img src={data.src} style={{ height: "100%", width: "100%" }} alt="carocel" className='object-cover' />
                            <div className="absolute inset-0 left-20 md:left-36 top-5 sm:top-20">                       
                                    <h1 className='text-3xl md:text-4xl lg:text-5xl py-2 w-full md:w-[60%]'>{data.Heading1}</h1>
                                <p className='text-lg md:text-xl sm:py-3 md:w-[37%]'>{data.paragraph}</p>
                               
                                    <Button title="Shop Now" className="sm:py-3 px-4" />
                                
                            </div>
                        </div>
                    ))}
                </Carousel>


                <button
                    onClick={LeftSlide}
                    className='absolute left-5 top-1/2 transform -translate-y-1/2 border-2 border-black w-10 h-10 rounded-full bg-white flex items-center justify-center'
                >
                    <LeftOutlined />
                </button>


                <button
                    onClick={RightSlide}
                    className='absolute right-5 top-1/2 transform -translate-y-1/2 border-2 border-black w-10 h-10 rounded-full bg-white flex items-center justify-center'
                >
                    <RightOutlined />
                </button>
            </div>
        </>
    );
};

export default AntCarocel;
