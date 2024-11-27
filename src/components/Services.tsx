import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code, LineChart, Globe2 } from 'lucide-react';

const services = [
  {
    icon: <Cloud className="w-12 h-12" />,
    title: 'Cloud Solutions',
    description: 'Enterprise-grade cloud infrastructure and migration services tailored for African businesses.'
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: 'Software Development',
    description: 'Custom software solutions and digital platforms built with cutting-edge technologies.'
  },
  {
    icon: <LineChart className="w-12 h-12" />,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to enhance your digital presence and reach.'
  },
  {
    icon: <Globe2 className="w-12 h-12" />,
    title: 'IT Consulting',
    description: 'Expert guidance on digital transformation and technology implementation.'
  }
];

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
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive digital solutions for Africa's future</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;