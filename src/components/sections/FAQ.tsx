import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { Section } from '@/components/ui';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // Primera pregunta abierta por defecto

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqItems = [
    {
      question: '¿Qué es el examen CENEVAL EXANI-II?',
      answer: 'El EXANI-II es un examen de admisión utilizado por la gran mayoría de las universidades públicas e institutos tecnológicos en México para evaluar las competencias académicas de los aspirantes.',
    },
    {
      question: '¿Cuándo inician las clases?',
      answer: 'Nuestro próximo grupo inicia el sábado 28 de febrero. Las clases se imparten los fines de semana para que puedas estudiar sin interrumpir tus actividades actuales.',
    },
    {
      question: '¿Si falto a una clase en vivo, la puedo reponer?',
      answer: '¡Sí! Todas nuestras clases 100% en vivo quedan grabadas en nuestra plataforma. Podrás acceder a ellas y a los materiales de apoyo en cualquier momento para repasar.',
    },
    {
      question: '¿Me preparan para mi carrera en específico?',
      answer: 'El curso de 50 horas está dividido estratégicamente. Cubrimos los módulos base (que aplican para todos), los módulos específicos correspondientes a la carrera que deseas ingresar, y el módulo de inglés.',
    },
    {
      question: '¿Cómo funcionan los planes de pago?',
      answer: 'Ofrecemos flexibilidad para que puedas prepararte sin preocupaciones. Escríbenos por WhatsApp al 618 131 67 69 y un asesor te brindará todas las opciones de pago diferido disponibles.',
    },
    {
      question: '¿Qué incluye el material de estudio?',
      answer: 'Recibes guías de estudio actualizadas, simuladores de examen, banco de más de 2000 preguntas, videos explicativos y acceso a nuestra plataforma digital las 24 horas.',
    },
    {
      question: '¿Cuántos estudiantes hay por grupo?',
      answer: 'Mantenemos grupos reducidos de máximo 15 estudiantes para garantizar atención personalizada y que todos puedan participar activamente en las clases.',
    },
    {
      question: '¿Qué pasa si no paso el examen?',
      answer: 'Ofrecemos garantía de satisfacción. Si sigues nuestro programa completo y no obtienes el puntaje necesario, te damos un curso de refuerzo sin costo adicional.',
    },
  ];

  return (
    <Section id="faq" background="white">
      {/* Header */}
      <div className="text-center mb-16">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Preguntas Frecuentes
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Resolvemos tus dudas para que inicies con toda la seguridad.
        </motion.p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Question - Always Visible */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                
                <motion.div
                  animate={{ rotate: openItems.has(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openItems.has(index) ? (
                    <ChevronUp className="h-6 w-6 text-red-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  )}
                </motion.div>
              </button>

              {/* Answer - Expandable */}
              <AnimatePresence>
                {openItems.has(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-gray-600 leading-relaxed"
                      >
                        {item.answer}
                      </motion.p>

                      {/* Special CTA for payment question */}
                      {index === 4 && (
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="mt-4"
                        >
                          <button
                            onClick={() => window.open('https://wa.me/525512345678', '_blank')}
                            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span>Preguntar por WhatsApp</span>
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-16 text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          ¿No encontraste la respuesta que buscabas?
        </h3>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Nuestro equipo de asesores académicos está disponible para resolver 
          cualquier duda específica sobre el programa, métodos de pago o tu preparación.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={() => window.open('https://wa.me/525512345678', '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Contactar Asesor</span>
          </button>
          <button 
            onClick={() => window.open('tel:+526181316769', '_blank')}
            className="bg-white text-gray-700 border border-gray-300 hover:border-gray-400 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
          >
            Llamar al 618 131 67 69
          </button>
        </div>

        {/* Additional Contact Info */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">📧</div>
            <div className="text-gray-600 font-medium">Email</div>
            <div className="text-gray-500 text-sm">info@curso-ceneval.com</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">⏰</div>
            <div className="text-gray-600 font-medium">Horario de atención</div>
            <div className="text-gray-500 text-sm">Lun - Sab: 8:00 AM - 8:00 PM</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">⚡</div>
            <div className="text-gray-600 font-medium">Respuesta</div>
            <div className="text-gray-500 text-sm">Menos de 30 minutos</div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default FAQ;