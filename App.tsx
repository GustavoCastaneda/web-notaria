import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTASection from './components/CTASection';
import Services from './components/Services';
import Values from './components/Values';
import TeamSection from './components/TeamSection';
import About from './components/About';
import Gallery from './components/Gallery';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';

function App() {
  return (
    <div className="bg-background min-h-screen text-primary selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <CTASection />
        <Services />
        <Values />
        <TeamSection />
        <About />
        <Gallery />
        <BookingSection />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}

export default App;