import { useState, useCallback } from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { GalleryLightbox } from '@/components/shared/GalleryLightbox';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import type { GalleryImage } from '@/types';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1760681555884-16138db57ba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080';

const ALL_IMAGES: GalleryImage[] = [
  { url: 'https://images.unsplash.com/photo-1760681555884-16138db57ba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Main Courtyard' },
  { url: 'https://images.unsplash.com/photo-1738969988585-c068517d0dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Ornate Moroccan Door' },
  { url: 'https://images.unsplash.com/photo-1535191198992-fe460a2d0af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXJyYWtlY2glMjBkZXNlcnQlMjB0b3VyJTIwbW9yb2Njb3xlbnwxfHx8fDE3Nzg1ODg0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Sahara Camel Trek' },
  { url: 'https://images.unsplash.com/photo-1661083098412-054431ab7112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb3JvY2NhbiUyMHJlc3RhdXJhbnQlMjBmb29kJTIwdGFnaW5lfGVufDF8fHx8MTc3ODU4ODQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Traditional Moroccan Cuisine' },
  { url: 'https://images.unsplash.com/photo-1760727465798-6fcaa6f0089d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXJyYWtlY2glMjBhcmNoaXRlY3R1cmUlMjBtZWRpbmF8ZW58MXx8fHwxNzc4NTg4NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Medina Architecture' },
  { url: 'https://images.unsplash.com/photo-1517137904679-2131f676b1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtYXJyYWtlY2glMjBkZXNlcnQlMjB0b3VyJTIwbW9yb2Njb3xlbnwxfHx8fDE3Nzg1ODg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Medina Rooftop Views' },
  { url: 'https://images.unsplash.com/photo-1764419737670-5e63f20c5493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Evening Pool' },
  { url: 'https://images.unsplash.com/photo-1773807092666-2936d0827ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Pink Riad Entrance' },
  { url: 'https://images.unsplash.com/photo-1602681797891-a1003186de8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXJyYWtlY2glMjBhcmNoaXRlY3R1cmUlMjBtZWRpbmF8ZW58MXx8fHwxNzc4NTg4NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Riad Garden' },
];

const CATEGORIES = ['All', 'Hotel', 'Experiences', 'Cuisine'];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const onNext = useCallback(() =>
    setSelectedIndex((i) => (i === null ? 0 : (i + 1) % ALL_IMAGES.length)), []);
  const onPrev = useCallback(() =>
    setSelectedIndex((i) => (i === null ? 0 : (i - 1 + ALL_IMAGES.length) % ALL_IMAGES.length)), []);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A visual journey through Riad Marrakech and the magic of Morocco"
        image={HERO_IMAGE}
        breadcrumb="Gallery"
      />

      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 md:mb-12 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === cat
                    ? 'bg-[#7C8A5D] text-white border-[#7C8A5D]'
                    : 'border-border text-foreground/70 hover:border-[#7C8A5D] hover:text-[#7C8A5D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {ALL_IMAGES.map((image, index) => (
              <button
                key={image.alt}
                onClick={() => setSelectedIndex(index)}
                className={`relative overflow-hidden rounded-2xl group focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] focus:ring-offset-2 ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } aspect-square`}
                aria-label={`View ${image.alt}`}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-3 sm:p-4">
                  <span className="text-white/0 group-hover:text-white text-xs sm:text-sm font-medium transition-colors">
                    {image.alt}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <GalleryLightbox
        images={ALL_IMAGES}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onNext={onNext}
        onPrev={onPrev}
      />
    </>
  );
}
