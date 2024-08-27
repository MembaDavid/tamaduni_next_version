import Image from 'next/image';
import React from 'react';

const Item = ({ title, content, image, buttonText, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between mb-12 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="flex flex-col justify-center items-center md:justify-between md:w-1/2 p-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left">
          {title}
        </h2>
        <p className="text-sm md:text-sm mb-6 text-center">
          {content}
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-custom-gradient text-white px-6 py-3 rounded shadow-lg hover:shadow-xl transition duration-300">
            {buttonText}
          </button>
        </div>
      </div>
      
      <div className="md:w-1/2 flex justify-center p-4">
        <div className="w-full h-full max-w-lg">
          <Image 
            src={image} 
            alt={title} 
            layout="responsive"
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
