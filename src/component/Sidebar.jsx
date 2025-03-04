import { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";


const Sidebar = () => {
  const location = useLocation(); // Get current URL path
  const [isOpen, setIsOpen] = useState(false); // Sidebar open state

  const navItems = [
    { path: "/", label: "Manager Dash" },
    { path: "/sales-management", label: "Sales Management" },
    { path: "/sales-contest", label: "Sales Contest" },
    { path: "/team-management", label: "Team Management" },
    { path: "/performance-tracking", label: "Performance Tracking" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 bg-blue-900 text-white p-2 rounded-full z-50"
        onClick={() => setIsOpen(true)}
      >
        <FaBars className="text-2xl" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-blue-900 text-white p-6 shadow-lg flex flex-col justify-between w-72 z-40 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Close Button (Mobile) */}
        <button
          className="lg:hidden absolute top-4 right-4 text-white text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Sidebar Content */}
        <div>
          <h1 className="text-2xl font-bold mb-6">ERP Dashboard</h1>
          <nav className="space-y-3">
            {navItems.map((item) => (
              <Link to={item.path} key={item.path}>
                <button
                  className={`w-full text-left py-3 px-4 rounded font-bold transition ${
                    location.pathname === item.path
                      ? "bg-blue-700 text-white shadow-md"
                      : "hover:bg-blue-800 text-gray-300"
                  }`}
                  onClick={() => setIsOpen(false)} // Close menu on mobile after clicking
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center p-4 border-t border-gray-500">
          <FaUserCircle className="text-4xl mr-2" />
          <div>
            <p className="font-semibold">Allen Frank</p>
            <p className="text-sm text-gray-300">allen@gmail.com</p>
          </div>
        </div>
      </aside>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
