import { doctors } from "../../assets/MapData/reviewsData/Data"

const OurReviews = () => {
  return (
      <div className="container mx-auto text-center py-20">
          <h2 className="text-3xl text-cyan-500 font-semibold mb-6">Recommended by Experts</h2>
          <p className="text-gray-600 mb-8">
              Our medical store is trusted by top doctors for providing quality substances.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {doctors.map((doctor, index) => (
                  <div style={{ boxShadow:'0px 3px 8px rgba(0, 0, 0, 0.10)'}} key={index} className="bg-white p-6 rounded-lg">
                      <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-20 h-20 mx-auto rounded-full mb-4"
                      />
                      <h3 className="text-lg font-bold">{doctor.name}</h3>
                      <p className="text-sm text-gray-500">{doctor.specialization}</p>
                      <p className="mt-4 text-gray-700">{doctor.recommendation}</p>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default OurReviews