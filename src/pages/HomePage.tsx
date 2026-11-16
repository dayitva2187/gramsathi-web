import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Award,
  Sparkles,
  ChevronRight,
  Layers,
  HeartHandshake,
  CheckCircle2,
  Building2,
  Target,
  BarChart3,
  Mail,
  ExternalLink,
} from 'lucide-react';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1B5E20] via-[#144919] to-[#0E381E] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-8">
          {/* Top Master Logo Display */}
          <div className="flex justify-center">
            <div className="bg-[#FAF9F5] p-3 px-6 rounded-3xl shadow-2xl border border-amber-300/50 inline-flex items-center">
              <img
                src="/gramsathi-master-logo.png"
                alt="GramSathi Master Logo (ग्रामसाथी)"
                className="h-16 sm:h-20 w-auto object-contain"
                loading="eager"
              />
            </div>
          </div>

          {/* Bilingual Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-600/70 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>ग्रामीण भारत का भरोसेमंद ऑपरेटिंग सिस्टम • Trusted Rural Operating System</span>
          </div>

          {/* Bold Mission Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight px-2">
            Building Bharat’s Trusted{' '}
            <span className="text-amber-400">
              Rural Operating System
            </span>
          </h1>

          {/* Bilingual Subtitle / Storytelling */}
          <p className="text-base sm:text-xl text-emerald-100 max-w-3xl mx-auto font-medium leading-relaxed">
            Connecting grassroots farmers and women micro-entrepreneurs directly to mainstream markets — starting with scientific cattle nutrition, expanding to direct farm-gate procurement and farm-to-metro authentic staples.
          </p>

          <p className="text-xs sm:text-sm text-emerald-200/90 font-hindi max-w-2xl mx-auto bg-emerald-950/60 p-3 rounded-2xl border border-emerald-800">
            गाँव और किसान से सीधा जुड़ाव — उच्च गुणवत्ता वाला पशु पोषण, पारदर्शी ग्रामीण वितरण नेटवर्क, और सीधे खेत से शुद्ध देसी उत्पादों का राष्ट्रीय बाज़ार।
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                navigate('/ventures');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Explore Our Ventures</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#umbrella-model"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-900/80 hover:bg-emerald-800 text-white font-bold text-sm rounded-2xl border border-emerald-600/80 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Our Banyan Tree Model</span>
              <ChevronRight className="w-4 h-4 text-emerald-300" />
            </a>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 max-w-4xl mx-auto">
            <div className="bg-emerald-950/70 border border-emerald-800/80 p-4 rounded-2xl text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-400">Dhampur, Bijnor</div>
              <div className="text-[11px] sm:text-xs text-emerald-200 font-semibold mt-1">
                Western UP Operating Base
              </div>
            </div>

            <div className="bg-emerald-950/70 border border-emerald-800/80 p-4 rounded-2xl text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-400">Active Cohorts</div>
              <div className="text-[11px] sm:text-xs text-emerald-200 font-semibold mt-1">
                Milking Cattle Nutrition Trials
              </div>
            </div>

            <div className="bg-emerald-950/70 border border-emerald-800/80 p-4 rounded-2xl text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-400">100% Women-Led</div>
              <div className="text-[11px] sm:text-xs text-emerald-200 font-semibold mt-1">
                Pashu Sakhi Micro-Entrepreneurs
              </div>
            </div>

            <div className="bg-emerald-950/70 border border-emerald-800/80 p-4 rounded-2xl text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-400">100% Pure</div>
              <div className="text-[11px] sm:text-xs text-emerald-200 font-semibold mt-1">
                Quality-Tested Rural Nutrition
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BANYAN TREE UMBRELLA MODEL */}
      <section id="umbrella-model" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center space-y-3 mb-14">
          <div className="inline-block bg-emerald-100 text-[#1B5E20] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            Corporate Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            The GramSathi Banyan Tree Umbrella Model
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            How one unified rural roof empowers grassroots producers, builds trusted distribution, and unlocks high-margin consumer verticals.
          </p>
        </div>

        {/* 3 Pillars Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Deep Roots */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all space-y-4 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#1B5E20] flex items-center justify-center font-black text-xl border border-emerald-200">
              🌱
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-extrabold uppercase text-emerald-800 tracking-wider">
                Layer 1 • Deep Roots
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Grassroots Farmer Trust & KYC
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We begin directly in the farmyard. Every farmer and animal is digitized with Aadhaar/KYC verification, milking histories, and customized nutritional plans. No cold calls, no middlemen.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Verified Farmer & Cattle Registry</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Poshan Coins Loyalty & Gamification</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Government Dairy Scheme Assistance</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Strong Trunk */}
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-600 shadow-xl hover:shadow-2xl transition-all space-y-4 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-xl border border-amber-200">
              👩‍🌾
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-extrabold uppercase text-amber-700 tracking-wider">
                Layer 2 • Strong Trunk
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Pashu Sakhi Micro-Entrepreneurs
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Respected village women leaders drive our last-mile distribution. Equipped with QR scanning mobile apps, cash collection locks, and transparent commissions, they act as the trusted face of GramSathi.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Zero CAC Last-Mile Doorstep Delivery</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>24-Hour Cash Lock Ledger Protocol</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>₹1,000 Min. Payout Threshold (Settled on 5th of Every Month)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Star Leaderboard & High Village Retention</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Expanding Branches */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all space-y-4 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-black text-xl border border-orange-200">
              🌿
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-extrabold uppercase text-orange-700 tracking-wider">
                Layer 3 • Expanding Branches
              </span>
              <h3 className="text-xl font-black text-slate-900">
                High-Margin Market Verticals
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              With trusted village roots in place, GramSathi scales into twin engines: agricultural inputs (cattle feed & nutrition) and premium farmgate output aggregation (farm-to-metro staples).
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>GramSathi Pashu Poshan (Live)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>Villagers Bites Farm-to-Metro (Pipeline)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>End-to-End Batch QR Traceability</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. VENTURES PREVIEW CALLOUT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1B5E20] to-[#0E381E] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="bg-amber-400 text-slate-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                Multi-Vertical Portfolio
              </span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                Two High-Growth Engines Under One Rural Flag
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-medium">
                We solve productivity at the village input stage and capture maximum margin at the urban consumer stage. Explore our operational vertical and upcoming consumer pipeline.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    navigate('/ventures');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Ventures & Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Venture Cards Mini */}
            <div className="space-y-3">
              {/* Card 1: Pashu Poshan */}
              <div
                onClick={() => {
                  navigate('/ventures/pashu-poshan');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white/10 hover:bg-white/15 border border-white/20 p-4 rounded-2xl transition-all cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FAF9F5] p-0.5 ring-2 ring-amber-400/80 flex-shrink-0">
                    <img
                      src="/gramsathi-pashu-poshan-badge.png"
                      alt="Pashu Poshan"
                      className="w-full h-full object-cover scale-105"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-white">GramSathi — Pashu Poshan</span>
                      <span className="text-[9px] bg-emerald-500 text-emerald-950 font-black px-1.5 py-0.2 rounded">
                        LIVE
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-200">
                      Scientific Dairy Feed & Last-Mile Sakhi Distribution
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </div>

              {/* Card 2: Villagers Bites */}
              <div
                onClick={() => {
                  navigate('/ventures/villagers-bites');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white/10 hover:bg-white/15 border border-white/20 p-4 rounded-2xl transition-all cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-lg flex-shrink-0 shadow">
                    VB
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-white">Villagers Bites</span>
                      <span className="text-[9px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.2 rounded">
                        PIPELINE
                      </span>
                    </div>
                    <p className="text-[11px] text-amber-200">
                      Farm-to-Metro Authentic Staples (Ghee, Honey, Oils, Millets)
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FUTURE SCALING ROADMAP */}
      <section id="roadmap" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center space-y-3 mb-14">
          <div className="inline-block bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            Execution Strategy
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            3-Stage Scaling Roadmap
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            From grassroots input nutrition to national B2B and direct-to-consumer distribution.
          </p>
        </div>

        {/* 3 Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Stage 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-600 shadow-xl space-y-4 relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black bg-emerald-600 text-white px-3 py-1 rounded-full uppercase">
                Stage 1 • Live Now
              </span>
              <span className="text-emerald-700 font-mono text-xs font-bold">2026</span>
            </div>
            <h3 className="text-lg font-black text-slate-900">
              Dairy Nutrition & Livestock Productivity
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Establishing initial village clusters with <strong>GramSathi Pashu Poshan</strong> in Western UP. Onboarding Pashu Sakhis, deploying QR bag tracking, and registering milch cattle to optimize feed rations (Super 20-3, Uttam 22-4).
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-emerald-800 space-y-1">
              <div>✓ Active cattle cohorts in Western UP feeding trials</div>
              <div>✓ 15-20% boost in daily milk fat & volume</div>
              <div>✓ Real-time 24-hr cash lock & monthly payouts (5th of month)</div>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md space-y-4 relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black bg-amber-500 text-slate-950 px-3 py-1 rounded-full uppercase">
                Stage 2 • In Progress
              </span>
              <span className="text-slate-500 font-mono text-xs font-bold">Q3-Q4 2026</span>
            </div>
            <h3 className="text-lg font-black text-slate-900">
              Direct Farmgate Aggregation & Testing
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Leveraging the existing Pashu Sakhi network to aggregate farm output: unadulterated raw forest honey, authentic Vedic A2 Bilona ghee, wood-pressed mustard oil, and pesticide-free pulses.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700 space-y-1">
              <div>• Portable lab testing at village collection centers</div>
              <div>• Fair farmgate pricing directly into farmer accounts</div>
              <div>• Zero chemical preservatives or adulterants</div>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md space-y-4 relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black bg-slate-900 text-white px-3 py-1 rounded-full uppercase">
                Stage 3 • Horizon
              </span>
              <span className="text-slate-500 font-mono text-xs font-bold">2027</span>
            </div>
            <h3 className="text-lg font-black text-slate-900">
              Metro B2B & D2C Distribution
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Launching <strong>Villagers Bites by GramSathi</strong> across Delhi NCR, Western Uttar Pradesh, and Regional Urban Centers. Direct-to-doorstep authentic rural staples backed by farm origin QR verification.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700 space-y-1">
              <div>• Premium sustainable glass & tin packaging</div>
              <div>• Quick commerce & premium grocery distribution</div>
              <div>• High-margin full-stack traceability moat</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INVESTOR & PARTNER TRUST SECTION */}
      <section id="investors" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-block bg-emerald-100 text-[#1B5E20] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              Investor Grade Defensibility
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why GramSathi Wins in Rural Bharat
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
              We replace opaque local moneylenders and predatory middlemen with micro-entrepreneurs, digital ledgers, and institutional trust.
            </p>
          </div>

          {/* 4 Competitive Advantages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-amber-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Zero CAC Distribution</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pashu Sakhis already live in the village. Doorstep delivery happens naturally with zero customer acquisition cost.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-amber-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Proprietary Rural Moat</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Farmer cattle records, lactation cycles, and feed consumption histories create strong brand stickiness and barriers to entry.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-amber-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Negative Cash Cycle</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict 24-hour cash lock mechanisms ensure rapid liquidity turnaround without rural credit defaults or bad debts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-amber-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold">
                4
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Twin Margin Expansion</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Input distribution provides steady high-frequency cashflow; output aggregation delivers high gross margins in metro markets.
              </p>
            </div>
          </div>

          {/* Institutional Partner Banner */}
          <div className="bg-[#0E381E] text-white p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-black text-white">
                Partner With GramSathi Ecosystem
              </h4>
              <p className="text-xs text-emerald-200 max-w-xl">
                We are actively discussing seed capital, dairy federation bulk contracts, and regional distribution partnerships.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="mailto:team@gramsathi.in"
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl shadow transition-all flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Investment Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Connect With GramSathi Corporate
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              For institutional procurement, dairy federation queries, distributor onboarding, or investor discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left text-xs">
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500">
                General Inquiries & Support
              </span>
              <div className="font-bold text-sm text-emerald-900">
                <a href="mailto:care@gramsathi.in" className="hover:underline">
                  care@gramsathi.in
                </a>
              </div>
              <p className="text-[11px] text-slate-500">Pashu Sakhi & Farmer Support</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500">
                Founders & Investor Desk
              </span>
              <div className="font-bold text-sm text-emerald-900">
                <a href="mailto:team@gramsathi.in" className="hover:underline">
                  team@gramsathi.in
                </a>
              </div>
              <p className="text-[11px] text-slate-500">Capital & Strategic Alliances</p>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-slate-400">
            Operating Base: Village Jagupura, Dhampur, Dist. Bijnor, Uttar Pradesh — 246761 • gramsathi.in
          </div>
        </div>
      </section>
    </div>
  );
};
