import React from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contattaci</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Nome" />
              <Input placeholder="Email" type="email" />
            </div>
            <Input placeholder="Oggetto" />
            <Textarea placeholder="Il tuo messaggio" rows={5} />
            <Button type="submit" className="w-full">Invia Messaggio</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;