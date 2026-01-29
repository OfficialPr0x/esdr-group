import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, Briefcase, Warehouse, Home as HomeIcon, Check } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { Button } from '../components/Button';
import { PROPERTIES } from '../constants';
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
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Beautiful Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Homes, not just <span className="text-emerald-400">housing.</span>
            </h1>
            <p className="text-xl text-slate-100 mb-8 leading-relaxed">
              Find high-quality rental homes and commercial storage spaces across Eastern Ontario. Built on trust, family values, and local expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' })}>
                View Available Listings
              </Button>
              <Link to="/about">
                <Button size="lg" variant="ghost" className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white">
                  Our Values
                </Button>
              </Link>
            </div>
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
                className={`flex flex-col items-center gap-2 min-w-[64px] cursor-pointer group transition-all pb-3 border-b-2 ${activeCategory === cat.label
                  ? 'border-emerald-600 text-emerald-700 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-200'
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

      {/* Trust Banner Overhaul */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="h-12 w-12 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Building2 size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Owner-Operated</h4>
              <p className="text-slate-400 leading-relaxed">We aren't a management company—we are the owners. This means faster response times and better service for you.</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="h-12 w-12 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Check size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Zero Scam Policy</h4>
              <p className="text-slate-400 leading-relaxed">Tired of phantom listings? Every property on our site is 100% verified and owned by ESDR Group. No deposits before showings.</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="h-12 w-12 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Professional Maintenance</h4>
              <p className="text-slate-400 leading-relaxed">Our in-house team ensures properties are kept in top condition. We fix things right the first time.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};