import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg mb-2">Something went wrong.</p>
      <p className="text-sm text-gray-600">
        {error.statusText || error.message}
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-black text-white rounded-lg"
      >
        Go Back Home
      </a>
    </div>
  );
}
