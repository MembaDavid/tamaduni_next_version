import Image from "next/image";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        src="https://images.unsplash.com/photo-1515318650024-02fe7e49c5b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Main Content"
        layout="fill"
        objectFit="cover" // or "contain" depending on your desired behavior
        className="rounded-lg"
      />
      {/* Navigation Arrows */}
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-200 p-1 rounded-full transition duration-300">
        <FaAngleLeft className="text-gray-600" />
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-200 p-1 rounded-full transition duration-300">
        <FaAngleRight className="text-gray-600" />
      </button>
    </div>
  );
};

export default Gallery;
