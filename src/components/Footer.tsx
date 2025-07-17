import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/capaciti-logo.svg"
              alt="Capaciti Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Empowering Africa's youth through digital skills development and creating sustainable employment opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B6B]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B6B]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B6B]">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B6B]">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#FF6B6B]">Home</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-[#FF6B6B]">Programs</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FF6B6B]">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#FF6B6B]">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://uvuafrica.com/capaciti/software-development/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FF6B6B]">
                  Software Development
                </a>
              </li>
              <li>
                <a href="https://uvuafrica.com/capaciti/data-analytics/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FF6B6B]">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="https://uvuafrica.com/capaciti/digital-marketing/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FF6B6B]">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="https://uvuafrica.com/capaciti/cloud-computing/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FF6B6B]">
                  Cloud Computing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#FF6B6B]" />
                <span className="text-gray-300">Cape Town, South Africa</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#FF6B6B]" />
                <a href="mailto:info@uvucapaciti.com" className="text-gray-300 hover:text-[#FF6B6B]">
                  info@uvucapaciti.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#FF6B6B]" />
                <a href="tel:+27211234567" className="text-gray-300 hover:text-[#FF6B6B]">
                  +27 (0) 21 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} UVU Capaciti. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-[#FF6B6B] text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-[#FF6B6B] text-sm">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-[#FF6B6B] text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;