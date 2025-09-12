import { useLoaderData, Link } from "react-router";
import { FaStar, FaEye } from "react-icons/fa";

export default function SingleNews() {
  const loaderData = useLoaderData();

  if (!loaderData || !loaderData.data || loaderData.data.length === 0) {
    return (
      <div className="text-center text-red-500 mt-10">
        🚨 No news found or failed to load data.
      </div>
    );
  }

  const news = loaderData.data[0];

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 p-6">
      {/* Author */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={news.author?.img}
          alt={news.author?.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{news.author?.name || "Unknown"}</p>
          <p className="text-sm text-gray-500">
            {news.author?.published_date || "Not Available"}
          </p>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-3">{news.title}</h1>

      {/* Image */}
      {news.image_url && (
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full h-96 object-cover rounded-lg mb-5"
        />
      )}

      {/* Details */}
      <p className="text-gray-700 leading-relaxed mb-5">{news.details}</p>

      {/* Footer */}
      <div className="flex justify-between items-center border-t pt-4 text-sm text-gray-600">
        <div className="flex gap-2 items-center">
          <FaStar className="text-yellow-500" />{" "}
          <span>{news.rating?.number || "N/A"}</span>
        </div>
        <div className="flex gap-2 items-center">
          <FaEye /> <span>{news.total_view || 0}</span>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <Link
          to={`/category/${news.category_id}`}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          ← Back to Category
        </Link>
      </div>
    </div>
  );
}
