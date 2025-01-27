import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Divider, Image, Rate } from 'antd';
import Counter from '../../pages/page3/counter';
import img1 from "../../assets/images/profile/heart 1.svg";
import img2 from "../../assets/images/profile/graph 1.svg";
import img3 from "../../assets/images/profile/question 1.svg";
import img4 from "../../assets/images/profile/share 1.svg";
import img5 from "../../assets/images/profile/truck 1.svg";
import img6 from "../../assets/images/profile/shop 1.svg";
import img7 from "../../assets/images/profile/return-box 1.svg";
import AccordionUsage from '../../pages/page3/accordian/Index';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

const ItemDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const { item } = location.state; // Assuming location.state contains the product data
    const [mainImage, setMainImage] = useState(item?.image);
    const [selectedProduct, setSelectedProduct] = useState('image');

    const handleThumbnailClick = (productKey, imageUrl) => {
        setMainImage(imageUrl);
        setSelectedProduct(productKey);
    };

    const openPreview = () => setIsPreviewOpen(true);
    const closePreview = () => setIsPreviewOpen(false);

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cartItems.find((cartItem) => cartItem.id === item?.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                id: item?.id,
                mainImage,
                brand: item?.brand,
                title: item?.title,
                price: item?.price,
               
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));

        navigate('/AddCart');
    };

    return (

        <>
            <div>
                <div className=' flex flex-col-reverse  md:flex-row justify-between px-10'>
                    <h1 className=' py-10 text-md sm:text-lg pt-10 '>
                        Home / Healthcare / Medical Supplies / Health Products </h1>
                    <button
                        className='flex items-center text-[#f5c34b] mb-5'
                        onClick={() => navigate(-1)}
                    >
                        <span className='mr-2'>&larr;</span> Back
                    </button>

                </div>

                <div className=' grid grid-cols-12 px-5 md:px-10 md:gap-10'>

                    <div className=" hidden col-span-12 md:col-span-2 md:flex md:flex-col mb-4 gap-x-3 gap-y-3 ">

                        <div className=' w-32 h-28'> <img src={item?.product1} onClick={() => handleThumbnailClick('product1', item?.product1)} className={`border-2 cursor-pointer w-full h-full ${selectedProduct === 'product1' ? 'border-blue-500' : 'border-gray-200'}`} /></div>
                        <div className=' w-32 h-28'> <img src={item?.product2} onClick={() => handleThumbnailClick('product2', item?.product2)} className={`border-2 cursor-pointer w-full h-full ${selectedProduct === 'product2' ? 'border-blue-500' : 'border-gray-200'}`} /></div>
                        <div className=' w-32 h-28'> <img src={item?.product3} onClick={() => handleThumbnailClick('product3', item?.product3)} className={`border-2 cursor-pointer w-full h-full ${selectedProduct === 'product3' ? 'border-blue-500' : 'border-gray-200'}`} /></div>

                    </div>
                    {/* Image Section */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 max-w-full h-80">
                        <img
                            src={mainImage}
                            className="border-2 border-gray-100 object-center object-cover w-full h-full cursor-pointer"
                            alt="Main Product"
                            onClick={openPreview}
                        />
                    </div>

                    {/* Preview Modal */}
                    {isPreviewOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                            onClick={closePreview}
                        >
                            <div className="relative">
                                <div className=' w-full h-56'>
                                    <img
                                        src={mainImage}
                                        className="w-full h-full object-cover"
                                        alt="Preview"
                                    />
                                </div>
                                <button
                                    className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full  w-8 h-8"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        closePreview();
                                    }}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}

                    <div className=" md:hidden col-span-12 md:col-span-2 flex md:flex-col  mb-4 gap-x-3 gap-y-3 ">
                        <div className=' w-32 h-28'> <img src={item?.product1} onClick={() => handleThumbnailClick('product1', item?.product1)} className={`border-2 cursor-pointer w-full h-full ${selectedProduct === 'product1' ? 'border-blue-500' : 'border-gray-200'}`} /></div>
                        <div className=' w-32 h-28'> <img src={item?.product2} onClick={() => handleThumbnailClick('product2', item?.product2)} className={`border-2 cursor-pointer w-full h-full ${selectedProduct === 'product2' ? 'border-blue-500' : 'border-gray-200'}`} /></div>
                        <div className=' w-32 h-28'> <img src={item?.product3} onClick={() => handleThumbnailClick('product3', item?.product3)} className={`border-2 cursor-pointer w-full h-full ${selectedProduct === 'product3' ? 'border-blue-500' : 'border-gray-200'}`} /></div>
                    </div>

                    <div className=" col-span-12 md:col-span-12 md:mx-20 lg:mx-0 mt-10 lg:mt-0 lg:col-span-5">
                        <div className="border-2 p-3 md:p-8  sm:mb-4 lg:mb-0  rounded-md ">
                            <div className="flex items-center">
                                <h1 className="text-gray-500">{item?.brand}</h1>
                                <Divider type="vertical" />
                                <span><Rate value={5} className=' flex gap-0 text-sm' /></span> <p className=" pl-2 text-sm">{item?.reviews} </p>
                            </div>
                            <h1 className="text-xl md:font-semibold my-4">{item?.title} </h1>
                            <Divider />
                            <div className="flex gap-3">
                                <h1 className="text-2xl font-semibold">{item?.price} </h1>
                                <p className="text-xl line-through text-gray-500">{item?.originalPrice} </p>
                            </div>

                            <div className="mt-5 flex gap-3">
                                <Counter />
                                
                                    
                                    <button onClick={handleAddToCart} className="flex justify-center items-center gap-5 py-2 rounded-full text-lg bg-[#f5c34b] font-semibold w-full">
                                        Add to cart
                                    </button>
                            </div>
                            <div>
                                <Link to="/sign-in" >
                                    <button className="flex justify-center flex-wrap items-center font-semibold py-3 border-2 rounded-full w-[100%] mt-5 border-[#f5c34b]">Buy Now</button>
                                </Link>

                                <div className=" flex flex-wrap mt-5 gap-1 items-center">
                                    <div className="flex text-center gap-1 text-xl"><img src={img1} width={20} alt="wishlist" /> wishlist</div>
                                    <Divider type="vertical" />
                                    <div className="flex text-center gap-1"><img src={img2} alt="compare" width={20} /> Compare</div>
                                    <Divider type="vertical" />
                                    <div className="flex text-center "><img src={img3} alt="question" width={20} /> Askaquestion</div>
                                    <Divider type="vertical" />
                                    <div className="flex text-center gap-1"><img src={img4} alt="share" width={20} /> Share</div>
                                </div>
                                <Divider />
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <img src={img5} width={40} alt="truck img" />
                                    <h1>Free shipping, arrives by Thu, Jun 2 to Sacramento, 95829</h1>
                                </div>
                                <h1 className="my-4 text-lg ml-7"><span className="font-bold text-[#f5c34b]">Want it faster?</span> <span className="underline">Add an address</span> to see options
                                    <span className="underline"> More options</span></h1>

                                <div className="flex gap-2">
                                    <img src={img6} width={40} alt="ship img" />
                                    <h1>Sold and shipped by<br />
                                        <span className="font-bold text-[#f5c34b]">TFN-STORE | TUFAN STORE LLC Fulfilled by Zenmart</span>
                                    </h1>
                                </div>
                                <div className="flex my-5 ml-7 gap-3">
                                    <Rate value={5} className=' text-sm flex md:text-md' /> <h1>965 reviews</h1>
                                </div>

                                <div className="flex gap-2  my-4">
                                    <img src={img7} width={30} alt="return img" />
                                    <h1 className="text-lg">Free 15-Day returns <span className="underline ml-2"> Details</span></h1>
                                </div>
                                <Divider />
                            </div>

                            <div>
                                <h1 className=" font-semibold text-xl text-[#f5c34b]">More saller option(2)</h1>
                                <h1 className=" text-lg my-2">Starting from $1,249.00</h1>
                                <h1 className=" underline text-lg">Compare all sellers</h1>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=' px-5'>

                    <div className='lg:w-[55%] relative lg:bottom-80 py-10 lg:p-0'>
                        <h1 className=' text-xl font-semibold'>OverView</h1>
                        <p className=''>The first notebook of its kind, this Apple MacBook Pro is a beast. With the blazing-fast M1 Pro chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need.</p>
                        <button className=" flex items-center text-lg gap-2 text-violet-800 mt-2">Show more <DownOutlined /> </button>
                    </div>
                    <div className=' relative lg:bottom-28 lg:w-[90%]'>
                        <AccordionUsage />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetails;
