import { PageHero } from '@/components/layout/PageHero';
import { Contact } from '@/components/sections/Contact';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1773807092666-2936d0827ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXJyYWtlY2glMjBob3RlbCUyMGx1eHVyeSUyMG1vcm9jY298ZW58MXx8fHwxNzc4NTg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080';

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you — reach out for reservations, questions, or special requests"
        image={HERO_IMAGE}
        breadcrumb="Contact"
      />
      <Contact />
    </>
  );
}
