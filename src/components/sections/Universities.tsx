import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Section } from '@/components/ui';

const Universities: React.FC = () => {
  const universities = [
    { name: 'UNAM', color: 'text-yellow-600' },
    { name: 'UDG', color: 'text-red-600' },
    { name: 'IPN', color: 'text-red-600' },
    { name: 'UANL', color: 'text-blue-600' },
    { name: 'UAEMEX', color: 'text-green-600' },
    { name: 'UV', color: 'text-blue-500' },
    { name: 'UABC', color: 'text-green-700' },
    { name: 'UADY', color: 'text-blue-700' },
  ];

  return (
    <Section id="universities" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-block bg-red-100 text-red-600 text-sm font-bold px-4 py-2 rounded-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            TU DESTINO
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Te preparamos para
            <span className="block">las mejores</span>
            <span className="block gradient-text">universidades del país</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            El examen CENEVAL EXANI-II es el filtro principal 
            para las instituciones públicas y privadas más 
            prestigiosas de México. Nuestro temario cubre 
            todos los requerimientos.
          </p>

          {/* Stats */}
          <motion.div
            className="flex items-center space-x-4 bg-orange-50 p-6 rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">+50</div>
              <div className="text-gray-600 font-medium">Universidades aplican CENEVAL</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Universities Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {universities.map((university, index) => (
              <motion.div
                key={university.name}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                {/* University Logo Placeholder */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${university.color} group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl font-black">
                    {university.name.charAt(0)}
                  </span>
                </div>
                
                {/* University Name */}
                <div className={`text-xl font-bold ${university.color} group-hover:scale-110 transition-transform duration-300`}>
                  {university.name}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Universities Indicator */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" />
              <span>Y muchas más prestigiosas universidades</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-20 bg-gradient-to-br from-primary-50 to-blue-50 p-12 rounded-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          ¿Tu universidad soñada está aquí?
        </h3>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Tenemos experiencia preparando estudiantes para todas las universidades 
          que utilizan el examen CENEVAL como filtro de admisión.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={() => window.open('https://wa.me/525512345678', '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Consultar mi Universidad
          </button>
          <button className="bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
            Ver Lista Completa
          </button>
        </div>
      </motion.div>
    </Section>
  );
};

export default Universities;