import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-2">MANAGER SIGN UP</h2>
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          
          <Link to="/signin" className="text-blue-700 font-semibold" >Sign In</Link>
        </p>

        <form className="mt-6">
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Enter name</label>
            <input
              type="text"
              placeholder="Full Name..."
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Mail</label>
            <input
              type="email"
              placeholder="Email@gmail.com"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="********"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9 text-gray-600"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center mb-6">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-700">Logged me in</label>
          </div>

          {/* Sign-Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
