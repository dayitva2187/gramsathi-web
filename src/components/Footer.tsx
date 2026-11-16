import React from 'react';
import { Mail, Phone, MapPin, Globe, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { GramSathiMasterLogo } from './GramSathiLogo';

export const Footer: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  return (
    <footer className="bg-[#0E381E] text-emerald-100 border-t border-emerald-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-800/80">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-[#FAF9F5] inline-block p-1.5 px-3 rounded-2xl shadow-md border border-amber-300/40">
              <img
                src="/gramsathi-master-logo.png"
                alt="GramSathi (ग्रामसाथी)"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed max-w-md">
              Building Bharat's Trusted Rural Operating System — Connecting grassroots farmers and women micro-entrepreneurs to national dairy and consumer markets under one unified umbrella.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs">
              <span className="bg-emerald-900/90 border border-emerald-700/80 text-amber-300 px-3 py-1 rounded-full font-bold">
                Quality-Tested Rural Nutrition
              </span>
              <span className="bg-emerald-900/90 border border-emerald-700/80 text-emerald-300 px-3 py-1 rounded-full font-semibold">
                Rural Women Empowerment
              </span>
            </div>
          </div>

          {/* Col 2: Ventures */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Umbrella Ventures
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    navigate('/ventures/pashu-poshan');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>GramSathi — Pashu Poshan</span>
                  <span className="text-[9px] bg-emerald-800 text-emerald-200 px-1 rounded font-mono">
                    LIVE
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/ventures/villagers-bites');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-emerald-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Villagers Bites</span>
                  <span className="text-[9px] bg-amber-900/80 text-amber-300 px-1 rounded font-mono">
                    PIPELINE
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/ventures');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors text-emerald-300/80"
                >
                  All Ventures Overview →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    navigate('/#umbrella-model');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Banyan Tree Model
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/#roadmap');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  3-Stage Scaling Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/#investors');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Investor Thesis & Moat
                </button>
              </li>
              <li>
                <span className="text-emerald-400/80">
                  Pashu Sakhi Micro-Network
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:team@gramsathi.in" className="hover:text-amber-300">
                  team@gramsathi.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:care@gramsathi.in" className="hover:text-amber-300">
                  care@gramsathi.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-mono text-amber-300">gramsathi.in</span>
              </li>
              <li className="flex items-start gap-2 pt-1 text-emerald-300/80">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Village Jagupura, Dhampur, Dist. Bijnor, Uttar Pradesh — 246761</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Separation Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-400/80 gap-4">
          <p>
            © {new Date().getFullYear()} GramSathi. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Corporate Governance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
