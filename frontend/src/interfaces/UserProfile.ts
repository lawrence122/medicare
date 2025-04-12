export interface UserProfile {
  email: string;
  displayName: string;
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other';
  weight?: number;
  height?: number;
  allergies?: string[];
  conditions?: string[];
  favoriteMedications: {
    medicationId: string;
    symptoms: {
      date: string;
      severity: number;
      notes: string;
    }[];
  }[];
} 