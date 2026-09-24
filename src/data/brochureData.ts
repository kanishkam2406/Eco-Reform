export interface ClimateAction {
  id: string;
  category: 'infrastructure' | 'water' | 'waste' | 'green' | 'education';
  categoryTitle: string;
  number: number;
  title: string;
  shortDesc: string;
  detailedSop: string;
  impactMetric: string;
  statusAtNuh: 'implemented' | 'in-progress' | 'planned';
  feasibility: 'Immediate' | 'Medium-term' | 'Strategic';
  icon: string;
}

export interface Pillar {
  id: string;
  roman: string;
  title: string;
  subtitle: string;
  desc: string;
  bullets: string[];
  icon: string;
  accentColor: string;
}

export interface ImpactStory {
  id: string;
  tag: string;
  title: string;
  story: string;
  author: string;
  role: string;
  avatarLetter: string;
  highlight: string;
}

export const BROCHURE_PHOTOS = {
  // Official Eco-Reform Pan-India Prisons Under Pressure Climate Crisis Map
  prisonsClimateMap: '/prisons-climate-map.webp',

  // Certification ceremony with participants, officers, and coordinators
  heroCert: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAflcDxLjyOac-Kg0KnU1-NiWUlm4U6Fkt8D-RxZzYm0g0mTrXnXb0JCTHnOAcpBJ8Dx5LTcimWjZXCdNXqpfMhrb8mKIwO7N2mRRE1Af0c13qELwkog5xUnI1n-XfumdqjxqJ6G2PmWL8nDUcSCPL0yr6q7od6VGGQW38boXg5Bq7btgwF_tqJgeC-SHRc3j2QgW46pmYOzzNGSo2cgJD0ke48ncqbtiMhZU2wL3aYfJ0ARIuUHosycSJz5N_qjygQyA',
  
  // Inmates and coordinators crouching by raised soil beds
  agroBed: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBau-3XU9ycBOY5S8CYdyddy47LNZkrkSHxYpyuGqQAx_L08VbUC_VWgvVnukQGfIPeHsDAlr8gudaPJxtMJeLRRe46GLxiL-VFsL1y038br5yVYk1ZUfVUvJXS4ZdMxNwWpxXaI5fWP7L6QilLjCgeOIz16F0sYFL2gz4Cxpz7Dn0LXanvUwzbtbXNqTvlP-rmsJ1pvN7ukADPBOxtp_UoGjjeyS3irFyxGfCSCtskbgEhEmO2s_1CVInSM9d7csxMUA',
  
  // Joint training between prison staff and inmates
  staffTraining: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-CKx2xUCpsDEBVM-2NrXj9sEGUHyG7IYYZzm7HNnuCVTL5kEvQ6sMra5nq3dZny0uI_M4YBiGpOpWjbghIayBALQaj1qdxfojLxc0klLX63nkEhgKwh7lDWgx9hIZHaWHfcpF9czX5-gIor7qekL3cp3e7GEPTpFJJuLxELVKHgpEtGfy1ZfrJQoxPteqNcCQfD5ZjpMGjnuCQXRYFS3mELcjcQxm5KMNLaezjrU1Z3iDY-hCCVRtWoujPWKsbZEeuA',

  // Permaculture raised garden beds inside prison walls
  gardenOverview: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWZSX656pa_QcnqzDA03GzZ6qqanjgB7hrQhhQIqnWS-A5C1UCuXlfe8UQBGLaotg-cJZDS1rA7qh_EZCr-v_1pyKURNM8TniC3ldzFmszMrjR2CG6I852A5jwvtDr9YZNsUPoVWSPtO4doEWit4s1RY2oYg87w-MiJPZIpncjW4ieo7cNuylq2P1TPM6M_V78OITcmveH4QrXGBDDHmSSKFXYH5yltt4TFgFPux2ENOoFzFEh7iLUKqsNLfe_oJipuA',

  // Award ceremony with prison superintendent & TYCIA team
  handoverCert: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtD_1y9jo3N3sWCseP6GcTzWnyW-EipXvwTVfbH1h1Y8CK8bPSj9HRO2vmyT9gRvjh1A-vXszYXm5PZmzFOrqJaA_1-BxUMzx8CkGaKRLAxvsDhnoF2dvgzT2gT9g32NDB6ztEu3jNgQq86qVZcOqO09LWf60NXrfQM0j3DWqebS6_ZIgyJkhNTqQPdBnoqmGfzTh-721z4qYMaRVHoMmaLTNN28Bvc7O-UyXd3ha7qDimb_xQw2xDjidn8x_MI0w8qg',
};

