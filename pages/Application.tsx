import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ApplicationState } from '../types';
import { PROPERTIES, LOGO_URL, COMPANY_NAME } from '../constants';
import {
  Check,
  ChevronRight,
  User,
  Home,
  Briefcase,
  Users,
  ShieldCheck,
  FileText,
  MapPin,
  Calendar,
  DollarSign,
  Dog,
  ArrowLeft,
  Lock,
  Shield,
  Activity,
  Cpu,
  Fingerprint,
  Zap,
  Globe,
  X,
  Printer,
  Download,
  CheckCircle2,
  FileBadge
} from 'lucide-react';

// --- PRINT COMPONENT: THE PROFESSIONAL GRADE APPLICATION ---
const BrandedApplicationDocument: React.FC<{ state: ApplicationState; docId: string }> = ({ state, docId }) => {
  const selectedProperty = PROPERTIES.find(p => p.id === state.propertyId);
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div id="application-document" className="bg-white text-slate-900 p-[1.5in] font-serif leading-relaxed shadow-2xl mx-auto max-w-[8.5in] min-h-[11in] relative">
      {/* Formal Header */}
      <div className="flex justify-between items-start border-b-4 border-slate-900 pb-8 mb-12">
        <div className="space-y-2">
          <img src={LOGO_URL} alt="ESDR Living" className="h-16 object-contain grayscale" />
          <h1 className="text-2xl font-black uppercase tracking-tighter">Residential Rental Application</h1>
          <p className="text-[10px] uppercase tracking-widest font-sans font-bold text-slate-400">Authorized Secure Record &bull; {docId}</p>
        </div>
        <div className="text-right font-sans">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-green">Submission Date</div>
          <div className="text-sm font-bold">{today}</div>
        </div>
      </div>

      <div className="space-y-10">
        {/* Section 1: Property */}
        <div className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] bg-slate-100 px-4 py-2 inline-block font-sans">01. Target Residence Allocation</h2>
          <div className="grid grid-cols-2 gap-8 font-sans">
            <div>
              <label className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Property Identification</label>
              <p className="text-sm font-black border-b border-slate-200 pb-2">{selectedProperty?.title || 'Premier Legacy Unit'}</p>
            </div>
            <div>
              <label className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Deployment Location</label>
              <p className="text-sm font-black border-b border-slate-200 pb-2">{selectedProperty?.location || 'Eastern Ontario'}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 font-sans mt-4">
            <div>
              <label className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Requested Commencement</label>
              <p className="text-sm font-black border-b border-slate-200 pb-2">{state.moveInDate || 'TBD'}</p>
            </div>
            <div>
              <label className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Commitment Term</label>
              <p className="text-sm font-black border-b border-slate-200 pb-2">{state.requestedLeaseTerm}</p>
            </div>
          </div>
        </div>

        {/* Section 2: Applicant */}
        <div className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] bg-slate-100 px-4 py-2 inline-block font-sans">02. Primary Applicant Identity</h2>
          <div className="grid grid-cols-2 gap-8 font-sans">
            <div>
              <label className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Legal Full Name</label>
              <p className="text-sm font-black border-b border-slate-200 pb-2">{state.firstName} {state.lastName}</p>
            </div>
            <div>
              <label className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Digital Protocol (Email)</label>
              <p className="text-sm font-black border-b border-slate-200 pb-2">{state.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 font-sans mt-4">
            <div>
              <label className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Direct Communication (Phone)</label>
              <p className="text-sm font-black border-b border-slate-200 pb-2">{state.phone}</p>
            </div>
            <div>
              <label className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Primary Residence History</label>
              <p className="text-sm font-black border-b border-slate-200 pb-2">{state.currentAddress}</p>
            </div>
          </div>
        </div>

        {/* Section 3: Financials */}
        <div className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] bg-slate-100 px-4 py-2 inline-block font-sans">03. Yield Verification & Employment</h2>
          <div className="grid grid-cols-2 gap-8 font-sans">
            <div>
              <label className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Employer Organization</label>
              <p className="text-sm font-black border-b border-slate-200 pb-2">{state.employerName}</p>
            </div>
            <div className="bg-slate-900 text-white p-4 rounded-xl">
              <label className="text-[8px] uppercase font-bold text-slate-400 block mb-1">Verified Monthly Yield</label>
              <p className="text-2xl font-black italic tracking-tighter">${state.monthlyIncome}</p>
            </div>
          </div>
        </div>

        {/* Section 4: Ethics & Occupancy */}
        <div className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] bg-slate-100 px-4 py-2 inline-block font-sans">04. Living Dynamics & Logistics</h2>
          <div className="grid grid-cols-3 gap-6 font-sans">
            <div>
              <label className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Occupant Count</label>
              <p className="text-sm font-black">{state.occupants}</p>
            </div>
            <div>
              <label className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Non-Smoking Status</label>
              <p className="text-sm font-black">{state.isSmoker ? 'Verified Smoker' : 'Verified Non-Smoker'}</p>
            </div>
            <div>
              <label className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Pet Allocation</label>
              <p className="text-sm font-black">{state.petDetails || 'None disclosed'}</p>
            </div>
          </div>
        </div>

        {/* Legal Declaration */}
        <div className="mt-16 pt-8 border-t border-slate-200 font-sans italic text-[11px] text-slate-500 space-y-4">
          <p>
            By submitting this application, I declare that all information provided is true and complete to the best of my knowledge. I authorize ESDR Living to conduct a background check, credit investigation, and verify any of the information provided within this document. This application is subject to final approval by ESDR Group management.
          </p>
          <div className="flex justify-between items-end mt-12 mb-8">
            <div className="w-[3.5in]">
              <div className="h-12 border-b-2 border-slate-900 mb-2 flex items-end">
                <span className="text-[10px] text-slate-300 font-sans italic mb-1 uppercase tracking-widest">Sign here for DocuSign verification</span>
              </div>
              <label className="text-[9px] uppercase font-black tracking-widest text-slate-900">Applicant Signature</label>
            </div>
            <div className="w-[1.5in]">
              <div className="h-12 border-b-2 border-slate-900 mb-2 flex items-end">
                <span className="text-xs font-bold text-slate-900">{new Date().toLocaleDateString()}</span>
              </div>
              <label className="text-[9px] uppercase font-black tracking-widest text-slate-900">Date</label>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-12 left-[1.5in] right-[1.5in] flex justify-between items-center text-[8px] font-black uppercase tracking-[0.4em] text-slate-300 border-t border-slate-100 pt-4 font-sans">
        <span>ESDR Living Portfolio Division</span>
        <span>Secure ID: {docId}</span>
        <span>RSA-8192 Compliant</span>
      </div>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          #application-document, #application-document * { visibility: visible; }
          #application-document {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            padding: 0.5in;
            margin: 0;
            box-shadow: none;
          }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
};

