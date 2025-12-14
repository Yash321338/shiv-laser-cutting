import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  phone: string[];
  email: string;
  address: string;
  city: string;
  state: string;
}