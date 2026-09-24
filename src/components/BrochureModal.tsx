import React from 'react';
import { BrochureScreens } from './BrochureScreens';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreActions?: () => void;
  onOpenDonate?: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  onExploreActions,
  onOpenDonate,
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Floating Top-Right X (Close) Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        title="Close modal"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-white hover:bg-[#FAF9F5] text-[#1A1C19] border border-[#D1C9BC] shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
      >
        <span className="material-symbols-outlined text-[24px] select-none">close</span>
      </button>

      <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4">
        <div
          onClick={(e) => e.stopPropagation()}
          className="max-w-7xl mx-auto relative"
        >
          <BrochureScreens
            onClose={onClose}
            onExploreActions={() => {
              onClose();
              if (onExploreActions) onExploreActions();
            }}
            onOpenDonate={() => {
              onClose();
              if (onOpenDonate) onOpenDonate();
            }}
          />
        </div>
      </div>
    </div>
  );
};
