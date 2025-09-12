import { useLoaderData } from "react-router";
import { Link } from "react-router";
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";

export default function CategoryNews() {
  const loaderData = useLoaderData();

  if (!loaderData || !loaderData.data) {
    return (
      <div className="text-center text-red-500 mt-10">
        🚨 No news found or failed to load data.
      </div>
    );
  }

  const { data } = loaderData;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dragon News Home</h1>

      <div className="space-y-6">
        {data.map((news) => (
          <div
            key={news._id}
            className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200"
          >
            {/* Author & Icons */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-50">
              <div className="flex items-center gap-2">
                <img
                  src={news.author?.img}
                  alt={news.author?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">
                    {news.author?.name || "Unknown"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {news.author?.published_date || "Not Available"}
                  </p>
                </div>
              </div>
              {/* Save & Share Icons */}
              <div className="flex items-center gap-3 text-gray-500">
                <button className="hover:text-blue-500">
                  <FaRegBookmark size={18} />
                </button>
                <button className="hover:text-green-500">
                  <FaShareAlt size={18} />
                </button>
              </div>
            </div>

            {/* Title */}
            <h2 className="px-4 pt-4 text-xl font-semibold">{news.title}</h2>

            {/* Thumbnail */}
            {news.image_url && (
              <img
                src={news.image_url}
                alt={news.title}
                className="w-full h-64 object-cover mt-3"
              />
            )}

            {/* Details */}
            <div className="px-4 py-3 text-gray-700">
              <p>
                {news.details.length > 200
                  ? news.details.slice(0, 200) + "..."
                  : news.details}
              </p>
              <Link
                to={`/news/${news._id}`}
                className="text-blue-500 hover:underline"
              >
                Read More
              </Link>
            </div>

            {/* Footer (Rating & Views) */}
            <div className="flex items-center justify-between px-4 py-3 border-t text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />{" "}
                <span>{news.rating?.number || "N/A"}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaEye /> <span>{news.total_view || 0}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
