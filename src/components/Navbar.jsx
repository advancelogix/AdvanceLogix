export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="text-xl font-bold text-blue-600">AdvanceLogix</div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
        <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
      </ul>
    </nav>
  );
}