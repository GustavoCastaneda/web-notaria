import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';

function App() {
  return (
    <div className="bg-background min-h-screen text-primary selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <BookingSection />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}

export default App;