export const CHALLENGES = [
  {
    id: 'heat',
    title: 'EXTREME HEAT',
    icon: 'thermostat',
    color: '#d97706',
    desc: 'Barracks act as thermal traps during summer peaks (often exceeding 44°C), causing acute heat exhaustion, dehydration, and aggression among inmates.'
  },
  {
    id: 'water',
    title: 'WATER STRESS',
    icon: 'water_drop',
    color: '#0284c7',
    desc: 'Severe groundwater depletion, erratic municipal supply, and heavy peak load in sanitation blocks leave undertrials queuing for hours.'
  },
  {
    id: 'infra',
    title: 'POOR INFRASTRUCTURE',
    icon: 'domain',
    color: '#78716c',
    desc: 'Aged masonry, flat concrete roofs without thermal barrier, inadequate passive airflow, and obsolete electrical grids unable to handle power surges.'
  },
  {
    id: 'waste',
    title: 'WASTE MANAGEMENT',
    icon: 'delete_sweep',
    color: '#16a34a',
    desc: 'Large central kitchens generate hundreds of kilograms of wet food waste daily with zero segregation, creating severe vector and odor hazards.'
  },
  {
    id: 'greenspace',
    title: 'FOOD & GREEN SPACES',
    icon: 'yard',
    color: '#15803d',
    desc: 'Paved institutional yards devoid of living canopy exacerbate the urban heat island effect while jail diets lack essential micronutrients.'
  },
  {
    id: 'weather',
    title: 'CHANGING WEATHER PATTERNS',
    icon: 'storm',
    color: '#b45309',
    desc: 'Flash water-logging, sudden dust storms, and extended seasonal humidity swings impact custodial health and disease transmission.'
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: 1,
    title: 'RESEARCH & ASSESSMENT',
    shortTitle: 'Research & Assessment',
    icon: 'biotech',
    desc: 'Auditing indoor temperatures, water usage, and waste volumes across barracks to identify systemic vulnerabilities.',
    output: 'Baseline Vulnerability Report',
    popupInsight: 'Audits thermal spikes (>44°C) & ward resource usage',
    timeline: 'Weeks 1 – 4',
    securityProtocol: 'Non-invasive thermal imaging and resource auditing approved by jail administration.',
    keyDeliverables: [
      'Comprehensive barracks heat index map (>44°C heat hot spots)',
      'Per-capita water discharge and waste audit (kitchen & sanitation)',
      'Incarcerated demographic vulnerability & environmental resilience baseline'
    ]
  },
  {
    step: 2,
    title: 'EDUCATION & CAPACITY BUILDING',
    shortTitle: 'Education & Capacity Building',
    icon: 'school',
    desc: 'Interactive learning, practical demonstrations, and participatory workshops bridging prison staff and incarcerated individuals.',
    output: 'Certified Custodial Eco-Stewards',
    popupInsight: 'Unites staff & inmates in custodial climate stewardship',
    timeline: 'Weeks 5 – 8',
    securityProtocol: 'Collaborative non-hierarchical learning circles inside secured facility library/classrooms.',
    keyDeliverables: [
      'Joint correctional officer and inmate training cohort (25–40 participants)',
      'Accredited vocational certification in permaculture & composting',
      'Interactive climate action workshops making sustainability understandable & actionable'
    ]
  },
  {
    step: 3,
    title: 'CLIMATE-RESILIENT INTERVENTIONS',
    shortTitle: 'Climate-Resilient Interventions',
    icon: 'eco',
    desc: 'Practical, low-cost solutions for heat, water, waste, and environmental resilience inside prison grounds.',
    output: '30-Action Custodial Blueprint',
    popupInsight: 'Low-cost physical interventions compliant with jail security',
    timeline: 'Weeks 9 – 16',
    securityProtocol: 'All tools, seeds, and construction materials strictly vetted under prison manual security regulations.',
    keyDeliverables: [
      'Application of high-albedo solar reflective roof barrier',
      'Construction of brick-lined vermicomposting waste beds',
      'Installation of rooftop first-flush rainwater harvesting filters'
    ]
  },
  {
    step: 4,
    title: 'PILOT & DEMONSTRATION',
    shortTitle: 'Pilot & Demonstration',
    icon: 'draw',
    desc: 'Live testing at Nuh District Jail, tracking heat reduction, efficient water use, and organic food harvests.',
    output: 'Operational Proof-of-Concept at Nuh Jail',
    popupInsight: '3.5°C cooling & 420kg organic harvests verified at Nuh',
    timeline: 'Weeks 17 – 26',
    securityProtocol: 'Daily inmate stewardship shifts with verified tool registers and staff mentorship.',
    keyDeliverables: [
      '3.5°C to 5.2°C ambient reduction confirmed inside barracks',
      '420 kg fresh chemical-free vegetables harvested for jail kitchen',
      '250 kg raw kitchen organic waste diverted daily from open dumps'
    ]
  },
  {
    step: 5,
    title: 'DOCUMENTATION & REPLICATION',
    shortTitle: 'Documentation & Replication',
    icon: 'account_tree',
    desc: 'Documenting practical outcomes with the aim of developing a model that can be replicated across prisons in India.',
    output: 'National Replicable Model',
    popupInsight: 'Open-access blueprint for state & national prison directorates',
    timeline: 'Months 7 – 12',
    securityProtocol: 'Inter-state institutional knowledge transfer vetted by state prison headquarters.',
    keyDeliverables: [
      '30-Action Custodial Climate Adaptation Handbook published',
      'Documentation of Nuh District Jail pilot outcomes and standard operating procedures',
      'Replication roadmap adapted for central and district jails across India'
    ]
  }
];

