import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Users, Award, Clock } from 'lucide-react';
import { Section } from '@/components/ui';
import presentationVideo from '@/assets/video/video_presentacion.mp4';

const VideoPresentation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.55 });

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    if (isInView) {
      void videoRef.current.play().catch(() => {
        // Autoplay can still be blocked by user/browser settings.
      });
      return;
    }

    videoRef.current.pause();
  }, [isInView]);

  return (
    <Section id="video-presentation" background="gray">
      <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Video Side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Video Container */}
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-auto aspect-video object-cover"
              controls
              muted
              playsInline
              preload="none"
            >
              <source src={presentationVideo} type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-rose-500 opacity-20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-slate-500 opacity-20 rounded-full blur-xl" />
          </div>

          {/* Video Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6 text-rose-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">6+ Años de experiencia</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="h-6 w-6 text-rose-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">85% Aprobación</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="h-6 w-6 text-rose-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">50 horas de preparación</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-block bg-rose-100 text-rose-600 text-sm font-medium px-4 py-2 rounded-full">
            CONOCE NUESTRO PROGRAMA
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Descubre cómo te preparamos para
            <span className="block gradient-text">el éxito en tu examen CENEVAL</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed">
            En este video conocerás nuestra metodología de enseñanza, a nuestro equipo de tutores especialistas 
            y cómo hemos ayudado a cientos de estudiantes a conseguir su lugar en la universidad.
          </p>

          {/* Features List */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Metodología Comprobada</h4>
                <p className="text-gray-600 text-sm">Sistema estructurado con resultados exitosos</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Tutores Especialistas</h4>
                <p className="text-gray-600 text-sm">Profesionales con experiencia académica</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Acompañamiento Personalizado</h4>
                <p className="text-gray-600 text-sm">Seguimiento individual y grupal durante todo el proceso</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="pt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="#features"
              className="inline-flex items-center space-x-2 bg-rose-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-rose-500 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Conoce todos los beneficios</span>
              <Play className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default VideoPresentation;