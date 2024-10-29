import React from "react";
import Navbar from "../Components/Navbar";
import { FaGoogle } from "react-icons/fa";
import { GoogleSignin, SignOut } from "../Utilities/Firebase";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="gap-5 flex flex-col">
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white p-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
              >
                Login
              </button>
              <button
                type="submit"
                onClick={GoogleSignin}
                className="w-full bg-indigo-500 items-center flex justify-center gap-3 font-semibold text-white p-3 rounded-lg hover:bg-indigo-600 transition-colors"
              >
                <FaGoogle />
                Sign in with Google
              </button>
              <button
                type="submit"
                onClick={SignOut}
                className="w-full bg-indigo-500 items-center flex justify-center gap-3 font-semibold text-white p-3 rounded-lg hover:bg-indigo-600 transition-colors"
              >
                Log out
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
