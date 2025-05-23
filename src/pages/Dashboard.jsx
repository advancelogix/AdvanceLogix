import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { profile, loading } = useAuth();

  if (loading) return <Layout><Navbar /><div className="p-8 text-white">Loading...</div></Layout>;
  if (!profile) return <Layout><Navbar /><div className="p-8 text-white">No user profile found.</div></Layout>;

  return (
    <Layout>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Welcome, {profile.full_name}
        </h1>
        <p className="text-gray-300 mb-6">
          Role: <span className="text-white font-medium">{profile.role}</span> | 
          Email: <span className="text-white font-medium">{profile.email}</span> | 
          Company: <span className="text-white font-medium">{profile.company}</span>
        </p>

        <p className="text-gray-300 mb-6">
          This is your central hub. Use the navigation to manage projects, view analytics, and access company resources.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/90 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
            <p className="text-gray-500">Track ongoing and completed projects.</p>
          </div>

          <div className="bg-white/90 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800">Tickets</h2>
            <p className="text-gray-500">Monitor support tickets or technical tasks.</p>
          </div>

          <div className="bg-white/90 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800">Reports</h2>
            <p className="text-gray-500">Review KPIs, analytics, and insights.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}