export const CLIMATE_ACTIONS_30: ClimateAction[] = [
  // 1. CLIMATE-RESILIENT INFRASTRUCTURE (6)
  {
    id: 'infra-1',
    category: 'infrastructure',
    categoryTitle: 'Climate-Resilient Infrastructure',
    number: 1,
    title: 'High-Albedo Cool Roof Coating',
    shortDesc: 'Solar-reflective white elastomeric paint applied over barracks roofs to bounce thermal radiation.',
    detailedSop: 'Clean flat concrete slabs, apply high-adhesion primer, followed by two cross-coats of 105 SRI reflective solar barrier. Lowers ceiling surface heat by up to 12°C.',
    impactMetric: '3.5°C to 5.2°C ambient reduction inside sleeping barracks',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'roofing'
  },
  {
    id: 'infra-2',
    category: 'infrastructure',
    categoryTitle: 'Climate-Resilient Infrastructure',
    number: 2,
    title: 'Natural Bamboo & Reed Window Screens',
    shortDesc: 'Woven local reed shades placed outside sunny window facades to prevent direct solar gain.',
    detailedSop: 'Sourced from local artisans, treated with natural neem-oil termite resistant wash, hung on adjustable pulley cords.',
    impactMetric: 'Reduces peak afternoon radiant glare by 65%',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'curtains'
  },
  {
    id: 'infra-3',
    category: 'infrastructure',
    categoryTitle: 'Climate-Resilient Infrastructure',
    number: 3,
    title: 'Passive Cross-Ventilation Louvers',
    shortDesc: 'High-level clerestory air release vents expelling accumulated hot air near ceiling ridges.',
    detailedSop: 'Retrofitting custodial security grilles with angled steel louver deflectors to encourage convective thermal draw.',
    impactMetric: '2.2x increase in night-time air change rate',
    statusAtNuh: 'in-progress',
    feasibility: 'Medium-term',
    icon: 'air'
  },
  {
    id: 'infra-4',
    category: 'infrastructure',
    categoryTitle: 'Climate-Resilient Infrastructure',
    number: 4,
    title: 'Thermal Corridor Buffers & Shaded Verandas',
    shortDesc: 'Intermediary covered breezeways shielding interior living cells from blistering perimeter walls.',
    detailedSop: 'Utilizing climbing bougainvillea and lightweight tensile canopies along outer prison walkways.',
    impactMetric: 'Blocks direct midday wall baking over 180 linear meters',
    statusAtNuh: 'in-progress',
    feasibility: 'Medium-term',
    icon: 'balcony'
  },
  {
    id: 'infra-5',
    category: 'infrastructure',
    categoryTitle: 'Climate-Resilient Infrastructure',
    number: 5,
    title: 'Energy-Efficient Solar Inverter Backups',
    shortDesc: 'Decentralized rooftop photovoltaic packs keeping ceiling fans running during rural blackout spikes.',
    detailedSop: 'Installation of 10kVA hybrid solar array with lithium battery backup tied to essential barrack ventilation fans.',
    impactMetric: 'Zero downtime during 6-hour summer grid outages',
    statusAtNuh: 'planned',
    feasibility: 'Strategic',
    icon: 'solar_power'
  },
  {
    id: 'infra-6',
    category: 'infrastructure',
    categoryTitle: 'Climate-Resilient Infrastructure',
    number: 6,
    title: 'Permeable Courtyard Pavements',
    shortDesc: 'Interlocking hollow concrete pavers allowing rainwater penetration while curbing radiant heat sink.',
    detailedSop: 'Excavation of hard concrete yards, laying gravel sub-base, and setting grass-jointed permeable paving blocks.',
    impactMetric: '4.8°C lower radiant ground temperature compared to asphalt',
    statusAtNuh: 'planned',
    feasibility: 'Strategic',
    icon: 'grid_view'
  },

  // 2. WATER CONSERVATION (6)
  {
    id: 'water-1',
    category: 'water',
    categoryTitle: 'Water Conservation',
    number: 7,
    title: 'Decentralized Rooftop Rainwater Catchment',
    shortDesc: 'Connecting large barrack roof drains through sand-gravel filters into existing storage sumps.',
    detailedSop: 'PVC downspouts fitted with first-flush diverters, lead-free pipe manifold, and 50,000L underground cistern connection.',
    impactMetric: 'Harvests ~450,000 liters of potable water each monsoon season',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'water_drop'
  },
  {
    id: 'water-2',
    category: 'water',
    categoryTitle: 'Water Conservation',
    number: 8,
    title: 'Greywater Reed-Bed Phytoremediation',
    shortDesc: 'Natural root-zone biofilter treating laundry and ablution runoff for landscape reuse.',
    detailedSop: 'Constructed wetland trench planted with Typha and Canna indica reeds filtering suspended solids and soap residues.',
    impactMetric: 'Reclaims 8,000 liters daily for garden crop irrigation',
    statusAtNuh: 'in-progress',
    feasibility: 'Medium-term',
    icon: 'filter_alt'
  },
  {
    id: 'water-3',
    category: 'water',
    categoryTitle: 'Water Conservation',
    number: 9,
    title: 'Common-Tap Push Aerators & Flow Restrictors',
    shortDesc: 'Vandal-proof brass aerator caps regulating flow rates across common wash facilities.',
    detailedSop: 'Replaces leaking continuous taps with 2.5 L/min self-closing pressure valves across all communal ablution blocks.',
    impactMetric: '42% reduction in daily municipal water consumption',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'faucet'
  },
  {
    id: 'water-4',
    category: 'water',
    categoryTitle: 'Water Conservation',
    number: 10,
    title: 'Gravity-Fed Subsurface Drip Irrigation',
    shortDesc: 'Targeted root-zone drip lines for jail kitchen gardens without requiring fossil-fuel pumps.',
    detailedSop: 'Elevated 2,000L head tank supplying calibrated emitter lines directly beneath organic mulch layers.',
    impactMetric: 'Saves 70% irrigation water vs manual hose-spraying',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'shower'
  },
  {
    id: 'water-5',
    category: 'water',
    categoryTitle: 'Water Conservation',
    number: 11,
    title: 'Deep Aquifer Recharge Pit Injection',
    shortDesc: 'Direct percolation shafts directing surplus storm runoff past clay strata to replenish local water tables.',
    detailedSop: 'Dual-chamber silt-settling tank feeding a 60ft perforated casing pipe into the subterranean sandy aquifer.',
    impactMetric: '+1.8 meter local water table stabilization in pilot zone',
    statusAtNuh: 'planned',
    feasibility: 'Strategic',
    icon: 'waves'
  },
  {
    id: 'water-6',
    category: 'water',
    categoryTitle: 'Water Conservation',
    number: 12,
    title: 'Communal Water Tank Level Telemetry & Leak Audits',
    shortDesc: 'Simple mechanical floats and daily undertrial water-marshal logs to prevent overnight overflow.',
    detailedSop: 'Daily inspection ledger signed by barrack representatives ensuring instant replacement of damaged gaskets.',
    impactMetric: 'Zero accidental tank overflow loss recorded since launch',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'speed'
  },

  // 3. WASTE MANAGEMENT (6)
  {
    id: 'waste-1',
    category: 'waste',
    categoryTitle: 'Waste Management',
    number: 13,
    title: 'Source Kitchen Waste Segregation (3-Stream)',
    shortDesc: 'Color-coded stainless bins in prison mess separating wet organic scraps, recyclables, and inert trash.',
    detailedSop: 'Daily kitchen team training in separating vegetable peelings from cooked oils and packaging materials.',
    impactMetric: 'Diverts 100% of organic scraps away from open municipal dumps',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'delete'
  },
  {
    id: 'waste-2',
    category: 'waste',
    categoryTitle: 'Waste Management',
    number: 14,
    title: 'Aerobic Vermicomposting Beds (Eisenia fetida)',
    shortDesc: 'Raised brick pits utilizing red wiggler earthworms to process up to 250kg of kitchen greens daily.',
    detailedSop: 'Layered bedding of dried leaves, cow manure, and chopped kitchen scraps inoculated with native earthworm colonies.',
    impactMetric: 'Yields 1.5 tons of nutrient-rich vermicompost monthly',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'compost'
  },
  {
    id: 'waste-3',
    category: 'waste',
    categoryTitle: 'Waste Management',
    number: 15,
    title: 'Zero Open-Burning Enforcement Protocol',
    shortDesc: 'Eliminating the hazardous open burning of dried leaves and custodial plastic rubbish within jail premises.',
    detailedSop: 'Institutional directive paired with leaf-shredding bins and designated mulch storage pits for soil cover.',
    impactMetric: 'Zero toxic dioxin smoke plumes over custodial grounds',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'smoke_free'
  },
  {
    id: 'waste-4',
    category: 'waste',
    categoryTitle: 'Waste Management',
    number: 16,
    title: 'Dry Recyclables Baling & Authorized Channeling',
    shortDesc: 'Sorting clean cardboard, packaging plastic, and aluminum foil for authorized recycling collection.',
    detailedSop: 'Inmate cooperative manually flattening, sorting, and bundling recyclables for revenue-generating scrap vendors.',
    impactMetric: '₹14,000 generated monthly for the Prison Inmate Welfare Fund',
    statusAtNuh: 'in-progress',
    feasibility: 'Medium-term',
    icon: 'recycling'
  },
  {
    id: 'waste-5',
    category: 'waste',
    categoryTitle: 'Waste Management',
    number: 17,
    title: 'Bio-Enzyme Citrus Floor Cleaner Production',
    shortDesc: 'Fermenting fruit peels, brown sugar, and water to replace harsh corrosive custodial chemical cleaners.',
    detailedSop: '90-day anaerobic fermentation in airtight food-grade barrels creating natural acidic cleaning solution.',
    impactMetric: 'Replaces 60% of caustic chemical phenyl in barrack sanitation',
    statusAtNuh: 'in-progress',
    feasibility: 'Medium-term',
    icon: 'science'
  },
  {
    id: 'waste-6',
    category: 'waste',
    categoryTitle: 'Waste Management',
    number: 18,
    title: 'Strict Hazardous & Medical Waste Segregation',
    shortDesc: 'Separate color-coded puncture-proof disposal boxes for dispensary sharps, bandages, and expired medicine.',
    detailedSop: 'Standard biomedical protocol with incinerator chain handover preventing dangerous compound contamination.',
    impactMetric: '100% compliance with Biomedical Waste Management Rules',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'sanitizer'
  },

  // 4. SUSTAINABLE & GREEN PRACTICES (6)
  {
    id: 'green-1',
    category: 'green',
    categoryTitle: 'Sustainable & Green Practices',
    number: 19,
    title: '1.2-Acre Permaculture Kitchen Garden Bed',
    shortDesc: 'Multi-tiered edible ecosystem producing chemical-free vegetables directly for daily inmate meals.',
    detailedSop: 'Raised beds constructed with organic compost, companion planting, and mulch to retain moisture and foster soil biome.',
    impactMetric: 'Supplements daily barrack mess with 420kg+ fresh seasonal greens',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'yard'
  },
  {
    id: 'green-2',
    category: 'green',
    categoryTitle: 'Sustainable & Green Practices',
    number: 20,
    title: 'Native Drought-Hardy Shade Tree Canopy',
    shortDesc: 'Planting indigenous species like Neem, Peepal, Jamun, and Kikar to create long-term windbreaks and shade.',
    detailedSop: 'Saplings planted with organic soil amendment and protected by tree guards maintained by assigned undertrials.',
    impactMetric: '180 native saplings planted with 92% survival rate',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'park'
  },
  {
    id: 'green-3',
    category: 'green',
    categoryTitle: 'Sustainable & Green Practices',
    number: 21,
    title: 'High-Nutrition Moringa (Drumstick) Groves',
    shortDesc: 'Densely planting fast-growing Moringa oleifera trees for highly nutritious leaves and pods.',
    detailedSop: 'Regular pruning to maintain bush height for easy harvesting; leaves ground and added to lentil dal pots.',
    impactMetric: 'Provides bioavailable iron and Vitamin A to 300+ inmates weekly',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'spa'
  },
  {
    id: 'green-4',
    category: 'green',
    categoryTitle: 'Sustainable & Green Practices',
    number: 22,
    title: 'Medicinal & Anti-Mosquito Botanical Belts',
    shortDesc: 'Border plantings of Tulsi, Citronella, Lemongrass, and Marigold along drainage ditches.',
    detailedSop: 'Natural aromatic repellents planted along ward perimeters to deter vector mosquitoes and soothe minor ailments.',
    impactMetric: '35% drop in seasonal vector-borne dispensary visits',
    statusAtNuh: 'in-progress',
    feasibility: 'Immediate',
    icon: 'local_florist'
  },
  {
    id: 'green-5',
    category: 'green',
    categoryTitle: 'Sustainable & Green Practices',
    number: 23,
    title: 'Prison Seed-Bank & Heirloom Propagation Nursery',
    shortDesc: 'Harvesting, drying, and preserving open-pollinated indigenous vegetable seeds for continuous planting.',
    detailedSop: 'Inmates learn seed-selection techniques from master agronomists, storing heritage seeds in earthen pots.',
    impactMetric: 'Achieves self-sufficiency in seasonal vegetable seeds',
    statusAtNuh: 'in-progress',
    feasibility: 'Medium-term',
    icon: 'grain'
  },
  {
    id: 'green-6',
    category: 'green',
    categoryTitle: 'Sustainable & Green Practices',
    number: 24,
    title: 'Botanical Pest Deterrents (Neemastra & Agniastra)',
    shortDesc: 'Natural pesticide brews made of neem leaves, cow urine, and garlic to replace toxic synthetic chemicals.',
    detailedSop: 'Organic brewing protocol yielding safe foliar spray protecting gourd and eggplant crops from whiteflies.',
    impactMetric: '100% elimination of toxic organophosphate insecticides in garden',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'pest_control'
  },

  // 5. EDUCATION & ENGAGEMENT (6)
  {
    id: 'edu-1',
    category: 'education',
    categoryTitle: 'Education & Engagement',
    number: 25,
    title: 'Joint Staff-Inmate Climate Literacy Masterclasses',
    shortDesc: 'Weekly classroom sessions bringing prison wardens and incarcerated persons together to study climate resilience.',
    detailedSop: 'Interactive visual modules explaining heat dynamics, resource conservation, and hands-on custodial tasks.',
    impactMetric: '165 individuals certified as Civic Climate Stewards',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'co_present'
  },
  {
    id: 'edu-2',
    category: 'education',
    categoryTitle: 'Education & Engagement',
    number: 26,
    title: 'Peer Eco-Ambassador Leadership Cohort',
    shortDesc: 'Designating trained inmate leaders in each barrack to oversee water taps, waste bins, and plant care.',
    detailedSop: 'Rotational peer responsibility encouraging civic pride, conflict mediation, and custodial leadership.',
    impactMetric: '18 active ward ambassadors driving daily conservation audits',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'badge'
  },
  {
    id: 'edu-3',
    category: 'education',
    categoryTitle: 'Education & Engagement',
    number: 27,
    title: 'Regenerative Agriculture Vocational Certificates',
    shortDesc: 'Formal certificate course accredited for organic farm management upon post-release community reintegration.',
    detailedSop: '80-hour syllabus covering vermiculture, drip irrigation setup, crop rotations, and market horticulture.',
    impactMetric: 'Recognized certificate valid with partner organic farms & nurseries',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'verified'
  },
  {
    id: 'edu-4',
    category: 'education',
    categoryTitle: 'Education & Engagement',
    number: 28,
    title: 'Prison Harvest Day & Dignity Convocations',
    shortDesc: 'Quarterly harvest festivals celebrating farm yields, shared meals, and formal certification handovers.',
    detailedSop: 'Judicial magistrates, correctional superintendents, and families witness certificate distribution to graduates.',
    impactMetric: 'Boosts self-efficacy and restorative self-worth index by 78%',
    statusAtNuh: 'implemented',
    feasibility: 'Immediate',
    icon: 'celebration'
  },
  {
    id: 'edu-5',
    category: 'education',
    categoryTitle: 'Education & Engagement',
    number: 29,
    title: 'Ecotherapy & Stress Reduction Mindfulness',
    shortDesc: 'Combining garden maintenance with guided morning grounding sessions to alleviate confinement trauma.',
    detailedSop: '30-minute daily horticulture therapy sessions led by certified trauma-informed counselors.',
    impactMetric: 'Measurable drop in custodial sleep disturbance and panic episodes',
    statusAtNuh: 'in-progress',
    feasibility: 'Immediate',
    icon: 'self_improvement'
  },
  {
    id: 'edu-6',
    category: 'education',
    categoryTitle: 'Education & Engagement',
    number: 30,
    title: 'State-Level Policy Advocacy & Replication SOPs',
    shortDesc: 'Synthesizing data from Nuh District Jail into replication manuals for national prison inspectorates.',
    detailedSop: 'Bilingual policy whitepapers distributed to Haryana, Punjab, Delhi, and Rajasthan prison directorates.',
    impactMetric: 'Presented at South Asia Correctional Reform Summit 2025',
    statusAtNuh: 'in-progress',
    feasibility: 'Strategic',
    icon: 'menu_book'
  }
];

