import { Link } from 'react-router';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { NAV_LINKS } from '@/constants';

const POPULAR_ACTIVITIES = [
  { label: 'Desert Safari', href: '/activities' },
  { label: 'Cooking Classes', href: '/activities' },
  { label: 'Medina Tours', href: '/activities' },
  { label: 'Spa & Hammam', href: '/activities' },
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="bg-[#3D4A2B] text-white py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/">
              <h3 className="text-[#C9A961] mb-3 text-lg font-semibold">Riad Marrakech</h3>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Your gateway to authentic Moroccan hospitality and unforgettable experiences in the heart of Marrakech.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C9A961] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-[#C9A961] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Popular Experiences</h4>
            <ul className="space-y-2.5">
              {POPULAR_ACTIVITIES.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-white/60 hover:text-[#C9A961] transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-[#C9A961]" />
                <span>Derb el Hammam, Medina, Marrakech 40000, Morocco</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-[#C9A961]" />
                <a href="tel:+212524123456" className="text-white/70 hover:text-[#C9A961] transition-colors text-sm">
                  +212 524 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-[#C9A961]" />
                <a href="mailto:info@riadmarrakech.com" className="text-white/70 hover:text-[#C9A961] transition-colors text-sm">
                  info@riadmarrakech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Riad Marrakech. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/about" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white/80 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
