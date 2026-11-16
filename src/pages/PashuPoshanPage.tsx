import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Award,
  Sparkles,
  Users,
  ShieldCheck,
  QrCode,
  TrendingUp,
  Mail,
  Send,
  Building2,
} from 'lucide-react';
import { PashuPoshanBadge } from '../components/GramSathiLogo';

export const PashuPoshanPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryOrg, setInquiryOrg] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
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
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Ventures</span>
        </button>
      </div>

      {/* Hero Banner with Official Logo 2 (Circular Badge) */}
      <div className="bg-gradient-to-r from-[#1B5E20] via-[#144919] to-[#0E381E] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500/20 text-amber-300 border border-emerald-400/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                GramSathi Operational Vertical
              </span>
              <span className="text-xs bg-emerald-700/80 text-white font-mono px-2 py-0.5 rounded">
                LIVE & SCALING
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              GramSathi — Pashu Poshan
            </h1>
            <div className="text-base sm:text-lg font-bold text-amber-300 font-hindi">
              ग्रामसाथी - पशु पोषण (संतुलित दुग्ध पशु आहार एवं सखी वितरण नेटवर्क)
            </div>

            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-medium max-w-xl">
              Eliminating adulterated cattle feed and high middlemen margins with scientifically formulated dairy nutrition, delivered directly to the farmer’s doorstep by trained village Pashu Sakhi micro-entrepreneurs.
            </p>
          </div>

          {/* Prominent Logo 2 (Circular Badge) */}
          <div className="flex justify-center lg:justify-end">
            <PashuPoshanBadge size="2xl" className="shadow-2xl ring-8 ring-amber-400/80" />
          </div>
        </div>
      </div>

      {/* The Problem vs Our Scientific Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* The Problem */}
        <div className="bg-red-50/70 rounded-3xl p-8 border border-red-200 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>The Rural Dairy Crisis</span>
          </div>
          <h3 className="text-xl font-black text-slate-900">
            Adulterated Feed & Middlemen Traps
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Urea & husk adulteration:</strong> Unregulated local feeds cause reproductive disorders, low milk fat, and early lactation dry-up.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Predatory local credit:</strong> Village feed dealers trap farmers with high informal interest rates on feed bags.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Zero doorstep delivery:</strong> Smallholder farmers must travel 10-15 km to tehsil markets for heavy 40kg/50kg bags.</span>
            </li>
          </ul>
        </div>

        {/* Our Solution */}
        <div className="bg-emerald-50/70 rounded-3xl p-8 border border-emerald-200 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>The GramSathi Solution</span>
          </div>
          <h3 className="text-xl font-black text-slate-900">
            Certified Formulations & Doorstep Delivery
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Super 20-3 & Uttam 22-4:</strong> High bypass protein, balanced calcium:phosphorus, and micro-minerals that boost milk yield by 15-20%.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Pashu Sakhi micro-network:</strong> Doorstep delivery by trusted women leaders in the farmer’s own hamlet.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>QR-verified transparency:</strong> Every bag features serialized QR verification with strict MRP and batch testing guarantee.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Product Formulations Showcase */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-black text-emerald-800 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
            Laboratory Verified Formulations
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Engineered for Maximum Milk Fat & Lactation Health
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-emerald-800 tracking-wider">
                  Standard High-Fat Feed
                </span>
                <h4 className="text-2xl font-black text-slate-900">Super 20-3</h4>
              </div>
              <div className="text-right">
                <span className="text-lg font-black text-emerald-900">₹1,080</span>
                <span className="text-[10px] text-slate-500 block">40kg Standard Bag</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Ideal for indigenous cows (Gir, Sahiwal, Tharparkar) and medium-yielding buffaloes. Formulated with 20% crude protein and 3% crude fat for enhanced SNF (Solid-Not-Fat) levels.
            </p>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center text-xs">
              <div className="bg-[#FAF9F5] p-2 rounded-xl">
                <div className="font-extrabold text-slate-900">20%</div>
                <div className="text-[10px] text-slate-500">Crude Protein</div>
              </div>
              <div className="bg-[#FAF9F5] p-2 rounded-xl">
                <div className="font-extrabold text-slate-900">3%</div>
                <div className="text-[10px] text-slate-500">Crude Fat</div>
              </div>
              <div className="bg-[#FAF9F5] p-2 rounded-xl">
                <div className="font-extrabold text-slate-900">70%</div>
                <div className="text-[10px] text-slate-500">TDN Energy</div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-400 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-amber-700 tracking-wider">
                  High Lactation Premium Feed
                </span>
                <h4 className="text-2xl font-black text-slate-900">Uttam 22-4</h4>
              </div>
              <div className="text-right">
                <span className="text-lg font-black text-emerald-900">₹680</span>
                <span className="text-[10px] text-slate-500 block">25kg Compact Bag</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Specialized for heavy-milking Murrah buffaloes and crossbred HF/Jersey cows producing 12+ litres daily. Contains bypass fat, probiotics, and organic zinc.
            </p>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center text-xs">
              <div className="bg-[#FAF9F5] p-2 rounded-xl">
                <div className="font-extrabold text-slate-900">22%</div>
                <div className="text-[10px] text-slate-500">Crude Protein</div>
              </div>
              <div className="bg-[#FAF9F5] p-2 rounded-xl">
                <div className="font-extrabold text-slate-900">4%</div>
                <div className="text-[10px] text-slate-500">Crude Fat</div>
              </div>
              <div className="bg-[#FAF9F5] p-2 rounded-xl">
                <div className="font-extrabold text-slate-900">75%</div>
                <div className="text-[10px] text-slate-500">TDN Energy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Pashu Sakhi Micro-Entrepreneur Model */}
      <div className="bg-[#FAF9F5] rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-black text-amber-700 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
            Women-Led Rural Entrepreneurship
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            The Pashu Sakhi Last-Mile Engine
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every village is anchored by an authorized Pashu Sakhi who manages local farmer relationships, handles QR-based bag sales, and earns transparent, attractive monthly commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="text-emerald-800 font-extrabold text-sm">
              Reverse Slab Commissions
            </div>
            <p className="text-xs text-slate-600">
              ₹50 on 1st bag, ₹30 on 2nd bag, ₹25 on 3rd+ bags per cattle/month, incentivizing sustained feeding compliance.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border-2 border-emerald-600/40 space-y-2 bg-emerald-50/40">
            <div className="text-emerald-900 font-extrabold text-sm">
              ₹1,000 Payout Threshold
            </div>
            <p className="text-xs text-slate-600">
              Minimum ₹1,000 threshold for withdrawal requests, settled on the scheduled 5th of every month payout day.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="text-emerald-800 font-extrabold text-sm">
              24-Hour Cash Lock Ledger
            </div>
            <p className="text-xs text-slate-600">
              Cash collections are recorded into an automated negative balance ledger with a 24-hr deposit SLA, eliminating bad debt.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="text-emerald-800 font-extrabold text-sm">
              Star Ranking Leaderboard
            </div>
            <p className="text-xs text-slate-600">
              Top-performing village sakhis gain monthly leadership recognition, digital badges, and exclusive expansion rights.
            </p>
          </div>
        </div>
      </div>

      {/* Institutional / B2B Inquiry Form */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-800 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <Building2 className="w-4 h-4 text-emerald-700" />
            <span>Institutional & Dairy Federation Procurement</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Procure Bulk Feed or Partner as a Distributor
          </h3>
          <p className="text-xs text-slate-600">
            Direct supply contracts for district milk unions, gaushalas, agricultural cooperatives, and institutional livestock farms.
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-2 max-w-md mx-auto">
            <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
            <h4 className="text-lg font-black text-emerald-950">Inquiry Received</h4>
            <p className="text-xs text-emerald-800">
              Thank you {inquiryName}. Our Institutional Supply Team will review your request and contact you within 24 hours.
            </p>
            <div className="text-xs text-slate-500 pt-2 font-mono">
              Direct Contact: <strong>care@gramsathi.in</strong>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name / Contact Person
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Organization / Cooperative Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Regional Milk Union"
                  value={inquiryOrg}
                  onChange={(e) => setInquiryOrg(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-emerald-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Contact Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98290 12345"
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Official Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. procurement@union.org"
                  className="w-full bg-[#FAF9F5] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-emerald-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Estimated Monthly Volume / Requirements
              </label>
              <textarea
                rows={3}
                required
                placeholder="Mention desired metric tons/bags per month, delivery location, and dairy herd size..."
                value={inquiryMsg}
                onChange={(e) => setInquiryMsg(e.target.value)}
                className="w-full bg-[#FAF9F5] border border-slate-300 rounded-xl p-3 text-xs text-slate-900 focus:outline-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#1B5E20] to-[#0E381E] hover:from-emerald-800 text-amber-300 font-black text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Institutional Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
