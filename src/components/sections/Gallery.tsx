import { useState, useCallback } from 'react';
import { ImageWithFallback } from '@/components/shared';
import { GalleryLightbox } from '@/components/shared/GalleryLightbox';
import { GALLERY_IMAGES } from '@/constants';

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const onNext = useCallback(() =>
    setSelectedIndex((i) => (i === null ? 0 : (i + 1) % GALLERY_IMAGES.length)),
    []
  );

  const onPrev = useCallback(() =>
    setSelectedIndex((i) => (i === null ? 0 : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)),
    []
  );

  return (
    <>
      <section id="gallery" className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#7C8A5D] mb-4">Gallery</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A glimpse into the beauty and magic that awaits you at Riad Marrakech
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((image, index) => (
              <button
                key={image.alt}
                onClick={() => setSelectedIndex(index)}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] focus:ring-offset-2"
                aria-label={`View ${image.alt}`}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-end justify-start p-3">
                  <span className="text-white/0 group-hover:text-white/90 text-xs font-medium transition-colors">{image.alt}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <GalleryLightbox
        images={GALLERY_IMAGES}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onNext={onNext}
        onPrev={onPrev}
      />
    </>
  );
}
