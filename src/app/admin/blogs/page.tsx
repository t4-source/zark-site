export const metadata = {
  title: "Blog Management | Z A R K & CO Admin",
  description: "Manage blog posts for Z A R K & CO website.",
};

export default function BlogManagement() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Blog Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add New Post
        </button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-medium text-slate-900">Blog Posts</h3>
        </div>
        <div className="p-6">
          <p className="text-slate-600">No blog posts yet. Click &quot;Add New Post&quot; to create your first blog post.</p>
        </div>
      </div>
    </div>
  );
}
