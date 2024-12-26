import { useRef } from 'react';
import { Carousel } from 'antd';
import CaroselData from '../../assets/MapData/carocelData/CaroselData';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

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
            <div className="relative w-full h-full">
                <Carousel ref={Navigate} dots={false} className="AntCarocel">
                    {CaroselData && CaroselData.map(data => (
                        <div key={data.id} className='relative md:h-[100vh] h-[90vh] text-white w-full'>
                            <img src={data.src} style={{ height: "100vh", width: "100%" }} alt="carocel" className='object-cover' />
                            <div className="absolute inset-0 flex flex-col items-center text-center top-10">
                                
                                <h1 className='text-4xl md:text-6xl font-bold lg:text-7xl py-2'>{data.Heading1}</h1>
                                <h1 className='text-4xl md:text-3xl lg:text-6xl'>{data.Heading2}</h1>
                                <p className='text-lg md:text-xl sm:py-3'>{data.paragraph}</p>
                                <Link to="/shopNow" className=' hover:text-white'>
                                    <Button title="Learn More" className="sm:py-3 px-4 mt-10 text-xl " />
                                </Link>
                            </div>
                        </div>
                    ))}
                </Carousel>

                
                <button
                    onClick={LeftSlide}
                    className='absolute left-5 top-1/2 transform -translate-y-1/2 border-2 border-cyan-500 w-10 h-10 rounded-full bg-white flex items-center justify-center'
                >
                    <LeftOutlined className=' text-cyan-500' />
                </button>

                
                <button
                    onClick={RightSlide}
                    className='absolute right-5 top-1/2 transform -translate-y-1/2 border-2 border-cyan-500 w-10 h-10 rounded-full bg-white flex items-center justify-center'
                >
                    <RightOutlined className=' text-cyan-500' />
                </button>
            </div>
        </>
    );
};

export default AntCarocel;
