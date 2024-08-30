'use client'
import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";

const AfroTopbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Museum",
    },
    {
      name: "Menu Item",
    },
    {
      name: "Menu Item",
    },
  ];

  return (
    <div className="py-2 px-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
      {/* Search Section */}
      <div className="flex w-full md:w-auto items-center bg-gray-100 rounded-full px-4 py-2">
        <FaBars
          className="text-gray-600 mr-3 cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <input
          type="text"
          placeholder="Country i.e Kenya"
          className="bg-transparent text-sm outline-none text-gray-600 placeholder-gray-500 w-full"
        />
        <FaSearch className="text-gray-600 ml-3" />
      </div>

      {/* Menu Items */}
      <div
        className={`flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center md:flex ${
          menuOpen ? "flex" : "hidden md:flex"
        } w-full md:w-auto`}
      >
        <select className="bg-gray-100 text-sm text-gray-600 py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-black w-full md:w-auto">
          <option className="text-sm">Heritage Places</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>

        {menuItems.map((item, index) => (
          <button
            key={index}
            className="bg-black text-sm text-white py-2 px-2 rounded-md w-full md:w-auto"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AfroTopbar;
