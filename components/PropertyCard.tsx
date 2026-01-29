import React from 'react';
import { Property } from '../types';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/properties/${property.id}`} className="group block">
      <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Availability Badge */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm ${property.available
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-800 text-white'
              }`}>
              {property.available ? 'Available Now' : 'Leased'}
            </span>
            {property.available && (
              <span className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm border border-white/20">
                Verified
              </span>
            )}
          </div>
          {/* Wishlist Button (Visual Only) */}
          <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors border border-white/20 group/heart">
            <Heart size={18} className="text-white group-hover/heart:fill-white transition-colors" />
          </button>

          {/* Price Overlay */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm border border-white/20">
              <span className="text-slate-900 font-bold">{property.price}</span>
              <span className="text-slate-500 text-xs ml-0.5">/{property.priceUnit}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
              {property.category}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-slate-900 bg-slate-50 px-2 py-0.5 rounded-md">
              <Star size={12} className="text-amber-400 fill-amber-400" />
              <span>{property.rating}</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2 transition-colors group-hover:text-emerald-700">
            {property.title}
          </h3>

          <div className="flex items-center text-slate-500 text-sm mb-4">
            <span className="truncate">{property.location}</span>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-50 flex items-center gap-4 text-xs font-medium text-slate-600">
            {property.bedrooms > 0 && <span>{property.bedrooms} Beds</span>}
            {property.bathrooms > 0 && <span>{property.bathrooms} Baths</span>}
            <span className="ml-auto text-emerald-600 group-hover:underline">View Details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};