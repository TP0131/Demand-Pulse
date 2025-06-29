import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { 
  Users, 
  Database, 
  TrendingUp, 
  Settings,
  Upload,
  Download,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Clock,
  Activity
} from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock admin data
  const systemStats = {
    totalUsers: 52847,
    activeUsers: 8934,
    jobListings: 456789,
    skillsTracked: 1247,
    dataIngestionRate: '2.3M/day',
    systemUptime: '99.8%'
  };

  const userGrowthData = [
    { month: 'Jan', users: 1200, active: 890 },
    { month: 'Feb', users: 1890, active: 1340 },
    { month: 'Mar', users: 2340, active: 1780 },
    { month: 'Apr', users: 3200, active: 2450 },
    { month: 'May', users: 4100, active: 3200 },
    { month: 'Jun', users: 5280, active: 4100 },
  ];

  const dataSourcesData = [
    { name: 'LinkedIn', value: 35, color: '#0077B5' },
    { name: 'Indeed', value: 28, color: '#2557A7' },
    { name: 'Naukri', value: 22, color: '#7B68EE' },
    { name: 'AngelList', value: 10, color: '#000000' },
    { name: 'Others', value: 5, color: '#6B7280' },
  ];

  const recentActivities = [
    { id: 1, type: 'data_ingestion', message: 'Processed 45,000 new job listings', time: '2 minutes ago', status: 'success' },
    { id: 2, type: 'user_activity', message: '234 new user registrations', time: '15 minutes ago', status: 'info' },
    { id: 3, type: 'system', message: 'ML model retrained successfully', time: '1 hour ago', status: 'success' },
    { id: 4, type: 'alert', message: 'High API usage detected', time: '2 hours ago', status: 'warning' },
    { id: 5, type: 'data_ingestion', message: 'Failed to fetch from source: timeout', time: '3 hours ago', status: 'error' },
  ];

  const handleRefreshData = async () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'error': return <AlertCircle className="h-4 w-4 text-red-500" />;
      default: return <Clock className="h-4 w-4 text-blue-500" />;
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'data', label: 'Data Management', icon: Database },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage and monitor the Skill Demand Pulse platform</p>
          </div>
          <button
            onClick={handleRefreshData}
            disabled={isRefreshing}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Refresh Data</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* System Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{systemStats.totalUsers.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Users</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{systemStats.activeUsers.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <Database className="h-8 w-8 text-purple-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{systemStats.jobListings.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Job Listings</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{systemStats.skillsTracked}</div>
                    <div className="text-sm text-gray-600">Skills Tracked</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <Upload className="h-8 w-8 text-indigo-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{systemStats.dataIngestionRate}</div>
                    <div className="text-sm text-gray-600">Data/Day</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{systemStats.systemUptime}</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* User Growth */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6">User Growth</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={2} />
                    <Line type="monotone" dataKey="active" stroke="#10B981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Data Sources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Data Sources Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={dataSourcesData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {dataSourcesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {dataSourcesData.map((source) => (
                    <div key={source.name} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: source.color }}
                      />
                      <span className="text-sm text-gray-700">{source.name}: {source.value}%</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    {getStatusIcon(activity.status)}
                    <div className="flex-1">
                      <p className="text-gray-900">{activity.message}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === 'users' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Export Users
              </button>
            </div>
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-medium text-gray-900 mb-2">User Management</h4>
              <p className="text-gray-600">Advanced user management features coming soon</p>
            </div>
          </motion.div>
        )}

        {activeTab === 'data' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Data Ingestion</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="font-medium text-gray-900 mb-2">Upload Job Data</h4>
                  <p className="text-gray-600 text-sm mb-4">Upload CSV or JSON files with job listings</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Choose File
                  </button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Download className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="font-medium text-gray-900 mb-2">Export Data</h4>
                  <p className="text-gray-600 text-sm mb-4">Download processed job and skills data</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Export CSV
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Data Sources Status</h3>
              <div className="space-y-4">
                {['LinkedIn Jobs', 'Indeed', 'Naukri.com', 'AngelList'].map((source, index) => (
                  <div key={source} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-gray-900">{source}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>Last sync: 2 hours ago</span>
                      <span>Status: Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'settings' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">System Settings</h3>
            </div>
            <div className="text-center py-12">
              <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-medium text-gray-900 mb-2">System Configuration</h4>
              <p className="text-gray-600">Advanced system settings and configuration options coming soon</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;