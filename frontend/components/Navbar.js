import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoggedIn(typeof window !== 'undefined' && !!localStorage.getItem('token'));
  }, []);

  function handleLogout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    router.push("/login");
  }

  // Only show logout button on dashboard/profile pages
  const showLogout = loggedIn && (router.pathname === "/dashboard" || router.pathname === "/profile");

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 shadow-lg border-b border-indigo-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-indigo-200 to-cyan-200 bg-clip-text text-transparent hidden sm:inline">ScalableWebApp</span>
          </div>

          {/* Right Section */}
          <div>
            {showLogout ? (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => router.push('/dashboard')}
                  className="px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => router.push('/profile')}
                  className="px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <a
                  href="/login"
                  className="px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Sign Up
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
