import { NavLink, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { logInUser } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    // const form = new FormData(e.target);
    // const email = form.get("name");
    // const password = form.get("password");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    logInUser(email,password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("you are logged In.")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode,errorMessage);
      });
  };

  return (
    <section className="w-10/12 mx-auto mt-10 bg-base-200">
      <Navbar />
      <Outlet />
      <div className=" min-h-screen flex items-center justify-center  p-10">
        <form onSubmit={handleLogIn} className="w-lg space-y-3">
          {/* <!-- Header --> */}
          <h2 className="text-2xl font-bold text-center mb-6">
            Login your account
          </h2>

          {/* Divider */}
          <div className="divider"></div>

          {/* <!-- Email --> */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email address
            </label>
            <input
              name="email"
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
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            />
          </div>

          {/* <!-- Login Button --> */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2  transition cursor-pointer"
          >
            Login
          </button>

          {/* <!-- Toggle Register --> */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?
            <NavLink
              to="/auth/register"
              className="pl-2 text-red-600 hover:underline"
            >
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
