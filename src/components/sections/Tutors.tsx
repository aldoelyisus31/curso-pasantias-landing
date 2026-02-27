import React from 'react';
import { motion } from 'framer-motion';
import { Star, BookOpen, PenTool, Target, MessageCircle } from 'lucide-react';
import { Section } from '@/components/ui';

const Tutors: React.FC = () => {
  const tutors = [
    {
      id: 1,
      name: 'Lic. Carlos Mendoza',
      subject: 'Matemáticas',
      icon: Target,
      specialization: 'Especialista en Pensamiento Matemático',
      description: 'Más de 5 años preparando alumnos para CENEVAL con un índice de aprobación del 92%. Experto en hacer las matemáticas simples y lógicas.',
      image: '/api/placeholder/300/300', // Placeholder - reemplazar con foto real
      topTutor: true,
    },
    {
      id: 2,
      name: 'Mtra. Ana Sofía Reyes',
      subject: 'Español',
      icon: PenTool,
      specialization: 'Experta en Redacción y Comprensión Lectora',
      description: 'Maestría en Educación. Sus estrategias de lectura rápida y comprensión estructural garantizan dominar los módulos de lenguaje.',
      image: '/api/placeholder/300/300', // Placeholder - reemplazar con foto real
      topTutor: true,
    },
    {
      id: 3,
      name: 'Ing. David Torres',
      subject: 'Especialidad',
      icon: BookOpen,
      specialization: 'Coordinador de Módulos Específicos',
      description: 'Ingeniero con pasión por la enseñanza. Adapta los contenidos a tu área específica: Ciencias de la Salud, Ingenierías o Humanidades.',
      image: '/api/placeholder/300/300', // Placeholder - reemplazar con foto real
      topTutor: true,
    },
  ];

  return (
    <Section 
      id="tutors" 
      className="relative overflow-hidden bg-slate-900"
      animated={false}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-40 w-80 h-80 bg-orange-500 opacity-5 rounded-full blur-3xl"
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
          className="absolute -bottom-20 -right-40 w-96 h-96 bg-orange-500 opacity-5 rounded-full blur-3xl"
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
            className="inline-block bg-orange-500 text-white text-sm font-bold px-6 py-2 rounded-full mb-6"
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

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Nuestros profesores no solo dominan su materia, son expertos en la estructura y "trampas" del examen CENEVAL.
          </motion.p>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tutors.map((tutor, index) => (
            <motion.div
              key={tutor.id}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                {/* Placeholder for tutor image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {tutor.name.split(' ')[1]?.charAt(0) || 'T'}
                    </span>
                  </div>
                </div>
                
                {/* Top Tutor Badge */}
                {tutor.topTutor && (
                  <motion.div
                    className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Star className="h-3 w-3 fill-current" />
                    <span>Top Tutor</span>
                  </motion.div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Subject with Icon */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <tutor.icon className="h-4 w-4 text-red-600" />
                  </div>
                  <span className="text-red-600 font-semibold text-sm">{tutor.subject}</span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tutor.name}
                </h3>

                {/* Specialization */}
                <p className="text-orange-600 font-medium text-sm mb-4">
                  {tutor.specialization}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {tutor.description}
                </p>

                {/* Contact Button */}
                <button
                  onClick={() => window.open('https://wa.me/525512345678', '_blank')}
                  className="w-full bg-gray-100 hover:bg-green-500 text-gray-700 hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Contactar Tutor</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-3xl p-12 border border-orange-500/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Conoce personalmente a tu equipo de tutores
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Programa una reunión gratuita para conocer a nuestro equipo académico 
            y descubrir cómo te ayudaremos a alcanzar tu meta.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => window.open('https://wa.me/525512345678', '_blank')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Agendar Reunión Gratis</span>
            </button>
            <button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
              Ver Más Tutores
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { value: '15+', label: 'Tutores Especializados' },
              { value: '5000+', label: 'Estudiantes Preparados' },
              { value: '92%', label: 'Tasa de Aprobación' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Tutors;