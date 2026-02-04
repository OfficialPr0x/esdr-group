import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES, LOGO_URL } from '../constants';
import { Button } from '../components/Button';
import { PropertyCard } from '../components/PropertyCard';
import { Star, MapPin, Share, Heart, CheckCircle2, ShieldCheck, User, Wifi, Car, Utensils, Wind, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = PROPERTIES.find(p => p.id === id);

  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % property.images.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + property.images.length) % property.images.length);
    }
  };

  if (!property) {
    return <div className="p-20 text-center text-xl font-bold">Property not found</div>;
  }

  const similarProperties = PROPERTIES.filter(p => p.category === property.category && p.id !== property.id).slice(0, 4);

  const getIcon = (amenity: string) => {
    const lower = amenity.toLowerCase();
    if (lower.includes('wifi')) return <Wifi size={20} className="text-brand-navy" />;
    if (lower.includes('parking')) return <Car size={20} className="text-brand-navy" />;
    if (lower.includes('kitchen') || lower.includes('dishwasher')) return <Utensils size={20} className="text-brand-navy" />;
    if (lower.includes('air') || lower.includes('heat')) return <Wind size={20} className="text-brand-navy" />;
    return <CheckCircle2 size={20} className="text-brand-navy" />;
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black tracking-widest uppercase text-brand-navy px-3 py-1 bg-brand-lime rounded-full">
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

        {/* Premium Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 h-[500px] md:h-[600px] rounded-3xl overflow-hidden relative mb-16 shadow-2xl bg-slate-100">
          {/* Main Large Image */}
          <div
            className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden border-2 border-transparent hover:border-brand-lime transition-all"
            onClick={() => handleOpenLightbox(0)}
          >
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 text-white transform scale-90 group-hover:scale-100 transition-all duration-300">
                <Maximize2 size={24} />
              </div>
            </div>
          </div>

          {/* Side Grids */}
          <div className="md:col-span-1 grid grid-rows-2 gap-3">
            <div
              className="relative group cursor-pointer overflow-hidden border-2 border-transparent hover:border-brand-lime transition-all"
              onClick={() => handleOpenLightbox(1)}
            >
              <img src={property.images[1]} alt="Detail 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
            <div
              className="relative group cursor-pointer overflow-hidden border-2 border-transparent hover:border-brand-lime transition-all"
              onClick={() => handleOpenLightbox(2)}
            >
              <img src={property.images[2]} alt="Detail 2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          </div>

          <div className="md:col-span-1 relative group cursor-pointer overflow-hidden border-2 border-transparent hover:border-brand-lime transition-all">
            <div
              className="w-full h-full"
              onClick={() => handleOpenLightbox(3)}
            >
              <img
                src={property.images[3]}
                alt="Detail 3"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          </div>

          <button
            onClick={() => handleOpenLightbox(0)}
            className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-8 py-3 rounded-full border border-white shadow-2xl text-[11px] font-black uppercase tracking-[0.2em] text-brand-blue flex items-center gap-3 hover:bg-brand-lime hover:text-brand-navy hover:scale-105 transition-all duration-300"
          >
            <Maximize2 size={16} />
            View All Photos
          </button>
        </div>

        {/* Immersive Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-[100] bg-brand-blue/98 flex items-center justify-center backdrop-blur-2xl transition-all duration-500"
            onClick={handleCloseLightbox}
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20"
              onClick={handleCloseLightbox}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-white/10 p-4 rounded-full hover:bg-white/20"
              onClick={showPrev}
            >
              <ChevronLeft size={48} />
            </button>

            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-white/10 p-4 rounded-full hover:bg-white/20"
              onClick={showNext}
            >
              <ChevronRight size={48} />
            </button>

            <div
              className="max-w-6xl max-h-[85vh] px-12 relative flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={property.images[selectedImageIndex]}
                alt="Fullscreen view"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 animate-fade-in"
              />
              <div className="mt-8 text-white/60 font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-6">
                <span className="text-brand-green">{selectedImageIndex + 1} / {property.images.length}</span>
                <span className="w-12 h-[1px] bg-white/20"></span>
                <span>{property.title}</span>
              </div>
            </div>
          </div>
        )}

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
                <div className="h-16 w-16 flex items-center justify-center p-2">
                  <img src={LOGO_URL} alt="ESDR" className="h-full w-full object-contain" />
                </div>
                <span className="text-[10px] font-black text-brand-navy mt-1 uppercase tracking-tighter">ESDR OWNER</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="text-brand-lime shrink-0" size={32} />
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
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
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

              <Link to={`/apply?propertyId=${property.id}`}>
                <Button fullWidth size="lg" className="py-7 rounded-2xl text-xl font-black bg-brand-lime text-brand-navy hover:bg-[#D4E600] shadow-2xl shadow-brand-lime/20">
                  {property.priceUnit === 'night' ? 'Book Now' : 'Apply Now'}
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