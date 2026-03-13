import { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const VideoPresentation = lazy(() => import('@/components/sections/VideoPresentation'));
const Features = lazy(() => import('@/components/sections/Features'));
const Universities = lazy(() => import('@/components/sections/Universities'));
const Tutors = lazy(() => import('@/components/sections/Tutors'));
const FAQ = lazy(() => import('@/components/sections/FAQ'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <VideoPresentation />
            <Features />
            <Universities />
            <Tutors />
            <FAQ />
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;