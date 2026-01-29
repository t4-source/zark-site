'use client';

import { useState, useEffect } from 'react';

interface Settings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialMedia: {
    linkedin: string;
    twitter: string;
    facebook: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
  };
  notifications: {
    emailNotifications: boolean;
    newContactForm: boolean;
    newJobApplication: boolean;
    systemUpdates: boolean;
  };
  security: {
    twoFactorAuth: boolean;
    sessionTimeout: number;
    loginAttempts: number;
  };
}

export default function Settings() {
  const [settings, setSettings] = useState<Settings>({
    siteName: 'K RAGHAV & ASSOCIATES',
    siteDescription: 'Chartered Accountancy firm offering audit, assurance, taxation, consulting and cybersecurity services.',
    contactEmail: 'raghav@kraca.in',
    contactPhone: '+91-9936104447',
    address: '105, Chintels House, 16 Station Road, Lucknow - 226001',
    socialMedia: {
      linkedin: '',
      twitter: '',
      facebook: ''
    },
    seo: {
      metaTitle: 'K RAGHAV & ASSOCIATES | Chartered Accountants',
      metaDescription: 'K RAGHAV & ASSOCIATES is a Chartered Accountancy firm offering audit, assurance, taxation, consulting and cybersecurity services.',
      keywords: 'chartered accountants, audit, taxation, cybersecurity, consulting'
    },
    notifications: {
      emailNotifications: true,
      newContactForm: true,
      newJobApplication: true,
      systemUpdates: false
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: 24,
      loginAttempts: 5
    }
  });

  const [activeTab, setActiveTab] = useState<'general' | 'seo' | 'notifications' | 'security'>('general');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const savedSettings = localStorage.getItem('admin-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      localStorage.setItem('admin-settings', JSON.stringify(settings));
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Settings saved successfully!');
    } catch (error) {
      alert('Failed to save settings. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (section: string, field: string, value: string | boolean | number) => {
    if (section === 'socialMedia' || section === 'seo' || section === 'notifications' || section === 'security') {
      setSettings(prev => ({
        ...prev,
        [section]: {
          ...(prev[section as keyof Settings] as Record<string, unknown>),
          [field]: value
        }
      }));
    } else {
      setSettings(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const tabs = [
    { id: 'general', name: 'General', icon: '⚙️' },
    { id: 'seo', name: 'SEO', icon: '🔍' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'security', name: 'Security', icon: '🔒' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Settings</h2>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isSaving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-slate-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'general' | 'seo' | 'notifications' | 'security')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        {activeTab === 'general' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">General Settings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Site Name</label>
                <input
                  type="text"
                  value={settings.siteName}
                  onChange={(e) => handleChange('', 'siteName', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Contact Email</label>
                <input
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) => handleChange('', 'contactEmail', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Site Description</label>
              <textarea
                rows={3}
                value={settings.siteDescription}
                onChange={(e) => handleChange('', 'siteDescription', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Contact Phone</label>
                <input
                  type="tel"
                  value={settings.contactPhone}
                  onChange={(e) => handleChange('', 'contactPhone', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Address</label>
                <input
                  type="text"
                  value={settings.address}
                  onChange={(e) => handleChange('', 'address', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Social Media Links</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">LinkedIn</label>
                  <input
                    type="url"
                    value={settings.socialMedia.linkedin}
                    onChange={(e) => handleChange('socialMedia', 'linkedin', e.target.value)}
                    placeholder="https://linkedin.com/company/..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Twitter</label>
                  <input
                    type="url"
                    value={settings.socialMedia.twitter}
                    onChange={(e) => handleChange('socialMedia', 'twitter', e.target.value)}
                    placeholder="https://twitter.com/..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Facebook</label>
                  <input
                    type="url"
                    value={settings.socialMedia.facebook}
                    onChange={(e) => handleChange('socialMedia', 'facebook', e.target.value)}
                    placeholder="https://facebook.com/..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">SEO Settings</h3>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Meta Title</label>
              <input
                type="text"
                value={settings.seo.metaTitle}
                onChange={(e) => handleChange('seo', 'metaTitle', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={60}
              />
              <p className="text-xs text-slate-500 mt-1">{settings.seo.metaTitle.length}/60 characters</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Meta Description</label>
              <textarea
                rows={3}
                value={settings.seo.metaDescription}
                onChange={(e) => handleChange('seo', 'metaDescription', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={160}
              />
              <p className="text-xs text-slate-500 mt-1">{settings.seo.metaDescription.length}/160 characters</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Keywords</label>
              <input
                type="text"
                value={settings.seo.keywords}
                onChange={(e) => handleChange('seo', 'keywords', e.target.value)}
                placeholder="chartered accountants, audit, taxation, cybersecurity"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-slate-500 mt-1">Separate keywords with commas</p>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">Notification Settings</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-slate-700">Email Notifications</label>
                  <p className="text-xs text-slate-500">Enable all email notifications</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.notifications.emailNotifications}
                  onChange={(e) => handleChange('notifications', 'emailNotifications', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-slate-700">New Contact Form</label>
                  <p className="text-xs text-slate-500">Notify when someone submits contact form</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.notifications.newContactForm}
                  onChange={(e) => handleChange('notifications', 'newContactForm', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-slate-700">New Job Application</label>
                  <p className="text-xs text-slate-500">Notify when someone applies for a job</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.notifications.newJobApplication}
                  onChange={(e) => handleChange('notifications', 'newJobApplication', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-slate-700">System Updates</label>
                  <p className="text-xs text-slate-500">Notify about system updates and maintenance</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.notifications.systemUpdates}
                  onChange={(e) => handleChange('notifications', 'systemUpdates', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">Security Settings</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-slate-700">Two-Factor Authentication</label>
                  <p className="text-xs text-slate-500">Add an extra layer of security to your account</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.security.twoFactorAuth}
                  onChange={(e) => handleChange('security', 'twoFactorAuth', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Session Timeout (hours)</label>
                <select
                  value={settings.security.sessionTimeout}
                  onChange={(e) => handleChange('security', 'sessionTimeout', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={1}>1 hour</option>
                  <option value={4}>4 hours</option>
                  <option value={8}>8 hours</option>
                  <option value={24}>24 hours</option>
                  <option value={168}>1 week</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Max Login Attempts</label>
                <select
                  value={settings.security.loginAttempts}
                  onChange={(e) => handleChange('security', 'loginAttempts', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={3}>3 attempts</option>
                  <option value={5}>5 attempts</option>
                  <option value={10}>10 attempts</option>
                  <option value={20}>20 attempts</option>
                </select>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Security Notice</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>These settings affect the security of your admin panel. Changes will take effect immediately.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

