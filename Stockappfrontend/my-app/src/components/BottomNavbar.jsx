import Link from "next/link";
import { FaHome, FaClipboardList, FaBriefcase, FaBoxOpen, FaUser } from "react-icons/fa";

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#111827] text-white border-t border-gray-700 flex justify-around items-center h-14 z-50">
      
      <Link href="/" className="flex flex-col items-center text-xs">
        <FaHome className="text-lg mb-1" />
        <span>Home</span>
      </Link>

      <Link href="/watchlist" className="flex flex-col items-center text-xs">
        <FaClipboardList className="text-lg mb-1" />
        <span>Watchlist</span>
      </Link>

      <Link href="/portfolio" className="flex flex-col items-center text-xs">
        <FaBriefcase className="text-lg mb-1" />
        <span>Portfolio</span>
      </Link>

      <Link href="/orders" className="flex flex-col items-center text-xs">
        <FaBoxOpen className="text-lg mb-1" />
        <span>Orders</span>
      </Link>

      <Link href="/account" className="flex flex-col items-center text-xs">
        <FaUser className="text-lg mb-1" />
        <span>Account</span>
      </Link>

    </nav>
  );
}
