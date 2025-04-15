
import { Link } from 'react-router-dom';
import { BriefcaseBusiness, Mail, Phone, MapPin, FacebookIcon, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jobconnect-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BriefcaseBusiness size={24} className="text-jobconnect-teal" />
              <span className="font-bold text-xl">JobConnect</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting the right talent with the right opportunities
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-jobconnect-teal">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-jobconnect-teal">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-jobconnect-teal">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-jobconnect-teal">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-jobconnect-teal">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-jobconnect-teal transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-gray-300 hover:text-jobconnect-teal transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-jobconnect-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-jobconnect-teal transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-jobconnect-teal transition-colors">
                  Career Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* For Employers */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-jobconnect-teal">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/employer/post-job" className="text-gray-300 hover:text-jobconnect-teal transition-colors">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/employer/pricing" className="text-gray-300 hover:text-jobconnect-teal transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/employer/resources" className="text-gray-300 hover:text-jobconnect-teal transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/employer/login" className="text-gray-300 hover:text-jobconnect-teal transition-colors">
                  Employer Login
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-jobconnect-teal">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-jobconnect-teal" />
                <span className="text-gray-300">
                  123 Job Street, Career City
                  <br />
                  Opportunity State, 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-jobconnect-teal" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-jobconnect-teal">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-jobconnect-teal" />
                <a href="mailto:info@jobconnect.com" className="text-gray-300 hover:text-jobconnect-teal">
                  info@jobconnect.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>© {currentYear} JobConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
