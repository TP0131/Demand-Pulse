import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import SkillGap from './pages/SkillGap';
import Insights from './pages/Insights';
import About from './pages/About';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import { useAuthStore } from './store/authStore';

function App() {
  const { user } = useAuthStore();

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
            <Route path="/skill-gap" element={<SkillGap />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            {user?.role === 'admin' && (
              <Route path="/admin" element={<AdminPanel />} />
            )}
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}

export default App;