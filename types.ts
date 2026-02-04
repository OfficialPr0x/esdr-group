export enum PropertyCategory {
  RESIDENTIAL = 'Residential',
  MULTI_UNIT = 'Multi-Unit',
  AIRBNB = 'Short-Term / Airbnb',
  STORAGE = 'Commercial Storage'
}

export interface Property {
  id: string;
  title: string;
  category: PropertyCategory;
  location: string;
  price: string;
  priceUnit: 'mo' | 'night';
  details: string[]; // Keep for compatibility, but use specific fields below for UI
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  description: string;
  available: boolean;
  images: string[]; // Array of images for the gallery
  amenities: string[];
  rating: number;
  reviews: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ApplicationState {
  step: number;
  // Unit Selection
  propertyId: string;
  unitType: string;

  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;

  // Residency History
  currentAddress: string;
  reasonForMoving: string;
  currentLandlordName: string;
  currentLandlordContact: string;

  // Employment & Income
  employmentStatus: string;
  employerName: string;
  jobTitle: string;
  monthlyIncome: string;
  proofOfIncomeType: string;

  // Logistics
  moveInDate: string;
  occupants: string;
  occupantNames: string;
  petDetails: string;
  vehicleInfo: string; // Make, Model, Plate

  // Legal
  consentToCreditCheck: boolean;
  isSmoker: boolean;
}