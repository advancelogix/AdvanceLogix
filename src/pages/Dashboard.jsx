import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to the AdvanceLogix Dashboard</h1>
        <p className="text-gray-600 mb-6">
          This is your central hub. Use the navigation to manage projects, view analytics, and access company resources.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
            <p className="text-gray-500">Track ongoing and completed projects.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800">Tickets</h2>
            <p className="text-gray-500">Monitor support tickets or technical tasks.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800">Reports</h2>
            <p className="text-gray-500">Review KPIs, analytics, and insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
