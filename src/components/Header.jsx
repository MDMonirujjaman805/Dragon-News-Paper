import logo from "../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="w-5/12 mx-auto mt-8 space-y-4">
      <img src={logo} alt="logo" />
      <p className="text-center text-gray-500">
        Journalism Without Fear or Favour
      </p>
      <p className="text-center">
        {moment().format("dddd, MMMM Do YYYY, HH:mm")}
      </p>
    </div>
  );
};

export default Header;
