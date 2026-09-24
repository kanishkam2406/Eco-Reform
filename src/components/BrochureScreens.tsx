import React, { useState } from 'react';
import { BROCHURE_PHOTOS, CHALLENGES, METHODOLOGY_STEPS } from '../data/brochureData';

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
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  return (
    <div className="w-full bg-[#D8D2C5] py-8 px-4 sm:px-6 lg:px-8">
      {/* Top Controls Bar */}
      <div className="max-w-7xl mx-auto mb-6 bg-[#FAF9F5] p-4 rounded-xl border border-[#D1C9BC] shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#2E6F25] text-white flex items-center justify-center font-bold text-sm">
            <span className="material-symbols-outlined text-[20px]">auto_stories</span>
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium text-[#1A1C19] leading-tight">
              Official Eco-Reform Brochure
            </h3>
            <p className="text-xs text-[#41493d]">
              Direct visual facsimile of the field publication • Nuh District Jail, Haryana
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Screen Switcher */}
          <div className="inline-flex p-1 bg-[#EEEEE9] rounded-lg border border-[#D1C9BC]">
            <button
              onClick={() => setActiveScreen('screen1')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeScreen === 'screen1'
                  ? 'bg-[#2E6F25] text-white shadow-sm'
                  : 'text-[#41493d] hover:text-[#1A1C19]'
              }`}
            >
              Screen 1 (Cover &amp; Challenges)
            </button>
            <button
              onClick={() => setActiveScreen('screen2')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeScreen === 'screen2'
                  ? 'bg-[#2E6F25] text-white shadow-sm'
                  : 'text-[#41493d] hover:text-[#1A1C19]'
              }`}
            >
              Screen 2 (Approach &amp; 30 Actions)
            </button>
            <button
              onClick={() => setActiveScreen('both')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors hidden md:inline-block ${
                activeScreen === 'both'
                  ? 'bg-[#2E6F25] text-white shadow-sm'
                  : 'text-[#41493d] hover:text-[#1A1C19]'
              }`}
            >
              Side-by-Side
            </button>
          </div>

          {/* Zoom controls */}
          <div className="hidden sm:flex items-center gap-1 bg-[#EEEEE9] px-2 py-1 rounded-lg border border-[#D1C9BC]">
            <button
              onClick={() => setZoomLevel((z) => Math.max(80, z - 10))}
              className="p-1 text-[#41493d] hover:text-[#1A1C19]"
              title="Zoom out"
            >
              <span className="material-symbols-outlined text-[18px]">zoom_out</span>
            </button>
            <span className="text-xs font-mono text-[#41493d] px-1">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(130, z + 10))}
              className="p-1 text-[#41493d] hover:text-[#1A1C19]"
              title="Zoom in"
            >
              <span className="material-symbols-outlined text-[18px]">zoom_in</span>
            </button>
          </div>

          {onExploreActions && (
            <button
              onClick={onExploreActions}
              className="px-3 py-1.5 text-xs font-semibold bg-[#7CA123] text-[#1A1C19] hover:bg-[#688a1c] rounded transition-colors flex items-center gap-1 shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">checklist</span>
              Audit 30 Actions
            </button>
          )}

          <button
            onClick={() => window.print()}
            className="px-3 py-1.5 text-xs font-semibold bg-[#FAF9F5] text-[#2E6F25] border border-[#2E6F25] hover:bg-[#EEEEE9] rounded transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            Print / Save
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-semibold bg-[#1A1C19] text-white hover:bg-black rounded transition-colors flex items-center gap-1 shadow-sm"
              title="Close brochure preview"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
              Close
            </button>
          )}
        </div>
      </div>

      {/* Main Brochure Viewer Area */}
      <div
        className="max-w-7xl mx-auto transition-transform origin-top overflow-x-auto pb-4"
        style={{ transform: zoomLevel !== 100 ? `scale(${zoomLevel / 100})` : 'none' }}
      >
        <div className={`space-y-10 ${activeScreen === 'both' ? 'grid grid-cols-1 xl:grid-cols-2 xl:gap-8 xl:space-y-0' : ''}`}>
          
          {/* ================= SCREEN 1: COVER, CONTEXT & CHALLENGES ================= */}
          {(activeScreen === 'screen1' || activeScreen === 'both') && (
            <div className="bg-[#D9D1C2] border-4 border-[#C8BFAD] shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 text-[#2B2B28] relative overflow-hidden transition-all">
              {/* Subtle top stamp */}
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-[#C4BBA7] text-[11px] font-bold tracking-widest text-[#5C5648] uppercase">
                <span>TYCIA FOUNDATION • PROJECT ECO-REFORM</span>
                <span>PANEL 01 // CIVIC ORIENTATION</span>
              </div>

              {/* 3-Column Layout of Image 1 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* COLUMN 1: Why Climate-Adaptive Prisons & Challenges */}
                <div className="md:col-span-4 space-y-6">
                  {/* Capsule: Why Climate-Adaptive Prisons */}
                  <div className="space-y-2">
                    <div className="inline-block bg-[#7CA123] text-[#142304] px-4 py-2 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
                      WHY CLIMATE-ADAPTIVE PRISONS?
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#3B3830] font-medium pt-1">
                      Prisons can be particularly vulnerable to climate-related risks because of their
                      enclosed infrastructure, high population density and limited access to adaptive resources.
                    </p>
                  </div>

                  {/* Capsule: Key Challenges Include */}
                  <div className="space-y-3">
                    <div className="inline-block bg-[#7CA123] text-[#142304] px-4 py-2 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
                      KEY CHALLENGES INCLUDE:
                    </div>

                    {/* 6 Challenges with graphic markers */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      {CHALLENGES.map((ch) => (
                        <div
                          key={ch.id}
                          className="bg-[#CFC6B4]/60 hover:bg-[#FAF9F5] p-2.5 rounded-lg border border-[#C4BBA7] transition-colors flex items-start gap-2 group"
                        >
                          <span
                            className="material-symbols-outlined text-[20px] shrink-0 mt-0.5"
                            style={{ color: ch.color }}
                          >
                            {ch.icon}
                          </span>
                          <div>
                            <span className="text-[11px] font-extrabold uppercase tracking-tight text-[#22211C] block leading-tight">
                              {ch.title}
                            </span>
                            <span className="text-[10px] text-[#555043] leading-snug line-clamp-2 mt-0.5">
                              {ch.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capsule: The Question */}
                  <div className="space-y-3 pt-2">
                    <div className="inline-block bg-[#7CA123] text-[#142304] px-4 py-2 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
                      THE QUESTION
                    </div>
                    <p className="font-serif text-xl sm:text-2xl text-[#1E2319] leading-snug font-medium">
                      Can prisons become part of the solution to the climate crisis?
                    </p>
                    <p className="font-serif text-xl sm:text-2xl text-[#2E6F25] font-semibold italic">
                      Eco-Reform believes they can.
                    </p>
                  </div>
                </div>

                {/* COLUMN 2: Photo, Project Eco-Reform & Supported By */}
                <div className="md:col-span-4 space-y-6">
                  {/* Top Photo: Inmates, staff & coordinators */}
                  <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#C4BBA7] bg-[#BDB39E] aspect-[4/3] relative">
                    <img
                      src={BROCHURE_PHOTOS.heroCert}
                      alt="Participants and correctional officers gathered with certification in classroom"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white text-[11px] font-medium">
                      Participatory legal &amp; climate literacy certification cohort
                    </div>
                  </div>

                  {/* Capsule: Project Eco-Reform */}
                  <div className="space-y-2">
                    <div className="inline-block bg-[#7CA123] text-[#142304] px-4 py-2 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
                      PROJECT ECO-REFORM
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#3B3830] pt-1">
                      <strong className="text-[#1A1C19] font-bold">Eco-Reform</strong> is TYCIA Foundation’s flagship climate-resilience programme transforming prisons into climate-adaptive, sustainable and rehabilitative spaces.
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#3B3830]">
                      The pilot at <span className="font-semibold text-[#1A1C19]">Nuh District Jail, Haryana</span>, focuses on practical solutions for heat, water, waste, infrastructure and environmental resilience, with the aim of developing a model that can be replicated across India.
                    </p>
                  </div>

                  {/* Capsule: Supported By */}
                  <div className="space-y-3 pt-2">
                    <div className="inline-block bg-[#7CA123] text-[#142304] px-4 py-2 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
                      SUPPORTED BY
                    </div>
                    
                    {/* Partner Insignias */}
                    <div className="grid grid-cols-3 gap-2 bg-[#CFC6B4]/70 p-3 rounded-xl border border-[#C4BBA7] items-center text-center">
                      {/* Haryana Police / Prisons */}
                      <div className="flex flex-col items-center justify-center p-1">
                        <div className="w-10 h-10 rounded-full bg-[#1A365D] text-[#E2E8F0] flex items-center justify-center font-serif text-[10px] font-bold border-2 border-[#E2E8F0] shadow-sm">
                          H.P.
                        </div>
                        <span className="text-[9px] font-extrabold uppercase tracking-tight text-[#1A1C19] mt-1">
                          Haryana Prisons
                        </span>
                      </div>

                      {/* Rainmatter Foundation */}
                      <div className="flex flex-col items-center justify-center p-1">
                        <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#2E6F25] text-[#2E6F25] flex items-center justify-center font-bold text-[14px]">
                          <span className="material-symbols-outlined text-[20px]">eco</span>
                        </div>
                        <span className="text-[9px] font-extrabold uppercase tracking-tight text-[#1A1C19] mt-1">
                          Rainmatter Fdn
                        </span>
                      </div>

                      {/* Factor Daily */}
                      <div className="flex flex-col items-center justify-center p-1">
                        <div className="w-10 h-10 rounded-lg bg-[#1A1C19] text-white flex items-center justify-center font-mono text-[10px] font-bold">
                          FD
                        </div>
                        <span className="text-[9px] font-extrabold uppercase tracking-tight text-[#1A1C19] mt-1">
                          Factor Daily
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COLUMN 3: Logo, Tagline, Turn Concern Into Action & Garden Bed Photo */}
                <div className="md:col-span-4 space-y-6">
                  {/* Eco-Reform Stylized Logo & Subtitle */}
                  <div className="bg-[#FAF9F5]/70 p-5 rounded-2xl border border-[#C4BBA7] space-y-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-[#7CA123] text-white flex items-center justify-center font-bold text-xl shadow-sm">
                        <span className="material-symbols-outlined text-[28px]">eco</span>
                      </div>
                      <span className="font-extrabold text-2xl tracking-tighter text-[#12560E] uppercase">
                        ECO-REFORM
                      </span>
                    </div>
                    <div className="text-[10px] font-extrabold tracking-widest text-[#2E6F25] uppercase">
                      TOWARDS CLIMATE-RESILIENT ADAPTIVE PRISONS : PRIORITISING PRISONER WELLBEING
                    </div>
                    <p className="text-xs font-serif italic text-[#41493d]">
                      Towards Climate-Resilient Adaptive Prisons • Prioritising Prisoner Wellbeing
                    </p>
                  </div>

                  {/* Stamp: Turn Your Concern Into Action TYCIA */}
                  <div className="border-4 border-[#1A1C19] bg-[#1A1C19] text-white p-5 rounded-lg shadow-md text-left">
                    <div className="font-mono text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight">
                      TURN<br />
                      YOUR<br />
                      CONCERN<br />
                      INTO<br />
                      ACTION
                    </div>
                    <div className="text-right font-extrabold text-sm tracking-widest text-[#7CA123] mt-2">
                      TYCIA
                    </div>
                  </div>

                  {/* Bottom Image: Soil Preparation & Planting */}
                  <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#C4BBA7] aspect-[4/3] relative bg-[#BDB39E]">
                    <img
                      src={BROCHURE_PHOTOS.agroBed}
                      alt="Inmates and trainers working hands-on in the raised organic vegetable beds"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-white text-[11px] font-medium">
                      Hands-on soil restoration &amp; raised permaculture beds at Nuh Jail
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Jump Bar */}
              <div className="mt-8 pt-4 border-t border-[#C4BBA7] flex flex-wrap items-center justify-between gap-3 text-xs text-[#5C5648]">
                <span>Pilot: Nuh District Jail, Mewat Region, Haryana</span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setActiveScreen('screen2')}
                    className="font-bold text-[#12560E] hover:underline flex items-center gap-1"
                  >
                    View Screen 2: Approach &amp; 30 Climate Actions →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ================= SCREEN 2: APPROACH, 30 ACTIONS & CONTACT ================= */}
          {(activeScreen === 'screen2' || activeScreen === 'both') && (
            <div className="bg-[#D9D1C2] border-4 border-[#C8BFAD] shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 text-[#2B2B28] relative overflow-hidden transition-all">
              {/* Subtle top stamp */}
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-[#C4BBA7] text-[11px] font-bold tracking-widest text-[#5C5648] uppercase">
                <span>TYCIA FOUNDATION • PROJECT ECO-REFORM</span>
                <span>PANEL 02 // METHODOLOGY &amp; ACTION TAXONOMY</span>
              </div>

              {/* 3-Column Layout of Image 2 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* COLUMN 1: Our Approach & 5 Steps in Large Quotation Box */}
                <div className="md:col-span-4 space-y-4">
                  {/* Capsule: Our Approach */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-[#7CA123] text-[#142304] px-4 py-1.5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
                        OUR APPROACH
                      </span>
                      <span className="font-extrabold text-xs uppercase tracking-tight text-[#1A1C19]">
                        HOW DOES ECO-REFORM WORK?
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#3B3830] font-medium pt-1">
                      Eco-Reform follows a <strong className="text-[#1A1C19]">research-to-action approach</strong>, working with prison administrations, prison staff, incarcerated individuals and other stakeholders to identify challenges and develop practical solutions.
                    </p>
                  </div>

                  {/* Big Green Rounded Quotation Box with 5 Steps */}
                  <div className="bg-[#7CA123] text-white p-5 rounded-3xl shadow-lg relative space-y-4">
                    {/* Top Quote Icon */}
                    <div className="font-serif text-5xl font-black leading-none opacity-80 select-none">
                      “
                    </div>

                    <div className="space-y-4 text-xs font-semibold tracking-wide">
                      {METHODOLOGY_STEPS.map((st) => (
                        <div key={st.step} className="flex items-center gap-3 bg-[#688a1c]/60 p-2 rounded-xl">
                          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white shrink-0">
                            <span className="material-symbols-outlined text-[18px]">{st.icon}</span>
                          </div>
                          <div>
                            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-white">
                              {st.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Quote Icon */}
                    <div className="font-serif text-5xl font-black leading-none opacity-80 text-right select-none">
                      ”
                    </div>
                  </div>
                </div>

                {/* COLUMN 2: Join Us, Contact Card & Photo */}
                <div className="md:col-span-4 space-y-6">
                  {/* Capsule: Join Us */}
                  <div className="space-y-2">
                    <div className="inline-block bg-[#7CA123] text-[#142304] px-4 py-2 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
                      JOIN US
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#1A1C19] uppercase tracking-wide">
                      from awareness to action • be a part of the change.
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#3B3830]">
                      Eco-Reform uses interactive learning, practical demonstrations and participatory activities to make climate action understandable and actionable within prison settings.
                    </p>
                  </div>

                  {/* Capsule: Contact */}
                  <div className="space-y-3">
                    <div className="inline-block bg-[#7CA123] text-[#142304] px-4 py-2 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
                      Contact:
                    </div>

                    <div className="bg-[#CFC6B4]/70 p-5 rounded-2xl border border-[#C4BBA7] space-y-3 text-xs sm:text-sm text-[#2A2720]">
                      <div className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#1A1C19]">
                        TYCIA FOUNDATION
                      </div>

                      <div className="space-y-1 text-xs">
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[16px] text-[#2E6F25] shrink-0 mt-0.5">location_on</span>
                          <span>N-33, Second Floor, Green Park Extension, New Delhi - 110016.</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-[#2E6F25] shrink-0">mail</span>
                          <a href="mailto:tyciafoundation@gmail.com" className="hover:underline text-[#12560E] font-medium">
                            tyciafoundation@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#C4BBA7] space-y-1 text-xs">
                        <div className="font-bold text-[#1A1C19]">Karan Kumar | Founder</div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-[#2E6F25] shrink-0">call</span>
                          <a href="tel:+91880573488" className="hover:underline font-mono">
                            +91 880573488
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-[#2E6F25] shrink-0">mail</span>
                          <a href="mailto:Karanpsc@gmail.com" className="hover:underline">
                            Karanpsc@gmail.com
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-[#2E6F25] shrink-0">language</span>
                          <a href="https://www.eco-reform.in" target="_blank" rel="noreferrer" className="hover:underline font-semibold text-[#12560E]">
                            www.eco-reform.in
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Photo below contact: Inmates receiving certificates */}
                  <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#C4BBA7] aspect-[4/3] relative bg-[#BDB39E]">
                    <img
                      src={BROCHURE_PHOTOS.staffTraining}
                      alt="Certificate award handover ceremony with prison officers"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-white text-[11px] font-medium">
                      Joint felicitation between jail administrators &amp; inmates
                    </div>
                  </div>
                </div>

                {/* COLUMN 3: Permaculture Plot Photo & 5 Categories 30 Climate Actions */}
                <div className="md:col-span-4 space-y-6">
                  {/* Top Photo: Lush garden with workers */}
                  <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#C4BBA7] aspect-[4/3] relative bg-[#BDB39E]">
                    <img
                      src={BROCHURE_PHOTOS.gardenOverview}
                      alt="Lush raised garden beds and planting rows inside prison courtyard"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-white text-[11px] font-medium">
                      Operational 1.2-acre permaculture plot at Nuh District Jail
                    </div>
                  </div>

                  {/* Capsule: Our Focus Areas (5 Categories 30 Climate Actions) */}
                  <div className="space-y-3">
                    <div className="inline-block bg-[#7CA123] text-[#142304] px-4 py-2 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
                      OUR FOCUS AREAS: 5 CATEGORIES 30 CLIMATE ACTIONS
                    </div>

                    <div className="space-y-3 text-xs leading-relaxed text-[#3B3830]">
                      <div className="bg-[#CFC6B4]/60 p-2.5 rounded-lg border border-[#C4BBA7]">
                        <span className="font-extrabold uppercase text-[#1A1C19] block text-[11px] mb-0.5">
                          1. CLIMATE-RESILIENT INFRASTRUCTURE
                        </span>
                        <span>Improving prison infrastructure to better respond to extreme heat, changing weather conditions and other climate risks.</span>
                      </div>

                      <div className="bg-[#CFC6B4]/60 p-2.5 rounded-lg border border-[#C4BBA7]">
                        <span className="font-extrabold uppercase text-[#1A1C19] block text-[11px] mb-0.5">
                          2. WATER CONSERVATION
                        </span>
                        <span>Promoting efficient water use, improved storage and practical water-conservation solutions.</span>
                      </div>

                      <div className="bg-[#CFC6B4]/60 p-2.5 rounded-lg border border-[#C4BBA7]">
                        <span className="font-extrabold uppercase text-[#1A1C19] block text-[11px] mb-0.5">
                          3. WASTE MANAGEMENT
                        </span>
                        <span>Encouraging waste segregation, composting, recycling and sustainable waste-management practices.</span>
                      </div>

                      <div className="bg-[#CFC6B4]/60 p-2.5 rounded-lg border border-[#C4BBA7]">
                        <span className="font-extrabold uppercase text-[#1A1C19] block text-[11px] mb-0.5">
                          4. SUSTAINABLE &amp; GREEN PRACTICES
                        </span>
                        <span>Promoting kitchen gardens, green spaces, sustainable food practices and environmentally responsible operations.</span>
                      </div>

                      <div className="bg-[#CFC6B4]/60 p-2.5 rounded-lg border border-[#C4BBA7]">
                        <span className="font-extrabold uppercase text-[#1A1C19] block text-[11px] mb-0.5">
                          5. EDUCATION &amp; ENGAGEMENT
                        </span>
                        <span>Building climate awareness and encouraging participation of prison staff and incarcerated individuals in sustainability initiatives.</span>
                      </div>
                    </div>

                    {onExploreActions && (
                      <button
                        onClick={onExploreActions}
                        className="w-full py-2.5 bg-[#2E6F25] hover:bg-[#12560E] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5 mt-2"
                      >
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        Inspect All 30 Actions &amp; SOPs
                      </button>
                    )}
                  </div>
                </div>

              </div>

              {/* Bottom Quick Jump Bar */}
              <div className="mt-8 pt-4 border-t border-[#C4BBA7] flex flex-wrap items-center justify-between gap-3 text-xs text-[#5C5648]">
                <span>Field Documentation • TYCIA Foundation Legal Aid &amp; Eco-Reform Trust</span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setActiveScreen('screen1')}
                    className="font-bold text-[#12560E] hover:underline flex items-center gap-1"
                  >
                    ← Back to Screen 1: Cover &amp; Challenges
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
