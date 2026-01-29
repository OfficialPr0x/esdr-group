import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import { Button } from '../components/Button';
import { PropertyCard } from '../components/PropertyCard';
import { Star, MapPin, Share, Heart, CheckCircle2, ShieldCheck, User, Wifi, Car, Utensils, Wind } from 'lucide-react';

export const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = PROPERTIES.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return <div className="p-20 text-center text-xl font-bold">Property not found</div>;
  }

  const similarProperties = PROPERTIES.filter(p => p.category === property.category && p.id !== property.id).slice(0, 4);

  const getIcon = (amenity: string) => {
    const lower = amenity.toLowerCase();
    if (lower.includes('wifi')) return <Wifi size={20} className="text-emerald-700" />;
    if (lower.includes('parking')) return <Car size={20} className="text-emerald-700" />;
    if (lower.includes('kitchen') || lower.includes('dishwasher')) return <Utensils size={20} className="text-emerald-700" />;
    if (lower.includes('air') || lower.includes('heat')) return <Wind size={20} className="text-emerald-700" />;
    return <CheckCircle2 size={20} className="text-emerald-700" />;
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black tracking-widest uppercase text-emerald-600 px-2 py-0.5 bg-emerald-50 rounded">
                  {property.category}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-sm font-bold text-slate-500">{property.location}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">{property.title}</h1>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-bold text-sm text-slate-700">
                <Share size={18} /> Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-bold text-sm text-slate-700">
                <Heart size={18} /> Save
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Overhaul */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 aspect-[21/9] rounded-3xl overflow-hidden relative mb-16 shadow-2xl">
          <div className="md:col-span-2 relative group overflow-hidden h-full">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
          </div>
          <div className="md:col-span-1 grid grid-rows-2 gap-4 h-full">
            <div className="relative group overflow-hidden">
              <img src={property.images[1]} alt="Detail 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
            </div>
            <div className="relative group overflow-hidden">
              <img src={property.images[2]} alt="Detail 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
            </div>
          </div>
          <div className="md:col-span-1 grid grid-rows-2 gap-4 h-full">
            <div className="relative group overflow-hidden">
              <img src={property.images[3]} alt="Detail 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
            </div>
            <div className="relative group overflow-hidden">
              <img src={property.images[4]} alt="Detail 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
            </div>
          </div>

          <button className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-xl border border-white shadow-xl text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2 hover:bg-white transition-all">
            View All Photos
          </button>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="flex justify-between items-start pb-8 border-b border-slate-100 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">High-End Accommodation</h2>
                <p className="text-slate-500 mt-1 font-medium">
                  {property.maxGuests > 0 && `${property.maxGuests} Guests · `}
                  {property.bedrooms > 0 && `${property.bedrooms} Bedrooms · `}
                  {property.bathrooms > 0 && `${property.bathrooms} Baths`}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 bg-emerald-700 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-xl">E</div>
                <span className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-tighter">ESDR OWNER</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="text-emerald-600 shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-slate-900">Direct from Landlord</h3>
                  <p className="text-sm text-slate-500 mt-1">We own every unit we list. No management middle-men or hidden fees.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <Wind className="text-emerald-600 shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-slate-900">Premium Standards</h3>
                  <p className="text-sm text-slate-500 mt-1">Inspected, professionally cleaned, and 24/7 maintenance support.</p>
                </div>
              </div>
            </div>

            <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed mb-16">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Description</h3>
              {property.description}
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-8">What this space offers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-slate-800 font-medium">
                    <div className="p-3 bg-emerald-50 rounded-xl">
                      {getIcon(amenity)}
                    </div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-3xl shadow-2xl p-8 overflow-hidden">
              <div className="flex justify-between items-baseline mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-900">{property.price}</span>
                  <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">/{property.priceUnit}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-black text-slate-900">
                  <Star size={18} className="text-amber-400 fill-amber-400" />
                  <span>{property.rating}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Location Visibility</label>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold text-slate-700 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-600" /> {property.location}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Category</label>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold text-slate-700">
                    {property.category}
                  </div>
                </div>
              </div>

              <Link to="/apply">
                <Button fullWidth size="lg" className="py-6 rounded-2xl text-lg font-black bg-emerald-700 hover:bg-emerald-800 shadow-xl shadow-emerald-900/20">
                  {property.priceUnit === 'night' ? 'Book Now' : 'Apply to Rent'}
                </Button>
              </Link>

              <p className="text-center text-[11px] font-bold text-slate-400 mt-6 uppercase tracking-widest">
                Direct owner-to-tenant lease
              </p>

              {property.priceUnit === 'mo' && (
                <div className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-center text-sm">
                  <span className="font-bold text-slate-900 tracking-tight">Security Deposit</span>
                  <span className="text-emerald-700 font-black">1 Month</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Similar Listings */}
        {similarProperties.length > 0 && (
          <div className="mt-32 pt-20 border-t border-slate-100">
            <h3 className="text-3xl font-black text-slate-900 mb-12 tracking-tight">Similar properties for you</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {similarProperties.map(p => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};