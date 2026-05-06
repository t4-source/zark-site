'use client';

import { useState, useEffect } from 'react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  organization?: string;
  message: string;
  receivedAt: string;
  status: 'new' | 'read' | 'replied';
}

export default function ContactMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'replied'>('all');

  useEffect(() => {
    // Load messages from localStorage (in production, this would be an API call)
    const savedMessages = localStorage.getItem('admin-contact-messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const saveMessages = (newMessages: ContactMessage[]) => {
    setMessages(newMessages);
    localStorage.setItem('admin-contact-messages', JSON.stringify(newMessages));
  };

  const handleStatusChange = (id: string, status: 'new' | 'read' | 'replied') => {
    const updatedMessages = messages.map(msg => 
      msg.id === id ? { ...msg, status } : msg
    );
    saveMessages(updatedMessages);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      const updatedMessages = messages.filter(msg => msg.id !== id);
      saveMessages(updatedMessages);
    }
  };

  const filteredMessages = messages.filter(msg => 
    filter === 'all' || msg.status === filter
  );

  if (selectedMessage) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedMessage(null)}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            ← Back to Messages
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => handleStatusChange(selectedMessage.id, 'read')}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleStatusChange(selectedMessage.id, 'replied')}
              className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
            >
              Mark as Replied
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-slate-900">{selectedMessage.name}</h2>
            <p className="text-slate-600">{selectedMessage.email}</p>
            {selectedMessage.organization && (
              <p className="text-slate-600">{selectedMessage.organization}</p>
            )}
            <p className="text-sm text-slate-500">
              Received: {new Date(selectedMessage.receivedAt).toLocaleString()}
            </p>
            <span className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
              selectedMessage.status === 'new' ? 'bg-red-100 text-red-800' :
              selectedMessage.status === 'read' ? 'bg-blue-100 text-blue-800' :
              'bg-green-100 text-green-800'
            }`}>
              {selectedMessage.status}
            </span>
          </div>
          
          <div className="border-t pt-4">
            <h3 className="font-medium text-slate-900 mb-2">Message:</h3>
            <p className="text-slate-700 whitespace-pre-wrap">{selectedMessage.message}</p>
          </div>

          <div className="mt-6 pt-4 border-t">
            <h3 className="font-medium text-slate-900 mb-2">Reply:</h3>
            <textarea
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Type your reply here..."
            />
            <div className="mt-2 flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Send Reply
              </button>
              <button
                onClick={() => handleDelete(selectedMessage.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Delete Message
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
        <h2 className="text-2xl font-bold text-slate-900">Contact Messages</h2>
        <div className="flex gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as 'all' | 'new' | 'read' | 'replied')}
            className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Messages</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Organization</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Received</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredMessages.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-slate-500">No messages found</td>
                </tr>
              ) : (
                filteredMessages.map((message) => (
                  <tr key={message.id} className={message.status === 'new' ? 'bg-blue-50' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-slate-900">{message.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{message.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {message.organization || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        message.status === 'new' ? 'bg-red-100 text-red-800' :
                        message.status === 'read' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {message.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {new Date(message.receivedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedMessage(message)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDelete(message.id)}
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
