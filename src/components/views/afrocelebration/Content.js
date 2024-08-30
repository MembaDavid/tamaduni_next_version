"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaAngleLeft,
  FaAngleRight,
  FaGalacticRepublic,
} from "react-icons/fa";
import Gallery from "./Gallery";
import Map from "./Map";
import List from "./list/List";

const ContentSlider = () => {
  const [selectedTab, setSelectedTab] = useState("list");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
      {/* Left Section */}
      <div className="w-full md:w-1/4 flex flex-col items-center">
      <div className="sm:w-1/2 md:w-full relative w-full ">
        <Image
          src="/afrocelebration/kenya.png"
          alt="Kenya Flags"
          layout="responsive"
          width={100}
          height={100}
          className="rounded-lg mb-4"
        />
        </div>
        <div className="bg-gray-200 p-4 rounded-lg w-full flex flex-col items-center">
          <h3 className="text-sm font-bold mb-2">Synopsis</h3>
          <p className="text-xs text-gray-600">
            Institution that collects, preserves, displays, and interprets
            objects, artifacts, or specimens of cultural, historical,
            scientific, or artistic significance for the public to view and
            learn from.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/4 pl-0 md:pl-4">
        {/* Icons Row */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex space-x-2">
            <FaGalacticRepublic
              size={24}
              className={`cursor-pointer p-1 ${
                selectedTab === "gallery"
                  ? "text-black bg-slate-400 text-xl"
                  : "text-gray-600 text-lg"
              }`}
              onClick={() => handleTabClick("gallery")}
            />
            <FaGlobe
              size={24}
              className={`cursor-pointer p-1 ${
                selectedTab === "list"
                  ? "text-black bg-slate-400 text-xl "
                  : "text-gray-600 text-lg"
              }`}
              onClick={() => handleTabClick("list")}
            />
            <FaMapMarkerAlt
              size={24}
              className={`cursor-pointer p-1 ${
                selectedTab === "map"
                  ? "text-black bg-slate-400 text-xl"
                  : "text-gray-600 text-lg"
              }`}
              onClick={() => handleTabClick("map")}
            />
          </div>
          <div className="hidden md:block mt-2">
            <h2 className="text-lg font-bold">Film Industry</h2>
            <p className="text-sm text-gray-600 italic">Film Directing</p>
          </div>
          <span className="hidden md:block text-xs text-gray-600">1/3</span>
        </div>

        {/* Dynamic Content Area */}
        <div className="mt-2">
          {selectedTab === "gallery" && <Gallery />}
          {selectedTab === "list" && <List />}
          {selectedTab === "map" && <Map />}
        </div>
      </div>
    </div>
  );
};

export default ContentSlider;