export const THREE_PILLARS: Pillar[] = [
  {
    id: 'pillar-1',
    roman: 'Pillar I',
    title: 'Climate-Resilient Infrastructure',
    subtitle: 'Thermal Protection & Weather Adaptation',
    desc: 'Transforming enclosed, heat-vulnerable prison barracks into climate-adaptive spaces through passive cooling, reflective barriers, and improved cross-ventilation.',
    bullets: [
      'High-albedo solar-reflective roof coatings lowering ceiling heat by up to 12°C and indoor temperatures by 3.5°C to 5.2°C',
      'Natural bamboo and reed window shading deflecting radiant glare and heat gain from barrack interiors',
      'Passive cross-ventilation louvers and shaded breezeways preventing thermal heat entrapment'
    ],
    icon: 'roofing',
    accentColor: '#12560e'
  },
  {
    id: 'pillar-2',
    roman: 'Pillar II',
    title: 'Water Conservation & Waste Circularity',
    subtitle: 'Rainwater Harvesting & Vermicomposting',
    desc: 'Relieving municipal water stress and eliminating sanitation hazards through decentralized circular ecological systems inside custodial grounds.',
    bullets: [
      'Rooftop rainwater harvesting channels and deep aquifer recharge filtering millions of liters annually',
      '100% kitchen food waste segregation and red-worm vermicomposting converting 250kg food scraps daily',
      'Safe greywater bio-filtration and organic nutrient cycling reusing non-potable water for crop irrigation'
    ],
    icon: 'water_drop',
    accentColor: '#3e6a00'
  },
  {
    id: 'pillar-3',
    roman: 'Pillar III',
    title: 'Prisoner Wellbeing & Capacity Building',
    subtitle: 'Kitchen Gardens & Certified Eco-Stewardship',
    desc: 'Promoting nutritional security, stress reduction, and accredited vocational skills through interactive learning and hands-on permaculture.',
    bullets: [
      '1.2 acres of active organic kitchen garden beds supplementing inmate daily diets with fresh chemical-free vegetables',
      'Joint participatory workshops uniting correctional staff and incarcerated individuals in climate stewardship',
      'Accredited vocational certification in permaculture, vermicomposting, and eco-infrastructure maintenance'
    ],
    icon: 'yard',
    accentColor: '#703d00'
  }
];

