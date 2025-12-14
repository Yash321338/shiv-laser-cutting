import React from 'react';
import { ArrowRight, CheckCircle2, Clock, ThumbsUp, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-industrial-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565620958742-83568770b77e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Laser cutting sparks industrial" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-black via-industrial-black/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 border border-industrial-accent text-industrial-accent text-xs font-bold uppercase tracking-widest mb-6">
              ISO Certified Quality
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white uppercase leading-tight mb-6">
              Precision Laser <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-accent to-emerald-300">
                Cutting Solutions
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Expert M.S, S.S & Aluminum fabrication with micron-level accuracy. 
              We deliver high-quality job work for industrial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/quote" variant="primary">
                Request a Quote
              </Button>
              <Button to="/contact" variant="outline">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Expertise" 
            subtitle="We specialize in cutting various metals with high precision machinery."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((service) => (
              <div 
                key={service.id} 
                className="group p-8 border border-gray-200 bg-white hover:border-industrial-accent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-sm"
              >
                <div className="w-14 h-14 bg-industrial-light rounded-sm flex items-center justify-center text-industrial-accent mb-6 group-hover:bg-industrial-accent group-hover:text-white transition-colors">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-bold text-industrial-black uppercase mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/services" className="inline-flex items-center text-sm font-bold text-industrial-accent uppercase tracking-wide group-hover:text-industrial-black transition-colors">
                  View Details <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-industrial-gray text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Why Choose Shiv Laser?" 
                align="left"
                light={true}
                subtitle="We combine advanced technology with experienced craftsmanship to deliver the best results."
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-industrial-accent font-bold uppercase tracking-wider">
                    <CheckCircle2 size={24} /> Precision Cutting
                  </div>
                  <p className="text-gray-400 text-sm">Advanced laser technology ensures micron-level accuracy.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-industrial-accent font-bold uppercase tracking-wider">
                    <Truck size={24} /> Timely Delivery
                  </div>
                  <p className="text-gray-400 text-sm">Strict adherence to project timelines and schedules.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-industrial-accent font-bold uppercase tracking-wider">
                    <ThumbsUp size={24} /> Quality Material
                  </div>
                  <p className="text-gray-400 text-sm">We process only high-grade M.S, S.S and Aluminum.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-industrial-accent font-bold uppercase tracking-wider">
                    <Clock size={24} /> Fast Turnaround
                  </div>
                  <p className="text-gray-400 text-sm">Quick quoting and production processes.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-industrial-accent z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Worker examining metal" 
                className="relative z-10 w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-industrial-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-6">
            Looking for reliable laser cutting services?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your next industrial project today.
          </p>
          <Button to="/quote" variant="white">
            Get a Free Quote Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;