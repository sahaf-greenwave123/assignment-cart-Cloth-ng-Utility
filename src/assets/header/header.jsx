// assets/header/header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-4 py-4">
      <h1 className="text-xl font-bold">
        <span className="text-blue-400 hover:text-blue-300 transition duration-200">
          Cloth!ng
        </span>
        <span className="text-green-400 hover:text-green-300 transition duration-200">
          &
        </span>
        <span className="text-red-400 hover:text-red-300 transition duration-200">
          Utility
        </span>
      </h1>

      {/* Burger Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:flex gap-6 absolute md:static bg-gray-800 w-full md:w-auto left-0 top-16 md:top-0 px-4 py-2 md:px-0 md:py-0`}
      >
        <li className="hover:text-gray-300 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;