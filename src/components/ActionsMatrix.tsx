import React, { useState, useEffect } from 'react';
import { CLIMATE_ACTIONS_30, ClimateAction, FOCUS_AREAS_5 } from '../data/brochureData';

interface ActionsMatrixProps {
  onSelectAction?: (action: ClimateAction) => void;
}

export const ActionsMatrix: React.FC<ActionsMatrixProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedAction, setSelectedAction] = useState<ClimateAction | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Checkable SOP checklist items for active modal
  const [checkedChecklist, setCheckedChecklist] = useState<Record<string, boolean>>({});

  // Custom facility simulator state
  const [auditStatuses, setAuditStatuses] = useState<Record<string, 'implemented' | 'in-progress' | 'planned'>>(() => {
    const initial: Record<string, 'implemented' | 'in-progress' | 'planned'> = {};
    CLIMATE_ACTIONS_30.forEach((a) => {
      initial[a.id] = a.statusAtNuh;
    });
    return initial;
  });

  // Global ESC key listener to dismiss active action modal
  useEffect(() => {
    if (!selectedAction) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedAction(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAction]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const categories = [
    { id: 'all', label: 'All 30 Actions', icon: 'apps' },
    { id: 'infrastructure', label: '1. Infrastructure (6)', icon: 'roofing' },
    { id: 'water', label: '2. Water (6)', icon: 'water_drop' },
    { id: 'waste', label: '3. Waste (6)', icon: 'recycling' },
    { id: 'green', label: '4. Green Practices (6)', icon: 'yard' },
    { id: 'education', label: '5. Education (6)', icon: 'school' },
  ];

  const filteredActions = CLIMATE_ACTIONS_30.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    const currentStatus = auditStatuses[item.id] || item.statusAtNuh;
    if (statusFilter !== 'all' && currentStatus !== statusFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.categoryTitle.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Calculate Nuh / facility implementation score
  const implementedCount = Object.values(auditStatuses).filter((s) => s === 'implemented').length;
  const inProgressCount = Object.values(auditStatuses).filter((s) => s === 'in-progress').length;
  const plannedCount = Object.values(auditStatuses).filter((s) => s === 'planned').length;
  const scorePercent = Math.round(((implementedCount * 1.0 + inProgressCount * 0.5) / 30) * 100);

  const toggleAuditStatus = (id: string, newStatus: 'implemented' | 'in-progress' | 'planned') => {
    setAuditStatuses((prev) => ({
      ...prev,
      [id]: newStatus,
    }));
    const action = CLIMATE_ACTIONS_30.find((a) => a.id === id);
    const label = newStatus === 'implemented' ? 'Active at Nuh' : newStatus === 'in-progress' ? 'In Progress' : 'Planned';
    showToast(`Action #${action ? String(action.number).padStart(2, '0') : ''}: Status set to "${label}"`);
  };

  const checklistSteps = [
    'Jail Administration & Security Protocol Approval',
    'Low-Cost Non-Hazardous Materials Procurement',
    'Joint Staff & Incarcerated Trainees Workshop',
    'Physical Field Installation & Metric Verification',
  ];

  return (
    <div className="w-full space-y-10 relative" id="actions-matrix">
      {/* Toast Notification Pill */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#12560E] text-[#B9F079] px-4 py-2 rounded-full shadow-2xl text-xs font-semibold flex items-center gap-2 border border-[#7CA123]/40 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="material-symbols-outlined text-[16px] text-[#B9F079]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#D1C9BC]">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#12560E]">
              <span className="w-2 h-2 rounded-full bg-[#7CA123]" />
              Standardized Framework • 5 Focus Categories
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1C19] font-medium tracking-tight">
              The 30 Climate Actions Taxonomy &amp; Audit
            </h2>
            <p className="text-sm sm:text-base text-[#41493d] leading-relaxed">
              Adapted directly from the Eco-Reform field brochure, these 30 actionable interventions
              transform correctional institutions into climate-adaptive, low-carbon, and restorative spaces.
            </p>
          </div>

          {/* Live Eco-Resilience Index Box */}
          <div className="bg-[#EEEEE9] p-5 rounded-2xl border border-[#D1C9BC] shrink-0 min-w-[280px]">
            <div className="flex items-center justify-between text-xs font-semibold text-[#41493d] mb-1">
              <span>Nuh District Jail Readiness</span>
              <span className="font-mono text-sm font-bold text-[#12560E]">{scorePercent}%</span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-2.5 rounded-full bg-[#D1C9BC] overflow-hidden flex">
              <div
                className="bg-[#12560E] h-full transition-all duration-300"
                style={{ width: `${(implementedCount / 30) * 100}%` }}
                title={`${implementedCount} Implemented`}
              />
              <div
                className="bg-[#7CA123] h-full transition-all duration-300"
                style={{ width: `${(inProgressCount / 30) * 100}%` }}
                title={`${inProgressCount} In Progress`}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#41493d] mt-2">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#12560E]" />
                {implementedCount} Active
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#7CA123]" />
                {inProgressCount} In Progress
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#D1C9BC]" />
                {plannedCount} Planned
              </span>
            </div>
          </div>
        </div>

        {/* Brochure Panel: OUR FOCUS AREAS - 5 CATEGORIES 30 CLIMATE ACTIONS */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#D1C9BC] space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EEEEE9] pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#12560E] block">
                Official Brochure Taxonomy
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1C19]">
                Our Focus Areas: 5 Categories • 30 Climate Actions
              </h3>
            </div>
            <span className="text-xs text-[#717a6c]">Click any domain to filter the audit below</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {FOCUS_AREAS_5.map((area, idx) => {
              const isSelected = selectedCategory === area.id;
              return (
                <div
                  key={area.id}
                  onClick={() => setSelectedCategory(selectedCategory === area.id ? 'all' : area.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 group ${
                    isSelected
                      ? 'bg-[#FBFDF9] border-[#12560E] ring-2 ring-[#12560E]/20 shadow-sm'
                      : 'bg-white border-[#D1C9BC] hover:border-[#12560E] hover:shadow-xs'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${area.color}15`, color: area.color }}
                      >
                        <span className="material-symbols-outlined text-[16px]">{area.icon}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#717a6c]">0{idx + 1}</span>
                    </div>
                    <h4 className="font-bold text-xs uppercase tracking-tight text-[#1A1C19] leading-tight">
                      {area.title}
                    </h4>
                    <p className="text-[11px] text-[#41493d] leading-snug">
                      {area.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#EEEEE9] flex items-center justify-between text-[10px] font-semibold text-[#12560E]">
                    <span>6 Climate Actions</span>
                    <span>{isSelected ? 'Filtered ✓' : 'Filter →'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-[#D1C9BC]/60">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-[#2E6F25] text-white shadow-sm'
                    : 'text-[#41493d] hover:bg-[#EEEEE9] hover:text-[#1A1C19]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search and Status Dropdown */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#717a6c]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search action by keyword, e.g. vermicompost, cool roof, greywater..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-[#D1C9BC] rounded-lg text-xs sm:text-sm text-[#1A1C19] placeholder-[#717a6c] focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#717a6c] hover:text-[#1A1C19]"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
              <span className="text-[#41493d] font-medium">Status Filter:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-2.5 py-1.5 bg-white border border-[#D1C9BC] rounded-lg text-xs font-medium text-[#1A1C19] focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
              >
                <option value="all">All Statuses ({CLIMATE_ACTIONS_30.length})</option>
                <option value="implemented">Implemented at Nuh</option>
                <option value="in-progress">In Progress</option>
                <option value="planned">Planned Expansion</option>
              </select>
            </div>
          </div>
        </div>

        {/* 30 Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActions.map((action) => {
            const currentStatus = auditStatuses[action.id] || action.statusAtNuh;
            return (
              <div
                key={action.id}
                onClick={() => setSelectedAction(action)}
                className="bg-white rounded-2xl p-6 border border-[#D1C9BC] hover:border-[#12560E] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 shadow-xs flex flex-col justify-between space-y-4 group cursor-pointer relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-[#EEEEE9] group-hover:bg-[#E2F3D9] text-[#12560E] flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-[22px] transition-transform group-hover:scale-110">{action.icon}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-mono font-bold text-[#717a6c]">
                        #{String(action.number).padStart(2, '0')}
                      </span>
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full capitalize ${
                          currentStatus === 'implemented'
                            ? 'bg-[#E2F3D9] text-[#12560E]'
                            : currentStatus === 'in-progress'
                            ? 'bg-[#FEF3C7] text-[#92400E]'
                            : 'bg-[#F1F5F9] text-[#475569]'
                        }`}
                      >
                        {currentStatus === 'implemented'
                          ? 'Active at Nuh'
                          : currentStatus === 'in-progress'
                          ? 'In Progress'
                          : 'Planned'}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-[#7CA123] uppercase tracking-wider block">
                      {action.categoryTitle}
                    </span>
                    <h4 className="font-serif text-lg font-medium text-[#1A1C19] group-hover:text-[#12560E] transition-colors leading-snug mt-0.5">
                      {action.title}
                    </h4>
                  </div>

                  <p className="text-xs text-[#41493d] leading-relaxed">
                    {action.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EEEEE9] space-y-2">
                  <div className="text-[11px] text-[#41493d] flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#2E6F25] shrink-0 mt-0.5">
                      trending_up
                    </span>
                    <span className="font-medium text-[#1A1C19]">{action.impactMetric}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-semibold text-[#12560E] group-hover:underline flex items-center gap-1">
                      View Field SOP
                      <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                    </span>

                    <div className="flex items-center gap-1 text-[10px] text-[#717a6c]">
                      <span>Audit:</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAuditStatus(
                            action.id,
                            currentStatus === 'implemented'
                              ? 'in-progress'
                              : currentStatus === 'in-progress'
                              ? 'planned'
                              : 'implemented'
                          );
                        }}
                        className="font-semibold text-[#12560E] hover:underline px-1.5 py-0.5 rounded bg-[#FAF9F5] border border-[#D1C9BC] hover:bg-[#EEEEE9]"
                        title="Click to cycle status in facility simulator"
                      >
                        Cycle ↺
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredActions.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-[#D1C9BC] space-y-2">
            <span className="material-symbols-outlined text-[36px] text-[#717a6c]">search_off</span>
            <p className="text-sm font-medium text-[#1A1C19]">No climate actions found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setStatusFilter('all');
                setSearchQuery('');
              }}
              className="text-xs text-[#2E6F25] font-semibold hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}

      {/* Action Detail Modal */}
      {selectedAction && (
        <div
          onClick={() => setSelectedAction(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#FAF9F5] border border-[#D1C9BC] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Top-Right X (Close) Button */}
            <button
              type="button"
              onClick={() => setSelectedAction(null)}
              aria-label="Close"
              title="Close modal"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white hover:bg-[#FAF9F5] text-[#1A1C19] border border-[#D1C9BC] shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
            >
              <span className="material-symbols-outlined text-[20px] select-none">close</span>
            </button>

            {/* Modal Header */}
            <div className="bg-[#EEEEE9] p-6 pr-16 border-b border-[#D1C9BC] flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7CA123]">
                    Action #{String(selectedAction.number).padStart(2, '0')} • {selectedAction.categoryTitle}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#1A1C19]">
                  {selectedAction.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto text-sm text-[#41493d]">
              <div>
                <h5 className="font-semibold text-xs text-[#1A1C19] uppercase tracking-wider mb-1">
                  Summary &amp; Strategic Value
                </h5>
                <p className="leading-relaxed">{selectedAction.shortDesc}</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#D1C9BC] space-y-2">
                <h5 className="font-semibold text-xs text-[#12560E] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">integration_instructions</span>
                  Field Standard Operating Procedure (SOP)
                </h5>
                <p className="text-xs leading-relaxed text-[#1A1C19]">{selectedAction.detailedSop}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#EEEEE9] p-3.5 rounded-xl border border-[#D1C9BC] space-y-1">
                  <span className="text-[11px] font-semibold text-[#717a6c] uppercase block">
                    Target Impact Metric
                  </span>
                  <span className="font-bold text-xs text-[#1A1C19] block">
                    {selectedAction.impactMetric}
                  </span>
                </div>

                <div className="bg-[#EEEEE9] p-3.5 rounded-xl border border-[#D1C9BC] space-y-1">
                  <span className="text-[11px] font-semibold text-[#717a6c] uppercase block">
                    Feasibility &amp; Deployment Window
                  </span>
                  <span className="font-bold text-xs text-[#1A1C19] block">
                    {selectedAction.feasibility} Deployment
                  </span>
                </div>
              </div>

              {/* Interactive Deployment Checklist */}
              <div className="bg-white p-4 rounded-xl border border-[#D1C9BC] space-y-3">
                <div className="flex items-center justify-between">
                  <h6 className="text-xs font-bold text-[#1A1C19] uppercase tracking-wide flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#2E6F25]">checklist</span>
                    Interactive SOP Execution Checklist
                  </h6>
                  <span className="text-[11px] font-mono text-[#12560E] font-bold">
                    {checklistSteps.filter((_, idx) => checkedChecklist[`${selectedAction.id}-${idx}`]).length} / {checklistSteps.length} Verified
                  </span>
                </div>

                <div className="space-y-2">
                  {checklistSteps.map((stepText, idx) => {
                    const key = `${selectedAction.id}-${idx}`;
                    const isChecked = !!checkedChecklist[key];
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setCheckedChecklist((prev) => ({
                            ...prev,
                            [key]: !prev[key],
                          }));
                        }}
                        className={`w-full text-left p-2.5 rounded-lg border text-xs flex items-center justify-between transition-all ${
                          isChecked
                            ? 'bg-[#E2F3D9] border-[#A8CCA0] text-[#12560E] font-medium'
                            : 'bg-[#FAF9F5] border-[#D1C9BC] text-[#41493d] hover:bg-[#EEEEE9]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px]">
                            {isChecked ? 'check_box' : 'check_box_outline_blank'}
                          </span>
                          <span>{stepText}</span>
                        </span>
                        <span className="text-[10px] font-mono uppercase text-[#717a6c]">
                          {isChecked ? 'Verified' : 'Pending'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Status Selector in Modal */}
              <div className="bg-white p-4 rounded-xl border border-[#D1C9BC] space-y-2">
                <span className="text-xs font-semibold text-[#1A1C19] block">
                  Simulate Status for Your Jail Facility:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(['implemented', 'in-progress', 'planned'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => toggleAuditStatus(selectedAction.id, st)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize border transition-all ${
                        auditStatuses[selectedAction.id] === st
                          ? 'bg-[#2E6F25] text-white border-[#2E6F25] shadow-sm'
                          : 'bg-[#FAF9F5] text-[#41493d] border-[#D1C9BC] hover:border-[#12560E]'
                      }`}
                    >
                      {st === 'implemented' ? 'Active / Deployed' : st === 'in-progress' ? 'In Progress' : 'Planned'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-[#EEEEE9] px-6 py-4 border-t border-[#D1C9BC] flex items-center justify-between">
              <span className="text-xs text-[#717a6c]">
                Part of the 30 Climate Actions Framework • TYCIA Foundation
              </span>
              <button
                onClick={() => setSelectedAction(null)}
                className="px-4 py-2 bg-[#2E6F25] text-white text-xs font-semibold rounded-lg hover:bg-[#12560E] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
