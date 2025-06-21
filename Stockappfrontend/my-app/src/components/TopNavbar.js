'use client';

import { FiSearch } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { HiSquares2X2 } from 'react-icons/hi2'; // Products grid icon

export default function TopNavbar() {
  return (
    <nav className="bg-[#111827] px-4 py-2 flex justify-between items-center text-white">
      
      {/* Left: Products Icon */}
      <div className="flex flex-col items-center text-xs">
        <HiSquares2X2 className="text-2xl" />
        <span className="text-[11px] text-gray-300">Products</span>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 mx-4">
        <div className="flex items-center bg-[#1f2937] px-3 py-2 rounded-md">
          <FiSearch className="text-gray-400 text-lg mr-2" />
          <span className="text-sm text-gray-400">Search for Niftybees, ITBEES</span>
        </div>
      </div>

      {/* Right: Profile */}
      <div className="flex flex-col items-center text-xs">
        <FaUserCircle className="text-2xl" />
        <span className="text-[11px] text-gray-300">Profile</span>
      </div>
    </nav>
  );
}
