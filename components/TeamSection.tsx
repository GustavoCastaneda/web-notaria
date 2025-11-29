import React from 'react';
import { SectionId } from '../types';
import { Plus } from 'lucide-react';

const TeamSection: React.FC = () => {
    return (
        <section id={SectionId.ABOUT} className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">

            {/* Background Image - Grayscale & Darkened */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
                    alt="Office Skyline"
                    className="w-full h-full object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="max-w-2xl">

                    {/* Label */}
                    <div className="flex items-center gap-2 mb-6 text-white/80 uppercase tracking-widest text-xs font-bold">
                        <Plus className="w-4 h-4 text-white" />
                        Conozca al equipo
                    </div>

                    {/* Heading */}
                    <h2 className="text-5xl md:text-7xl font-medium text-white mb-8 leading-[1.1] tracking-tight">
                        Nuestro equipo es nuestro <br />
                        <span className="text-white/90">mayor activo.</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                        Conformado por un grupo diverso de expertos con años de experiencia en derecho notarial, corporativo y patrimonial. Estamos unidos por un compromiso compartido de crear certeza jurídica y tranquilidad para nuestros clientes.
                    </p>

                </div>
            </div>

        </section>
    );
};

export default TeamSection;
