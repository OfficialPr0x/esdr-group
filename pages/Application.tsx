import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ApplicationState } from '../types';
import { Check, ChevronRight } from 'lucide-react';

export const Application: React.FC = () => {
  const [state, setState] = useState<ApplicationState>({
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    moveInDate: '',
    occupants: '',
    incomeSource: '',
    petDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const nextStep = () => setState(prev => ({ ...prev, step: prev.step + 1 }));
  const prevStep = () => setState(prev => ({ ...prev, step: prev.step - 1 }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API/CRM
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Application Received</h2>
          <p className="text-slate-600 mb-6">
            Thank you, {state.firstName}. We have received your pre-qualification details. Our team will review your information and reach out within 24-48 hours.
          </p>
          <Button onClick={() => window.location.href = '/'}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-600 transition-all duration-500 ease-out"
              style={{ width: `${(state.step / 3) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs font-medium text-slate-500 uppercase tracking-wide">
            <span className={state.step >= 1 ? 'text-emerald-700' : ''}>Contact Info</span>
            <span className={state.step >= 2 ? 'text-emerald-700' : ''}>Details</span>
            <span className={state.step >= 3 ? 'text-emerald-700' : ''}>Review</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Contact Info */}
              {state.step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-slate-900">Who are you?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        name="firstName" 
                        required 
                        value={state.firstName} 
                        onChange={handleChange}
                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName" 
                        required 
                        value={state.lastName} 
                        onChange={handleChange}
                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={state.email} 
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={state.phone} 
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="pt-4 flex justify-end">
                    <Button type="button" onClick={nextStep} disabled={!state.firstName || !state.email}>
                      Next Step <ChevronRight size={18} className="ml-1" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Rental Details */}
              {state.step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-slate-900">Rental Preferences</h2>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Desired Move-in Date</label>
                    <input 
                      type="date" 
                      name="moveInDate" 
                      required 
                      value={state.moveInDate} 
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Total Occupants (Adults + Children)</label>
                    <select 
                      name="occupants" 
                      value={state.occupants} 
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      <option value="">Select...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Source of Income</label>
                    <select 
                      name="incomeSource" 
                      value={state.incomeSource} 
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      <option value="">Select...</option>
                      <option value="Full-time Employment">Full-time Employment</option>
                      <option value="Part-time Employment">Part-time Employment</option>
                      <option value="Self-Employed">Self-Employed</option>
                      <option value="Student">Student</option>
                      <option value="Retired">Retired</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                   <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Pets (Type & Breed)</label>
                    <textarea 
                      name="petDetails" 
                      value={state.petDetails} 
                      onChange={handleChange}
                      placeholder="No pets? Leave blank. Otherwise, list breed and weight."
                      className="w-full rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 h-24"
                    />
                  </div>
                  <div className="pt-4 flex justify-between">
                    <Button type="button" variant="ghost" onClick={prevStep}>Back</Button>
                    <Button type="button" onClick={nextStep}>Next Step <ChevronRight size={18} className="ml-1" /></Button>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {state.step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-slate-900">Review & Submit</h2>
                  <div className="bg-slate-50 p-6 rounded-xl space-y-4 text-sm text-slate-700 border border-slate-200">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium">Name</span>
                      <span>{state.firstName} {state.lastName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium">Contact</span>
                      <span>{state.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium">Move-In</span>
                      <span>{state.moveInDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Income</span>
                      <span>{state.incomeSource}</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <input id="consent" type="checkbox" required className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded" />
                    <label htmlFor="consent" className="ml-2 block text-sm text-slate-600">
                      I confirm the information provided is accurate. I understand this is a preliminary application and does not guarantee tenancy.
                    </label>
                  </div>
                  <div className="pt-4 flex justify-between">
                    <Button type="button" variant="ghost" onClick={prevStep}>Back</Button>
                    <Button type="submit">Submit Application</Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};