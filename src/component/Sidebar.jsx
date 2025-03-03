import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // Get current URL path

  const navItems = [
    { path: "/", label: "Manager Dash" },
    { path: "/sales-management", label: "Sales Management" },
    { path: "/sales-contest", label: "Sales Contest" },
    { path: "/team-management", label: "Team Management" },
    { path: "/performance-tracking", label: "Performance Tracking" },
  ];

  return (
    <aside className="w-72 bg-blue-900 text-white p-6 shadow-lg flex flex-col justify-between fixed h-screen">
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
              >
                {item.label}
              </button>
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center p-4 border-t border-gray-500">
        <FaUserCircle className="text-4xl mr-2" />
        <div>
          <p className="font-semibold">Allen Frank</p>
          <p className="text-sm text-gray-300">allen@gmail.com</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
