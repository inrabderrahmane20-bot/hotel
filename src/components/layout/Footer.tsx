import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { NAV_LINKS } from '@/constants';

const POPULAR_ACTIVITIES = [
  { label: 'Desert Safari', href: '#activities' },
  { label: 'Cooking Classes', href: '#activities' },
  { label: 'Medina Tours', href: '#activities' },
  { label: 'Spa & Hammam', href: '#activities' },
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="bg-[#3D4A2B] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-[#C9A961] mb-4">Riad Marrakech</h3>
            <p className="text-white/80 mb-4">
              Your gateway to authentic Moroccan hospitality and unforgettable experiences in the
              heart of Marrakech.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/70 hover:text-[#C9A961] transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#C9A961] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Popular Activities</h4>
            <ul className="space-y-3">
              {POPULAR_ACTIVITIES.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white/70 hover:text-[#C9A961] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80">
                <MapPin size={20} className="flex-shrink-0 mt-0.5 text-[#C9A961]" />
                <span>Derb el Hammam, Medina, Marrakech 40000, Morocco</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-[#C9A961]" />
                <a href="tel:+212524123456" className="text-white/80 hover:text-[#C9A961] transition-colors">
                  +212 524 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-[#C9A961]" />
                <a href="mailto:info@riadmarrakech.com" className="text-white/80 hover:text-[#C9A961] transition-colors">
                  info@riadmarrakech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} Riad Marrakech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
