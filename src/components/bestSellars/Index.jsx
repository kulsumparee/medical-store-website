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

    function FilterData(para) {

        if (para.target.innerText === "Top20") {
            setJsonData(data)
        } else if (para.target.innerText === "Baby") {
            setJsonData(data.filter(f => f.name === "baby"))

        } else if (para.target.innerText === "Furniture") {
            setJsonData(data.filter(f => f.name === "furniture"))

        } else if (para.target.innerText === "Electronic") {
            setJsonData(data.filter(f => f.name === "electronic"))

        } else if (para.target.innerText === "All") {
            setJsonData(data)
        }
    }

    return (
        <div className="py-20  w-full h-full relative px-5">
            <div className="flex text-center justify-between pb-5">

                <div>
                    {navBar === "first" ?

                        <h1 className="text-2xl font-bold">Best Sellers</h1>

                        : navBar === "second" ?

                            <h1 className="text-xl font-bold">Save on TV, video, & home audio</h1>

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
                        <div>
                            {navBar === "first" ? (
                                <>
                                    <div className="relative md:hidden">
                                        {/* Dropdown for small screens */}
                                        <select
                                            className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none text-sm"
                                            onChange={(e) => {
                                                // Handle filter logic based on dropdown selection
                                                console.log(e.target.value);
                                            }}
                                        >
                                            <option value="Electronic">Top20</option>
                                            <option value="Baby">Baby</option>
                                            <option value="Furniture">Furniture</option>
                                            <option value="Electronic">Electronic</option>
                                            <option value="All">All</option>
                                           
                                        </select>
                                    </div>

                                    <ul className="hidden md:flex justify-center gap-5 text-lg font-medium cursor-pointer">
                                        <li onClick={FilterData}>Top20</li>
                                        <li onClick={FilterData}>Baby</li>
                                        <li onClick={FilterData}>Furniture</li>
                                        <li onClick={FilterData}>Electronic</li>
                                        <li onClick={FilterData}>All</li>
                                    </ul>
                                </>
                            ) : navBar === "second" ? (
                                <ul className=" min-w-max text-lg font-medium cursor-pointer">
                                    <li className="">
                                        <span className="hover:underline">See</span> All
                                    </li>
                                </ul>
                            ) : navBar === "third" ? (
                                <ul className="flex justify-center gap-5 text-lg font-medium cursor-pointer">
                                    <li className="">
                                        <span className="hover:underline">See</span> All
                                    </li>
                                </ul>
                            ) : null}
                        </div>
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


                            <div className="absolute flex flex-col top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                                <button className="bg-white rounded-full w-10 h-10 shadow-md hover:bg-yellow-500">
                                    <HeartOutlined />
                                </button>
                                <button className="bg-white rounded-full w-10 h-10 shadow-md hover:bg-yellow-500">
                                    <ShareAltOutlined />
                                </button>
                            </div>


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
