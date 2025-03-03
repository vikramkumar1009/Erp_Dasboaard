import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-2">MANAGER LOGIN</h2>
        <p className="text-sm text-center mb-6">
          Don’t have an account? <Link to="/signup" className="text-blue-700 font-semibold" >Signup</Link>
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Mail</label>
          <input 
            type="email" 
            placeholder="Email@example.com" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <label className="block text-gray-600 text-sm mb-1">Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="********"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
          />
          <span 
            className="absolute right-3 top-9 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default Signin;
