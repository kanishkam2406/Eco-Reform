import React, { useState } from 'react';
import { DONATION_TIERS, CONTACT_INFO } from '../data/brochureData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTierId?: string;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  defaultTierId,
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>(defaultTierId || 'tier-3');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [panNumber, setPanNumber] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [receiptNumber, setReceiptNumber] = useState<string>('');
  const [paymentMode, setPaymentMode] = useState<'gateway' | 'direct'>('gateway');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const currentTier = DONATION_TIERS.find((t) => t.id === selectedTierId);
  const activeAmount = customAmount
    ? Number(customAmount)
    : currency === 'INR'
    ? currentTier?.amountInr || 15000
    : currentTier?.amountUsd || 180;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockReceipt = `80G-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setReceiptNumber(mockReceipt);
    setIsSuccess(true);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#FAF9F5] border border-[#D1C9BC] rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top-Right X (Close) Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          title="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white hover:bg-[#FAF9F5] text-[#1A1C19] border border-[#D1C9BC] shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
        >
          <span className="material-symbols-outlined text-[20px] select-none">close</span>
        </button>

        {/* Modal Header */}
        <div className="bg-[#EEEEE9] p-6 pr-16 border-b border-[#D1C9BC] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#2E6F25] text-white flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[22px]">favorite</span>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-[#1A1C19] leading-tight">
                Tax-Exempt Giving Portal
              </h3>
              <p className="text-xs text-[#41493d]">
                Section 12A &amp; 80G Certified • Reg. {CONTACT_INFO.regId}
              </p>
            </div>
          </div>
        </div>

        {/* Payment Mode Selector Tabs */}
        <div className="flex border-b border-[#D1C9BC] bg-white text-xs font-bold">
          <button
            type="button"
            onClick={() => setPaymentMode('gateway')}
            className={`flex-1 py-3 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              paymentMode === 'gateway'
                ? 'border-[#2E6F25] text-[#12560E] bg-[#EEEEE9]/50'
                : 'border-transparent text-[#717a6c] hover:text-[#1A1C19]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">credit_card</span>
            Instant 80G Card / UPI Checkout
          </button>
          <button
            type="button"
            onClick={() => setPaymentMode('direct')}
            className={`flex-1 py-3 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              paymentMode === 'direct'
                ? 'border-[#2E6F25] text-[#12560E] bg-[#EEEEE9]/50'
                : 'border-transparent text-[#717a6c] hover:text-[#1A1C19]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">account_balance</span>
            Direct Bank NEFT / RTGS / UPI
          </button>
        </div>

        {/* Modal Body */}
        {paymentMode === 'direct' ? (
          <div className="p-6 space-y-5 animate-in fade-in duration-200">
            <div className="p-4 bg-[#EEEEE9] rounded-xl border border-[#D1C9BC] space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12560E] block">
                Statutory Civic Trust Account
              </span>
              <p className="text-xs text-[#41493d] leading-relaxed">
                Direct transfers bypass transaction gateway deductions, allowing 100% of your contribution to reach undertrial defense and prison agroecology.
              </p>
            </div>

            <div className="space-y-3">
              {/* Account Number */}
              <div className="p-3.5 bg-white rounded-xl border border-[#D1C9BC] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#717a6c] uppercase font-bold block">Account Number</span>
                  <span className="font-mono font-bold text-sm text-[#1A1C19]">38491029482</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('38491029482', 'acc')}
                  className="px-3 py-1.5 bg-[#FAF9F5] border border-[#D1C9BC] hover:border-[#12560E] rounded-lg text-xs font-semibold text-[#12560E] flex items-center gap-1 transition-all"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copiedField === 'acc' ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedField === 'acc' ? 'Copied! ✓' : 'Copy'}</span>
                </button>
              </div>

              {/* IFSC Code */}
              <div className="p-3.5 bg-white rounded-xl border border-[#D1C9BC] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#717a6c] uppercase font-bold block">IFSC Code</span>
                  <span className="font-mono font-bold text-sm text-[#1A1C19]">SBIN0001234</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('SBIN0001234', 'ifsc')}
                  className="px-3 py-1.5 bg-[#FAF9F5] border border-[#D1C9BC] hover:border-[#12560E] rounded-lg text-xs font-semibold text-[#12560E] flex items-center gap-1 transition-all"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copiedField === 'ifsc' ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedField === 'ifsc' ? 'Copied! ✓' : 'Copy'}</span>
                </button>
              </div>

              {/* UPI ID */}
              <div className="p-3.5 bg-white rounded-xl border border-[#D1C9BC] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#717a6c] uppercase font-bold block">Trust UPI ID</span>
                  <span className="font-mono font-bold text-sm text-[#1A1C19]">tycia@sbi</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('tycia@sbi', 'upi')}
                  className="px-3 py-1.5 bg-[#FAF9F5] border border-[#D1C9BC] hover:border-[#12560E] rounded-lg text-xs font-semibold text-[#12560E] flex items-center gap-1 transition-all"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copiedField === 'upi' ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedField === 'upi' ? 'Copied! ✓' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#D1C9BC] text-xs text-[#717a6c] leading-relaxed">
              After transfer, please share transaction reference and PAN to <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#12560E] font-semibold hover:underline">{CONTACT_INFO.email}</a> for immediate 80G tax receipt issuance.
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-[#2E6F25] hover:bg-[#12560E] text-white text-xs font-semibold rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        ) : !isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Currency Switcher */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1A1C19] uppercase tracking-wider">
                Select Giving Tier
              </span>
              <div className="inline-flex p-1 bg-[#EEEEE9] rounded-lg border border-[#D1C9BC] text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => {
                    setCurrency('INR');
                    setCustomAmount('');
                  }}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    currency === 'INR' ? 'bg-[#2E6F25] text-white shadow-sm' : 'text-[#41493d]'
                  }`}
                >
                  ₹ INR
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCurrency('USD');
                    setCustomAmount('');
                  }}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    currency === 'USD' ? 'bg-[#2E6F25] text-white shadow-sm' : 'text-[#41493d]'
                  }`}
                >
                  $ USD
                </button>
              </div>
            </div>

            {/* Tier Cards */}
            <div className="grid grid-cols-2 gap-3">
              {DONATION_TIERS.map((tier) => {
                const isSelected = selectedTierId === tier.id && !customAmount;
                const displayAmt = currency === 'INR' ? `₹${tier.amountInr.toLocaleString('en-IN')}` : `$${tier.amountUsd}`;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => {
                      setSelectedTierId(tier.id);
                      setCustomAmount('');
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all relative ${
                      isSelected
                        ? 'border-[#2E6F25] bg-[#EEEEE9] ring-2 ring-[#2E6F25]/20 shadow-sm'
                        : 'border-[#D1C9BC] bg-white hover:border-[#717a6c]'
                    }`}
                  >
                    {tier.recommended && (
                      <span className="absolute -top-2 right-2 bg-[#703d00] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                        Most Critical
                      </span>
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7CA123] block">
                      {tier.name}
                    </span>
                    <span className="text-base font-bold text-[#1A1C19] block font-mono mt-0.5">
                      {displayAmt}
                    </span>
                    <span className="text-[11px] text-[#41493d] line-clamp-2 mt-1">
                      {tier.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Custom Amount Input */}
            {/* <div className="space-y-1">
              <label className="text-xs font-semibold text-[#1A1C19] block">
                Or Custom Contribution Amount ({currency}):
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-mono font-bold text-[#717a6c]">
                  {currency === 'INR' ? '₹' : '$'}
                </span>
                <input
                  type="number"
                  min="100"
                  step="50"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter custom amount"
                  className="w-full pl-8 pr-4 py-2 bg-white border border-[#D1C9BC] rounded-lg text-sm text-[#1A1C19] font-mono focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
                />
              </div>
            </div> */}

            {/* Donor Information */}
            {/* <div className="space-y-3 pt-2 border-t border-[#EEEEE9]">
              <span className="text-xs font-semibold text-[#1A1C19] uppercase tracking-wider block">
                Donor &amp; Tax Exemption Details
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#41493d] block">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra"
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
                    placeholder="name@domain.com"
                    className="w-full px-3 py-2 bg-white border border-[#D1C9BC] rounded-lg text-xs text-[#1A1C19] focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-[#41493d] block">
                  PAN Number (for Indian Section 80G tax benefit receipt)
                </label>
                <input
                  type="text"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                  placeholder="ABCDE1234F (Optional for international donors)"
                  maxLength={10}
                  className="w-full px-3 py-2 bg-white border border-[#D1C9BC] rounded-lg text-xs font-mono uppercase text-[#1A1C19] focus:outline-none focus:ring-2 focus:ring-[#2E6F25]"
                />
              </div>
            </div> */}

            {/* Fund Allocation Bar */}
            <div className="bg-[#EEEEE9] p-3.5 rounded-xl border border-[#D1C9BC] space-y-1.5 text-xs text-[#41493d]">
              <div className="flex justify-between font-medium">
                <span>Audited Fund Allocation:</span>
                <span className="text-[#12560E] font-bold">82% Direct Program Delivery</span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden flex bg-[#D1C9BC]">
                <div className="bg-[#12560E] h-full" style={{ width: '82%' }} />
                <div className="bg-[#7CA123] h-full" style={{ width: '11%' }} />
                <div className="bg-[#703d00] h-full" style={{ width: '7%' }} />
              </div>
              <div className="flex justify-between text-[10px] text-[#717a6c] pt-0.5">
                <span>82% Prison Operations</span>
                <span>11% Monitoring</span>
                <span>7% Audit &amp; Trust</span>
              </div>
            </div>

            {/* Submit Button */}
            {/* <button
              type="submit"
              className="w-full py-3 bg-[#2E6F25] hover:bg-[#12560E] text-white font-semibold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">lock</span>
              Proceed to Secure Contribution of {currency === 'INR' ? `₹${activeAmount.toLocaleString('en-IN')}` : `$${activeAmount}`}
            </button> */}
          </form>
        ) : (
          /* Success & Mock 80G Receipt */
          <div className="p-6 space-y-6 text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#e2f3d9] text-[#12560E] mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>

            <div className="space-y-1">
              <h4 className="font-serif text-2xl font-bold text-[#1A1C19]">
                Contribution Acknowledged
              </h4>
              <p className="text-xs text-[#41493d]">
                Thank you for turning your concern into action, <span className="font-semibold text-[#1A1C19]">{fullName}</span>.
              </p>
            </div>

            {/* Simulated Receipt Card */}
            <div className="bg-white border-2 border-dashed border-[#D1C9BC] rounded-xl p-5 text-left space-y-3 font-mono text-xs text-[#1A1C19]">
              <div className="flex justify-between border-b border-[#EEEEE9] pb-2">
                <span className="font-bold">Receipt ID: {receiptNumber}</span>
                <span className="text-[#12560E] font-bold">PAID</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-[#717a6c] block">Organization:</span>
                  <span className="font-semibold">TYCIA Foundation</span>
                </div>
                <div>
                  <span className="text-[#717a6c] block">Trust Reg ID:</span>
                  <span className="font-semibold">{CONTACT_INFO.regId}</span>
                </div>
                <div>
                  <span className="text-[#717a6c] block">Amount Received:</span>
                  <span className="font-bold text-sm text-[#12560E]">
                    {currency === 'INR' ? `₹${activeAmount.toLocaleString('en-IN')}` : `$${activeAmount}`}
                  </span>
                </div>
                <div>
                  <span className="text-[#717a6c] block">Tax Status:</span>
                  <span className="font-semibold">80G Deductible</span>
                </div>
                {panNumber && (
                  <div>
                    <span className="text-[#717a6c] block">Donor PAN:</span>
                    <span className="font-semibold">{panNumber}</span>
                  </div>
                )}
                <div>
                  <span className="text-[#717a6c] block">Date:</span>
                  <span>{new Date().toLocaleDateString('en-GB')}</span>
                </div>
              </div>
              <div className="text-[10px] text-[#717a6c] pt-2 border-t border-[#EEEEE9]">
                An official digitally signed 80G certificate has been dispatched to {email}.
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2.5 bg-white border border-[#D1C9BC] hover:bg-[#EEEEE9] text-xs font-semibold rounded-lg text-[#1A1C19] transition-colors"
              >
                Print Receipt
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 bg-[#2E6F25] hover:bg-[#12560E] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
