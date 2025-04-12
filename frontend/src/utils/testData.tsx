import { MedicationItem } from "../interfaces/MedicationItem";

export const conditionsTestData = [
  "Hypertension (High Blood Pressure)",
  "Type 2 Diabetes",
  "Asthma",
  "Migraine",
  "Hyperthyroidism",
  "Hypothyroidism",
  "Coronary Artery Disease",
  "Arthritis (Osteoarthritis)",
  "Rheumatoid Arthritis",
  "Chronic Kidney Disease",
  "COPD (Chronic Obstructive Pulmonary Disease)",
  "Depression",
  "Generalized Anxiety Disorder",
  "Epilepsy",
  "GERD (Acid Reflux)",
  "Psoriasis",
  "Ulcerative Colitis",
  "Crohn's Disease",
  "Anemia (Iron Deficiency)",
  "Osteoporosis"
];

export const allergiesTestData = [
  "Penicillin",
  "Sulfa Drugs",
  "Ibuprofen",
  "Aspirin",
  "Codeine",
  "Latex",
  "Peanuts",
  "Shellfish",
  "Eggs",
  "Dairy (Lactose Intolerance)",
  "Gluten (Celiac Disease)",
  "Pollen (Hay Fever)",
  "Dust Mites",
  "Cat/Dog Dander",
  "Mold Spores",
  "Bee Stings",
  "Soy",
  "Tree Nuts",
  "Sesame Seeds",
  "MSG (Monosodium Glutamate)"
];

export const data = [
    { name: 'USA', value: 400, color: 'indigo.6' },
    { name: 'India', value: 300, color: 'yellow.6' },
    { name: 'Japan', value: 300, color: 'teal.6' },
    { name: 'Other', value: 200, color: 'gray.6' },
  ];

export const medications : MedicationItem[] = [
    {
      id: 1,
      title: "First Item",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: 2,
      title: "Ibuprofen",
      description: "Pain reliever and anti-inflammatory",
    },
    {
      id: 3,
      title: "Amoxicillin",
      description: "Antibiotic for bacterial infections",
    },
];

