import { Carousel } from "antd"
import { OurTeamData } from "../../assets/MapData/ourTeam/Data"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { useRef } from "react";

const MeetOurTeam = () => {
    const carouselRef = useRef(null);
    const handlePrev = () => {
        carouselRef.current.prev();
    };

    const handleNext = () => {
        carouselRef.current.next();
    };
    return (
        <div className=" my-32 relative ">
            <div className=" ">
                <h1 className=" text-4xl text-cyan-500 font-semibold py-8 text-center ">
                    Meet Our Team
                </h1>
                {/* <div className=" grid grid-cols-3 gap-5">
               
              </div> */}

                <Carousel
                    ref={carouselRef}
                    className="flex justify-center gap-9 relative left-[10%] transition-all duration-300 "
                    slidesToShow={1}
                    slidesToScroll={1}
                    style={{ width: '40%', height: '40%' }}
                    responsive={[
                        { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, spaceBetween: 20 }, },
                        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                        { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                    ]}
                >
                    {
                        OurTeamData.map(data =>
                            <div
                                key={data.id}
                                className=" p-3 rounded-md flex gap-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                            >
                                <div className="w-full h-80 overflow-hidden">
                                    <img
                                        src={data.image}
                                        alt={data.name}
                                        className="w-full h-full transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="border hover:border-none px-2">
                                <div className="flex items-center justify-between py-2 transition-opacity duration-300">
                                        <h1 className="font-semibold text-cyan-500 text-2xl">{data.name}</h1>
                                    <p className="font-medium text-lg">{data.role}</p>
                                </div>
                                <p className="text-lg transition-opacity duration-300">{data.description}</p>
                                  </div>
                                </div>
                        )
                    }
                </Carousel>
            </div>
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
    )
}

export default MeetOurTeam