import React from 'react';
import { Carousel } from 'antd';
import CaroselData from './CaroselData';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


const AntCarocel= () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel
            className='AntCarocel'
            arrows={true}
            afterChange={onChange}>
            
                {
                    CaroselData && CaroselData.map(data => (
                        <div key={data.id} className=' relative h-[50vh] sm:h-[90vh]  text-white w-full '>
                            <img src={data.src} style={{height:"100%", width:"100%"}} alt="carocel" className=' object-cover' />
                            <div className=" absolute inset-0 flex flex-col justify-center  left-[20%] md:left-[45%] ">
                                <Button title="Limited Edition" className="bg-slate-300 mt-5" />
                                <h1 className=' text-4xl md:text-6xl lg:text-7xl py-2 '>{data.Heading1}</h1>
                                <h1 className=' text-4xl md:text-6xl lg:text-7xl'>{data.Heading2}</h1>
                                <p className=' text-lg md:text-xl sm:py-3'>{data.paragraph} </p>
                                <Link to="/shopNow" >
                                    <Button title="Shop Now" className=" sm:py-3 px-4" />
                                </Link>
                              
                            </div>

                        </div>
                    ))
                }
              
            
            
        </Carousel>
    );
};
export default AntCarocel;