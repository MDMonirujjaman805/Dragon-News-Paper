import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router";

const Register = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Outlet />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
            {/* Header */}
            <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label
                className="block text-gray-700 mb-1"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Register Button */}
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Register
            </button>

            {/* Toggle to Login */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <NavLink to="login" className="text-blue-600 hover:underline">
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
