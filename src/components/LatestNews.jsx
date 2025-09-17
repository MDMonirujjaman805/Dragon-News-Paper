import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const LatestNews = () => {
  return (
    <div className="bg-gray-300 my-5 py-3 px-2 flex items-center gap-2.5">
      <button className="btn bg-black text-white">Latest News:</button>
      <Marquee pauseOnHover={true} speed={40} className={"space-x-15"}>
        <Link to="/news">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
          quos?
        </Link>
        <Link to="/news">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
          quos?
        </Link>
        <Link to="/news">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
          quos?
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
