import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import { BookingModal } from '@/components/shared/BookingModal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#home">
                <h2 className="text-[#7C8A5D]">Riad Marrakech</h2>
              </a>
            </div>

            <div className="hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-[#7C8A5D] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <button
                onClick={() => setBookingOpen(true)}
                className="bg-[#7C8A5D] text-white px-6 py-2 rounded-lg hover:bg-[#5A6842] transition-colors shadow-md"
              >
                Book Now
              </button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-foreground/80 hover:text-[#7C8A5D] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => { setIsOpen(false); setBookingOpen(true); }}
                className="w-full bg-[#7C8A5D] text-white px-6 py-2 rounded-lg hover:bg-[#5A6842] transition-colors shadow-md"
              >
                Book Now
              </button>
            </div>
          )}
        </div>
      </nav>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
