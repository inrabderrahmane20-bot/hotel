import { Link } from 'react-router';
import { Wifi, Waves, Sparkles, Utensils, Car, Coffee, Shield, Star, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1738969584222-95c5a40bfedb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080';

const AMENITIES = [
  { icon: Wifi, label: 'Free High-Speed WiFi' },
  { icon: Waves, label: 'Rooftop Plunge Pool' },
  { icon: Sparkles, label: 'Spa & Traditional Hammam' },
  { icon: Utensils, label: 'Rooftop Restaurant' },
  { icon: Car, label: 'Airport Transfers' },
  { icon: Coffee, label: 'Daily Breakfast Included' },
  { icon: Shield, label: '24 / 7 Concierge Service' },
  { icon: Star, label: 'Personalised Butler' },
];

const WHY_US = [
  {
    title: 'Authentic Heritage',
    body: 'Our 19th-century riad has been lovingly restored using master craftsmen from Fès and Marrakech, preserving every hand-chiselled plaster detail.',
  },
  {
    title: 'Prime Medina Location',
    body: 'Steps from Jemaa el-Fna, Bahia Palace, and the famous souks — yet tucked away on a quiet derb for total peace and privacy.',
  },
  {
    title: 'Tailored Experiences',
    body: 'From private cooking classes to bespoke desert camps, our expert team curates every detail so your stay is uniquely yours.',
  },
];

const STORY_IMAGES = [
  'https://images.unsplash.com/photo-1760681555884-16138db57ba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1764419737670-5e63f20c5493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="Two decades of authentic Moroccan hospitality in the heart of Marrakech"
        image={HERO_IMAGE}
        breadcrumb="About"
      />

      {/* Story Section */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-[#7C8A5D] text-sm font-medium tracking-widest uppercase">Est. 2005</p>
              <h2 className="text-3xl sm:text-4xl leading-tight">Welcome to Riad Marrakech</h2>
              <p className="text-foreground/70 leading-relaxed">
                Founded in 2005 by the Benali family, Riad Marrakech began as a passion project to share the warmth and beauty of Moroccan culture with travellers from around the world. What started as four guest rooms has grown into an award-winning boutique hotel — but we have never lost that sense of intimate, personal care.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Nestled on a quiet lane in the historic medina, our riad was built in the 19th century and painstakingly restored using traditional Zouak painters, Fassi zellige tile layers, and master woodcarvers from the Atlas region. Every ceiling, doorway, and fountain tells a story.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Today, under the stewardship of second-generation owner Karim Benali, Riad Marrakech blends heritage craftsmanship with modern comfort — think heated marble floors, ultra-fast WiFi, and bespoke toiletries alongside hand-embroidered linens and century-old cedar ceilings.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[['12', 'Luxury Rooms'], ['5★', 'Guest Rating'], ['20+', 'Years of Service']].map(([val, lbl]) => (
                  <div key={lbl} className="text-center p-4 bg-[#FAF7F2] rounded-xl">
                    <div className="text-2xl sm:text-3xl text-[#C9A961] mb-1 font-bold">{val}</div>
                    <div className="text-xs text-foreground/60">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STORY_IMAGES.map((src, i) => (
                <ImageWithFallback
                  key={src}
                  src={src}
                  alt="Riad interior"
                  className={`w-full h-56 md:h-72 object-cover rounded-2xl ${i === 1 ? 'mt-6 md:mt-10' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 md:py-24 px-4 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7C8A5D] text-sm font-medium tracking-widest uppercase mb-3">Everything You Need</p>
            <h2 className="text-3xl sm:text-4xl mb-4">Hotel Amenities</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We believe luxury lies in the details. Every amenity at Riad Marrakech is thoughtfully chosen to make your stay effortless and memorable.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {AMENITIES.map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white rounded-2xl p-5 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#7C8A5D]/10 rounded-full mb-4">
                  <Icon size={22} className="text-[#7C8A5D]" />
                </div>
                <p className="text-sm font-medium text-foreground/80">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7C8A5D] text-sm font-medium tracking-widest uppercase mb-3">Why Riad Marrakech</p>
            <h2 className="text-3xl sm:text-4xl">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_US.map(({ title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 size={22} className="text-[#7C8A5D]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{title}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 px-4 bg-[#3D4A2B] text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-white text-2xl sm:text-3xl mb-4">Come and See for Yourself</h3>
          <p className="text-white/70 mb-6">Twelve rooms. Infinite stories. Your Marrakech journey begins here.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#C9A961] text-[#3D4A2B] px-8 py-3 rounded-lg hover:bg-[#b8943f] transition-colors font-semibold"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  );
}
