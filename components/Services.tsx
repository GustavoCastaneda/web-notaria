import React from 'react';
import { SERVICES } from '../constants';
import { SectionId } from '../types';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold block mb-4">Áreas de Práctica</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">Soluciones Integrales</h2>
          </div>
          <p className="text-secondary max-w-md text-sm leading-relaxed text-right md:text-left">
            Cubrimos todas las necesidades notariales con un equipo especializado en cada rama del derecho, garantizando precisión y rapidez.
          </p>
        </div>

        {/* Grid Layout designed to look like a Bento box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`
                group relative p-8 border-border hover:bg-[#f5f5f4] transition-colors duration-500
                border-b
                ${index % 3 !== 2 ? 'lg:border-r' : ''} /* Right border for 1st and 2nd cols on lg */
                ${index % 2 !== 1 ? 'md:border-r lg:border-r-0' : ''} /* MD logic adjustment */
                flex flex-col justify-between h-[320px] bg-white
              `}
            >
              <div className="flex justify-between items-start">
                 <div className="p-3 bg-stone-50 border border-stone-100 rounded-sm text-accent group-hover:text-primary transition-colors">
                   {service.icon}
                 </div>
                 <span className="text-stone-200 font-serif text-4xl group-hover:text-stone-300 transition-colors">0{index + 1}</span>
              </div>

              <div>
                <h3 className="text-xl font-serif text-primary mb-3 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </h3>
                <p className="text-secondary text-sm font-light leading-relaxed group-hover:text-primary transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;