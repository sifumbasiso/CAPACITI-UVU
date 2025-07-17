import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Briefcase, GraduationCap, Globe, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <img 
            src="/capaciti-logo.svg"
            alt="Capaciti Logo"
            className="h-20 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-[#275D38] mb-4">About UVU Capaciti</h1>
          <p className="text-xl text-gray-600">
            Empowering Africa's youth through digital skills development
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To be Africa's leading digital skills development program, creating a new generation 
              of tech professionals who drive innovation and economic growth across the continent.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              UVU Capaciti is dedicated to bridging the digital skills gap in Africa by providing 
              high-quality, industry-relevant training to young people. Our goal is to create 
              sustainable employment opportunities in the technology sector and contribute to 
              Africa's digital transformation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-8 h-8 text-[#275D38] mb-3" />
              <h3 className="font-semibold mb-2">Quality Education</h3>
              <p className="text-sm text-gray-600">Industry-aligned curriculum and experienced mentors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-8 h-8 text-[#275D38] mb-3" />
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-gray-600">Strong network of learners and professionals</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Briefcase className="w-8 h-8 text-[#275D38] mb-3" />
              <h3 className="font-semibold mb-2">Career Support</h3>
              <p className="text-sm text-gray-600">Job placement and career guidance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <GraduationCap className="w-8 h-8 text-[#275D38] mb-3" />
              <h3 className="font-semibold mb-2">Skills Development</h3>
              <p className="text-sm text-gray-600">Practical, hands-on learning experience</p>
            </div>
          </motion.div>
        </div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#275D38] text-white p-8 rounded-lg mb-16"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Students Trained</div>
              <p className="text-sm opacity-80 mt-2">Across various tech disciplines</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-lg">Employment Rate</div>
              <p className="text-sm opacity-80 mt-2">Within 6 months of graduation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Industry Partners</div>
              <p className="text-sm opacity-80 mt-2">Leading tech companies</p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose UVU Capaciti</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe className="w-8 h-8 text-[#275D38] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Recognition</h3>
              <p className="text-gray-600">
                Our programs are recognized by international tech companies and meet global standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target className="w-8 h-8 text-[#275D38] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Industry Focus</h3>
              <p className="text-gray-600">
                Curriculum designed with input from industry leaders to meet real market needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-8 h-8 text-[#275D38] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Support System</h3>
              <p className="text-gray-600">
                Comprehensive support including monthly stipend, mentorship, and career guidance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;