import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import { GramSathiMasterLogo } from './GramSathiLogo';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#1B5E20] text-white border-b border-emerald-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo 1: Master Brand Logo */}
          <div
            onClick={() => handleNav('/')}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="bg-[#FAF9F5] p-1.5 px-3 rounded-2xl shadow-md border border-amber-300/60 group-hover:shadow-lg transition-all">
              <img
                src="/gramsathi-master-logo.png"
                alt="GramSathi (ग्रामसाथी)"
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-7 text-xs xl:text-sm font-semibold">
            <button
              onClick={() => handleNav('/')}
              className={`transition-colors hover:text-amber-300 ${
                currentPath === '/' ? 'text-amber-300 font-bold' : 'text-emerald-100'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav('/#umbrella-model')}
              className="text-emerald-100 hover:text-amber-300 transition-colors"
            >
              Umbrella Model
            </button>

            {/* Ventures Dropdown / Direct Link */}
            <div className="relative group">
              <button
                onClick={() => handleNav('/ventures')}
                className={`flex items-center gap-1 transition-colors hover:text-amber-300 ${
                  currentPath.startsWith('/ventures')
                    ? 'text-amber-300 font-bold'
                    : 'text-emerald-100'
                }`}
              >
                <span>Ventures</span>
                <ChevronDown className="w-4 h-4 text-emerald-300 group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute top-full left-0 pt-2 w-64 hidden group-hover:block transition-all">
                <div className="bg-[#0E381E] border border-emerald-700/80 rounded-2xl p-2 shadow-2xl space-y-1">
                  <button
                    onClick={() => handleNav('/ventures/pashu-poshan')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-900/80 transition-colors block"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>Pashu Poshan</span>
                      <span className="text-[10px] bg-emerald-700/80 text-emerald-200 px-1.5 py-0.2 rounded font-mono">
                        LIVE
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-300/80 mt-0.5">
                      Cattle Nutrition & Sakhi Distribution
                    </p>
                  </button>

                  <button
                    onClick={() => handleNav('/ventures/villagers-bites')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-900/80 transition-colors block"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>Villagers Bites</span>
                      <span className="text-[10px] bg-amber-500/30 text-amber-300 px-1.5 py-0.2 rounded font-mono border border-amber-400/40">
                        PIPELINE
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-300/80 mt-0.5">
                      Farm-to-Metro Authentic Staples
                    </p>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleNav('/#roadmap')}
              className="text-emerald-100 hover:text-amber-300 transition-colors"
            >
              Roadmap
            </button>

            <button
              onClick={() => handleNav('/#investors')}
              className="text-emerald-100 hover:text-amber-300 transition-colors"
            >
              Investors & Moat
            </button>

            <button
              onClick={() => handleNav('/#contact')}
              className="text-emerald-100 hover:text-amber-300 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNav('/ventures')}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Our Ventures</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E381E] border-b border-emerald-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-semibold">
            <button
              onClick={() => handleNav('/')}
              className="text-left px-3 py-2 rounded-xl text-emerald-100 hover:bg-emerald-800"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('/#umbrella-model')}
              className="text-left px-3 py-2 rounded-xl text-emerald-100 hover:bg-emerald-800"
            >
              Umbrella Model
            </button>
            <button
              onClick={() => handleNav('/ventures')}
              className="text-left px-3 py-2 rounded-xl text-amber-300 font-bold hover:bg-emerald-800"
            >
              All Ventures Overview
            </button>
            <button
              onClick={() => handleNav('/ventures/pashu-poshan')}
              className="text-left px-4 py-1.5 text-xs text-emerald-200 hover:text-white"
            >
              ↳ GramSathi — Pashu Poshan (Live)
            </button>
            <button
              onClick={() => handleNav('/ventures/villagers-bites')}
              className="text-left px-4 py-1.5 text-xs text-amber-300 hover:text-white"
            >
              ↳ Villagers Bites — Farm-to-Metro Staples (Pipeline)
            </button>
            <button
              onClick={() => handleNav('/#roadmap')}
              className="text-left px-3 py-2 rounded-xl text-emerald-100 hover:bg-emerald-800"
            >
              Scaling Roadmap
            </button>
            <button
              onClick={() => handleNav('/#investors')}
              className="text-left px-3 py-2 rounded-xl text-emerald-100 hover:bg-emerald-800"
            >
              Investors & Moat
            </button>
            <button
              onClick={() => handleNav('/#contact')}
              className="text-left px-3 py-2 rounded-xl text-emerald-100 hover:bg-emerald-800"
            >
              Contact Us
            </button>
          </div>

          <div className="pt-2 border-t border-emerald-800">
            <button
              onClick={() => handleNav('/ventures')}
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs rounded-xl shadow text-center"
            >
              Explore Our Ventures →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
