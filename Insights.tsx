import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Calendar, 
  User, 
  Eye,
  ThumbsUp,
  Share,
  Clock,
  Tag
} from 'lucide-react';
import { format } from 'date-fns';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  readTime: string;
  views: number;
  likes: number;
  category: string;
  tags: string[];
  featured: boolean;
}

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: '1',
      title: 'The Rise of AI and Machine Learning Skills in 2024',
      excerpt: 'Artificial Intelligence and Machine Learning continue to dominate the tech job market. Here\'s what you need to know about the most in-demand AI skills.',
      content: `
        The artificial intelligence and machine learning landscape has evolved dramatically in 2024. Companies across industries are seeking professionals with specialized AI skills to drive digital transformation and innovation.

        ## Key Trends in AI/ML Skills

        ### 1. Generative AI Expertise
        With the success of ChatGPT and similar models, professionals with expertise in generative AI, prompt engineering, and large language models are in extremely high demand. Skills like:
        - Prompt engineering and optimization
        - Fine-tuning pre-trained models
        - RAG (Retrieval-Augmented Generation) implementation
        - Model deployment and scaling

        ### 2. MLOps and Production Systems
        The focus has shifted from research to production-ready AI systems. MLOps skills are now essential:
        - Model versioning and lifecycle management
        - Continuous integration for ML pipelines
        - Model monitoring and performance tracking
        - Infrastructure as Code for ML systems

        ### 3. Responsible AI and Ethics
        As AI becomes more prevalent, companies are prioritizing responsible AI implementation:
        - Bias detection and mitigation
        - AI explainability and interpretability
        - Privacy-preserving machine learning
        - AI governance frameworks

        ## Salary Trends
        AI/ML professionals are commanding premium salaries:
        - Entry-level ML Engineers: ₹8-12 LPA
        - Senior ML Engineers: ₹20-35 LPA
        - AI Research Scientists: ₹25-50 LPA
        - AI Product Managers: ₹30-60 LPA

        ## Getting Started
        For professionals looking to break into AI/ML:
        1. Master Python and key libraries (TensorFlow, PyTorch, scikit-learn)
        2. Understand fundamental ML algorithms and statistics
        3. Gain hands-on experience with cloud platforms (AWS, GCP, Azure)
        4. Build a portfolio of end-to-end ML projects
        5. Stay updated with the latest research and tools
      `,
      author: 'Priya Sharma',
      publishedAt: new Date('2024-01-15'),
      readTime: '8 min read',
      views: 12500,
      likes: 234,
      category: 'Technology',
      tags: ['AI', 'Machine Learning', 'Career', 'Skills'],
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Computing Skills: AWS vs Azure vs Google Cloud in 2024',
      excerpt: 'A comprehensive comparison of cloud platforms and the skills that matter most for cloud professionals in today\'s market.',
      content: `
        Cloud computing continues to be one of the fastest-growing sectors in technology. With organizations accelerating their digital transformation, cloud skills remain highly sought after across all industries.

        ## Market Share and Demand

        ### AWS (Amazon Web Services)
        - Market leader with 32% market share
        - Highest demand for AWS-certified professionals
        - Average salary premium: 15-25% above other clouds
        - Key skills: EC2, S3, Lambda, RDS, VPC, IAM

        ### Microsoft Azure
        - Strong in enterprise environments
        - Growing rapidly with 23% market share
        - Excellent integration with Microsoft ecosystem
        - Key skills: Azure AD, App Services, Storage, SQL Database

        ### Google Cloud Platform (GCP)
        - Leader in AI/ML and data analytics
        - 10% market share but growing fast
        - Strong in containerization and Kubernetes
        - Key skills: BigQuery, Compute Engine, GKE, Cloud Functions

        ## Most In-Demand Cloud Skills

        1. **Infrastructure as Code (IaC)**
           - Terraform
           - CloudFormation (AWS)
           - ARM Templates (Azure)

        2. **Container Orchestration**
           - Kubernetes
           - Docker
           - Container registries

        3. **DevOps and CI/CD**
           - Jenkins, GitLab CI
           - Azure DevOps
           - AWS CodePipeline

        4. **Security and Compliance**
           - Identity and Access Management
           - Network security
           - Compliance frameworks

        ## Career Paths and Salaries

        - **Cloud Architect**: ₹25-45 LPA
        - **DevOps Engineer**: ₹12-25 LPA
        - **Cloud Security Engineer**: ₹15-30 LPA
        - **Site Reliability Engineer**: ₹18-35 LPA

        ## Certification ROI
        Cloud certifications continue to provide excellent return on investment:
        - AWS Solutions Architect: Average 20% salary increase
        - Azure Fundamentals: Great entry point for beginners
        - GCP Professional Cloud Architect: Highest-paying GCP cert

        ## Recommendation
        For career growth, focus on:
        1. Master one cloud platform deeply
        2. Learn Infrastructure as Code
        3. Understand security best practices
        4. Gain hands-on experience with real projects
        5. Stay updated with new services and features
      `,
      author: 'Rahul Verma',
      publishedAt: new Date('2024-01-10'),
      readTime: '12 min read',
      views: 8900,
      likes: 167,
      category: 'Technology',
      tags: ['Cloud Computing', 'AWS', 'Azure', 'GCP', 'DevOps'],
      featured: true
    },
    {
      id: '3',
      title: 'Frontend Development in 2024: React vs Vue vs Angular',
      excerpt: 'The frontend landscape continues to evolve. Here\'s a deep dive into the most popular frameworks and what employers are looking for.',
      content: `
        Frontend development remains one of the most dynamic areas in software development. With new frameworks, tools, and best practices emerging regularly, staying current is crucial for career success.

        ## Framework Popularity and Job Market

        ### React
        - Dominant market leader with 40%+ of job postings
        - Strong ecosystem and community support
        - High demand across startups and enterprises
        - Average salary: ₹8-18 LPA

        ### Vue.js
        - Growing rapidly, especially in Asia
        - Known for gentle learning curve
        - Popular in smaller companies and agencies
        - Average salary: ₹6-15 LPA

        ### Angular
        - Strong in enterprise environments
        - Backed by Google with regular updates
        - Complex but powerful for large applications
        - Average salary: ₹7-16 LPA

        ## Essential Frontend Skills for 2024

        ### Core Technologies
        - **Modern JavaScript (ES6+)**: Arrow functions, async/await, modules
        - **TypeScript**: Increasingly required for large projects
        - **CSS-in-JS**: Styled-components, Emotion
        - **CSS Frameworks**: Tailwind CSS leading the trend

        ### Build Tools and Workflow
        - **Vite**: Fast build tool gaining popularity
        - **Webpack**: Still relevant for complex configurations
        - **Package Managers**: npm, yarn, pnpm
        - **Version Control**: Git (essential)

        ### Testing and Quality
        - **Unit Testing**: Jest, Vitest
        - **E2E Testing**: Cypress, Playwright
        - **Code Quality**: ESLint, Prettier
        - **Performance**: Lighthouse, Core Web Vitals

        ### Advanced Concepts
        - **State Management**: Redux, Zustand, Pinia
        - **Server-Side Rendering**: Next.js, Nuxt.js
        - **Progressive Web Apps**: Service workers, offline functionality
        - **Micro-frontends**: Module federation, single-spa

        ## Emerging Trends

        1. **Meta-Frameworks**
           - Next.js 14 with App Router
           - SvelteKit gaining traction
           - Remix for data-driven apps

        2. **Edge Computing**
           - Cloudflare Workers
           - Vercel Edge Functions
           - AWS Lambda@Edge

        3. **AI-Assisted Development**
           - GitHub Copilot integration
           - AI-powered design tools
           - Automated testing generation

        ## Career Advice

        ### For Beginners
        1. Master HTML, CSS, and JavaScript fundamentals
        2. Learn React (highest job demand)
        3. Understand version control (Git)
        4. Build a portfolio with real projects

        ### For Experienced Developers
        1. Specialize in performance optimization
        2. Learn system design for frontend
        3. Contribute to open source projects
        4. Mentor junior developers

        ## Salary Trends
        Frontend developer salaries have increased significantly:
        - Junior (0-2 years): ₹4-8 LPA
        - Mid-level (2-5 years): ₹8-15 LPA
        - Senior (5+ years): ₹15-25 LPA
        - Lead/Architect: ₹20-35 LPA

        The key to success in frontend development is continuous learning and staying updated with the rapidly evolving ecosystem.
      `,
      author: 'Anjali Gupta',
      publishedAt: new Date('2024-01-08'),
      readTime: '10 min read',
      views: 7200,
      likes: 143,
      category: 'Technology',
      tags: ['Frontend', 'React', 'Vue', 'Angular', 'JavaScript'],
      featured: false
    },
    {
      id: '4',
      title: 'Data Science Career Path: From Beginner to Expert',
      excerpt: 'A comprehensive roadmap for aspiring data scientists, including skills, tools, and career progression strategies.',
      content: `
        Data science continues to be one of the most sought-after career paths in technology. With organizations becoming increasingly data-driven, the demand for skilled data scientists shows no signs of slowing down.

        ## Understanding the Data Science Landscape

        Data science is an interdisciplinary field that combines:
        - **Statistics and Mathematics**: Foundation for analysis
        - **Programming**: Tools for implementation
        - **Domain Expertise**: Business understanding
        - **Communication**: Presenting insights effectively

        ## Essential Skills by Experience Level

        ### Beginner (0-1 years)
        **Programming Languages**
        - Python: pandas, numpy, matplotlib, seaborn
        - SQL: Data querying and manipulation
        - R: Statistical analysis (optional but valuable)

        **Statistics and Math**
        - Descriptive statistics
        - Probability distributions
        - Hypothesis testing
        - Basic linear algebra

        **Tools and Platforms**
        - Jupyter Notebooks
        - Git version control
        - Basic Excel/Google Sheets
        - Tableau or Power BI

        ### Intermediate (1-3 years)
        **Machine Learning**
        - Supervised learning algorithms
        - Model evaluation and validation
        - Feature engineering
        - scikit-learn library

        **Data Engineering**
        - Data cleaning and preprocessing
        - Working with APIs
        - Basic database management
        - Understanding of data pipelines

        **Advanced Analytics**
        - Time series analysis
        - A/B testing
        - Statistical modeling
        - Business metrics analysis

        ### Advanced (3+ years)
        **Deep Learning**
        - Neural networks
        - TensorFlow/PyTorch
        - Computer vision
        - Natural language processing

        **Big Data Technologies**
        - Spark and Hadoop
        - Cloud platforms (AWS, GCP, Azure)
        - Distributed computing
        - Data warehousing

        **Leadership and Strategy**
        - Project management
        - Cross-functional collaboration
        - Strategic thinking
        - Mentoring junior team members

        ## Career Progression Paths

        ### Individual Contributor Track
        1. **Junior Data Scientist** (₹6-10 LPA)
           - Basic analysis and reporting
           - Simple predictive models
           - Data cleaning and preparation

        2. **Data Scientist** (₹10-18 LPA)
           - Complex modeling projects
           - End-to-end ML solutions
           - Business stakeholder interaction

        3. **Senior Data Scientist** (₹18-28 LPA)
           - Advanced techniques and algorithms
           - Mentoring junior team members
           - Technical leadership on projects

        4. **Principal/Staff Data Scientist** (₹25-40 LPA)
           - Research and innovation
           - Cross-team collaboration
           - Technical strategy

        ### Management Track
        1. **Lead Data Scientist** (₹20-30 LPA)
           - Team leadership
           - Project planning and execution
           - Stakeholder management

        2. **Data Science Manager** (₹25-35 LPA)
           - People management
           - Resource allocation
           - Strategic planning

        3. **Director of Data Science** (₹35-50 LPA)
           - Organizational strategy
           - Budget management
           - Executive communication

        ## Specialization Areas

        ### Machine Learning Engineering
        - Focus on production ML systems
        - MLOps and deployment
        - High demand, excellent compensation

        ### Business Intelligence
        - Reporting and dashboards
        - Business metrics analysis
        - Strong communication skills required

        ### Research Scientist
        - Advanced algorithms and techniques
        - Academic background preferred
        - Publishing research papers

        ### Data Engineering
        - Building data infrastructure
        - High technical requirements
        - Often higher compensation than pure DS roles

        ## Building Your Portfolio

        ### Essential Projects
        1. **Exploratory Data Analysis**: Demonstrate analytical thinking
        2. **Predictive Modeling**: Show ML skills
        3. **End-to-End Project**: Full pipeline from data to deployment
        4. **Domain-Specific Analysis**: Show business understanding

        ### Portfolio Platforms
        - GitHub: Code repositories
        - Kaggle: Competitions and datasets
        - Medium/Blog: Technical writing
        - Personal website: Professional presence

        ## Job Search Strategy

        ### Where to Look
        - Product companies: Google, Microsoft, Amazon
        - Consulting firms: McKinsey, BCG, Deloitte
        - Startups: High growth potential
        - Traditional enterprises: Banking, retail, healthcare

        ### Interview Preparation
        1. **Technical Skills**: Coding, statistics, ML concepts
        2. **Case Studies**: Business problem-solving
        3. **Communication**: Explaining complex concepts simply
        4. **Portfolio Review**: Be ready to discuss your projects

        ## Continuous Learning

        ### Online Resources
        - Coursera: University courses
        - edX: MIT, Harvard content
        - Udacity: Industry-focused nanodegrees
        - YouTube: Free tutorials and lectures

        ### Books
        - "Hands-On Machine Learning" by Aurélien Géron
        - "The Elements of Statistical Learning" by Hastie, Tibshirani, Friedman
        - "Python for Data Analysis" by Wes McKinney

        ### Communities
        - Kaggle: Competitions and learning
        - Reddit: r/MachineLearning, r/datascience
        - LinkedIn: Professional networking
        - Local meetups: In-person networking

        ## Conclusion

        Data science offers excellent career prospects for those willing to invest in continuous learning. The field is constantly evolving, making adaptability and curiosity essential traits for success. Focus on building strong fundamentals, gaining practical experience, and developing both technical and communication skills.

        Remember: The best data scientists are not just technically proficient but also understand business needs and can communicate insights effectively to diverse audiences.
      `,
      author: 'Dr. Vikram Singh',
      publishedAt: new Date('2024-01-05'),
      readTime: '15 min read',
      views: 15600,
      likes: 298,
      category: 'Career',
      tags: ['Data Science', 'Career Path', 'Machine Learning', 'Skills'],
      featured: true
    }
  ];

  const categories = ['all', 'Technology', 'Career', 'Skills', 'Trends'];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);

  if (selectedArticle) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-6 text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Insights
          </button>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {selectedArticle.category}
                </span>
                {selectedArticle.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedArticle.title}
              </h1>

              <div className="flex items-center space-x-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{selectedArticle.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{format(selectedArticle.publishedAt, 'MMM dd, yyyy')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{selectedArticle.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{selectedArticle.views.toLocaleString()} views</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {selectedArticle.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                    <ThumbsUp className="h-5 w-5" />
                    <span>{selectedArticle.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Share className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Career Insights</h1>
          <p className="text-lg text-gray-600">
            Stay ahead with the latest trends, tips, and insights from the job market
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category === 'all' ? 'All Articles' : category}
            </button>
          ))}
        </div>

        {/* Featured Articles */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 2).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        Featured
                      </span>
                      <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>{article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{article.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === 'all' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h2>
          <div className="grid gap-6">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      {article.featured && (
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{format(article.publishedAt, 'MMM dd, yyyy')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {article.tags.map(tag => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded flex items-center space-x-1"
                        >
                          <Tag className="h-3 w-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="ml-6 text-right">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white mt-12"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6">
            Get the latest career insights and job market trends delivered to your inbox
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-r-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Insights;