import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // Assurez-vous d'avoir installé react-parallax-tilt
import { Cloud, Code, LineChart, Globe2 } from 'lucide-react';

const services = [
  {
    title: 'Villes apprenantes',
    icon: <Cloud className="w-16 h-16 text-primary" />,
  },
  {
    title: 'Villes intelligentes et durables',
    icon: <Code className="w-16 h-16 text-primary" />,
  },
  {
    title: 'Villages intelligents et durables',
    icon: <LineChart className="w-16 h-16 text-primary" />,
  },
  {
    title: 'Marque de territoire',
    icon: <Globe2 className="w-16 h-16 text-primary" />,
  },
  {
    title: 'Entreprenariat social, coopérative agricole et startups',
    icon: <Globe2 className="w-16 h-16 text-primary" />,
  },
  {
    title: 'La gouvernance politique et institutionnelle',
    icon: <Globe2 className="w-16 h-16 text-primary" />,
  },
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      initial={{ opacity: 0, x: 20 * (index % 2 === 0 ? 1 : -1) }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: index * 0.1 }}
      // Utilisation de Tailwind pour le dégradé
      className="w-full p-[4px] rounded-[30px] shadow-card bg-gradient-to-r from-[#f9d322] to-[#e32b24]"
    >
      <div className="bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <div>{icon}</div>
        <h3 className="text-primary text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Strategic areas of activity</h2>
          <p className="text-xl text-gray-600">
            Development strategies in Africa often face major governance challenges preventing an evolution towards a smart society. This calls on us to react with appropriate and
            adapted mechanisms to strengthen “smart governance in Africa.”
          </p>
        </motion.div>

        {/* Grille ajustée pour afficher 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
