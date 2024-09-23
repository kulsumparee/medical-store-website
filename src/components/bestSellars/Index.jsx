import { Carousel, Rate } from 'antd';
import React, { useRef, useState } from 'react';
import { LeftOutlined, RightOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import sallerProducts from '../../assets/MapData/bestSellarsData/data';

const SallarComponent = ({ navBar, data }) => {
    const [jsonData, setJsonData] = useState(data)

    const carouselRef = useRef(null);

    const handlePrev = () => {
        carouselRef.current.prev();
    };

    const handleNext = () => {
        carouselRef.current.next();
    };

    return (
        <div className="py-20 sm:px-5 w-full h-full relative">
            <div className="sm:flex text-center sm:justify-between pb-5">

                <div>
                    {navBar === "first" ?

                        <h1 className="text-2xl font-bold">Best Sellers</h1>

                        : navBar === "second" ?

                            <h1 className="text-2xl font-bold">Save on TV, video, & home audio</h1>

                            : navBar === "third" ?
                                <h1 className="text-2xl font-bold">Top-rated products</h1>
                                : navBar === "forth" ?
                                    <h1 className="text-2xl font-bold">Related products</h1>
                                    : navBar === "fifth" ?
                                        <h1 className="text-2xl font-bold">You may also like…</h1>
                                        : "none"

                    }
                </div>

                <div>
                    <nav>
                        <ul className="flex justify-center gap-5 text-lg font-medium cursor-pointer">
                            {navBar === "first" ?
                                <>
                                    <li>Top20</li>
                                    <li>Baby</li>
                                    <li>Furniture</li>
                                    <li>Electronic</li>
                                    <li>All</li>
                                </>
                                : navBar === "second" ?
                                    <li className=''><span className='hover:underline'>See</span> All</li>
                                    : navBar === "third" ?
                                        <li className=''><span className='hover:underline'>See</span> All</li>
                                        : navBar === "forth" ?
                                            <></>
                                            : navBar === "fifth" ?
                                                <></>
                                                : "none"
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            <Carousel
                ref={carouselRef}
                arrows={false}
                dots={false}
                slidesToShow={5}
                slidesToScroll={1}
                responsive={[
                    { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
                    { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                    { breakpoint: 576, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                    { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                ]}
            >
                {jsonData.map((data) => (
                    <div className="p-3  hover:shadow-2xl hover:bg-slate-50 transform group" key={data.id}>
                        <div className="relative">
                            <img src={data.image} alt={data.title} width={240} height={240} className="w-full" />

                            {/* Hover buttons */}
                            <div className="absolute flex flex-col top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                                <button className="bg-white rounded-full w-10 h-10 shadow-md hover:bg-yellow-500">
                                    <HeartOutlined />
                                </button>
                                <button className="bg-white rounded-full w-10 h-10 shadow-md hover:bg-yellow-500">
                                    <ShareAltOutlined />
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <div className="absolute bottom-0 left-0 w-full bg-yellow-500 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                Add to Cart
                            </div>
                        </div>

                        <p className="font-medium text-gray-400 pt-2">{data.brand}</p>
                        <h3 className="sm:font-md lg:text-lg font-medium lg:leading-6 hover:underline hover:text-blue-500">
                            {data.title}
                        </h3>
                        <div className="flex pt-2">
                            <Rate allowHalf className="text-sm" value={data.rating} disabled />
                            <p className="text-md">{data.reviews}</p>
                        </div>
                        <div className="flex gap-5 pt-2">
                            <p className="text-lg">{data.price}</p>
                            <p className="text-lg line-through text-gray-400">{data.originalPrice}</p>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* Prev and Next buttons */}
            <div className="flex absolute top-1/2 left-0 right-0 justify-between px-4 transform -translate-y-1/2">
                <button
                    onClick={handlePrev}
                    className="border-2 border-black bg-white w-10 h-10 rounded-full flex items-center justify-center"
                >
                    <LeftOutlined />
                </button>
                <button
                    onClick={handleNext}
                    className="border-2 border-black bg-white w-10 h-10 rounded-full flex items-center justify-center"
                >
                    <RightOutlined />
                </button>
            </div>
        </div>
    );
};

export default SallarComponent;
