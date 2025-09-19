import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  explore: [
    { name: 'Breeds Database', href: '/breeds' },
    { name: 'Educational Facts', href: '/facts' },
    { name: 'Image Gallery', href: '/gallery' },
    { name: 'Cultural Significance', href: '/culture' }
  ],
  resources: [
    { name: 'Care Guide', href: '/care' },
    { name: 'Products', href: '/products' },
    { name: 'Research', href: '/research' },
    { name: 'FAQ', href: '/faq' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ]
};

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    // TODO: Implement newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-lg">🐄</span>
              </div>
              <span className="text-xl font-bold tracking-tight">COWHERD</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed">
              Your comprehensive resource for everything about cattle breeds,
              farming practices, and the cultural significance of these magnificent animals.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4 text-primary-foreground">EXPLORE</h3>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 text-primary-foreground">RESOURCES</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 text-primary-foreground">COMPANY</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold mb-4 text-primary-foreground">STAY UPDATED</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Get the latest updates on breeds, facts, and farming insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="bg-primary-foreground text-primary border-0"
              />
              <Button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-primary-foreground/60" />
              <span className="text-primary-foreground/80">info@cowherd.edu</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-primary-foreground/60" />
              <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-4 w-4 text-primary-foreground/60" />
              <span className="text-primary-foreground/80">Agricultural Education Center</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-primary-foreground/60">
            © 2024 COWHERD. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}