import { FaSearch, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-900 text-white p-5 shadow flex justify-between items-center fixed top-0 left-72 right-0 z-50">
      <h2 className="text-lg font-semibold">Team Management</h2>
      <div className="flex items-center gap-4 w-full max-w-xl bg-white rounded-full px-4 py-2 shadow-md">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent w-full text-black"
        />
      </div>
      <div className="flex items-center gap-6">
        <FaBell className="text-xl cursor-pointer hover:text-yellow-300 transition duration-300" />
        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/men/5.jpg"
            alt="User"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <div>
            {/* <p className="text-white font-medium">ALLEN FRANK</p>
            <p className="text-sm text-gray-300">allen@gmail.com</p> */}

                <Link to="/signin" className="text-white font-semibold" >Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
