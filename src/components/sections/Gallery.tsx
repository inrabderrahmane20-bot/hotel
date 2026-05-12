import { ImageWithFallback } from '@/components/shared';
import { GALLERY_IMAGES } from '@/constants';

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#7C8A5D] mb-4">Gallery</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A glimpse into the beauty and magic that awaits you at Riad Marrakech
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.alt}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