// Official 5 Focus Areas from the Eco-Reform Brochure
export const FOCUS_AREAS_5 = [
  {
    id: 'infrastructure',
    title: 'Climate-Resilient Infrastructure',
    tagline: 'Improving prison infrastructure',
    desc: 'Improving prison infrastructure to better respond to extreme heat, changing weather conditions and other climate risks.',
    icon: 'domain',
    color: '#d97706',
    count: 6
  },
  {
    id: 'water',
    title: 'Water Conservation',
    tagline: 'Efficient water use & storage',
    desc: 'Promoting efficient water use, improved storage and practical water-conservation solutions.',
    icon: 'water_drop',
    color: '#0284c7',
    count: 6
  },
  {
    id: 'waste',
    title: 'Waste Management',
    tagline: 'Segregation & sustainable practices',
    desc: 'Encouraging waste segregation, composting, recycling and sustainable waste-management practices.',
    icon: 'delete_sweep',
    color: '#16a34a',
    count: 6
  },
  {
    id: 'green',
    title: 'Sustainable & Green Practices',
    tagline: 'Kitchen gardens & green spaces',
    desc: 'Promoting kitchen gardens, green spaces, sustainable food practices and environmentally responsible operations.',
    icon: 'yard',
    color: '#15803d',
    count: 6
  },
  {
    id: 'education',
    title: 'Education & Engagement',
    tagline: 'Staff & incarcerated participation',
    desc: 'Building climate awareness and encouraging participation of prison staff and incarcerated individuals in sustainability initiatives.',
    icon: 'school',
    color: '#703d00',
    count: 6
  }
];

