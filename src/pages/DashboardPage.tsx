import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { User } from 'firebase/auth';
import { ArrowRight, LogOut, User as UserIcon, Activity } from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        // If not logged in, redirect to login page
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F3F0EA] flex items-center justify-center">
        <div className="text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F0EA] relative">
      {/* Header/Navbar - Transparent with Backdrop Blur */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md mx-4 my-4 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">MLD</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <UserIcon size={20} className="text-white" />
                <span className="text-sm font-medium text-white">
                  {user?.displayName || user?.email}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/80 backdrop-blur-sm text-white rounded-lg hover:bg-red-600 transition-all"
              >
                <LogOut size={18} />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.displayName || 'User'}!
          </h2>
          <p className="text-gray-600">Here's what's happening with your account today.</p>
        </div>

        {/* Two Main Containers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Container 1 - Ransomware 3D Resources */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
                <svg className="text-white" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">File Ransomware Scanner</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-gray-600 leading-relaxed">
                Drag and drop any file onto the website to instantly check if it contains ransomware. Our advanced scanner analyzes each file and tells you whether ransomware is present or not.
              </p>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Drag and drop file upload</li>
                  <li>• Instant ransomware detection</li>
                  <li>• Real-time threat analysis</li>
                  <li>• Support for all file types</li>
                </ul>
              </div>
            </div>

            <button
              className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-medium hover:from-red-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
            >
              <span>Upload & Scan File</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Container 2 - Background Remover */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <svg className="text-white" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Full System Scan</h3>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-gray-600 leading-relaxed">
                Run a comprehensive full system scan to check all application files, documents, and PDFs on your computer. The scanner analyzes each file and provides a detailed report showing how harmful each file is and identifies ransomware risk files.
              </p>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Complete system scanning</li>
                  <li>• Application file analysis</li>
                  <li>• PDF and document checking</li>
                  <li>• Harm level rating for each file</li>
                </ul>
              </div>
            </div>

            <button
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2"
            >
              <span>Start Full System Scan</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Glow Light Effect */}
      <div className="fixed bottom-0 left-0 right-0 h-64 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#EAED7E] via-[#E2E29A] to-transparent opacity-40 blur-3xl"></div>
      </div>
    </div>
  );
};

export default DashboardPage;
