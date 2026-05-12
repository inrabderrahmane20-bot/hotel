import { ImageWithFallback } from '@/components/shared';
import type { HotelStat } from '@/types';

const ABOUT_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1738969584222-95c5a40bfedb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Traditional Moroccan architecture',
    className: 'w-full h-64 object-cover rounded-2xl',
  },
  {
    src: 'https://images.unsplash.com/photo-1764419737670-5e63f20c5493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Illuminated pool',
    className: 'w-full h-64 object-cover rounded-2xl mt-8',
  },
  {
    src: 'https://images.unsplash.com/photo-1773807092666-2936d0827ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Pink Moroccan door',
    className: 'w-full h-64 object-cover rounded-2xl -mt-8',
  },
  {
    src: 'https://images.unsplash.com/photo-1602681797891-a1003186de8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXJyYWtlY2glMjBhcmNoaXRlY3R1cmUlMjBtZWRpbmF8ZW58MXx8fHwxNzc4NTg4NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Pool area',
    className: 'w-full h-64 object-cover rounded-2xl',
  },
];

const STATS: HotelStat[] = [
  { value: '12', label: 'Luxury Rooms' },
  { value: '5★', label: 'Rating' },
  { value: '24/7', label: 'Service' },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_IMAGES.map((img) => (
              <ImageWithFallback key={img.alt} src={img.src} alt={img.alt} className={img.className} />
            ))}
          </div>

          <div>
            <h2 className="text-[#7C8A5D] mb-4">Welcome to Riad Marrakech</h2>
            <h3 className="mb-6">A Sanctuary in the Heart of the Red City</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Nestled in the historic medina of Marrakech, our traditional riad offers a peaceful
              retreat from the bustling souks. Each room is thoughtfully designed with authentic
              Moroccan craftsmanship, featuring hand-painted tiles, ornate woodwork, and luxurious
              fabrics.
            </p>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Wake up to the scent of fresh mint tea, enjoy breakfast on our rooftop terrace with
              panoramic views of the Atlas Mountains, and let our dedicated staff curate
              unforgettable experiences throughout your stay.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-[#FAF7F2] rounded-xl">
                  <div className="text-3xl text-[#C9A961] mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
