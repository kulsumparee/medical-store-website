import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { OurTeamData } from "../../assets/MapData/ourTeam/Data";

const ResponsiveSwiper = () => {
    return (
        <div className="px-4 md:py-32">
            <h1 className=" md:text-3xl text-xl font-semibold text-cyan-500 py-10 text-center ">
                Meet Our Team
            </h1>
            <Swiper
                navigation={true}
                spaceBetween={20}
                slidesPerView={1}
                pagination={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {OurTeamData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
                            {/* Image Section */}
                            <div className="relative h-72 w-full">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="object-cover w-full h-full"
                                />

                            </div>
                            {/* Text Section */}
                            <div className="md:p-4 py-4 px-2">
                                <div className="flex justify-between">
                                    <h3 className="text-xl font-semibold text-cyan-500">
                                        {item.name}
                                    </h3>
                                    <p className="text-lg font-semibold text-gray-500">
                                        {item.role}
                                    </p>
                                </div>
                                <p className="text-gray-600 text-lg mt-2">{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};
export default ResponsiveSwiper;