import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Award,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  QrCode,
  TrendingUp,
  Mail,
  Send,
  Droplet,
  Flame,
  Wheat,
  Sun,
} from 'lucide-react';

export const VillagersBitesPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  const [partnerType, setPartnerType] = useState<'distributor' | 'investor' | 'buyer'>('distributor');
  const [partnerName, setPartnerName] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerCity, setPartnerCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Back button */}
      <div>
        <button
          onClick={() => {
            navigate('/ventures');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Ventures</span>
        </button>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#78350F] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-amber-300 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                GramSathi Consumer Vertical
              </span>
              <span className="text-xs bg-amber-950/60 text-amber-200 font-mono px-2 py-0.5 rounded border border-amber-400/30">
                PIPELINE • SCALING Q3 2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Villagers Bites by GramSathi
            </h1>
            <div className="text-base sm:text-lg font-bold text-amber-200">
              Farm-to-Metro Authentic Rural Staples • खेत से सीधे आपकी रसोई तक
            </div>

            <p className="text-xs sm:text-sm text-amber-100 leading-relaxed font-medium max-w-xl">
              Delivering unadulterated, traditionally crafted rural foods directly from verified GramSathi farmer clusters to urban households. Backed by full origin QR code traceability.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-200 text-slate-950 font-black text-4xl sm:text-5xl flex items-center justify-center shadow-2xl ring-8 ring-amber-300/40 border-2 border-amber-600">
              VB
            </div>
          </div>
        </div>
      </div>

      {/* The Market Opportunity & Adulteration Crisis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-red-50/70 rounded-3xl p-8 border border-red-200 space-y-4">
          <div className="text-red-700 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>The Urban Food Crisis</span>
          </div>
          <h3 className="text-xl font-black text-slate-900">
            Adulterated Commercial Brands
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Metro consumers pay premium prices for honey that is up to 70% inverted sugar syrup, mustard oil blended with cheap solvent oils, and synthetic ghee loaded with palm oil and artificial aromas.
          </p>
          <div className="bg-white p-3.5 rounded-xl border border-red-200 text-xs text-red-900 font-medium">
            Mass-market commercial honey, ghee, and edible oils often rely on industrial blending, artificial additives, and extended warehouse storage that strips away natural nutrition and authentic farm freshness.
          </div>
        </div>

        <div className="bg-amber-50/70 rounded-3xl p-8 border border-amber-200 space-y-4">
          <div className="text-amber-800 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>The GramSathi Sourcing Moat</span>
          </div>
          <h3 className="text-xl font-black text-slate-900">
            Exclusive Grassroots Farmer Access
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Because GramSathi works directly with dairy farmers and village clusters in Dhampur and Bijnor, we procure genuine raw produce directly from farm gates at fair prices with zero middlemen.
          </p>
          <div className="bg-white p-3.5 rounded-xl border border-amber-200 text-xs text-emerald-950 font-medium">
            100% single-origin provenance: each jar scans to reveal the exact farmer, cattle ID, and harvest date.
          </div>
        </div>
      </div>

      {/* Upcoming Product Lineup */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-black text-amber-800 uppercase tracking-wider bg-amber-100 px-3.5 py-1 rounded-full">
            Pipeline Product Portfolio
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Pure, Ancient & Traditionally Processed Staples
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xl">
              🧈
            </div>
            <h4 className="text-lg font-black text-slate-900">
              Vedic A2 Bilona Desi Ghee
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hand-churned using traditional wooden bilona from cultured curd of grass-fed indigenous Gir & Tharparkar cows. High in butyric acid and rich granular texture.
            </p>
            <div className="text-[11px] font-bold text-emerald-800 pt-2 border-t border-slate-100">
              ✓ Zero palm oil • 100% Curd churned
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xl">
              🍯
            </div>
            <h4 className="text-lg font-black text-slate-900">
              Wild Flora Raw Honey
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unheated, unpasteurized raw forest honey collected by traditional beekeepers. Retains natural enzymes, pollen, and immune-supporting antioxidants.
            </p>
            <div className="text-[11px] font-bold text-emerald-800 pt-2 border-t border-slate-100">
              ✓ Pure Raw Honey • Zero Added Sugar Syrups
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xl">
              🌱
            </div>
            <h4 className="text-lg font-black text-slate-900">
              Wood-Pressed Mustard & Sesame Oil
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cold-pressed at under 45°C in wooden Kolhu (Ghani). Preserves natural pungency, essential fatty acids, and zero chemical refining or bleaching.
            </p>
            <div className="text-[11px] font-bold text-emerald-800 pt-2 border-t border-slate-100">
              ✓ True Kachi Ghani • Cold Extracted
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xl">
              ✨
            </div>
            <h4 className="text-lg font-black text-slate-900">
              High-Curcumin Lakadong Turmeric & Native Spices
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Single-origin whole spices hand-sorted and stone-ground to preserve volatile essential oils without sawdust or artificial food coloring.
            </p>
            <div className="text-[11px] font-bold text-emerald-800 pt-2 border-t border-slate-100">
              ✓ 7%+ Curcumin • Unadulterated
            </div>
          </div>

          {/* Product 5 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xl">
              🌾
            </div>
            <h4 className="text-lg font-black text-slate-900">
              Traditional Millets & Unpolished Pulses
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Native Bajra, Jowar, Ragi, and indigenous chana dal directly harvested from rainfed farmer clusters with natural soil minerals.
            </p>
            <div className="text-[11px] font-bold text-emerald-800 pt-2 border-t border-slate-100">
              ✓ Unpolished • Zero Chemical Glaze
            </div>
          </div>

          {/* Product 6 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xl">
              📱
            </div>
            <h4 className="text-lg font-black text-slate-900">
              Scan-to-Farm Origin QR
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every jar features a unique QR sticker showing the exact farmer profile, village location, harvest date, and lab purity report.
            </p>
            <div className="text-[11px] font-bold text-emerald-800 pt-2 border-t border-slate-100">
              ✓ Complete Farm-to-Fork Proof
            </div>
          </div>
        </div>
      </div>

      {/* Partner & Investor CTA Form */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-amber-800 uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Distribution & Strategic Investor Network</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Partner With Villagers Bites by GramSathi
          </h3>
          <p className="text-xs text-slate-600">
            We are inviting regional FMCG distributors, premium grocery retail partners, and early-stage consumer seed investors to connect.
          </p>
        </div>

        {submitted ? (
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-6 text-center space-y-2 max-w-md mx-auto">
            <CheckCircle2 className="w-10 h-10 text-amber-700 mx-auto" />
            <h4 className="text-lg font-black text-amber-950">Partnership Request Received</h4>
            <p className="text-xs text-amber-800">
              Thank you {partnerName}. Our Growth & Alliances Team will be in touch with product samples and partnership decks.
            </p>
            <div className="text-xs text-slate-500 pt-2 font-mono">
              Inquiries: <strong>team@gramsathi.in</strong>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                I am interested as a:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPartnerType('distributor')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border-2 transition-all ${
                    partnerType === 'distributor'
                      ? 'border-amber-600 bg-amber-50 text-amber-950'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  City Distributor
                </button>
                <button
                  type="button"
                  onClick={() => setPartnerType('investor')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border-2 transition-all ${
                    partnerType === 'investor'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  Seed Investor
                </button>
                <button
                  type="button"
                  onClick={() => setPartnerType('buyer')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border-2 transition-all ${
                    partnerType === 'buyer'
                      ? 'border-slate-800 bg-slate-100 text-slate-950'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  Retail Buyer / HoReCa
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Name / Entity
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alok Agarwal"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Delhi NCR / Mumbai"
                  value={partnerCity}
                  onChange={(e) => setPartnerCity(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-amber-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Official Email
              </label>
              <input
                type="email"
                required
                placeholder="e.g. partner@firm.com"
                value={partnerEmail}
                onChange={(e) => setPartnerEmail(e.target.value)}
                className="w-full bg-[#FAF9F5] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-amber-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Connect for Villagers Bites Partnership</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
