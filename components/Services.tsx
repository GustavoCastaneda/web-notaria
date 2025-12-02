import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { SectionId } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SERVICE_IMAGES: Record<string, string> = {
  'bienes-inmuebles': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80', // Modern Building
  'testamentos': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80', // Signing document
  'contratos': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80', // Business meeting
  'poderes': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80', // Handshake/Agreement
  'corporativo': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', // Corporate office
  'divorcios': 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&w=800&q=80', // Legal abstract
  'actas': 'https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&w=800&q=80', // Documents
  'cancelaciones': 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&q=80', // Real estate keys
  'herederos': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80', // Family/People
  'fe-publica': 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=800&q=80', // Eye/Lens or Abstract
  'apostilla': 'https://images.unsplash.com/photo-1569974498991-d3c12a504f95?auto=format&fit=crop&w=800&q=80', // Passport/Stamp
  'protocolizacion': 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=800&q=80', // Books/Library
  'subastas': 'https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&w=800&q=80', // Gavel auction
};

const Services: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? SERVICES : SERVICES.slice(0, 3);

  return (
    <section id={SectionId.SERVICES} className="bg-black">

      <div className="py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Lo que ofrecemos</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto px-6">
          Soluciones integrales para el éxito de su patrimonio y empresa.
        </p>
      </div>

      {/* Full Width Image Card Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        {displayedServices.map((service, index) => (
          <div
            key={service.id}
            className="group relative h-[80vh] min-h-[600px] overflow-hidden bg-accent border-r border-white/10 last:border-r-0"
          >
            {/* Background Image Layer (Fades out on hover) */}
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 z-10">
              <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Dark Overlay */}
              <img
                src={SERVICE_IMAGES[service.id] || 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80'}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 z-20 p-12 flex flex-col justify-between h-full">

              {/* Top: Number */}
              <div className="text-white/80 font-mono text-sm group-hover:text-black transition-colors duration-300 border-b border-white/20 pb-4 group-hover:border-black/20 w-fit">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Bottom: Content */}
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-black transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>

                <p className="text-white/80 text-lg leading-relaxed mb-8 line-clamp-3 group-hover:text-black/80 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-500 delay-100">
                  {service.description}
                </p>

                <button className="bg-white text-black px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300 border border-transparent hover:border-white">
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="py-12 flex justify-center bg-black">
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          {showAll ? 'Ver menos servicios' : 'Ver más servicios'}
          {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
    </section>
  );
};

export default Services;