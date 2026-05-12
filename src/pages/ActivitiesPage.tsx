import { useState } from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { ActivityModal } from '@/components/shared/ActivityModal';
import { BookingModal } from '@/components/shared/BookingModal';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { ACTIVITIES, type Activity } from '@/constants';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1535191198992-fe460a2d0af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXJyYWtlY2glMjBkZXNlcnQlMjB0b3VyJTIwbW9yb2Njb3xlbnwxfHx8fDE3Nzg1ODg0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080';

export default function ActivitiesPage() {
  const [selected, setSelected] = useState<Activity | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <PageHero
        title="Experiences & Activities"
        subtitle="From desert adventures to culinary journeys — authentic Morocco awaits"
        image={HERO_IMAGE}
        breadcrumb="Activities"
      />

      <section className="py-16 md:py-24 px-4 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7C8A5D] text-sm font-medium tracking-widest uppercase mb-3">Curated Just for You</p>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We handpick every experience to ensure it is authentic, safe, and truly unforgettable. Our local guides are among the best in Marrakech.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ACTIVITIES.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                  onClick={() => setSelected(activity)}
                >
                  <div className="relative h-52 md:h-64 overflow-hidden">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#7C8A5D]/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg">
                      <Icon className="text-[#C9A961]" size={20} />
                    </div>
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white/90 text-xs font-medium">{activity.duration}</span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="mb-2">{activity.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-3">{activity.description}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <span className="text-sm font-semibold text-[#C9A961]">{activity.price}</span>
                      <button className="text-[#7C8A5D] hover:text-[#5A6842] text-sm font-medium inline-flex items-center gap-1 transition-colors">
                        Details & Book <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 px-4 bg-[#3D4A2B] text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-white text-2xl sm:text-3xl mb-3">Can't Decide? We'll Plan It for You</h3>
          <p className="text-white/70 mb-6">
            Tell us your interests and our concierge will craft a personalised itinerary for your stay.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="bg-[#C9A961] text-[#3D4A2B] px-8 py-3 rounded-lg hover:bg-[#b8943f] transition-colors font-semibold"
          >
            Book Your Stay
          </button>
        </div>
      </section>

      <ActivityModal activity={selected} onClose={() => setSelected(null)} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
