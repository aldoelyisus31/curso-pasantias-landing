import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, CreditCard, Users } from 'lucide-react';
import { Section } from '@/components/ui';

const Inscription: React.FC = () => {
  const planFeatures = [
    '50 horas de clases en vivo',
    'Módulos base, específicos e inglés',
    'Material de estudio y simuladores',
    'Acceso a clases grabadas',
    'Asesoría personalizada',
  ];

  return (
    <Section id="inscription" background="white">
      {/* Header */}
      <div className="text-center mb-16">
        {/* Badge */}
        <motion.div
          className="inline-block bg-red-100 text-red-600 text-sm font-bold px-6 py-2 rounded-full mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          INSCRIPCIONES ABIERTAS
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Tu inversión hacia el futuro
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Sabemos lo importante que es este paso. Ofrecemos una preparación de excelencia 
          con facilidades que se adaptan a ti.
        </motion.p>
      </div>

      {/* Main Content - Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column - Plan Details */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Plan Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Plan Integral CENEVAL EXANI-II
          </h3>
          
          <p className="text-gray-600 mb-8 text-lg">
            Todo incluido para tu preparación de 50 horas.
          </p>

          {/* Features List */}
          <div className="space-y-6">
            {planFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle className="h-4 w-4 text-white fill-current" />
                </div>
                <span className="text-gray-700 text-lg font-medium">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits */}
          <motion.div
            className="mt-10 p-6 bg-white rounded-2xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">
                Beneficios Adicionales Incluidos
              </h4>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Grupos reducidos (máx. 15 personas)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Certificado de participación</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Garantía de satisfacción</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Soporte técnico 24/7</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Payment Plan */}
        <motion.div
          className="lg:sticky lg:top-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Payment Plan Card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
            {/* Header */}
            <div className="text-center mb-8">
              <p className="text-gray-500 text-sm font-medium mb-2">
                Facilidades disponibles
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Plan de pagos
              </h3>
              <p className="text-gray-600">
                Pregunta por nuestras promociones
              </p>
            </div>

            {/* Payment Options */}
            <div className="space-y-4 mb-8">
              <motion.div
                className="bg-gray-50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <CreditCard className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Pago único</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Obtén 15% de descuento pagando el curso completo
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">3 pagos</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Divide tu inversión en cómodos pagos mensuales
                </p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={() => window.open('https://wa.me/525512345678', '_blank')}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-[1.02] mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              🔒 Apartar mi lugar
            </motion.button>

            {/* Start Date */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 text-sm">
                Iniciamos el <span className="font-semibold text-gray-700">sábado 28 de febrero</span>
              </p>
            </motion.div>
          </div>

          {/* Urgency Indicator */}
          <motion.div
            className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-700 font-bold text-sm">ÚLTIMOS LUGARES DISPONIBLES</span>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              </div>
              <p className="text-red-600 text-sm">
                Solo quedan <span className="font-bold">5 lugares</span> para la próxima generación
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Testimonial/Social Proof */}
      <motion.div
        className="mt-20 text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          ¿Tienes dudas sobre tu inversión?
        </h3>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Nuestros asesores académicos están listos para resolver todas tus preguntas 
          y ayudarte a elegir la mejor opción de pago para ti.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={() => window.open('https://wa.me/525512345678', '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Hablar con un Asesor
          </button>
          <button className="bg-white text-gray-700 border border-gray-300 hover:border-gray-400 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
            Ver Testimonios de Pagos
          </button>
        </div>
      </motion.div>
    </Section>
  );
};

export default Inscription;