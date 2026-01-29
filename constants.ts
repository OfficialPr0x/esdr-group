import { Property, PropertyCategory } from './types';

export const COMPANY_NAME = "ESDR Group";
export const COMPANY_TAGLINE = "Homes, not just housing.";
export const CONTACT_EMAIL = "rentals@esdrgroup.ca";

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Family Home in Cornwall',
    category: PropertyCategory.RESIDENTIAL,
    location: 'Cornwall, ON',
    price: '$2,200',
    priceUnit: 'mo',
    details: ['3 Bed', '2 Bath', 'Large Backyard'],
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 5,
    description: 'A beautiful detached home perfect for a growing family. This newly renovated property features a chef\'s kitchen with quartz countertops, hardwood floors throughout, and a spacious fenced backyard safe for children and pets. Located in a quiet cul-de-sac near top-rated schools.',
    available: true,
    images: [
      'https://images.unsplash.com/photo-1600596542815-e32870110029?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556912173-3db9963f6bee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a1c00207099b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Wifi', 'Air Conditioning', 'Dishwasher', 'Laundry in Unit', 'Private Parking', 'Backyard'],
    rating: 4.9,
    reviews: 12
  },
  {
    id: '2',
    title: 'The Heritage Duplex - Upper Unit',
    category: PropertyCategory.MULTI_UNIT,
    location: 'Kingston, ON',
    price: '$1,850',
    priceUnit: 'mo',
    details: ['2 Bed', '1 Bath', 'Historic Charm'],
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 3,
    description: 'Experience downtown living in this restored heritage building. Featuring high ceilings, original crown molding, and large bay windows that flood the space with natural light. Professional management ensures a quiet and well-maintained environment.',
    available: true,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502005229766-528352a2e780?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Wifi', 'Heating', 'Washer/Dryer', 'Work Space', 'Smart Lock'],
    rating: 4.8,
    reviews: 24
  },
  {
    id: '3',
    title: 'Lakeside Cottage Retreat',
    category: PropertyCategory.AIRBNB,
    location: 'Westport, ON',
    price: '$250',
    priceUnit: 'night',
    details: ['Sleeps 6', 'Waterfront', 'Wifi'],
    bedrooms: 3,
    bathrooms: 1.5,
    maxGuests: 6,
    description: 'Your perfect weekend getaway on the Rideau System. This cozy cottage offers direct waterfront access, a private dock, and a large fire pit for evening gatherings. Fully winterized for year-round enjoyment.',
    available: true,
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513584685908-7827be82aa39?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Lake Access', 'Wifi', 'Fire Pit', 'BBQ Grill', 'Kayak Included', 'Kitchen'],
    rating: 5.0,
    reviews: 48
  },
  {
    id: '4',
    title: 'Secure Climate Controlled Unit',
    category: PropertyCategory.STORAGE,
    location: 'Brockville, ON',
    price: '$180',
    priceUnit: 'mo',
    details: ['10x15', 'Climate Controlled', '24/7 Access'],
    bedrooms: 0,
    bathrooms: 0,
    maxGuests: 0,
    description: 'Safe, dry, and secure storage for your valuable items or business inventory. Our facility features 24/7 CCTV monitoring, coded gate access, and climate control to protect against humidity and temperature fluctuations.',
    available: true,
    images: [
      'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687654-708bd0f06f72?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['24/7 Access', 'CCTV Security', 'Climate Control', 'Drive-up Access', 'Dolly Carts'],
    rating: 4.7,
    reviews: 8
  },
  {
    id: '5',
    title: 'Downtown Studio Loft',
    category: PropertyCategory.RESIDENTIAL,
    location: 'Ottawa, ON',
    price: '$1,650',
    priceUnit: 'mo',
    details: ['Studio', '1 Bath', 'Furnished'],
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    description: 'Efficient living for the modern professional. Walking distance to transit and Parliament Hill. This unit comes fully furnished with modern decor and includes all utilities in the monthly rent.',
    available: false,
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918760532-3edbed13c46d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a1c00207099b?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Furnished', 'All Inclusive', 'Gym in Building', 'Concierge', 'Elevator'],
    rating: 4.6,
    reviews: 5
  }
];

export const SYSTEM_INSTRUCTION = `
You are Sarah, the dedicated Virtual Assistant for ESDR Group, a real estate investment group in Eastern Ontario.
Your goal is to build trust, provide accurate information about rentals, and encourage serious applicants to apply.
You are friendly, professional, and helpful. You are NOT a generic AI; you represent a local, human-run business.

Key Information about ESDR Group:
- We own Residential homes, Multi-unit buildings, Airbnbs, and Commercial Storage.
- Values: Trust, Family-oriented, Responsive, Transparent.
- Locations: Eastern Ontario (Cornwall, Kingston, Ottawa, Brockville).
- We value high-quality, long-term tenants.

Instructions:
1. If asked about availability, refer to general types of properties we have (Residential, Storage, etc.) and suggest checking the "Properties" page for live listings.
2. If asked about the application process, explain it is online, fast, and secure.
3. If asked about scams, reassure them that ESDR is a verified local owner and we never ask for deposits before a showing.
4. Keep responses concise (under 3 sentences usually).
5. If the user seems interested in applying, guide them to the 'Apply Now' button.
6. You can speak English and French.
`;