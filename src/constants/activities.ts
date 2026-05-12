import { Palmtree, UtensilsCrossed, Camera, Map, Compass, Coffee, type LucideIcon } from 'lucide-react';

export interface Activity {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export const ACTIVITIES: Activity[] = [
  {
    icon: Compass,
    title: 'Desert Safari',
    description:
      'Experience the magic of the Sahara with camel treks and overnight stays in luxury desert camps.',
    image:
      'https://images.unsplash.com/photo-1535191198992-fe460a2d0af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXJyYWtlY2glMjBkZXNlcnQlMjB0b3VyJTIwbW9yb2Njb3xlbnwxfHx8fDE3Nzg1ODg0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: UtensilsCrossed,
    title: 'Culinary Tours',
    description:
      'Discover authentic Moroccan cuisine with cooking classes and guided food tours through the medina.',
    image:
      'https://images.unsplash.com/photo-1737210235283-7675f83efc59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMHJlc3RhdXJhbnQlMjBmb29kJTIwdGFnaW5lfGVufDF8fHx8MTc3ODU4ODQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Map,
    title: 'Medina Tours',
    description:
      'Navigate the ancient streets with expert guides who bring the history and culture to life.',
    image:
      'https://images.unsplash.com/photo-1517137744310-173515c62d59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXJyYWtlY2glMjBkZXNlcnQlMjB0b3VyJTIwbW9yb2Njb3xlbnwxfHx8fDE3Nzg1ODg0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Palmtree,
    title: 'Atlas Mountains',
    description:
      'Day trips to Berber villages nestled in the stunning Atlas Mountains, just an hour away.',
    image:
      'https://images.unsplash.com/photo-1692089265184-f0941cbe333c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtYXJyYWtlY2glMjBkZXNlcnQlMjB0b3VyJTIwbW9yb2Njb3xlbnwxfHx8fDE3Nzg1ODg0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Coffee,
    title: 'Spa & Hammam',
    description:
      'Rejuvenate with traditional Moroccan spa treatments and authentic hammam experiences.',
    image:
      'https://images.unsplash.com/photo-1624805098931-098c0d918b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBkZXNlcnQlMjB0b3VyJTIwbW9yb2Njb3xlbnwxfHx8fDE3Nzg1ODg0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Camera,
    title: 'Photography Tours',
    description:
      'Capture the vibrant colors and stunning architecture with professional photography guides.',
    image:
      'https://images.unsplash.com/photo-1698225573764-309f278151e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBhcmNoaXRlY3R1cmUlMjBtZWRpbmF8ZW58MXx8fHwxNzc4NTg4NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];
