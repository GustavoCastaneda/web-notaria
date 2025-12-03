import React from 'react';
import { SectionId } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background">

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.15] pointer-events-none"></div>

      {/* Gradient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-xs font-bold tracking-wide text-gray-300 uppercase">Notaría 103 Toluca</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-8 animate-fade-in-up delay-100">
              Certeza Jurídica, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Confianza Absoluta.</span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-10 animate-fade-in-up delay-200">
              Brindamos seguridad legal a su patrimonio y empresa con fe pública, ética y profesionalismo. Soluciones notariales sólidas para su tranquilidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full animate-fade-in-up delay-300">
              <button
                onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:shadow-glow hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Agendar Cita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 backdrop-blur-sm"
              >
                Ver Servicios
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm font-medium text-secondary/60 animate-fade-in-up delay-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Certificación ISO</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Atención 24/7</span>
              </div>
            </div>
          </div>

          {/* Right Image Placeholder (Abstract/Person) */}
          <div className="relative h-[500px] lg:h-[600px] w-full animate-fade-in-up delay-300 mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-surface/20 rounded-[3rem] rotate-3 blur-sm"></div>
            <div className="absolute inset-0 bg-surface rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
              {/* Placeholder for the "Smiling Man" image from reference */}
              <div className="w-full h-full bg-gradient-to-b from-surface to-background flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-80 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional"
                  className="w-full h-full object-cover opacity-90"
                />

                {/* Floating Card Element */}
                <div className="absolute bottom-12 left-12 bg-surface/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4 max-w-xs animate-bounce-slow">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-background">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Trámites Exitosos</p>
                    <p className="text-accent text-xs font-bold">+5,000 Escrituras</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;