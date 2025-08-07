import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate(); // ✅ FIXED

  return (
    <footer className="bg-blue-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold">Empathy Care</h3>
            <p className="text-sm">
              Compassionate care for every stage of life. Empathy Care is your trusted partner for live-in, hourly, and specialist care services across Enfield, Haringey, Walthamstow.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook"><FaFacebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter"><FaTwitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn"><FaLinkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram"><FaInstagram className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button className="text-left text-gray-400 hover:text-white transition-colors" onClick={() => navigate('/about')}>About Us</button></li>
              <li><button className="text-left text-gray-400 hover:text-white transition-colors" onClick={() => navigate('/services')}>Services</button></li>
              <li><button className="text-left text-gray-400 hover:text-white transition-colors" onClick={() => navigate('/contact')}>Contact Us</button></li>
              <li><button className="text-left text-gray-400 hover:text-white transition-colors" onClick={() => navigate('/review')}>Reviews</button></li>
              <li><button className="text-left text-gray-400 hover:text-white transition-colors" onClick={() => navigate('/blog')}>Blog</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><button className="text-left text-gray-400 hover:text-white transition-colors" onClick={() => navigate('/services')}>Live In Care</button></li>
              <li><button className="text-left text-gray-400 hover:text-white transition-colors" onClick={() => navigate('/services')}>Hourly Care</button></li>
              <li><button className="text-left text-gray-400 hover:text-white transition-colors" onClick={() => navigate('/services')}>Dementia Care</button></li>
              <li><button className="text-left text-gray-400 hover:text-white transition-colors" onClick={() => navigate('/services')}>Parkinson Care</button></li>
              <li><button className="text-left text-gray-400 hover:text-white transition-colors" onClick={() => navigate('/services')}>Companionship Care</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Empathy Care Company Ltd</li>
              <li><a href="tel:07920044621" className="text-gray-400 hover:text-white">Phone: 07920044621</a></li>
              <li><a href="tel:02088048773" className="text-gray-400 hover:text-white">Mobile: 02088048773</a></li>
              <li><a href="mailto:empathycarecompanyltd@gmail.com" className="text-gray-400 hover:text-white">Email: empathycarecompanyltd@gmail.com</a></li>
              <li>Address: 348 Green Street EN3 7SB, Enfield, UK</li>
              <li>Mon-Fri: 8:30am - 5:00pm</li>
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
            {/* Optional links area */}
            {/* <ul className="flex space-x-6 text-sm mt-4 md:mt-0">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
