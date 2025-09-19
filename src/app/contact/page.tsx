'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Layout } from '@/components/layout/Layout';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Users,
  BookOpen,
  Lightbulb,
  Heart
} from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  category: string;
  message: string;
  urgent: boolean;
  subscribe: boolean;
}

const categories = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'education', label: 'Educational Partnership' },
  { value: 'research', label: 'Research Collaboration' },
  { value: 'media', label: 'Media & Press' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'feedback', label: 'Feedback & Suggestions' }
];

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@cowherd.edu',
    description: 'Send us a message and we\'ll respond within 24 hours',
    action: 'mailto:info@cowherd.edu'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    description: 'Speak directly with our team Monday-Friday, 9AM-5PM EST',
    action: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Agricultural Education Center',
    description: '123 Farm Road, College Station, TX 77843',
    action: 'https://maps.google.com/?q=College+Station+TX'
  }
];

const faqs = [
  {
    question: 'How can I use your educational materials in my classroom?',
    answer: 'All our educational materials are freely available for non-commercial educational use. Simply browse our resources and incorporate them into your lessons. For bulk downloads or custom materials, please contact us.'
  },
  {
    question: 'Do you offer professional development for educators?',
    answer: 'Yes! We offer workshops, webinars, and certification programs for educators. Contact us to learn about upcoming opportunities and custom training sessions.'
  },
  {
    question: 'Can I contribute content or expertise to your platform?',
    answer: 'Absolutely! We welcome contributions from experts, educators, and experienced farmers. Please reach out through our collaboration inquiry form.'
  },
  {
    question: 'How can my organization partner with COWHERD?',
    answer: 'We offer various partnership opportunities including educational sponsorships, research collaborations, and content partnerships. Contact us to discuss how we can work together.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    organization: '',
    subject: '',
    category: '',
    message: '',
    urgent: false,
    subscribe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        category: '',
        message: '',
        urgent: false,
        subscribe: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Have questions about our resources? Want to collaborate?
              We'd love to hear from you and help advance agricultural education together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => window.open(method.action, '_blank')}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-lg font-medium text-primary mb-2">{method.value}</p>
                    <p className="text-muted-foreground text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <p className="text-green-800 font-medium">Message sent successfully!</p>
                        <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                      <div>
                        <p className="text-red-800 font-medium">Failed to send message</p>
                        <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization/Institution</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder="School, University, Farm, Organization (optional)"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Inquiry Type *</Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat.value} value={cat.value}>
                                {cat.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          placeholder="Brief subject of your inquiry"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please provide details about your inquiry, questions, or how we can help you..."
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="urgent"
                          checked={formData.urgent}
                          onCheckedChange={(checked) => handleInputChange('urgent', !!checked)}
                        />
                        <Label htmlFor="urgent" className="text-sm">
                          This is an urgent inquiry
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="subscribe"
                          checked={formData.subscribe}
                          onCheckedChange={(checked) => handleInputChange('subscribe', !!checked)}
                        />
                        <Label htmlFor="subscribe" className="text-sm">
                          Subscribe to our newsletter for updates and new educational resources
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Monday - Friday</span>
                      <span className="text-sm font-medium">9:00 AM - 5:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Saturday</span>
                      <span className="text-sm font-medium">10:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Sunday</span>
                      <span className="text-sm font-medium">Closed</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Emergency inquiries will be addressed as soon as possible.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="/breeds">
                        <Users className="mr-2 h-4 w-4" />
                        Browse Breed Database
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="/facts">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Educational Facts
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="/about">
                        <Lightbulb className="mr-2 h-4 w-4" />
                        About Our Mission
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="/gallery">
                        <Heart className="mr-2 h-4 w-4" />
                        Photo Gallery
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card>
                <CardHeader>
                  <CardTitle>Response Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>General inquiries</span>
                      <span className="font-medium">24-48 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Educational partnerships</span>
                      <span className="font-medium">2-3 business days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Technical support</span>
                      <span className="font-medium">1 business day</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Urgent requests</span>
                      <span className="font-medium">Same day</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of agricultural education
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Agricultural Education Center</h3>
                  <p className="text-muted-foreground">123 Farm Road, College Station, TX 77843</p>
                  <Button className="mt-4" asChild>
                    <a href="https://maps.google.com/?q=College+Station+TX" target="_blank" rel="noopener noreferrer">
                      View on Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}