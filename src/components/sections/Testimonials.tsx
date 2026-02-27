import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';
import { getInitials } from '@/utils';
import { Button, Section } from '@/components/ui';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <Section id="testimonials" background="gray">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Lo que dicen nuestros
          <span className="block gradient-text">Estudiantes</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Miles de estudiantes han transformado sus carreras con nuestro programa. 
          Estas son algunas de sus historias de éxito.
        </motion.p>
      </div>

      {/* Main Testimonial Slider */}
      <div className="relative max-w-4xl mx-auto mb-16">
        <div className="relative h-96 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 h-full flex flex-col justify-center relative">
                {/* Quote Icon */}
                <Quote className="h-12 w-12 text-primary-200 absolute top-8 left-8" />

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < (TESTIMONIALS[currentIndex].rating || 5)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8 italic">
                  "{TESTIMONIALS[currentIndex].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {TESTIMONIALS[currentIndex].avatar ? (
                      <img
                        src={TESTIMONIALS[currentIndex].avatar}
                        alt={TESTIMONIALS[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      getInitials(TESTIMONIALS[currentIndex].name)
                    )}
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 text-lg">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {TESTIMONIALS[currentIndex].role}
                    </p>
                    {TESTIMONIALS[currentIndex].company && (
                      <p className="text-gray-500 text-sm">
                        {TESTIMONIALS[currentIndex].company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-colors duration-200 z-10"
            aria-label="Testimonial anterior"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-colors duration-200 z-10"
            aria-label="Siguiente testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
              aria-label={`Ver testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* All Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer transition-all duration-300 ${
              index === currentIndex
                ? 'ring-2 ring-primary-500 transform scale-105'
                : 'hover:shadow-xl'
            }`}
            onClick={() => goToTestimonial(index)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {/* Rating */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < (testimonial.rating || 5)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Content */}
            <p className="text-gray-700 mb-4 text-sm line-clamp-3">
              "{testimonial.content}"
            </p>

            {/* Author */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  getInitials(testimonial.name)
                )}
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 text-sm">
                  {testimonial.name}
                </h5>
                <p className="text-gray-600 text-xs">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ¿Quieres ser el próximo en tener una historia de éxito?
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Únete a nuestra comunidad de estudiantes exitosos y comienza a 
          escribir tu propia historia de transformación profesional.
        </p>
        <Button size="lg">
          Comenzar mi historia
        </Button>
      </motion.div>
    </Section>
  );
};

export default Testimonials;