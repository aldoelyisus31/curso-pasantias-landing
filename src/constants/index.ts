import { NavItem, Feature, Testimonial, CTAConfig } from '@/types';
import { 
  Clock, 
  Video, 
  Award, 
  BookOpen, 
  CreditCard, 
  Target 
} from 'lucide-react';

export const SITE_CONFIG = {
  name: 'CENEVAL MX',
  description: 'Curso de Preparación CENEVAL #1 en México - Tu acceso garantizado a la universidad pública.',
  url: 'https://curso-ceneval.mx',
  email: 'admisiones@ceneval-mx.com',
  phone: '+52 6181316769',
  address: 'Durango, Dgo, México',
  whatsapp: 'https://wa.me/526181316769?text=Hola!%20Quiero%20información%20sobre%20el%20curso%20CENEVAL',
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: '¿Por qué nosotros?', href: '#features' },
  { label: 'Universidades', href: '#universities' },
  { label: 'Profesores', href: '#tutors' },
  { label: 'FAQ', href: '#faq' },
];

export const FEATURES: Feature[] = [
  {
    id: 'hours',
    title: '50 horas de Preparación.',
    description: 'Modúlos Base, Inglés y Módulos específicos de acuerdo la carrera objetivo.',
    icon: Clock,
    href: '#hours',
  },
  {
    id: 'live',
    title: 'Clases 100% en Vivo + Grabadas',
    description: 'Toma las clases en tiempo real con profesores especializados y accede a las grabaciones 24/7.',
    icon: Video,
    href: '#live',
  },
  {
    id: 'recorded',
    title: 'Simulacros Incluidos',
    description: 'Exámenes de práctica con la misma estructura y nivel de dificultad del CENEVAL real.',
    icon: Award,
    href: '#recorded',
  },
  {
    id: 'syllabus',
    title: 'Temario 100% Oficial CENEVAL',
    description: 'Cubrimos todos los temas del temario oficial actualizado del EXANI II de CENEVAL.',
    icon: BookOpen,
    href: '#syllabus',
  },
  {
    id: 'payment',
    title: 'Planes de Pago Flexibles',
    description: 'Ofrecemos opciones de pago para que puedas aseguraar tu inscripción y liquidar el monto total antes del inicio del curso.',
    icon: CreditCard,
    href: '#payment',
  },
  {
    id: 'practical',
    title: 'Método Comprobado',
    description: 'Exalumnos de nuestro curso han sido admitidos en distintas universidades públicas del país en más de 7 estados.',
    icon: Target,
    href: '#practical',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ana García M.',
    role: 'Estudiante de Medicina',
    company: 'UNAM - Facultad de Medicina',
    content: 'Logré 1,287 puntos en mi examen CENEVAL gracias al curso. Los profesores conocen perfectamente las preguntas que vienen en el examen. ¡100% recomendado!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos Hernández R.',
    role: 'Estudiante de Ingeniería',
    company: 'IPN - ESIME Zacatenco',
    content: 'En mi primer intento no pasé, pero con este curso logré el puntaje necesario. Los simulacros son idénticos al examen real, esa fue la clave.',
    rating: 5,
  },
  {
    id: '3',
    name: 'María López S.',
    role: 'Estudiante de Psicología',
    company: 'UAM Xochimilco',
    content: 'Las clases grabadas me salvaron porque trabajo medio tiempo. Pude estudiar en mis tiempos libres y logré quedar en mi primera opción. ¡Gracias!',
    rating: 5,
  },
];

export const CTA_CONFIG: CTAConfig = {
  title: '¿Listo para asegurar tu lugar en la universidad?',
  description: 'Únete a cientos de estudiantes que ya han logrado ingresar a su universidad de sueños con nuestro curso.',
  primaryButton: {
    text: 'Inicia tu Preparación Hoy',
    href: 'https://wa.me/526181316769',
  },
  secondaryButton: {
    text: 'Más Información',
    href: '#info',
  },
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/curso-pasantias',
  twitter: 'https://twitter.com/curso_pasantias',
  linkedin: 'https://linkedin.com/company/curso-pasantias',
  instagram: 'https://instagram.com/curso.pasantias',
  youtube: 'https://youtube.com/@curso-pasantias',
};

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};