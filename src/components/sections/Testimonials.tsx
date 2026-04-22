import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Section } from '@/components/ui';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: 'Muy buena manera de enseñar todos los temas. Estuvo muy completo y reforcé cosas que no me habían quedado claras antes.',
    },
    {
      id: 2,
      text: 'Muy buena la atención hacia los estudiantes. Me gustó bastante porque reforcé muchos conocimientos e incluso ví temas nuevos que no recuerdo haber visto antes.',
    },
    {
      id: 3,
      text: 'Muy interesante la verdad, se me hicieron muy completos y llenos de información. Excelente curso, los temas muy bien explicados con mucho material para estudiar.',
    },
    {
      id: 4,
      text: 'He quedado muy satisfecha con el curso, porque nos brindan una atención 10/10 además de que el contenido del material es muy bueno y muy útil!',
    },
    {
      id: 5,
      text: 'Excelente curso! Buen material de trabajo y los temas bien explicados, lo recomiendo. Siempre muy amables y dispuestos a ayudar.',
    },
    {
      id: 6,
      text: 'Todo el contenido muy bien preparado y explicado, te dan una asistencia prácticamente personal 24/7 y excelente atención con las dudas que te surgen.',
    },
    {
      id: 7,
      text: 'Es un excelente curso ya que te brinda una muy buena atención al igual que material. Me ayudó mucho en mi examen gracias a las clases grabadas.',
    },
    {
      id: 8,
      text: 'Magnífico curso, excelente la atención personal por parte de los tutores. Material muy completo y claro para estudiar. Sin duda lo recomiendo.',
    },
  ];

  return (
    <Section id="testimonials" background="gray">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center">
          <motion.div
            className="inline-block bg-blue-100 text-blue-600 text-sm font-bold px-6 py-2 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            TESTIMONIOS
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lo que dicen nuestros
            <span className="block gradient-text">estudiantes exitosos</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nuestros estudiantes han logrado ingresar a su universidad de sueños con nuestro curso. 
            Estas son sus experiencias reales.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-12 w-12 text-blue-500" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">
                    🎓
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ex-alumno</h4>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;