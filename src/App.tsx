import { BrowserRouter as Router } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Universities from '@/components/sections/Universities';
import Tutors from '@/components/sections/Tutors';
import Inscription from '@/components/sections/Inscription';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <Universities />
          <Tutors />
          <Inscription />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;