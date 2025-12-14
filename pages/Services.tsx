import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="bg-industrial-gray py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">Our Services</h1>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Providing comprehensive laser cutting and fabrication solutions for M.S, S.S, and Aluminum.</p>
        </div>
      </div>

      {/* Main Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {SERVICES.map((service) => (
                    <div key={service.id} className="flex flex-col bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden group">
                        <div className="h-2 bg-industrial-black group-hover:bg-industrial-accent transition-colors"></div>
                        <div className="p-8 flex-grow">
                            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="text-industrial-black group-hover:text-industrial-accent transition-colors" size={32} />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-industrial-black uppercase mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            
                            {/* Specific Detail Bullets based on service type */}
                            <ul className="text-sm text-gray-500 space-y-2 mb-8 border-t border-gray-100 pt-4">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-industrial-accent rounded-full"></span> High Precision
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-industrial-accent rounded-full"></span> Any Thickness
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-industrial-accent rounded-full"></span> Rapid Production
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 pt-0 mt-auto">
                            <Button to="/quote" variant="outline" className="w-full">
                                Get Quote
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600 italic">
                <span className="font-bold text-industrial-black not-italic uppercase mr-2">Please Note:</span>
                We specialize exclusively in steel and aluminum. We do not process Brass or Copper materials.
            </p>
        </div>
      </section>
    </div>
  );
};

export default Services;