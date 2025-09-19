import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/layout/Layout';
import {
  Globe,
  Heart,
  Crown,
  Sparkles,
  BookOpen,
  Users,
  Star,
  Calendar
} from 'lucide-react';

const culturalTraditions = [
  {
    culture: 'Hindu Tradition',
    region: 'India & Nepal',
    significance: 'Sacred Animals',
    description: 'In Hinduism, cows are considered sacred and represent gentleness, generosity, and motherhood. They are associated with several deities and are protected by law in many Indian states.',
    icon: '🕉️',
    practices: ['Gau Puja (cow worship)', 'Protection laws', 'Temple ceremonies', 'Festival celebrations'],
    symbolism: ['Non-violence', 'Maternal care', 'Abundance', 'Purity']
  },
  {
    culture: 'Celtic Tradition',
    region: 'Ireland & Scotland',
    significance: 'Wealth & Status',
    description: 'In ancient Celtic cultures, cattle were the primary measure of wealth and status. The Irish word "cattle" even shares roots with "capital," highlighting their economic importance.',
    icon: '🍀',
    practices: ['Cattle raids', 'Dowry payments', 'Seasonal festivals', 'Bardic tales'],
    symbolism: ['Prosperity', 'Power', 'Fertility', 'Abundance']
  },
  {
    culture: 'Ancient Egyptian',
    region: 'Egypt & Nubia',
    significance: 'Divine Associations',
    description: 'Cattle were associated with several Egyptian deities, including Hathor (cow goddess) and Apis (sacred bull). They symbolized fertility, motherhood, and rebirth.',
    icon: '𓃒',
    practices: ['Temple sacrifices', 'Mummification', 'Royal ceremonies', 'Agricultural festivals'],
    symbolism: ['Divinity', 'Rebirth', 'Motherhood', 'Strength']
  },
  {
    culture: 'Native American',
    region: 'Great Plains',
    significance: 'Buffalo Sacred Bond',
    description: 'Plains tribes developed deep spiritual connections with buffalo (American bison), viewing them as sacred providers of life, sustenance, and spiritual power.',
    icon: '🦬',
    practices: ['Buffalo ceremonies', 'Sacred hunts', 'Vision quests', 'Seasonal rituals'],
    symbolism: ['Life force', 'Gratitude', 'Sustainability', 'Spiritual power']
  },
  {
    culture: 'Maasai Tradition',
    region: 'East Africa',
    significance: 'Life & Identity',
    description: 'The Maasai people of Kenya and Tanzania center their entire culture around cattle, believing that God gave them all the cattle in the world as a sacred gift.',
    icon: '🐄',
    practices: ['Cattle ceremonies', 'Age-set initiations', 'Marriage customs', 'Seasonal migrations'],
    symbolism: ['Divine gift', 'Cultural identity', 'Social status', 'Spiritual connection']
  },
  {
    culture: 'Norse Tradition',
    region: 'Scandinavia',
    significance: 'Mythological Importance',
    description: 'In Norse mythology, the primordial cow Auðumbla nourished the first giant and licked the first god from ice, playing a crucial role in creation myths.',
    icon: '⚡',
    practices: ['Seasonal blóts', 'Creation stories', 'Runic associations', 'Agricultural rites'],
    symbolism: ['Creation', 'Nourishment', 'Primordial power', 'Life force']
  }
];

const modernSignificance = [
  {
    title: 'Agricultural Heritage',
    description: 'Cattle continue to play vital roles in sustainable farming systems worldwide, representing thousands of years of agricultural evolution.',
    icon: '🌾'
  },
  {
    title: 'Cultural Festivals',
    description: 'Many cultures celebrate cattle through festivals, fairs, and traditional events that honor their contribution to human civilization.',
    icon: '🎪'
  },
  {
    title: 'Art & Literature',
    description: 'Cattle appear in countless works of art, literature, and folklore, symbolizing pastoral life, abundance, and the human connection to nature.',
    icon: '🎨'
  },
  {
    title: 'Sustainable Practices',
    description: 'Modern movements toward sustainable and regenerative agriculture draw inspiration from traditional cattle-centered farming systems.',
    icon: '♻️'
  }
];

