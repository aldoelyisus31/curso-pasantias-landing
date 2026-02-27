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
  name: 'Curso CENEVAL',
  description: 'Preparación completa para el examen de admisión CENEVAL.',
  url: 'https://curso-ceneval.com',
  email: 'info@curso-ceneval.com',
  phone: '+52 (55) 1234-5678',
  address: 'Ciudad de México, México',
  whatsapp: 'https://wa.me/525512345678',
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Beneficios', href: '#features' },
  { label: 'Universidades', href: '#universities' },
  { label: 'Tutores', href: '#tutors' },
  { label: 'Inscripción', href: '#inscription' },
  { label: 'Preguntas', href: '#faq' },
];

export const FEATURES: Feature[] = [
  {
    id: 'hours',
    title: '50 Horas de Preparación',
    description: 'Divididas estratégicamente en módulos base, específicos según tu carrera e inglés.',
    icon: Clock,
    href: '#hours',
  },
  {
    id: 'live',
    title: '100% en Vivo y en Línea',
    description: 'Interactúa con tus tutores en tiempo real desde la comodidad de tu casa.',
    icon: Video,
    href: '#live',
  },
  {
    id: 'recorded',
    title: 'Clases Grabadas',
    description: 'Materiales siempre disponibles para que repases cuando lo necesites.',
    icon: Award,
    href: '#recorded',
  },
  {
    id: 'syllabus',
    title: 'Temario Desarrollado',
    description: 'Cubrimos absolutamente todos los módulos evaluados en el examen CENEVAL.',
    icon: BookOpen,
    href: '#syllabus',
  },
  {
    id: 'payment',
    title: 'Plan de Pagos',
    description: 'Opciones accesibles para que el dinero no sea un obstáculo en tu educación.',
    icon: CreditCard,
    href: '#payment',
  },
  {
    id: 'practical',
    title: 'Enfoque Práctico',
    description: 'No solo te enseñamos teoría, te damos las estrategias para resolver el examen.',
    icon: Target,
    href: '#practical',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ana García',
    role: 'Aspirante a Medicina',
    company: 'UNAM',
    content: 'Gracias al curso logré obtener el puntaje necesario para quedar en mi primera opción. Los tutores son excelentes.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos Hernández',
    role: 'Aspirante a Ingeniería',
    company: 'IPN',
    content: 'El enfoque práctico del curso me ayudó mucho. Las estrategias que enseñan realmente funcionan en el examen.',
    rating: 5,
  },
  {
    id: '3',
    name: 'María López',
    role: 'Aspirante a Psicología',
    company: 'UAM',
    content: 'Las clases grabadas fueron mi salvación. Pude repasar todo las veces que necesité antes del examen.',
    rating: 5,
  },
];

export const CTA_CONFIG: CTAConfig = {
  title: '¿Listo para asegurar tu lugar en la universidad?',
  description: 'Únete a cientos de estudiantes que ya han logrado ingresar a su universidad de sueños con nuestro curso.',
  primaryButton: {
    text: 'Inicia tu Preparación Hoy',
    href: 'https://wa.me/525512345678',
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