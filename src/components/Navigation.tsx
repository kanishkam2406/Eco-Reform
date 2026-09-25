import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../data/brochureData';

interface NavigationProps {
  onOpenDonate: () => void;
  onOpenBrochure: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenDonate,
  onOpenBrochure,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }

      // Scrollspy to highlight current section in navigation
      const sections = ['hero', 'crisis', 'eco-reform', 'facility-blueprint', 'climate-actions', 'pathways', 'impact', 'partners', 'donate'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Overview', href: '#hero' },
    { id: 'crisis', label: 'Crisis', href: '#crisis' },
    { id: 'eco-reform', label: 'Model', href: '#eco-reform' },
    { id: 'facility-blueprint', label: 'Pilot Map', href: '#facility-blueprint' },
    { id: 'climate-actions', label: '30 Actions', href: '#climate-actions' },
    { id: 'pathways', label: 'Pathways', href: '#pathways' },
    { id: 'impact', label: 'Impact', href: '#impact' },
    { id: 'partners', label: 'Partners', href: '#partners' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/90 backdrop-blur-md shadow-sm border-b border-[#D1C9BC]/80 py-2'
            : 'bg-[#FAF9F5]/95 backdrop-blur-sm border-b border-[#D1C9BC]/50 py-2.5 sm:py-3'
        }`}
      >
      <div className="w-full max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 xl:gap-4">
        {/* Left: Brand Logo & Trust Tag */}
        <div className="shrink-0 flex items-center">
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex items-center gap-2 text-left group py-1 focus:outline-none shrink-0"
            title="Eco-Reform - Towards Climate-Resilient Adaptive Prisons"
          >
            <img
              src="/logo.png"
              alt="Eco-Reform: Towards Climate-Resilient Adaptive Prisons"
              className="h-7 sm:h-8 lg:h-9 w-auto max-w-[130px] sm:max-w-[160px] xl:max-w-[180px] object-contain transition-transform group-hover:scale-[1.02]"
            />
            <span className="hidden 2xl:inline-flex items-center gap-1 font-semibold text-[#12560E] uppercase tracking-wider text-[10px] bg-[#E2F3D9] px-2 py-0.5 rounded-full shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12560E] animate-pulse" />
              Nuh Pilot Active
            </span>
          </a>
        </div>

        {/* Center: Desktop Anchor Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0 mx-1 xl:mx-3 gap-0.5 lg:gap-1 xl:gap-2 2xl:gap-3 text-[11px] xl:text-[11.5px] 2xl:text-xs font-semibold text-[#41493d]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`relative px-1.5 xl:px-2 py-1 transition-colors hover:text-[#12560E] whitespace-nowrap shrink-0 ${
                  isActive ? 'text-[#12560E] font-bold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#12560E] rounded-full animate-in fade-in duration-200" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Action Controls & Triggers */}
        <div className="shrink-0 flex items-center justify-end gap-1.5 xl:gap-2.5">
          {/* Brochure Trigger Pill */}
          <button
            onClick={onOpenBrochure}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg text-[11px] xl:text-xs font-semibold text-[#12560E] bg-[#E2F3D9] hover:bg-[#D4EBC9] active:scale-[0.98] transition-all whitespace-nowrap shadow-2xs shrink-0"
            title="Inspect authentic field brochure publication"
          >
            <span className="material-symbols-outlined text-[15px] xl:text-[16px]">auto_stories</span>
            <span>Field Brochure</span>
          </button>

          {/* Primary Donate (80G) CTA */}
          <button
            onClick={onOpenDonate}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 xl:px-4 py-1.5 xl:py-2 rounded-lg text-[11px] xl:text-xs font-semibold bg-[#2E6F25] text-white hover:bg-[#12560E] active:scale-[0.98] transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0"
          >
            <span className="material-symbols-outlined text-[15px] xl:text-[16px]">favorite</span>
            <span>Donate (80G)</span>
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#41493d] hover:bg-[#EEEEE9] transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5]/98 backdrop-blur-md border-b border-[#D1C9BC] px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`p-2.5 rounded-lg border text-left flex items-center gap-2 transition-all ${
                  activeSection === link.id
                    ? 'bg-[#2E6F25] text-white border-[#2E6F25] shadow-xs'
                    : 'bg-white border-[#D1C9BC] text-[#1A1C19] hover:border-[#12560E]'
                }`}
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#D1C9BC]/60 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenBrochure();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-[#12560E] bg-[#E2F3D9] hover:bg-[#D4EBC9] flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">auto_stories</span>
              Inspect Field Brochure Screens
            </button>

            <button
              onClick={() => {
                onOpenDonate();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-[#2E6F25] hover:bg-[#12560E] rounded-lg text-center shadow-sm flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">favorite</span>
              Donate 80G
            </button>
          </div>
        </div>
      )}

      {/* 2.5px Top Ambient Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#2E6F25] via-[#7CA123] to-[#B9F079] transition-all duration-150 ease-out z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>

    {/* Floating Back to Top Button */}
    {isScrolled && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#12560E] text-white shadow-xl hover:bg-[#2E6F25] active:scale-95 transition-all duration-300 flex items-center justify-center border border-[#7CA123]/30 group hover:-translate-y-1 animate-in fade-in zoom-in-75"
        title="Back to Top"
        aria-label="Back to Top"
      >
        <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-y-0.5">
          keyboard_arrow_up
        </span>
      </button>
    )}
  </>
  );
};
