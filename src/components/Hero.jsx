import React from 'react';
import { Button } from '../components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Construction site"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-6">Costruiamo il Tuo Futuro</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Servizi di costruzione di alta qualità con un tocco italiano. 
          Trasformiamo i tuoi sogni in realtà con maestria e passione.
        </p>
        <Button size="lg" className="mr-4">Richiedi un Preventivo</Button>
        <Button size="lg" variant="outline">I Nostri Progetti</Button>
      </div>
    </div>
  );
};

export default Hero;