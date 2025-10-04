import { ArrowRight } from 'lucide-react';
import { Language, PageRoute } from '../types';
import { translations } from '../translations';

interface HeroProps {
  language: Language;
  onNavigate: (page: PageRoute) => void;
}

export const Hero = ({ language, onNavigate }: HeroProps) => {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {translations.hero.title[language]}
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            {translations.hero.subtitle[language]}
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>{translations.hero.cta[language]}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
