import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";


const Navbar = () => {
  return (
    <nav className="bg-[#121212] text-white px-6 py-3 flex items-center justify-between border-b border-gray-800">
      {/* Left Section - IMDb Logo + Menu */}
      <div className="flex items-center gap-6">
        {/* IMDb Logo Box */}
        <Link
          to="/"
          className="bg-[#f5c518] text-black font-extrabold text-lg px-2 py-1 rounded-sm hover:bg-[#e4b50a] transition"
        >
          INDb
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="hover:text-[#f5c518] font-medium transition-colors"
          >
            Movies
          </Link>
          <Link
            to="/watchlist"
            className="hover:text-[#f5c518] font-medium transition-colors"
          >
            Watchlist
          </Link>
        </div>
      </div>

      {/* Middle Section - Search Bar */}
      <div className="flex items-center bg-[#1a1a1a] rounded-md px-3 py-1 w-1/2 max-w-md border border-gray-700 focus-within:border-[#f5c518] transition-all duration-300">
        <BsSearch className="text-gray-400 w-4 h-4 mr-2" />
        <input
          type="text"
          placeholder="Search IMDb..."
          className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
        />
      </div>

      {/* Right Section - User / Menu */}
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="text-sm font-medium hover:text-[#f5c518] transition-colors"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="text-sm font-medium bg-[#f5c518] text-black px-3 py-1 rounded-sm hover:bg-[#e4b50a] transition"
        >
          Join INDb
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
