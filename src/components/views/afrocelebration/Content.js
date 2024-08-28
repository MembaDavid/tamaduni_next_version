import React from 'react';
import Image from 'next/image';
import { FaGlobe, FaMapMarkerAlt, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const ContentSlider = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex">
      {/* Left Section */}
      <div className="w-1/4 flex flex-col items-center">
        <Image 
          src="/afrocelebration/kenya.png" 
          alt="Kenya Flag" 
          layout="responsive"
          width={100}
          height={100}
          className="rounded-lg mb-4"
        />
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="text-sm font-bold mb-2">Synopsis</h3>
          <p className="text-xs text-gray-600">
            Institution that collects, preserves, displays, and interprets objects, artifacts, or specimens of cultural, historical, scientific, or artistic significance for the public to view and learn from.
          </p>
        </div>
      </div>

    {/* Right Section */}
<div className="w-3/4 pl-4">
  {/* Icons Row */}
  <div className="flex justify-between items-center mb-2">
    <div className="flex space-x-2">
      <FaGlobe className="text-gray-600" />
      <FaMapMarkerAlt className="text-gray-600" />
    </div>
    <div className="mt-2">
    <h2 className="text-lg font-bold">Film Industry</h2>
    <p className="text-sm text-gray-600 italic">Film Directing</p>
  </div>
    <span className="text-xs text-gray-600">1/3</span>
  </div>

  {/* Main Image */}
  <div className="relative w-full h-64 md:h-96">
    <Image 
      src="/afrocelebration/image1.jpg" 
      alt="Main Content" 
      layout="fill"
      objectFit="cover" // or "contain" depending on your desired behavior
      className="rounded-lg"
    />
    {/* Navigation Arrows */}
    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
      <FaAngleLeft className="text-gray-600" />
    </button>
    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
      <FaAngleRight className="text-gray-600" />
    </button>
  </div> 
</div>

    </div>
  );
};

export default ContentSlider;
