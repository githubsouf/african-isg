import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // Assurez-vous d'avoir installé react-parallax-tilt
import { Cloud, Code, LineChart, Globe2 } from 'lucide-react';

const services = [
  {
    title: 'Villes apprenantes',
    icon: <Cloud className="w-16 h-16 text-primary" />,
    description: "Strengthening human capital for political, administrative, and associative actors through an innovative approach focused on achieving the SDGs, centered around territorial coaching aimed at ensuring societal transformation. Qualifying African municipalities to integrate into the global networks of learning and sustainable cities...",
  },
  {
    title: 'Villes intelligentes et durables',
    icon: <Code className="w-16 h-16 text-primary" />,
    description: "Establishing a strategic and operational framework for urban-oriented territories, focused on the digital economy, green economy, and social and solidarity economy, enabling the planning, enhancement, and development of the territories.",
  },
  {
    title: 'Villages intelligents et durables',
    icon: <LineChart className="w-16 h-16 text-primary" />,
    description: "Preparing a strategic and operational framework for rural municipalities focused on sustainable agricultural projects and the valorization of local products that comply with health standards and the agricultural value chain.",
  },
  {
    title: 'Marque de territoire',
    icon: <Globe2 className="w-16 h-16 text-primary" />,
    description: "Establishing an integrated and inclusive sustainable development model that promotes the brand image of territories, based on the cultural identity and natural vocation of each area, through the modernization of local public action, territorial animation, and the enhancement of tangible and intangible heritage.",
  },
  {
    title: 'Entreprenariat social, coopérative agricole et startups',
    icon: <Globe2 className="w-16 h-16 text-primary" />,
    description: "The transversal focus is to establish an incubator for young professionals within a technology transfer center called 'City of Trades, Skills, and Innovation.'",
  },
  {
    title: 'La gouvernance politique et institutionnelle',
    icon: <Globe2 className="w-16 h-16 text-primary" />,
    description: "Strengthening and modernizing the institutional and political framework to promote advanced decentralization and deep deconcentration. This approach aims to ensure a major strategic transformation with the transfer of decision-making centers closer to the citizens.",
  },
];

const ServiceCard = ({ index, title, icon, description }) => {
  const [hovered, setHovered] = useState(false); 

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        initial={{ opacity: 0, x: 20 * (index % 2 === 0 ? 1 : -1) }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: index * 0.1 }}
        className="w-full p-[4px] rounded-[30px] shadow-card bg-gradient-to-r from-[#f9d322] to-[#e32b24]"
        onMouseEnter={() => setHovered(true)} // Détecte le survol
        onMouseLeave={() => setHovered(false)} // Détecte la sortie du survol
      >
        <div className="bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          {/* Icône */}
          <div>{icon}</div>
          
          {/* Titre */}
          <h3 className="text-primary text-[20px] font-bold text-center">
            {title}
          </h3>

          {/* Animation de la description avec max-height */}
          <motion.p
            className="text-gray-600 text-sm text-center mt-4"
            initial={{ opacity: 0, maxHeight: 0 }} // La description commence invisible
            animate={{
              opacity: hovered ? 1 : 0,
              maxHeight: hovered ? '200px' : 0, // Ajuste la hauteur maximale
            }} // La description devient visible et se déploie au survol
            transition={{ duration: 0.3 }} // L'animation prend 0.3 seconde
            style={{
              overflow: 'hidden', // Cache le contenu excédentaire
            }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </Tilt>
  );
};


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
            Development strategies in Africa often face major governance
            challenges preventing an evolution towards a smart society. This
            calls on us to react with appropriate and adapted mechanisms to
            strengthen “smart governance in Africa.”
          </p>
        </motion.div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
