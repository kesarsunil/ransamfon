import React from 'react';

export const LogoRail = () => {
  const threats = [
    { 
      name: 'ROOTKIT', 
      description: 'Gives remote access to your device',
      icon: (
        <div className="flex flex-col items-center gap-2 w-32">
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="15" width="60" height="40" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>
            <rect x="25" y="20" width="50" height="30" fill="currentColor" opacity="0.1"/>
            <circle cx="50" cy="35" r="8" fill="#ef4444"/>
            <path d="M 50 43 L 45 48 L 55 48 Z" fill="#ef4444"/>
            <path d="M 50 48 L 50 65" stroke="currentColor" strokeWidth="2" strokeDasharray="4,2"/>
            <rect x="35" y="65" width="30" height="20" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>
            <rect x="40" y="70" width="20" height="10" fill="currentColor" opacity="0.1"/>
          </svg>
          <div className="text-center">
            <p className="text-xs font-bold text-gray-800">ROOTKIT</p>
            <p className="text-[10px] text-gray-600">Gives remote access to your device</p>
          </div>
        </div>
      )
    },
    { 
      name: 'FILELESS MALWARE', 
      description: 'Operates in your system\'s memory',
      icon: (
        <div className="flex flex-col items-center gap-2 w-32">
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
            <rect x="25" y="20" width="50" height="40" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>
            <circle cx="35" cy="28" r="2" fill="currentColor"/>
            <circle cx="42" cy="28" r="2" fill="currentColor"/>
            <circle cx="49" cy="28" r="2" fill="currentColor"/>
            <circle cx="56" cy="28" r="2" fill="currentColor"/>
            <circle cx="63" cy="28" r="2" fill="currentColor"/>
            <path d="M 50 38 L 42 50 L 58 50 Z" fill="currentColor"/>
            <circle cx="50" cy="46" r="6" fill="#ef4444"/>
            <path d="M 48 44 L 47 48 L 50 47 L 53 48 L 52 44" stroke="white" strokeWidth="1.5" fill="none"/>
            <line x1="30" y1="65" x2="70" y2="65" stroke="currentColor" strokeWidth="2"/>
            <rect x="40" y="70" width="20" height="8" fill="currentColor" rx="1"/>
          </svg>
          <div className="text-center">
            <p className="text-xs font-bold text-gray-800">FILELESS MALWARE</p>
            <p className="text-[10px] text-gray-600">Operates in your system's memory</p>
          </div>
        </div>
      )
    },
    { 
      name: 'RANSOMWARE', 
      description: 'Encrypts files and blackmails you',
      icon: (
        <div className="flex flex-col items-center gap-2 w-32">
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
            <rect x="25" y="35" width="50" height="45" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>
            <rect x="30" y="40" width="40" height="35" fill="currentColor" opacity="0.05"/>
            <text x="50" y="52" fontSize="18" fontWeight="bold" fill="currentColor" textAnchor="middle">€</text>
            <rect x="35" y="58" width="30" height="3" fill="#ef4444" rx="1"/>
            <text x="50" y="70" fontSize="10" fill="#ef4444" textAnchor="middle">$$$</text>
            <path d="M 45 20 L 45 35 L 55 35 L 55 20 C 55 15 45 15 45 20" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="50" cy="22" r="3" fill="#ef4444"/>
            <circle cx="42" cy="63" r="3" fill="#ef4444" opacity="0.6"/>
            <rect x="54" y="61" width="8" height="4" fill="currentColor" rx="1"/>
          </svg>
          <div className="text-center">
            <p className="text-xs font-bold text-gray-800">RANSOMWARE</p>
            <p className="text-[10px] text-gray-600">Encrypts files and blackmails you</p>
          </div>
        </div>
      )
    },
    { 
      name: 'SPYWARE', 
      description: 'Steals your data',
      icon: (
        <div className="flex flex-col items-center gap-2 w-32">
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
            <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>
            <circle cx="38" cy="36" r="2" fill="currentColor"/>
            <circle cx="47" cy="36" r="2" fill="currentColor"/>
            <circle cx="56" cy="36" r="2" fill="currentColor"/>
            <circle cx="50" cy="50" r="10" fill="#ef4444"/>
            <path d="M 50 45 L 47 52 L 53 52 Z" fill="white"/>
            <circle cx="50" cy="48" r="3" fill="white"/>
            <path d="M 50 55 L 45 65 M 50 55 L 50 68 M 50 55 L 55 65" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,1"/>
            <rect x="32" y="65" width="8" height="8" stroke="#ef4444" strokeWidth="1.5" fill="none" rx="1"/>
            <circle cx="50" cy="69" r="2" fill="#ef4444"/>
            <circle cx="62" cy="67" r="2" fill="#ef4444"/>
          </svg>
          <div className="text-center">
            <p className="text-xs font-bold text-gray-800">SPYWARE</p>
            <p className="text-[10px] text-gray-600">Steals your data</p>
          </div>
        </div>
      )
    },
    { 
      name: 'WORM', 
      description: 'Spreads between computers',
      icon: (
        <div className="flex flex-col items-center gap-2 w-32">
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
            <rect x="15" y="15" width="25" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" rx="2"/>
            <rect x="18" y="18" width="19" height="14" fill="currentColor" opacity="0.05"/>
            <circle cx="27.5" cy="25" r="2" fill="currentColor"/>
            <rect x="60" y="15" width="25" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" rx="2"/>
            <rect x="63" y="18" width="19" height="14" fill="currentColor" opacity="0.05"/>
            <circle cx="72.5" cy="25" r="2" fill="currentColor"/>
            <line x1="27.5" y1="35" x2="27.5" y2="50" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="72.5" y1="35" x2="72.5" y2="50" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="27.5" y1="50" x2="72.5" y2="50" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="50" y1="50" x2="50" y2="60" stroke="#ef4444" strokeWidth="2"/>
            <rect x="37.5" y="60" width="25" height="20" stroke="#ef4444" strokeWidth="2" fill="none" rx="2"/>
            <circle cx="50" cy="70" r="4" fill="#ef4444"/>
            <path d="M 48 68 L 47 72 L 50 71 L 53 72 L 52 68" stroke="white" strokeWidth="1.5" fill="none"/>
          </svg>
          <div className="text-center">
            <p className="text-xs font-bold text-gray-800">WORM</p>
            <p className="text-[10px] text-gray-600">Spreads between computers</p>
          </div>
        </div>
      )
    },
    { 
      name: 'TROJAN', 
      description: 'Sneaks malware onto your computer',
      icon: (
        <div className="flex flex-col items-center gap-2 w-32">
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
            <rect x="25" y="30" width="50" height="45" stroke="currentColor" strokeWidth="2" fill="white" rx="2"/>
            <rect x="30" y="20" width="40" height="15" stroke="currentColor" strokeWidth="2" fill="none" rx="1"/>
            <line x1="30" y1="27" x2="70" y2="27" stroke="currentColor" strokeWidth="1"/>
            <circle cx="40" cy="23" r="1.5" fill="currentColor"/>
            <circle cx="50" cy="23" r="1.5" fill="currentColor"/>
            <circle cx="60" cy="23" r="1.5" fill="currentColor"/>
            <path d="M 50 45 L 43 52 L 50 48 L 57 52 Z" fill="#ef4444"/>
            <rect x="45" y="52" width="10" height="3" fill="#ef4444"/>
            <circle cx="50" cy="60" r="6" fill="#ef4444"/>
            <path d="M 47 58 L 48 62 L 50 61 L 52 62 L 53 58" stroke="white" strokeWidth="1.5" fill="none"/>
            <rect x="35" y="68" width="8" height="5" fill="currentColor" opacity="0.3" rx="1"/>
            <rect x="57" y="68" width="8" height="5" fill="currentColor" opacity="0.3" rx="1"/>
          </svg>
          <div className="text-center">
            <p className="text-xs font-bold text-gray-800">TROJAN</p>
            <p className="text-[10px] text-gray-600">Sneaks malware onto your computer</p>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-12 overflow-hidden">
      <div className="logo-rail-scroll flex gap-16 items-center">
        {/* First set of threat icons */}
        {threats.map((threat, index) => (
          <div key={`threat-1-${index}`} className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
            {threat.icon}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {threats.map((threat, index) => (
          <div key={`threat-2-${index}`} className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
            {threat.icon}
          </div>
        ))}
        {/* Third set for seamless loop */}
        {threats.map((threat, index) => (
          <div key={`threat-3-${index}`} className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
            {threat.icon}
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .logo-rail-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .logo-rail-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
