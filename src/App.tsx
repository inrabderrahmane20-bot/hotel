import { Toaster } from 'sonner';
import { Navbar, Footer } from '@/components/layout';
import { Hero, About, Activities, Restaurant, Gallery, Contact } from '@/components/sections';

export default function App() {
  return (
    <div className="size-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Activities />
        <Restaurant />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
