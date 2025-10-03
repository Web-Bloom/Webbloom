import { Zap, DollarSign, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface BenefitsProps {
  language: Language;
}

export const Benefits = ({ language }: BenefitsProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 text-center">
          {translations.benefits.title[language]}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {translations.benefits.fast.title[language]}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {translations.benefits.fast.description[language]}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {translations.benefits.affordable.title[language]}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {translations.benefits.affordable.description[language]}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <HeartHandshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {translations.benefits.support.title[language]}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {translations.benefits.support.description[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
