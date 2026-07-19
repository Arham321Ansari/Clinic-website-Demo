import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-gray-600">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-full"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;