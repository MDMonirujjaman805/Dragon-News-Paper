import { NavLink, Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div>
      <section  className="w-10/12 mx-auto mt-10"> 
      <Navbar />
      <Outlet />
        <div className="w-8/12 mx-auto mt-20 flex items-center justify-center shadow-lg bg-base-200 p-20 rounded-2xl">
          <div className="space-y-10">
            {/* <!-- Header --> */}
            <h2 className="text-2xl font-bold text-center mb-6">Login your account</h2>

            {/* Divider */}
            <div className="divider"></div>

            {/* <!-- Email --> */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email address 
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              />
            </div>

            {/* <!-- Password --> */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              />
            </div>

            {/* <!-- Login Button --> */}
            <button className="w-full bg-black text-white py-2 rounded-lg transition cursor-pointer">
              Login
            </button>

            {/* <!-- Toggle Register --> */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?
              <NavLink to="register" className="text-red-600 hover:underline">
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
