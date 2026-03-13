import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube 
} from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS, NAVIGATION_ITEMS } from '@/constants';
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
                  alt="Logo Curso CENEVAL"
                  className="h-11 w-11 rounded-lg object-contain"
                />
                <span className="text-xl font-bold">
                  {SITE_CONFIG.name}
                </span>
              </motion.div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Preparamos a estudiantes para el éxito profesional a través de 
                pasantías de calidad y mentorías especializadas.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: SOCIAL_LINKS.facebook },
                  { icon: Twitter, href: SOCIAL_LINKS.twitter },
                  { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                  { icon: Instagram, href: SOCIAL_LINKS.instagram },
                  { icon: Youtube, href: SOCIAL_LINKS.youtube },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
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
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Mentoría Personalizada</li>
                <li>Búsqueda de Pasantías</li>
                <li>Preparación para Entrevistas</li>
                <li>Desarrollo de CV</li>
                <li>Networking Profesional</li>
                <li>Certificación</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contacto</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 mt-0.5 text-primary-400" />
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary-400" />
                  <span>{SITE_CONFIG.address}</span>
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
                © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados.
              </span>
              <div className="flex space-x-6">
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacidad
                </a>
                <a
                  href="/terms"
                  className="hover:text-white transition-colors duration-200"
                >
                  Términos
                </a>
                <a
                  href="/cookies"
                  className="hover:text-white transition-colors duration-200"
                >
                  Cookies
                </a>
              </div>
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