import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = "526181316769";
  const whatsappMessage = "Hola! Quisiera inscribirme al curso de preparación para CENEVAL que inicia el 28 de febrero.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Parallax Image */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop")' }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            <span className="block text-rose-500 mb-2">Pasas tú,</span>
            Pasamos todos.
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Preparación <span className="font-semibold text-white">completa, estructurada y acompañada</span> para que llegues al examen de admisión CENEVAL con seguridad y estrategia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-rose-500 transition-all duration-300 shadow-[0_0_40px_rgba(225,29,72,0.4)] hover:shadow-[0_0_60px_rgba(225,29,72,0.6)]"
            >
              Inicia tu preparación hoy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-rose-600/20 rounded-full blur-3xl filter mix-blend-screen" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl filter mix-blend-screen" />
    </section>
  );
}