import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

interface Props {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
}

export function PageHero({ title, subtitle, image, breadcrumb }: Props) {
  return (
    <div className="relative h-56 sm:h-64 md:h-80 mt-16 flex items-center justify-center overflow-hidden">
      <ImageWithFallback
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        {breadcrumb && (
          <div className="flex items-center justify-center gap-1.5 text-white/60 text-sm mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">{breadcrumb}</span>
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">{title}</h1>
        {subtitle && (
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