const culturalFacts = [
  'The word "cattle" comes from the Old French "chatel," meaning property or wealth.',
  'Over 40 countries have laws protecting cattle due to cultural or religious significance.',
  'Cattle appear in creation myths and religious texts from over 30 different cultures.',
  'The constellation Taurus (the Bull) has been recognized for over 4,000 years.',
  'In many African cultures, a person\'s wealth is still measured by their cattle holdings.',
  'The ancient Greeks considered cattle so valuable that fines were paid in cattle units.'
];

export default function CulturePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cultural Significance of Cattle
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Explore how cattle have shaped human civilization, spirituality, and culture
              across different societies throughout history and into the present day.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Global Traditions</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Ancient to Modern</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Sacred Bonds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">A Universal Connection</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              For over 10,000 years, cattle have been more than just livestock to human societies.
              They have been symbols of wealth, objects of worship, sources of sustenance, and
              integral parts of cultural identity across virtually every civilization on Earth.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Traditions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Traditions Around the World</h2>
            <p className="text-xl text-muted-foreground">
              Discover how different cultures have honored and integrated cattle into their way of life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {culturalTraditions.map((tradition, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{tradition.icon}</span>
                      <div>
                        <CardTitle className="text-xl">{tradition.culture}</CardTitle>
                        <p className="text-muted-foreground">{tradition.region}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="shrink-0">
                      {tradition.significance}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {tradition.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Cultural Practices
                      </h4>
                      <ul className="space-y-2">
                        {tradition.practices.map((practice, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {practice}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Star className="h-4 w-4 mr-2" />
                        Symbolic Meaning
                      </h4>
                      <ul className="space-y-2">
                        {tradition.symbolism.map((symbol, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {symbol}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Significance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Modern Cultural Impact</h2>
            <p className="text-xl text-muted-foreground">
              How cattle continue to influence contemporary culture and society
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modernSignificance.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Facts */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Cultural Facts</h2>
              <p className="text-xl opacity-90">
                Fascinating insights into the cultural importance of cattle
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {culturalFacts.map((fact, index) => (
                <Card key={index} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <p className="text-primary-foreground/90 leading-relaxed">
                        {fact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline of Cultural Evolution */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cultural Evolution Timeline</h2>
            <p className="text-xl text-muted-foreground">
              The changing role of cattle in human culture through the ages
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  period: '8000 BCE',
                  title: 'Domestication Begins',
                  description: 'First domestication of aurochs in the Fertile Crescent marks the beginning of cattle\'s cultural journey with humans.'
                },
                {
                  period: '3000 BCE',
                  title: 'Religious Significance',
                  description: 'Cattle become central to religious practices in Egypt, India, and Mesopotamia, symbolizing fertility and divine power.'
                },
                {
                  period: '500 CE',
                  title: 'Medieval Agriculture',
                  description: 'Cattle become essential to feudal systems, representing wealth and enabling agricultural expansion across Europe.'
                },
                {
                  period: '1500 CE',
                  title: 'Global Spread',
                  description: 'European colonization spreads cattle breeds worldwide, introducing new cultural practices and agricultural systems.'
                },
                {
                  period: '1800s',
                  title: 'Industrial Revolution',
                  description: 'Mechanization changes cattle farming, but cultural significance persists in rural communities and traditions.'
                },
                {
                  period: 'Present',
                  title: 'Cultural Renaissance',
                  description: 'Renewed appreciation for traditional cattle cultures and sustainable practices in modern agricultural movements.'
                }
              ].map((era, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <Badge variant="outline" className="text-xs">
                      {era.period}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{era.title}</h3>
                        <p className="text-muted-foreground">{era.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Explore More Cultural Connections</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Dive deeper into the fascinating relationship between cattle and human culture
              through our comprehensive educational resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="text-center pt-6">
                  <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Educational Facts</h3>
                  <p className="text-sm text-muted-foreground">Learn more cultural facts</p>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="text-center pt-6">
                  <Crown className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Breed Heritage</h3>
                  <p className="text-sm text-muted-foreground">Discover breed origins</p>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="text-center pt-6">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Modern Impact</h3>
                  <p className="text-sm text-muted-foreground">Contemporary significance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}