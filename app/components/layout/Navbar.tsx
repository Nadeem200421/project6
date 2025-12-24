"use client";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { logout } from "../../redux/features/authSlice";
import { toggleTheme } from "../../redux/features/themeSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            LocalCommunity
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-4">
            <Link href="/events" className="hover:text-blue-600 dark:hover:text-blue-400">
              Events
            </Link>
            <Link href="/shops" className="hover:text-blue-600 dark:hover:text-blue-400">
              Shops
            </Link>
            <Link href="/marketplace" className="hover:text-blue-600 dark:hover:text-blue-400">
              Marketplace
            </Link>
            {isLoggedIn && (
              <>
                <Link href="/favourites" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Favourites
                </Link>
                <Link href="/post-classified" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Post Classified
                </Link>
              </>
            )}

            {/* Theme Toggle */}
            <button
              className="ml-2 btn-secondary px-3 py-1"
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* Login / Logout */}
            {isLoggedIn ? (
              <button
                className="btn-secondary px-3 py-1"
                onClick={() => dispatch(logout())}
              >
                Logout ({user?.name || user?.email})
              </button>
            ) : (
              <Link href="/login" className="btn-primary px-3 py-1">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
