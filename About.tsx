import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Target, 
  Award,
  Mail,
  Linkedin,
  Github,
  Globe
} from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Job Listings Analyzed', value: '500K+', icon: BarChart3 },
    { label: 'Users Served', value: '50K+', icon: Users },
    { label: 'Skills Tracked', value: '1000+', icon: Target },
    { label: 'Success Stories', value: '5K+', icon: Award },
  ];

  const teamMembers = [
    {
      name: 'Arjun Patel',
      role: 'Founder & Lead Data Scientist',
      bio: 'Former Google ML Engineer with 8+ years in data science and job market analytics',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        github: '#',
        email: 'arjun@skillpulse.com'
      }
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Product Manager',
      bio: 'Ex-Microsoft PM specializing in career development tools and user experience',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        github: '#',
        email: 'priya@skillpulse.com'
      }
    },
    {
      name: 'Vikram Singh',
      role: 'Head of Engineering',
      bio: 'Full-stack engineer with expertise in scalable analytics platforms and ML systems',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        github: '#',
        email: 'vikram@skillpulse.com'
      }
    }
  ];

  const features = [
    {
      title: 'Real-Time Data Processing',
      description: 'We process millions of job listings daily from top job boards to provide you with the most current market insights.',
      icon: BarChart3
    },
    {
      title: 'AI-Powered Analysis',
      description: 'Our machine learning algorithms analyze job descriptions to extract skills, predict trends, and provide personalized recommendations.',
      icon: Target
    },
    {
      title: 'Career Guidance',
      description: 'Get personalized career paths, skill gap analysis, and learning recommendations based on your profile and goals.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <BarChart3 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Skill Demand Pulse
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to democratize career intelligence by providing real-time insights 
            into job market trends, skill demands, and career opportunities for professionals worldwide.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-8 shadow-lg mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              In today's rapidly evolving job market, professionals need real-time insights to make 
              informed career decisions. We bridge the gap between job seekers and market reality by 
              providing data-driven career intelligence that empowers individuals to stay ahead of trends, 
              identify skill gaps, and make strategic career moves.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="text-center">
                  <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Skill Demand Pulse was born out of frustration with the disconnect between what 
                professionals learn and what the job market actually demands. Our founder, while 
                transitioning between roles at Google, realized how difficult it was to get 
                real-time insights into skill trends and career opportunities.
              </p>
              <p>
                After countless hours analyzing job postings manually and seeing friends struggle 
                with similar challenges, we decided to build the platform we wished existed. 
                What started as a weekend project has grown into a comprehensive career intelligence 
                platform used by thousands of professionals worldwide.
              </p>
              <p>
                Today, we're proud to help job seekers, career changers, and professionals at all 
                levels make data-driven decisions about their careers. Our platform processes millions 
                of job postings, identifies emerging trends, and provides personalized recommendations 
                that have helped thousands of users land their dream jobs.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team working on data analysis"
              className="rounded-xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Experienced professionals passionate about career development and data science
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Technology Stack</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Built with modern technologies to ensure scalability, reliability, and performance
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-2xl mb-2">🐍</div>
                <h3 className="font-semibold text-gray-900">Python</h3>
                <p className="text-sm text-gray-600">Data processing & ML</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-2xl mb-2">⚛️</div>
                <h3 className="font-semibold text-gray-900">React</h3>
                <p className="text-sm text-gray-600">Frontend interface</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-2xl mb-2">☁️</div>
                <h3 className="font-semibold text-gray-900">AWS</h3>
                <p className="text-sm text-gray-600">Cloud infrastructure</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-2xl mb-2">🤖</div>
                <h3 className="font-semibold text-gray-900">TensorFlow</h3>
                <p className="text-sm text-gray-600">Machine learning</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-lg text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions, feedback, or want to collaborate? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@skillpulse.com"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              <Mail className="h-5 w-5" />
              <span>hello@skillpulse.com</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200"
            >
              <Globe className="h-5 w-5" />
              <span>Visit our Blog</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;