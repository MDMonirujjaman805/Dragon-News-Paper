import { NavLink } from "react-router";
import pic from "../assets/user.png";
import ross from "../assets/ross.jpg"
// import { useContext } from "react";
import { use } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const links = (
    <>
      <button className="btn btn-ghost">
        <NavLink to="/">Home</NavLink>
      </button>
      <button className="btn btn-ghost">
        <NavLink to="/about">About</NavLink>
      </button>
      <button className="btn btn-ghost">
        <NavLink to="/career">Career</NavLink>
      </button>
    </>
  );
  // const {user}=useContext(AuthContext)
  const { user, logOutUser } = use(AuthContext);

  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        // Sign-out successful.
        alert("You are Sign Out Successful.");
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // An error happened.
       
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="text-xl font-semibold cursor-pointer">{user && user?.displayName}</div>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2.5">
        {
          user && user?.email ? <div>
            <img className="w-10 h-10 rounded-full " src={ross} alt="Pic" />
          </div>:<img src={pic} alt="user" />
        }
        
        {user ? (
          <button onClick={handleSignOut} className="btn bg-black text-white">
            Log Out
          </button>
        ) : (
          <NavLink to="/auth/login" className="btn bg-black text-white">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
