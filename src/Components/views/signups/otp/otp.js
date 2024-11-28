import React from "react";

export default function OTPRequestPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side: Image */}
      <div
        className="w-full md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1731814585963-80f1c3ae01d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzI3ODE3Nzd8&ixlib=rb-4.0.3&q=80&w=1080')",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1731814585963-80f1c3ae01d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzI3ODE3Nzd8&ixlib=rb-4.0.3&q=80&w=1080"
          alt="OTP Request Illustration"
          className="hidden"
        />
      </div>

      {/* Right Side: OTP Request Form */}
      <div className="w-full md:w-1/2 bg-white flex justify-center items-center p-4">
        <div className="w-full max-w-md p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Request OTP
          </h2>
          <form>
            {/* Phone Number Field */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Enter Your Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
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
                Request OTP
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an OTP?{" "}
            <a href="/verify-otp" className="text-blue-500 hover:underline">
              Verify here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
