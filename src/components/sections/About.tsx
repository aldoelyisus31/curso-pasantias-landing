import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target } from 'lucide-react';
import { Button, Section } from '@/components/ui';

const About: React.FC = () => {
  const achievements = [
    {
      icon: Users,
      value: '5,000+',
      label: 'Estudiantes Aprobados',
      description: 'Han logrado su lugar en la universidad',
    },
    {
      icon: Award,
      value: '50+',
      label: 'Universidades Aliadas',
      description: 'Que reconocen nuestro programa',
    },
    {
      icon: Target,
      value: '92%',
      label: 'Tasa de Aprobación',
      description: 'De nuestros estudiantes pasan el examen',
    },
    {
      icon: CheckCircle,
      value: '8+',
      label: 'Años de Experiencia',
      description: 'Preparando estudiantes para CENEVAL',
    },
  ];

  const benefits = [
    'Estrategias específicas para resolver cada tipo de pregunta CENEVAL',
    'Simulacros reales con retroalimentación personalizada',
    'Temario 100% actualizado según las últimas convocatorias',
    'Técnicas de manejo del tiempo y reducción de estrés',
    'Seguimiento individual del progreso en cada módulo',
    'Acceso a banco de preguntas exclusivo con más de 2000 ejercicios',
  ];

  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Metodología Comprobada
            <span className="block gradient-text">para el Éxito en CENEVAL</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Durante más de 8 años, hemos perfeccionado nuestra metodología 
            de preparación para el examen CENEVAL. Nuestro enfoque integral 
            combina conocimiento académico con estrategias específicas para 
            maximizar tu rendimiento en el examen.
          </p>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              onClick={() => window.open('https://wa.me/525512345678', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Conoce nuestra metodología
            </Button>
            <Button variant="secondary" size="lg">
              Ver testimonios de éxito
            </Button>
          </div>
        </motion.div>

        {/* Right Content - Stats */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-xl">
                  <achievement.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {achievement.value}
              </div>
              
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {achievement.label}
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Section - Process */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Nuestro Método de Preparación en 3 Fases
        </h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Un proceso estructurado que te lleva desde tu diagnóstico inicial 
          hasta obtener el puntaje que necesitas para tu universidad ideal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Diagnóstico',
              description: 'Evaluamos tu nivel actual en cada área y creamos un plan de estudio personalizado.',
            },
            {
              step: '02',
              title: 'Preparación',
              description: 'Dominas el contenido y desarrollas estrategias específicas para cada tipo de pregunta.',
            },
            {
              step: '03',
              title: 'Simulacros',
              description: 'Practicas en condiciones reales del examen hasta alcanzar tu puntaje objetivo.',
            },
          ].map((process, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl font-bold text-primary-100 mb-4">
                {process.step}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {process.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {process.description}
              </p>
              
              {/* Connector Line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default About;