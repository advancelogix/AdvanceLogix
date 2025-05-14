import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Log In to AdvanceLogix</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Log In</button>
          </form>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Don't have an account? <a href="#" className="text-blue-600 hover:underline">Create one</a>
          </p>
        </div>
      </section>
    </div>
  );
}