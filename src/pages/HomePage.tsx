import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Star, BedDouble, Clock, Award } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { Restaurant } from '@/components/sections/Restaurant';
import { ActivityModal } from '@/components/shared/ActivityModal';
import { BookingModal } from '@/components/shared/BookingModal';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Reveal } from '@/components/shared/Reveal';
import { ACTIVITIES, GALLERY_IMAGES, type Activity } from '@/constants';

const STATS = [
  { icon: BedDouble, value: '12', label: 'Luxury Rooms' },
  { icon: Star, value: '5★', label: 'Guest Rating' },
  { icon: Clock, value: '24 / 7', label: 'Concierge' },
  { icon: Award, value: 'Est. 2005', label: 'Est. 2005' },
];

const ABOUT_IMAGES = [
  'https://images.unsplash.com/photo-1738969584222-95c5a40bfedb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1764419737670-5e63f20c5493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1773807092666-2936d0827ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1602681797891-a1003186de8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXJyYWtlY2glMjBhcmNoaXRlY3R1cmUlMjBtZWRpbmF8ZW58MXx8fHwxNzc4NTg4NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
];

const IMG_DIRECTIONS = ['left', 'right', 'left', 'right'] as const;
const FEAT_DIRECTIONS = ['left', 'up', 'right'] as const;
const FEATURED_ACTIVITIES = ACTIVITIES.slice(0, 3);
const PREVIEW_IMAGES = GALLERY_IMAGES.slice(0, 4);

export default function HomePage() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Hero />

      {/* Stats Strip */}
      <div className="bg-[#7C8A5D] text-white py-6 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <Reveal key={label} direction="up" delay={i * 0.1}>
              <div className="flex flex-col items-center gap-1">
                <Icon size={22} className="text-[#C9A961] mb-1" />
                <span className="text-xl font-bold">{value}</span>
                <span className="text-white/70 text-xs tracking-wide uppercase">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* About Teaser */}
      <section className="py-16 md:py-24 px-4 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {ABOUT_IMAGES.map((src, i) => (
                <Reveal key={src} direction={IMG_DIRECTIONS[i]} delay={i * 0.1} distance={80}>
                  <ImageWithFallback src={src} alt="Riad Marrakech"
                    className={`w-full h-44 sm:h-56 md:h-64 object-cover rounded-2xl ${i === 1 ? 'mt-6 md:mt-8' : ''} ${i === 2 ? '-mt-6 md:-mt-8' : ''}`} />
                </Reveal>
              ))}
            </div>
            <div>
              <Reveal direction="right" delay={0}>
                <p className="text-[#7C8A5D] text-sm font-medium tracking-widest uppercase mb-3">About Us</p>
              </Reveal>
              <Reveal direction="right" delay={0.1}>
                <h2 className="text-3xl sm:text-4xl mb-5 leading-tight">A Sanctuary in the Heart of the Red City</h2>
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Nestled in the historic medina of Marrakech, our traditional riad offers a peaceful retreat from the bustling souks. Each room is thoughtfully designed with authentic Moroccan craftsmanship — hand-painted tiles, ornate woodwork, and luxurious fabrics.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.3}>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  Wake up to fresh mint tea, enjoy breakfast on our rooftop terrace with panoramic views of the Atlas Mountains, and let our dedicated staff curate unforgettable experiences throughout your stay.
                </p>
              </Reveal>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[['12', 'Luxury Rooms'], ['5★', 'Rating'], ['24/7', 'Service']].map(([val, lbl], i) => (
                  <Reveal key={lbl} direction="up" delay={0.3 + i * 0.1}>
                    <div className="text-center p-4 bg-[#FAF7F2] rounded-xl">
                      <div className="text-2xl text-[#C9A961] mb-1 font-bold">{val}</div>
                      <div className="text-xs text-foreground/60">{lbl}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal direction="up" delay={0.5}>
                <Link to="/about"
                  className="inline-flex items-center gap-2 bg-[#7C8A5D] text-white px-6 py-3 rounded-lg hover:bg-[#5A6842] transition-colors shadow-md font-medium">
                  Discover Our Story <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="py-16 md:py-24 px-4 bg-[#F5F0E8] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <Reveal direction="left">
                <p className="text-[#7C8A5D] text-sm font-medium tracking-widest uppercase mb-2">Curated for You</p>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
                <h2 className="text-3xl sm:text-4xl">Featured Experiences</h2>
              </Reveal>
            </div>
            <Reveal direction="right">
              <Link to="/activities" className="inline-flex items-center gap-2 text-[#7C8A5D] hover:text-[#5A6842] transition-colors font-medium flex-shrink-0">
                All Experiences <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {FEATURED_ACTIVITIES.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <Reveal key={activity.title} direction={FEAT_DIRECTIONS[i]} delay={i * 0.15}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer h-full"
                    onClick={() => setSelectedActivity(activity)}>
                    <div className="relative h-52 md:h-64 overflow-hidden">
                      <ImageWithFallback src={activity.image} alt={activity.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 bg-[#7C8A5D]/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg">
                        <Icon className="text-[#C9A961]" size={20} />
                      </div>
                    </div>
                    <div className="p-5 md:p-6">
                      <h3 className="mb-2">{activity.title}</h3>
                      <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{activity.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#C9A961] font-medium">{activity.price}</span>
                        <button className="text-[#7C8A5D] hover:text-[#5A6842] text-sm font-medium inline-flex items-center gap-1">
                          Learn More <span>→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Restaurant />

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 px-4 bg-[#F5F0E8] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <Reveal direction="left">
                <p className="text-[#7C8A5D] text-sm font-medium tracking-widest uppercase mb-2">Visual Journey</p>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
                <h2 className="text-3xl sm:text-4xl">A Glimpse of Riad Life</h2>
              </Reveal>
            </div>
            <Reveal direction="right">
              <Link to="/gallery" className="inline-flex items-center gap-2 text-[#7C8A5D] hover:text-[#5A6842] transition-colors font-medium flex-shrink-0">
                Full Gallery <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {PREVIEW_IMAGES.map((img, i) => (
              <Reveal key={img.alt} direction="up" delay={i * 0.1}>
                <Link to="/gallery" className="block">
                  <div className="relative aspect-square rounded-2xl overflow-hidden group">
                    <ImageWithFallback src={img.url} alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 md:py-24 px-4 bg-[#3D4A2B] overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal direction="down">
            <p className="text-[#C9A961] text-sm font-medium tracking-widest uppercase mb-4">Don't Wait</p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl mb-5">Ready to Experience Marrakech?</h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-white/70 mb-8 text-base sm:text-lg leading-relaxed">
              Reserve your stay today and let us craft an unforgettable Moroccan experience — from private hammams to rooftop dinners under the stars.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <button onClick={() => setBookingOpen(true)}
              className="bg-[#C9A961] text-[#3D4A2B] px-8 py-4 rounded-lg hover:bg-[#b8943f] transition-colors shadow-lg font-semibold text-base">
              Book Your Stay
            </button>
          </Reveal>
        </div>
      </section>

      <ActivityModal activity={selectedActivity} onClose={() => setSelectedActivity(null)} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
