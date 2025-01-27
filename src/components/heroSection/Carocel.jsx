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
            <div className="relative w-full">
                <Carousel ref={Navigate} dots={false} className="AntCarousel">
                    {CaroselData &&
                        CaroselData.map((data) => (
                            <div
                                key={data.id}
                                className="relative h-[65vh] sm:h-[60vh] md:h-[80vh] lg:h-[100vh] text-white w-full"
                            >
                                <img
                                    src={data.src}
                                    alt="carousel"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-2">
                                        {data.Heading1}
                                    </h1>
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                                        {data.Heading2}
                                    </h1>
                                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl py-3">
                                        {data.paragraph}
                                    </p>
                                    <Link to="/shopNow" className="hover:text-white">
                                        <Button
                                            title="Learn More"
                                            className="sm:py-3 px-4 mt-10 text-base sm:text-lg lg:text-xl"
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                </Carousel>


                
                <button
                    onClick={LeftSlide}
                    className='absolute left-1 md:left-5 top-1/2 transform -translate-y-1/2 border-2 border-[#f5c34b] w-10 h-10 rounded-full bg-white flex items-center justify-center'
                >
                    <LeftOutlined className=' text-[#f5c34b]' />
                </button>

                
                <button
                    onClick={RightSlide}
                    className='absolute right-1 md:right-5 top-1/2 transform -translate-y-1/2 border-2 border-[#f5c34b] w-10 h-10 rounded-full bg-white flex items-center justify-center'
                >
                    <RightOutlined className=' text-[#f5c34b]'/>
                </button>
            </div>
        </>
    );
};

export default AntCarocel;
