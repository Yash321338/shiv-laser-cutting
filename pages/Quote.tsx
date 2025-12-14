import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { UploadCloud, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const Quote: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request submitted successfully! We will analyze your requirements and get back to you.");
  };

  return (
    <div className="bg-white">
       <div className="bg-industrial-gray py-16">
        <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl font-bold text-white uppercase tracking-wider">Request a Quote</h1>
            <p className="text-gray-300 mt-4">Fast turnaround & competitive pricing for industrial job work.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl border-t-4 border-industrial-accent rounded-sm overflow-hidden">
                <div className="p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        <div className="text-center p-4 bg-gray-50 rounded-sm">
                            <CheckCircle2 className="mx-auto text-industrial-accent mb-2" size={32} />
                            <h4 className="font-bold uppercase text-sm">Accurate Pricing</h4>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-sm">
                            <CheckCircle2 className="mx-auto text-industrial-accent mb-2" size={32} />
                            <h4 className="font-bold uppercase text-sm">Industrial Standard</h4>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-sm">
                            <CheckCircle2 className="mx-auto text-industrial-accent mb-2" size={32} />
                            <h4 className="font-bold uppercase text-sm">Fast Response</h4>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Name</label>
                                <input required type="text" className="w-full bg-gray-50 border border-gray-300 p-3 focus:border-industrial-accent outline-none" placeholder="Your Name / Company" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Phone</label>
                                <input required type="tel" className="w-full bg-gray-50 border border-gray-300 p-3 focus:border-industrial-accent outline-none" placeholder="Mobile Number" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Email</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-300 p-3 focus:border-industrial-accent outline-none" placeholder="Email Address" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Service Required</label>
                                <select className="w-full bg-gray-50 border border-gray-300 p-3 focus:border-industrial-accent outline-none">
                                    <option>Select Service...</option>
                                    {SERVICES.map(s => (
                                        <option key={s.id} value={s.id}>{s.title}</option>
                                    ))}
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Project Details</label>
                            <textarea required rows={4} className="w-full bg-gray-50 border border-gray-300 p-3 focus:border-industrial-accent outline-none" placeholder="Describe material thickness, quantity, and specific requirements..."></textarea>
                        </div>

                        <div>
                             <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Upload Drawing (Optional)</label>
                             <div className="border-2 border-dashed border-gray-300 rounded-sm p-6 text-center hover:border-industrial-accent transition-colors bg-gray-50">
                                <input 
                                    type="file" 
                                    id="file-upload" 
                                    className="hidden" 
                                    onChange={handleFileChange}
                                />
                                <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center">
                                    <UploadCloud size={40} className="text-gray-400 mb-2" />
                                    <span className="text-sm font-medium text-gray-600">
                                        {file ? file.name : "Click to upload CAD/PDF/DXF files"}
                                    </span>
                                </label>
                             </div>
                        </div>

                        <div className="pt-4">
                            <Button type="submit" variant="primary" className="w-full text-lg py-4">
                                Submit Request
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;