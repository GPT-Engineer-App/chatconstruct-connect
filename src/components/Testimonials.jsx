import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const testimonials = [
  { name: 'Marco Rossi', role: 'Proprietario di Casa', content: 'Servizio eccellente! Hanno trasformato la mia vecchia casa in un sogno moderno.' },
  { name: 'Laura Bianchi', role: 'Imprenditrice', content: 'Professionalità e puntualità impeccabili. Il mio nuovo ufficio è perfetto.' },
  { name: 'Giovanni Verdi', role: 'Architetto', content: 'Collaborare con loro è stato un piacere. Realizzano progetti con precisione e cura.' },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Cosa Dicono i Nostri Clienti</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;