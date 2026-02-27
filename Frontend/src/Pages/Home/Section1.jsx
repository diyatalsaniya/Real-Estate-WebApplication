import React from 'react'

const properties = [
  {
    id: 1,
    type: "Town House",
    count: 2,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
  {
    id: 2,
    type: "Modern Villa",
    count: 10,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
  },
  {
    id: 3,
    type: "Apartment",
    count: 3,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
  {
    id: 4,
    type: "Single Family",
    count: 5,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    id: 5,
    type: "Office",
    count: 3,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
];

const Section1 = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Explore Our Properties
          </h2>
          {/* <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet</p> */}
        </div>

        {/* Cards */}
        <div className="flex gap-4">
          {properties.map((prop) => (
            <div key={prop.id}
              className="flex-1 rounded-2xl overflow-hidden relative cursor-pointer"
              style={{ height: "300px" }}>
              {/* Image */}
              <img
                src={prop.image}
                alt={prop.type}
                className="w-full h-full object-cover"
              />

              {/* Top gradient + text */}
              <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <p className="text-white font-semibold text-sm">{prop.type}</p>
                <p className="text-white/70 text-xs mt-0.5">
                  {prop.count} {prop.count === 1 ? "Property" : "Properties"}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Section1