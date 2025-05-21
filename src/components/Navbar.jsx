import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../supabaseClient";
import { Menu, X } from "lucide-react"; // install lucide-react if not already

export default function Navbar() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (section) => {
    setIsMenuOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      window.localStorage.setItem("scrollTo", section);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="text-xl font-bold text-blue-600 hover:text-blue-800 transition"
        >
          AdvanceLogix
        </button>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          <li><button onClick={() => handleNav("services")} className="hover:text-blue-600 hover:underline">Services</button></li>
          <li><button onClick={() => handleNav("about")} className="hover:text-blue-600 hover:underline">About</button></li>
          <li><button onClick={() => handleNav("contact")} className="hover:text-blue-600 hover:underline">Contact</button></li>
          <li>
            {!loading && (
              user ? (
                <button onClick={handleLogout} className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                  Log Out
                </button>
              ) : (
                <button onClick={() => navigate("/login")} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Log In
                </button>
              )
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-gray-700 font-medium">
          <button onClick={() => handleNav("services")} className="block w-full text-left hover:text-blue-600">Services</button>
          <button onClick={() => handleNav("about")} className="block w-full text-left hover:text-blue-600">About</button>
          <button onClick={() => handleNav("contact")} className="block w-full text-left hover:text-blue-600">Contact</button>
          {!loading && (
            user ? (
              <button onClick={handleLogout} className="block w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                Log Out
              </button>
            ) : (
              <button onClick={() => navigate("/login")} className="block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Log In
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
}
