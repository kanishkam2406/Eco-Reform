import React, { useState } from 'react';
import { BROCHURE_PHOTOS } from '../data/brochureData';

interface Hotspot {
  id: string;
  name: string;
  category: string;
  coords: { top: string; left: string };
  desc: string;
  metric: string;
  photoUrl: string;
  baselineProblem: string;
  baselineMetric: string;
}

interface PilotJailMapProps {
  onOpenPhoto?: (photo: { url: string; caption: string }) => void;
}

export const PilotJailMap: React.FC<PilotJailMapProps> = ({ onOpenPhoto }) => {
  const [activeHotspot, setActiveHotspot] = useState<string>('garden');
  const [viewMode, setViewMode] = useState<'after' | 'before'>('after');

  const hotspots: Hotspot[] = [
    {
      id: 'garden',
      name: '1.2-Acre Permaculture Kitchen Garden',
      category: 'Sustainable & Green Practices',
      coords: { top: '35%', left: '50%' },
      desc: 'Central courtyard transformed from barren cracked clay into rich raised beds growing seasonal gourds, spinach, moringa, and medicinal tulsi.',
      metric: '420 kg organic produce harvested per cycle',
      photoUrl: BROCHURE_PHOTOS.agroBed,
      baselineProblem: 'Barren cracked clay yard radiating ground heat with zero plant canopy or nutritional benefit.',
      baselineMetric: '0 kg food grown • 100% store-bought commercial diet'
    },
    {
      id: 'barracks',
      name: 'Sleeping Barracks Cool-Roofing',
      category: 'Climate-Resilient Infrastructure',
      coords: { top: '20%', left: '25%' },
      desc: 'High-SRI white reflective coating applied across flat concrete slabs, paired with adjustable reed screens on window openings.',
      metric: '3.5°C to 5.2°C ambient heat reduction indoors',
      photoUrl: BROCHURE_PHOTOS.staffTraining,
      baselineProblem: 'Bare concrete roof exposed to 45°C sun acting as thermal heat capacitor through the night.',
      baselineMetric: 'Indoor ceiling temperatures reaching 48°C peak'
    },
    {
      id: 'compost',
      name: 'Central Mess Vermicomposting Pits',
      category: 'Waste Management',
      coords: { top: '65%', left: '75%' },
      desc: 'Brick-walled composting troughs inoculated with Eisenia fetida red worms converting raw kitchen vegetable scraps into rich compost.',
      metric: '250 kg organic waste diverted daily',
      photoUrl: BROCHURE_PHOTOS.gardenOverview,
      baselineProblem: 'Untreated food waste rotting near perimeter fences, creating severe odor and vector pest hazards.',
      baselineMetric: '250 kg food waste dumped unsegregated daily'
    },
    {
      id: 'water',
      name: 'Rainwater Catchment & Aquifer Sump',
      category: 'Water Conservation',
      coords: { top: '70%', left: '30%' },
      desc: 'Dual-chamber silt trap and gravel filter capturing monsoon rooftop flows to replenish local deep groundwater aquifers.',
      metric: '450,000 liters harvested each monsoon',
      photoUrl: BROCHURE_PHOTOS.agroBed,
      baselineProblem: 'Monsoon rooftop flows washing away untreated into surface drains with depleted borewells.',
      baselineMetric: 'Severe summer tanker dependency for drinking water'
    },
    {
      id: 'academy',
      name: 'Climate Literacy & Capacity Hall',
      category: 'Education & Engagement',
      coords: { top: '30%', left: '80%' },
      desc: 'Weekly classroom hub where correctional officers and incarcerated trainees convene for participatory agronomy masterclasses.',
      metric: '165 certified Civic Eco-Stewards to date',
      photoUrl: BROCHURE_PHOTOS.heroCert,
      baselineProblem: 'Forced idleness during incarceration leading to anxiety, agitation, and loss of purposeful identity.',
      baselineMetric: 'Zero climate/agro vocational training pathways'
    },
  ];

  const current = hotspots.find((h) => h.id === activeHotspot) || hotspots[0];

  return (
    <div className="w-full space-y-4">
      {/* Interactive Controls Header: Hotspots + Before/After Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1 border-b border-[#EEEEE9]">
        {/* Hotspot Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] font-bold text-[#717a6c] uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px]">touch_app</span>
            Tap Zone:
          </span>
          {hotspots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                spot.id === activeHotspot
                  ? 'bg-[#12560E] text-white shadow-sm ring-2 ring-[#7CA123]/40 scale-[1.02]'
                  : 'bg-white border border-[#D1C9BC] text-[#41493d] hover:bg-[#EEEEE9] hover:text-[#1A1C19]'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">
                {spot.id === 'garden'
                  ? 'yard'
                  : spot.id === 'barracks'
                  ? 'roofing'
                  : spot.id === 'compost'
                  ? 'compost'
                  : spot.id === 'water'
                  ? 'water_drop'
                  : 'school'}
              </span>
              <span>{spot.name.split(' ')[0]} {spot.name.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Micro-Interaction: Before / After Baseline Comparison Toggle */}
        <div className="flex items-center gap-1 bg-[#EEEEE9] p-1 rounded-xl border border-[#D1C9BC] self-start sm:self-auto shrink-0 shadow-2xs">
          <button
            onClick={() => setViewMode('before')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
              viewMode === 'before'
                ? 'bg-[#703d00] text-white shadow-xs'
                : 'text-[#717a6c] hover:text-[#1A1C19]'
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">history</span>
            2023 Baseline
          </button>
          <button
            onClick={() => setViewMode('after')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
              viewMode === 'after'
                ? 'bg-[#2E6F25] text-white shadow-xs'
                : 'text-[#717a6c] hover:text-[#1A1C19]'
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            2025 Eco-Pilot
          </button>
        </div>
      </div>

      {/* Interactive Map Canvas + Info Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Schematic Diagram */}
          <div
            className={`lg:col-span-8 border-2 rounded-2xl p-6 sm:p-8 relative shadow-inner overflow-hidden min-h-[440px] flex flex-col justify-between transition-colors duration-500 ${
              viewMode === 'after'
                ? 'bg-[#EEEEE9] border-[#D1C9BC]'
                : 'bg-[#F2ECE1] border-[#C9BBA5]'
            }`}
          >
            {/* Architectural Grid Lines */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#717a6c_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            {/* Perimeter Wall Representation */}
            <div className="absolute inset-4 border-2 border-dashed border-[#C0C9B9] rounded-xl pointer-events-none flex items-start justify-between p-2 text-[10px] font-mono text-[#717a6c] uppercase">
              <span>Security Perimeter Wall</span>
              <span>
                {viewMode === 'after' ? 'Nuh District Jail (Active Eco-Pilot)' : 'Nuh District Jail (2023 Pre-Intervention)'}
              </span>
            </div>

            {/* Central Courtyard Green Zone Representation */}
            <div
              className={`absolute inset-16 sm:inset-20 rounded-xl border pointer-events-none flex items-center justify-center transition-colors duration-500 ${
                viewMode === 'after'
                  ? 'bg-[#DDECD4]/70 border-[#A8CCA0]'
                  : 'bg-[#E3DAC8]/70 border-[#C5BBA7]'
              }`}
            >
              <span className={`font-serif italic text-xs tracking-widest uppercase transition-colors ${
                viewMode === 'after' ? 'text-[#12560E] font-medium' : 'text-[#703d00]'
              }`}>
                {viewMode === 'after'
                  ? 'Active Permaculture Courtyard & Raised Beds (1.2 Acres)'
                  : 'Barren Clay Courtyard (Zero Plant Cover • High Glare)'}
              </span>
            </div>

            {/* Interactive Pins */}
            {hotspots.map((spot) => {
              const isSelected = spot.id === activeHotspot;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot.id)}
                  style={{ top: spot.coords.top, left: spot.coords.left }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 group flex items-center gap-2 cursor-pointer ${
                    isSelected ? 'scale-110 z-20' : 'hover:scale-105 opacity-90'
                  }`}
                >
                  <span className="relative flex items-center justify-center">
                    {isSelected && (
                      <span
                        className={`absolute -inset-1.5 rounded-full animate-ping opacity-40 pointer-events-none ${
                          viewMode === 'after' ? 'bg-[#12560E]' : 'bg-[#703d00]'
                        }`}
                      />
                    )}
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg transition-colors relative z-10 ${
                        isSelected
                          ? viewMode === 'after'
                            ? 'bg-[#12560E] ring-4 ring-[#7CA123]/50 shadow-md'
                            : 'bg-[#703d00] ring-4 ring-[#b45309]/50 shadow-md'
                          : viewMode === 'after'
                          ? 'bg-[#7CA123] group-hover:bg-[#12560E]'
                          : 'bg-[#a16207] group-hover:bg-[#703d00]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {spot.id === 'garden'
                          ? 'yard'
                          : spot.id === 'barracks'
                          ? 'roofing'
                          : spot.id === 'compost'
                          ? 'compost'
                          : spot.id === 'water'
                          ? 'water_drop'
                          : 'school'}
                      </span>
                    </span>
                  </span>

                  <span
                    className={`hidden md:inline-block px-2.5 py-1 rounded text-xs font-semibold shadow-sm transition-colors whitespace-nowrap ${
                      isSelected
                        ? viewMode === 'after'
                          ? 'bg-[#12560E] text-white'
                          : 'bg-[#703d00] text-white'
                        : 'bg-[#FAF9F5] text-[#1A1C19] border border-[#D1C9BC]'
                    }`}
                  >
                    {spot.name}
                  </span>
                </button>
              );
            })}

            {/* Bottom Legend */}
            <div className="relative z-10 mt-auto pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#41493d]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-medium">
                  <span
                    className={`w-3 h-3 rounded-full transition-colors ${
                      viewMode === 'after' ? 'bg-[#12560E]' : 'bg-[#703d00]'
                    }`}
                  />
                  {viewMode === 'after' ? 'Active Eco-Intervention' : 'Pre-Intervention Hotspot'}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-3 h-3 rounded-full bg-[#7CA123]" />
                  Facility Ward Perimeter
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#717a6c]">
                Lat 28.107° N, Long 77.004° E
              </span>
            </div>
          </div>

          {/* Active Hotspot Deep Dive Card */}
          <div className="lg:col-span-4 bg-white border border-[#D1C9BC] rounded-2xl p-6 shadow-sm space-y-5 transition-all">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7CA123]">
                  {current.category}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-semibold ${
                    viewMode === 'after'
                      ? 'bg-[#E2F3D9] text-[#12560E]'
                      : 'bg-[#FEF3C7] text-[#703d00]'
                  }`}
                >
                  {viewMode === 'after' ? 'Pilot Outcome' : '2023 Baseline'}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#1A1C19]">
                {current.name}
              </h3>
            </div>

            {/* Photo with Lightbox Click Interaction */}
            <div
              onClick={() =>
                onOpenPhoto?.({
                  url: current.photoUrl,
                  caption: `${current.name}: ${current.metric}`,
                })
              }
              className="rounded-xl overflow-hidden aspect-video border border-[#D1C9BC] bg-[#EEEEE9] relative group cursor-pointer"
              title="Click to view full photo in high resolution"
            >
              <img
                src={current.photoUrl}
                alt={current.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">zoom_in</span>
                <span>Zoom</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white text-xs">
                {viewMode === 'after' ? current.metric : current.baselineMetric}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#41493d] leading-relaxed">
              {viewMode === 'after' ? current.desc : current.baselineProblem}
            </p>

            <div
              className={`p-3.5 rounded-xl border space-y-1 transition-colors ${
                viewMode === 'after'
                  ? 'bg-[#FAF9F5] border-[#D1C9BC]'
                  : 'bg-[#FFFBEB] border-[#FDE68A]'
              }`}
            >
              <span className="text-[11px] font-semibold text-[#717a6c] uppercase block">
                {viewMode === 'after' ? 'Recorded Field Impact' : 'Pre-Intervention Constraint'}
              </span>
              <span
                className={`font-bold text-xs sm:text-sm block ${
                  viewMode === 'after' ? 'text-[#12560E]' : 'text-[#703d00]'
                }`}
              >
                {viewMode === 'after' ? current.metric : current.baselineMetric}
              </span>
            </div>

            <div className="pt-2 border-t border-[#EEEEE9] flex items-center justify-between">
              <span className="text-[11px] text-[#717a6c]">
                Operational under TYCIA &amp; Haryana Prisons
              </span>
              <a
                href="#climate-actions"
                className="text-xs font-semibold text-[#12560E] hover:underline flex items-center gap-1"
              >
                Inspect 30 Actions SOP →
              </a>
            </div>
          </div>

        </div>
    </div>
  );
};
