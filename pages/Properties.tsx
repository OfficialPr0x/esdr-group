import React, { useState } from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { PROPERTIES } from '../constants';
import { PropertyCategory } from '../types';

export const Properties: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Object.values(PropertyCategory)];

  const filteredProperties = filter === 'All'
    ? PROPERTIES
    : PROPERTIES.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-4 block">Our Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Available Space</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            From modern family homes to secure commercial storage, discover how ESDR Group is redefining property management in Eastern Ontario.
          </p>
        </div>

        {/* Filters Grid */}
        <div className="flex overflow-x-auto scrollbar-hide gap-3 mb-16 pb-4 border-b border-slate-50">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl text-sm font-black tracking-widest uppercase transition-all whitespace-nowrap ${filter === cat
                  ? 'bg-emerald-700 text-white shadow-xl shadow-emerald-900/20 translate-y-[-2px]'
                  : 'bg-slate-50 text-slate-500 border border-slate-100 hover:bg-white hover:border-slate-300'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProperties.map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No units currently available</h3>
            <p className="text-slate-500 mb-8 max-w-sm mx-auto">We are constantly adding new properties. Please check back later or contact us directly.</p>
            <button
              onClick={() => setFilter('All')}
              className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};