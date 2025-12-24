"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Provider store={store}>
          <ThemeWrapper>
            <Navbar />
            <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              {children}
            </main>
            <Footer />
          </ThemeWrapper>
        </Provider>
      </body>
    </html>
  );
}
