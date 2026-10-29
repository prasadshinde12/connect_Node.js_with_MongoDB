import { Link } from "react-router";

export default function Pagenotfound() {
  return (
    <div className="w-6xl mx-auto p-12 text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you are looking for does not exist.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Return to Home
      </Link>
    </div>
  );
}
