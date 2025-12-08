import { MapPin, Shield, TrendingUp, Clock, Zap, Globe } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Problems from './components/Problems';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Navigation />
      <Hero />
      <Capabilities />
      <Problems />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
