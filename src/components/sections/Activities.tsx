import { useState } from 'react';
import { ImageWithFallback } from '@/components/shared';
import { ActivityModal } from '@/components/shared/ActivityModal';
import { ACTIVITIES, type Activity } from '@/constants';

export function Activities() {
  const [selected, setSelected] = useState<Activity | null>(null);

  return (
    <>
      <section id="activities" className="py-16 md:py-24 px-4 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#7C8A5D] mb-4">Experiences & Activities</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              From desert adventures to culinary journeys, we curate authentic Moroccan experiences
              tailored to your interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTIVITIES.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
                  onClick={() => setSelected(activity)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#7C8A5D]/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                      <Icon className="text-[#C9A961]" size={24} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3">{activity.title}</h3>
                    <p className="text-foreground/70 mb-4 line-clamp-2">{activity.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground/50">{activity.duration}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelected(activity); }}
                        className="text-[#7C8A5D] hover:text-[#5A6842] transition-colors inline-flex items-center gap-1 text-sm font-medium"
                      >
                        Learn More <span className="text-[#C9A961]">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ActivityModal activity={selected} onClose={() => setSelected(null)} />
    </>
  );
}