// 10/10 Premier Light Select Component
const CustomSelect: React.FC<{
  label: string;
  options: { id: string; title: string }[];
  value: string;
  onChange: (id: string) => void;
  placeholder: string;
}> = ({ label, options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(o => o.id === value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative space-y-2" ref={ref}>
      <label className="text-[10px] font-black uppercase text-brand-green tracking-[0.3em] ml-2 block opacity-80">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-14 px-6 rounded-2xl border transition-all duration-500 text-left flex items-center justify-between group relative overflow-hidden backdrop-blur-xl ${isOpen ? 'bg-white border-brand-green text-slate-950 scale-[1.02] shadow-xl' : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-brand-green/30 hover:bg-white'
          }`}
      >
        <span className="font-extrabold text-sm uppercase tracking-widest relative z-10">{selectedOption?.title || placeholder}</span>
        <ChevronRight className={`transition-transform duration-500 relative z-10 ${isOpen ? 'rotate-90 text-brand-green' : 'text-slate-300'}`} size={18} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 z-[200] bg-white/95 backdrop-blur-3xl rounded-3xl border border-slate-200 shadow-[0_30px_60px_rgba(0,0,0,0.1)] overflow-hidden animate-scale-in">
          <div className="max-h-60 overflow-y-auto scrollbar-hide p-2">
            {options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  onChange(opt.id);
                  setIsOpen(false);
                }}
                className={`w-full h-12 px-6 text-left text-[11px] font-black uppercase tracking-widest transition-all rounded-xl mb-1 last:mb-0 flex items-center justify-between group ${value === opt.id ? 'bg-brand-green text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
              >
                <span>{opt.title}</span>
                {value === opt.id && <Check size={16} strokeWidth={3} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const Application: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const preSelectedId = queryParams.get('propertyId') || '';

  const [state, setState] = useState<ApplicationState>({
    step: 0,
    propertyId: preSelectedId,
    unitType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    currentAddress: '',
    reasonForMoving: '',
    currentLandlordName: '',
    currentLandlordContact: '',
    employmentStatus: 'full-time',
    employerName: '',
    jobTitle: '',
    monthlyIncome: '',
    proofOfIncomeType: '',
    moveInDate: '',
    requestedLeaseTerm: '12 Months',
    occupants: '1',
    occupantNames: '',
    petDetails: '',
    vehicleInfo: '',
    consentToCreditCheck: false,
    isSmoker: false,
    currentMonthlyRent: ''
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStage, setGenerationStage] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [docId] = useState(() => `ESDR-AUTH-${Math.floor(100000 + Math.random() * 900000)}`);

  const nextStep = () => setState(prev => ({ ...prev, step: prev.step + 1 }));
  const prevStep = () => setState(prev => ({ ...prev, step: prev.step - 1 }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setState({ ...state, [name]: val });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setGenerationStage(1);

    // AI Document Forging Sequence
    setTimeout(() => setGenerationStage(2), 1500);
    setTimeout(() => setGenerationStage(3), 3000);
    setTimeout(() => {
      setIsGenerating(false);
      setSubmitted(true);
    }, 5000);
  };

  const handleExit = () => navigate('/');

  const selectedProperty = PROPERTIES.find(p => p.id === state.propertyId);

  // Success State - Show the Generated Branded Document
  if (submitted) {
    return (
      <div className="fixed inset-0 z-[10000] bg-slate-100 flex flex-col overflow-y-auto pt-12 pb-24 px-12">
        <div className="max-w-5xl mx-auto w-full flex gap-12 items-start relative pb-20">

          {/* Document Preview Controls */}
          <div className="w-80 flex-shrink-0 space-y-8 sticky top-12 animate-fade-in no-print">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-center gap-4 text-brand-green">
                <CheckCircle2 size={24} />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-800">Generation Complete</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tighter leading-none">Application<br />Authorized</h2>
              <p className="text-xs font-bold text-slate-500 leading-relaxed">
                Gemini 3 Pro has converted your intake data into a formal legal application. This document is now ready for signature and submission.
              </p>
              <div className="h-[1px] w-full bg-slate-100"></div>
              <div className="space-y-4">
                <button onClick={() => window.print()} className="w-full h-16 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-brand-green transition-all group">
                  <Printer size={18} className="group-hover:scale-110 transition-transform" /> Print / Save PDF
                </button>
                <button onClick={handleExit} className="w-full h-16 bg-white border border-slate-200 text-slate-400 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:text-slate-900 transition-all">
                  <X size={18} /> Finalize & Exit
                </button>
              </div>
            </div>

            <div className="bg-brand-green text-white p-8 rounded-[2rem] shadow-lg shadow-brand-green/20">
              <div className="flex items-center gap-3 mb-4">
                <FileBadge size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest">DocuSign Ready</span>
              </div>
              <p className="text-[11px] font-bold leading-relaxed opacity-90">
                This document contains all necessary legal disclosures and signature fields for a standard residential lease initiation in Ontario.
              </p>
            </div>
          </div>

          {/* THE ACTUAL DOCUMENT */}
          <div className="flex-grow animate-scale-in">
            <BrandedApplicationDocument state={state} docId={docId} />
          </div>

        </div>
      </div>
    );
  }

  // Phase 0 Entrance
  if (state.step === 0) {
    return (
      <div className="fixed inset-0 z-[10000] bg-slate-50 flex flex-col items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-slate-50 z-10 transition-opacity duration-1000"></div>
          <div className="h-full w-full bg-[url('https://res.cloudinary.com/dpfapm0tl/image/upload/v1770230642/luxury_penthouse_bg_sh2j3f.png')] bg-cover bg-center opacity-40 transition-transform duration-[20s] animate-pulse-soft"></div>
        </div>

        <div className="relative z-20 max-w-4xl w-full text-center space-y-16 animate-fade-in flex flex-col items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4 bg-white px-8 py-3 rounded-full border border-slate-200 shadow-sm backdrop-blur-xl">
              <Lock size={16} className="text-brand-green" />
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-slate-900">Premier Intake Protocol</span>
            </div>
            <h1 className="text-9xl md:text-[13rem] font-black text-slate-900 tracking-tighter uppercase italic leading-[0.75] select-none">ESDR<br /><span className="text-brand-green">LIVING</span></h1>
          </div>

          <button
            onClick={nextStep}
            className="group relative h-32 w-32 rounded-full border-2 border-slate-200 bg-white shadow-xl flex items-center justify-center hover:scale-110 hover:border-brand-green hover:text-brand-green transition-all duration-700"
          >
            <div className="absolute inset-0 rounded-full border border-brand-green/20 animate-ping group-hover:hidden"></div>
            <ChevronRight size={48} className="text-slate-300 transition-transform group-hover:translate-x-2 group-hover:text-brand-green" />
            <div className="absolute -bottom-16 text-[10px] font-black uppercase tracking-[1em] text-slate-400 opacity-60 group-hover:opacity-100 transition-all">Initialize</div>
          </button>
        </div>
      </div>
    );
  }

  // Sequencing - Gemini 3 Pro Document Conversion Animation
  if (isGenerating) {
    return (
      <div className="fixed inset-0 z-[10000] bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full space-y-12">
          <div className="relative h-32 w-32 mx-auto">
            <div className="absolute inset-0 border-4 border-slate-200 rounded-[2.5rem] animate-spin-reverse transition-all"></div>
            <div className="absolute inset-0 border-4 border-brand-green/30 rounded-[2.5rem] border-t-brand-green animate-spin transition-all"></div>
            <div className="absolute inset-0 flex items-center justify-center text-brand-green">
              <Cpu size={48} className="animate-pulse" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter">
              {generationStage === 1 ? 'Parsing Intake...' :
                generationStage === 2 ? 'Forging Branded Document...' : 'Applying Compliance Encryption...'}
            </h2>
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 animate-pulse">Powering conversion with Gemini 3 Pro</p>
          </div>

          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden relative shadow-inner">
            <div className="absolute inset-y-0 left-0 bg-brand-green animate-progress-fast w-full shadow-[0_0_20px_rgba(126,141,109,0.4)]"></div>
          </div>
        </div>
      </div>
    );
  }

  const stepsIcons = [Home, User, Briefcase, Users, Fingerprint];
  const stepsLabels = ['Search', 'Identity', 'Yield', 'Ethics', 'Confirm'];

  return (
    <div className="fixed inset-0 z-[10000] bg-slate-50 flex flex-col overflow-hidden selection:bg-brand-green/20">
      {/* Background Layer */}
      <div className="absolute inset-0 opacity-5 pointer-events-none grayscale">
        <div className="h-full w-full bg-[url('https://res.cloudinary.com/dpfapm0tl/image/upload/v1770230642/luxury_penthouse_bg_sh2j3f.png')] bg-cover bg-center"></div>
      </div>

      {/* Top Protocol Header */}
      <header className="h-28 px-12 flex items-center justify-between relative z-50 flex-shrink-0 animate-fade-in border-b border-slate-200 bg-white/60 backdrop-blur-xl no-print">
        <div className="flex items-center gap-12">
          <button onClick={handleExit} className="w-12 h-12 flex items-center justify-center rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-900 shadow-sm transition-all group">
            <X size={20} className="group-hover:rotate-90 transition-transform" />
          </button>
          <div className="h-[1px] w-24 bg-slate-200"></div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-brand-green">
              <Activity size={12} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-80">Phase 0{state.step}</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 italic tracking-widest uppercase">Verification Terminal</h3>
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(s => (
              <div key={s} className={`h-2 w-12 rounded-full transition-all duration-700 ${s <= state.step ? 'bg-brand-green shadow-sm' : 'bg-slate-200'}`}></div>
            ))}
          </div>
          <div className="text-[10px] font-black text-slate-400 tracking-[0.4em] ml-4">
            {Math.round((state.step / 5) * 100)}%
          </div>
        </div>
      </header>

      {/* Main Experience Container */}
      <main className="flex-grow flex items-center justify-center p-12 relative no-print">
        <div className="max-w-5xl w-full h-full max-h-[720px] bg-white rounded-[4rem] border border-slate-200 shadow-[0_40px_80px_rgba(0,0,0,0.05)] relative overflow-hidden flex animate-scale-in">

          {/* Left Sidebar */}
          <div className="w-80 border-r border-slate-100 bg-slate-50/50 p-12 flex flex-col justify-between flex-shrink-0">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Protocol Node</span>
                <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter leading-[0.85]">
                  {stepsLabels[state.step - 1]}<br />Verification
                </h2>
              </div>

              {state.step === 1 && selectedProperty && (
                <div className="space-y-6 animate-fade-in">
                  <div className="h-[1px] w-12 bg-slate-200"></div>
                  <div className="space-y-2">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Target Allocation</span>
                    <div className="text-lg font-black text-brand-green italic tracking-tight">{selectedProperty.title}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">REF: {docId}</div>
              <div className="h-[1px] w-full bg-slate-100"></div>
            </div>
          </div>

          {/* Right Pane */}
          <div className="flex-grow flex flex-col pt-16 px-20 pb-16 bg-white">
            <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
              <div className="flex-grow">
                <div className="space-y-12 animate-fade-in">
                  {state.step === 1 && (
                    <div className="space-y-10">
                      <CustomSelect label="Portfolio Discovery" options={PROPERTIES} value={state.propertyId} onChange={(id) => setState({ ...state, propertyId: id })} placeholder="Scan Portfolios..." />
                      <div className="grid grid-cols-2 gap-10">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-brand-green tracking-[0.3em] ml-2 block opacity-80">Deployment Phase</label>
                          <input type="date" name="moveInDate" value={state.moveInDate} onChange={handleChange} required className="w-full h-14 px-6 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 font-bold outline-none focus:bg-white focus:border-brand-green transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-brand-green tracking-[0.3em] ml-2 block opacity-80">Commitment Period</label>
                          <div className="flex gap-4">
                            {['12 Months', '24 Months'].map(term => (
                              <button key={term} type="button" onClick={() => setState({ ...state, requestedLeaseTerm: term })} className={`flex-1 h-14 rounded-2xl border font-black text-[10px] tracking-widest transition-all ${state.requestedLeaseTerm === term ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-white hover:text-slate-900'}`}>{term}</button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {state.step === 2 && (
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                      {['firstName', 'lastName', 'email', 'phone'].map(f => (
                        <div key={f} className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-brand-green tracking-[0.3em] ml-2 block opacity-80">{f.replace(/([A-Z])/g, ' $1')}</label>
                          <input type={f === 'email' ? 'email' : 'text'} name={f} required value={(state as any)[f]} onChange={handleChange} className="w-full h-14 px-6 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 font-bold outline-none focus:bg-white focus:border-brand-green transition-all" />
                        </div>
                      ))}
                      <div className="col-span-2 space-y-2">
                        <label className="text-[10px] font-black uppercase text-brand-green tracking-[0.3em] ml-2 block opacity-80">Primary Residence Origin</label>
                        <input type="text" name="currentAddress" required value={state.currentAddress} onChange={handleChange} className="w-full h-14 px-6 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 font-bold outline-none focus:bg-white focus:border-brand-green transition-all" />
                      </div>
                    </div>
                  )}

                  {state.step === 3 && (
                    <div className="grid grid-cols-2 gap-10">
                      <div className="col-span-2 bg-slate-50 p-12 rounded-[3rem] border border-slate-200 text-center space-y-4">
                        <label className="text-[11px] font-black uppercase text-brand-green tracking-[0.6em] block">Verified Monthly Yield</label>
                        <div className="relative">
                          <DollarSign className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-300" size={32} />
                          <input type="text" name="monthlyIncome" required value={state.monthlyIncome} onChange={handleChange} placeholder="0.00" className="w-full h-24 text-center text-8xl font-black text-slate-900 italic tracking-tighter bg-transparent outline-none placeholder:text-slate-200" />
                        </div>
                      </div>
                      <div className="col-span-2 md:col-span-1 space-y-2">
                        <label className="text-[10px] font-black uppercase text-brand-green tracking-[0.3em] ml-2 block opacity-80">Employer Organization</label>
                        <input type="text" name="employerName" required value={state.employerName} onChange={handleChange} className="w-full h-14 px-6 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 font-bold outline-none focus:bg-white focus:border-brand-green transition-all" />
                      </div>
                      <div className="col-span-2 md:col-span-1 space-y-2">
                        <label className="text-[10px] font-black uppercase text-brand-green tracking-[0.3em] ml-2 block opacity-80">Current Rent Liability</label>
                        <input type="text" name="currentMonthlyRent" value={state.currentMonthlyRent} onChange={handleChange} className="w-full h-14 px-6 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 font-bold outline-none focus:bg-white focus:border-brand-green transition-all" />
                      </div>
                    </div>
                  )}

                  {state.step === 4 && (
                    <div className="space-y-10">
                      <div className="flex gap-12">
                        <div className="flex-1 space-y-3">
                          <label className="text-[10px] font-black uppercase text-brand-green tracking-[0.3em] ml-2 block opacity-80">Occupant Allocation</label>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map(n => (
                              <button key={n} type="button" onClick={() => setState({ ...state, occupants: n.toString() })} className={`flex-1 h-14 rounded-2xl border font-black text-sm transition-all ${state.occupants === n.toString() ? 'bg-slate-900 text-white border-slate-900 shadow-lg' : 'bg-slate-50 border-slate-200 text-slate-400 hover:bg-white hover:text-slate-900'}`}>{n}</button>
                            ))}
                          </div>
                        </div>
                        <div className="flex-1 space-y-3">
                          <label className="text-[10px] font-black uppercase text-brand-green tracking-[0.3em] ml-2 block opacity-80">Pet Specifications</label>
                          <input type="text" name="petDetails" value={state.petDetails} onChange={handleChange} placeholder="None" className="w-full h-14 px-6 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 font-bold outline-none focus:bg-white focus:border-brand-green transition-all" />
                        </div>
                      </div>
                      <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-200 space-y-8">
                        <label className="flex items-center gap-6 cursor-pointer group">
                          <div className="relative w-8 h-8 flex-shrink-0">
                            <input type="checkbox" name="isSmoker" checked={state.isSmoker} onChange={handleChange} className="peer sr-only" />
                            <div className="w-full h-full rounded-xl border-2 border-slate-200 bg-white peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-all"></div>
                            <Check size={18} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] font-black text-slate-500 group-hover:text-slate-900 uppercase tracking-[0.3em] transition-all italic">I identify as a strictly non-smoking resident</p>
                        </label>
                        <label className="flex items-center gap-6 cursor-pointer group">
                          <div className="relative w-8 h-8 flex-shrink-0">
                            <input type="checkbox" name="consentToCreditCheck" checked={state.consentToCreditCheck} onChange={handleChange} required className="peer sr-only" />
                            <div className="w-full h-full rounded-xl border-2 border-slate-200 bg-white peer-checked:bg-brand-green peer-checked:border-brand-green transition-all shadow-md shadow-brand-green/20"></div>
                            <Check size={18} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] font-black text-slate-500 group-hover:text-brand-green uppercase tracking-[0.3em] transition-all italic underline decoration-brand-green/20 underline-offset-8">Authorize secure background validation protocol</p>
                        </label>
                      </div>
                    </div>
                  )}

                  {state.step === 5 && (
                    <div className="grid grid-cols-2 gap-10">
                      <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-200 flex flex-col justify-between group overflow-hidden relative shadow-sm">
                        <div className="relative z-10">
                          <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em] mb-8 block">Selected Location</span>
                          <h4 className="text-4xl font-black text-slate-900 italic uppercase leading-none">{selectedProperty?.title || 'Premier Legacy'}</h4>
                          <div className="mt-8 pt-8 border-t border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-widest">{selectedProperty?.location}</div>
                        </div>
                      </div>
                      <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 text-center flex flex-col justify-center shadow-xl">
                        <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em] mb-4">Core Monthly Yield</span>
                        <div className="text-8xl font-black text-white italic tracking-tighter leading-none">${state.monthlyIncome}</div>
                        <div className="mt-10 text-[10px] font-black text-white/10 uppercase tracking-[1em]">Verified Profile</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-12 mt-auto border-t border-slate-100 flex justify-between items-center h-24">
                <button type="button" onClick={prevStep} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.6em] text-slate-400 hover:text-slate-900 transition-all group">
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Preliminary Phase
                </button>
                <button
                  type={state.step === 5 ? 'submit' : 'button'}
                  onClick={state.step === 5 ? undefined : nextStep}
                  disabled={(state.step === 4 && !state.consentToCreditCheck) || (state.step === 1 && !state.propertyId)}
                  className="group relative h-20 px-16 bg-slate-900 text-white rounded-[1.5rem] font-black text-[12px] uppercase tracking-[0.5em] shadow-lg hover:bg-brand-green hover:scale-105 transition-all duration-500 disabled:opacity-20 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
                    {state.step === 5 ? 'CONVERT TO PDF' : 'DEPLOY NEXT PHASE'}
                    <ChevronRight size={20} strokeWidth={4} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="h-24 px-12 flex items-center justify-center relative z-50 flex-shrink-0 animate-fade-in no-print">
        <div className="flex items-center gap-8 opacity-20">
          <div className="h-[1px] w-48 bg-slate-400"></div>
          <p className="text-[9px] font-black uppercase tracking-[1em] text-slate-900">
            ESDR LIVING AUTHORIZED SECURE TERMINAL &bull; RSA-8192
          </p>
          <div className="h-[1px] w-48 bg-slate-400"></div>
        </div>
      </footer>
    </div>
  );
};
