import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, ArrowRight } from 'lucide-react';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300">
      <div className="bg-black/60 backdrop-blur-md rounded-2xl px-8 py-4 max-w-[98%] mx-auto shadow-xl">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Logo - MLD */}
        <div className="flex items-center">
          <div className="text-white text-2xl font-semibold tracking-tight">
            MLD
          </div>
        </div>

        {/* Navigation Links - Center */}
        <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-wider font-medium">
          <a 
            href="#work" 
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            WORK
          </a>
          <a 
            href="#services" 
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            SERVICES
          </a>
          <a 
            href="#about" 
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            ABOUT US
          </a>
          <a 
            href="#store" 
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            STORE
          </a>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/login')}
            className="px-6 py-2.5 bg-white text-black rounded-md text-xs font-semibold uppercase tracking-wide hover:bg-white/90 transition-all duration-200 flex items-center gap-2"
          >
            <span>LOGIN</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
      </div>
    </nav>
  );
};
