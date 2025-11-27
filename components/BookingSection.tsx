import React, { useState } from 'react';
import { SectionId } from '../types';
import { CheckCircle2 } from 'lucide-react';

const BookingSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative element - light stone */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/50 skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold block mb-4">Contacto</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Inicie su Trámite</h2>
          <p className="text-secondary font-light">Complete el formulario y nuestro equipo jurídico le contactará en menos de 24 horas.</p>
        </div>

        {submitted ? (
          <div className="bg-stone-50 border border-stone-200 p-12 text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-200 text-stone-600 mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-primary mb-2">Solicitud Recibida</h3>
            <p className="text-secondary">Gracias por confiar en Notaría 103. Nos pondremos en contacto con usted a la brevedad.</p>
            <button 
              onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', type: '', message: '' })}}
              className="mt-8 text-sm text-accent underline hover:text-primary"
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-secondary">Nombre Completo</label>
                <input 
                  required
                  type="text" 
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-background border border-border p-4 text-primary focus:border-accent focus:outline-none transition-colors rounded-none"
                  placeholder="Juan Pérez"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-secondary">Correo Electrónico</label>
                <input 
                  required
                  type="email" 
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-background border border-border p-4 text-primary focus:border-accent focus:outline-none transition-colors rounded-none"
                  placeholder="juan@ejemplo.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-secondary">Tipo de Trámite</label>
              <select 
                required
                value={formState.type}
                onChange={e => setFormState({...formState, type: e.target.value})}
                className="w-full bg-background border border-border p-4 text-primary focus:border-accent focus:outline-none transition-colors rounded-none appearance-none"
              >
                <option value="">Seleccione una opción...</option>
                <option value="bienes-raices">Bienes Raíces</option>
                <option value="testamentos">Testamentos y Sucesiones</option>
                <option value="corporativo">Corporativo / Empresas</option>
                <option value="otros">Otros Trámites</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-secondary">Mensaje (Opcional)</label>
              <textarea 
                rows={4}
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
                className="w-full bg-background border border-border p-4 text-primary focus:border-accent focus:outline-none transition-colors rounded-none resize-none"
                placeholder="Breve descripción de su requerimiento..."
              />
            </div>

            <div className="pt-4 text-center">
              <button 
                type="submit"
                className="bg-primary text-white px-12 py-4 uppercase tracking-widest text-xs font-bold hover:bg-accent transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                Confirmar Solicitud
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default BookingSection;