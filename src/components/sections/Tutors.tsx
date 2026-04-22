import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Target } from 'lucide-react';
import { Section } from '@/components/ui';
// import dianaImage from '@/assets/images/tutores/diana.webp';
// import andresImage from '@/assets/images/tutores/andres.webp';
// import danielImage from '@/assets/images/tutores/daniel.webp';
// import leslieImage from '@/assets/images/tutores/leslie.webp';
// import oscarImage from '@/assets/images/tutores/oscar.webp';
// import cassandraImage from '@/assets/images/tutores/cass.webp';
// import yareliImage from '@/assets/images/tutores/yareli.webp';
// import miguelImage from '@/assets/images/tutores/miguel.webp';
// import adrianaImage from '@/assets/images/tutores/adriana.webp';
// import americaImage from '@/assets/images/tutores/ameica.webp';

const tutors = [
  {
    id: 1,
    name: 'Diana Yulissa Resendez Zepeda',
    subject: 'Premedicina II',
    icon: Target,
    specialization: 'Licenciada en Enfermería',
    description: 'Enfermera con experiencia en Hospital de la Paz y Hospital Materno Infantil. Enfermera brigadista SARS-CoV-2.',
    // image: dianaImage,
  },
  {
    id: 2,
    name: 'José Andrés Estrada Aguirre',
    subject: 'Derecho e Historia',
    icon: PenTool,
    specialization: 'Lic. en Ciencias Políticas',
    description: 'Licenciado en Ciencias Políticas. Certificación en Consultoría Política. Diplomados en PNL e Imagen Pública.',
    // image: andresImage,
  },
  {
    id: 3,
    name: 'Daniel Armando Hernández Lemus',
    subject: 'Probabilidad y Estadística',
    icon: BookOpen,
    specialization: 'Lic. en Planificación para el Desarrollo Agropecuario',
    description: 'Egresado Fintech Lab 2023 TEC. Analista de Inteligencia de Negocios en Grupo Elektra.',
    // image: danielImage,
  },
  {
    id: 4,
    name: 'Leslie Berenice Cisneros Vázquez',
    subject: 'Literatura',
    icon: PenTool,
    specialization: 'Lic. en Educación Primaria',
    description: 'Maestra en Educación y Doctorante en Gestión Educativa. Miembro del taller literario Artepalabra.',
    // image: leslieImage,
  },
  {
    id: 5,
    name: 'Oscar Geovanny Santillano García',
    subject: 'Química',
    icon: Target,
    specialization: 'Químico Biotecnólogo',
    description: 'Subcampeón estatal en Olimpiadas del Conocimiento. Más de 10 años preparando estudiantes para EXANI.',
    // image: oscarImage,
  },
  {
    id: 6,
    name: 'Cassandra Nahomi Reyes González',
    subject: 'Módulos Base',
    icon: BookOpen,
    specialization: 'Lic. en Administración Financiera',
    description: 'Lic. en Administración Financiera. Primer lugar en Maratón Nacional de Finanzas 2024.',
    // image: cassandraImage,
  },
  {
    id: 7,
    name: 'Yareli Romero Rojas',
    subject: 'Matemáticas Financieras',
    icon: Target,
    specialization: 'Lic. en Finanzas',
    description: 'MBA y Analista Financiera especializada en Planeación y Control. Certificación AMIB 2025.',
    // image: yareliImage,
  },
  {
    id: 8,
    name: 'Miguel Ángel Macareno',
    subject: 'Cálculo Diferencial e Integral',
    icon: Target,
    specialization: 'Ing. Químico',
    description: 'Docente en Matemáticas. Especialista en Cálculo y Ecuaciones Diferenciales.',
    // image: miguelImage,
  },
  {
    id: 9,
    name: 'Adriana Guadalupe Quiroz Reyes',
    subject: 'Premedicina I y Biología',
    icon: Target,
    specialization: 'Dra. en Ciencias',
    description: 'Doctora en Biología Molecular e Ingeniería Genética. 11 artículos científicos publicados.',
    // image: adrianaImage,
  },
  {
    id: 10,
    name: 'América Guadalupe Soto García',
    subject: 'Inglés',
    icon: PenTool,
    specialization: 'Lic. en Educación Primaria',
    description: 'Certificación TKT y Posgrado en eLearning Design en Canadá. 6 artículos de investigación educativa.',
    // image: americaImage,
  },
  {
    id: 11,
    name: 'María de la Luz Alemán Ceniceros',
    subject: 'Educación y Ciencias Cognitivas',
    icon: BookOpen,
    specialization: 'Lic. en Educación con mención honorífica',
    description: 'Miembro del Instituto de Filosofía Durango. Asesora y capacitadora docente. Maestrante en Ciencias Cognitivas (Antropología, Epistemología y Filosofía de la mente, Psicología cognitiva y Cognición social).',
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
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
              className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100 hover:border-orange-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {/* Decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-slate-600 rounded-2xl opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
              
              {/* Content Section */}
              <div className="p-8 relative h-full flex flex-col justify-between min-h-[320px]">
                <div>
                  {/* Header with Icon and Subject */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center lg:group-hover:bg-white/20 transition-colors duration-300 border border-rose-100 lg:group-hover:border-white/30 shrink-0">
                      <tutor.icon className="h-6 w-6 text-rose-500 lg:group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-600 font-semibold text-sm lg:group-hover:text-white transition-colors duration-300">
                      {tutor.subject}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 lg:group-hover:text-white transition-colors duration-300">
                    {tutor.name}
                  </h3>

                  {/* Specialization */}
                  <p className="text-rose-600 font-semibold text-sm mb-4 lg:group-hover:text-rose-200 transition-colors duration-300">
                    {tutor.specialization}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed text-justify lg:group-hover:text-gray-100 transition-colors duration-300">
                    {tutor.description}
                  </p>
                </div>

                {/* Rating dots */}
                <div className="flex items-center space-x-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-gradient-to-r from-rose-400 to-slate-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ animationDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Simplified background pattern */}
                <div className="absolute inset-0 opacity-3 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-3xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-500 to-slate-600 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
                </div>
              </div>

              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Tutors;