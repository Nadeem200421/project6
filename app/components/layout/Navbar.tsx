"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { logout, restoreAuth } from "../../redux/features/authSlice";
import { toggleTheme, restoreTheme } from "../../redux/features/themeSlice";
import "../../styles/navbar.css";

export default function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const theme = useSelector((state: RootState) => state.theme.mode);

  const [menuOpen, setMenuOpen] = useState(false);

  /* Restore auth & theme */
  useEffect(() => {
    dispatch(restoreAuth());
    dispatch(restoreTheme());
  }, [dispatch]);

  /* Apply dark mode */
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  /* Close menu on navigation */
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("popstate", closeMenu);
    return () => window.removeEventListener("popstate", closeMenu);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          Comm<span>Unity</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Menu */}
        <div className={`navbar-content ${menuOpen ? "open" : ""}`}>
          <div className="navbar-links">
            <Link href="/events">Events</Link>
            <Link href="/shops">Shops</Link>
            <Link href="/marketplace">Marketplace</Link>

            {isLoggedIn && (
              <>
                <Link href="/favourites">Favourites</Link>
                <Link href="/post-classified">Post Classified</Link>
              </>
            )}
          </div>

          <div className="navbar-actions">
            {/* Theme Toggle */}
            <button
              className="icon-btn"
              aria-label="Toggle theme"
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* Auth */}
            {isLoggedIn ? (
              <button
                className="btn-outline"
                onClick={() => {
                  dispatch(logout());
                  setMenuOpen(false);
                }}
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