export const IMPACT_STORIES: ImpactStory[] = [
  {
    id: 'story-1',
    tag: 'Case Study #481',
    title: "Rajesh's Journey: From 3 Years Incarceration to Agro-Supervisor",
    story: 'Facing prolonged custodial confinement, Rajesh trained in our custodial kitchen garden and vermicomposting facility at Nuh District Jail. Today, he manages a community nursery in Gurgaon earning ₹22,000 monthly.',
    author: 'Rajesh M.',
    role: 'Reintegrated · Now Agro-Supervisor',
    avatarLetter: 'R',
    highlight: 'Earns ₹22,000/mo in Gurgaon Nursery'
  },
  {
    id: 'story-2',
    tag: 'Institutional Perspective',
    title: '“Eco-Reform Has Visibly Lowered Ward Stress”',
    story: '“The heat waves in Southern Haryana make wards boiling cauldrons. The roof whitewash and green beds developed with TYCIA Foundation gave inmates a constructive channel. Incidents of barrack agitation dropped noticeably this summer.”',
    author: 'Deputy Superintendent of Prisons',
    role: 'Haryana Correctional Services · Nuh Jail',
    avatarLetter: 'D',
    highlight: 'Noticeable drop in barrack heat agitation'
  },
  {
    id: 'story-3',
    tag: 'Family Restoration',
    title: "Sunita's Family Grant: Keeping 2 Daughters in School",
    story: "When Sunita's spouse was detained, household stability collapsed. TYCIA Foundation provided an emergency education grant for her two daughters while coordinating institutional care. Both girls remained enrolled, and her spouse was successfully reunited.",
    author: 'Sunita Devi',
    role: 'Dependent Welfare Beneficiary · Mewat Region',
    avatarLetter: 'S',
    highlight: 'Two daughters saved from school dropout'
  }
];

