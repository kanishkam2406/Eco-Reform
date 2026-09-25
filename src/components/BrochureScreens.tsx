import React, { useState } from 'react';
import {
  BROCHURE_PHOTOS,
  BROCHURE_IMPACT_METRICS,
  BROCHURE_APPROACH_PILLARS,
  CHALLENGES,
  FOCUS_AREAS_5,
  CONTACT_INFO,
} from '../data/brochureData';

interface BrochureScreensProps {
  onExploreActions?: () => void;
  onOpenVolunteer?: () => void;
  onOpenDonate?: () => void;
  onClose?: () => void;
}

export const BrochureScreens: React.FC<BrochureScreensProps> = ({
  onExploreActions,
  onOpenVolunteer,
  onOpenDonate,
  onClose,
}) => {
  const [activeScreen, setActiveScreen] = useState<'screen1' | 'screen2' | 'both'>('screen1');
  const [viewFormat, setViewFormat] = useState<'authentic' | 'digital'>('authentic');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [fullPageModal, setFullPageModal] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#182613] text-[#FAF9F5] py-6 px-3 sm:px-6 lg:px-8 rounded-3xl shadow-2xl border border-[#2E6F25]/40 overflow-hidden">
      {/* Top Header & Navigation Bar */}
      <div className="max-w-7xl mx-auto mb-6 bg-[#22351B] p-4 sm:p-5 rounded-2xl border border-[#3E5C2D] shadow-lg flex flex-wrap items-center justify-between gap-4">
        {/* Title & Badge */}
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#7CA123] text-[#142304] flex items-center justify-center font-bold shadow-md shrink-0">
            <span className="material-symbols-outlined text-[24px]">menu_book</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                Official Eco-Reform Publication
              </h2>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono uppercase bg-[#7CA123]/20 text-[#A6CE39] border border-[#7CA123]/40 px-2 py-0.5 rounded-full font-semibold">
                Authentic PDF Field Copy
              </span>
            </div>
            <p className="text-xs text-[#C5D6B8] mt-0.5">
              Direct high-resolution scan • Nuh District Jail, Mewat, Haryana
            </p>
          </div>
        </div>

        {/* Controls Ribbon */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Format Mode: Authentic PDF Scan vs Interactive Breakdown */}
          <div className="inline-flex p-1 bg-[#142304] rounded-xl border border-[#3E5C2D]">
            <button
              onClick={() => setViewFormat('authentic')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                viewFormat === 'authentic'
                  ? 'bg-[#7CA123] text-[#142304] shadow-sm font-bold'
                  : 'text-[#C5D6B8] hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">picture_as_pdf</span>
              <span>Authentic PDF</span>
            </button>
            <button
              onClick={() => setViewFormat('digital')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                viewFormat === 'digital'
                  ? 'bg-[#7CA123] text-[#142304] shadow-sm font-bold'
                  : 'text-[#C5D6B8] hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">splitscreen</span>
              <span>Digital Reader</span>
            </button>
          </div>

          {/* Page Switcher */}
          <div className="inline-flex p-1 bg-[#142304] rounded-xl border border-[#3E5C2D]">
            <button
              onClick={() => setActiveScreen('screen1')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeScreen === 'screen1'
                  ? 'bg-[#2E6F25] text-white shadow-sm'
                  : 'text-[#C5D6B8] hover:text-white'
              }`}
            >
              Page 1 (Impact &amp; Foundation)
            </button>
            <button
              onClick={() => setActiveScreen('screen2')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeScreen === 'screen2'
                  ? 'bg-[#2E6F25] text-white shadow-sm'
                  : 'text-[#C5D6B8] hover:text-white'
              }`}
            >
              Page 2 (Challenges &amp; 30 Actions)
            </button>
            <button
              onClick={() => setActiveScreen('both')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all hidden md:inline-block ${
                activeScreen === 'both'
                  ? 'bg-[#2E6F25] text-white shadow-sm'
                  : 'text-[#C5D6B8] hover:text-white'
              }`}
            >
              Side-by-Side Spread
            </button>
          </div>

          {/* Zoom controls */}
          <div className="hidden lg:flex items-center gap-1 bg-[#142304] px-2 py-1 rounded-xl border border-[#3E5C2D]">
            <button
              onClick={() => setZoomLevel((z) => Math.max(70, z - 10))}
              className="p-1 text-[#C5D6B8] hover:text-white transition-colors"
              title="Zoom out"
            >
              <span className="material-symbols-outlined text-[18px]">zoom_out</span>
            </button>
            <span className="text-xs font-mono text-[#A6CE39] px-1 font-semibold">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
              className="p-1 text-[#C5D6B8] hover:text-white transition-colors"
              title="Zoom in"
            >
              <span className="material-symbols-outlined text-[18px]">zoom_in</span>
            </button>
            {zoomLevel !== 100 && (
              <button
                onClick={() => setZoomLevel(100)}
                className="text-[10px] uppercase font-bold text-[#A6CE39] px-1 hover:underline ml-1"
                title="Reset zoom"
              >
                Reset
              </button>
            )}
          </div>

          {/* PDF Download Button */}
          <a
            href={BROCHURE_PHOTOS.pdfDocument}
            download="eco-reform-brochure.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 text-xs font-semibold bg-[#2E6F25] text-white hover:bg-[#3E8532] rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
            title="Download the full authentic PDF publication"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>Download PDF</span>
          </a>

          {/* Action SOP Audit Button */}
          {onExploreActions && (
            <button
              onClick={onExploreActions}
              className="px-3 py-1.5 text-xs font-semibold bg-[#7CA123] text-[#142304] hover:bg-[#8EC225] rounded-xl transition-colors flex items-center gap-1 shadow-sm font-bold"
            >
              <span className="material-symbols-outlined text-[16px]">checklist</span>
              <span>30 Actions Matrix</span>
            </button>
          )}

          {/* Close button */}
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center"
              title="Close publication preview"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          )}
        </div>
      </div>

      {/* ============================================================== */}
      {/* MODE 1: AUTHENTIC PDF PAGES VIEW (Direct High-Res Rendering)   */}
      {/* ============================================================== */}
      {viewFormat === 'authentic' && (
        <div
          className="max-w-7xl mx-auto transition-transform origin-top overflow-x-auto pb-4"
          style={{ transform: zoomLevel !== 100 ? `scale(${zoomLevel / 100})` : 'none' }}
        >
          <div
            className={`space-y-10 ${
              activeScreen === 'both' ? 'grid grid-cols-1 xl:grid-cols-2 xl:gap-8 xl:space-y-0' : ''
            }`}
          >
            {/* ----------------- PAGE 1: IMPACT & FOUNDATION ----------------- */}
            {(activeScreen === 'screen1' || activeScreen === 'both') && (
              <div className="bg-[#0E1A0B] rounded-3xl border-2 border-[#3E5C2D] p-3 sm:p-5 shadow-2xl relative group">
                {/* Page Meta Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2E6F25]/40 text-xs text-[#A6CE39]">
                  <div className="flex items-center gap-2 font-mono font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7CA123] animate-pulse" />
                    <span>PAGE 01 // COVER, IMPACT SO FAR &amp; PARTNERS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setFullPageModal(BROCHURE_PHOTOS.page1)}
                      className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold flex items-center gap-1 transition-all"
                      title="Inspect full screen"
                    >
                      <span className="material-symbols-outlined text-[15px]">fullscreen</span>
                      <span>Full View</span>
                    </button>
                    {activeScreen !== 'both' && (
                      <button
                        onClick={() => setActiveScreen('screen2')}
                        className="text-xs text-[#C5D6B8] hover:text-[#A6CE39] font-semibold flex items-center gap-0.5"
                      >
                        Next: Page 2 →
                      </button>
                    )}
                  </div>
                </div>

                {/* The Rendered PDF Page Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B1508] cursor-zoom-in">
                  <img
                    src={BROCHURE_PHOTOS.page1}
                    alt="Eco-Reform Official Brochure Page 1: Towards Climate-Resilient Adaptive Prisons, Impact So Far, TYCIA Foundation, Supported By"
                    className="w-full h-auto block select-none"
                    onClick={() => setFullPageModal(BROCHURE_PHOTOS.page1)}
                  />
                </div>

                {/* Quick Highlight Strips Below Page 1 */}
                <div className="mt-4 pt-3 border-t border-[#2E6F25]/40 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <div className="bg-[#182613] p-2.5 rounded-xl border border-[#3E5C2D]/50">
                    <div className="font-mono text-base font-bold text-[#A6CE39]">2,069 m²</div>
                    <div className="text-[10px] text-[#C5D6B8] uppercase">Land Developed</div>
                  </div>
                  <div className="bg-[#182613] p-2.5 rounded-xl border border-[#3E5C2D]/50">
                    <div className="font-mono text-base font-bold text-[#A6CE39]">20 Beds</div>
                    <div className="text-[10px] text-[#C5D6B8] uppercase">Raised Permaculture</div>
                  </div>
                  <div className="bg-[#182613] p-2.5 rounded-xl border border-[#3E5C2D]/50">
                    <div className="font-mono text-base font-bold text-[#A6CE39]">160 Tanks</div>
                    <div className="text-[10px] text-[#C5D6B8] uppercase">Protected Water</div>
                  </div>
                  <div className="bg-[#182613] p-2.5 rounded-xl border border-[#3E5C2D]/50">
                    <div className="font-mono text-base font-bold text-[#A6CE39]">120 Inmates</div>
                    <div className="text-[10px] text-[#C5D6B8] uppercase">Certified Trained</div>
                  </div>
                </div>
              </div>
            )}

            {/* ----------------- PAGE 2: CHALLENGES & 30 ACTIONS ----------------- */}
            {(activeScreen === 'screen2' || activeScreen === 'both') && (
              <div className="bg-[#0E1A0B] rounded-3xl border-2 border-[#3E5C2D] p-3 sm:p-5 shadow-2xl relative group">
                {/* Page Meta Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2E6F25]/40 text-xs text-[#A6CE39]">
                  <div className="flex items-center gap-2 font-mono font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7CA123] animate-pulse" />
                    <span>PAGE 02 // 6 CHALLENGES, 5 FOCUS AREAS &amp; OUR APPROACH</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setFullPageModal(BROCHURE_PHOTOS.page2)}
                      className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold flex items-center gap-1 transition-all"
                      title="Inspect full screen"
                    >
                      <span className="material-symbols-outlined text-[15px]">fullscreen</span>
                      <span>Full View</span>
                    </button>
                    {activeScreen !== 'both' && (
                      <button
                        onClick={() => setActiveScreen('screen1')}
                        className="text-xs text-[#C5D6B8] hover:text-[#A6CE39] font-semibold flex items-center gap-0.5"
                      >
                        ← Back to Page 1
                      </button>
                    )}
                  </div>
                </div>

                {/* The Rendered PDF Page Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B1508] cursor-zoom-in">
                  <img
                    src={BROCHURE_PHOTOS.page2}
                    alt="Eco-Reform Official Brochure Page 2: Why Climate-Adaptive Prisons, Key Challenges, 5 Categories 30 Actions, Our Approach"
                    className="w-full h-auto block select-none"
                    onClick={() => setFullPageModal(BROCHURE_PHOTOS.page2)}
                  />
                </div>

                {/* Quick Highlight Strips Below Page 2 */}
                <div className="mt-4 pt-3 border-t border-[#2E6F25]/40 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <div className="bg-[#182613] p-2.5 rounded-xl border border-[#3E5C2D]/50">
                    <div className="font-mono text-base font-bold text-[#A6CE39]">6 Challenges</div>
                    <div className="text-[10px] text-[#C5D6B8] uppercase">Systemic Hazards</div>
                  </div>
                  <div className="bg-[#182613] p-2.5 rounded-xl border border-[#3E5C2D]/50">
                    <div className="font-mono text-base font-bold text-[#A6CE39]">5 Domains</div>
                    <div className="text-[10px] text-[#C5D6B8] uppercase">Custodial Focus</div>
                  </div>
                  <div className="bg-[#182613] p-2.5 rounded-xl border border-[#3E5C2D]/50">
                    <div className="font-mono text-base font-bold text-[#A6CE39]">30 Actions</div>
                    <div className="text-[10px] text-[#C5D6B8] uppercase">Tested Interventions</div>
                  </div>
                  <div className="bg-[#182613] p-2.5 rounded-xl border border-[#3E5C2D]/50">
                    <div className="font-mono text-base font-bold text-[#A6CE39]">4 Pillars</div>
                    <div className="text-[10px] text-[#C5D6B8] uppercase">Research-to-Action</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODE 2: INTERACTIVE DIGITAL READER (Structured Content)        */}
      {/* ============================================================== */}
      {viewFormat === 'digital' && (
        <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-200">
          {/* TAB 1 CONTENT: PAGE 1 BREAKDOWN */}
          {(activeScreen === 'screen1' || activeScreen === 'both') && (
            <div className="bg-[#1A2D15] rounded-3xl border-2 border-[#3E5C2D] p-6 sm:p-8 space-y-8 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#3E5C2D] text-xs font-mono text-[#A6CE39]">
                <span>DIGITAL TRANSCRIPTION • PAGE 1</span>
                <span>NUH DISTRICT JAIL PILOT</span>
              </div>

              {/* 3-Column Layout Matching Page 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Column 1: Cohort Photo & Eco-Reform Mission */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-[#3E5C2D] bg-[#0E1A0B] aspect-[4/3] relative">
                    <img
                      src={BROCHURE_PHOTOS.cohort}
                      alt="Trained cohort of inmates and correctional officers at certification ceremony"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-xs text-white">
                      Field certification cohort at Nuh District Jail
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="inline-block bg-[#7CA123] text-[#142304] px-3.5 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xs">
                      ECO-REFORM
                    </span>
                    <p className="text-xs sm:text-sm text-[#E2EBDC] leading-relaxed">
                      <strong>Eco-Reform</strong> is TYCIA Foundation’s flagship climate-resilience programme transforming prisons into climate-adaptive, sustainable and rehabilitative spaces.
                    </p>
                    <p className="text-xs sm:text-sm text-[#C5D6B8] leading-relaxed">
                      The programme takes a <strong>30-step approach</strong> to identify and address the overall systemic and geographical challenges faced by prisons, with the aim of creating practical and sustainable solutions.
                    </p>
                    <p className="text-xs sm:text-sm text-[#C5D6B8] leading-relaxed">
                      We have started this approach with <strong>Nuh District Jail, Haryana</strong>, a North Indian prison, focusing on practical solutions for heat, water, waste, infrastructure and environmental resilience, with the aim of developing a model that can be replicated across India.
                    </p>
                  </div>
                </div>

                {/* Column 2: Impact So Far, Team Photo & TYCIA Foundation Contact */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Impact So Far Grid */}
                  <div className="space-y-3">
                    <span className="inline-block bg-[#7CA123] text-[#142304] px-3.5 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xs">
                      IMPACT SO FAR
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      {BROCHURE_IMPACT_METRICS.map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-[#243B1D] p-3 rounded-xl border border-[#3E5C2D] flex items-start gap-2.5"
                        >
                          <span className="material-symbols-outlined text-[20px] text-[#A6CE39] shrink-0 mt-0.5">
                            {metric.icon}
                          </span>
                          <div>
                            <div className="font-mono text-sm sm:text-base font-bold text-white leading-tight">
                              {metric.value}
                            </div>
                            <div className="text-[10px] text-[#C5D6B8] leading-snug mt-0.5">
                              {metric.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Team Photo */}
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-[#3E5C2D] bg-[#0E1A0B] aspect-[16/9] relative">
                    <img
                      src={BROCHURE_PHOTOS.team}
                      alt="TYCIA Foundation field coordinators and jail officers"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 text-xs text-white">
                      Joint institutional leadership team
                    </div>
                  </div>

                  {/* TYCIA Foundation & Supported By */}
                  <div className="bg-[#243B1D] p-4 rounded-2xl border border-[#3E5C2D] space-y-3 text-xs">
                    <div className="font-serif text-base font-bold text-white">
                      TYCIA FOUNDATION
                    </div>
                    <div className="text-[#C5D6B8] space-y-1">
                      <div>N-33, Second Floor, Green Park Extension, New Delhi.</div>
                      <div>
                        Email:{' '}
                        <a href="mailto:tyciafoundation@gmail.com" className="text-[#A6CE39] hover:underline">
                          tyciafoundation@gmail.com
                        </a>
                      </div>
                      <div className="pt-1 font-semibold text-white">
                        Karan Kumar | Founder • +91 880573488
                      </div>
                      <div>
                        Email:{' '}
                        <a href="mailto:karanpsc@gmail.com" className="text-[#A6CE39] hover:underline">
                          karanpsc@gmail.com
                        </a>
                      </div>
                      <div>
                        Website:{' '}
                        <a
                          href="https://www.eco-reform.in"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#A6CE39] hover:underline font-mono"
                        >
                          www.eco-reform.in
                        </a>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#3E5C2D]">
                      <span className="inline-block bg-[#7CA123] text-[#142304] px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-2">
                        SUPPORTED BY
                      </span>
                      <div className="flex items-center gap-3 pt-1">
                        <div className="w-9 h-9 rounded-full bg-[#1A365D] text-[#E2E8F0] flex items-center justify-center font-serif text-[9px] font-bold border border-white/20">
                          H.P.
                        </div>
                        <div className="w-9 h-9 rounded-lg bg-white p-1 flex items-center justify-center">
                          <img src="/rainmatter-foundation-logo.png" alt="Rainmatter" className="max-h-full" />
                        </div>
                        <div className="w-9 h-9 rounded-lg bg-white p-1 flex items-center justify-center">
                          <img src={BROCHURE_PHOTOS.fertileBeeghasLogo} alt="Fertile Beeghas" className="max-h-full" />
                        </div>
                        <span className="text-[11px] text-[#C5D6B8] font-medium">
                          Haryana Prisons • Rainmatter Foundation • Fertile Beeghas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Brand Logo, Concern Into Action & Hands-on Soil Photo */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Brand Block */}
                  <div className="bg-[#243B1D] p-5 rounded-2xl border border-[#3E5C2D] text-center space-y-2">
                    <div className="font-extrabold text-3xl tracking-tight text-[#A6CE39] flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[32px]">eco</span>
                      <span>eCO-REFORM</span>
                    </div>
                    <div className="text-[10px] font-mono font-bold tracking-widest text-[#E2EBDC] uppercase">
                      TOWARDS CLIMATE-RESILIENT ADAPTIVE PRISONS : PRIORITISING PRISONER WELLBEING
                    </div>
                    <p className="text-xs italic text-[#C5D6B8]">
                      Towards Climate-Resilient Adaptive Prisons • Prioritising Prisoner Wellbeing
                    </p>
                  </div>

                  {/* Stamp: Turn Your Concern Into Action */}
                  <div className="bg-black/40 border-2 border-[#7CA123] p-5 rounded-2xl text-white font-mono space-y-1">
                    <div className="text-2xl font-black leading-tight tracking-tight">
                      TURN<br />
                      YOUR<br />
                      CONCERN<br />
                      INTO<br />
                      ACTION
                    </div>
                    <div className="text-right text-[#A6CE39] font-bold text-sm tracking-widest pt-2">
                      TYCIA
                    </div>
                  </div>

                  {/* Soil Bed Photo */}
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-[#3E5C2D] bg-[#0E1A0B] aspect-[4/3] relative">
                    <img
                      src={BROCHURE_PHOTOS.planting}
                      alt="Hands-on soil restoration and permaculture bed preparation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-xs text-white">
                      Hands-on soil restoration &amp; raised cultivation beds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2 CONTENT: PAGE 2 BREAKDOWN */}
          {(activeScreen === 'screen2' || activeScreen === 'both') && (
            <div className="bg-[#1A2D15] rounded-3xl border-2 border-[#3E5C2D] p-6 sm:p-8 space-y-8 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#3E5C2D] text-xs font-mono text-[#A6CE39]">
                <span>DIGITAL TRANSCRIPTION • PAGE 2</span>
                <span>CHALLENGES, 30 ACTIONS &amp; 4-PILLAR APPROACH</span>
              </div>

              {/* 3-Column Layout Matching Page 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Column 1: Why Climate-Adaptive Prisons & Key Challenges */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="space-y-3">
                    <span className="inline-block bg-[#7CA123] text-[#142304] px-3.5 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xs">
                      WHY CLIMATE-ADAPTIVE PRISONS?
                    </span>
                    <p className="text-xs sm:text-sm text-[#E2EBDC] leading-relaxed">
                      Prisons can be particularly vulnerable to climate-related risks because of their enclosed infrastructure, high population density and limited access to adaptive resources.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="inline-block bg-[#7CA123] text-[#142304] px-3.5 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xs">
                      KEY CHALLENGES INCLUDE:
                    </span>
                    <p className="text-xs text-[#C5D6B8]">
                      These challenges shape everyday living conditions, access to basic needs, and overall wellbeing:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {CHALLENGES.map((ch) => (
                        <div
                          key={ch.id}
                          className="bg-[#243B1D] p-3 rounded-xl border border-[#3E5C2D] flex items-start gap-2.5"
                        >
                          <span
                            className="material-symbols-outlined text-[20px] shrink-0 mt-0.5"
                            style={{ color: ch.color }}
                          >
                            {ch.icon}
                          </span>
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-tight text-white block">
                              {ch.title}
                            </span>
                            <span className="text-[10px] text-[#C5D6B8] line-clamp-2 mt-0.5 block leading-snug">
                              {ch.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2: Courtyard Photo & Our Focus Areas (5 Categories 30 Actions) */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-[#3E5C2D] bg-[#0E1A0B] aspect-[4/3] relative">
                    <img
                      src={BROCHURE_PHOTOS.courtyard}
                      alt="Courtyard vegetable beds along terracotta correctional barracks"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-xs text-white">
                      Permaculture agroecology plot inside Nuh District Jail
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="inline-block bg-[#7CA123] text-[#142304] px-3.5 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xs">
                        OUR FOCUS AREAS
                      </span>
                      <div className="font-mono text-xs font-bold text-[#A6CE39] mt-1.5 uppercase">
                        5 CATEGORIES • 30 ACTIONS FOR CLIMATE-RESILIENT PRISONS
                      </div>
                    </div>

                    <div className="space-y-2.5 text-xs text-[#E2EBDC]">
                      {FOCUS_AREAS_5.map((area, idx) => (
                        <div
                          key={area.id}
                          className="bg-[#243B1D] p-3 rounded-xl border border-[#3E5C2D] space-y-1"
                        >
                          <div className="font-bold text-white flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-[#7CA123]/20 text-[#A6CE39] text-[10px] font-mono flex items-center justify-center">
                              0{idx + 1}
                            </span>
                            <span>{area.title.toUpperCase()}</span>
                          </div>
                          <p className="text-[11px] text-[#C5D6B8] leading-relaxed pl-7">
                            {area.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {onExploreActions && (
                      <button
                        onClick={onExploreActions}
                        className="w-full py-2.5 bg-[#7CA123] hover:bg-[#8EC225] text-[#142304] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 mt-2"
                      >
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        Inspect Full 30 Actions &amp; SOPs
                      </button>
                    )}
                  </div>
                </div>

                {/* Column 3: Our Approach (4 Pillars in Quotation Box) */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="space-y-3">
                    <span className="inline-block bg-[#7CA123] text-[#142304] px-3.5 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xs">
                      OUR APPROACH
                    </span>
                    <p className="text-xs sm:text-sm text-[#E2EBDC] leading-relaxed">
                      Eco-Reform follows a <strong>research-to-action approach</strong>, working with prison administrations, prison staff, incarcerated individuals and other stakeholders to identify challenges and develop practical solutions.
                    </p>
                  </div>

                  {/* Large Green Quotation Container with 4 Pillars */}
                  <div className="bg-[#7CA123] text-[#142304] p-6 rounded-3xl shadow-xl space-y-4 relative">
                    <div className="font-serif text-5xl font-black leading-none select-none opacity-80">
                      “
                    </div>

                    <div className="space-y-4">
                      {BROCHURE_APPROACH_PILLARS.map((pillar) => (
                        <div
                          key={pillar.id}
                          className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#2E6F25]/20 shadow-xs flex items-start gap-3"
                        >
                          <div className="w-8 h-8 rounded-xl bg-[#2E6F25] text-white flex items-center justify-center shrink-0 shadow-xs">
                            <span className="material-symbols-outlined text-[18px]">
                              {pillar.icon}
                            </span>
                          </div>
                          <div>
                            <div className="font-bold text-xs uppercase tracking-tight text-[#142304]">
                              {pillar.title}
                            </div>
                            <div className="text-[11px] text-[#33462A] leading-snug mt-0.5 font-medium">
                              {pillar.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="font-serif text-5xl font-black leading-none select-none opacity-80 text-right">
                      ”
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Full Page Zoom Modal */}
      {fullPageModal && (
        <div
          onClick={() => setFullPageModal(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-6xl w-full max-h-[95vh] flex flex-col bg-[#142304] rounded-2xl border border-white/20 overflow-hidden shadow-2xl"
          >
            <div className="p-3 bg-[#1F3316] border-b border-white/10 flex items-center justify-between text-xs text-white">
              <span className="font-mono font-semibold">High-Resolution Official Publication View</span>
              <div className="flex items-center gap-2">
                <a
                  href={BROCHURE_PHOTOS.pdfDocument}
                  download="eco-reform-brochure.pdf"
                  className="px-2.5 py-1 rounded bg-[#7CA123] text-[#142304] font-bold flex items-center gap-1 hover:bg-[#8EC225]"
                >
                  <span className="material-symbols-outlined text-[14px]">download</span>
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setFullPageModal(null)}
                  className="p-1 rounded bg-white/10 hover:bg-white/20 text-white"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            </div>
            <div className="overflow-auto p-4 flex items-center justify-center bg-black/50">
              <img
                src={fullPageModal}
                alt="Enlarged brochure scan"
                className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
