import { Link } from 'react-router-dom';
import SavingsData from '../../assets/MapData/majorSavings/Data';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const SavingsCompo = () => {
    return (
        <div className='w-full py-10 px-5 md:px-10'>
            <div className='border-2 p-5 md:p-5 rounded-md'>
                <h1 className='md:text-3xl text-xl font-semibold pb-14 pt-5 text-black'>
                    Explore Our Healthcare Products
                </h1>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {SavingsData.map(data => (
                        <motion.div
                            key={data.id}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        >
                            <Link to={`/details/${data.id}`}>
                                <div className='flex flex-col'>
                                    <div className="w-full h-56 overflow-hidden rounded-md">
                                        <img src={data.image} alt={data.title} className='w-full h-full object-cover' />
                                    </div>
                                    <h1 className='font-semibold text-lg pt-2'>{data.brand}</h1>
                                    <p className='pb-5'>{data.title}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SavingsCompo;