export const DONATION_TIERS = [
  {
    id: 'tier-1',
    name: 'Tier 01',
    amountInr: 1500,
    amountUsd: 20,
    title: 'Climate Literacy & Seed Stewardship Kit',
    desc: 'Funds native climate-resilient vegetable seeds, organic nursery soil prep materials, and educational handbooks for incarcerated trainees.',
    impact: '1 Trainee equipped with agro-stewardship kit',
    tag: 'Essential Care'
  },
  {
    id: 'tier-2',
    name: 'Tier 02',
    amountInr: 5000,
    amountUsd: 65,
    title: 'Monthly Vocational Training & Tool Kit',
    desc: 'Provides comprehensive 4-week permaculture, vermicomposting, and eco-masonry apprenticeship materials with safety tools.',
    impact: '1 Inmate certified in custodial green practices',
    tag: 'Livelihoods'
  },
  {
    id: 'tier-3',
    name: 'Tier 03',
    amountInr: 15000,
    amountUsd: 180,
    title: 'Barrack Cool-Roof & Thermal Barrier Pack',
    desc: 'Covers high-albedo solar reflective coating application over sleeping barrack concrete roofs, lowering ceiling heat by up to 12°C.',
    impact: 'Thermal relief for an entire barrack (80+ inmates)',
    tag: 'Most Critical',
    recommended: true
  },
  {
    id: 'tier-4',
    name: 'Tier 04',
    amountInr: 50000,
    amountUsd: 600,
    title: 'Pilot Prison Kitchen Garden Bed',
    desc: 'Builds a permanent raised-bed agroecology corridor with drip irrigation, native seeds, and 6-month hands-on instructor fees inside a prison ward.',
    impact: '1 Permaculture plot built (serves 120 inmates)',
    tag: 'Climate Resilience'
  }
];

export const CONTACT_INFO = {
  foundation: 'TYCIA FOUNDATION',
  tagline: 'Turn Your Concern Into Action',
  subtitle: 'Turn Your Concern Into Action',
  programme: 'Project Eco-Reform',
  address: 'N-33, Second Floor, Green Park Extension, New Delhi.',
  email: 'tyciafoundation@gmail.com',
  founder: 'Karan Kumar | Founder',
  founderEmail: 'Karanpsc@gmail.com',
  phone: '+91 880573488',
  website: 'www.eco-reform.in',
  regId: 'TYCIA/NGO/2015/04821',
  estYear: '2015',
  taxExemption: 'Section 12A & 80G Certified'
};
