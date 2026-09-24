import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/brochureData';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTrack?: string;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({
  isOpen,
  onClose,
  defaultTrack,
}) => {
  const [track, setTrack] = useState<string>(defaultTrack || 'Climate-Resilient Infrastructure & Architecture');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [statement, setStatement] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const tracks = [
    { id: 'infra', label: 'Climate-Resilient Infrastructure & Architecture', icon: 'roofing' },
    { id: 'water-waste', label: 'Water Conservation & Waste Management', icon: 'water_drop' },
    { id: 'agro', label: 'Permaculture & Kitchen Garden Mentorship', icon: 'yard' },
    { id: 'education', label: 'Climate Education & Participatory Training', icon: 'school' },
    { id: 'replication', label: 'Field Research, Documentation & Scaling', icon: 'menu_book' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAF9F5] border border-[#D1C9BC] rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#EEEEE9] p-6 border-b border-[#D1C9BC] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#2E6F25] text-white flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[22px]">handshake</span>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-[#1A1C19] leading-tight">
                Join the Civic Reform Coalition
              </h3>
              <p className="text-xs text-[#41493d]">
                Turn your professional skills into systemic justice &amp; ecological resilience
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#D1C9BC]/50 hover:bg-[#D1C9BC] text-[#1A1C19] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {/* Track Selector */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#1A1C19] block uppercase tracking-wider">
                Select Your Civic Track *
              </label>
              <div className="space-y-1.5">
                {tracks.map((t) => (
                  <label
                    key={t.id}
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      track === t.label
                        ? 'border-[#2E6F25] bg-[#EEEEE9] font-semibold text-[#1A1C19]'
                        : 'border-[#D1C9BC] bg-white text-[#41493d] hover:border-[#717a6c]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="track"
                      checked={track === t.label}
                      onChange={() => setTrack(t.label)}
                      className="accent-[#2E6F25]"
                    />
                    <span className="material-symbols-outlined text-[18px] text-[#2E6F25]">
                      {t.icon}
                    </span>
                    <span>{t.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#41493d] block">Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Kavita Nair"
                  className="w-full px-3 py-2 bg-white border border-[#D1C9BC] rounded-lg text-xs text-[#1A1C19] focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-[#41493d] block">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="kavita@domain.com"
                  className="w-full px-3 py-2 bg-white border border-[#D1C9BC] rounded-lg text-xs text-[#1A1C19] focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#41493d] block">Phone / WhatsApp</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 bg-white border border-[#D1C9BC] rounded-lg text-xs text-[#1A1C19] focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-[#41493d] block">Location / City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. New Delhi / Remote"
                  className="w-full px-3 py-2 bg-white border border-[#D1C9BC] rounded-lg text-xs text-[#1A1C19] focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-[#41493d] block">
                How would you like to contribute? (Experience, hours/month)
              </label>
              <textarea
                rows={3}
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                placeholder="Share your professional background, availability, or institutional affiliation..."
                className="w-full px-3 py-2 bg-white border border-[#D1C9BC] rounded-lg text-xs text-[#1A1C19] focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#2E6F25] hover:bg-[#12560E] text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              Submit Expression of Interest
            </button>
          </form>
        ) : (
          <div className="p-8 space-y-5 text-center animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-[#e2f3d9] text-[#12560E] mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>

            <div className="space-y-1">
              <h4 className="font-serif text-2xl font-bold text-[#1A1C19]">
                Expression Received
              </h4>
              <p className="text-xs text-[#41493d] max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-[#1A1C19]">{name}</span>. A coordinator
                from our Delhi secretariat will review your profile and reach out within 48 hours.
              </p>
            </div>

            <div className="bg-[#EEEEE9] p-4 rounded-xl text-left text-xs space-y-1.5 border border-[#D1C9BC]">
              <div>
                <span className="text-[#717a6c]">Track:</span>{' '}
                <span className="font-semibold text-[#1A1C19]">{track}</span>
              </div>
              <div>
                <span className="text-[#717a6c]">Direct Secretariat Contact:</span>{' '}
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#12560E] font-medium hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div>
                <span className="text-[#717a6c]">Founder Line:</span>{' '}
                <span className="font-mono">{CONTACT_INFO.phone}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 bg-[#2E6F25] text-white text-xs font-semibold rounded-lg hover:bg-[#12560E] transition-colors"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
