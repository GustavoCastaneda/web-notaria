import React from 'react';
import { 
  FileSignature, 
  ScrollText, 
  Scale, 
  Building2, 
  UserCheck, 
  ShieldCheck, 
  Briefcase, 
  Users, 
  FileCheck, 
  Eye, 
  Globe, 
  BookOpen, 
  Gavel 
} from 'lucide-react';
import { ServiceItem, Testimonial } from './types';

export const APP_NAME = "NOTARÍA 103";

export const SERVICES: ServiceItem[] = [
  {
    id: 'bienes-inmuebles',
    title: 'Escrituración Inmobiliaria',
    description: 'Gestión de transferencia de propiedad y validación de escrituras públicas para seguridad en bienes raíces.',
    icon: <Building2 className="w-6 h-6" />
  },
  {
    id: 'testamentos',
    title: 'Testamentos y Sucesiones',
    description: 'Planificación hereditaria clara y trámites sucesorios para garantizar el cumplimiento de su voluntad.',
    icon: <ScrollText className="w-6 h-6" />
  },
  {
    id: 'contratos',
    title: 'Contratos',
    description: 'Redacción y revisión de compraventas, donaciones y préstamos protegiendo los intereses de las partes.',
    icon: <FileSignature className="w-6 h-6" />
  },
  {
    id: 'poderes',
    title: 'Poderes Notariales',
    description: 'Elaboración de mandatos generales y especiales para trámites legales, administrativos o bancarios.',
    icon: <Scale className="w-6 h-6" />
  },
  {
    id: 'corporativo',
    title: 'Constitución de Sociedades',
    description: 'Creación de empresas, fusiones y transformaciones corporativas siguiendo todos los lineamientos legales.',
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    id: 'divorcios',
    title: 'Divorcios y Separaciones',
    description: 'Asistencia en separaciones de mutuo acuerdo y liquidación de bienes de forma justa y normativa.',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 'actas',
    title: 'Actas Notariales',
    description: 'Certificación de hechos específicos y constancias que otorgan validez legal a situaciones cruciales.',
    icon: <FileCheck className="w-6 h-6" />
  },
  {
    id: 'cancelaciones',
    title: 'Cancelación de Hipotecas',
    description: 'Gestión de liberación de gravámenes y limitaciones de dominio para sanear sus propiedades.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: 'herederos',
    title: 'Declaraciones de Herederos',
    description: 'Procedimientos intestados para asegurar la distribución legítima de bienes entre los sucesores.',
    icon: <UserCheck className="w-6 h-6" />
  },
  {
    id: 'fe-publica',
    title: 'Fe de Hechos',
    description: 'Validación ocular de posesiones, acuerdos y situaciones que requieren certeza jurídica garantizada.',
    icon: <Eye className="w-6 h-6" />
  },
  {
    id: 'apostilla',
    title: 'Legalización y Apostilla',
    description: 'Certificación de documentos nacionales e internacionales para su validez y legitimidad en el extranjero.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 'protocolizacion',
    title: 'Protocolización',
    description: 'Conversión de documentos privados en públicos mediante inscripción para garantizar su conservación y legalidad.',
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    id: 'subastas',
    title: 'Subastas',
    description: 'Planificación y ejecución de subastas públicas y privadas con total transparencia y formalidad legal.',
    icon: <Gavel className="w-6 h-6" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    role: 'Director General',
    text: 'La eficiencia y sofisticación con la que manejan nuestros trámites corporativos es inigualable. Un socio estratégico vital.'
  },
  {
    id: '2',
    name: 'Sofia Ramirez',
    role: 'Arquitecta',
    text: 'Hicieron que el proceso de escrituración de mi primera casa fuera transparente y rápido. La atención al detalle es exquisita.'
  }
];