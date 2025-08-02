import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold">Empathy Carec</h3>
            <p className="text-sm">
              Compassionate care for every stage of life. HealthSync is your trusted partner for live-in, hourly, and specialist care services across Enfield , Haringey, Walthamstow.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/review" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Live-in Care</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Hourly Care</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Respite Care</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Dementia & Disability Care</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Companionship</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span>Enfield , Haringey, Walthamstow</span>
              </li>
              <li className="flex items-center space-x-2">
                <a href="tel:07920044621" className="text-gray-400 hover:text-white transition-colors">
                  Phone: 07920044621
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="tel:02088048773" className="text-gray-400 hover:text-white transition-colors">
                  Mobile: 02088048773
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="mailto:empathycarecompanyltd@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  Email: empathycarecompanyltd@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>Mon-Fri: 8:30am - 5:00pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              © {currentYear} Empathy Care Company. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              {/* Uncomment and update if needed
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
              */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
