import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react';
import { CTA_CONFIG } from '@/constants';
import { scrollToElement } from '@/utils';
import { Button, Section } from '@/components/ui';

const CTA: React.FC = () => {
  return (
    <Section id="cta" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-40 w-80 h-80 bg-white opacity-5 rounded-full"
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
          className="absolute -bottom-20 -right-40 w-96 h-96 bg-white opacity-5 rounded-full"
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

      <div className="relative z-10 text-center text-white">
        {/* Main CTA Content */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            {CTA_CONFIG.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            {CTA_CONFIG.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-50 w-full sm:w-auto"
              onClick={() => scrollToElement(CTA_CONFIG.primaryButton.href)}
              icon={ArrowRight}
              iconPosition="right"
            >
              {CTA_CONFIG.primaryButton.text}
            </Button>
            
            {CTA_CONFIG.secondaryButton && (
              <Button
                variant="ghost"
                size="lg"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                onClick={() => scrollToElement(CTA_CONFIG.secondaryButton!.href)}
              >
                {CTA_CONFIG.secondaryButton.text}
              </Button>
            )}
          </div>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: Mail,
              title: 'Envíanos un Email',
              description: 'Responderemos en menos de 24 horas',
              action: 'info@curso-pasantias.com',
              href: 'mailto:info@curso-pasantias.com',
            },
            {
              icon: Phone,
              title: 'Llámanos Ahora',
              description: 'Habla directamente con un asesor',
              action: '+1 (555) 123-4567',
              href: 'tel:+15551234567',
            },
            {
              icon: Calendar,
              title: 'Agenda una Cita',
              description: 'Programa una consulta gratuita',
              action: 'Agendar ahora',
              href: '#schedule',
            },
          ].map((contact, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">
                {contact.title}
              </h3>
              
              <p className="text-primary-100 mb-4 text-sm">
                {contact.description}
              </p>
              
              <a
                href={contact.href}
                className="text-white font-semibold hover:text-primary-100 transition-colors duration-200 border-b border-white/30 hover:border-primary-100"
              >
                {contact.action}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Incentive */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">
            🎉 Oferta Especial por Tiempo Limitado
          </h3>
          <p className="text-primary-100 mb-6">
            Inscríbete antes del 31 de marzo y obtén:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              'Acceso gratuito a nuestro curso de preparación',
              'Sesión de mentoría 1:1 sin costo adicional',
              'Acceso VIP a eventos de networking',
              'Garantía de devolución del 100%',
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
          
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white"
            icon={ArrowRight}
            iconPosition="right"
          >
            Aprovechar Oferta Ahora
          </Button>
          
          <p className="text-primary-200 text-sm mt-4">
            ⏰ Solo quedan 15 cupos disponibles
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default CTA;