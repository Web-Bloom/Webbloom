import { Laptop, RefreshCw, Search, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ServicesProps {
  language: Language;
}

export const Services = ({ language }: ServicesProps) => {
  const services = [
    { icon: Laptop, title: translations.services.newWebsite.title[language], desc: translations.services.newWebsite.description[language], delay: 'animation-delay-100' },
    { icon: RefreshCw, title: translations.services.renewal.title[language], desc: translations.services.renewal.description[language], delay: 'animation-delay-200' },
    { icon: Search, title: translations.services.seo.title[language], desc: translations.services.seo.description[language], delay: 'animation-delay-300' },
    { icon: Globe, title: translations.services.hosting.title[language], desc: translations.services.hosting.description[language], delay: 'animation-delay-400' },
  ];

  return (
    <section id="services" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-cyan-700 bg-clip-text text-transparent">
              {translations.services.title[language]}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {translations.services.subtitle[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-100 hover:border-cyan-200 transition-all duration-500 hover-lift animate-fadeInScale ${service.delay}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-cyan-600 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
