import { doctors } from "../../assets/MapData/reviewsData/Data";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const OurReviews = () => {
    return (
        <div className="container mx-auto text-center md:py-20 px-5 md:px-10">
            <h2 className=" text-2xl md:text-4xl text-black font-semibold mb-6">Recommended by Experts</h2>
            <p className="text-gray-600 mb-8">
                Our medical store is trusted by top doctors for providing quality substances.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {doctors.map((doctor, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        style={{ boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.10)' }}
                        className="bg-white p-6 rounded-lg"
                    >
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-20 h-20 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-lg font-bold">{doctor.name}</h3>
                        <p className="text-sm text-gray-500">{doctor.specialization}</p>
                        <p className="mt-4 text-gray-700">{doctor.recommendation}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default OurReviews;
