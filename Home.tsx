import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  FileSearch, 
  Target, 
  Users, 
  BarChart3, 
  ArrowRight,
  Briefcase,
  Building,
  MapPin
} from 'lucide-react';

const Home = () => {
  const stats = [
    { label: 'Active Job Listings', value: '45,000+', icon: Briefcase },
    { label: 'Companies Tracked', value: '2,500+', icon: Building },
    { label: 'Skills Analyzed', value: '500+', icon: Target },
    { label: 'Cities Covered', value: '25+', icon: MapPin },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'Real-Time Skill Trends',
      description: 'Track trending skills across industries with live data from major job boards',
      link: '/dashboard',
      color: 'bg-blue-500',
    },
    {
      icon: FileSearch,
      title: 'Resume Analyzer',
      description: 'Upload your resume and get detailed skill analysis with market comparisons',
      link: '/resume-analyzer',
      color: 'bg-purple-500',
    },
    {
      icon: Target,
      title: 'Skill Gap Analysis',
      description: 'Identify missing skills for your target role and get personalized recommendations',
      link: '/skill-gap',
      color: 'bg-green-500',
    },
  ];

  const topSkills = [
    { name: 'Python', demand: 95, growth: '+12%' },
    { name: 'React', demand: 89, growth: '+18%' },
    { name: 'AWS', demand: 87, growth: '+15%' },
    { name: 'SQL', demand: 83, growth: '+8%' },
    { name: 'Machine Learning', demand: 78, growth: '+25%' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Know What Skills Are{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                In Demand
              </span>{' '}
              Now
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Real-time job market intelligence powered by data from thousands of job listings. 
              Analyze trends, optimize your skills, and stay ahead in your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resume-analyzer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <FileSearch className="h-5 w-5" />
                <span>Analyze Your Resume</span>
              </Link>
              <Link
                to="/dashboard"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Explore Trends</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Tools for Career Growth
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to understand the job market and accelerate your career development
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Skills Preview */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Top Skills in Demand Right Now
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Stay ahead of the curve with real-time insights into the most sought-after skills 
                across different industries and locations.
              </p>
              <Link
                to="/dashboard"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                View Full Dashboard
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                {topSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="font-medium text-gray-900">{skill.name}</div>
                      <div className="text-sm text-green-600 font-medium">{skill.growth}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                          style={{ width: `${skill.demand}%` }}
                        />
                      </div>
                      <div className="text-sm font-medium text-gray-600 w-8">{skill.demand}%</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of professionals who use Skill Demand Pulse to stay ahead in their careers
            </p>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
            >
              <Users className="h-5 w-5" />
              <span>Get Started Free</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;