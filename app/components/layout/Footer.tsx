"use client";


export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <p>&copy; {new Date().getFullYear()}  CommUnity. All rights reserved.</p>
      </div>
    </footer>
  );
}
