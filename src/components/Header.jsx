import React from 'react';
import { Button } from '../components/ui/button';
import { PhoneCall } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">CostruzioneItaliana</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-600 hover:text-gray-800">Servizi</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonianze</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">Contatto</a>
        </nav>
        <Button className="hidden md:flex items-center">
          <PhoneCall className="mr-2 h-4 w-4" /> Chiama Ora
        </Button>
      </div>
    </header>
  );
};

export default Header;