import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Facebook, 
  Instagram,
  MessageCircle
} from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/constants';
import { scrollToElement } from '@/utils';
import { Container } from '@/components/ui';
import logoImage from '@/assets/images/Logo/logoTRANSPARENTE.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={logoImage}
                  alt="Logo Curso-Pasantías"
                  className="h-11 w-11 rounded-lg object-contain"
                />
                <span className="text-xl font-bold">
                  Curso-Pasantías
                </span>
              </motion.div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Impulsamos tu ingreso a la universidad con una preparación especializada para el EXANI-II, combinando estrategia, práctica y acompañamiento personalizado.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.facebook.com/search/top?q=curso-pasant%C3%ADas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/curso_pasantias_exani_ii?igsh=NXdvdnNqdnpiOWph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-pink-600 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="https://wa.me/526181316769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-green-600 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MessageCircle className="h-4 w-4" />
                </motion.a>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Navegación</h3>
              <ul className="space-y-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => scrollToElement(item.href)}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Servicios</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Convierte tu esfuerzo en resultados: prepárate para el EXANI-II con un método estratégico, clases claras y acompañamiento que sí hace la diferencia.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contacto</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 mt-0.5 text-primary-400" />
                  <a
                    href="tel:+526181316769"
                    className="hover:text-white transition-colors duration-200"
                  >
                    +52 618 131 6769
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-300">
              <span>
                © {new Date().getFullYear()} Curso-Pasantías. Todos los derechos reservados.
              </span>
            </div>
            <div className="text-sm text-gray-400">
              Hecho con ❤️ para estudiantes
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;