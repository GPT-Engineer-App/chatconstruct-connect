import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CostruzioneItaliana</h3>
            <p className="mb-4">Costruiamo il futuro, un progetto alla volta.</p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6" />
              <Instagram className="h-6 w-6" />
              <Twitter className="h-6 w-6" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <p>Email: info@costruzioneitaliana.it</p>
            <p>Telefono: +39 123 456 7890</p>
            <p>Indirizzo: Via Roma 123, 00100 Roma, Italia</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Collegamenti Rapidi</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:underline">Servizi</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonianze</a></li>
              <li><a href="#contact" className="hover:underline">Contatto</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 CostruzioneItaliana. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;