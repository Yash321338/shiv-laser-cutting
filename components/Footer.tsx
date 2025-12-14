import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import { BRAND_NAME, CONTACT_INFO, SERVICES, TAGLINE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-industrial-black text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tighter mb-4">
              Shiv<span className="text-industrial-accent">Laser</span>
            </h3>
            <p className="mb-6 text-sm leading-relaxed">
              {TAGLINE}. We provide precision laser cutting and metal fabrication solutions for industrial needs. Trusted by manufacturers in Gujarat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-industrial-accent hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-industrial-accent hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-industrial-accent hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wide mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-industrial-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Home</Link></li>
              <li><Link to="/about" className="hover:text-industrial-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> About Us</Link></li>
              <li><Link to="/services" className="hover:text-industrial-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Services</Link></li>
              <li><Link to="/contact" className="hover:text-industrial-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Contact Us</Link></li>
              <li><Link to="/quote" className="hover:text-industrial-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Get Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wide mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 4).map(service => (
                <li key={service.id}>
                  <Link to="/services" className="hover:text-industrial-accent transition-colors flex items-center gap-2">
                    <ArrowRight size={14}/> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wide mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-industrial-accent mt-1 flex-shrink-0" size={18} />
                <span>{CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-industrial-accent flex-shrink-0" size={18} />
                <div className="flex flex-col">
                  {CONTACT_INFO.phone.map(p => (
                    <a key={p} href={`tel:${p}`} className="hover:text-white">{p}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-industrial-accent flex-shrink-0" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white break-all">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Precision Laser Cutting Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;