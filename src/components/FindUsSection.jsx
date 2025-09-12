import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const FindUsSection = () => {
  return (
    <div className="mt-8">
      <h4 className="font-semibold mb-5">Find Us On</h4>
      <div className="join flex join-vertical">
        <button className="btn justify-start join-item">
          <FaLinkedinIn />
          LinkedIn
        </button>
        <button className="btn justify-start join-item">
          {" "}
          <FaFacebook />
          Facebook
        </button>
        <button className="btn justify-start join-item">
          <FaInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUsSection;
