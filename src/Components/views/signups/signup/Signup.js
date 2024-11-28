import React from 'react'
import { FaGoogle, FaFacebookF } from "react-icons/fa";


function SignUp() {

  var Url1 = 'https://images.unsplash.com/photo-1731814585963-80f1c3ae01d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzI3ODE3Nzd8&ixlib=rb-4.0.3&q=80&w=1080'
  return (
  
    <div className="flex flex-col md:flex-row h-screen">
    {/* Left Side: Image */}
    <div className="w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1731814585963-80f1c3ae01d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzI3ODE3Nzd8&ixlib=rb-4.0.3&q=80&w=1080')" }}>
      {/* Accessible fallback */}
      <img src= {Url1} alt="Signup Illustration" className="hidden" />
    </div>

    {/* Right Side: Form */}
    <div className="w-full md:w-1/2 bg-white flex justify-center items-center p-4">
      <div className="w-full max-w-md p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Re-enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account? <a href="#" className="text-blue-500 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default SignUp
