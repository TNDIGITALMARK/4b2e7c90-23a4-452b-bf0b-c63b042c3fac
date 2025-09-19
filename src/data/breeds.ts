import { CowBreed } from '@/types';

export const cowBreeds: CowBreed[] = [
  {
    id: 'holstein',
    name: 'Holstein',
    slug: 'holstein',
    description: 'Holstein cattle are the most recognizable dairy breed worldwide, known for their distinctive black and white markings and exceptional milk production. Originally from the Netherlands, these gentle giants have become the foundation of modern dairy farming.',
    shortDescription: 'World\'s most productive dairy breed with distinctive black and white markings.',
    origin: 'Netherlands',
    primaryPurpose: 'dairy',
    characteristics: {
      size: 'large',
      temperament: 'Docile and intelligent',
      colors: ['Black and White', 'Red and White'],
      averageWeight: {
        male: 1000,
        female: 680
      },
      milkProduction: 9000,
      lifespan: 20
    },
    physicalTraits: {
      height: {
        male: 152,
        female: 145
      },
      distinguishingFeatures: [
        'Distinctive black and white patches',
        'Large udders',
        'Tall, angular frame',
        'Strong legs and feet'
      ],
      coatPattern: 'Irregular patches of black and white'
    },
    careRequirements: {
      climate: ['Temperate', 'Cool'],
      diet: ['High-quality forage', 'Grain supplements', 'Fresh water'],
      spaceNeeds: 'Minimum 2 acres per cow for grazing',
      specialNeeds: ['Regular milking', 'Comfortable housing', 'Nutritional management']
    },
    economicValue: {
      popularity: 10,
      marketDemand: 'high',
      costToRaise: 'medium'
    },
    images: {
      primary: '/generated/holstein-primary.jpg',
      gallery: [
        '/generated/holstein-primary.jpg',
        '/generated/hero-cows-field.jpg',
        '/generated/holstein-primary.jpg'
      ],
      thumbnails: ['/generated/holstein-primary.jpg']
    },
    funFacts: [
      'A Holstein cow can produce up to 9,000 gallons of milk per year',
      'They have excellent memories and can remember faces for years',
      'Holstein calves are born weighing 80-100 pounds',
      'They are the most efficient converters of feed to milk'
    ],
    history: 'Developed in the Dutch provinces of North Holland and Friesland, Holstein cattle were first imported to America in 1852. Their superior milk production quickly made them the preferred dairy breed.',
    breedingInfo: {
      gestationPeriod: 283,
      averageLitterSize: 1,
      breedingAge: 15
    },
    healthInfo: {
      commonIssues: ['Mastitis', 'Lameness', 'Metabolic disorders'],
      vaccinations: ['BVD', 'IBR', 'PI3', 'BRSV'],
      geneticTraits: ['High milk production genes', 'Longevity traits']
    },
    tags: ['dairy', 'high-production', 'black-white', 'popular'],
    featured: true,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'angus',
    name: 'Angus',
    slug: 'angus',
    description: 'Aberdeen Angus cattle are renowned for producing some of the world\'s finest beef. These naturally polled (hornless) cattle originated in Scotland and are prized for their marbling, tenderness, and excellent mothering abilities.',
    shortDescription: 'Premium beef breed known for exceptional meat quality and marbling.',
    origin: 'Scotland',
    primaryPurpose: 'beef',
    characteristics: {
      size: 'medium',
      temperament: 'Calm and easy-going',
      colors: ['Black', 'Red'],
      averageWeight: {
        male: 850,
        female: 550
      },
      lifespan: 18
    },
    physicalTraits: {
      height: {
        male: 147,
        female: 137
      },
      distinguishingFeatures: [
        'Naturally polled (hornless)',
        'Compact, muscular build',
        'Smooth coat',
        'Well-rounded hindquarters'
      ],
      coatPattern: 'Solid black or red coloration'
    },
    careRequirements: {
      climate: ['Temperate', 'Cool', 'Variable'],
      diet: ['Grass-based', 'Grain finishing', 'Mineral supplements'],
      spaceNeeds: '1-2 acres per cow for grazing',
      specialNeeds: ['Good pasture management', 'Shelter from extreme weather']
    },
    economicValue: {
      popularity: 9,
      marketDemand: 'high',
      costToRaise: 'medium'
    },
    images: {
      primary: '/generated/angus-primary.jpg',
      gallery: [
        '/generated/angus-primary.jpg',
        '/generated/angus-primary.jpg',
        '/generated/angus-primary.jpg'
      ],
      thumbnails: ['/generated/angus-primary.jpg']
    },
    funFacts: [
      'Angus beef is known for its superior marbling and tenderness',
      'They adapt well to various climates and management systems',
      'Angus cows are excellent mothers with strong maternal instincts',
      'The breed has been polled (hornless) for over 150 years'
    ],
    history: 'Developed in the counties of Aberdeenshire and Angus in Scotland during the 19th century. First imported to America in 1873 and quickly became popular for beef production.',
    breedingInfo: {
      gestationPeriod: 283,
      averageLitterSize: 1,
      breedingAge: 14
    },
    healthInfo: {
      commonIssues: ['Arthritis in older animals', 'Respiratory issues in dusty conditions'],
      vaccinations: ['Clostridial diseases', 'BVD', 'IBR'],
      geneticTraits: ['Marbling genes', 'Calving ease', 'Growth rate']
    },
    tags: ['beef', 'marbling', 'polled', 'maternal'],
    featured: true,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'jersey',
    name: 'Jersey',
    slug: 'jersey',
    description: 'Jersey cattle are small but mighty, producing milk with the highest butterfat content among dairy breeds. These charming, fawn-colored cattle from the Channel Islands are known for their efficiency and gentle nature.',
    shortDescription: 'Small dairy breed producing rich, high-butterfat milk.',
    origin: 'Jersey Island, Channel Islands',
    primaryPurpose: 'dairy',
    characteristics: {
      size: 'small',
      temperament: 'Gentle and docile',
      colors: ['Fawn', 'Light Brown', 'Dark Brown'],
      averageWeight: {
        male: 680,
        female: 450
      },
      milkProduction: 5500,
      lifespan: 22
    },
    physicalTraits: {
      height: {
        male: 137,
        female: 122
      },
      distinguishingFeatures: [
        'Small, refined build',
        'Dished face',
        'Large, expressive eyes',
        'Dark hooves and muzzle'
      ],
      coatPattern: 'Solid fawn to dark brown coloration'
    },
    careRequirements: {
      climate: ['Temperate', 'Mild'],
      diet: ['High-quality forage', 'Less grain than larger breeds'],
      spaceNeeds: '1.5 acres per cow for grazing',
      specialNeeds: ['Protection from extreme heat', 'Quality nutrition for milk production']
    },
    economicValue: {
      popularity: 7,
      marketDemand: 'medium',
      costToRaise: 'low'
    },
    images: {
      primary: '/generated/jersey-primary.jpg',
      gallery: [
        '/generated/jersey-primary.jpg',
        '/generated/jersey-primary.jpg',
        '/generated/jersey-primary.jpg'
      ],
      thumbnails: ['/generated/jersey-primary.jpg']
    },
    funFacts: [
      'Jersey milk has 18% more protein and 20% more calcium than average milk',
      'They are the most heat-tolerant of the dairy breeds',
      'Jerseys have been purebred for over 600 years',
      'They produce more milk per pound of body weight than any other breed'
    ],
    history: 'Developed on the Island of Jersey in the English Channel. The breed was kept pure for centuries with strict importation laws. First brought to America in the 1850s.',
    breedingInfo: {
      gestationPeriod: 279,
      averageLitterSize: 1,
      breedingAge: 13
    },
    healthInfo: {
      commonIssues: ['Heat stress susceptibility', 'Milk fever'],
      vaccinations: ['Standard dairy vaccinations', 'BVD', 'IBR'],
      geneticTraits: ['High butterfat genes', 'Longevity', 'Heat tolerance']
    },
    tags: ['dairy', 'high-butterfat', 'small', 'efficient'],
    featured: true,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'hereford',
    name: 'Hereford',
    slug: 'hereford',
    description: 'Hereford cattle are easily recognized by their distinctive red bodies with white faces. These hardy beef cattle from England are known for their docile temperament, excellent foraging ability, and adaptability to various climates.',
    shortDescription: 'Hardy beef breed with distinctive red body and white face.',
    origin: 'England',
    primaryPurpose: 'beef',
    characteristics: {
      size: 'medium',
      temperament: 'Docile and calm',
      colors: ['Red with White Face'],
      averageWeight: {
        male: 800,
        female: 600
      },
      lifespan: 18
    },
    physicalTraits: {
      height: {
        male: 145,
        female: 137
      },
      distinguishingFeatures: [
        'White face with red body',
        'White markings on legs and underline',
        'Horned (some polled varieties exist)',
        'Muscular, well-balanced build'
      ],
      coatPattern: 'Red body with distinctive white facial markings'
    },
    careRequirements: {
      climate: ['Temperate', 'Semi-arid', 'Variable'],
      diet: ['Grass-based', 'Browse', 'Supplemental feed as needed'],
      spaceNeeds: '2-3 acres per cow for grazing',
      specialNeeds: ['Good fencing', 'Shade in hot climates', 'Mineral supplements']
    },
    economicValue: {
      popularity: 8,
      marketDemand: 'high',
      costToRaise: 'low'
    },
    images: {
      primary: '/images/breeds/hereford-primary.jpg',
      gallery: [
        '/images/breeds/hereford-1.jpg',
        '/images/breeds/hereford-2.jpg',
        '/images/breeds/hereford-3.jpg'
      ],
      thumbnails: ['/images/breeds/hereford-thumb.jpg']
    },
    funFacts: [
      'Herefords are known as "white faces" in the cattle industry',
      'They were the first English cattle imported to America',
      'Herefords can thrive on marginal pastures where other breeds struggle',
      'They have excellent foraging instincts and rarely overgraze'
    ],
    history: 'Developed in Herefordshire, England in the 1700s by Benjamin Tomkins. First imported to America in 1817 and became popular for their hardiness and beef quality.',
    breedingInfo: {
      gestationPeriod: 285,
      averageLitterSize: 1,
      breedingAge: 15
    },
    healthInfo: {
      commonIssues: ['Eye problems due to lack of pigment around eyes', 'Sunburn susceptibility'],
      vaccinations: ['Standard beef vaccinations', 'Pinkeye prevention'],
      geneticTraits: ['Hardiness', 'Foraging ability', 'Calving ease']
    },
    tags: ['beef', 'hardy', 'white-face', 'foraging'],
    featured: true,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'simmental',
    name: 'Simmental',
    slug: 'simmental',
    description: 'Simmental cattle are large, powerful dual-purpose animals originally from Switzerland. Known for their golden-red color with white markings, they excel in both milk and beef production, making them valuable for diverse farming operations.',
    shortDescription: 'Large dual-purpose breed excelling in both milk and beef production.',
    origin: 'Switzerland',
    primaryPurpose: 'dual-purpose',
    characteristics: {
      size: 'large',
      temperament: 'Alert but generally docile',
      colors: ['Golden Red with White'],
      averageWeight: {
        male: 1150,
        female: 700
      },
      milkProduction: 6500,
      lifespan: 20
    },
    physicalTraits: {
      height: {
        male: 150,
        female: 140
      },
      distinguishingFeatures: [
        'Golden-red coat with white markings',
        'Large, muscular frame',
        'White head and legs',
        'Strong bone structure'
      ],
      coatPattern: 'Golden-red body with white head, legs, and belly'
    },
    careRequirements: {
      climate: ['Temperate', 'Mountain', 'Variable'],
      diet: ['High-quality forage', 'Grain supplements', 'Mineral supplements'],
      spaceNeeds: '2-3 acres per cow for grazing',
      specialNeeds: ['Adequate nutrition for dual-purpose production', 'Proper housing']
    },
    economicValue: {
      popularity: 7,
      marketDemand: 'medium',
      costToRaise: 'medium'
    },
    images: {
      primary: '/images/breeds/simmental-primary.jpg',
      gallery: [
        '/images/breeds/simmental-1.jpg',
        '/images/breeds/simmental-2.jpg',
        '/images/breeds/simmental-3.jpg'
      ],
      thumbnails: ['/images/breeds/simmental-thumb.jpg']
    },
    funFacts: [
      'Simmentals are one of the oldest and most widely distributed cattle breeds',
      'They originated in the Simme Valley of Switzerland',
      'Bulls can weigh up to 2,500 pounds',
      'They are excellent mothers with strong maternal instincts'
    ],
    history: 'Developed in the Simme Valley of the Bernese Oberland in Switzerland. The breed has been documented since the Middle Ages and was first imported to America in 1971.',
    breedingInfo: {
      gestationPeriod: 290,
      averageLitterSize: 1,
      breedingAge: 16
    },
    healthInfo: {
      commonIssues: ['Large birth weights may cause calving difficulties', 'Heat stress in hot climates'],
      vaccinations: ['Standard cattle vaccinations', 'BVD', 'IBR'],
      geneticTraits: ['Large frame size', 'Dual-purpose production', 'Longevity']
    },
    tags: ['dual-purpose', 'large', 'golden-red', 'versatile'],
    featured: false,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'charolais',
    name: 'Charolais',
    slug: 'charolais',
    description: 'Charolais cattle are large, muscular beef cattle with distinctive white or cream coloration. Originating from France, these cattle are prized for their excellent growth rates, lean meat production, and ability to pass on their superior genetics.',
    shortDescription: 'Large French beef breed known for lean meat and excellent growth rates.',
    origin: 'France',
    primaryPurpose: 'beef',
    characteristics: {
      size: 'large',
      temperament: 'Active and alert',
      colors: ['White', 'Cream'],
      averageWeight: {
        male: 1100,
        female: 800
      },
      lifespan: 18
    },
    physicalTraits: {
      height: {
        male: 150,
        female: 140
      },
      distinguishingFeatures: [
        'White to cream coloration',
        'Large, muscular frame',
        'Pink muzzle',
        'Well-developed hindquarters'
      ],
      coatPattern: 'Solid white to cream coloration'
    },
    careRequirements: {
      climate: ['Temperate', 'Continental'],
      diet: ['High-quality forage', 'Grain supplements for optimal growth'],
      spaceNeeds: '2-3 acres per cow for grazing',
      specialNeeds: ['Adequate nutrition for rapid growth', 'Shelter from intense sun']
    },
    economicValue: {
      popularity: 6,
      marketDemand: 'medium',
      costToRaise: 'medium'
    },
    images: {
      primary: '/images/breeds/charolais-primary.jpg',
      gallery: [
        '/images/breeds/charolais-1.jpg',
        '/images/breeds/charolais-2.jpg',
        '/images/breeds/charolais-3.jpg'
      ],
      thumbnails: ['/images/breeds/charolais-thumb.jpg']
    },
    funFacts: [
      'Charolais cattle have one of the highest growth rates among beef breeds',
      'They produce very lean meat with minimal fat marbling',
      'The breed is excellent for crossbreeding programs',
      'Charolais bulls are often used to increase size in other breeds'
    ],
    history: 'Developed in the Charolais region of France during the 16th and 17th centuries. First imported to America in 1936 and gained popularity for crossbreeding programs.',
    breedingInfo: {
      gestationPeriod: 291,
      averageLitterSize: 1,
      breedingAge: 16
    },
    healthInfo: {
      commonIssues: ['Calving difficulties due to large birth weights', 'Sunburn susceptibility'],
      vaccinations: ['Standard beef vaccinations', 'Respiratory vaccines'],
      geneticTraits: ['Rapid growth', 'Muscling', 'Size']
    },
    tags: ['beef', 'large', 'lean-meat', 'growth'],
    featured: false,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];

export const getBreedById = (id: string): CowBreed | undefined => {
  return cowBreeds.find(breed => breed.id === id);
};

export const getBreedBySlug = (slug: string): CowBreed | undefined => {
  return cowBreeds.find(breed => breed.slug === slug);
};

export const getFeaturedBreeds = (): CowBreed[] => {
  return cowBreeds.filter(breed => breed.featured);
};

export const getBreedsByPurpose = (purpose: CowBreed['primaryPurpose']): CowBreed[] => {
  return cowBreeds.filter(breed => breed.primaryPurpose === purpose);
};

export const getBreedsBySize = (size: CowBreed['characteristics']['size']): CowBreed[] => {
  return cowBreeds.filter(breed => breed.characteristics.size === size);
};

export const searchBreeds = (query: string): CowBreed[] => {
  const lowercaseQuery = query.toLowerCase();
  return cowBreeds.filter(breed =>
    breed.name.toLowerCase().includes(lowercaseQuery) ||
    breed.description.toLowerCase().includes(lowercaseQuery) ||
    breed.origin.toLowerCase().includes(lowercaseQuery) ||
    breed.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};