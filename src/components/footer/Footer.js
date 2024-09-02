import React from "react";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-around items-center space-y-6 md:space-y-0 px-4">
        {/* Logo Section */}
        <div className="">
          <div className="hidden md:block">
            <Image
              src="/logo/tamaduni_logo.png"
              alt="Tamaduni Logo"
              width={80}
              height={80}
            />
          </div>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold">Social</h3>
          <a
            href="https://instagram.com"
            className="flex  items-center gap-x-2 text-gray-600 hover:text-black"
          >
            <FaInstagram />
            Instagram
          </a>
          <a
            href="https://youtube.com"
            className="flex  items-center gap-x-2 text-gray-600 hover:text-black"
          >
            <FaYoutube />
            Youtube
          </a>
          <a
            href="https://twitter.com"
            className="flex  items-center gap-x-2 text-gray-600 hover:text-black"
          >
            <FaTwitter />
            Twitter
          </a>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-bold">Social</h3>
          <a
            href="https://instagram.com"
            className="flex  items-center gap-x-2 text-gray-600 hover:text-black"
          >
            <FaInstagram />
            Instagram
          </a>
          <a
            href="https://youtube.com"
            className="flex  items-center gap-x-2 text-gray-600 hover:text-black"
          >
            <FaYoutube />
            Youtube
          </a>
          <a
            href="https://twitter.com"
            className="flex  items-center gap-x-2 text-gray-600 hover:text-black"
          >
            <FaTwitter />
            Twitter
          </a>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-bold">Social</h3>
          <a
            href="https://instagram.com"
            className="flex  items-center gap-x-2 text-gray-600 hover:text-black"
          >
            <FaInstagram />
            Instagram
          </a>
          <a
            href="https://youtube.com"
            className="flex  items-center gap-x-2 text-gray-600 hover:text-black"
          >
            <FaYoutube />
            Youtube
          </a>
          <a
            href="https://twitter.com"
            className="flex  items-center gap-x-2 text-gray-600 hover:text-black"
          >
            <FaTwitter />
            Twitter
          </a>
        </div>

        {/* Menu Icon Section */}
        {/* <div className="md:hidden">
          <button className="text-gray-600 hover:text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
