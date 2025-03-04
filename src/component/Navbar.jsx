import { useState } from "react";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar"; // Import Sidebar component

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state for mobile

  return (
    <>
      {/* Navbar */}
      <div className="bg-blue-900 text-white p-5 shadow-md flex justify-between items-center fixed top-0 right-0 z-50 
        w-full lg:w-[calc(100%-18rem)] lg:left-72 transition-all duration-300">  
        
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars />
        </button>

        {/* Title (Hidden on Small Screens) */}
        <h2 className="text-lg font-semibold hidden sm:block">Team Management</h2>

        {/* Search Bar */}
        <div className="flex items-center gap-4 w-full max-w-xl bg-white rounded-full px-4 py-2 shadow-md mx-4">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent w-full text-black"
          />
        </div>

        {/* Icons & User Section */}
        <div className="flex items-center gap-6">
          <FaBell className="text-xl cursor-pointer hover:text-yellow-300 transition duration-300" />
          <Link to="/signin" className="text-white font-semibold">Sign In</Link>
        </div>
      </div>

      {/* Sidebar Overlay (Mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <Sidebar closeSidebar={() => setSidebarOpen(false)} />
          <div
            className="flex-1 bg-black opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default Navbar;