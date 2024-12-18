"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import LeftImage from "./LeftImage";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const BASE_URL = "http://api.dev.tamaduni.africa:3100/";
  const USER_URL = "user/";
  const END_POINT = "signup"
  const FULL_USER_URL = `${BASE_URL}${USER_URL}${END_POINT}`;
  
  const onSubmit = async (data) => {
    try {
      const response = await fetch(FULL_USER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }
  
      const result = await response.json();
      console.log("Form submitted successfully:", result);
      // Optionally, redirect or show a success message
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };
  

  return (
    <div className="h-screen w-full flex">
      <LeftImage />
      <section className="w-full md:w-1/2 flex flex-col space-y-4 justify-center items-center">
        <h1 className="font-bold text-xl">Sign Up</h1>
        <section>
          <form
            className="flex flex-col space-y-2 border border-gray-200 p-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>First Name</label>
            <input
              className="rounded-md p-2 border border-gray-200"
              type="name"
              placeholder="First Name"
              name="firstName"
              required
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
            <label>Last Name</label>
            <input
              className="rounded-md p-2 border border-gray-200"
              type="name"
              placeholder="Last Name"
              name="lastName"
              {...register("email", {
                required: "Last Name is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}

            <label>Email</label>
            <input
              className="rounded-md p-2 border border-gray-200"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}

            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="rounded-md p-2 border border-gray-200"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}

            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"  
              className="rounded-md p-2 border border-gray-200"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" {...register("remember")} />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white rounded-md py-2 px-4 hover:bg-gray-800 transition"
            >
              Sign Up
            </button>
            <Link className="underline" href="/auth/forgotpassword" passHref>
              Forgot Password?
            </Link>
          </form>
        </section>
        <section className="flex flex-col items-center space-y-4">
          <h1 className="font-bold text-xl">Or Log in with</h1>
          <section className="flex flex-col space-y-2">
            <button className="flex items-center justify-center rounded-md py-2 px-4 hover:bg-gray-100 transition">
              <FaGoogle className="text-red-500 mr-2" size={20} />{" "}
              <span className="font-medium text-gray-700">Google</span>
            </button>

            <button className="flex items-center justify-center rounded-md py-2 px-4 hover:bg-gray-100 transition">
              <FaFacebookF className="text-blue-600 mr-2" size={20} />{" "}
              <span className="font-medium text-gray-700">Facebook</span>
            </button>

            <p className="text-gray-600">
              Have an account?{" "}
              <Link
                href="/auth/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Signup;