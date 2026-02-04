import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
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
  Car,
  Dog,
  Printer,
  Sparkles,
  ArrowLeft,
  Lock
} from 'lucide-react';

export const Application: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const preSelectedId = queryParams.get('propertyId') || '';

  const [state, setState] = useState<ApplicationState>({
    step: 1,
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
    employmentStatus: '',
    employerName: '',
    jobTitle: '',
    monthlyIncome: '',
    proofOfIncomeType: '',
    moveInDate: '',
    occupants: '1',
    occupantNames: '',
    petDetails: '',
    vehicleInfo: '',
    consentToCreditCheck: false,
    isSmoker: false
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.step]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setState({ ...state, [name]: val });
  };

  const nextStep = () => setState(prev => ({ ...prev, step: prev.step + 1 }));
  const prevStep = () => setState(prev => ({ ...prev, step: prev.step - 1 }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setSubmitted(true);
    }, 2500);
  };

  const handlePrint = () => window.print();

  const selectedProperty = PROPERTIES.find(p => p.id === state.propertyId);

  // Compact Single Viewport Success State
  if (submitted) {
    return (
      <div className="h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden">
        <div className="relative z-10 max-w-xl w-full bg-white/5 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/10 text-center animate-fade-in">
          <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Check size={32} className="text-white" />
          </div>
          <h2 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase italic">Intake Active</h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
            Your profile is verified. Your professional agreement is ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handlePrint} className="h-12 px-8 bg-brand-blue text-white rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-brand-green transition-all">
              <Printer size={16} /> Download Agreement
            </button>
            <button onClick={() => window.location.href = '/'} className="h-12 px-8 bg-white/5 text-white border border-white/10 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const steps = ['Selection', 'Identity', 'Income', 'Logistics', 'Confirm'];

  return (
    <div className="min-h-screen h-screen bg-slate-950 flex flex-col pt-32 pb-8 overflow-visible relative selection:bg-brand-green/30">
      {/* Background elements scaled down */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(60,74,104,0.15),transparent)] pointer-events-none"></div>

      {/* Compact Progress Bar */}
      <div className="max-w-2xl mx-auto w-full px-8 mb-10 relative z-10 flex-shrink-0">
        <div className="flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 -z-10"></div>
          <div
            className="absolute top-1/2 left-0 h-[1px] bg-brand-green -translate-y-1/2 -z-10 transition-all duration-700 shadow-[0_0_15px_rgba(126,141,109,0.5)]"
            style={{ width: `${((state.step - 1) / (steps.length - 1)) * 100}%` }}
          ></div>

          {steps.map((label, i) => {
            const Icon = [Home, User, Briefcase, Users, FileText][i];
            const isActive = state.step === i + 1;
            const isCompleted = state.step > i + 1;
            return (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-500 border ${isCompleted ? 'bg-brand-green border-brand-green text-white rotate-12 scale-110' :
                  isActive ? 'bg-white border-white text-slate-950 -rotate-6 scale-110 shadow-lg' :
                    'bg-slate-900 border-white/5 text-white/20'
                  }`}>
                  {isCompleted ? <Check size={16} /> : <Icon size={16} />}
                </div>
                <span className={`absolute -bottom-6 text-[8px] font-bold uppercase tracking-widest transition-opacity ${isActive ? 'opacity-100' : 'opacity-40'}`}>{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content Card - Fit to Screen */}
      <div className="flex-grow flex items-center justify-center p-4 relative z-10">
        <div className="max-w-3xl w-full bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col max-h-full">
          {/* Header Area */}
          <div className="p-8 pb-4 text-center border-b border-white/5 bg-white/5">
            <div className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em] mb-1">Phase 0{state.step}</div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
              {state.step === 1 ? 'Residence Selection' :
                state.step === 2 ? 'Identity Records' :
                  state.step === 3 ? 'Financial Core' :
                    state.step === 4 ? 'Living Logistics' : 'Final Validation'}
            </h2>
          </div>

          <div className="p-8 md:p-12 overflow-y-auto scrollbar-hide flex-grow">
            <form onSubmit={handleSubmit} className="space-y-8 h-full flex flex-col justify-center">

              {/* Step 1 */}
              {state.step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-4">Target Listing</label>
                    <div className="relative">
                      <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-green/50" size={18} />
                      <select name="propertyId" value={state.propertyId} onChange={handleChange} required
                        className="w-full h-14 pl-12 pr-6 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-sm focus:ring-4 focus:ring-brand-green/20 focus:bg-white focus:text-slate-950 transition-all appearance-none cursor-pointer outline-none">
                        <option value="" className="bg-slate-900">Search portfolio...</option>
                        {PROPERTIES.map(p => <option key={p.id} value={p.id} className="bg-slate-900">{p.title}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-4">Move-in Protocol</label>
                    <div className="relative">
                      <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-green/50" size={18} />
                      <input type="date" name="moveInDate" value={state.moveInDate} onChange={handleChange} required
                        className="w-full h-14 pl-12 pr-6 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-sm focus:bg-white focus:text-slate-950 transition-all outline-none" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {state.step === 2 && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 animate-fade-in">
                  {['firstName', 'lastName', 'email', 'phone'].map((f) => (
                    <div key={f} className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-white/30 tracking-widest ml-4">{f.replace(/([A-Z])/g, ' $1')}</label>
                      <input type={f === 'email' ? 'email' : 'text'} name={f} required value={(state as any)[f]} onChange={handleChange}
                        className="w-full h-12 px-6 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm focus:bg-white focus:text-slate-950 transition-all outline-none" />
                    </div>
                  ))}
                  <div className="col-span-2 space-y-2 pt-2">
                    <label className="text-[9px] font-black uppercase text-white/30 tracking-widest ml-4">Current Residential Address</label>
                    <input type="text" name="currentAddress" required value={state.currentAddress} onChange={handleChange}
                      className="w-full h-12 px-6 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm focus:bg-white focus:text-slate-950 transition-all outline-none" />
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {state.step === 3 && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 animate-fade-in">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase text-white/30 tracking-widest ml-4">Engagement Status</label>
                    <select name="employmentStatus" value={state.employmentStatus} onChange={handleChange} required
                      className="w-full h-12 px-6 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm appearance-none outline-none">
                      <option value="" className="bg-slate-900">Select...</option>
                      <option value="full-time" className="bg-slate-900">Executive</option>
                      <option value="self-employed" className="bg-slate-900">Business</option>
                      <option value="other" className="bg-slate-900">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase text-white/30 tracking-widest ml-4">Net Monthly Yield</label>
                    <div className="relative">
                      <DollarSign className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-green" size={14} />
                      <input type="text" name="monthlyIncome" required value={state.monthlyIncome} onChange={handleChange} placeholder="CAD Amount"
                        className="w-full h-12 pl-12 pr-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm focus:bg-white focus:text-slate-950 transition-all outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase text-white/30 tracking-widest ml-4">Corporate Venture</label>
                    <input type="text" name="employerName" required value={state.employerName} onChange={handleChange}
                      className="w-full h-12 px-6 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm focus:bg-white focus:text-slate-950 transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase text-white/30 tracking-widest ml-4">Role Title</label>
                    <input type="text" name="jobTitle" required value={state.jobTitle} onChange={handleChange}
                      className="w-full h-12 px-6 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm focus:bg-white focus:text-slate-950 transition-all outline-none" />
                  </div>
                </div>
              )}

              {/* Step 4 */}
              {state.step === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-white/30 tracking-widest ml-4">Total Members</label>
                      <select name="occupants" value={state.occupants} onChange={handleChange} required
                        className="w-full h-12 px-6 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm appearance-none outline-none">
                        {[1, 2, 3, 4, '5+'].map(n => <option key={n} value={n} className="bg-slate-900">{n}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-white/30 tracking-widest ml-4">Pet Allocation</label>
                      <input type="text" name="petDetails" value={state.petDetails} onChange={handleChange} placeholder="Breed / Weight"
                        className="w-full h-12 px-6 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm focus:bg-white focus:text-slate-950 outline-none" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 bg-white/5 p-6 rounded-2xl border border-white/10">
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <div className="relative w-6 h-6">
                        <input type="checkbox" name="isSmoker" checked={state.isSmoker} onChange={handleChange} className="peer sr-only" />
                        <div className="w-full h-full rounded-lg border border-white/20 peer-checked:bg-white transition-all"></div>
                        <Check size={14} className="absolute inset-0 m-auto text-slate-950 opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-[10px] font-black text-white/60 group-hover:text-white uppercase tracking-widest italic">Smoke-free household verified</span>
                    </label>
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <div className="relative w-6 h-6">
                        <input type="checkbox" name="consentToCreditCheck" checked={state.consentToCreditCheck} onChange={handleChange} required className="peer sr-only" />
                        <div className="w-full h-full rounded-lg border border-white/20 peer-checked:bg-brand-green transition-all"></div>
                        <Check size={14} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-[10px] font-black text-white group-hover:text-brand-green uppercase tracking-widest italic underline decoration-brand-green underline-offset-4">Execute Authorization Protocol</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Step 5 */}
              {state.step === 5 && (
                <div className="space-y-8 animate-fade-in text-white">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-brand-blue/30 p-6 rounded-3xl border border-white/5">
                      <h4 className="text-[8px] font-black uppercase text-white/40 tracking-widest mb-4">Allocation</h4>
                      <div className="font-black text-xl italic uppercase truncate">{selectedProperty?.title}</div>
                      <div className="text-[10px] text-brand-green font-bold mt-2 uppercase tracking-widest flex items-center gap-2">
                        <Calendar size={12} /> {state.moveInDate}
                      </div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/5 flex flex-col justify-between">
                      <div>
                        <h4 className="text-[8px] font-black uppercase text-white/40 tracking-widest mb-4">Verified Yield</h4>
                        <div className="text-3xl font-black text-brand-green italic leading-none">${state.monthlyIncome}</div>
                      </div>
                      <div className="text-[10px] uppercase font-bold text-white/40 tracking-tighter truncate mt-4">{state.employerName}</div>
                    </div>
                  </div>
                  <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em] text-center italic">
                    By executing, you authorize ESDR Living to verify all professional credentials.
                  </p>
                </div>
              )}

              {/* Bottom Actions - Sticky at bottom of card context */}
              <div className="pt-8 mt-auto flex justify-between items-center border-t border-white/5">
                <button type="button" onClick={prevStep} className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-opacity ${state.step === 1 ? 'invisible' : 'visible'}`}>
                  <ArrowLeft size={14} /> Back
                </button>
                <button
                  type={state.step === 5 ? 'submit' : 'button'}
                  onClick={state.step === 5 ? undefined : nextStep}
                  disabled={state.step === 4 && !state.consentToCreditCheck}
                  className="h-14 px-10 bg-brand-green text-slate-950 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl hover:scale-105 transition-all duration-500 disabled:opacity-30"
                >
                  {state.step === 5 ? 'Execute Discovery' : 'Next Phase'} <ChevronRight size={16} className="ml-2 inline-block" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="py-8 text-center relative z-10 flex-shrink-0">
        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/10">
          ESDR LIVING PREMIER &bull; 2026 &bull; SECURE INTAKE
        </p>
      </div>
    </div>
  );
};
