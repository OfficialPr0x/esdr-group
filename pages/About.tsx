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
          <div className="absolute inset-0 bg-emerald-900/60 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            More than just a <span className="text-emerald-300">landlord.</span>
          </h1>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            Providing high-quality rental homes and commercial spaces across Eastern Ontario since 2018.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Built on transparency, family values, and local expertise.
            </h2>
            <div className="prose prose-slate lg:prose-lg text-slate-600">
              <p>
                Operating in Eastern Ontario, we saw a gap in the market. Tenants were tired of unresponsive property managers, corporate facelessness, and the rising fear of rental scams. We decided to build something different.
              </p>
              <p>
                We are a locally owned and operated investment group. When you rent from ESDR, you aren't dealing with a call center in another time zone. You're dealing with us—real people who care about the condition of your home and the quality of your stay.
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
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900">Our Core Values</h3>
            <p className="text-slate-500 mt-4">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-hover hover:border-emerald-200">
              <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-emerald-600">
                <Check size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Unwavering Trust</h4>
              <p className="text-slate-600 text-sm leading-relaxed">We believe transparency is the foundation of a good relationship. No hidden fees, clear leases, and open communication.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-hover hover:border-emerald-200">
              <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-emerald-600">
                <Check size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Fast Response</h4>
              <p className="text-slate-600 text-sm leading-relaxed">We address maintenance issues promptly. A leaky tap isn't just an annoyance; it's our property, and we want it fixed right.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-hover hover:border-emerald-200">
              <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-emerald-600">
                <Check size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Community Focused</h4>
              <p className="text-slate-600 text-sm leading-relaxed">We invest in neighborhoods we believe in. We want our properties to add value to the street and the local community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};