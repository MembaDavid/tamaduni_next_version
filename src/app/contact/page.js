import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <section className="relative w-full h-[300px] mb-12">
        <div className="absolute inset-0 bg-blue-600 bg-opacity-80 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="text-lg mt-4">
              We&#39;re here to help and answer any questions you may have.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <FaPhone className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p className="text-gray-600">+254 756 789 300</p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <FaEnvelope className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-gray-600">info@tamaduni.com</p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Location</h3>
          <p className="text-gray-600">123 Main St, Nairobi, NB</p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <form
          action="#"
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Social Media Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Follow Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          Stay connected with us through social media
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="#"
            aria-label="Facebook"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebookF size={28} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedinIn size={28} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
