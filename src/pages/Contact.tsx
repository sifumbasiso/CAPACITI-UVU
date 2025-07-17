import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#275D38] mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with us to learn more about our programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#275D38] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#275D38] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#275D38] focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#275D38] text-white px-6 py-2 rounded-lg hover:bg-[#1a4027] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#275D38] w-5 h-5 flex-shrink-0" />
                  <div>
                    <p>97 Durham Road</p>
                    <p>Salt River</p>
                    <p>Cape Town, 7925</p>
                    <a 
                      href="https://maps.google.com/?q=97+Durham+Road,+Salt+River,+Cape+Town" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#275D38] hover:text-[#1a4027] flex items-center gap-1 mt-1"
                    >
                      View on Google Maps <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#275D38] w-5 h-5 flex-shrink-0" />
                  <a 
                    href="mailto:info@uvucapaciti.com" 
                    className="hover:text-[#275D38]"
                  >
                    info@uvucapaciti.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#275D38] w-5 h-5 flex-shrink-0" />
                  <a 
                    href="tel:+27211234567" 
                    className="hover:text-[#275D38]"
                  >
                    +27 (0) 21 123 4567
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-[#275D38] w-5 h-5" />
                <h3 className="text-xl font-semibold">Office Hours</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-[#275D38] text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Visit Our Campus</h3>
              <p className="mb-4">
                Come visit our modern campus in the heart of Salt River, Cape Town. 
                Our facilities are equipped with state-of-the-art technology and 
                comfortable learning spaces.
              </p>
              <p>
                We're easily accessible by public transport and have parking 
                available for students and visitors.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;