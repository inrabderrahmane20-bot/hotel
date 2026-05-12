import { Navbar, Footer } from '@/components/layout';
import { Hero, About, Activities, Restaurant, Gallery } from '@/components/sections';

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
      </main>
      <Footer />
    </div>
  );
}
