import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  BookOpen, 
  CheckCircle, 
  AlertCircle,
  Star,
  Clock,
  DollarSign,
  ExternalLink
} from 'lucide-react';

interface SkillGapData {
  role: string;
  requiredSkills: Array<{
    skill: string;
    importance: 'high' | 'medium' | 'low';
    hasSkill: boolean;
    proficiency?: number;
  }>;
  averageSalary: string;
  jobGrowth: string;
  timeToLearn: string;
  learningResources: Array<{
    name: string;
    type: 'course' | 'certification' | 'practice';
    provider: string;
    duration: string;
    price: string;
    rating: number;
  }>;
}

const SkillGap = () => {
  const [selectedRole, setSelectedRole] = useState('full-stack-developer');
  const [userSkills, setUserSkills] = useState<string[]>([
    'JavaScript', 'React', 'HTML', 'CSS', 'Git', 'Python'
  ]);

  const roleData: Record<string, SkillGapData> = {
    'full-stack-developer': {
      role: 'Full Stack Developer',
      requiredSkills: [
        { skill: 'JavaScript', importance: 'high', hasSkill: true, proficiency: 85 },
        { skill: 'React', importance: 'high', hasSkill: true, proficiency: 80 },
        { skill: 'Node.js', importance: 'high', hasSkill: false },
        { skill: 'TypeScript', importance: 'high', hasSkill: false },
        { skill: 'MongoDB', importance: 'medium', hasSkill: false },
        { skill: 'Express.js', importance: 'medium', hasSkill: false },
        { skill: 'Docker', importance: 'medium', hasSkill: false },
        { skill: 'AWS', importance: 'low', hasSkill: false },
      ],
      averageSalary: '₹8-15 LPA',
      jobGrowth: '+22%',
      timeToLearn: '6-8 months',
      learningResources: [
        {
          name: 'The Complete Node.js Developer Course',
          type: 'course',
          provider: 'Udemy',
          duration: '35 hours',
          price: '₹3,000',
          rating: 4.6
        },
        {
          name: 'TypeScript Handbook',
          type: 'course',
          provider: 'TypeScript Official',
          duration: '20 hours',
          price: 'Free',
          rating: 4.8
        },
        {
          name: 'MongoDB Developer Path',
          type: 'certification',
          provider: 'MongoDB University',
          duration: '40 hours',
          price: 'Free',
          rating: 4.5
        }
      ]
    },
    'data-scientist': {
      role: 'Data Scientist',
      requiredSkills: [
        { skill: 'Python', importance: 'high', hasSkill: true, proficiency: 75 },
        { skill: 'Machine Learning', importance: 'high', hasSkill: false },
        { skill: 'SQL', importance: 'high', hasSkill: false },
        { skill: 'Statistics', importance: 'high', hasSkill: false },
        { skill: 'TensorFlow', importance: 'medium', hasSkill: false },
        { skill: 'Pandas', importance: 'medium', hasSkill: false },
        { skill: 'R', importance: 'low', hasSkill: false },
        { skill: 'Tableau', importance: 'low', hasSkill: false },
      ],
      averageSalary: '₹10-20 LPA',
      jobGrowth: '+31%',
      timeToLearn: '8-12 months',
      learningResources: [
        {
          name: 'Machine Learning Specialization',
          type: 'course',
          provider: 'Coursera',
          duration: '60 hours',
          price: '₹4,000/month',
          rating: 4.9
        },
        {
          name: 'SQL for Data Science',
          type: 'course',
          provider: 'DataCamp',
          duration: '25 hours',
          price: '₹2,500/month',
          rating: 4.7
        }
      ]
    },
    'devops-engineer': {
      role: 'DevOps Engineer',
      requiredSkills: [
        { skill: 'Docker', importance: 'high', hasSkill: false },
        { skill: 'Kubernetes', importance: 'high', hasSkill: false },
        { skill: 'AWS', importance: 'high', hasSkill: false },
        { skill: 'Linux', importance: 'high', hasSkill: false },
        { skill: 'CI/CD', importance: 'medium', hasSkill: false },
        { skill: 'Terraform', importance: 'medium', hasSkill: false },
        { skill: 'Monitoring', importance: 'medium', hasSkill: false },
        { skill: 'Shell Scripting', importance: 'low', hasSkill: false },
      ],
      averageSalary: '₹12-22 LPA',
      jobGrowth: '+25%',
      timeToLearn: '6-10 months',
      learningResources: [
        {
          name: 'Docker & Kubernetes: The Complete Guide',
          type: 'course',
          provider: 'Udemy',
          duration: '45 hours',
          price: '₹3,500',
          rating: 4.8
        },
        {
          name: 'AWS Solutions Architect',
          type: 'certification',
          provider: 'AWS',
          duration: '80 hours',
          price: '₹11,000',
          rating: 4.6
        }
      ]
    }
  };

  const currentRoleData = roleData[selectedRole];
  const skillsWithGap = currentRoleData.requiredSkills.filter(skill => !skill.hasSkill);
  const skillsYouHave = currentRoleData.requiredSkills.filter(skill => skill.hasSkill);
  const gapPercentage = Math.round((skillsWithGap.length / currentRoleData.requiredSkills.length) * 100);

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Skill Gap Analysis</h1>
          <p className="text-lg text-gray-600">
            Identify missing skills for your target role and get a personalized learning path
          </p>
        </div>

        {/* Role Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-lg mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Your Target Role</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(roleData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setSelectedRole(key)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedRole === key
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="font-medium text-gray-900 mb-2">{data.role}</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4" />
                    <span>{data.averageSalary}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>{data.jobGrowth} growth</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Gap Analysis */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gap Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Gap Analysis Overview</h3>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg">
                  {gapPercentage}% Gap
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{skillsYouHave.length}</div>
                  <div className="text-sm text-gray-600">Skills You Have</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{skillsWithGap.length}</div>
                  <div className="text-sm text-gray-600">Skills to Learn</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{currentRoleData.timeToLearn}</div>
                  <div className="text-sm text-gray-600">Est. Learning Time</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress to {currentRoleData.role}</span>
                  <span>{100 - gapPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${100 - gapPercentage}%` }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Skills Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Skills Breakdown</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Skills You Have */}
                <div>
                  <h4 className="font-semibold text-green-700 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Skills You Have ({skillsYouHave.length})
                  </h4>
                  <div className="space-y-3">
                    {skillsYouHave.map(skill => (
                      <div key={skill.skill} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="font-medium text-gray-900">{skill.skill}</div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImportanceColor(skill.importance)}`}>
                            {skill.importance}
                          </span>
                        </div>
                        {skill.proficiency && (
                          <div className="text-green-600 font-medium">{skill.proficiency}%</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills to Learn */}
                <div>
                  <h4 className="font-semibold text-orange-700 mb-4 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Skills to Learn ({skillsWithGap.length})
                  </h4>
                  <div className="space-y-3">
                    {skillsWithGap.map(skill => (
                      <div key={skill.skill} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="font-medium text-gray-900">{skill.skill}</div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImportanceColor(skill.importance)}`}>
                            {skill.importance}
                          </span>
                        </div>
                        <Target className="h-4 w-4 text-orange-600" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Learning Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recommended Learning Resources</h3>
              <div className="space-y-4">
                {currentRoleData.learningResources.map((resource, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium text-gray-900">{resource.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            resource.type === 'course' ? 'bg-blue-100 text-blue-800' :
                            resource.type === 'certification' ? 'bg-purple-100 text-purple-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {resource.type}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">{resource.provider}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{resource.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{resource.price}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {getRatingStars(resource.rating)}
                            <span>({resource.rating})</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-4 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Summary & Actions */}
          <div className="space-y-8">
            {/* Role Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Role Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average Salary</span>
                  <span className="font-medium text-gray-900">{currentRoleData.averageSalary}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Job Growth</span>
                  <span className="font-medium text-green-600">{currentRoleData.jobGrowth}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Learning Time</span>
                  <span className="font-medium text-gray-900">{currentRoleData.timeToLearn}</span>
                </div>
              </div>
            </motion.div>

            {/* Learning Plan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Learning Plan</h3>
              <div className="space-y-3">
                <div className="text-sm text-gray-600">Priority Skills to Learn:</div>
                {skillsWithGap
                  .filter(skill => skill.importance === 'high')
                  .slice(0, 3)
                  .map((skill, index) => (
                    <div key={skill.skill} className="flex items-center space-x-3">
                      <div className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                        {index + 1}
                      </div>
                      <span className="text-gray-900">{skill.skill}</span>
                    </div>
                  ))}
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-200">
                Create Learning Plan
              </button>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Next Steps</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start space-x-2">
                  <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">1</div>
                  <span>Start with high-priority skills ({skillsWithGap.filter(s => s.importance === 'high').length} skills)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">2</div>
                  <span>Take recommended courses and get certifications</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">3</div>
                  <span>Build projects to demonstrate your new skills</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillGap;