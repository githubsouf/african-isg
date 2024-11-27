import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl text-gray-600">Leading Africa's digital revolution</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              We are committed to accelerating Africa's digital transformation through innovative
              technology solutions. Our goal is to bridge the digital divide and empower businesses
              across the continent with world-class IT services.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Award className="w-6 h-6 text-primary mr-3" />
                <span>10+ Years of Excellence</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-primary mr-3" />
                <span>500+ Satisfied Clients</span>
              </div>
              <div className="flex items-center">
                <Target className="w-6 h-6 text-primary mr-3" />
                <span>25+ African Countries Served</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;