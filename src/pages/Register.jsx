import Navbar from "../components/Navbar";
import { NavLink, Outlet, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo ");
    // console.log({ name, email, photo, password });
    // password validation
    if (password.length < 8) {
      setError({
        ...error,
        password: "Password must be more the 8 character long.",
      });
      return;
    }

    // Create User
    createNewUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            navigate("/");
          })
          // eslint-disable-next-line no-unused-vars
          .catch((err) => {
            // console.log(err);
          });
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorCode = error.code;
        // eslint-disable-next-line no-unused-vars
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      });
  };

  return (
    <section className="w-10/12 mx-auto">
      <Navbar />
      <Outlet />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-10 w-xl">
          {/* Header */}
          <h2 className="text-2xl font-bold text-center mb-6">
            Register Your Account
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Photo URL */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-1" htmlFor="Photo URL">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
            {/* password validation */}
            {error.password && (
              <label className="label text-xs text-red-500">
                {error.password}
              </label>
            )}
          </div>

          {/* Register Button */}
          <button className="w-full bg-black text-white py-2 transition cursor-pointer">
            Register
          </button>

          {/* Toggle to Login */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <NavLink to="/auth/login" className="text-red-600 hover:underline">
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
