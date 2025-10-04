import { Language } from '../types';
import { translations } from '../translations';

interface AboutProps {
  language: Language;
}

export const About = ({ language }: AboutProps) => {
  return (
    <section id="about" className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-[3rem] blur-3xl"></div>
          <div className="relative glass-effect p-12 lg:p-16 rounded-[3rem] text-center animate-fadeInScale">
            <h2 className="text-5xl sm:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 to-cyan-700 bg-clip-text text-transparent">
                {translations.about.title[language]}
              </span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {translations.about.description[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
