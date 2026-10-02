import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, authPersistenceReady } from '../firebase';
import { signOut } from 'firebase/auth';
import { User } from 'firebase/auth';
import { ArrowRight, Download, LogOut, User as UserIcon } from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    let redirectTimer: ReturnType<typeof setTimeout> | undefined;
    let unsubscribe: (() => void) | undefined;

    const checkAuthentication = async () => {
      await authPersistenceReady;

      if (!active) {
        return;
      }

      unsubscribe = auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          if (redirectTimer) {
            clearTimeout(redirectTimer);
          }
          setUser(currentUser);
          setLoading(false);
          return;
        }

        redirectTimer = setTimeout(() => {
          if (active) {
            setLoading(false);
            navigate('/login');
          }
        }, 2000);

      });
    };

    checkAuthentication();

    return () => {
      active = false;
      if (redirectTimer) {
        clearTimeout(redirectTimer);
      }
      unsubscribe?.();
    };
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
              <h3 className="text-2xl font-bold text-gray-900">File Scanner</h3>
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
              type="button"
              onClick={() => window.open('https://laptopon-1.onrender.com/', '_blank', 'noopener,noreferrer')}
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

        {/* Windows Monitor Download */}
        <section className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-200 text-gray-900">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-red-500 mb-2">Windows protection</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Download Windows Monitor</h3>
              <p className="text-gray-600 max-w-2xl leading-relaxed">
                Download the Windows Monitor executable to continuously check new files downloaded to your system.
              </p>
            </div>
            <a
              href="https://raw.githubusercontent.com/kesarsunil/ransamfon/main/public/START_MONITOR.exe"
              download="START_MONITOR.exe"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-medium hover:from-red-600 hover:to-pink-600 transition-all"
            >
              <Download size={18} />
              <span>Download .exe</span>
            </a>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold mb-4">How to install and use it</h4>
            <ol className="space-y-3 text-gray-600 leading-relaxed list-decimal list-inside">
              <li><strong className="font-bold text-gray-900">Download</strong> the Windows Monitor <code className="font-semibold text-gray-900">.exe</code> using the button above.</li>
              <li>After downloading, open the <code className="font-semibold text-gray-900">.exe</code> file.</li>
              <li>A <strong className="font-bold text-gray-900">Command Prompt window</strong> will open automatically.</li>
              <li>The monitor will start running in the background and monitor files downloaded to your system.</li>
              <li>Whenever a new file is downloaded, the monitor automatically checks the file.</li>
              <li>The Command Prompt displays whether the detected file is <strong className="text-green-300">Safe</strong> or <strong className="text-red-300">Unsafe</strong>.</li>
              <li>Keep the Command Prompt running while you want continuous monitoring.</li>
              <li>To stop the monitoring, press <kbd className="rounded bg-gray-100 px-2 py-1 font-bold text-gray-900">Ctrl + C</kbd> in the Command Prompt.</li>
              <li>The monitoring process will stop safely.</li>
            </ol>

            <p className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 px-4 py-3 text-sm text-yellow-900">
              <strong>Note:</strong> The <code>.exe</code> needs to remain running for monitoring to continue. It does not continuously monitor the system after you close the Command Prompt.
            </p>
          </div>
        </section>
      </div>

      {/* Bottom Glow Light Effect */}
      <div className="fixed bottom-0 left-0 right-0 h-64 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#EAED7E] via-[#E2E29A] to-transparent opacity-40 blur-3xl"></div>
      </div>
    </div>
  );
};

export default DashboardPage;
