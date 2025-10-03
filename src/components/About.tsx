import { Language } from '../types';
import { translations } from '../translations';

interface AboutProps {
  language: Language;
}

export const About = ({ language }: AboutProps) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
          {translations.about.title[language]}
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          {translations.about.description[language]}
        </p>
      </div>
    </section>
  );
};
