import React from 'react';
import { TESTIMONIALS } from '../constants';
import { SectionId } from '../types';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold block mb-4">Sobre Nosotros</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight mb-8">
              Más que firmar documentos, <br/>
              <span className="text-secondary">construimos confianza.</span>
            </h2>
            <div className="space-y-6 text-secondary font-light text-lg">
              <p>
                Fundada con la visión de modernizar la práctica notarial en Toluca, la Notaría 103, bajo la titularidad del <strong>Lic. Víctor Alfonso Varela Velasco</strong>, combina la solemnidad requerida por la ley con la eficiencia que demanda el mundo actual.
              </p>
              <p>
                Nuestro equipo está compuesto por juristas de alto nivel, comprometidos no solo con la legalidad, sino con la tranquilidad de nuestros clientes. Entendemos que detrás de cada firma hay un proyecto de vida, una inversión o un legado.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
               <div className="border-l border-accent pl-6">
                  <h4 className="text-primary font-serif text-xl mb-2">Imparcialidad</h4>
                  <p className="text-sm text-secondary">Garantía absoluta de neutralidad en todos los actos.</p>
               </div>
               <div className="border-l border-accent pl-6">
                  <h4 className="text-primary font-serif text-xl mb-2">Innovación</h4>
                  <p className="text-sm text-secondary">Procesos digitales y gestión documental segura.</p>
               </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <h3 className="text-sm uppercase tracking-widest text-secondary mb-4 border-b border-border pb-4">Lo que dicen nuestros clientes</h3>
            
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-surface p-8 border border-border relative shadow-sm hover:shadow-md transition-shadow">
                <Quote className="absolute top-6 right-6 text-stone-100 w-8 h-8" />
                <p className="text-primary font-serif text-lg italic mb-6">"{t.text}"</p>
                <div>
                  <p className="text-accent text-sm font-semibold">{t.name}</p>
                  <p className="text-stone-400 text-xs uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;