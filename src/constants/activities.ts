import { Palmtree, UtensilsCrossed, Camera, Map, Compass, Coffee, type LucideIcon } from 'lucide-react';

export interface Activity {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  includes: string[];
}

export const ACTIVITIES: Activity[] = [
  {
    icon: Compass,
    title: 'Desert Safari',
    description:
      'Experience the magic of the Sahara with camel treks and overnight stays in luxury desert camps. Watch the sun rise over golden dunes and sleep under a canopy of stars.',
    image:
      'https://images.unsplash.com/photo-1535191198992-fe460a2d0af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXJyYWtlY2glMjBkZXNlcnQlMjB0b3VyJTIwbW9yb2Njb3xlbnwxfHx8fDE3Nzg1ODg0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2 Days / 1 Night',
    price: 'From $189 / person',
    includes: [
      'Private 4x4 transfer to Zagora',
      'Camel trek at sunset',
      'Luxury desert camp accommodation',
      'Traditional Berber dinner & breakfast',
      'Expert bilingual guide',
    ],
  },
  {
    icon: UtensilsCrossed,
    title: 'Culinary Tours',
    description:
      'Discover authentic Moroccan cuisine with cooking classes and guided food tours through the medina. Visit spice markets, learn ancient recipes, and cook a full Moroccan feast.',
    image:
      'https://images.unsplash.com/photo-1737210235283-7675f83efc59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMHJlc3RhdXJhbnQlMjBmb29kJTIwdGFnaW5lfGVufDF8fHx8MTc3ODU4ODQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 'Half Day (4 hours)',
    price: 'From $65 / person',
    includes: [
      'Guided souk and spice market tour',
      'Hands-on cooking class with our chef',
      'Full meal you prepare yourself',
      'Recipe booklet to take home',
      'Mint tea welcome',
    ],
  },
  {
    icon: Map,
    title: 'Medina Tours',
    description:
      'Navigate the ancient streets with expert guides who bring the history and culture to life. Discover hidden riads, artisan workshops, and centuries-old monuments.',
    image:
      'https://images.unsplash.com/photo-1517137744310-173515c62d59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXJyYWtlY2glMjBkZXNlcnQlMjB0b3VyJTIwbW9yb2Njb3xlbnwxfHx8fDE3Nzg1ODg0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3 Hours',
    price: 'From $35 / person',
    includes: [
      'Expert certified local guide',
      'Visit to Bahia Palace & Saadian Tombs',
      'Guided tour of the souks',
      'Traditional mint tea stop',
      'Small group (max 8 people)',
    ],
  },
  {
    icon: Palmtree,
    title: 'Atlas Mountains',
    description:
      'Day trips to Berber villages nestled in the stunning Atlas Mountains, just an hour away. Trek through valleys, meet local families, and enjoy breathtaking panoramic views.',
    image:
      'https://images.unsplash.com/photo-1692089265184-f0941cbe333c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtYXJyYWtlY2glMjBkZXNlcnQlMjB0b3VyJTIwbW9yb2Njb3xlbnwxfHx8fDE3Nzg1ODg0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 'Full Day (8 hours)',
    price: 'From $79 / person',
    includes: [
      'Private transport from riad',
      'Visit to Imlil & local Berber village',
      'Guided mountain hike',
      'Lunch at a local family home',
      'Scenic valley & waterfall stops',
    ],
  },
  {
    icon: Coffee,
    title: 'Spa & Hammam',
    description:
      'Rejuvenate with traditional Moroccan spa treatments and authentic hammam experiences. Enjoy black soap scrubs, argan oil massages, and ancient beauty rituals.',
    image:
      'https://images.unsplash.com/photo-1624805098931-098c0d918b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBkZXNlcnQlMjB0b3VyJTIwbW9yb2Njb3xlbnwxfHx8fDE3Nzg1ODg0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2 Hours',
    price: 'From $55 / person',
    includes: [
      'Traditional hammam steam session',
      'Kessa exfoliation & black soap scrub',
      'Argan oil massage',
      'Rose water & ghassoul clay mask',
      'Herbal tea & relaxation lounge',
    ],
  },
  {
    icon: Camera,
    title: 'Photography Tours',
    description:
      'Capture the vibrant colors and stunning architecture with professional photography guides. From sunrise rooftop sessions to golden-hour medina walks.',
    image:
      'https://images.unsplash.com/photo-1698225573764-309f278151e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBhcmNoaXRlY3R1cmUlMjBtZWRpbmF8ZW58MXx8fHwxNzc4NTg4NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3 Hours',
    price: 'From $49 / person',
    includes: [
      'Professional photographer guide',
      'Sunrise rooftop session',
      'Medina golden-hour walk',
      'Post-processing tips & tricks',
      'Curated shot list of best locations',
    ],
  },
];
