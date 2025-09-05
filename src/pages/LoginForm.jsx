import { useState } from "react";
import Navbar from "../components/Navbar";

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-20 rounded-xl shadow-xl bg-base-300 w-full sm:w-96 md:w-[28rem] lg:w-[32rem]">
          {/* Header */}
          <h2 className="text-2xl font-bold text-center mb-6 text-black">
            {isLogin ? "Login your account" : "Register your account"}
          </h2>

          {/* Divider */}
          <hr className="border-gray-300 mb-6" />

          {/* Name (only for Register) */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-black mb-1" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          )}

          {/* Photo URL (only for Register) */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-black mb-1" htmlFor="photourl">
                Photo URL
              </label>
              <input
                type="text"
                id="photourl"
                placeholder="Enter your photo URL"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="block text-black mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-black mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Terms & Conditions (only for Register) */}
          {!isLogin && (
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-black border-gray-400 rounded focus:ring-black"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-black">
                I agree to the{" "}
                <a href="#" className="underline hover:text-gray-700">
                  Terms & Conditions
                </a>
              </label>
            </div>
          )}

          {/* Submit Button */}
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            {isLogin ? "Login" : "Register"}
          </button>

          {/* Toggle Login/Register */}
          <p className="text-center text-sm text-gray-600 mt-4">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-red-500 font-semibold hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
