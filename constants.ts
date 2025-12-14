import { Scissors, Layers, Settings, Box, PenTool, ShieldCheck } from 'lucide-react';
import { NavItem, ServiceItem, ContactInfo } from './types';

export const BRAND_NAME = "Shiv Laser Cutting";
export const TAGLINE = "M.S, S.S & Aluminum – All Type Job Work";

export const CONTACT_INFO: ContactInfo = {
  phone: ["+91 90161 76660", "+91 98242 88638"],
  email: "dhrutiktilala@gmail.com",
  address: "Industrial Zone, Main Road", // Placeholder for specific street if unknown
  city: "Rajkot",
  state: "Gujarat"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ms-cutting',
    title: "M.S Laser Cutting",
    description: "High-precision Mild Steel cutting for heavy industrial applications with clean edges and minimal burr.",
    icon: Scissors
  },
  {
    id: 'ss-cutting',
    title: "S.S Laser Cutting",
    description: "Premium Stainless Steel laser cutting delivering smooth finishes for decorative and industrial parts.",
    icon: Layers
  },
  {
    id: 'aluminum-cutting',
    title: "Aluminum Laser Cutting",
    description: "Expert handling of reflective materials like Aluminum, ensuring accuracy without warping.",
    icon: Box
  },
  {
    id: 'custom-job',
    title: "Custom Metal Job Work",
    description: "Tailored metal fabrication solutions based on your specific drawings and engineering requirements.",
    icon: Settings
  },
  {
    id: 'precision',
    title: "Precision Industrial Cutting",
    description: "Micron-level accuracy for intricate designs and complex machinery components.",
    icon: PenTool
  },
  {
    id: 'fabrication',
    title: "Metal Fabrication",
    description: "Complete assembly and fabrication support for industrial structures and casings.",
    icon: ShieldCheck
  }
];