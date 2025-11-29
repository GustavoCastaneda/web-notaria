import React from 'react';
import img1 from '../assets/gallery-1.jpg';
import img2 from '../assets/gallery-2.jpg';
import img3 from '../assets/gallery-3.jpg';
import img4 from '../assets/gallery-4.jpg';
import img5 from '../assets/gallery-5.jpg';
import img6 from '../assets/gallery-6.jpg';
import img7 from '../assets/gallery-7.jpg';
import img8 from '../assets/gallery-8.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = () => {
    return (
        <section className="py-20 bg-background" id="galeria">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                        Nuestras Instalaciones
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-secondary text-lg max-w-2xl mx-auto font-light">
                        Espacios diseñados para brindarle comodidad, privacidad y la seguridad que sus trámites requieren.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3] cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                            <img
                                src={img}
                                alt={`Instalaciones Notaría 103 - Imagen ${index + 1}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 transition-colors duration-500 z-20 rounded-lg pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
