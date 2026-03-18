import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Target } from 'lucide-react';
import { Section } from '@/components/ui';
import dianaImage from '@/assets/images/tutores/diana.webp';
import andresImage from '@/assets/images/tutores/andres.webp';
import danielImage from '@/assets/images/tutores/daniel.webp';
import leslieImage from '@/assets/images/tutores/leslie.webp';
import oscarImage from '@/assets/images/tutores/oscar.webp';
import cassandraImage from '@/assets/images/tutores/cass.webp';
import yareliImage from '@/assets/images/tutores/yareli.webp';
import miguelImage from '@/assets/images/tutores/miguel.webp';
import adrianaImage from '@/assets/images/tutores/adriana.webp';
import americaImage from '@/assets/images/tutores/ameica.webp';

const tutors = [
  {
    id: 1,
    name: 'Diana Yulissa Resendez Zepeda',
    subject: 'Premedicina II',
    icon: Target,
    specialization: 'Licenciada en Enfermería',
    description: 'Enfermera con experiencia en Hospital de la Paz y Hospital Materno Infantil. Especialista en cuidados COVID-19.',
    image: dianaImage,
  },
  {
    id: 2,
    name: 'José Andrés Estrada Aguirre',
    subject: 'Derecho e Historia',
    icon: PenTool,
    specialization: 'Lic. en Ciencias Políticas',
    description: 'Licenciado en Administración Financiera con diplomados en PNL e Imagen Pública. Puntaje CENEVAL: 945.',
    image: andresImage,
  },
  {
    id: 3,
    name: 'Daniel Armando Hernández Lemus',
    subject: 'Probabilidad y Estadística',
    icon: BookOpen,
    specialization: 'Lic. en Planificación Agropecuaria UNAM',
    description: 'Egresado Fintech Lab 2023 TEC. Analista de Inteligencia de Negocios en Grupo Elektra.',
    image: danielImage,
  },
  {
    id: 4,
    name: 'Leslie Berenice Cisneros Vázquez',
    subject: 'Literatura',
    icon: PenTool,
    specialization: 'Lic. en Educación Primaria',
    description: 'Maestra en Educación y Doctorante en Gestión Educativa. Miembro del taller literario Artepalabra.',
    image: leslieImage,
  },
  {
    id: 5,
    name: 'Oscar Geovanny Santillano García',
    subject: 'Química',
    icon: Target,
    specialization: 'Químico Biotecnólogo UJED',
    description: 'Subcampeón estatal en Olimpiadas del Conocimiento. Más de 10 años preparando estudiantes para EXANI.',
    image: oscarImage,
  },
  {
    id: 6,
    name: 'Cassandra Nahomi Reyes González',
    subject: 'Módulos Base',
    icon: BookOpen,
    specialization: 'Egresada ByCENED',
    description: 'Licenciada en Administración Financiera. Primer lugar en Maratonista Nacional de Finanzas 2024.',
    image: cassandraImage,
  },
  {
    id: 7,
    name: 'Yareli Romero Rojas',
    subject: 'Matemáticas Financieras',
    icon: Target,
    specialization: 'Lic. en Finanzas BUAP',
    description: 'MBA y Analista Financiera especializada en Planeación y Control. Certificación AMIB 2025.',
    image: yareliImage,
  },
  {
    id: 8,
    name: 'Miguel Ángel Macareno',
    subject: 'Cálculo Diferencial e Integral',
    icon: Target,
    specialization: 'Ing. Químico UNAM',
    description: 'Docente en Matemáticas UNAM. Especialista en Cálculo y Ecuaciones Diferenciales.',
    image: miguelImage,
  },
  {
    id: 9,
    name: 'Adriana Guadalupe Quiroz Reyes',
    subject: 'Premedicina I y Biología',
    icon: Target,
    specialization: 'Dra. en Ciencias UANL',
    description: 'Doctora en Biología Molecular e Ingeniería Genética. 11 artículos científicos publicados.',
    image: adrianaImage,
  },
  {
    id: 10,
    name: 'América Guadalupe Soto García',
    subject: 'Inglés',
    icon: PenTool,
    specialization: 'Lic. en Educación Primaria ByCENED',
    description: 'Certificación TKT y Posgrado en eLearning Design en Canadá. 6 artículos de investigación educativa.',
    image: americaImage,
  },
];

const Tutors: React.FC = () => {
  return (
    <Section 
      id="tutors" 
      className="relative overflow-hidden bg-slate-900"
      animated={false}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-40 w-80 h-80 bg-rose-500 opacity-5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-40 w-96 h-96 bg-rose-500 opacity-5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            className="inline-block bg-rose-600 text-white text-sm font-bold px-6 py-2 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            EQUIPO ACADÉMICO
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Aprende de los mejores tutores
          </motion.h2>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {tutors.map((tutor, index) => (
            <motion.div
              key={tutor.id}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-rose-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-slate-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
              
              {/* Image Section */}
              <div className="relative h-[300px] overflow-hidden bg-slate-100">
                <img 
                  src={tutor.image} 
                  alt={tutor.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain object-center p-2 sm:p-3 transition-transform duration-500 sm:group-hover:scale-105"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
                    filter: 'drop-shadow(0 8px 16px rgba(15, 23, 42, 0.15))',
                  }}
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                
                {/* Fallback placeholder */}
                <div className="hidden w-full h-full bg-gradient-to-br from-rose-200 to-slate-200 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-slate-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-white">
                      {tutor.name.split(' ')[0]?.charAt(0) || 'T'}
                    </span>
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Subject badge - floating */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-5 h-5 bg-gradient-to-r from-rose-500 to-slate-600 rounded-full flex items-center justify-center">
                    <tutor.icon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-white font-semibold text-xs">{tutor.subject}</span>
                </div>

                {/* Specialization badge - floating */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-3 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  <p className="text-white font-bold text-sm text-center">
                    {tutor.specialization}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 relative">
                {/* Decorative element */}
                <div className="absolute -top-3 left-6 w-4 h-4 bg-gradient-to-r from-rose-500 to-slate-600 rounded-full shadow-lg transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100" />
                
                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                  {tutor.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-gray-100 text-sm leading-relaxed mb-4 transition-colors duration-300">
                  {tutor.description}
                </p>

                {/* Rating dots */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-gradient-to-r from-rose-400 to-slate-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ animationDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Simplified background pattern */}
                <div className="absolute inset-0 opacity-3 group-hover:opacity-5 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-500 to-slate-600 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
                </div>
              </div>

              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Tutors;