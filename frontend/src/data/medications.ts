export interface Medication {
  id: string;
  name: string;
  genericName: string;
  description: string;
  category: string;
  symptoms: string[];
  dosage: string;
  sideEffects: string[];
  interactions: string[];
  manufacturer: string;
  imageUrl: string;
  effectiveness: number;
  averageRating: number;
  price: {
    generic: number;
    brand: number;
  };
}

export const medications: Medication[] = [
  {
    id: "1",
    name: "Lipitor",
    genericName: "Atorvastatin",
    description: "A statin medication used to lower cholesterol and reduce the risk of heart disease.",
    category: "Cardiovascular",
    symptoms: ["High Cholesterol", "Heart Disease Risk", "Atherosclerosis"],
    dosage: "10-80mg daily",
    sideEffects: ["Muscle pain", "Liver problems", "Digestive issues"],
    interactions: ["Grapefruit juice", "Certain antibiotics", "Some HIV medications"],
    manufacturer: "Pfizer",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 85,
    averageRating: 4.2,
    price: {
      generic: 15,
      brand: 150
    }
  },
  {
    id: "2",
    name: "Zoloft",
    genericName: "Sertraline",
    description: "An antidepressant medication used to treat depression, anxiety, and other mental health conditions.",
    category: "Psychiatric",
    symptoms: ["Depression", "Anxiety", "OCD", "PTSD"],
    dosage: "50-200mg daily",
    sideEffects: ["Nausea", "Insomnia", "Sexual dysfunction"],
    interactions: ["MAOIs", "Blood thinners", "NSAIDs"],
    manufacturer: "Pfizer",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 80,
    averageRating: 4.0,
    price: {
      generic: 10,
      brand: 120
    }
  },
  {
    id: "3",
    name: "Metformin",
    genericName: "Metformin Hydrochloride",
    description: "An oral diabetes medication that helps control blood sugar levels.",
    category: "Diabetes",
    symptoms: ["Type 2 Diabetes", "Insulin Resistance"],
    dosage: "500-2000mg daily",
    sideEffects: ["Gastrointestinal upset", "Lactic acidosis risk"],
    interactions: ["Contrast dyes", "Certain diabetes medications"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 90,
    averageRating: 4.3,
    price: {
      generic: 5,
      brand: 80
    }
  },
  {
    id: "4",
    name: "Amoxicillin",
    genericName: "Amoxicillin",
    description: "A penicillin antibiotic used to treat various bacterial infections.",
    category: "Antibiotic",
    symptoms: ["Bacterial Infections", "Strep Throat", "Ear Infections"],
    dosage: "250-500mg three times daily",
    sideEffects: ["Diarrhea", "Rash", "Allergic reactions"],
    interactions: ["Allopurinol", "Blood thinners"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 95,
    averageRating: 4.5,
    price: {
      generic: 8,
      brand: 40
    }
  },
  {
    id: "5",
    name: "Lisinopril",
    genericName: "Lisinopril",
    description: "An ACE inhibitor used to treat high blood pressure and heart failure.",
    category: "Cardiovascular",
    symptoms: ["High Blood Pressure", "Heart Failure"],
    dosage: "10-40mg daily",
    sideEffects: ["Dry cough", "Dizziness", "High potassium"],
    interactions: ["Potassium supplements", "Salt substitutes"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 88,
    averageRating: 4.1,
    price: {
      generic: 12,
      brand: 100
    }
  },
  {
    id: "6",
    name: "Omeprazole",
    genericName: "Omeprazole",
    description: "A proton pump inhibitor used to treat acid reflux and stomach ulcers.",
    category: "Gastrointestinal",
    symptoms: ["Acid Reflux", "GERD", "Stomach Ulcers"],
    dosage: "20mg daily",
    sideEffects: ["Headache", "Diarrhea", "Vitamin B12 deficiency"],
    interactions: ["Clopidogrel", "Iron supplements"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 92,
    averageRating: 4.4,
    price: {
      generic: 15,
      brand: 90
    }
  },
  {
    id: "7",
    name: "Albuterol",
    genericName: "Albuterol Sulfate",
    description: "A bronchodilator used to treat asthma and other breathing conditions.",
    category: "Respiratory",
    symptoms: ["Asthma", "COPD", "Bronchospasm"],
    dosage: "1-2 puffs every 4-6 hours",
    sideEffects: ["Tremors", "Anxiety", "Increased heart rate"],
    interactions: ["Beta blockers", "Diuretics"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 94,
    averageRating: 4.6,
    price: {
      generic: 25,
      brand: 60
    }
  },
  {
    id: "8",
    name: "Gabapentin",
    genericName: "Gabapentin",
    description: "An anticonvulsant used to treat nerve pain and seizures.",
    category: "Neurological",
    symptoms: ["Nerve Pain", "Seizures", "Restless Legs"],
    dosage: "300-1800mg daily",
    sideEffects: ["Drowsiness", "Weight gain", "Swelling"],
    interactions: ["Opioids", "Antacids"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/mtm/Gabapentin%20300%20mg%20693670132.jpg",
    effectiveness: 82,
    averageRating: 3.9,
    price: {
      generic: 20,
      brand: 110
    }
  },
  {
    id: "9",
    name: "Fluoxetine",
    genericName: "Fluoxetine",
    description: "An SSRI antidepressant used to treat depression and anxiety.",
    category: "Psychiatric",
    symptoms: ["Depression", "Anxiety", "Bulimia"],
    dosage: "20-80mg daily",
    sideEffects: ["Nausea", "Insomnia", "Sexual dysfunction"],
    interactions: ["MAOIs", "Blood thinners"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 78,
    averageRating: 3.8,
    price: {
      generic: 8,
      brand: 130
    }
  },
  {
    id: "10",
    name: "Hydrochlorothiazide",
    genericName: "Hydrochlorothiazide",
    description: "A diuretic used to treat high blood pressure and fluid retention.",
    category: "Cardiovascular",
    symptoms: ["High Blood Pressure", "Edema"],
    dosage: "12.5-50mg daily",
    sideEffects: ["Frequent urination", "Electrolyte imbalance"],
    interactions: ["Lithium", "Digoxin"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 86,
    averageRating: 4.0,
    price: {
      generic: 10,
      brand: 70
    }
  },
  {
    id: "11",
    name: "Pantoprazole",
    genericName: "Pantoprazole",
    description: "A proton pump inhibitor used to treat stomach acid-related conditions.",
    category: "Gastrointestinal",
    symptoms: ["Acid Reflux", "GERD", "Stomach Ulcers"],
    dosage: "40mg daily",
    sideEffects: ["Headache", "Diarrhea", "Vitamin B12 deficiency"],
    interactions: ["Atazanavir", "Iron supplements"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 90,
    averageRating: 4.2,
    price: {
      generic: 18,
      brand: 95
    }
  },
  {
    id: "12",
    name: "Metoprolol",
    genericName: "Metoprolol Tartrate",
    description: "A beta blocker used to treat high blood pressure and heart conditions.",
    category: "Cardiovascular",
    symptoms: ["High Blood Pressure", "Angina", "Heart Failure"],
    dosage: "25-200mg daily",
    sideEffects: ["Fatigue", "Cold extremities", "Depression"],
    interactions: ["Calcium channel blockers", "Insulin"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 87,
    averageRating: 4.1,
    price: {
      generic: 15,
      brand: 85
    }
  },
  {
    id: "13",
    name: "Sertraline",
    genericName: "Sertraline",
    description: "An antidepressant used to treat depression and anxiety disorders.",
    category: "Psychiatric",
    symptoms: ["Depression", "Anxiety", "OCD", "PTSD"],
    dosage: "50-200mg daily",
    sideEffects: ["Nausea", "Insomnia", "Sexual dysfunction"],
    interactions: ["MAOIs", "Blood thinners"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 81,
    averageRating: 4.0,
    price: {
      generic: 12,
      brand: 125
    }
  },
  {
    id: "14",
    name: "Amlodipine",
    genericName: "Amlodipine Besylate",
    description: "A calcium channel blocker used to treat high blood pressure and angina.",
    category: "Cardiovascular",
    symptoms: ["High Blood Pressure", "Angina"],
    dosage: "2.5-10mg daily",
    sideEffects: ["Swelling", "Headache", "Dizziness"],
    interactions: ["Simvastatin", "Cyclosporine"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 89,
    averageRating: 4.2,
    price: {
      generic: 10,
      brand: 75
    }
  },
  {
    id: "15",
    name: "Escitalopram",
    genericName: "Escitalopram",
    description: "An antidepressant used to treat depression and anxiety.",
    category: "Psychiatric",
    symptoms: ["Depression", "Anxiety", "Panic Disorder"],
    dosage: "10-20mg daily",
    sideEffects: ["Nausea", "Insomnia", "Sexual dysfunction"],
    interactions: ["MAOIs", "NSAIDs"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 83,
    averageRating: 4.1,
    price: {
      generic: 15,
      brand: 140
    }
  },
  {
    id: "16",
    name: "Atorvastatin",
    genericName: "Atorvastatin",
    description: "A statin medication used to lower cholesterol levels.",
    category: "Cardiovascular",
    symptoms: ["High Cholesterol", "Heart Disease Risk"],
    dosage: "10-80mg daily",
    sideEffects: ["Muscle pain", "Liver problems", "Digestive issues"],
    interactions: ["Grapefruit juice", "Certain antibiotics"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 86,
    averageRating: 4.3,
    price: {
      generic: 20,
      brand: 160
    }
  },
  {
    id: "17",
    name: "Venlafaxine",
    genericName: "Venlafaxine",
    description: "An antidepressant used to treat depression and anxiety.",
    category: "Psychiatric",
    symptoms: ["Depression", "Anxiety", "Panic Disorder"],
    dosage: "75-225mg daily",
    sideEffects: ["Nausea", "Insomnia", "Increased blood pressure"],
    interactions: ["MAOIs", "Blood thinners"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 79,
    averageRating: 3.9,
    price: {
      generic: 18,
      brand: 150
    }
  },
  {
    id: "18",
    name: "Losartan",
    genericName: "Losartan Potassium",
    description: "An angiotensin receptor blocker used to treat high blood pressure.",
    category: "Cardiovascular",
    symptoms: ["High Blood Pressure", "Kidney Disease"],
    dosage: "25-100mg daily",
    sideEffects: ["Dizziness", "High potassium", "Kidney problems"],
    interactions: ["Potassium supplements", "NSAIDs"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 88,
    averageRating: 4.2,
    price: {
      generic: 15,
      brand: 90
    }
  },
  {
    id: "19",
    name: "Duloxetine",
    genericName: "Duloxetine",
    description: "An antidepressant used to treat depression, anxiety, and chronic pain.",
    category: "Psychiatric",
    symptoms: ["Depression", "Anxiety", "Chronic Pain"],
    dosage: "30-60mg daily",
    sideEffects: ["Nausea", "Dry mouth", "Constipation"],
    interactions: ["MAOIs", "Blood thinners"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 80,
    averageRating: 4.0,
    price: {
      generic: 25,
      brand: 170
    }
  },
  {
    id: "20",
    name: "Rosuvastatin",
    genericName: "Rosuvastatin",
    description: "A statin medication used to lower cholesterol and reduce heart disease risk.",
    category: "Cardiovascular",
    symptoms: ["High Cholesterol", "Heart Disease Risk"],
    dosage: "5-40mg daily",
    sideEffects: ["Muscle pain", "Liver problems", "Headache"],
    interactions: ["Grapefruit juice", "Certain antibiotics"],
    manufacturer: "Various",
    imageUrl: "https://www.drugs.com/images/pills/nlm/493480042.jpg",
    effectiveness: 85,
    averageRating: 4.1,
    price: {
      generic: 22,
      brand: 145
    }
  }
]; 