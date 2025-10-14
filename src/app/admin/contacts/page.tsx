export const metadata = {
  title: "Contact Messages | Z A R K & CO Admin",
  description: "View and manage contact form submissions.",
};

export default function ContactManagement() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-8">Contact Messages</h1>

      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-medium text-slate-900">Recent Messages</h3>
        </div>
        <div className="p-6">
          <p className="text-slate-600">No contact messages yet. Messages from the contact form will appear here.</p>
        </div>
      </div>
    </div>
  );
}
