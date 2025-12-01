import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrackingWidget from './components/TrackingWidget';
import ServiceCards from './components/ServiceCards';
import Stats from './components/Stats';
import Partners from './components/Partners';
import NetworkMap from './components/NetworkMap';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import TrafficAlert from './components/TrafficAlert';
import { useState } from 'react';

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="bg-paper min-h-screen font-body text-ink selection:bg-accent selection:text-white">
      <TrafficAlert />
      <Header />
      <main>
        <Hero onOpenQuote={() => setIsQuoteOpen(true)} />
        <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        <Stats />
        <Partners />
        <ServiceCards />
        <NetworkMap />
        <TrackingWidget />
        <Footer />
      </main>
    </div>
  );
}

export default App;
