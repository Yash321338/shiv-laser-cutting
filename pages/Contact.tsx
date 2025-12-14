import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent. We will contact you shortly.");
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

  return (
    <div className="bg-white">
       {/* Hero Banner */}
       <div className="bg-industrial-gray py-16">
        <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl font-bold text-white uppercase tracking-wider">Contact Us</h1>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Column: Form */}
                <div>
                    <h2 className="font-display text-2xl font-bold text-industrial-black uppercase mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Full Name</label>
                            <input 
                                type="text" 
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-gray-50 border border-gray-300 p-4 focus:outline-none focus:border-industrial-accent transition-colors"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Phone Number</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-300 p-4 focus:outline-none focus:border-industrial-accent transition-colors"
                                    placeholder="Enter your mobile"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-300 p-4 focus:outline-none focus:border-industrial-accent transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Message</label>
                            <textarea 
                                name="message"
                                rows={5}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-gray-50 border border-gray-300 p-4 focus:outline-none focus:border-industrial-accent transition-colors"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <Button type="submit" variant="primary" className="w-full md:w-auto">
                            SendMessage
                        </Button>
                    </form>
                </div>

                {/* Right Column: Info & Map */}
                <div className="space-y-10">
                    <div>
                        <h2 className="font-display text-2xl font-bold text-industrial-black uppercase mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-industrial-light flex items-center justify-center text-industrial-accent rounded-sm shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase text-gray-900 mb-1">Phone</h4>
                                    {CONTACT_INFO.phone.map(p => (
                                        <p key={p} className="text-gray-600">{p}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-industrial-light flex items-center justify-center text-industrial-accent rounded-sm shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase text-gray-900 mb-1">Email</h4>
                                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-industrial-light flex items-center justify-center text-industrial-accent rounded-sm shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase text-gray-900 mb-1">Address</h4>
                                    <p className="text-gray-600">{CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="bg-gray-200 h-[300px] w-full rounded-sm overflow-hidden relative shadow-inner">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68202061266!2d70.73889449195393!3d22.27363079549927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd17285f265f97!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Rajkot Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;