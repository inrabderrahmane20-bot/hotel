import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryImage } from '@/types';

interface Props {
  images: GalleryImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function GalleryLightbox({ images, selectedIndex, onClose, onNext, onPrev }: Props) {
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex, onClose, onNext, onPrev]);

  if (selectedIndex === null) return null;
  const image = images[selectedIndex];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/70 hover:text-white bg-black/40 p-2 rounded-full transition-colors z-10"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 sm:left-4 text-white/70 hover:text-white bg-black/40 p-2 sm:p-3 rounded-full transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image + caption */}
      <div
        className="max-w-5xl max-h-[85vh] w-full mx-12 sm:mx-20 flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.url}
          alt={image.alt}
          className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
        />
        <div className="flex items-center gap-3">
          <span className="text-white/80 text-xs sm:text-sm">{image.alt}</span>
          <span className="text-white/40 text-xs">{selectedIndex + 1} / {images.length}</span>
        </div>
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === selectedIndex ? 'bg-[#C9A961]' : 'bg-white/30'}`} />
          ))}
        </div>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 sm:right-4 text-white/70 hover:text-white bg-black/40 p-2 sm:p-3 rounded-full transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
