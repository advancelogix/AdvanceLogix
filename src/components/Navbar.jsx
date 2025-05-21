import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../supabaseClient";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const handleNav = (section) => {
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
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <button
        onClick={() => navigate("/")}
        className="text-xl font-bold text-blue-600 hover:text-blue-800 transition cursor-pointer"
      >
        AdvanceLogix
      </button>

      <ul className="flex space-x-6 text-gray-700 font-medium items-center">
        <li>
          <button onClick={() => handleNav("services")} className="hover:text-blue-600 hover:underline transition cursor-pointer">Services</button>
        </li>
        <li>
          <button onClick={() => handleNav("about")} className="hover:text-blue-600 hover:underline transition cursor-pointer">About</button>
        </li>
        <li>
          <button onClick={() => handleNav("contact")} className="hover:text-blue-600 hover:underline transition cursor-pointer">Contact</button>
        </li>
        <li>
          {!loading && (
            user ? (
              <button onClick={handleLogout} className="ml-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition cursor-pointer">
                Log Out
              </button>
            ) : (
              <button onClick={() => navigate("/login")} className="ml-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer">
                Log In
              </button>
            )
          )}
        </li>
      </ul>
    </nav>
  );
}
