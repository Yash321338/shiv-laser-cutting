import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Award, Users, PenTool, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="bg-industrial-gray py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Industrial Pattern" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">About Shiv Laser</h1>
            <p className="text-industrial-accent mt-4 font-medium uppercase tracking-widest">Precision &bull; Quality &bull; Trust</p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
                <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                    alt="Factory machine" 
                    className="rounded-sm shadow-xl"
                />
             </div>
             <div>
                <h2 className="font-display text-3xl font-bold text-industrial-black uppercase mb-6">Who We Are</h2>
                <div className="w-16 h-1 bg-industrial-accent mb-6"></div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Shiv Laser Cutting is a premier metal fabrication service provider based in Rajkot, Gujarat. Specializing in Mild Steel (M.S), Stainless Steel (S.S), and Aluminum, we provide top-tier laser cutting job work for a diverse range of industries.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Our facility is equipped with state-of-the-art laser machinery capable of delivering intricate cuts with exceptional edge quality. Whether it's heavy industrial parts or delicate architectural components, our team ensures every job meets rigorous quality standards.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="bg-gray-50 p-4 border-l-4 border-industrial-accent">
                        <h4 className="font-bold text-industrial-black">Experience</h4>
                        <p className="text-sm text-gray-500">Years of industrial expertise</p>
                    </div>
                    <div className="bg-gray-50 p-4 border-l-4 border-industrial-accent">
                        <h4 className="font-bold text-industrial-black">Technology</h4>
                        <p className="text-sm text-gray-500">Latest fiber laser machines</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <SectionHeading title="Our Core Strengths" subtitle="Building trust through operational excellence" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {[
                    { icon: Award, title: "Quality First", desc: "We never compromise on the finish and accuracy of our cuts." },
                    { icon: Users, title: "Skilled Team", desc: "Our operators are highly trained in CAD/CAM and machine handling." },
                    { icon: PenTool, title: "Design Support", desc: "We assist in optimizing designs for better manufacturability." },
                    { icon: ShieldCheck, title: "Reliability", desc: "Consistent results for small batches or large production runs." },
                ].map((item, index) => (
                    <div key={index} className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow border-t-2 border-transparent hover:border-industrial-accent">
                        <item.icon className="text-industrial-accent mb-4" size={40} />
                        <h3 className="font-display font-bold text-lg text-industrial-black uppercase mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;