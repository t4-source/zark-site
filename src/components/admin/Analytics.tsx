'use client';

import { useState, useEffect } from 'react';

interface AnalyticsData {
  totalVisitors: number;
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: string;
  topPages: { page: string; views: number }[];
  trafficSources: { source: string; visitors: number; percentage: number }[];
  monthlyData: { month: string; visitors: number; pageViews: number }[];
}

export default function Analytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalVisitors: 0,
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: '0:00',
    topPages: [],
    trafficSources: [],
    monthlyData: []
  });
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  useEffect(() => {
    // Load analytics from localStorage (in production, this would be an API call)
    const savedAnalytics = localStorage.getItem('admin-analytics');
    if (savedAnalytics) {
      setAnalytics(JSON.parse(savedAnalytics));
    } else {
      // Generate realistic sample data
      const sampleData: AnalyticsData = {
        totalVisitors: 1203,
        pageViews: 3674,
        uniqueVisitors: 847,
        bounceRate: 47.2,
        avgSessionDuration: '2:18',
        topPages: [
          { page: '/', views: 1203 },
          { page: '/who-we-are', views: 847 },
          { page: '/practice-areas', views: 692 },
          { page: '/cybersecurity', views: 534 },
          { page: '/contact', views: 398 }
        ],
        trafficSources: [
          { source: 'Direct', visitors: 441, percentage: 36.7 },
          { source: 'Google Search', visitors: 376, percentage: 31.3 },
          { source: 'Social Media', visitors: 216, percentage: 18.0 },
          { source: 'Referrals', visitors: 170, percentage: 14.1 }
        ],
        monthlyData: [
          { month: 'Jan', visitors: 847, pageViews: 2134 },
          { month: 'Feb', visitors: 923, pageViews: 2456 },
          { month: 'Mar', visitors: 1087, pageViews: 2891 },
          { month: 'Apr', visitors: 1203, pageViews: 3674 }
        ]
      };
      setAnalytics(sampleData);
      localStorage.setItem('admin-analytics', JSON.stringify(sampleData));
    }
  }, []);

  const getTimeRangeLabel = () => {
    switch (timeRange) {
      case '7d': return 'Last 7 days';
      case '30d': return 'Last 30 days';
      case '90d': return 'Last 90 days';
      default: return 'Last 30 days';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Website Analytics</h2>
        <div className="flex gap-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as '7d' | '30d' | '90d')}
            className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-500">Total Visitors</p>
              <p className="text-2xl font-bold text-slate-900">{analytics.totalVisitors.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-500">Page Views</p>
              <p className="text-2xl font-bold text-slate-900">{analytics.pageViews.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-500">Unique Visitors</p>
              <p className="text-2xl font-bold text-slate-900">{analytics.uniqueVisitors.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-500">Avg. Session</p>
              <p className="text-2xl font-bold text-slate-900">{analytics.avgSessionDuration}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Pages</h3>
          <div className="space-y-3">
            {analytics.topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">
                    {index + 1}
                  </span>
                  <span className="text-sm text-slate-700">{page.page}</span>
                </div>
                <span className="text-sm font-medium text-slate-900">{page.views.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {analytics.trafficSources.map((source, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-slate-700">{source.source}</span>
                  <span className="text-sm font-medium text-slate-900">{source.visitors} ({source.percentage}%)</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Trend */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Monthly Trend</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {analytics.monthlyData.map((month, index) => (
            <div key={index} className="text-center">
              <div className="text-sm text-slate-500 mb-2">{month.month}</div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{month.visitors}</div>
              <div className="text-xs text-slate-500">visitors</div>
              <div className="text-sm text-slate-600">{month.pageViews} page views</div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700">Bounce Rate</span>
              <span className="text-lg font-semibold text-slate-900">{analytics.bounceRate}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700">Pages per Session</span>
              <span className="text-lg font-semibold text-slate-900">
                {(analytics.pageViews / analytics.totalVisitors).toFixed(1)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700">New vs Returning</span>
              <span className="text-lg font-semibold text-slate-900">
                {((analytics.uniqueVisitors / analytics.totalVisitors) * 100).toFixed(1)}% new
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-sm">
              Export Analytics Report
            </button>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 text-sm">
              Set Up Goals
            </button>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 text-sm">
              Configure Tracking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
