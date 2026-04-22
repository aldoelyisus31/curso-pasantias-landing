import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '@/constants';
import { Section } from '@/components/ui';

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
          <span className="block gradient-text leading-[1.15] pb-1">asegurar tu lugar en la universidad</span>
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
            <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-600 transition-colors duration-300 mx-auto">
              <feature.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Features;