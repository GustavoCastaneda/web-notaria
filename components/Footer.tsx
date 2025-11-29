import React from 'react';
import { APP_NAME } from '../constants';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface text-white pt-24 pb-12 rounded-t-[3rem] mt-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">{APP_NAME}</span>
            </div>
            <p className="text-secondary text-lg leading-relaxed max-w-sm mb-8">
              Elevando el estándar notarial con tecnología y experiencia. Su socio estratégico en Toluca.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-background transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white">Enlaces</h4>
            <ul className="space-y-4 text-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Servicios</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Agendar Cita</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-lg font-bold mb-6 text-white">Contacto</h4>
            <ul className="space-y-6 text-secondary">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0" />
                <span>C.I. M. Altamirano 1000, Universidad,<br />50130 Toluca de Lerdo, Méx.</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-accent shrink-0" />
                <span>(722) 217-6329</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent shrink-0" />
                <span>contacto@not103.com.mx</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary gap-4">
          <p>© {new Date().getFullYear()} Notaría 103. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;