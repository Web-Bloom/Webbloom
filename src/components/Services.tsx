import { Laptop, RefreshCw, Search, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ServicesProps {
  language: Language;
}

export const Services = ({ language }: ServicesProps) => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {translations.services.title[language]}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {translations.services.subtitle[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
            <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <Laptop className="w-7 h-7 text-cyan-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {translations.services.newWebsite.title[language]}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {translations.services.newWebsite.description[language]}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
            <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <RefreshCw className="w-7 h-7 text-cyan-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {translations.services.renewal.title[language]}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {translations.services.renewal.description[language]}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
            <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <Search className="w-7 h-7 text-cyan-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {translations.services.seo.title[language]}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {translations.services.seo.description[language]}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
            <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-cyan-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {translations.services.hosting.title[language]}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {translations.services.hosting.description[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