export const sampleReviews = [
    {
      id: 1,
      username: "JohnDoe42",
      createdOn: new Date("2024-05-15T09:30:00"),
      dosage: "500mg",
      frequency: "Twice daily",
      routeAdmin: ["Oral", "With food"],
      duration: 30,
      sideEffect: ["Mild nausea", "Headache", "Dizziness"],
      severity: "Moderate",
      onset: "Within 2 hours",
      lasted: 3,
      impact: "Reduced daily activities",
      helpSought: "Consulted pharmacist",
      improved: "Symptoms decreased after 1 week",
      medStopped: "No"
    },
    {
      id: 2,
      username: "WellnessSeeker",
      createdOn: new Date("2024-06-02T14:15:00"),
      dosage: "250mg",
      frequency: "Every 6 hours",
      routeAdmin: ["Sublingual"],
      duration: 10,
      sideEffect: ["Dry mouth"],
      severity: "Mild",
      onset: "Within 1 hour",
      lasted: 1,
      impact: "Minimal impact on daily life",
      helpSought: "No medical help needed",
      improved: "Condition improved significantly",
      medStopped: "No"
    },
    {
      id: 3,
      username: "HeartHealth",
      createdOn: new Date("2024-03-10T11:20:00"),
      dosage: "20mg",
      frequency: "Once daily",
      routeAdmin: ["Oral"],
      duration: 90,
      sideEffect: ["Muscle pain", "Mild headache"],
      severity: "Mild",
      onset: "After 2 weeks",
      lasted: 7,
      impact: "Slight discomfort but manageable",
      helpSought: "Consulted doctor",
      improved: "Cholesterol levels improved",
      medStopped: "No"
    },
    {
      id: 4,
      username: "MentalWellness",
      createdOn: new Date("2024-04-05T15:45:00"),
      dosage: "50mg",
      frequency: "Once daily",
      routeAdmin: ["Oral"],
      duration: 60,
      sideEffect: ["Initial nausea", "Sleep changes"],
      severity: "Moderate",
      onset: "First week",
      lasted: 14,
      impact: "Affected sleep schedule",
      helpSought: "Consulted psychiatrist",
      improved: "Anxiety significantly reduced",
      medStopped: "No"
    },
    {
      id: 5,
      username: "DiabetesWarrior",
      createdOn: new Date("2024-02-20T09:15:00"),
      dosage: "1000mg",
      frequency: "Twice daily",
      routeAdmin: ["Oral", "With meals"],
      duration: 180,
      sideEffect: ["Gastrointestinal upset"],
      severity: "Mild",
      onset: "First few days",
      lasted: 5,
      impact: "Temporary digestive issues",
      helpSought: "Consulted doctor",
      improved: "Blood sugar levels stabilized",
      medStopped: "No"
    },
    {
      id: 6,
      username: "InfectionFighter",
      createdOn: new Date("2024-01-15T13:30:00"),
      dosage: "500mg",
      frequency: "Three times daily",
      routeAdmin: ["Oral"],
      duration: 10,
      sideEffect: ["Diarrhea", "Yeast infection"],
      severity: "Moderate",
      onset: "Day 3",
      lasted: 5,
      impact: "Required additional treatment",
      helpSought: "Consulted doctor",
      improved: "Infection cleared",
      medStopped: "Yes, after course completed"
    },
    {
      id: 7,
      username: "BPController",
      createdOn: new Date("2024-05-01T10:00:00"),
      dosage: "10mg",
      frequency: "Once daily",
      routeAdmin: ["Oral"],
      duration: 120,
      sideEffect: ["Dry cough", "Dizziness"],
      severity: "Mild",
      onset: "After 1 week",
      lasted: 14,
      impact: "Mild discomfort",
      helpSought: "Consulted doctor",
      improved: "Blood pressure normalized",
      medStopped: "No"
    },
    {
      id: 8,
      username: "AcidRefluxSufferer",
      createdOn: new Date("2024-04-15T14:20:00"),
      dosage: "20mg",
      frequency: "Once daily",
      routeAdmin: ["Oral"],
      duration: 30,
      sideEffect: ["Headache", "Vitamin B12 deficiency"],
      severity: "Mild",
      onset: "After 2 weeks",
      lasted: 10,
      impact: "Required B12 supplements",
      helpSought: "Consulted doctor",
      improved: "Acid reflux resolved",
      medStopped: "No"
    },
    {
      id: 9,
      username: "AsthmaPatient",
      createdOn: new Date("2024-03-25T16:40:00"),
      dosage: "2 puffs",
      frequency: "As needed",
      routeAdmin: ["Inhalation"],
      duration: 90,
      sideEffect: ["Tremors", "Increased heart rate"],
      severity: "Mild",
      onset: "Immediate",
      lasted: 1,
      impact: "Temporary jitteriness",
      helpSought: "No medical help needed",
      improved: "Breathing improved significantly",
      medStopped: "No"
    },
    {
      id: 10,
      username: "PainManager",
      createdOn: new Date("2024-02-10T11:15:00"),
      dosage: "300mg",
      frequency: "Three times daily",
      routeAdmin: ["Oral"],
      duration: 60,
      sideEffect: ["Drowsiness", "Weight gain"],
      severity: "Moderate",
      onset: "First week",
      lasted: 30,
      impact: "Affected daily activities",
      helpSought: "Consulted doctor",
      improved: "Pain reduced by 70%",
      medStopped: "No"
    }
];

// const [savedMeds, setSavedMeds] = useState([
//   {
//     id: 1,
//     name: 'Ibuprofen',
//     dosage: '200mg',
//     frequency: 'Every 6 hours',
//     description: 'Pain reliever and anti-inflammatory'
//   },
//   {
//     id: 2,
//     name: 'Amoxicillin',
//     dosage: '500mg',
//     frequency: 'Twice daily',
//     description: 'Antibiotic for bacterial infections'
//   },
//   // Add more medications as needed
// ]);

