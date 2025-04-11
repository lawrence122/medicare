import { MedicationItem } from "../interfaces/MedicationItem";

export const conditionsTestData = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];
export const allergiesTestData = [
    '🍎 Apples',
    '🍌 Bananas',
    '🥦 Broccoli',
    '🥕 Carrots',
    '🍫 Chocolate',
    '🍇 Grapes',
    '🍋 Lemon',
    '🥬 Lettuce',
    '🍄 Mushrooms',
    '🍊 Oranges',
    '🥔 Potatoes',
    '🍅 Tomatoes',
    '🥚 Eggs',
    '🥛 Milk',
    '🍞 Bread',
    '🍗 Chicken',
    '🍔 Hamburger',
    '🧀 Cheese',
    '🥩 Steak',
    '🍟 French Fries',
    '🍕 Pizza',
    '🥦 Cauliflower',
    '🥜 Peanuts',
    '🍦 Ice Cream',
    '🍯 Honey',
    '🥖 Baguette',
    '🍣 Sushi',
    '🥝 Kiwi',
    '🍓 Strawberries',
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
