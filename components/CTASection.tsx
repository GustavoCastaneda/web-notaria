import React from 'react';
import { SectionId } from '../types';

const CTASection: React.FC = () => {
    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-tight tracking-tight mb-8">
                    En <span className="text-black font-black">Notaría 103</span>, entregamos resultados reales a través de <span className="text-black font-black">estrategias legales innovadoras</span> diseñadas para escalar su negocio, proteger su patrimonio y <span className="text-black font-black">maximizar su seguridad jurídica</span> con precisión.
                </h2>
            </div>
        </section>
    );
};

export default CTASection;
