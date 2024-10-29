import React from "react";
import Logo from "../assets/Logo-bg.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className="bg-indigo-400 text-white px-10 py-4 shadow-md ">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <img src={Logo} alt="Logo" className="w-72  text-white" />
          </div>

          <ul className="flex space-x-8 gap-x-8  mx-10">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 text-xl text-black font-semibold"
              >
                Login
              </Link>
            </li>
            <li className="">
              <Link
                to="/Home"
                className="hover:text-gray-300 text-xl text-black font-semibold "
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
