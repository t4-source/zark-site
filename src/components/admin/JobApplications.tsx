'use client';

import { useState, useEffect } from 'react';

interface JobApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  location: string;
  type: string;
  experience: string;
  coverLetter: string;
  resumeName: string;
  receivedAt: string;
  status: 'new' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';
}

export default function JobApplications() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [filter, setFilter] = useState<'all' | 'new' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired'>('all');

  useEffect(() => {
    // Load applications from localStorage (in production, this would be an API call)
    const savedApplications = localStorage.getItem('admin-job-applications');
    if (savedApplications) {
      setApplications(JSON.parse(savedApplications));
    }
  }, []);

  const saveApplications = (newApplications: JobApplication[]) => {
    setApplications(newApplications);
    localStorage.setItem('admin-job-applications', JSON.stringify(newApplications));
  };

  const handleStatusChange = (id: string, status: 'new' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired') => {
    const updatedApplications = applications.map(app => 
      app.id === id ? { ...app, status } : app
    );
    saveApplications(updatedApplications);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      const updatedApplications = applications.filter(app => app.id !== id);
      saveApplications(updatedApplications);
    }
  };

  const filteredApplications = applications.filter(app => 
    filter === 'all' || app.status === filter
  );

  if (selectedApplication) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedApplication(null)}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            ← Back to Applications
          </button>
          <div className="flex gap-2">
            <select
              value={selectedApplication.status}
              onChange={(e) => handleStatusChange(selectedApplication.id, e.target.value as 'new' | 'reviewed' | 'shortlisted' | 'hired' | 'rejected')}
              className="px-3 py-1 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="new">New</option>
              <option value="reviewed">Reviewed</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="rejected">Rejected</option>
              <option value="hired">Hired</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-slate-900">{selectedApplication.name}</h2>
            <p className="text-slate-600">{selectedApplication.email}</p>
            <p className="text-slate-600">{selectedApplication.phone}</p>
            <p className="text-slate-600">
              Applied for: {selectedApplication.position} ({selectedApplication.type}) - {selectedApplication.location}
            </p>
            <p className="text-sm text-slate-500">
              Received: {new Date(selectedApplication.receivedAt).toLocaleString()}
            </p>
            <span className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
              selectedApplication.status === 'new' ? 'bg-red-100 text-red-800' :
              selectedApplication.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
              selectedApplication.status === 'shortlisted' ? 'bg-yellow-100 text-yellow-800' :
              selectedApplication.status === 'rejected' ? 'bg-gray-100 text-gray-800' :
              'bg-green-100 text-green-800'
            }`}>
              {selectedApplication.status}
            </span>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-slate-900 mb-2">Experience:</h3>
              <p className="text-slate-700">{selectedApplication.experience}</p>
            </div>
            
            <div>
              <h3 className="font-medium text-slate-900 mb-2">Cover Letter:</h3>
              <p className="text-slate-700 whitespace-pre-wrap">{selectedApplication.coverLetter}</p>
            </div>
            
            <div>
              <h3 className="font-medium text-slate-900 mb-2">Resume:</h3>
              <p className="text-slate-700">{selectedApplication.resumeName}</p>
              <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                Download Resume
              </button>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t">
            <h3 className="font-medium text-slate-900 mb-2">Notes:</h3>
            <textarea
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Add notes about this candidate..."
            />
            <div className="mt-2 flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Save Notes
              </button>
              <button
                onClick={() => handleDelete(selectedApplication.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Delete Application
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Job Applications</h2>
        <div className="flex gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as 'all' | 'new' | 'reviewed' | 'shortlisted' | 'hired' | 'rejected')}
            className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Applications</option>
            <option value="new">New</option>
            <option value="reviewed">Reviewed</option>
            <option value="shortlisted">Shortlisted</option>
            <option value="rejected">Rejected</option>
            <option value="hired">Hired</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Experience</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Applied</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredApplications.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-slate-500">No applications found</td>
                </tr>
              ) : (
                filteredApplications.map((application) => (
                  <tr key={application.id} className={application.status === 'new' ? 'bg-blue-50' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-slate-900">{application.name}</div>
                      <div className="text-sm text-slate-500">{application.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">{application.position}</div>
                      <div className="text-sm text-slate-500">{application.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{application.experience}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        application.status === 'new' ? 'bg-red-100 text-red-800' :
                        application.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                        application.status === 'shortlisted' ? 'bg-yellow-100 text-yellow-800' :
                        application.status === 'rejected' ? 'bg-gray-100 text-gray-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {application.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {new Date(application.receivedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedApplication(application)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDelete(application.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
