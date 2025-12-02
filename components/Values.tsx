import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const VALUES = [
    {
        id: 'integrity',
        title: 'Integridad',
        description: 'Actuamos con honestidad inquebrantable, asegurando que cada trámite cumpla estrictamente con la ley y proteja sus intereses a largo plazo.',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'transparency',
        title: 'Transparencia',
        description: 'Mantenemos una comunicación clara y abierta. Sin letras chiquitas ni sorpresas, usted sabrá exactamente el estado de sus procesos.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'collaboration',
        title: 'Colaboración',
        description: 'Trabajamos hombro a hombro con usted. Priorizamos la honestidad y la responsabilidad para construir confianza y credibilidad en cada esfuerzo.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80'
    }
];

const STATS = [
    { value: '10+', label: 'Años de experiencia' },
    { value: '50+', label: 'Empresas asesoradas' },
    { value: '95%', label: 'Satisfacción del cliente' },
    { value: '5K+', label: 'Trámites exitosos' }
];

const Values: React.FC = () => {
    const [activeValue, setActiveValue] = useState(VALUES[2]); // Default to Collaboration as in image

    return (
        <section className="bg-black text-white py-24 border-t border-white/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Label */}
                <div className="flex items-center gap-2 mb-20 text-white/60 uppercase tracking-widest text-xs font-bold">
                    <Plus className="w-4 h-4 text-white" />
                    Nuestros Valores
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">

                    {/* Left: Interactive List */}
                    <div className="space-y-4">
                        <h2 className="text-2xl text-white/60 mb-12 max-w-md leading-relaxed">
                            Nuestros valores fundamentales son la base de todo lo que hacemos.
                        </h2>

                        <div className="flex flex-col gap-2">
                            {VALUES.map((val) => (
                                <button
                                    key={val.id}
                                    onClick={() => setActiveValue(val)}
                                    className={`text-5xl md:text-7xl font-bold text-left transition-all duration-300 ${activeValue.id === val.id
                                        ? 'text-white translate-x-4'
                                        : 'text-white/20 hover:text-white/40'
                                        }`}
                                >
                                    {val.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Dynamic Image Card */}
                    <div className="relative h-[600px] w-full">
                        <div className="absolute inset-0 bg-white/5 rounded-3xl transform rotate-3 scale-95 opacity-50"></div>
                        <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={activeValue.image}
                                alt={activeValue.title}
                                className="w-full h-full object-cover transition-opacity duration-500"
                            />

                            {/* Floating Description Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-[#f3f4f6] text-[#1a1a1a] p-8 rounded-2xl shadow-lg max-w-md">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-bold text-lg">{activeValue.title}</h3>
                                    <Plus className="w-6 h-6 text-black" />
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {activeValue.description}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom: Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
                    {STATS.map((stat, index) => (
                        <div key={index} className="border-l border-white/10 pl-8">
                            <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-white/60 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Values;
