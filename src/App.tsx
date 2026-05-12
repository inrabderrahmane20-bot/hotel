import { Outlet } from 'react-router';
import { Toaster } from 'sonner';
import { Navbar, Footer } from '@/components/layout';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
