import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../HomePage/Footer';
import { MapPin, Maximize, Bed, Bath, PhoneCall, Mail, X, Waves, Dumbbell, ShieldCheck, Zap, Building2, Trees, ParkingCircle, Car } from 'lucide-react';
import { MotionCarousel } from '../components/animate-ui/components/community/motion-carousel';

const AMENITIES = [
  { icon: <Waves      size={18} className="text-blue-600" />, label: 'Swimming Pool'   },
  { icon: <Dumbbell   size={18} className="text-blue-600" />, label: 'Gymnasium'        },
  { icon: <ShieldCheck size={18} className="text-blue-600" />, label: '24/7 Security'   },
  { icon: <Zap        size={18} className="text-blue-600" />, label: 'Power Backup'     },
  { icon: <Building2  size={18} className="text-blue-600" />, label: 'Club House'       },
  { icon: <Trees      size={18} className="text-blue-600" />, label: 'Park'             },
  { icon: <ParkingCircle size={18} className="text-blue-600" />, label: 'Reserved Parking' },
  { icon: <Car        size={18} className="text-blue-600" />, label: 'Visitor Parking'  },
];

const PropertyDetails = () => {
  const { propertyTitle } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // If accessed directly without state, we'd normally fetch data here.
  // We'll use location state or default mock data.
  const property = location.state || {
    title: decodeURIComponent(propertyTitle || 'Property Name'),
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    price: 'Price on Request',
    location: 'Vastrapur, Ahmedabad',
    sqft: '2,000 sqft',
    bhk: '3 BHK',
    bath: '3 Bath'
  };

  const [selectedPhoto, setSelectedPhoto] = React.useState(null);

  const CAROUSEL_OPTIONS = { loop: true };
  const PROPERTY_PHOTOS = [
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1628744276664-2d0497bad49c?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&q=80&w=1200',
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <Navbar />
      
      {/* Hero Image Section */}
      <div className="w-full h-[60vh] relative pt-20">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{property.title}</h1>
            <div className="flex items-center text-gray-200 text-lg">
              <MapPin className="mr-2" size={24} />
              <span>{property.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column (Details) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Quick Stats */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-8 justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm mb-1">Price</p>
                <p className="text-3xl font-bold text-[#0f172a]">{property.price}</p>
              </div>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center bg-blue-50 w-12 h-12 rounded-md mb-2 mx-auto">
                    <Maximize className="text-blue-600" size={24} />
                  </div>
                  <p className="font-semibold text-gray-900">{property.sqft}</p>
                  <p className="text-xs text-gray-500">Area</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center bg-blue-50 w-12 h-12 rounded-md mb-2 mx-auto">
                    <Bed className="text-blue-600" size={24} />
                  </div>
                  <p className="font-semibold text-gray-900">{property.bhk}</p>
                  <p className="text-xs text-gray-500">Beds</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center bg-blue-50 w-12 h-12 rounded-md mb-2 mx-auto">
                    <Bath className="text-blue-600" size={24} />
                  </div>
                  <p className="font-semibold text-gray-900">{property.bath}</p>
                  <p className="text-xs text-gray-500">Baths</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Welcome to {property.title}, an exquisite property located in the heart of {property.location}. 
                This beautifully designed space boasts a spacious {property.sqft} of living area, perfectly 
                tailored for a modern lifestyle. Featuring {property.bhk} and {property.bath}, every inch 
                of this property screams luxury and comfort. Enjoy panoramic views, ample natural light, 
                and state-of-the-art facilities that make everyday living a celebration.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                Whether you're looking for a peaceful retreat or a vibrant community, this property offers 
                the best of both worlds. The interiors are crafted with premium materials and attention to 
                detail, ensuring a sophisticated ambiance.
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {AMENITIES.map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-gray-700">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <span className="font-medium text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Photos Section */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Property Photos</h2>
              <div className="w-full">
                <MotionCarousel slides={PROPERTY_PHOTOS} options={CAROUSEL_OPTIONS} onSlideClick={setSelectedPhoto} />
              </div>
            </div>

          </div>

          {/* Right Column (Contact & Meta) */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">Interested in this property?</h3>
              
              <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="w-14 h-14 bg-blue-100 rounded-md flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">R</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Real Estate Agent</p>
                  <p className="text-sm text-gray-500">Listed 2 days ago</p>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-[#1a1f3c] text-white py-3.5 rounded-xl font-semibold hover:bg-opacity-90 transition-all flex justify-center items-center">
                  <PhoneCall className="mr-2" size={20} />
                  Contact Agent
                </button>
                <button className="w-full bg-white text-[#1a1f3c] border-2 border-[#1a1f3c] py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-all flex justify-center items-center">
                  <Mail className="mr-2" size={20} />
                  Send Inquiry
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Property Facts</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between"><span>Type:</span> <span className="font-medium text-gray-900">{property.bhk.includes('Villa') ? 'Villa' : 'Apartment/Condo'}</span></li>
                  <li className="flex justify-between"><span>Status:</span> <span className="font-medium text-green-600">Ready to Move</span></li>
                  <li className="flex justify-between"><span>City:</span> <span className="font-medium text-gray-900">{property.location}</span></li>
                  <li className="flex justify-between"><span>Furnishing:</span> <span className="font-medium text-gray-900">Semi-Furnished</span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full Size Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4" onClick={() => setSelectedPhoto(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 z-[101]" onClick={() => setSelectedPhoto(null)}>
            <X size={32} />
          </button>
          <img src={selectedPhoto} alt="Full screen" className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PropertyDetails;
