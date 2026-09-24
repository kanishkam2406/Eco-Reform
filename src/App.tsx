import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { ActionsMatrix } from './components/ActionsMatrix';
import { PilotJailMap } from './components/PilotJailMap';
import { DonationModal } from './components/DonationModal';
import { BrochureModal } from './components/BrochureModal';
import {
  BROCHURE_PHOTOS,
  CHALLENGES,
  METHODOLOGY_STEPS,
  THREE_PILLARS,
  IMPACT_STORIES,
  DONATION_TIERS,
  CONTACT_INFO,
} from './data/brochureData';

export default function App() {
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [selectedDonationTier, setSelectedDonationTier] = useState<string>('tier-3');
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [activePhotoLightbox, setActivePhotoLightbox] = useState<{ url: string; caption: string } | null>(null);

  // Map & Lightbox Zoom feature states
  const [heroMapZoom, setHeroMapZoom] = useState<number>(1);
  const [lightboxZoom, setLightboxZoom] = useState<number>(1);

  // Micro-interaction states
  const [activePathwayTab, setActivePathwayTab] = useState<'pillars' | 'timeline'>('pillars');
  const [selectedChallengeId, setSelectedChallengeId] = useState<string | null>(null);
  const [selectedChallengeFilter, setSelectedChallengeFilter] = useState<'all' | 'thermal' | 'resource' | 'dignity'>('all');
  const [expandedAllChallenges, setExpandedAllChallenges] = useState(false);
  const [selectedMethodologyStep, setSelectedMethodologyStep] = useState<typeof METHODOLOGY_STEPS[0] | null>(null);
  
  // Interactive Giving Calculator States
  const [calcAmount, setCalcAmount] = useState<number>(5000);
  const [copiedBankField, setCopiedBankField] = useState<string | null>(null);
  const [activeAllocationHover, setActiveAllocationHover] = useState<'direct' | 'monitoring' | 'governance' | null>(null);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Global ESC key listener to dismiss active popups/modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePhotoLightbox(null);
        setSelectedMethodologyStep(null);
        setDonationModalOpen(false);
        setBrochureModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenDonateWithTier = (tierId: string) => {
    setSelectedDonationTier(tierId);
    setDonationModalOpen(true);
  };

  const handleCopyBank = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBankField(field);
    setTimeout(() => setCopiedBankField(null), 2200);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1A1C19] flex flex-col selection:bg-[#7CA123]/25 selection:text-[#12560E]">
      {/* Top Floating Glassmorphism Navigation */}
      <Navigation
        onOpenDonate={() => setDonationModalOpen(true)}
        onOpenBrochure={() => setBrochureModalOpen(true)}
      />

      <main className="flex-1 pt-20">
        
        {/* ========================================================= */}
        {/* 1. HERO SECTION (High-Impact Pitch Fold)                 */}
        {/* ========================================================= */}
        <section id="hero" className="w-full bg-[#FAF9F5] pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#D1C9BC]/70 relative overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E2F3D9]/40 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E8E2D2]/30 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Pitch Copy Column: Lifted up equally with the map image */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6 flex flex-col justify-between">
                
                {/* Live Status Pill with Micro-Ping: Official Brochure Tagline */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EEEEE9] text-[#12560E] text-xs font-semibold uppercase tracking-wider border border-[#D1C9BC] shadow-2xs self-start">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CA123] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#12560E]" />
                  </span>
                  <span>Towards Climate-Resilient Adaptive Prisons • Prioritising Prisoner Wellbeing</span>
                </div>

                {/* Bold Pitch Headline */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1C19] tracking-tight leading-[1.08]">
                  Where Second Chances{' '}
                  <span className="italic text-[#12560E] font-medium underline decoration-[#7CA123]/50 decoration-wavy decoration-2">
                    Transform Prisons.
                  </span>
                </h1>

                {/* Enriched Unified Pitch Narrative directly from the Brochure */}
                <div className="space-y-3.5 max-w-2xl">
                  <p className="text-base sm:text-lg text-[#41493d] leading-relaxed">
                    <strong>Eco-Reform is TYCIA Foundation's flagship climate-resilience programme</strong> transforming prisons into climate-adaptive, sustainable and rehabilitative spaces.
                  </p>

                  <p className="text-xs sm:text-sm text-[#555e51] leading-relaxed">
                    The pilot at Nuh District Jail, Haryana, focuses on practical solutions for heat, water, waste, infrastructure and environmental resilience, with the aim of developing a model that can be replicated across India.
                  </p>

                  {/* 3 Core Focus Pillars directly from brochure */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    <div className="bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-[#D1C9BC] shadow-2xs hover:border-[#12560E] transition-colors">
                      <div className="flex items-center gap-1.5 text-[#12560E] font-bold text-xs mb-1">
                        <span className="material-symbols-outlined text-[16px]">domain</span>
                        <span>Infrastructure</span>
                      </div>
                      <p className="text-[11px] text-[#41493d] leading-normal">
                        Responding to extreme heat, changing weather conditions, and climate risks.
                      </p>
                    </div>

                    <div className="bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-[#D1C9BC] shadow-2xs hover:border-[#12560E] transition-colors">
                      <div className="flex items-center gap-1.5 text-[#12560E] font-bold text-xs mb-1">
                        <span className="material-symbols-outlined text-[16px]">water_drop</span>
                        <span>Water &amp; Waste</span>
                      </div>
                      <p className="text-[11px] text-[#41493d] leading-normal">
                        Efficient water use, improved storage, waste segregation, and composting.
                      </p>
                    </div>

                    <div className="bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-[#D1C9BC] shadow-2xs hover:border-[#12560E] transition-colors">
                      <div className="flex items-center gap-1.5 text-[#12560E] font-bold text-xs mb-1">
                        <span className="material-symbols-outlined text-[16px]">yard</span>
                        <span>Green Practices</span>
                      </div>
                      <p className="text-[11px] text-[#41493d] leading-normal">
                        Kitchen gardens, green spaces, sustainable food, and climate education.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-1">
                  <button
                    onClick={() => setDonationModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2E6F25] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#12560E] active:scale-[0.98] transition-all shadow-sm hover:shadow-md"
                  >
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                    Support Mission (80G Tax-Exempt)
                  </button>

                  <a
                    href="#facility-blueprint"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#1A1C19] border border-[#D1C9BC] text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#EEEEE9] active:scale-[0.98] transition-all shadow-2xs"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#12560E]">map</span>
                    Explore Pilot Model
                  </a>

                  <button
                    onClick={() => setBrochureModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#E2F3D9] text-[#12560E] text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#D4EBC9] active:scale-[0.98] transition-all shadow-2xs"
                  >
                    <span className="material-symbols-outlined text-[18px]">auto_stories</span>
                    Field Publication
                  </button>
                </div>

                {/* Micro Institutional Trust Strip */}
                <div className="pt-3 border-t border-[#D1C9BC]/60 flex flex-wrap items-center gap-4 text-xs text-[#717a6c]">
                  <span className="font-semibold text-[#1A1C19]">Validated &amp; Supported By:</span>
                  <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-[#D1C9BC]">
                    <span className="material-symbols-outlined text-[14px] text-[#12560E]">verified</span>
                    Haryana Prisons Dept.
                  </span>
                  <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-[#D1C9BC]">
                    <span className="material-symbols-outlined text-[14px] text-[#12560E]">eco</span>
                    Rainmatter Foundation
                  </span>
                  <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-[#D1C9BC]">
                    <span className="material-symbols-outlined text-[14px] text-[#12560E]">newspaper</span>
                    Factor Daily
                  </span>
                </div>

                {/* Miniature Tree Line Art Border: Centered with 3rd tree positioned between partner badges */}
                <div className="pt-2 w-full flex justify-center items-center">
                  <div className="h-10 sm:h-12 w-full max-w-md sm:max-w-lg relative flex items-end justify-center">
                    <img
                      src="/tree-line-border.webp"
                      alt="Eco-Reform Continuous Tree Horizon"
                      className="w-full h-full object-contain object-bottom select-none opacity-85 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>

              {/* Visual Showcase Card: Border sized strictly to the map only */}
              <div className="lg:col-span-5 relative space-y-3">
                {/* Border strictly sized to the map dimensions with zero padding */}
                <div
                  className="relative w-full aspect-[2550/3188] rounded-2xl border-2 border-[#12560E] shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 group cursor-zoom-in bg-[#FAF9F5]"
                  onClick={() => {
                    setLightboxZoom(1);
                    setActivePhotoLightbox({
                      url: '/prisons-climate-map.webp',
                      caption:
                        'ECO-REFORM: Prisons Under Pressure — Pan-India Geographic Climate Vulnerability Audit mapping extreme winter challenges, heat exhaustion, flash floods, and water scarcity across Indian prisons.',
                    });
                  }}
                  title="Click to expand full high-resolution map inspector"
                >
                  {/* Clean Map Image - Flush to container border with 0px padding */}
                  <img
                    src="/prisons-climate-map.webp"
                    alt="ECO-REFORM: Prisons under pressure - Addressing Climate Crisis in Indian Prisons"
                    style={{
                      transform: `scale(${heroMapZoom})`,
                      transformOrigin: 'center center',
                    }}
                    className="w-full h-full object-cover select-none block transition-transform duration-300 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Dedicated Content Below: Shifted Lower and Independent of Map Border */}
                <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#D1C9BC] space-y-2.5 shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#12560E] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">map</span>
                      Pan-India Geographic Climate Audit
                    </span>
                    <span className="text-[10px] font-mono font-semibold bg-[#E2F3D9] text-[#12560E] px-2 py-0.5 rounded-full shrink-0">
                      20+ Hotspots
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A1C19] leading-snug">
                    Prisons Under Pressure: Addressing Climate Crisis in Indian Prisons
                  </h3>

                  <p className="text-xs text-[#41493d] leading-relaxed">
                    From sub-zero winter supply shortages in Himalayan barracks to 45°C+ heat exhaustion and flash floods in central compounds — mapping critical structural vulnerabilities across India’s correctional landscape.
                  </p>

                  <div className="pt-2 border-t border-[#EEEEE9] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#717a6c] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-[#2E6F25]">verified</span>
                      High-Resolution Official Publication
                    </span>

                    <button
                      onClick={() => {
                        setLightboxZoom(1);
                        setActivePhotoLightbox({
                          url: '/prisons-climate-map.webp',
                          caption:
                            'ECO-REFORM: Prisons Under Pressure — Pan-India Geographic Climate Vulnerability Audit mapping extreme winter challenges, heat exhaustion, flash floods, and water scarcity across Indian prisons.',
                        });
                      }}
                      className="font-semibold text-[#12560E] hover:underline flex items-center gap-1 text-xs"
                    >
                      <span>Full View &amp; Deep Zoom</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_full</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Numerical Pitch Ticker (4 Brochure Pillars) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#D1C9BC] shadow-xs hover:border-[#12560E] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2E6F25] to-[#7CA123] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between text-[#717a6c] group-hover:text-[#12560E] transition-colors mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Focus Areas</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-115">category</span>
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1C19] font-mono">
                  5<span className="text-[#12560E] font-sans"> Domains</span>
                </div>
                <p className="text-xs text-[#41493d] mt-1 leading-snug">
                  Infrastructure, water, waste, sustainable green practices, and education.
                </p>
                <div className="mt-3 pt-2 border-t border-[#EEEEE9] text-[10px] font-semibold text-[#12560E] flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12560E]" />
                  <span>30 standardized climate actions</span>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#D1C9BC] shadow-xs hover:border-[#12560E] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2E6F25] to-[#7CA123] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between text-[#717a6c] group-hover:text-[#12560E] transition-colors mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Key Challenges</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-115">crisis_alert</span>
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1C19] font-mono">
                  6<span className="text-[#d97706] font-sans"> Core</span>
                </div>
                <p className="text-xs text-[#41493d] mt-1 leading-snug">
                  Extreme heat, water stress, infrastructure, waste, food &amp; weather patterns.
                </p>
                <div className="mt-3 pt-2 border-t border-[#EEEEE9] text-[10px] font-semibold text-[#12560E] flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12560E]" />
                  <span>Targeted custodial solutions</span>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#D1C9BC] shadow-xs hover:border-[#12560E] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2E6F25] to-[#7CA123] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between text-[#717a6c] group-hover:text-[#12560E] transition-colors mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Living Farm</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-115">yard</span>
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1C19] font-mono">
                  1.2<span className="text-[#3e6a00] font-sans"> Acres</span>
                </div>
                <p className="text-xs text-[#41493d] mt-1 leading-snug">
                  Raised permaculture beds delivering organic produce to inmate daily diets.
                </p>
                <div className="mt-3 pt-2 border-t border-[#EEEEE9] text-[10px] font-semibold text-[#12560E] flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12560E]" />
                  <span>250 kg food waste composted daily</span>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#D1C9BC] shadow-xs hover:border-[#12560E] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2E6F25] to-[#7CA123] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between text-[#717a6c] group-hover:text-[#12560E] transition-colors mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Replicable Model</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-115">share</span>
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1C19] font-mono">
                  5<span className="text-[#12560E] font-sans"> Stages</span>
                </div>
                <p className="text-xs text-[#41493d] mt-1 leading-snug">
                  Research-to-action methodology piloted at Nuh Jail for pan-India replication.
                </p>
                <div className="mt-3 pt-2 border-t border-[#EEEEE9] text-[10px] font-semibold text-[#12560E] flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12560E]" />
                  <span>Aim to scale across India</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 2. WHY CLIMATE-ADAPTIVE PRISONS? (The Challenges)        */}
        {/* ========================================================= */}
        <section id="crisis" className="w-full bg-[#F4F4EF] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D1C9BC]">
          <div className="max-w-7xl mx-auto space-y-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#703d00] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#703d00]" />
                  The Problem • Compounding Vulnerability
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1C19] font-medium tracking-tight">
                  Why Climate-Adaptive Prisons?
                </h2>
                <p className="text-sm text-[#41493d] leading-relaxed">
                  Prisons can be particularly vulnerable to climate-related risks because of their
                  enclosed infrastructure, high population density and limited access to adaptive resources.
                </p>
              </div>

              <div className="shrink-0 bg-white px-4 py-3 rounded-xl border border-[#D1C9BC] text-xs text-[#41493d] max-w-xs shadow-2xs">
                <span className="font-bold text-[#1A1C19] block mb-0.5">Interactive Inspection:</span>
                <span>Click any card to reveal its direct Eco-Reform intervention.</span>
              </div>
            </div>

            {/* Filter Pills & Expand All Micro-Control */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {[
                  { id: 'all', label: 'All 6 Challenges', count: 6 },
                  { id: 'thermal', label: 'Heat & Weather', count: 2 },
                  { id: 'resource', label: 'Water & Waste', count: 2 },
                  { id: 'infra-food', label: 'Infrastructure & Green Spaces', count: 2 },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedChallengeFilter(tab.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      selectedChallengeFilter === tab.id
                        ? 'bg-[#12560E] text-white shadow-xs'
                        : 'bg-white border border-[#D1C9BC] text-[#41493d] hover:bg-[#EEEEE9]'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        selectedChallengeFilter === tab.id ? 'bg-[#2E6F25] text-white' : 'bg-[#EEEEE9] text-[#717a6c]'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setExpandedAllChallenges((prev) => !prev)}
                className="px-3.5 py-1.5 bg-white border border-[#D1C9BC] hover:border-[#12560E] rounded-xl text-xs font-semibold text-[#12560E] self-start sm:self-auto transition-all flex items-center gap-1 shrink-0 shadow-2xs"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {expandedAllChallenges ? 'unfold_less' : 'unfold_more'}
                </span>
                <span>{expandedAllChallenges ? 'Collapse Solutions' : 'Expand All Solutions'}</span>
              </button>
            </div>

            {/* Interactive 6-Card Challenge Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CHALLENGES.filter((ch) => {
                if (selectedChallengeFilter === 'thermal') return ch.id === 'heat' || ch.id === 'weather';
                if (selectedChallengeFilter === 'resource') return ch.id === 'water' || ch.id === 'waste';
                if (selectedChallengeFilter === 'infra-food') return ch.id === 'infra' || ch.id === 'greenspace';
                return true;
              }).map((ch) => {
                const isSelected = expandedAllChallenges || selectedChallengeId === ch.id;
                return (
                  <div
                    key={ch.id}
                    onClick={() => setSelectedChallengeId(selectedChallengeId === ch.id ? null : ch.id)}
                    className={`bg-white p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative group ${
                      isSelected
                        ? 'border-[#12560E] shadow-md ring-2 ring-[#12560E]/20 bg-[#FBFDF9]'
                        : 'border-[#D1C9BC] hover:border-[#12560E] hover:shadow-md hover:-translate-y-1'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${ch.color}15`, color: ch.color }}
                      >
                        <span className="material-symbols-outlined text-[22px]">{ch.icon}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#717a6c] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#D1C9BC]">
                        Challenge
                      </span>
                    </div>

                    <h3 className="font-bold text-sm uppercase tracking-wide text-[#1A1C19] mb-1.5">
                      {ch.title}
                    </h3>

                    <p className="text-xs text-[#41493d] leading-relaxed">
                      {ch.desc}
                    </p>

                    {/* Interactive Solution Reveal Drawer */}
                    {isSelected ? (
                      <div className="mt-3 p-3 rounded-xl bg-[#E2F3D9]/70 border border-[#CDE5C2] text-xs text-[#12560E] space-y-1 animate-in fade-in zoom-in-95 duration-200">
                        <div className="font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px]">task_alt</span>
                          Direct Eco-Reform Action:
                        </div>
                        <p className="text-[11px] text-[#41493d] leading-relaxed">
                          {ch.id === 'heat' && 'High-albedo solar-reflective roof coatings + natural bamboo/reed window blinds reduce ambient barrack temperatures by 3.5°C to 5.2°C.'}
                          {ch.id === 'water' && 'Promoting efficient water use, improved rooftop rainwater harvesting storage, and practical water-conservation solutions.'}
                          {ch.id === 'infra' && 'Improving prison infrastructure to better respond to extreme heat, changing weather conditions, and other climate risks.'}
                          {ch.id === 'waste' && 'Encouraging food waste segregation, composting, recycling, and red-worm vermicomposting beds converting 250kg scraps daily.'}
                          {ch.id === 'greenspace' && 'Promoting 1.2 acres of kitchen gardens, living green spaces, and sustainable food practices supplementing daily inmate diets.'}
                          {ch.id === 'weather' && 'Stormwater drainage channels, shaded breezeways, and structural adaptation to protect custodial living spaces against weather volatility.'}
                        </p>
                      </div>
                    ) : (
                      <div className="mt-4 pt-3 border-t border-[#EEEEE9] flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-[#12560E] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          <span className="material-symbols-outlined text-[13px]">tune</span>
                          Inspect Solution
                        </span>
                        <span className="text-[#717a6c] group-hover:text-[#1A1C19] font-medium transition-colors">
                          Reveal ↓
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 3. FLAGSHIP: PROJECT ECO-REFORM & 5-STEP METHODOLOGY     */}
        {/* ========================================================= */}
        <section id="eco-reform" className="w-full bg-[#FAF9F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#D1C9BC]">
          <div className="max-w-7xl mx-auto space-y-14">
            
            {/* Header & Strategic Quote */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2F3D9] text-[#12560E] text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">eco</span>
                  Project Eco-Reform • TYCIA Foundation Flagship
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#703d00] block">The Question</span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1C19] tracking-tight leading-tight">
                    Can prisons become part of the solution to the climate crisis?
                  </h2>
                </div>

                <div className="p-6 rounded-2xl bg-[#F4F4EF] border-l-4 border-l-[#12560E] border border-[#D1C9BC] space-y-3">
                  <p className="font-serif text-2xl sm:text-3xl text-[#12560E] italic font-semibold">
                    Eco-Reform believes they can.
                  </p>
                  <p className="text-sm text-[#1A1C19] leading-relaxed">
                    <strong>Eco-Reform</strong> is TYCIA Foundation’s flagship climate-resilience programme transforming prisons into climate-adaptive, sustainable and rehabilitative spaces.
                  </p>
                  <p className="text-xs sm:text-sm text-[#41493d] leading-relaxed">
                    The pilot at Nuh District Jail, Haryana, focuses on practical solutions for heat, water, waste, infrastructure and environmental resilience, with the aim of developing a model that can be replicated across India.
                  </p>
                </div>
              </div>

              {/* Operational Ground Zero Anchor Card */}
              <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#D1C9BC] space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#EEEEE9] pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#12560E] uppercase tracking-wider block">Pilot Location</span>
                    <h3 className="font-serif text-xl font-bold text-[#1A1C19]">Nuh District Jail</h3>
                  </div>
                  <span className="text-xs font-mono bg-[#E2F3D9] text-[#12560E] px-2 py-0.5 rounded font-semibold">Haryana</span>
                </div>

                <div className="space-y-2.5 text-xs text-[#41493d]">
                  <div className="flex items-center justify-between">
                    <span>Participating Staff:</span>
                    <span className="font-bold text-[#1A1C19]">45+ Officers &amp; Wardens</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Incarcerated Trainees:</span>
                    <span className="font-bold text-[#1A1C19]">120+ Active Cohort</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Kitchen Gardens &amp; Beds:</span>
                    <span className="font-bold text-[#1A1C19]">1.2 Acres Living Canopy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Daily Waste Composted:</span>
                    <span className="font-bold text-[#1A1C19]">250 kg Food Scraps</span>
                  </div>
                </div>

                <a
                  href="#facility-blueprint"
                  className="w-full py-2.5 bg-[#FAF9F5] border border-[#2E6F25] text-[#2E6F25] text-xs font-semibold rounded-xl hover:bg-[#E2F3D9] transition-all flex items-center justify-center gap-1.5 shadow-2xs mt-2"
                >
                  <span className="material-symbols-outlined text-[16px]">map</span>
                  View Interactive Facility Blueprint
                </a>
              </div>
            </div>

            {/* 5-Step Research-to-Action Blueprint (Light Green Ombre & Micro-Popup) */}
            <div className="space-y-6 bg-gradient-to-br from-[#F5FAF1] via-[#EBF6E4] to-[#F1F8EC] p-6 sm:p-8 rounded-2xl border border-[#CDE5C2] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D6EACC] pb-4">
                <div className="space-y-1.5 max-w-2xl">
                  <span className="text-xs font-bold text-[#12560E] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#7CA123]" />
                    OUR APPROACH • HOW DOES ECO-REFORM WORK?
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1C19] font-medium">
                    The Research-to-Action Approach
                  </h3>
                  <p className="text-xs text-[#41493d] leading-relaxed">
                    Eco-Reform follows a research-to-action approach, working with prison administrations, prison staff, incarcerated individuals and other stakeholders to identify challenges and develop practical solutions. Eco-Reform uses interactive learning, practical demonstrations and participatory activities to make climate action understandable and actionable within prison settings.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-[#12560E] bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-[#CDE5C2] shadow-2xs shrink-0 self-start sm:self-auto">
                  5-Stage Replicable Protocol
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-2">
                {METHODOLOGY_STEPS.map((st) => (
                  <div
                    key={st.step}
                    onClick={() => setSelectedMethodologyStep(st)}
                    className="bg-gradient-to-b from-white/95 via-[#F4F9F0]/95 to-[#E3F2DA]/95 p-4 sm:p-5 rounded-2xl border border-[#C5E1B9] space-y-3 flex flex-col justify-between hover:border-[#12560E] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer"
                    title="Click to inspect operational deliverables & security protocols"
                  >
                    {/* Floating Micro-Popup when cursor hovers */}
                    <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 pointer-events-none transition-all duration-200 z-30 whitespace-nowrap bg-[#12560E] text-[#B9F079] text-[10px] font-semibold py-1 px-3 rounded-full shadow-xl flex items-center gap-1.5 border border-[#7CA123]/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B9F079] animate-pulse" />
                      <span>{st.popupInsight}</span>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#12560E] rotate-45" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2E6F25] to-[#12560E] text-white flex items-center justify-center font-bold text-xs shadow-xs group-hover:scale-110 transition-transform">
                          {st.step}
                        </div>
                        <span className="text-[10px] font-mono text-[#717a6c] uppercase">Phase 0{st.step}</span>
                      </div>

                      <h4 className="font-bold text-xs uppercase tracking-wide text-[#1A1C19] pt-1">
                        {st.shortTitle || st.title}
                      </h4>

                      <p className="text-[11px] text-[#41493d] leading-relaxed">
                        {st.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#D5E9CC] text-[10px] font-semibold text-[#12560E] flex items-center justify-between">
                      <span className="truncate flex items-center gap-1" title={st.output}>
                        <span className="material-symbols-outlined text-[12px] text-[#2E6F25]">task_alt</span>
                        {st.output}
                      </span>
                      <span className="text-[10px] text-[#717a6c] group-hover:text-[#12560E] shrink-0 font-bold">
                        Inspect →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 4. INTERACTIVE FACILITY BLUEPRINT (Directly Embedded)   */}
        {/* ========================================================= */}
        <section id="facility-blueprint" className="w-full bg-[#F4F4EF] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D1C9BC]">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#12560E]">
                  <span className="w-2 h-2 rounded-full bg-[#7CA123]" />
                  Ground Zero Blueprint • Nuh District Jail, Haryana
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1C19] font-medium tracking-tight">
                  Interactive Institutional Schematic
                </h2>
                <p className="text-sm text-[#41493d]">
                  Click the active hotspots below to inspect how physical interventions, waste diversion,
                  and permaculture beds are situated inside the correctional compound.
                </p>
              </div>

              <button
                onClick={() => setBrochureModalOpen(true)}
                className="self-start md:self-auto px-4 py-2 bg-white border border-[#D1C9BC] hover:border-[#12560E] text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 shadow-2xs"
              >
                <span className="material-symbols-outlined text-[16px] text-[#12560E]">auto_stories</span>
                View in Authentic Brochure
              </button>
            </div>

            {/* Embedded Schematic Map Component */}
            <div className="bg-white rounded-2xl border border-[#D1C9BC] p-4 sm:p-6 shadow-sm">
              <PilotJailMap onOpenPhoto={(p) => setActivePhotoLightbox(p)} />
            </div>
          </div>
        </section>


        {/* ========================================================= */}
        {/* 5. THE 30 CLIMATE ACTIONS TAXONOMY & AUDIT               */}
        {/* ========================================================= */}
        <section id="climate-actions" className="w-full bg-[#FAF9F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#D1C9BC]">
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Embedded 30 Actions Matrix Component */}
            <ActionsMatrix />
          </div>
        </section>


        {/* ========================================================= */}
        {/* ========================================================= */}
        {/* 6. HOLISTIC MODEL: 3 PILLARS & REPLICATION PATHWAY        */}
        {/* ========================================================= */}
        <section id="pathways" className="w-full bg-[#F4F4EF] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#D1C9BC]">
          <div className="max-w-7xl mx-auto space-y-10">
            
            {/* Section Header with Micro-Tab Switcher */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-bold text-[#12560E] uppercase tracking-wider block">
                  Holistic Custodial Climate Action
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1C19] font-medium tracking-tight">
                  Three Pillars &amp; Replication Pathway
                </h2>
                <p className="text-sm text-[#41493d]">
                  Transforming prisons into climate-adaptive, sustainable and rehabilitative spaces through practical solutions for heat, water, waste, infrastructure, and environmental resilience.
                </p>
              </div>

              {/* Interactive Pill Switcher */}
              <div className="inline-flex p-1.5 bg-white rounded-xl border border-[#D1C9BC] shadow-xs self-start md:self-auto">
                <button
                  onClick={() => setActivePathwayTab('pillars')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activePathwayTab === 'pillars'
                      ? 'bg-[#2E6F25] text-white shadow-xs'
                      : 'text-[#41493d] hover:text-[#1A1C19]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">domain</span>
                  Three Core Pillars
                </button>

                <button
                  onClick={() => setActivePathwayTab('timeline')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activePathwayTab === 'timeline'
                      ? 'bg-[#2E6F25] text-white shadow-xs'
                      : 'text-[#41493d] hover:text-[#1A1C19]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">route</span>
                  Replication Pathway
                </button>
              </div>
            </div>

            {/* TAB 1: THREE PILLARS */}
            {activePathwayTab === 'pillars' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in duration-200">
                {THREE_PILLARS.map((pillar) => (
                  <div
                    key={pillar.id}
                    className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D1C9BC] flex flex-col justify-between space-y-6 hover:border-[#2E6F25] transition-all shadow-xs group"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-[#EEEEE9] text-[#12560E] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[28px]">{pillar.icon}</span>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#703d00]">
                          {pillar.roman}
                        </span>
                        <h3 className="font-serif text-xl font-semibold text-[#1A1C19] mt-0.5">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-[#717a6c] font-medium mt-0.5">
                          {pillar.subtitle}
                        </p>
                      </div>

                      <p className="text-xs text-[#41493d] leading-relaxed">
                        {pillar.desc}
                      </p>

                      <ul className="space-y-2 pt-2 border-t border-[#EEEEE9]">
                        {pillar.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#1A1C19]">
                            <span className="material-symbols-outlined text-[16px] text-[#2E6F25] shrink-0 mt-0.5">
                              check_circle
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#EEEEE9]">
                      <a
                        href="#donate"
                        className="text-xs font-semibold text-[#12560E] hover:underline flex items-center gap-1"
                      >
                        Support this Pillar
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: REPLICATION PATHWAY */}
            {activePathwayTab === 'timeline' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-200">
                <div className="bg-white p-6 rounded-2xl border border-[#D1C9BC] space-y-3 relative shadow-xs hover:border-[#12560E] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold bg-[#E2F3D9] text-[#12560E] px-2.5 py-0.5 rounded-full uppercase">
                      Stage 01
                    </span>
                    <span className="material-symbols-outlined text-[#12560E] text-[22px]">biotech</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[#1A1C19]">
                    Research &amp; Assessment
                  </h4>
                  <p className="text-xs text-[#41493d] leading-relaxed">
                    Auditing indoor temperatures, water usage, and waste volumes across barracks to identify systemic vulnerabilities and thermal spikes.
                  </p>
                  <div className="text-[11px] text-[#717a6c] font-medium pt-2 border-t border-[#EEEEE9]">
                    Output: Baseline Vulnerability Report
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#D1C9BC] space-y-3 relative shadow-xs hover:border-[#12560E] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold bg-[#E2F3D9] text-[#12560E] px-2.5 py-0.5 rounded-full uppercase">
                      Stage 02
                    </span>
                    <span className="material-symbols-outlined text-[#12560E] text-[22px]">school</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[#1A1C19]">
                    Education &amp; Capacity
                  </h4>
                  <p className="text-xs text-[#41493d] leading-relaxed">
                    Interactive learning, practical demonstrations, and participatory activities bridging prison staff and incarcerated individuals in climate action.
                  </p>
                  <div className="text-[11px] text-[#717a6c] font-medium pt-2 border-t border-[#EEEEE9]">
                    Output: Certified Custodial Eco-Stewards
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#D1C9BC] space-y-3 relative shadow-xs hover:border-[#12560E] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold bg-[#E2F3D9] text-[#12560E] px-2.5 py-0.5 rounded-full uppercase">
                      Stage 03
                    </span>
                    <span className="material-symbols-outlined text-[#12560E] text-[22px]">eco</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[#1A1C19]">
                    Resilient Interventions
                  </h4>
                  <p className="text-xs text-[#41493d] leading-relaxed">
                    Practical, low-cost solutions for heat, water, waste, infrastructure, and environmental resilience implemented inside prison grounds.
                  </p>
                  <div className="text-[11px] text-[#717a6c] font-medium pt-2 border-t border-[#EEEEE9]">
                    Output: 30-Action Custodial Blueprint
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#D1C9BC] space-y-3 relative shadow-xs hover:border-[#12560E] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold bg-[#E2F3D9] text-[#12560E] px-2.5 py-0.5 rounded-full uppercase">
                      Stage 04
                    </span>
                    <span className="material-symbols-outlined text-[#12560E] text-[22px]">share</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[#1A1C19]">
                    Pilot &amp; Pan-India Scaling
                  </h4>
                  <p className="text-xs text-[#41493d] leading-relaxed">
                    Live demonstration at Nuh District Jail with the aim of developing a model that can be replicated across custodial facilities nationwide.
                  </p>
                  <div className="text-[11px] text-[#717a6c] font-medium pt-2 border-t border-[#EEEEE9]">
                    Output: National Replicable Model
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>


        {/* ========================================================= */}
        {/* 7. GROUND PROOF & AUTHENTIC TESTIMONIES                  */}
        {/* ========================================================= */}
        <section id="impact" className="w-full bg-[#FAF9F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#D1C9BC]">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#12560E] uppercase tracking-wider block">
                  Ground Realities &amp; Lived Experience
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1C19] font-medium tracking-tight">
                  Verified Impact from the Ground
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#41493d] max-w-sm">
                Behind every case number is a family waiting, an artisan ready to produce, and a human rediscovering worth.
              </p>
            </div>

            {/* Testimonials Deck */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {IMPACT_STORIES.map((story) => (
                <div
                  key={story.id}
                  className="bg-white p-6 rounded-2xl border border-[#D1C9BC] flex flex-col justify-between space-y-5 shadow-xs hover:shadow-md transition-all"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#703d00] block">
                      {story.tag}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[#1A1C19] leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-xs text-[#41493d] leading-relaxed italic">
                      “{story.story}”
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EEEEE9] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#EEEEE9] text-[#12560E] font-bold text-xs flex items-center justify-center">
                        {story.avatarLetter}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#1A1C19]">{story.author}</p>
                        <p className="text-[10px] text-[#717a6c]">{story.role}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-[#12560E] bg-[#E2F3D9] px-2 py-0.5 rounded">
                      {story.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Authentic Photographic Proof Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div
                onClick={() =>
                  setActivePhotoLightbox({
                    url: BROCHURE_PHOTOS.agroBed,
                    caption:
                      'Agro-Ecology in Action: Incarcerated individuals and agricultural coordinators cultivating organic vegetable beds at Nuh District Jail.',
                  })
                }
                className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#D1C9BC] shadow-xs group cursor-pointer"
                title="Click to zoom photo"
              >
                <img
                  src={BROCHURE_PHOTOS.agroBed}
                  alt="Agroecology bed planting in prison"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">zoom_in</span>
                  <span>Inspect</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-white">Hands-on Raised Soil Beds</span>
                </div>
              </div>

              <div
                onClick={() =>
                  setActivePhotoLightbox({
                    url: BROCHURE_PHOTOS.staffTraining,
                    caption:
                      'Joint Capacity Workshop: Correctional officers, prison staff, and incarcerated participants collaboratively planning institutional climate interventions.',
                  })
                }
                className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#D1C9BC] shadow-xs group cursor-pointer"
                title="Click to zoom photo"
              >
                <img
                  src={BROCHURE_PHOTOS.staffTraining}
                  alt="Joint staff and inmate capacity workshop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">zoom_in</span>
                  <span>Inspect</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-white">Staff-Inmate Joint Workshop</span>
                </div>
              </div>

              <div
                onClick={() =>
                  setActivePhotoLightbox({
                    url: BROCHURE_PHOTOS.gardenOverview,
                    caption:
                      'Permaculture Overview: 1.2 acres of active organic farming transformed from barren courtyard ground inside Nuh District Jail.',
                  })
                }
                className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#D1C9BC] shadow-xs group cursor-pointer"
                title="Click to zoom photo"
              >
                <img
                  src={BROCHURE_PHOTOS.gardenOverview}
                  alt="Permaculture overview inside prison walls"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">zoom_in</span>
                  <span>Inspect</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-white">1.2 Acres Circular Farm</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 8. LEADERSHIP & INSTITUTIONAL HERITAGE                   */}
        {/* ========================================================= */}
        <section id="heritage" className="w-full bg-[#F4F4EF] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D1C9BC]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold text-[#12560E] uppercase tracking-wider block">
                  Turn Your Concern Into Action • Est. 2015
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1C19] font-medium tracking-tight">
                  Prioritising Prisoner Wellbeing Through Climate Resilience.
                </h2>
                <p className="text-xs sm:text-sm text-[#41493d] leading-relaxed">
                  Established in 2015 under the Indian Trusts Act, <strong>TYCIA Foundation</strong> (Turn Your Concern Into Action) leads Project Eco-Reform to transform prisons into climate-adaptive, sustainable, and rehabilitative spaces.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 bg-white rounded-xl border border-[#D1C9BC] space-y-1 shadow-2xs">
                    <h3 className="text-xs font-bold text-[#12560E] uppercase">Our Mission</h3>
                    <p className="text-[11px] text-[#41493d]">
                      Transform prisons into climate-adaptive spaces through practical solutions for heat, water, waste, infrastructure, and environmental resilience.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-[#D1C9BC] space-y-1 shadow-2xs">
                    <h3 className="text-xs font-bold text-[#703d00] uppercase">Our Vision</h3>
                    <p className="text-[11px] text-[#41493d]">
                      Develop a proven custodial model at Nuh District Jail, Haryana, that can be replicated across prisons throughout India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder Quote Card */}
              <div className="lg:col-span-6 bg-white p-7 sm:p-8 rounded-2xl border border-[#D1C9BC] space-y-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#2E6F25] text-white flex items-center justify-center font-serif text-xl font-bold">
                    KK
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1A1C19]">Karan Kumar</h3>
                    <p className="text-xs font-semibold text-[#12560E]">{CONTACT_INFO.founder}</p>
                    <p className="text-[11px] text-[#717a6c]">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <blockquote className="text-xs sm:text-sm text-[#1A1C19] italic leading-relaxed border-l-2 border-l-[#7CA123] pl-4">
                  “When a person enters prison, our collective instinct is to look away. But real public safety is built
                  by giving those inside the tools to return as protectors of their families, their neighborhoods, and their soil.”
                </blockquote>

                <div className="pt-4 border-t border-[#EEEEE9] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#41493d]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#2E6F25]">mail</span>
                    <a href={`mailto:${CONTACT_INFO.founderEmail}`} className="hover:underline">
                      {CONTACT_INFO.founderEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#2E6F25]">call</span>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="hover:underline font-mono">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#2E6F25]">verified</span>
                    <span>{CONTACT_INFO.taxExemption}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#2E6F25]">hub</span>
                    <span>Reg. {CONTACT_INFO.regId}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================= */}
        {/* 9. STRATEGIC & INSTITUTIONAL PARTNERS                     */}
        {/* ========================================================= */}
        <section id="partners" className="w-full bg-[#FAF9F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#D1C9BC]">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Header Lockup */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#12560E] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#7CA123]" />
                  Institutional Collaboration &amp; Catalytic Support
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1C19] font-medium tracking-tight">
                  Our Partners
                </h2>
                <p className="text-sm text-[#41493d] leading-relaxed">
                  Project Eco-Reform is powered by strategic collaboration between visionary correctional administrators, grassroots reform practitioners, and philanthropic ecosystem enablers.
                </p>
              </div>

              <div className="shrink-0 bg-white px-4 py-3 rounded-xl border border-[#D1C9BC] text-xs text-[#41493d] max-w-xs shadow-2xs">
                <span className="font-bold text-[#1A1C19] block mb-0.5">Systemic Co-Creation:</span>
                <span>Bridging public correctional administration with climate justice philanthropy.</span>
              </div>
            </div>

            {/* 2 Partner Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              
              {/* Partner 1: Haryana Prisons */}
              <div className="bg-white rounded-2xl border border-[#D1C9BC] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md hover:border-[#12560E] transition-all flex flex-col justify-between space-y-6 group">
                <div className="space-y-6">
                  {/* Logo Container */}
                  <div className="h-32 sm:h-36 w-full bg-[#0B0D0A] rounded-xl flex items-center justify-center p-3.5 border border-[#D1C9BC]/60 shadow-inner overflow-hidden">
                    <img
                      src="/haryana-prisons-logo.jpg"
                      alt="Haryana Prisons Logo"
                      className="h-full w-auto max-h-28 sm:max-h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Partner Info */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#703d00] block">
                      Government Host &amp; Implementation Partner
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#1A1C19] group-hover:text-[#12560E] transition-colors">
                      Haryana Prisons
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#41493d] leading-relaxed">
                    The Department of Prisons, Haryana, serves as our foundational government partner, granting institutional access and custodial cooperation across pilot facilities including Nuh District Jail. Through progressive administrative leadership and active officer involvement, Haryana Prisons champions climate-adaptive infrastructure retrofits, prisoner welfare enhancements, and structured vocational rehabilitation for incarcerated individuals.
                  </p>
                </div>

                {/* Key Roles / Highlights */}
                <div className="pt-4 border-t border-[#EEEEE9] space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#1A1C19]">
                    <span className="material-symbols-outlined text-[16px] text-[#2E6F25] shrink-0">verified</span>
                    <span>Institutional pilot hosting &amp; compound access at Nuh District Jail</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A1C19]">
                    <span className="material-symbols-outlined text-[16px] text-[#2E6F25] shrink-0">verified</span>
                    <span>Collaborative staff-inmate participatory climate training</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A1C19]">
                    <span className="material-symbols-outlined text-[16px] text-[#2E6F25] shrink-0">verified</span>
                    <span>Systemic validation of the 30 Climate Actions Blueprint</span>
                  </div>
                </div>
              </div>

              {/* Partner 2: Rainmatter Foundation */}
              <div className="bg-white rounded-2xl border border-[#D1C9BC] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md hover:border-[#12560E] transition-all flex flex-col justify-between space-y-6 group">
                <div className="space-y-6">
                  {/* Logo Container */}
                  <div className="h-32 sm:h-36 w-full bg-[#FAF9F5] rounded-xl flex items-center justify-center p-6 border border-[#D1C9BC]/60 shadow-inner overflow-hidden">
                    <img
                      src="/rainmatter-foundation-logo.png"
                      alt="Rainmatter Foundation Logo"
                      className="h-full w-auto max-w-[260px] sm:max-w-[280px] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Partner Info */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#12560E] block">
                      Catalytic Climate &amp; Philanthropic Partner
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#1A1C19] group-hover:text-[#12560E] transition-colors">
                      Rainmatter Foundation
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#41493d] leading-relaxed">
                    Rainmatter Foundation, an initiative by Zerodha, supports grassroots environmental solutions, ecological restoration, and sustainable community livelihoods. As a strategic partner to Project Eco-Reform, Rainmatter provides vital catalytic funding, mentorship, and ecosystem backing to pioneer, validate, and scale climate-resilient prison models across water conservation, thermal comfort, and circular agro-ecology.
                  </p>
                </div>

                {/* Key Roles / Highlights */}
                <div className="pt-4 border-t border-[#EEEEE9] space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#1A1C19]">
                    <span className="material-symbols-outlined text-[16px] text-[#2E6F25] shrink-0">eco</span>
                    <span>Catalytic funding for regenerative infrastructure &amp; research</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A1C19]">
                    <span className="material-symbols-outlined text-[16px] text-[#2E6F25] shrink-0">eco</span>
                    <span>Strategic mentorship across ecology, water, and circular waste systems</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A1C19]">
                    <span className="material-symbols-outlined text-[16px] text-[#2E6F25] shrink-0">eco</span>
                    <span>Ecosystem network support for nationwide replication and policy impact</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 10. TRANSPARENT 80G GIVING TIERS & FINANCIAL ALLOCATION   */}
        {/* ========================================================= */}
        <section id="donate" className="w-full bg-[#FAF9F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#D1C9BC]">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-[#703d00] uppercase tracking-wider block">
                Dignity in Giving
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1C19] font-medium tracking-tight">
                Transparent 80G Giving Tiers
              </h2>
              <p className="text-xs sm:text-sm text-[#41493d]">
                100% of individual contributions directly advance cool-roof thermal barriers, rainwater harvesting,
                organic kitchen gardens, and custodial eco-steward certifications.
              </p>
            </div>

            {/* 4 Giving Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DONATION_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`bg-white p-6 rounded-2xl border flex flex-col justify-between space-y-5 shadow-xs transition-all duration-300 relative group hover:-translate-y-1.5 hover:shadow-lg ${
                    tier.recommended ? 'border-[#2E6F25] ring-2 ring-[#2E6F25]/20' : 'border-[#D1C9BC] hover:border-[#12560E]'
                  }`}
                >
                  {tier.recommended && (
                    <span className="absolute -top-2.5 right-4 bg-[#2E6F25] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                      Most Critical
                    </span>
                  )}

                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7CA123] block">
                      {tier.name} • {tier.tag}
                    </span>

                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1C19] font-mono">
                      ₹{tier.amountInr.toLocaleString('en-IN')}{' '}
                      <span className="text-xs font-sans text-[#717a6c] font-normal">
                        (${tier.amountUsd})
                      </span>
                    </div>

                    <h4 className="font-serif text-base font-semibold text-[#1A1C19] leading-snug">
                      {tier.title}
                    </h4>

                    <p className="text-xs text-[#41493d] leading-relaxed">
                      {tier.desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-[#EEEEE9]">
                    <div className="text-[11px] font-medium text-[#12560E] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">check</span>
                      <span>{tier.impact}</span>
                    </div>

                    <button
                      onClick={() => handleOpenDonateWithTier(tier.id)}
                      className={`w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors text-center ${
                        tier.recommended
                          ? 'bg-[#2E6F25] hover:bg-[#12560E] text-white shadow-xs'
                          : 'bg-[#FAF9F5] border border-[#D1C9BC] hover:bg-[#2E6F25] hover:text-white text-[#1A1C19]'
                      }`}
                    >
                      Donate ₹{tier.amountInr.toLocaleString('en-IN')}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro-Interaction: Interactive Real-Time Giving Calculator */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D1C9BC] space-y-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EEEEE9] pb-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12560E]">
                    <span className="material-symbols-outlined text-[16px]">calculate</span>
                    Live Impact Calculator
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#1A1C19]">
                    Simulate Your Institutional or Personal Gift
                  </h3>
                  <p className="text-xs text-[#41493d]">
                    Adjust the contribution amount below to see the immediate field impact across court filings, organic soil beds, and tax savings.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#717a6c] font-semibold">Amount:</span>
                  <span className="font-mono text-2xl font-bold text-[#12560E] bg-[#EEEEE9] px-3.5 py-1 rounded-xl border border-[#D1C9BC]">
                    ₹{calcAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Amount Quick-Pick Chips & Range Slider */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  <span className="text-xs font-bold text-[#717a6c] uppercase shrink-0">Presets:</span>
                  {[2500, 5000, 15000, 50000, 100000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setCalcAmount(preset)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all shrink-0 ${
                        calcAmount === preset
                          ? 'bg-[#12560E] text-white shadow-xs scale-105'
                          : 'bg-[#FAF9F5] border border-[#D1C9BC] text-[#41493d] hover:bg-[#EEEEE9]'
                      }`}
                    >
                      ₹{preset.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>

                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="500"
                  value={calcAmount}
                  onChange={(e) => setCalcAmount(Number(e.target.value))}
                  className="w-full accent-[#2E6F25] cursor-pointer"
                />
              </div>

              {/* Dynamic 4-Metric Impact Projection Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#D1C9BC] space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#703d00] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">roofing</span>
                    Cool Roof Area
                  </span>
                  <div className="font-mono text-2xl font-bold text-[#1A1C19]">
                    {Math.floor(calcAmount / 15)}
                    <span className="text-xs font-sans text-[#717a6c] font-normal ml-1">sq ft</span>
                  </div>
                  <p className="text-[11px] text-[#41493d]">High-albedo solar-reflective thermal barrier</p>
                </div>

                <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#D1C9BC] space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#12560E] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">yard</span>
                    Agroecology Beds
                  </span>
                  <div className="font-mono text-2xl font-bold text-[#1A1C19]">
                    {Math.floor(calcAmount / 50)}
                    <span className="text-xs font-sans text-[#717a6c] font-normal ml-1">sq ft</span>
                  </div>
                  <p className="text-[11px] text-[#41493d]">Living organic food bed restored in jail courtyard</p>
                </div>

                <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#D1C9BC] space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#2E6F25] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">school</span>
                    Eco-Training
                  </span>
                  <div className="font-mono text-2xl font-bold text-[#1A1C19]">
                    {Math.floor(calcAmount / 250)}
                    <span className="text-xs font-sans text-[#717a6c] font-normal ml-1">hours</span>
                  </div>
                  <p className="text-[11px] text-[#41493d]">Inmate permaculture vocational certification</p>
                </div>

                <div className="p-4 bg-[#E2F3D9]/60 rounded-xl border border-[#CDE5C2] space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#12560E] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">savings</span>
                    80G Tax Exemption
                  </span>
                  <div className="font-mono text-2xl font-bold text-[#12560E]">
                    ₹{Math.round(calcAmount * 0.5).toLocaleString('en-IN')}
                  </div>
                  <p className="text-[11px] text-[#41493d]">50% direct deduction from taxable income</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#EEEEE9]">
                <span className="text-xs text-[#717a6c]">
                  All contributions receive an instantaneous Section 80G digitally signed certificate.
                </span>
                <button
                  onClick={() => {
                    setSelectedDonationTier('tier-3');
                    setDonationModalOpen(true);
                  }}
                  className="px-6 py-2.5 bg-[#2E6F25] hover:bg-[#12560E] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-xs transition-colors self-start sm:self-auto"
                >
                  Proceed with ₹{calcAmount.toLocaleString('en-IN')} Gift →
                </button>
              </div>
            </div>

            {/* Financial Allocation Hygiene Bar */}
            <div className="bg-[#EEEEE9] p-6 sm:p-8 rounded-2xl border border-[#D1C9BC] space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#1A1C19]">Where Does Your Contribution Go?</h4>
                  <p className="text-xs text-[#41493d]">
                    Audited annually by Independent Chartered Accountants under Indian Trusts Act. Hover segments to inspect.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-lg border border-[#D1C9BC] text-xs font-semibold text-[#12560E] shrink-0">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  80G &amp; 12A Certified
                </div>
              </div>

              <div className="w-full h-4 rounded-full overflow-hidden flex bg-[#D1C9BC] p-0.5">
                <div
                  onMouseEnter={() => setActiveAllocationHover('direct')}
                  onMouseLeave={() => setActiveAllocationHover(null)}
                  className={`bg-[#12560E] h-full rounded-l-full transition-all duration-200 cursor-pointer ${
                    activeAllocationHover === 'direct' ? 'brightness-125 scale-y-125' : ''
                  }`}
                  style={{ width: '82%' }}
                  title="82% Direct Program Delivery (Cool Roofs, Permaculture & Waste Interventions)"
                />
                <div
                  onMouseEnter={() => setActiveAllocationHover('monitoring')}
                  onMouseLeave={() => setActiveAllocationHover(null)}
                  className={`bg-[#7CA123] h-full transition-all duration-200 cursor-pointer ${
                    activeAllocationHover === 'monitoring' ? 'brightness-125 scale-y-125' : ''
                  }`}
                  style={{ width: '11%' }}
                  title="11% Monitoring & Agronomists"
                />
                <div
                  onMouseEnter={() => setActiveAllocationHover('governance')}
                  onMouseLeave={() => setActiveAllocationHover(null)}
                  className={`bg-[#703d00] h-full rounded-r-full transition-all duration-200 cursor-pointer ${
                    activeAllocationHover === 'governance' ? 'brightness-125 scale-y-125' : ''
                  }`}
                  style={{ width: '7%' }}
                  title="7% Compliance & Statutory Audits"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 text-xs text-[#1A1C19]">
                <div
                  className={`p-3 rounded-xl border transition-all ${
                    activeAllocationHover === 'direct'
                      ? 'bg-white border-[#12560E] shadow-sm'
                      : 'bg-transparent border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#12560E] shrink-0" />
                    <div>
                      <span className="font-bold block">82% Direct Program Delivery</span>
                      <span className="text-[11px] text-[#717a6c]">Cool-roof coatings, rainwater filters, organic seeds, compost beds</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`p-3 rounded-xl border transition-all ${
                    activeAllocationHover === 'monitoring'
                      ? 'bg-white border-[#7CA123] shadow-sm'
                      : 'bg-transparent border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#7CA123] shrink-0" />
                    <div>
                      <span className="font-bold block">11% Capacity &amp; Field Monitoring</span>
                      <span className="text-[11px] text-[#717a6c]">Agronomists, psychological counselors, research SOPs</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`p-3 rounded-xl border transition-all ${
                    activeAllocationHover === 'governance'
                      ? 'bg-white border-[#703d00] shadow-sm'
                      : 'bg-transparent border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#703d00] shrink-0" />
                    <div>
                      <span className="font-bold block">7% Compliance &amp; Governance</span>
                      <span className="text-[11px] text-[#717a6c]">Statutory filings, trust audits, transparent portal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Statutory Bank Transfer Details Card */}
            <div className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D1C9BC] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-[#12560E] uppercase tracking-wider block">
                    Institutional &amp; Wire Transfers
                  </span>
                  <h4 className="font-serif text-xl font-semibold text-[#1A1C19]">
                    Direct Statutory Trust Bank Details
                  </h4>
                </div>
                <span className="text-[11px] text-[#717a6c] bg-[#FAF9F5] px-3 py-1 rounded-full border border-[#D1C9BC] shrink-0">
                  Zero Gateway Fees • 100% Retained
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 bg-[#FAF9F5] rounded-xl border border-[#D1C9BC] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#717a6c] uppercase font-bold block">A/C Number</span>
                    <span className="font-mono font-bold text-sm text-[#1A1C19]">38491029482</span>
                  </div>
                  <button
                    onClick={() => handleCopyBank('38491029482', 'acc')}
                    className="px-2.5 py-1 bg-white border border-[#D1C9BC] hover:border-[#12560E] rounded-lg text-xs font-semibold text-[#12560E] flex items-center gap-1 transition-all"
                  >
                    <span className="material-symbols-outlined text-[13px]">
                      {copiedBankField === 'acc' ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedBankField === 'acc' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div className="p-3.5 bg-[#FAF9F5] rounded-xl border border-[#D1C9BC] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#717a6c] uppercase font-bold block">IFSC Code</span>
                    <span className="font-mono font-bold text-sm text-[#1A1C19]">SBIN0001234</span>
                  </div>
                  <button
                    onClick={() => handleCopyBank('SBIN0001234', 'ifsc')}
                    className="px-2.5 py-1 bg-white border border-[#D1C9BC] hover:border-[#12560E] rounded-lg text-xs font-semibold text-[#12560E] flex items-center gap-1 transition-all"
                  >
                    <span className="material-symbols-outlined text-[13px]">
                      {copiedBankField === 'ifsc' ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedBankField === 'ifsc' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div className="p-3.5 bg-[#FAF9F5] rounded-xl border border-[#D1C9BC] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#717a6c] uppercase font-bold block">Trust UPI ID</span>
                    <span className="font-mono font-bold text-sm text-[#1A1C19]">tycia@sbi</span>
                  </div>
                  <button
                    onClick={() => handleCopyBank('tycia@sbi', 'upi')}
                    className="px-2.5 py-1 bg-white border border-[#D1C9BC] hover:border-[#12560E] rounded-lg text-xs font-semibold text-[#12560E] flex items-center gap-1 transition-all"
                  >
                    <span className="material-symbols-outlined text-[13px]">
                      {copiedBankField === 'upi' ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedBankField === 'upi' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 10. CIVIC ENGAGEMENT & DUAL CTA BANNER                   */}
        {/* ========================================================= */}
        <section id="partner" className="w-full bg-[#2E6F25] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B9F079] block">
              Join Us • Turn Your Concern Into Action
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              From Awareness to Action: Be a Part of the Change.
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
              Eco-Reform uses interactive learning, practical demonstrations and participatory activities to make climate action understandable and actionable within prison settings.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <button
                onClick={() => setDonationModalOpen(true)}
                className="px-8 py-3.5 rounded-xl bg-white text-[#12560E] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FAF9F5] active:scale-[0.98] transition-all shadow-md"
              >
                Support Project Eco-Reform (80G)
              </button>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="px-8 py-3.5 rounded-xl bg-[#12560E] text-white border border-white/30 font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-black/30 active:scale-[0.98] transition-all inline-flex items-center gap-1.5"
              >
                Contact Secretariat
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ========================================================= */}
      {/* 11. STREAMLINED FOOTER                                    */}
      {/* ========================================================= */}
      <footer className="w-full bg-[#F4F4EF] text-[#41493d] border-t border-[#D1C9BC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            
            {/* Column 1: Organization & Registration */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-2">
                <img
                  src="/logo.png"
                  alt="Eco-Reform"
                  className="h-10 w-auto object-contain"
                />
                <div className="text-xs font-semibold text-[#12560E] uppercase tracking-wider">
                  TYCIA Foundation • Project Eco-Reform
                </div>
              </div>
              
              <p className="text-xs text-[#41493d] max-w-sm leading-relaxed">
                Eco-Reform is TYCIA Foundation's flagship climate-resilience programme transforming prisons into
                climate-adaptive, sustainable and rehabilitative spaces across India.
              </p>

              <div className="space-y-1 text-xs text-[#717a6c]">
                <div>Registered Trust ID: <strong className="text-[#1A1C19]">{CONTACT_INFO.regId}</strong></div>
                <div>Established {CONTACT_INFO.estYear} under Indian Trusts Act, 1882</div>
                <div>Tax Exemption: {CONTACT_INFO.taxExemption}</div>
              </div>
            </div>

            {/* Column 2: Quick Jump Links */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-bold text-[#1A1C19] uppercase tracking-wider">
                Landing Page Navigation
              </div>
              <ul className="space-y-2 text-xs">
                <li><a href="#hero" className="hover:text-[#12560E] transition-colors">Mission Overview</a></li>
                <li><a href="#crisis" className="hover:text-[#12560E] transition-colors">The Custodial Climate Crisis</a></li>
                <li><a href="#eco-reform" className="hover:text-[#12560E] transition-colors">Eco-Reform Model</a></li>
                <li><a href="#facility-blueprint" className="hover:text-[#12560E] transition-colors">Nuh Pilot Schematic Map</a></li>
                <li><a href="#climate-actions" className="hover:text-[#12560E] transition-colors">30 Climate Actions Audit</a></li>
                <li><a href="#pathways" className="hover:text-[#12560E] transition-colors">Reentry Pathways &amp; Pillars</a></li>
                <li><a href="#impact" className="hover:text-[#12560E] transition-colors">Impact Proof</a></li>
                <li><a href="#partners" className="hover:text-[#12560E] transition-colors">Our Partners</a></li>
                <li><a href="#donate" className="hover:text-[#12560E] transition-colors">80G Giving Tiers</a></li>
              </ul>
            </div>

            {/* Column 3: Newsletter Dispatch */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-bold text-[#1A1C19] uppercase tracking-wider">
                Quarterly Dispatch
              </div>
              <p className="text-xs text-[#41493d] leading-relaxed">
                Receive quarterly civic reform briefs, constitutional jurisprudence, and agro-ecology field notes.
              </p>

              {!newsletterSubscribed ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsletterEmail) setNewsletterSubscribed(true);
                  }}
                  className="space-y-2"
                >
                  <div className="flex">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter institutional email"
                      className="w-full px-3 py-2 bg-white border border-[#D1C9BC] rounded-l-lg text-xs text-[#1A1C19] focus:outline-none focus:ring-1 focus:ring-[#2E6F25]"
                    />
                    <button
                      type="submit"
                      className="bg-[#2E6F25] hover:bg-[#12560E] text-white px-4 py-2 rounded-r-lg text-xs font-semibold transition-colors shrink-0"
                    >
                      Join
                    </button>
                  </div>
                  <span className="text-[10px] text-[#717a6c] block">
                    Zero spam. Strictly policy and field updates.
                  </span>
                </form>
              ) : (
                <div className="p-3 bg-white rounded-lg border border-[#D1C9BC] text-xs text-[#12560E] font-medium flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  Subscribed to dispatch ({newsletterEmail})
                </div>
              )}

              <div className="pt-2 text-xs text-[#717a6c]">
                Contact: <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#12560E] hover:underline">{CONTACT_INFO.email}</a> • {CONTACT_INFO.phone}
              </div>
            </div>

          </div>

          {/* Bottom Copyright Strip */}
          <div className="pt-6 border-t border-[#D1C9BC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#717a6c]">
            <div>
              © 2015–2026 TYCIA Foundation (Turn Your Concern Into Action). Project Eco-Reform. Reg. {CONTACT_INFO.regId}. All institutional rights reserved.
            </div>

            <div className="flex items-center gap-4 text-xs">
              <button
                onClick={() => setDonationModalOpen(true)}
                className="hover:text-[#1A1C19] transition-colors font-medium"
              >
                80G Compliance
              </button>
              <button
                onClick={() => setBrochureModalOpen(true)}
                className="hover:text-[#1A1C19] transition-colors font-medium"
              >
                Authentic Brochure
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Global Interactive Modals */}
      <DonationModal
        isOpen={donationModalOpen}
        onClose={() => setDonationModalOpen(false)}
        defaultTierId={selectedDonationTier}
      />

      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        onExploreActions={() => {
          const el = document.getElementById('climate-actions');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenDonate={() => setDonationModalOpen(true)}
      />

      {/* 1. Global High-Resolution Photo Lightbox Modal with Pan & Zoom */}
      {activePhotoLightbox && (
        <div
          onClick={() => {
            setActivePhotoLightbox(null);
            setLightboxZoom(1);
          }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1A1C19] border border-white/20 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
          >
            {/* Top Toolbar: Zoom Controls & Close Button */}
            <div className="bg-[#222521] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-white z-10">
              {/* Zoom Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setLightboxZoom((prev) => Math.min(3.5, Number((prev + 0.25).toFixed(2))))}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  title="Zoom In (+)"
                >
                  <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                </button>
                <span className="text-xs font-mono font-semibold px-2 text-[#B9F079] bg-black/40 rounded py-1 min-w-[48px] text-center">
                  {Math.round(lightboxZoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxZoom((prev) => Math.max(0.75, Number((prev - 0.25).toFixed(2))))}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  title="Zoom Out (-)"
                >
                  <span className="material-symbols-outlined text-[20px]">zoom_out</span>
                </button>
                {lightboxZoom !== 1 && (
                  <button
                    type="button"
                    onClick={() => setLightboxZoom(1)}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#B9F079] transition-colors"
                    title="Reset to 100%"
                  >
                    Reset
                  </button>
                )}
                <span className="hidden sm:inline-block text-[11px] text-white/50 pl-2">
                  Use controls to zoom &amp; inspect details
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => {
                  setActivePhotoLightbox(null);
                  setLightboxZoom(1);
                }}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                title="Close (ESC)"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Scrollable Viewport with Scaled Image */}
            <div className="w-full flex-1 min-h-[360px] max-h-[70vh] overflow-auto flex items-center justify-center bg-black/95 p-3">
              <img
                src={activePhotoLightbox.url}
                alt={activePhotoLightbox.caption}
                style={{
                  transform: `scale(${lightboxZoom})`,
                  transformOrigin: 'center center',
                }}
                className="max-h-[66vh] w-auto max-w-full object-contain transition-transform duration-200 ease-out select-none shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Footer with Caption & Institutional Badge */}
            <div className="p-4 sm:p-5 text-white bg-[#222521] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-3xl">
                {activePhotoLightbox.caption}
              </p>
              <span className="text-[10px] font-mono text-[#B9F079] bg-[#12560E] px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 self-start sm:self-auto">
                Ground Reality Verified
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Interactive 5-Step Methodology Technical Blueprint Modal */}
      {selectedMethodologyStep && (
        <div
          onClick={() => setSelectedMethodologyStep(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#FAF9F5] border border-[#D1C9BC] rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 space-y-0"
          >
            {/* Top-Right X (Close) Button */}
            <button
              type="button"
              onClick={() => setSelectedMethodologyStep(null)}
              aria-label="Close"
              title="Close modal"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white hover:bg-[#FAF9F5] text-[#1A1C19] border border-[#D1C9BC] shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
            >
              <span className="material-symbols-outlined text-[20px] select-none">close</span>
            </button>

            {/* Header */}
            <div className="bg-[#EEEEE9] p-5 sm:p-6 pr-16 border-b border-[#D1C9BC] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E6F25] to-[#12560E] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  0{selectedMethodologyStep.step}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#703d00] font-bold block">
                    Execution Window: {selectedMethodologyStep.timeline}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1A1C19]">
                    {selectedMethodologyStep.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5 text-xs text-[#41493d]">
              <div>
                <span className="text-[11px] font-bold text-[#12560E] uppercase tracking-wider block mb-1">
                  Phase Objective
                </span>
                <p className="text-sm leading-relaxed text-[#1A1C19]">
                  {selectedMethodologyStep.desc}
                </p>
              </div>

              {/* Key Technical Deliverables */}
              <div className="bg-white p-4 rounded-xl border border-[#D1C9BC] space-y-2.5">
                <span className="text-[11px] font-bold text-[#1A1C19] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#2E6F25]">verified</span>
                  Key Field Deliverables
                </span>
                <ul className="space-y-1.5 pt-1">
                  {selectedMethodologyStep.keyDeliverables?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#1A1C19]">
                      <span className="material-symbols-outlined text-[15px] text-[#12560E] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Institutional Prison Security Compliance */}
              <div className="bg-[#FAF9F5] p-3.5 rounded-xl border border-[#D1C9BC] space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#703d00] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">shield</span>
                  Custodial Security Protocol
                </span>
                <p className="text-[11px] text-[#41493d] leading-relaxed">
                  {selectedMethodologyStep.securityProtocol}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#EEEEE9]">
                <div className="text-[11px] text-[#717a6c]">
                  Official Outcome: <strong className="text-[#12560E]">{selectedMethodologyStep.output}</strong>
                </div>
                <button
                  onClick={() => setSelectedMethodologyStep(null)}
                  className="px-4 py-2 bg-[#2E6F25] hover:bg-[#12560E] text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
