import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // Assurez-vous d'avoir installé react-parallax-tilt
import { Cloud, Code, LineChart, Globe2 } from 'lucide-react';

const services = [
  {
    title: 'Villes apprenantes',
    icon: <Cloud className="w-16 h-16 text-primary" />,
    description: "Le projet renforce les compétences des acteurs politiques et administratifs africains via une approche innovante, axée sur les ODD, le coaching territorial et l'intégration des communes africaines aux réseaux mondiaux des villes durables.",
  },
  {
    title: 'Villes intelligentes et durables',
    icon: <Code className="w-16 h-16 text-primary" />,
    description: "Mettre en place un cadre stratégique pour les territoires urbains axé sur l'économie digitale, verte et sociale, afin de favoriser leur planification, valorisation et développement.",
  },
  {
    title: 'Villages intelligents et durables',
    icon: <LineChart className="w-16 h-16 text-primary" />,
    description: "Préparer pour les communes rurales un cadre stratégique et opérationnel de projets agricoles durables et de valorisation des produits issus des terroirs qui respectent les normes sanitaires et la chaine de valeurs agricoles.",
  },
  {
    title: 'Marque de territoire',
    icon: <Globe2 className="w-16 h-16 text-primary" />,
    description: "Mettre en place un modèle de développement durable inclusif pour promouvoir l'image des territoires, en valorisant leur identité culturelle et naturelle, à travers la modernisation de l’action publique, l’animation locale et la préservation du patrimoine.",
  },
  {
    title: 'Entreprenariat social, coopérative agricole et startups',
    icon: <Globe2 className="w-16 h-16 text-primary" />,
    description: "Axe transverse vise à mettre en place un incubateur pour les jeunes cadres dans un centre de transfert de technologie intitulé «Cité des Métiers, des Compétences et de l'Innovation».",
  },
  {
    title: 'La gouvernance politique et institutionnelle',
    icon: <Globe2 className="w-16 h-16 text-primary" />,
    description: "Renforcer et moderniser le cadre institutionnel pour favoriser une décentralisation avancée et une déconcentration, afin de rapprocher les centres de décision des citoyens et assurer une mutation stratégique.",
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
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} 
      >
        <div className="bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          {}
          <div>{icon}</div>
          
          {}
          <h3 className="text-primary text-[20px] font-bold text-center">
            {title}
          </h3>

          {}
          <motion.p
            className="text-gray-600 text-sm text-center mt-4"
            initial={{ opacity: 0, maxHeight: 0 }} 
            animate={{
              opacity: hovered ? 1 : 0,
              maxHeight: hovered ? '200px' : 0, 
            }} 
            transition={{ duration: 0.3 }} 
            style={{
              overflow: 'hidden', 
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
          <h2 className="text-4xl font-bold mb-4">Domaines d'activités stratégiques</h2>
          <p className="text-xl text-gray-600">
          Les stratégies de développement en Afrique sont souvent confrontées à des défis majeurs relevant de la gouvernance empêchant une évolution vers une société intelligente. Cela nous interpelle à réagir avec des mécanismes appropriés et adaptés pour renforcer la « gouvernance intelligente en Afrique »
Cette initiative vise à transposer et partager le modèle de développement marocain dans le domaine de la gouvernance territoriales dans son aspect global.
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
