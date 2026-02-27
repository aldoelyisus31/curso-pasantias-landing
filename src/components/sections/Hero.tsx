import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';
import { scrollToElement } from '@/utils';
import { SITE_CONFIG } from '@/constants';
import { Button, Section } from '@/components/ui';

const Hero: React.FC = () => {
  return (
    <Section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50"
      animated={false}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 w-full pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Star className="h-4 w-4" />
            <span>Más de 95% de éxito en admisiones</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block gradient-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4">"Pasas Tú,</span>
            <span className="block gradient-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Pasamos Todos"</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Preparación completa, estructurada y acompañada para que llegues al examen de admisión CENEVAL con seguridad y estrategia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => window.open(SITE_CONFIG.whatsapp, '_blank')}
              icon={MessageCircle}
              iconPosition="left"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white"
            >
              Inicia tu Preparación Hoy
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToElement('#features')}
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Conoce Más
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { value: '50+', label: 'Horas de Preparación' },
              { value: '95%', label: 'Tasa de Éxito' },
              { value: '100%', label: 'En Vivo y Online' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;