import { Carousel, Rate, } from 'antd';
import  { useRef, useState } from 'react';
import { LeftOutlined, RightOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';

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
        } else if (para.target.innerText === "Surgical Supplies") {
            setJsonData(data.filter(f => f.name === "Surgical"))

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
            <div className="flex justify-between pb-5">

                <div>
                    {navBar === "first" ?

                        <h1 className="text-2xl text-cyan-500 font-bold"> Best Healthcare Products</h1>

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

                                        <select
                                            className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none text-sm"
                                            onChange={(e) => {

                                                console.log(e.target.value);
                                            }}
                                        >
                                            <option value="Electronic">Top 20</option>
                                            <option value="Baby">Surgical Supplies</option>
                                            <option value="Furniture">Baby Care</option>
                                            <option value="Electronic">Medicine</option>
                                            <option value="All">All</option>

                                        </select>
                                    </div>

                                    <ul className="hidden md:flex justify-center gap-5 text-lg font-medium cursor-pointer">
                                        <li className='hover:text-cyan-500' onClick={FilterData}>Top 20</li>
                                        <li className='hover:text-cyan-500' onClick={FilterData}>Surgical Supplies</li>
                                        <li className='hover:text-cyan-500' onClick={FilterData}>Baby Care</li>
                                        <li className='hover:text-cyan-500' onClick={FilterData}>Medicine</li>
                                        <li className='hover:text-cyan-500' onClick={FilterData}>All</li>
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
                            <div className=' wfull h-52'>
                                <img src={data.image} alt={data.title}  className="w-full h-full rounded-sm object-cover" />

                            </div>

                            <div className="absolute flex flex-col top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                                <button className="bg-white rounded-full w-10 h-10 shadow-md hover:bg-cyan-500">
                                    <HeartOutlined />
                                </button>
                                <button className="bg-white rounded-full w-10 h-10 shadow-md hover:bg-cyan-500">
                                    <ShareAltOutlined />
                                </button>
                            </div>


                            <div className="absolute bottom-0 left-0 w-full bg-cyan-500 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                Add to Cart
                            </div>
                        </div>

                        <p className="font-semibold text-gray-400 pt-2">{data.brand}</p>
                        <h3 className="sm:font-md lg:text-[16px] font-medium lg:leading-6  hover:text-cyan-500">
                            {data.title}
                        </h3>
                        <div className=" pt-2 flex gap-1">
                            <Rate className=' space-x-1' />
                            <p>{data.reviews}</p>
                        </div>
                        <div className="flex gap-3 pt-2">
                            <p className="text-[16px] font-bold">{data.price1}</p>
                            <p className=" line-through text-[16px] text-gray-400">{data.price2}</p>
                        </div>
                    </div>
                ))}
            </Carousel>

            <div className="flex absolute top-1/2 left-0 right-0 justify-between px-4 transform -translate-y-1/2">
                <button
                    onClick={handlePrev}
                    className="border-2 border-cyan-500 bg-white w-10 h-10 rounded-full flex items-center justify-center"
                >
                    <LeftOutlined className='text-cyan-500' />
                </button>
                <button
                    onClick={handleNext}
                    className="border-2 border-cyan-500 bg-white w-10 h-10 rounded-full flex items-center justify-center"
                >
                    <RightOutlined className='text-cyan-500' />
                </button>
            </div>
        </div>
    );
};

export default SallarComponent;
