import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-center mb-6 max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn-primary px-6 py-2 rounded-lg text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
