import { Carousel, Rate } from 'antd';
import { useRef, } from 'react';
import { LeftOutlined, RightOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import sallerProducts from '../../assets/MapData/bestSellarsData/data';

const SallarComponent = ({ navBar}) => {
    const carouselRef = useRef(null);

    const handlePrev = () => {
        carouselRef.current.prev();
    };

    const handleNext = () => {
        carouselRef.current.next();
    };



  

    return (
        <div className="md:py-10 py-10 w-full h-full relative px-5">
            <div className="flex justify-between pb-5 px-4">
                {/* Navbar Logic */}
                <div>
                    {navBar === "first" ? (
                        <h1 className="md:text-3xl text-xl font-semibold text-cyan-500 ">Best Healthcare Products</h1>
                    ) : navBar === "second" ? (
                        <h1 className="md:text-3xl text-xl font-semibold text-cyan-500 ">Save on TV, video, & home audio</h1>
                    ) : navBar === "third" ? (
                        <h1 className="md:text-3xl text-xl font-semibold text-cyan-500">Top-rated products</h1>
                    ) : navBar === "forth" ? (
                        <h1 className="md:text-3xl text-xl font-semibold text-cyan-500">Related products</h1>
                    ) : navBar === "fifth" ? (
                        <h1 className="md:text-3xl text-xl font-semibold text-cyan-500">You may also like…</h1>
                    ) : (
                        "none"
                    )}
                </div>
                {/* Filters */}
                <div>
                    <nav>
                        <ul className="hidden md:flex justify-center gap-5 text-lg font-medium cursor-pointer">
                            <li className="hover:text-cyan-500" >
                                Top 20
                            </li>
                            <li className="hover:text-cyan-500" >
                                Surgical Supplies
                            </li>
                            <li className="hover:text-cyan-500" >
                                Baby Care
                            </li>
                            <li className="hover:text-cyan-500" >
                                Medicine
                            </li>
                            <li className="hover:text-cyan-500" >
                                All
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Carousel */}
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
                    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                ]}
            >
                {sallerProducts.map((data) => (
                    <Link to={`/details/${data.id}`}
                        className="p-3 hover:shadow-2xl hover:bg-slate-50 transform group"
                        key={data.id}
                    >
                        <div className="relative">
                            <div className="w-full h-52">
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="w-full h-full rounded-sm object-cover"
                                />
                            </div>
                            <div className="absolute flex flex-col top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                                <button className="bg-white rounded-full w-10 h-10 shadow-md hover:bg-cyan-500">
                                    <HeartOutlined />
                                </button>
                                <button className="bg-white rounded-full w-10 h-10 shadow-md hover:bg-cyan-500">
                                    <ShareAltOutlined />
                                </button>
                            </div>
                            {/* Add to Cart */}
                            <Link to="/cart">
                                <div
                                    className="absolute bottom-0 left-0 w-full bg-cyan-500 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                                >
                                    Add to Cart
                                </div>
                            </Link>
                        </div>
                        <p className="font-semibold text-gray-400 pt-2">{data.brand}</p>
                        <h3 className="sm:font-md lg:text-[16px] font-medium lg:leading-6 hover:text-cyan-500">
                            {data.title}
                        </h3>
                        <div className="pt-2 flex gap-1">
                            <Rate value={5} className=" text-sm" />
                            <p>{data.reviews}</p>
                        </div>
                        <div className="flex gap-3 pt-2">
                            <p className="text-[16px] font-bold">{data.price1}</p>
                            <p className="line-through text-[16px] text-gray-400">{data.price2}</p>
                        </div>
                    </Link>
                ))}
            </Carousel>

            {/* Navigation Arrows */}
            <div className="flex absolute top-1/2 left-0 right-0 justify-between px-4 transform -translate-y-1/2">
                <button
                    onClick={handlePrev}
                    className="border-2 border-cyan-500 bg-white w-10 h-10 rounded-full flex items-center justify-center"
                >
                    <LeftOutlined className="text-cyan-500" />
                </button>
                <button
                    onClick={handleNext}
                    className="border-2 border-cyan-500 bg-white w-10 h-10 rounded-full flex items-center justify-center"
                >
                    <RightOutlined className="text-cyan-500" />
                </button>
            </div>
        </div>
    );
};

export default SallarComponent;
