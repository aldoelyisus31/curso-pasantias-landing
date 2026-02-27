import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FEATURES } from '@/constants';
import { Button, Section } from '@/components/ui';

const Features: React.FC = () => {
  return (
    <Section id="features" background="gray">
      <div className="text-center mb-16">
        <motion.div
          className="inline-block bg-red-100 text-red-600 text-sm font-medium px-4 py-2 rounded-full mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿POR QUÉ ELEGIRNOS?
        </motion.div>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Todo lo que necesitas para
          <span className="block gradient-text">asegurar tu lugar en la universidad</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Nuestro curso está diseñado metodológicamente para maximizar tus resultados en el EXANI-II.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-600 transition-colors duration-300">
              <feature.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {feature.description}
            </p>

            {/* CTA */}
            <Button
              variant="ghost"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              className="group-hover:text-primary-600 transition-colors duration-300"
              onClick={() => {
                // Handle feature navigation when href is available
                if (feature.href) {
                  console.log(`Navigate to ${feature.href}`);
                }
              }}
            >
              Aprender más
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ¿Listo para comenzar tu preparación?</h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Únete a cientos de estudiantes que ya han logrado su lugar 
          en la universidad con nuestro método comprobado.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            size="lg" 
            icon={ArrowRight} 
            iconPosition="right"
            onClick={() => window.open('https://wa.me/525512345678', '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Comenzar Ahora
          </Button>
          <Button variant="secondary" size="lg">
            Hablar con un Asesor
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};

export default Features;