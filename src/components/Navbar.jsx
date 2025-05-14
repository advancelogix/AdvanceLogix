import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleNav = (section) => {
  if (window.location.pathname !== "/") {
    navigate("/", { replace: false });
    // Store section temporarily
    window.localStorage.setItem("scrollTo", section);
  } else {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <button onClick={() => navigate("/")} className="text-xl font-bold text-blue-600 hover:text-blue-800 transition cursor-pointer">
        AdvanceLogix
      </button>
      <ul className="flex space-x-6 text-gray-700 font-medium items-center">
        <li><button onClick={() => handleNav("services")} className="hover:text-blue-600 transition-colors">Services</button></li>
        <li><button onClick={() => handleNav("about")} className="hover:text-blue-600 transition-colors">About</button></li>
        <li><button onClick={() => handleNav("contact")} className="hover:text-blue-600 transition-colors">Contact</button></li>
        <li>
          <button onClick={() => navigate("/login")} className="ml-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer">
            Log In
          </button>
        </li>
      </ul>
    </nav>
  );
}