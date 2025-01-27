import ShopData from '../../assets/MapData/shopCategories/Data';
import { Rate } from 'antd';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const ShopCategoriesComp = () => {


    return (
        <div>
            <div className="md:flex justify-between pb-10 px-5 mt-20">
                <h1 className='flex justify-center pb-4 md:pb-0 md:text-3xl text-xl font-semibold text-black'> Shop Healthcare Categories </h1>

                <nav>
                    <div className="relative md:hidden">
                        <select
                            className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none text-sm"
                            onChange={(e) => {
                                console.log(e.target.value);
                            }} >
                            <option value="Electronic">Surgical Tools</option>
                            <option value="Baby">Baby Care</option>
                            <option value="Clothing">Medicines</option>
                            <option value="Furniture">Mobility Aids</option>
                            <option value="Grocery">All</option>
                        </select>
                    </div>

                    <ul className="hidden md:flex flex-wrap justify-center gap-4 font-medium text-sm md:text-lg text-gray-500">
                        <li className="cursor-pointer hover:border-b-2 border-[#f5c34b] hover:text-[#f5c34b]">Surgical Tools</li>
                        <li className="cursor-pointer hover:border-b-2 border-[#f5c34b] hover:text-[#f5c34b]">Baby Care</li>
                        <li className="cursor-pointer hover:border-b-2 border-[#f5c34b] hover:text-[#f5c34b]">Medicines</li>
                        <li className="cursor-pointer hover:border-b-2 border-[#f5c34b] hover:text-[#f5c34b]">Mobility Aids</li>
                        <li className="cursor-pointer hover:border-b-2 border-[#f5c34b] hover:text-[#f5c34b]">All</li>
                    </ul>
                </nav>
            </div>

            <div className='sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-6 px-10 md:px-0 flex flex-col items-center '>
                {
                    ShopData.map(data =>
                        <motion.div
                            key={data.id}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            onClick={() => handleCardClick(data)}
                            className="p-3 hover:shadow-2xl cursor-pointer w-full h-full hover:bg-slate-50 transform group"
                        >
                            <Link to="/details" state={{ item: data }}>
                                <div>
                                    <div className=' w-full h-44'>
                                        <img src={data.image} alt={data.title} className='rounded-sm w-full h-full' />
                                    </div>
                                    <h1 className='text-md md:text-lg font-medium text-gray-400 py-2'>{data.brand}</h1>
                                    <h1 className='text-md md:text-md font-medium leading-6 hover:text-black'>{data.title}</h1>

                                    <div className='flex items-center gap-2'>
                                        <Rate value={5} className='text-sm lg:text-lg py-2' />
                                        <p>{data.reviews} </p>
                                    </div>
                                    <div className='flex gap-3 text-lg'>
                                        <p>{data.price}</p>
                                        <p className='text-gray-500 line-through'>{data.originalPrice} </p>
                                    </div>
                                    
                                </div>
                            </Link>
                        </motion.div>
                    )
                }
            </div>
        </div>
    );
};

export default ShopCategoriesComp;
