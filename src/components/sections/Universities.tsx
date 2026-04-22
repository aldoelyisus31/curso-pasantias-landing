import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { Section } from '@/components/ui';

const Universities: React.FC = () => {
  const regions = [
    {
      id: 1,
      name: 'NOROESTE',
      states: 'Baja California, Baja California Sur, Chihuahua, Sinaloa y Sonora',
      featuredUniversities: ['Universidad Autónoma de Chihuahua', 'Universidad Autónoma de Sinaloa', 'Universidad de Sonora'],
      totalUniversities: 15,
      universities: [
        'Escuela Normal Rural Ricardo Flores Magón', 'Escuela Normal Superior', 'Escuela Normal Superior del Estado de Baja California Sur',
        'Instituto Tecnológico de Culiacán', 'Universidad Autónoma de Baja California Sur', 'Universidad Autónoma de Chihuahua',
        'Universidad Autónoma de Occidente', 'Universidad Autónoma de Sinaloa', 'Universidad de Sonora',
        'Universidad Politécnica de Sinaloa', 'Universidad Tecnológica de Chihuahua', 'Universidad Tecnológica de Ciudad Juárez',
        'Universidad Tecnológica de Escuinapa', 'Universidad Tecnológica de San Luis Río Colorado', 'Universidad Tecnológica del Sur de Sonora'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      name: 'NORESTE',
      states: 'Coahuila, Durango, Nuevo León, San Luis Potosí y Tamaulipas',
      featuredUniversities: ['UANL', 'Universidad Autónoma de Tamaulipas', 'Universidad Juárez del Estado de Durango'],
      totalUniversities: 52,
      universities: [
        'Universidad Autónoma de Nuevo León', 'Universidad Autónoma de Tamaulipas', 'Universidad Juárez del Estado de Durango',
        'Universidad Autónoma Agraria Antonio Narro', 'Benemérita Escuela Federalizada de Tamaulipas', 'Benemérita Escuela Normal de Coahuila',
        'Centro Regional de Educación Normal', 'Escuela Normal Pablo Livas', 'Universidad Politécnica de Altamira',
        'Universidad Tecnológica de Durango', 'Universidad Tecnológica de Matamoros', 'Universidad Intercultural de San Luis Potosí'
      ],
      color: 'from-rose-500 to-red-600'
    },
    {
      id: 3,
      name: 'CENTRO',
      states: 'Estado de México, Guerrero, Hidalgo, Morelos, Puebla y Tlaxcala',
      featuredUniversities: ['Universidad Autónoma del Estado de México', 'Universidad Autónoma de Guerrero', 'Universidad Autónoma de Tlaxcala'],
      totalUniversities: 45,
      universities: [
        'Universidad Autónoma del Estado de México', 'Universidad Autónoma de Guerrero', 'Universidad Autónoma de Tlaxcala',
        'Universidad Autónoma del Estado de Morelos', 'Centro de Investigación y Docencia Económicas, A.C.', 'El Colegio de México, A.C.',
        'Universidad del Ejército y Fuerza Aérea', 'Universidad Politécnica de Puebla', 'Universidad Politécnica de Tlaxcala',
        'Universidad Tecnológica de la Huasteca Hidalguense', 'Instituto Tecnológico de Toluca', 'Escuela Normal Regional de la Montaña'
      ],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 4,
      name: 'BAJÍO',
      states: 'Aguascalientes, Colima, Guanajuato, Jalisco, Michoacán, Nayarit, Querétaro y Zacatecas',
      featuredUniversities: ['Universidad Autónoma de Nayarit', 'Universidad Autónoma de Zacatecas', 'Universidad de Colima'],
      totalUniversities: 31,
      universities: [
        'Universidad Autónoma de Aguascalientes', 'Universidad Autónoma de Nayarit', 'Universidad Autónoma de Zacatecas',
        'Universidad de Colima', 'Universidad de la Ciénaga del Estado de Michoacán de Ocampo', 'Universidad Michoacana de San Nicolás Hidalgo',
        'Benemérita Escuela Normal Manuel Ávila Camacho', 'Universidad Politécnica de Aguascalientes', 'Universidad Politécnica de Querétaro',
        'Universidad Tecnológica de Nayarit', 'Universidad Tecnológica del Estado de Zacatecas', 'Colegio del Aire'
      ],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 5,
      name: 'SURESTE',
      states: 'Campeche, Chiapas, Oaxaca, Quintana Roo, Tabasco, Veracruz y Yucatán',
      featuredUniversities: ['Universidad Juárez Autónoma de Tabasco', 'Universidad Autónoma de Yucatán', 'Universidad Autónoma Benito Juárez de Oaxaca'],
      totalUniversities: 60,
      universities: [
        'Universidad Juárez Autónoma de Tabasco', 'Universidad Autónoma de Yucatán', 'Universidad Autónoma de Campeche',
        'Universidad Autónoma del Carmen', 'Universidad de Oriente', 'Universidad de Quintana Roo',
        'Universidad del Caribe', 'Universidad Intercultural de la Zona Maya', 'Benemérita Escuela Normal Veracruzana Enrique C. Rébsamen',
        'Universidad Tecnológica de Campeche', 'Universidad Tecnológica de Tabasco', 'Heroica Escuela Naval Militar',
        'Universidad Autónoma de Chiapas', 'Universidad Autónoma Benito Juárez de Oaxaca', 'Universidad de la Sierra Sur',
        'Universidad Tecnológica de la Mixteca', 'Universidad Tecnológica de los Valles Centrales de Oaxaca',
        'Universidad Intercultural de Chiapas', 'Escuela Normal Rural Mactumactzá', 'Universidad Politécnica de Chiapas'
      ],
      color: 'from-orange-500 to-amber-600'
    }
  ];

  return (
    <Section id="universities" background="white">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center">
          <motion.div
            className="inline-block bg-rose-100 text-rose-600 text-sm font-bold px-4 py-2 rounded-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            TU DESTINO
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Te preparamos para las mejores
            <span className="block gradient-text">universidades del país</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            El examen CENEVAL EXANI-II es utilizado por cerca de 200 universidades en México como parte de su proceso de admisión. Nuestro curso prepara a los estudiantes para enfrentar este examen con las estrategias y prácticas necesarias.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex items-center justify-center space-x-4 bg-rose-50 p-6 rounded-2xl inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600">+200</div>
              <div className="text-gray-600 font-medium">Universidades que aplican CENEVAL</div>
            </div>
          </motion.div>
        </div>

        {/* Regions Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={region.id}
              className="group perspective-1000 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-80">
                {/* Front Side */}
                <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${region.color} rounded-2xl shadow-lg p-6 text-white overflow-hidden transition-all duration-700 group-hover:opacity-0 group-hover:invisible`}>
                  {/* Map Background Pattern */}
                  <div className="absolute inset-0 opacity-8">
                    {/* Region-specific state outlines */}
                    <svg className="absolute top-2 right-2 w-24 h-20" viewBox="0 0 120 100" fill="none">
                      {/* NOROESTE: Baja California, Baja California Sur, Chihuahua, Sinaloa, Sonora */}
                      {region.name === 'NOROESTE' && (
                        <g fill="white" fillOpacity="0.15" stroke="white" strokeWidth="0.5" strokeOpacity="0.3">
                          {/* Baja California */}
                          <path d="M5,20 L8,15 L10,25 L15,45 L12,60 L8,55 L5,40 Z" />
                          {/* Baja California Sur */}
                          <path d="M8,65 L12,70 L15,85 L12,95 L8,90 L6,80 Z" />
                          {/* Sonora */}
                          <path d="M15,15 L35,12 L40,25 L38,40 L25,45 L15,35 Z" />
                          {/* Sinaloa */}
                          <path d="M25,45 L38,42 L40,55 L35,70 L25,65 L20,50 Z" />
                          {/* Chihuahua */}
                          <path d="M40,10 L65,8 L70,25 L68,45 L55,48 L40,40 Z" />
                        </g>
                      )}
                      
                      {/* NORESTE: Coahuila, Durango, Nuevo León, San Luis Potosí, Tamaulipas */}
                      {region.name === 'NORESTE' && (
                        <g fill="white" fillOpacity="0.15" stroke="white" strokeWidth="0.5" strokeOpacity="0.3">
                          {/* Coahuila */}
                          <path d="M15,15 L45,12 L50,30 L45,45 L25,48 L15,35 Z" />
                          {/* Nuevo León */}
                          <path d="M50,25 L65,22 L70,35 L65,50 L50,48 L45,35 Z" />
                          {/* Tamaulipas */}
                          <path d="M70,20 L90,18 L95,40 L90,55 L70,52 L65,35 Z" />
                          {/* Durango */}
                          <path d="M10,50 L35,48 L40,65 L35,80 L15,78 L10,65 Z" />
                          {/* San Luis Potosí */}
                          <path d="M40,55 L65,52 L70,70 L65,85 L45,82 L40,70 Z" />
                        </g>
                      )}

                      {/* CENTRO: Estado de México, Guerrero, Hidalgo, Morelos, Puebla, Tlaxcala */}
                      {region.name === 'CENTRO' && (
                        <g fill="white" fillOpacity="0.15" stroke="white" strokeWidth="0.5" strokeOpacity="0.3">
                          {/* Hidalgo */}
                          <path d="M35,20 L55,18 L60,30 L55,40 L40,42 L35,32 Z" />
                          {/* Tlaxcala */}
                          <path d="M60,25 L70,23 L72,35 L68,42 L60,40 Z" />
                          {/* Puebla */}
                          <path d="M55,40 L75,38 L80,55 L75,70 L60,68 L55,55 Z" />
                          {/* Estado de México */}
                          <path d="M25,35 L50,32 L55,50 L50,65 L30,67 L25,50 Z" />
                          {/* Morelos */}
                          <path d="M40,65 L55,63 L58,75 L52,80 L40,78 Z" />
                          {/* Guerrero */}
                          <path d="M20,70 L50,68 L55,85 L45,95 L25,92 L20,80 Z" />
                        </g>
                      )}

                      {/* BAJÍO: Aguascalientes, Colima, Guanajuato, Jalisco, Michoacán, Nayarit, Querétaro, Zacatecas */}
                      {region.name === 'BAJÍO' && (
                        <g fill="white" fillOpacity="0.15" stroke="white" strokeWidth="0.5" strokeOpacity="0.3">
                          {/* Zacatecas */}
                          <path d="M20,15 L45,12 L50,25 L45,40 L25,42 L20,30 Z" />
                          {/* Aguascalientes */}
                          <path d="M40,35 L50,33 L52,42 L48,48 L40,46 Z" />
                          {/* Nayarit */}
                          <path d="M10,40 L25,38 L30,55 L25,70 L15,68 L10,55 Z" />
                          {/* Jalisco */}
                          <path d="M25,45 L50,42 L55,60 L50,75 L30,78 L25,65 Z" />
                          {/* Guanajuato */}
                          <path d="M50,40 L70,38 L75,50 L70,62 L55,60 L50,50 Z" />
                          {/* Querétaro */}
                          <path d="M70,45 L85,43 L88,55 L83,65 L75,63 L70,55 Z" />
                          {/* Michoacán */}
                          <path d="M25,75 L55,72 L60,85 L50,95 L30,92 L25,85 Z" />
                          {/* Colima */}
                          <path d="M35,85 L45,83 L48,92 L43,97 L35,95 Z" />
                        </g>
                      )}

                      {/* SURESTE: Campeche, Chiapas, Oaxaca, Quintana Roo, Tabasco, Veracruz, Yucatán */}
                      {region.name === 'SURESTE' && (
                        <g fill="white" fillOpacity="0.15" stroke="white" strokeWidth="0.5" strokeOpacity="0.3">
                          {/* Veracruz */}
                          <path d="M15,20 L35,18 L40,45 L35,75 L20,78 L15,50 Z" />
                          {/* Tabasco */}
                          <path d="M35,65 L55,63 L60,75 L55,85 L40,83 L35,75 Z" />
                          {/* Campeche */}
                          <path d="M55,55 L75,53 L80,70 L75,80 L60,78 L55,68 Z" />
                          {/* Yucatán */}
                          <path d="M75,45 L95,43 L100,55 L95,65 L80,63 L75,55 Z" />
                          {/* Quintana Roo */}
                          <path d="M95,55 L105,53 L108,70 L103,80 L95,78 L95,65 Z" />
                          {/* Chiapas */}
                          <path d="M25,75 L45,73 L50,85 L45,95 L30,92 L25,85 Z" />
                          {/* Oaxaca */}
                          <path d="M40,80 L70,78 L75,92 L65,98 L45,95 L40,88 Z" />
                        </g>
                      )}

                      {/* Region highlight dot */}
                      <circle cx="60" cy="50" r="3" fill="white" fillOpacity="0.5" />
                    </svg>
                    
                    {/* Geographic pattern elements */}
                    <div className="absolute bottom-6 left-4 w-12 h-8 border border-white/15 rounded-md">
                      <div className="w-full h-full bg-white/5 rounded-md flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Geometric state divisions */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/10"></div>
                    <div className="absolute left-2/3 top-0 w-px h-full bg-white/10"></div>
                    
                    {/* Dots representing states/cities */}
                    {Array.from({ length: Math.min(Math.floor(region.totalUniversities / 12), 4) }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        style={{
                          left: `${15 + i * 18}%`,
                          top: `${25 + i * 12}%`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span className="text-sm font-medium opacity-90">REGIÓN</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{region.totalUniversities}</div>
                      <div className="text-xs opacity-75">Universidades</div>
                    </div>
                  </div>

                  {/* Region Name */}
                  <h3 className="text-2xl font-bold mb-2 relative z-10">{region.name}</h3>
                  
                  {/* States */}
                  <p className="text-sm opacity-90 mb-6 leading-relaxed relative z-10">{region.states}</p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg p-6 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-700">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900">{region.name}</h4>
                    <span className="text-sm text-gray-500">{region.totalUniversities} universidades</span>
                  </div>

                  {/* Universities List */}
                  <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                    {region.universities.map((university, idx) => (
                      <div 
                        key={idx}
                        className="text-xs p-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        • {university}
                      </div>
                    ))}
                  </div>

                  {/* Additional Universities Note */}
                  <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-500 text-center">
                    <div className="bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent font-medium">
                      ¡Y muchas más!
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Universities;