export const metadata = {
  title: "Job Management | Z A R K & CO Admin",
  description: "Manage job postings for Z A R K & CO careers page.",
};

export default function JobManagement() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Job Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Post New Job
        </button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-medium text-slate-900">Job Postings</h3>
        </div>
        <div className="p-6">
          <p className="text-slate-600">No job postings yet. Click &quot;Post New Job&quot; to create your first job posting.</p>
        </div>
      </div>
    </div>
  );
}
