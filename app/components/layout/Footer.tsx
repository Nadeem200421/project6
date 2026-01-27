"use client";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} <span className="font-medium">CommUnity</span>. All rights reserved.
        </p>

        <p className="text-xs text-gray-500 dark:text-gray-500">
          Built to support local events, shops, and communities
        </p>
      </div>
    </footer>
  );
}
