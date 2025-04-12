export interface MedicationItem {
  id: number | string;
  title?: string;
  name?: string;
  genericName?: string;
  description: string;
  category?: string;
  symptoms?: string[];
  dosage?: string;
  sideEffects?: string[];
  interactions?: string[];
  manufacturer?: string;
  imageUrl?: string;
  effectiveness?: number;
  averageRating?: number;
  price?: {
    generic: number;
    brand: number;
  };
  frequency?: string;
  routeAdmin?: string[];
} 