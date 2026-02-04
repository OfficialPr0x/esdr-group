import React from 'react';
import { Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
            alt="Ontario Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/80 backdrop-blur-md"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] mb-4 uppercase">
            Not just a <span className="text-brand-lime">landlord.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light">
            Defining high-quality living standards across Eastern Ontario since 2018.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-brand-lime mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Built on transparency, family values, and local expertise.
            </h2>
            <div className="prose prose-slate lg:prose-lg text-slate-600">
              <p>
                Operating in Eastern Ontario, we saw a gap in the market. Tenants were tired of unresponsive property managers, corporate facelessness, and the rising fear of rental scams. We decided to build something different.
              </p>
              <p>
                We are a locally owned and operated investment group. When you rent from ESDR Living, you aren't dealing with a call center in another time zone. You're dealing with us—real people who care about the condition of your home and the quality of your stay.
              </p>
              <p>
                "We focus on long-term ownership. We aren't here to flip houses; we are here to provide stable, quality housing for years to come."
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl translate-y-8">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556912173-3db9963f6bee?auto=format&fit=crop&w=800" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-32">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black text-brand-navy uppercase tracking-tighter">Our Core Values</h3>
            <p className="text-slate-500 mt-4 text-lg">The principles that define our commitment to quality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white shadow-2xl rounded-[2.5rem] border border-slate-100 transition-all hover:scale-[1.02] duration-500">
              <div className="h-14 w-14 bg-brand-navy rounded-2xl flex items-center justify-center shadow-lg mb-8 text-brand-lime">
                <Check size={28} />
              </div>
              <h4 className="text-2xl font-black text-brand-navy mb-4 uppercase tracking-tighter">Unwavering Trust</h4>
              <p className="text-slate-600 leading-relaxed">We believe transparency is the foundation of a good relationship. No hidden fees, clear leases, and open communication.</p>
            </div>
            <div className="p-10 bg-white shadow-2xl rounded-[2.5rem] border border-slate-100 transition-all hover:scale-[1.02] duration-500">
              <div className="h-14 w-14 bg-brand-navy rounded-2xl flex items-center justify-center shadow-lg mb-8 text-brand-lime">
                <Check size={28} />
              </div>
              <h4 className="text-2xl font-black text-brand-navy mb-4 uppercase tracking-tighter">Fast Response</h4>
              <p className="text-slate-600 leading-relaxed">We address maintenance issues promptly. A leaky tap isn't just an annoyance; it's our property, and we want it fixed right.</p>
            </div>
            <div className="p-10 bg-white shadow-2xl rounded-[2.5rem] border border-slate-100 transition-all hover:scale-[1.02] duration-500">
              <div className="h-14 w-14 bg-brand-navy rounded-2xl flex items-center justify-center shadow-lg mb-8 text-brand-lime">
                <Check size={28} />
              </div>
              <h4 className="text-2xl font-black text-brand-navy mb-4 uppercase tracking-tighter">Community First</h4>
              <p className="text-slate-600 leading-relaxed">We invest in neighborhoods we believe in. We want our properties to add value to the street and the local community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};