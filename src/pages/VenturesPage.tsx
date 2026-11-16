import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Milk,
  ShoppingBag,
  ExternalLink,
  Layers,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { PashuPoshanBadge } from '../components/GramSathiLogo';

interface VenturesPageProps {
  navigate: (path: string) => void;
}

export const VenturesPage: React.FC<VenturesPageProps> = ({ navigate }) => {
  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="inline-block bg-emerald-100 text-[#1B5E20] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider">
          Multi-Vertical Strategy
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Umbrella Ventures of GramSathi
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
          Transforming rural livelihoods by driving input productivity for dairy farmers and delivering pure, authentic farm produce to urban consumers.
        </p>
      </div>

      {/* Two Ventures Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Venture 1: GramSathi — Pashu Poshan */}
        <div className="bg-white rounded-3xl p-8 border-2 border-emerald-700 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-6">
            {/* Header with Circular Badge (Logo 2) & Status */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <PashuPoshanBadge size="lg" />
                <div>
                  <div className="text-[10px] font-extrabold uppercase text-emerald-800 tracking-wider">
                    Operational Vertical
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 leading-tight">
                    GramSathi — Pashu Poshan
                  </h2>
                  <div className="text-xs text-emerald-900 font-bold font-hindi">
                    ग्रामसाथी - पशु पोषण
                  </div>
                </div>
              </div>

              <span className="bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider flex-shrink-0 shadow-sm">
                LIVE NOW
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our flagship cattle feed, nutrition, and last-mile distribution vertical. We manufacture and distribute scientifically formulated dairy cattle feed (Super 20-3 and Uttam 22-4) through a decentralized network of trusted village women leaders (Pashu Sakhi).
            </p>

            {/* Highlights */}
            <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
              <div className="font-extrabold text-slate-900 mb-1">Core Operational Capabilities:</div>
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Lab-certified 20% & 22% bypass protein formulations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Doorstep delivery by village Pashu Sakhi micro-entrepreneurs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Unique QR code serialized tracking on every 40kg & 25kg bag</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Proprietary 24-hr cash lock ledger & instant reverse slab commissions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              Coverage: <strong className="text-slate-800">40+ Villages</strong>
            </div>
            <button
              onClick={() => {
                navigate('/ventures/pashu-poshan');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-amber-300 font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Venture 2: Villagers Bites */}
        <div className="bg-white rounded-3xl p-8 border-2 border-amber-500 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-6">
            {/* Header & Status */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 font-black text-2xl flex items-center justify-center shadow-lg ring-4 ring-amber-300 border-2 border-amber-700 flex-shrink-0">
                  VB
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase text-amber-700 tracking-wider">
                    Pipeline Consumer Brand
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 leading-tight">
                    Villagers Bites by GramSathi
                  </h2>
                  <div className="text-xs text-amber-800 font-bold">
                    Farm-to-Metro Authentic Staples
                  </div>
                </div>
              </div>

              <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider flex-shrink-0 shadow-sm border border-amber-500">
                PIPELINE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our direct-from-village authentic consumer staples brand. Sourcing directly from the same verified GramSathi farmer clusters to deliver pure Desi Gir Cow Bilona Ghee, Raw Forest Honey, Cold-Pressed Mustard & Sesame Oils, and traditional native pulses to metro households.
            </p>

            {/* Highlights */}
            <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
              <div className="font-extrabold text-slate-900 mb-1">Product Lineup & Strategic Edge:</div>
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Vedic A2 Bilona Desi Ghee sourced from free-grazing indigenous cows</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Single-origin raw forest honey without sugar syrup adulteration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Kachi Ghani cold wood-pressed mustard & sesame oils</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Batch QR code showing exact farmer identity and harvesting cluster</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              Target Markets: <strong className="text-slate-800">Delhi NCR, Western UP, Regional Metros</strong>
            </div>
            <button
              onClick={() => {
                navigate('/ventures/villagers-bites');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Vision</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Strategic Synergy Banner */}
      <div className="bg-[#0E381E] text-white rounded-3xl p-8 sm:p-10 border border-emerald-800 shadow-xl space-y-4 text-center max-w-4xl mx-auto">
        <span className="bg-emerald-800 text-amber-300 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
          The GramSathi Advantage
        </span>
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
          Why Twin Verticals Amplify Each Other
        </h3>
        <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed max-w-2xl mx-auto font-medium">
          By improving dairy cattle health and milk yield with <strong>Pashu Poshan</strong>, we build unmatched credibility and loyalty with farmers. This gives <strong>Villagers Bites</strong> an exclusive, verified farmgate sourcing pipeline that traditional FMCG brands can never replicate.
        </p>
      </div>
    </div>
  );
};
