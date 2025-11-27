import React from 'react';
import { APP_NAME } from '../constants';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c1917] text-stone-200 border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl tracking-widest text-white font-semibold mb-6 flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rotate-45"></div>
              {APP_NAME}
            </h3>
            <p className="text-accent text-xs uppercase tracking-widest mb-4">Lic. Víctor Alfonso Varela Velasco</p>
            <p className="text-stone-400 text-sm font-light leading-relaxed max-w-sm">
              Elevando el estándar de los servicios notariales en Toluca. Combinamos experiencia legal con tecnología de punta para ofrecer seguridad jurídica sin complicaciones.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-stone-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span>Av. Reforma 222, Piso 40<br/>Toluca, Edo. Méx</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>+52 (722) 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>contacto@notaria103.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6">Horario</h4>
            <ul className="space-y-2 text-sm text-stone-400 font-light">
              <li className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span className="text-white">9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="text-white">10:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-stone-600">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Notaría 103. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;