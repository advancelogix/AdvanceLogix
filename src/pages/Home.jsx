import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
  const section = localStorage.getItem("scrollTo");
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      localStorage.removeItem("scrollTo");
    }
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-50 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Empowering Businesses with Smart IT Solutions</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">AdvanceLogix provides tailored IT consulting, cloud services, and cybersecurity solutions to help businesses innovate, grow, and stay secure in a digital world.</p>
        <a href="#contact" className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-xl text-lg shadow hover:bg-blue-700 transition">Get in Touch</a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">IT Consulting</h3>
            <p className="text-gray-600">Strategic guidance and technology planning to align IT with your business goals.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
            <p className="text-gray-600">Cloud migration, management, and optimization services tailored for scalability.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
            <p className="text-gray-600">Advanced protection for your digital assets with 24/7 threat monitoring and response.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">About AdvanceLogix</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">AdvanceLogix is a forward-thinking IT company committed to delivering innovative, efficient, and secure technology solutions. Our team of certified experts brings years of experience in helping businesses leverage IT to achieve operational excellence and digital transformation.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mb-6">Ready to modernize your IT infrastructure? Let’s talk.</p>
        <a href="mailto:info@advancelogix.com" className="text-blue-600 font-medium text-lg hover:underline">info@advancelogix.com</a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-blue-600 text-white text-center">
        <p>&copy; {new Date().getFullYear()} AdvanceLogix. All rights reserved.</p>
      </footer>
    </div>
  );
}