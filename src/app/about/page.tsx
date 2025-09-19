import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/layout/Layout';
import {
  BookOpen,
  Users,
  Award,
  Leaf,
  Heart,
  Globe,
  Target,
  Lightbulb,
  Mail,
  Twitter,
  Linkedin
} from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Lead Animal Scientist',
    bio: 'PhD in Animal Science from UC Davis. 15+ years researching cattle genetics and sustainable farming practices.',
    image: '/generated/team-sarah.jpg',
    expertise: ['Cattle Genetics', 'Sustainable Farming', 'Breed Development'],
    social: {
      twitter: '@dr_sarahjohnson',
      linkedin: '/in/sarah-johnson-animal-science'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Agricultural Education Director',
    bio: 'Masters in Agricultural Education. Former dairy farmer turned educator, passionate about connecting people with agriculture.',
    image: '/generated/team-michael.jpg',
    expertise: ['Agricultural Education', 'Dairy Farming', 'Youth Programs'],
    social: {
      twitter: '@mikechenagri',
      linkedin: '/in/michael-chen-education'
    }
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Cultural Anthropologist',
    bio: 'PhD in Cultural Anthropology specializing in human-animal relationships and agricultural traditions worldwide.',
    image: '/generated/team-emily.jpg',
    expertise: ['Cultural Studies', 'Agricultural History', 'Traditional Practices'],
    social: {
      twitter: '@dr_emily_rodriguez',
      linkedin: '/in/emily-rodriguez-anthropology'
    }
  },
  {
    name: 'James Thompson',
    role: 'Sustainability Coordinator',
    bio: 'Environmental Science background with focus on regenerative agriculture and carbon sequestration in grazing systems.',
    image: '/generated/team-james.jpg',
    expertise: ['Regenerative Agriculture', 'Environmental Impact', 'Carbon Sequestration'],
    social: {
      twitter: '@jamesthompsoneco',
      linkedin: '/in/james-thompson-sustainability'
    }
  }
];

const milestones = [
  {
    year: '2019',
    title: 'Foundation Established',
    description: 'COWHERD was founded by a group of agricultural educators and scientists committed to bridging the gap between farming and public education.'
  },
  {
    year: '2020',
    title: 'First Educational Programs',
    description: 'Launched our first educational programs for schools, reaching over 5,000 students in the inaugural year.'
  },
  {
    year: '2021',
    title: 'Digital Platform Launch',
    description: 'Launched our comprehensive digital platform making cattle education accessible worldwide.'
  },
  {
    year: '2022',
    title: 'Research Partnerships',
    description: 'Established partnerships with leading agricultural universities and research institutions globally.'
  },
  {
    year: '2023',
    title: 'Sustainability Initiative',
    description: 'Launched major initiative promoting sustainable and regenerative cattle farming practices.'
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanded programs internationally, now serving educational institutions across 15 countries.'
  }
];

const stats = [
  {
    number: '50,000+',
    label: 'Students Reached',
    icon: Users
  },
  {
    number: '150+',
    label: 'Educational Partners',
    icon: BookOpen
  },
  {
    number: '25+',
    label: 'Countries Served',
    icon: Globe
  },
  {
    number: '12',
    label: 'Research Publications',
    icon: Award
  }
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/generated/hero-cows-field.jpg')] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About COWHERD
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Bridging the gap between agriculture and education through
              comprehensive cattle knowledge and sustainable farming practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Our Mission
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To educate and inspire people about the vital role of cattle in agriculture,
                culture, and sustainable food systems while promoting ethical animal husbandry
                and environmental stewardship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Education</h3>
                  <p className="text-muted-foreground text-sm">
                    Providing comprehensive, accurate, and engaging educational resources for all ages and backgrounds.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Sustainability</h3>
                  <p className="text-muted-foreground text-sm">
                    Promoting sustainable and regenerative farming practices that benefit both animals and the environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Animal Welfare</h3>
                  <p className="text-muted-foreground text-sm">
                    Advocating for the highest standards of animal care, welfare, and ethical treatment.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-earth-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-earth-light-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Community</h3>
                  <p className="text-muted-foreground text-sm">
                    Building bridges between farmers, educators, students, and the general public.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground">
              Making a difference in agricultural education worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center p-6 bg-card border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to advance agricultural education
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-center">
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />

                    {/* Content */}
                    <Card className="md:ml-16 w-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <Badge variant="outline" className="w-fit mb-2 md:mb-0">
                            {milestone.year}
                          </Badge>
                          <div className="md:hidden w-3 h-3 bg-primary rounded-full" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Dedicated experts passionate about agricultural education and animal welfare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-6xl">👤</div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.expertise.slice(0, 2).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {member.expertise.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{member.expertise.length - 2}
                      </Badge>
                    )}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center border-0 shadow-lg">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Accuracy</h3>
                  <p className="text-muted-foreground">
                    We ensure all our educational content is scientifically accurate,
                    up-to-date, and thoroughly researched.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center border-0 shadow-lg">
                <CardContent className="pt-6">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously innovate our teaching methods and technologies
                    to make learning more engaging and effective.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center border-0 shadow-lg">
                <CardContent className="pt-6">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Compassion</h3>
                  <p className="text-muted-foreground">
                    We promote compassionate treatment of animals and respect
                    for the farmers who care for them.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're an educator, farmer, student, or simply curious about agriculture,
              we invite you to be part of our educational community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg">
                <Link href="/contact">Get Involved</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg">
                <Link href="/breeds">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}