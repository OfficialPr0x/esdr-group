import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, Briefcase, Warehouse, Home as HomeIcon, Check } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { Button } from '../components/Button';
import { PROPERTIES, LOGO_URL } from '../constants';
import { PropertyCategory } from '../types';

export const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { label: 'All', icon: null },
    { label: PropertyCategory.RESIDENTIAL, icon: HomeIcon },
    { label: PropertyCategory.MULTI_UNIT, icon: Briefcase },
    { label: PropertyCategory.AIRBNB, icon: Building2 },
    { label: PropertyCategory.STORAGE, icon: Warehouse },
  ];

  const filteredProperties = activeCategory === 'All'
    ? PROPERTIES
    : PROPERTIES.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2600&q=95"
            alt="ESDR Living Premium Asset"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[10s]"
          />
          {/* Advanced Multi-layered Mask */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl space-y-10">
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full animate-fade-in-down">
              <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Eastern Ontario's Premier Portfolio</span>
            </div>

            <h1 className="text-7xl md:text-[140px] font-black tracking-[-0.04em] leading-[0.8] transition-all">
              <span className="text-white">Homes,</span><br />
              <span className="text-white/40">not just</span><br />
              <span className="relative inline-block text-brand-green italic">
                housing.
                <span className="absolute -bottom-4 left-0 w-full h-4 bg-brand-green/20 blur-xl"></span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-xl font-light leading-relaxed border-l-2 border-brand-green/30 pl-8 ml-2">
              Specializing in residential, multi-unit, and commercial storage. We build value through transparency and family-first property management.
            </p>

            <div className="flex flex-wrap gap-8 pt-6">
              <Button
                onClick={() => document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-12 py-6 bg-brand-green text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(126,141,109,0.3)] hover:-translate-y-1"
                size="lg"
              >
                <span className="relative flex items-center space-x-3 text-sm font-black uppercase tracking-[0.2em]">
                  <span>Explore Portfolio</span>
                  <Search size={18} className="translate-y-[1px]" />
                </span>
              </Button>

              <Link to="/about">
                <Button
                  variant="ghost"
                  className="px-12 py-6 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                  size="lg"
                >
                  <span className="text-sm font-black uppercase tracking-[0.2em]">Our Values</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Cinematic Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-4 opacity-50">
          <span className="text-[10px] font-black text-white uppercase tracking-[0.4em] rotate-90 mb-8">Scroll</span>
          <div className="h-16 w-[1px] bg-gradient-to-t from-brand-green to-transparent"></div>
        </div>

        {/* Hero Branding Logo - Strategic Primary Position */}
        {/* Hero Branding Logo - Strategic Primary Position */}
        <div className="absolute bottom-8 left-[55%] md:left-[52%] z-20 flex flex-col items-start animate-fade-in delay-700">
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-green/10 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <img src={LOGO_URL} alt="ESDR Group" className="h-24 md:h-48 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-1000 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]" />
          </div>
        </div>
      </section>

      {/* Category Filter Section (Sticky) */}
      <div id="listings" className="pt-8 pb-4 px-4 sm:px-6 lg:px-8 border-b border-slate-100 sticky top-16 bg-white/90 backdrop-blur-md z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Available Properties</h2>
            <div className="hidden md:flex items-center text-sm text-slate-500">
              <Search size={16} className="mr-2" />
              Showing {filteredProperties.length} locations in Eastern Ontario
            </div>
          </div>

          <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex flex-col items-center gap-2 min-w-[64px] cursor-pointer group transition-all pb-3 border-b-4 ${activeCategory === cat.label
                  ? 'border-brand-green text-brand-blue font-black'
                  : 'border-transparent text-slate-400 hover:text-brand-blue hover:border-slate-200'
                  }`}
              >
                <div className={`p-2 rounded-xl transition-colors ${activeCategory === cat.label ? 'bg-emerald-50' : 'group-hover:bg-slate-50'}`}>
                  {cat.icon ? <cat.icon size={22} /> : <HomeIcon size={22} />}
                </div>
                <span className="text-xs font-medium whitespace-nowrap">{cat.label === 'Short-Term / Airbnb' ? 'Short-Term' : cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Listing Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProperties.map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="bg-slate-50 p-6 rounded-full mb-6">
              <HomeIcon size={48} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">No properties available in this category</h3>
            <p className="text-slate-500 max-w-sm mt-2">Check back soon! We are constantly updating our listings with new high-quality homes.</p>
            <button onClick={() => setActiveCategory('All')} className="mt-8 px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              Show all properties
            </button>
          </div>
        )}
      </main>

      {/* Trust Banner */}
      <section className="bg-brand-blue text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="h-16 w-16 bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-black/20">
                <Building2 size={32} className="text-brand-green" />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">Owner-Operated</h4>
              <p className="text-slate-300 leading-relaxed text-lg">We aren't a management company—we are the owners. Faster response, better service, direct accountability.</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="h-16 w-16 bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-black/20">
                <Check size={32} className="text-brand-green" />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">Zero Scam Policy</h4>
              <p className="text-slate-300 leading-relaxed text-lg">Every listing is 100% verified and owned by ESDR Living. We never ask for deposits before a showing.</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="h-16 w-16 bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-black/20">
                <Briefcase size={32} className="text-brand-green" />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">Maintenance First</h4>
              <p className="text-slate-300 leading-relaxed text-lg">Our in-house team maintains properties to the highest standards. We fix it right, the first time.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};