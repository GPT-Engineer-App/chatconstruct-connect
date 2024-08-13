import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Home, Building, Paintbrush, Wrench } from 'lucide-react';

const serviceItems = [
  { icon: Home, title: 'Costruzioni Residenziali', description: 'Case su misura per ogni esigenza' },
  { icon: Building, title: 'Progetti Commerciali', description: 'Spazi funzionali per il tuo business' },
  { icon: Paintbrush, title: 'Ristrutturazioni', description: 'Rinnovamento completo degli spazi' },
  { icon: Wrench, title: 'Manutenzione', description: 'Servizi di manutenzione continua' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">I Nostri Servizi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((item, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;