import { useState } from 'react';
import { ImageWithFallback } from '@/components/shared';
import { ReservationModal } from '@/components/shared/ReservationModal';
import { DISHES } from '@/constants';

export function Restaurant() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#7C8A5D] mb-4">Dining Experience</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Savor the flavors of Morocco in our traditional restaurant, where every dish tells a
              story of heritage and hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {DISHES.map((dish) => (
              <div
                key={dish.name}
                className="group cursor-pointer"
                onClick={() => setReservationOpen(true)}
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-white mb-2">{dish.name}</h3>
                    <p className="text-white/90 text-sm">{dish.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-[#7C8A5D]/0 group-hover:bg-[#7C8A5D]/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium bg-black/40 px-4 py-2 rounded-full transition-opacity">
                      Reserve a Table
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#F5F0E8] rounded-2xl p-8 md:p-12 text-center border-2 border-[#C9A961]/20">
            <h3 className="mb-4">Private Dining & Events</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
              Host intimate gatherings or celebrate special occasions in our exclusive dining spaces.
              Our chef creates custom menus featuring seasonal ingredients and traditional recipes
              passed down through generations.
            </p>
            <button
              onClick={() => setReservationOpen(true)}
              className="bg-[#7C8A5D] text-white px-8 py-3 rounded-lg hover:bg-[#5A6842] transition-colors shadow-md font-medium"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </section>

      <ReservationModal open={reservationOpen} onClose={() => setReservationOpen(false)} />
    </>
  );
}
