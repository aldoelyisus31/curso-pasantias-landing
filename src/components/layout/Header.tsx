import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks';
import { scrollToElement, cn } from '@/utils';
import { NAVIGATION_ITEMS } from '@/constants';
import { Container } from '@/components/ui';
import logoTransparent from '@/assets/images/Logo/logoTRANSPARENTE.png';
import logoWithBackground from '@/assets/images/Logo/Curso-PasantíasFONDO.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScrollPosition();

  const isScrolled = scrollY > 20;
  const currentLogo = isScrolled ? logoTransparent : logoWithBackground;

  const handleNavClick = (href: string) => {
    scrollToElement(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <div className="relative flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={currentLogo}
              alt="Logo Curso CENEVAL"
              className="h-11 w-11 rounded-lg object-contain shadow-md"
            />
            <div className="flex flex-col">
              <span
                className={cn(
                  'text-xl lg:text-2xl font-bold leading-tight transition-colors duration-300',
                  isScrolled ? 'text-gray-900' : 'text-white'
                )}
              >
                Curso-Pasantias
              </span>
              <span
                className={cn(
                  'text-xs font-medium -mt-1 transition-colors duration-300',
                  isScrolled ? 'text-gray-600' : 'text-white/85'
                )}
              >
                Pasas tu, pasamos todos.
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {NAVIGATION_ITEMS.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'font-medium transition-colors duration-200',
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white/90 hover:text-white'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'lg:hidden p-2 transition-colors duration-200',
              isScrolled
                ? 'text-gray-700 hover:text-primary-600'
                : 'text-white hover:text-white/80'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                {NAVIGATION_ITEMS.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
};

export default Header;