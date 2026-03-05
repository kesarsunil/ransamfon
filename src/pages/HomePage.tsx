import React from 'react';
import { DotScreenShader } from '../components/ui/dot-shader-background';
import { Navbar } from '../components/Navbar';
import { LogoRail } from '../components/LogoRail';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="min-h-screen w-screen relative overflow-x-hidden" style={{ backgroundColor: '#F3F0EA' }}>
      {/* Outer Container with 10px padding */}
      <div className="h-screen p-[10px]">
        {/* Inner Container with 10px padding and shader background */}
        <div className="h-full w-full p-[10px] relative overflow-hidden rounded-lg">
          {/* Floating Navbar */}
          <Navbar />
          
          {/* Background Shader */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <DotScreenShader />
          </div>

          {/* Security Image - Right Side */}
          <div className="absolute right-[10px] top-1/2 -translate-y-1/2 z-10 pointer-events-none hidden lg:block">
            <img 
              src="/downloadlock.png" 
              alt="Security" 
              className="w-[450px] h-[450px] xl:w-[450px] xl:h-[450px] object-contain opacity-70"
            />
          </div>

          {/* Hero Section - Left Aligned */}
          <div className="h-full flex flex-col justify-center gap-4 md:gap-6 px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 pointer-events-none max-w-[1400px] pt-20">
            {/* Small Text Above Title */}
            <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest font-medium">
              <span>[</span>
              <span>WE ARE STÖKT</span>
              <span>]</span>
              <ArrowRight size={14} className="ml-1" />
            </div>

            {/* Main Title */}
            <div className="space-y-1">
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-white leading-none">
                RANSOMWARE 
              </h1>
              <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-white leading-none">
                DETECTION
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base font-normal text-white/90 max-w-lg leading-relaxed pointer-events-none">
              Ransomware is a type of malware that encrypts the victim's personal data until a ransom is paid.
            </p>

            {/* CTA Button */}
            <div className="flex items-start mt-4 pointer-events-auto">
              <button className="px-8 py-3 bg-white text-black rounded-md hover:bg-white/90 transition-all duration-200 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide pointer-events-auto">
                <span>LOGIN</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-6 md:left-12 lg:left-16 xl:left-20 flex flex-col items-start gap-1 text-white/50">
              <span className="text-xs font-medium">Scroll for more</span>
              <ChevronDown size={16} className="animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Logo Rail Section */}
      <LogoRail />

      {/* Security Section */}
      <div className="w-full p-[20px]" style={{ backgroundColor: '#F3F0EA' }}>
        {/* First Row - 2 Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[20px]">
          {/* Container 1 - Files Encrypted Warning */}
          <div className="bg-black rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="relative h-[400px] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop"
                alt="Files Encrypted Warning"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 text-center px-8">
                <div className="mb-6">
                  <svg className="w-24 h-24 mx-auto text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-red-400 mb-4">YOUR FILES ARE ENCRYPTED</h3>
                <p className="text-red-300 text-lg mb-2">Your photos, documents and other important</p>
                <p className="text-red-300 text-lg mb-6">files have been encrypted with unique key,</p>
                <p className="text-red-300 text-lg mb-8">generated for this computer.</p>
                <button className="bg-red-500 text-black px-12 py-4 rounded-lg text-xl font-bold hover:bg-red-400 transition-all">
                  NEXT
                </button>
              </div>
            </div>
          </div>

          {/* Container 2 - Ransomware Detected */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="relative h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,0,0,0.1) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>
              <div className="relative z-10 text-center px-8">
                <div className="mb-6 relative">
                  <div className="w-32 h-32 mx-auto border-8 border-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-32 h-32 mx-auto border-4 border-red-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <h3 className="text-4xl font-bold text-red-500 mb-4 tracking-wider">Ransomware</h3>
                <h4 className="text-3xl font-bold text-red-400 mb-8">Detected</h4>
                <div className="space-y-2 text-gray-300">
                  <p className="text-sm">System Threat Level: <span className="text-red-500 font-bold">CRITICAL</span></p>
                  <p className="text-sm">Files at Risk: <span className="text-red-400 font-bold">12,847</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - 1 Container */}
        <div className="grid grid-cols-1 gap-[20px]">
          {/* Container 3 - Security Lock (Full Width) */}
          <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="relative h-[400px] flex items-center justify-center">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=600&fit=crop"
                  alt="Digital Security Lock"
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
              <div className="relative z-10 text-center px-8">
                <div className="mb-6">
                  <svg className="w-32 h-32 mx-auto text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">CYBERSECURITY PROTECTION</h3>
                <p className="text-gray-200 text-lg mb-8">Advanced encryption and real-time threat monitoring</p>
                <div className="flex justify-center gap-4">
                  <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Activate Shield
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Yellow Glow Background */}
      <div className="w-full relative min-h-screen flex flex-col items-start justify-center pl-[10px]" style={{ background: 'linear-gradient(to top, #EAED7E 0%, #EAED7E 30px, #E2E29A 150px, #F3F0EA 100%)' }}>
        {/* Content Overlay */}
        <div className="relative z-10 text-left max-w-5xl px-8 py-20">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            mlrd@gmail.com
          </h2>
          <p className="text-2xl md:text-3xl text-gray-800 mb-12 font-light">
            LET'S CREATE THE NEW & NEXT
          </p>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 text-left max-w-2xl mx-auto">
            <div>
              <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">FIND US</h3>
              <p className="text-gray-800 font-mono text-sm leading-relaxed">
                73 TIB ST,<br/>
                MANCHESTER,<br/>
                M4 1LS
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">INTERNAL</h3>
              <ul className="space-y-2 text-sm text-gray-800 font-mono">
                <li><a href="#" className="hover:text-gray-900 transition-colors">HOME</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">ABOUT US</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">PROJECTS</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">CONTACT</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">EXTERNAL</h3>
            <div className="flex gap-6 justify-center">
              <a href="#" className="text-sm text-gray-800 font-mono hover:text-gray-900 transition-colors">INSTAGRAM</a>
              <a href="#" className="text-sm text-gray-800 font-mono hover:text-gray-900 transition-colors">LINKEDIN</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
