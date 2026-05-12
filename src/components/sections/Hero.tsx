import { Calendar, Users } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1760681555884-16138db57ba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080';

const GUEST_OPTIONS = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5+ Guests'];

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={HERO_IMAGE}
          alt="Luxury hotel courtyard in Marrakech"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-white text-4xl md:text-6xl mb-4">Experience Authentic Marrakech</h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Discover the magic of Morocco at our luxury riad. Immerse yourself in culture, cuisine,
          and unforgettable adventures.
        </p>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-foreground/70 flex items-center gap-2">
                <Calendar size={16} className="text-[#C9A961]" />
                Check-in
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-foreground/70 flex items-center gap-2">
                <Calendar size={16} className="text-[#C9A961]" />
                Check-out
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-foreground/70 flex items-center gap-2">
                <Users size={16} className="text-[#C9A961]" />
                Guests
              </label>
              <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2]">
                {GUEST_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="w-full mt-6 bg-[#7C8A5D] text-white py-4 rounded-lg hover:bg-[#5A6842] transition-colors shadow-lg">
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
}
