import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Area, AreaChart
} from 'recharts';
import { 
  Filter, 
  TrendingUp, 
  MapPin, 
  Building, 
  Calendar,
  Search,
  Download
} from 'lucide-react';

const Dashboard = () => {
  const [filters, setFilters] = useState({
    location: 'all',
    industry: 'all',
    timeRange: '30d',
    skillCategory: 'all'
  });

  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - in real app, this would come from API
  const skillsData = [
    { name: 'Python', demand: 95, growth: 12, category: 'Programming' },
    { name: 'React', demand: 89, growth: 18, category: 'Frontend' },
    { name: 'AWS', demand: 87, growth: 15, category: 'Cloud' },
    { name: 'SQL', demand: 83, growth: 8, category: 'Database' },
    { name: 'Machine Learning', demand: 78, growth: 25, category: 'AI/ML' },
    { name: 'Docker', demand: 76, growth: 20, category: 'DevOps' },
    { name: 'Node.js', demand: 74, growth: 14, category: 'Backend' },
    { name: 'Kubernetes', demand: 72, growth: 22, category: 'DevOps' },
    { name: 'TypeScript', demand: 70, growth: 30, category: 'Programming' },
    { name: 'Power BI', demand: 68, growth: 16, category: 'Analytics' },
  ];

  const trendData = [
    { month: 'Jan', python: 65, react: 58, aws: 52 },
    { month: 'Feb', python: 72, react: 64, aws: 58 },
    { month: 'Mar', python: 78, react: 71, aws: 65 },
    { month: 'Apr', python: 85, react: 79, aws: 72 },
    { month: 'May', python: 90, react: 85, aws: 79 },
    { month: 'Jun', python: 95, react: 89, aws: 87 },
  ];

  const locationData = [
    { name: 'Bangalore', value: 35, color: '#3B82F6' },
    { name: 'Hyderabad', value: 22, color: '#7C3AED' },
    { name: 'Pune', value: 18, color: '#059669' },
    { name: 'Chennai', value: 15, color: '#DC2626' },
    { name: 'Mumbai', value: 10, color: '#EA580C' },
  ];

  const industryData = [
    { name: 'Technology', jobs: 15420, growth: 18 },
    { name: 'Finance', jobs: 8950, growth: 12 },
    { name: 'Healthcare', jobs: 6780, growth: 25 },
    { name: 'E-commerce', jobs: 5640, growth: 22 },
    { name: 'Consulting', jobs: 4230, growth: 8 },
  ];

  const filteredSkills = useMemo(() => {
    return skillsData.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filters.skillCategory === 'all' || skill.category === filters.skillCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, filters.skillCategory]);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Skills Demand Dashboard</h1>
          <p className="text-lg text-gray-600">
            Real-time insights into the most in-demand skills across industries
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <select
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Locations</option>
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="pune">Pune</option>
              <option value="chennai">Chennai</option>
            </select>
            <select
              value={filters.industry}
              onChange={(e) => setFilters({...filters, industry: e.target.value})}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Industries</option>
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="ecommerce">E-commerce</option>
            </select>
            <select
              value={filters.timeRange}
              onChange={(e) => setFilters({...filters, timeRange: e.target.value})}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <select
              value={filters.skillCategory}
              onChange={(e) => setFilters({...filters, skillCategory: e.target.value})}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="Programming">Programming</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Cloud">Cloud</option>
              <option value="AI/ML">AI/ML</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Top Skills Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Top Skills by Demand</h3>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={filteredSkills.slice(0, 8)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="demand" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.9}/>
                      <stop offset="95%" stopColor="#7C3AED" stopOpacity={0.9}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Trend Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">6-Month Trend Analysis</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="python" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="react" stackId="1" stroke="#7C3AED" fill="#7C3AED" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="aws" stackId="1" stroke="#059669" fill="#059669" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Industry Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Building className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Jobs by Industry</h3>
              </div>
              <div className="space-y-4">
                {industryData.map((industry, index) => (
                  <div key={industry.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="font-medium text-gray-900">{industry.name}</div>
                      <div className="text-sm text-green-600 font-medium">+{industry.growth}%</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-sm text-gray-600">{industry.jobs.toLocaleString()} jobs</div>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                          style={{ width: `${(industry.jobs / 15420) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Location */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">45,234</div>
                  <div className="text-sm text-gray-600">Active Job Listings</div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">+18%</div>
                  <div className="text-sm text-gray-600">Growth This Month</div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">2,547</div>
                  <div className="text-sm text-gray-600">New Companies</div>
                </div>
              </div>
            </motion.div>

            {/* Location Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center space-x-2 mb-6">
                <MapPin className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Jobs by Location</h3>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={locationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {locationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {locationData.map((location) => (
                  <div key={location.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: location.color }}
                      />
                      <span className="text-sm text-gray-700">{location.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{location.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Growing Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900">Fastest Growing</h3>
              </div>
              <div className="space-y-3">
                {skillsData
                  .sort((a, b) => b.growth - a.growth)
                  .slice(0, 5)
                  .map((skill, index) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">{skill.name}</div>
                        <div className="text-xs text-gray-500">{skill.category}</div>
                      </div>
                      <div className="text-green-600 font-bold">+{skill.growth}%</div>
                    </div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;