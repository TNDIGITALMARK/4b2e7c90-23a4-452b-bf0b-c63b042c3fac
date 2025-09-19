import { CowFact } from '@/types';

export const cowFacts: CowFact[] = [
  {
    id: 'cow-memory',
    title: 'Cows Have Excellent Memories',
    content: 'Cows have remarkable memories and can remember faces, both human and bovine, for years. They can recognize up to 70 individual faces and form complex social hierarchies based on these relationships. This memory extends to remembering feeding locations, water sources, and even dangerous situations to avoid.',
    category: 'behavior',
    icon: '🧠',
    difficulty: 'beginner',
    ageGroup: 'all',
    readTime: 2,
    sources: [
      'Applied Animal Behaviour Science Journal',
      'Cambridge University Animal Cognition Research'
    ],
    images: ['/images/facts/cow-memory.jpg'],
    tags: ['memory', 'behavior', 'cognition', 'social'],
    featured: true,
    createdAt: new Date('2023-01-01')
  },
  {
    id: 'cow-digestion',
    title: 'Cows Are Ruminants with Four Stomach Chambers',
    content: 'Cows have a unique digestive system with four stomach chambers: the rumen, reticulum, omasum, and abomasum. The rumen, the largest chamber, can hold 40-50 gallons and houses billions of microorganisms that help break down cellulose from grass. This complex system allows cows to extract nutrients from plant material that other animals cannot digest.',
    category: 'anatomy',
    icon: '🫀',
    difficulty: 'intermediate',
    ageGroup: 'teens',
    readTime: 3,
    sources: [
      'Journal of Dairy Science',
      'Veterinary Medicine Research'
    ],
    images: ['/images/facts/cow-digestion.jpg'],
    tags: ['anatomy', 'digestion', 'ruminant', 'stomach'],
    featured: true,
    createdAt: new Date('2023-01-01')
  },
  {
    id: 'milk-production',
    title: 'Modern Dairy Cows Produce 6-7 Times More Milk Than 100 Years Ago',
    content: 'Through selective breeding, improved nutrition, and better management practices, modern dairy cows produce significantly more milk than their ancestors. In 1924, the average dairy cow produced about 4,500 pounds of milk per year. Today, the average is over 23,000 pounds annually, with top-producing cows exceeding 30,000 pounds.',
    category: 'nutrition',
    icon: '🥛',
    difficulty: 'beginner',
    ageGroup: 'all',
    readTime: 2,
    sources: [
      'USDA Agricultural Statistics',
      'National Dairy Association'
    ],
    images: ['/images/facts/milk-production.jpg'],
    tags: ['milk', 'production', 'breeding', 'history'],
    featured: true,
    createdAt: new Date('2023-01-01')
  },
  {
    id: 'cow-vision',
    title: 'Cows See the World Differently Than Humans',
    content: 'Cows have panoramic vision with a 340-degree field of view but have poor depth perception. They see colors differently too - they can see blues and greens well but have difficulty distinguishing reds and pinks. Their eyes are positioned on the sides of their heads, giving them excellent peripheral vision to watch for predators, but they have a blind spot directly behind them.',
    category: 'anatomy',
    icon: '👁️',
    difficulty: 'intermediate',
    ageGroup: 'teens',
    readTime: 3,
    sources: [
      'Animal Vision Research',
      'Veterinary Ophthalmology Journal'
    ],
    images: ['/images/facts/cow-vision.jpg'],
    tags: ['vision', 'anatomy', 'senses', 'perception'],
    featured: false,
    createdAt: new Date('2023-01-01')
  },
  {
    id: 'cow-communication',
    title: 'Cows Communicate Through Multiple Vocalizations',
    content: 'Cows have a complex communication system using different moos, each with distinct meanings. Mothers and calves recognize each other\'s unique calls, even in large herds. Research has identified distinct vocalizations for hunger, distress, contentment, and social interaction. Cows also communicate through body language, including ear position, tail movement, and posture.',
    category: 'behavior',
    icon: '🗣️',
    difficulty: 'beginner',
    ageGroup: 'all',
    readTime: 2,
    sources: [
      'Animal Communication Research',
      'Journal of Applied Animal Welfare Science'
    ],
    images: ['/images/facts/cow-communication.jpg'],
    tags: ['communication', 'behavior', 'vocalization', 'social'],
    featured: true,
    createdAt: new Date('2023-01-01')
  },
  {
    id: 'cow-environmental-impact',
    title: 'Cattle Farming Has Both Positive and Negative Environmental Effects',
    content: 'While cattle are often criticized for methane emissions, well-managed grazing can actually benefit ecosystems. Rotational grazing helps improve soil health, increases carbon sequestration, and maintains grassland biodiversity. However, overgrazing and intensive farming methods can lead to soil erosion and water pollution. Sustainable practices are key to minimizing negative impacts.',
    category: 'environment',
    icon: '🌍',
    difficulty: 'advanced',
    ageGroup: 'adults',
    readTime: 4,
    sources: [
      'Environmental Science Research',
      'Sustainable Agriculture Journal'
    ],
    images: ['/images/facts/cow-environment.jpg'],
    tags: ['environment', 'sustainability', 'grazing', 'climate'],
    featured: true,
    createdAt: new Date('2023-01-01')
  },
  {
    id: 'cow-sleep',
    title: 'Cows Sleep Standing Up and Lying Down',
    content: 'Cows can doze while standing up, but they need to lie down to achieve deep REM sleep. They sleep about 4 hours per day in short intervals, typically lying down for REM sleep cycles that last 1-4 minutes. Unlike horses, cows must lie down to get quality rest, and they prefer soft, dry bedding for comfort.',
    category: 'behavior',
    icon: '😴',
    difficulty: 'beginner',
    ageGroup: 'children',
    readTime: 2,
    sources: [
      'Animal Sleep Research',
      'Farm Animal Welfare Studies'
    ],
    images: ['/images/facts/cow-sleep.jpg'],
    tags: ['sleep', 'behavior', 'welfare', 'rest'],
    featured: false,
    createdAt: new Date('2023-01-01')
  },
  {
    id: 'sacred-cows',
    title: 'Cows Are Sacred in Many Cultures',
    content: 'In Hinduism, cows are considered sacred and represent gentleness, generosity, and motherhood. This reverence stems from the cow\'s role in providing milk, which is seen as nurturing life. Many other cultures throughout history have also held cattle in high regard, including ancient Egyptian, Celtic, and Native American traditions, often associating them with fertility, abundance, and divine feminine energy.',
    category: 'culture',
    icon: '🕉️',
    difficulty: 'intermediate',
    ageGroup: 'teens',
    readTime: 3,
    sources: [
      'Cultural Anthropology Research',
      'Religious Studies Quarterly'
    ],
    images: ['/images/facts/sacred-cows.jpg'],
    tags: ['culture', 'religion', 'sacred', 'tradition'],
    featured: true,
    createdAt: new Date('2023-01-01')
  },
  {
    id: 'cow-temperature',
    title: 'Cows Maintain Body Temperature Through Multiple Mechanisms',
    content: 'Cows maintain an internal body temperature of about 101.5°F (38.6°C). They regulate temperature through panting, sweating through their nose (not skin), seeking shade, and changing their posture. In cold weather, they grow thicker coats and may huddle together. Their large body mass helps them retain heat efficiently.',
    category: 'anatomy',
    icon: '🌡️',
    difficulty: 'intermediate',
    ageGroup: 'teens',
    readTime: 3,
    sources: [
      'Veterinary Physiology Journal',
      'Animal Thermoregulation Studies'
    ],
    images: ['/images/facts/cow-temperature.jpg'],
    tags: ['physiology', 'temperature', 'anatomy', 'adaptation'],
    featured: false,
    createdAt: new Date('2023-01-01')
  },
  {
    id: 'cow-history',
    title: 'Cattle Domestication Changed Human Civilization',
    content: 'Cattle were first domesticated around 10,000 years ago in the Fertile Crescent. This domestication was pivotal in the development of agriculture and permanent settlements. Cattle provided not only meat and milk but also labor for plowing fields, transportation, and materials like leather and horn. The wealth of cattle often determined social status in ancient civilizations.',
    category: 'history',
    icon: '🏛️',
    difficulty: 'advanced',
    ageGroup: 'adults',
    readTime: 4,
    sources: [
      'Archaeological Journal',
      'History of Agriculture Research'
    ],
    images: ['/images/facts/cow-history.jpg'],
    tags: ['history', 'domestication', 'civilization', 'agriculture'],
    featured: true,
    createdAt: new Date('2023-01-01')
  },
  {
    id: 'cow-social-structure',
    title: 'Cows Live in Complex Social Hierarchies',
    content: 'Cattle form sophisticated social structures with dominant and subordinate relationships. They establish pecking orders through gentle head-to-head contact rather than aggressive fighting. These hierarchies determine access to food, water, and preferred resting spots. Cows also form friendship bonds and can become stressed when separated from their preferred companions.',
    category: 'behavior',
    icon: '👥',
    difficulty: 'intermediate',
    ageGroup: 'teens',
    readTime: 3,
    sources: [
      'Animal Behavior Research',
      'Social Psychology in Animals'
    ],
    images: ['/images/facts/cow-social.jpg'],
    tags: ['social', 'behavior', 'hierarchy', 'relationships'],
    featured: false,
    createdAt: new Date('2023-01-01')
  },
  {
    id: 'cow-nutrition-needs',
    title: 'Cows Require Specific Nutritional Balance',
    content: 'A typical dairy cow needs about 30-50 gallons of water per day and consumes 40-50 pounds of feed. Their diet must include proper ratios of protein, carbohydrates, fats, vitamins, and minerals. The quality of nutrition directly affects milk production, reproduction, and overall health. Cows spend 6-8 hours daily eating and another 6-8 hours chewing cud.',
    category: 'nutrition',
    icon: '🌾',
    difficulty: 'intermediate',
    ageGroup: 'teens',
    readTime: 3,
    sources: [
      'Animal Nutrition Science',
      'Dairy Management Guidelines'
    ],
    images: ['/images/facts/cow-nutrition.jpg'],
    tags: ['nutrition', 'health', 'feeding', 'management'],
    featured: true,
    createdAt: new Date('2023-01-01')
  }
];

export const getFactById = (id: string): CowFact | undefined => {
  return cowFacts.find(fact => fact.id === id);
};

export const getFeaturedFacts = (): CowFact[] => {
  return cowFacts.filter(fact => fact.featured);
};

export const getFactsByCategory = (category: CowFact['category']): CowFact[] => {
  return cowFacts.filter(fact => fact.category === category);
};

export const getFactsByDifficulty = (difficulty: CowFact['difficulty']): CowFact[] => {
  return cowFacts.filter(fact => fact.difficulty === difficulty);
};

export const getFactsByAgeGroup = (ageGroup: CowFact['ageGroup']): CowFact[] => {
  return cowFacts.filter(fact => fact.ageGroup === ageGroup || fact.ageGroup === 'all');
};

export const searchFacts = (query: string): CowFact[] => {
  const lowercaseQuery = query.toLowerCase();
  return cowFacts.filter(fact =>
    fact.title.toLowerCase().includes(lowercaseQuery) ||
    fact.content.toLowerCase().includes(lowercaseQuery) ||
    fact.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getRandomFacts = (count: number): CowFact[] => {
  const shuffled = [...cowFacts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};