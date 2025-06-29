import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  Target,
  BookOpen,
  Download
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface SkillMatch {
  skill: string;
  hasSkill: boolean;
  demand: number;
  category: string;
}

interface AnalysisResult {
  extractedSkills: string[];
  skillMatches: SkillMatch[];
  overallScore: number;
  recommendations: string[];
  careerPaths: string[];
  missingSkills: string[];
}

const ResumeAnalyzer = () => {
  const { user } = useAuthStore();
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [selectedCareerPath, setSelectedCareerPath] = useState('');

  // Mock analysis results - in real app, this would call an API
  const mockAnalysisResult: AnalysisResult = {
    extractedSkills: ['Python', 'SQL', 'React', 'JavaScript', 'Git', 'Docker', 'AWS'],
    skillMatches: [
      { skill: 'Python', hasSkill: true, demand: 95, category: 'Programming' },
      { skill: 'React', hasSkill: true, demand: 89, category: 'Frontend' },
      { skill: 'AWS', hasSkill: true, demand: 87, category: 'Cloud' },
      { skill: 'Machine Learning', hasSkill: false, demand: 78, category: 'AI/ML' },
      { skill: 'Kubernetes', hasSkill: false, demand: 72, category: 'DevOps' },
      { skill: 'TypeScript', hasSkill: false, demand: 70, category: 'Programming' },
    ],
    overallScore: 78,
    recommendations: [
      'Consider learning Machine Learning to increase your marketability in data science roles',
      'Kubernetes skills are highly valued for DevOps and cloud positions',
      'TypeScript knowledge would complement your React expertise',
      'Consider getting AWS certifications to validate your cloud skills'
    ],
    careerPaths: [
      'Full Stack Developer',
      'Frontend Developer',
      'Cloud Engineer',
      'DevOps Engineer',
      'Data Engineer'
    ],
    missingSkills: ['Machine Learning', 'Kubernetes', 'TypeScript', 'MongoDB', 'GraphQL']
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setFile(file);
      setAnalysisResult(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  const analyzeResume = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysisResult(mockAnalysisResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  const generateReport = () => {
    // In real app, this would generate a PDF report
    alert('Report generation feature coming soon!');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Resume Analyzer</h1>
          <p className="text-lg text-gray-600">
            Upload your resume to get detailed skill analysis and market insights
          </p>
        </div>

        {!analysisResult ? (
          <div className="space-y-8">
            {/* Upload Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                {isDragActive ? (
                  <p className="text-blue-600 font-medium">Drop your resume here...</p>
                ) : (
                  <div>
                    <p className="text-gray-600 mb-2">
                      Drag and drop your resume here, or click to select
                    </p>
                    <p className="text-sm text-gray-500">
                      Supports PDF, DOC, and DOCX files (max 5MB)
                    </p>
                  </div>
                )}
              </div>

              {file && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setFile(null)}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              )}

              {file && (
                <div className="mt-6 text-center">
                  <button
                    onClick={analyzeResume}
                    disabled={isAnalyzing}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <Target className="h-5 w-5" />
                        <span>Analyze Resume</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </motion.div>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Skill Extraction</h3>
                <p className="text-gray-600 text-sm">
                  AI-powered parsing to identify all technical and soft skills from your resume
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Market Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Compare your skills against current market demand and salary trends
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Recommendations</h3>
                <p className="text-gray-600 text-sm">
                  Get personalized suggestions for skills to learn and career paths to explore
                </p>
              </motion.div>
            </div>
          </div>
        ) : (
          /* Analysis Results */
          <div className="space-y-8">
            {/* Overall Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{analysisResult.overallScore}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Overall Skill Score</h2>
                <p className="text-gray-600">
                  Your resume matches {analysisResult.overallScore}% of the most in-demand skills
                </p>
              </div>
            </motion.div>

            {/* Skill Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Skill Analysis</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Skills You Have ({analysisResult.extractedSkills.length})
                  </h4>
                  <div className="space-y-3">
                    {analysisResult.skillMatches
                      .filter(skill => skill.hasSkill)
                      .map(skill => (
                        <div key={skill.skill} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">{skill.skill}</div>
                            <div className="text-sm text-gray-600">{skill.category}</div>
                          </div>
                          <div className="text-green-600 font-bold">{skill.demand}%</div>
                        </div>
                      ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 mb-4 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Missing High-Demand Skills
                  </h4>
                  <div className="space-y-3">
                    {analysisResult.skillMatches
                      .filter(skill => !skill.hasSkill)
                      .map(skill => (
                        <div key={skill.skill} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">{skill.skill}</div>
                            <div className="text-sm text-gray-600">{skill.category}</div>
                          </div>
                          <div className="text-orange-600 font-bold">{skill.demand}%</div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Career Paths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended Career Paths</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {analysisResult.careerPaths.map(path => (
                  <button
                    key={path}
                    onClick={() => setSelectedCareerPath(path)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedCareerPath === path
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className="font-medium text-gray-900">{path}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Match: {Math.floor(Math.random() * 20) + 70}%
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Personalized Recommendations</h3>
              <div className="space-y-4">
                {analysisResult.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{rec}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={generateReport}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                <Download className="h-5 w-5" />
                <span>Download Report</span>
              </button>
              <button
                onClick={() => {
                  setFile(null);
                  setAnalysisResult(null);
                }}
                className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200"
              >
                <Upload className="h-5 w-5" />
                <span>Analyze Another Resume</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;