import { useState } from 'react';
import { NavLink, Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import { BookingModal } from '@/components/shared/BookingModal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors text-sm font-medium ${isActive ? 'text-[#7C8A5D]' : 'text-foreground/70 hover:text-[#7C8A5D]'}`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-3 rounded-lg transition-colors text-sm font-medium ${
      isActive ? 'text-[#7C8A5D] bg-[#7C8A5D]/5' : 'text-foreground/70 hover:text-[#7C8A5D] hover:bg-[#7C8A5D]/5'
    }`;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex-shrink-0">
              <span className="text-[#7C8A5D] text-lg font-semibold tracking-wide">Riad Marrakech</span>
            </Link>

            <div className="hidden md:flex items-center space-x-7">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.name} to={link.href} end={link.href === '/'} className={linkClass}>
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="hidden md:block">
              <button
                onClick={() => setBookingOpen(true)}
                className="bg-[#7C8A5D] text-white px-5 py-2 rounded-lg hover:bg-[#5A6842] transition-colors shadow-md text-sm font-medium"
              >
                Book Now
              </button>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-[#7C8A5D]/5 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-white px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === '/'}
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-border mt-3">
              <button
                onClick={() => { setIsOpen(false); setBookingOpen(true); }}
                className="w-full bg-[#7C8A5D] text-white px-6 py-2.5 rounded-lg hover:bg-[#5A6842] transition-colors text-sm font-medium"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