export const symptomsTestData = [
    {
        label: "1. General/Whole Body",
        options: [
            "Fatigue",
            "Weakness",
            "Fever or chills",
            "Swelling (edema) in hands/feet",
            "Unintended weight gain or loss",
            "Night sweats",
        ]
    },

    {
        label: "2. Gastrointestinal (Digestive System)",
        options: [
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Constipation",
            "Abdominal pain",
            "Bloating or gas",
            "Heartburn/acid reflux",
            "Loss of appetite",
            "Dry mouth",
            "Black/tarry stools (possible bleeding)",
        ]
    },

    {
        label: "3. Nervous System & Brain",
        options: [
            "Headache",
            "Dizziness",
            "Lightheadedness",
            "Confusion",
            "Memory problems",
            "Tremors or shaking",
            "Seizures",
            "Tingling or numbness (paresthesia)",
            "Insomnia (trouble sleeping)",
            "Drowsiness",
            "Anxiety",
            "Depression",
            "Hallucinations",
            "Suicidal thoughts (rare but serious)",
        ]
    },
    {
        label: "4. Cardiovascular (Heart & Blood Vessels)",
        options: [
            "Rapid heartbeat (tachycardia)",
            "Slow heartbeat (bradycardia)",
            "Irregular heartbeat (arrhythmia)",
            "Chest pain",
            "High or low blood pressure",
            "Palpitations (feeling of skipped beats)",
            "Swelling in legs (fluid retention)",
        ]
    },
    {
        label: "5. Respiratory (Lungs & Breathing)",
        options: [
            "Shortness of breath",
            "Wheezing",
            "Cough (dry or productive)",
            "Sore throat",
            "Nasal congestion",
            "Difficulty breathing (seek emergency help)",
        ]
    },
    {
        label: "6. Skin Reactions",
        options: [
            "Rash (red, itchy, or blistering)",
            "Hives (urticaria)",
            "Itching (pruritus)",
            "Dry skin",
            "Acne or skin breakouts",
            "Increased sensitivity to sunlight",
            "Hair loss (alopecia)",
            "Excessive sweating",
            "Skin discoloration"
        ]
    },
// 7. Musculoskeletal (Muscles & Bones)
// Muscle pain (myalgia)

// Joint pain (arthralgia)

// Muscle weakness

// Cramps

// Bone pain

// Tendon inflammation or rupture (rare)

// 8. Urinary & Kidney Issues
// Frequent urination

// Painful urination

// Dark or bloody urine

// Decreased urine output

// Kidney pain (flank pain)

// 9. Liver & Metabolic Effects
// Yellowing of skin/eyes (jaundice)

// Dark urine (possible liver issue)

// Unusual thirst or hunger

// Changes in blood sugar (hyperglycemia/hypoglycemia)

// 10. Vision & Hearing
// Blurred vision

// Double vision

// Eye pain or redness

// Dry eyes

// Sensitivity to light

// Ringing in ears (tinnitus)

// Hearing loss (rare)

// 11. Blood & Immune System
// Easy bruising or bleeding

// Unusual bleeding (nosebleeds, gums)

// Pale skin (anemia)

// Frequent infections (low immunity)

// Swollen lymph nodes

// 12. Reproductive & Sexual Health
// Erectile dysfunction

// Decreased libido

// Menstrual changes (heavier/lighter periods)

// Breast tenderness/enlargement

// Vaginal dryness or discharge

// ["13. Severe/Allergic Reactions (Seek Emergency Help)",
//     [
//         "Difficulty breathing/swelling (anaphylaxis)",
//         "Severe skin rash (e.g., Stevens-Johnson syndrome)",
//         "Chest tightness/pain",
//         "Severe dizziness/fainting",
//         "Sudden confusion or slurred speech (stroke-like symptoms)",
//     ]
// ]

]
