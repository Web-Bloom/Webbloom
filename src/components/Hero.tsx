import { ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  language: Language;
  onNavigate: (section: string) => void;
}

export const Hero = ({ language, onNavigate }: HeroProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="text-[20rem] font-bold text-gray-300 select-none">WB</div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 mb-8 animate-fadeInScale">
          <Sparkles className="w-4 h-4 text-cyan-600" />
          <span className="text-sm font-semibold text-cyan-700">
            {language === 'en' ? 'Transform Your Business' : 'Transformieren Sie Ihr Geschäft'}
          </span>
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fadeInUp">
          <span className="bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-900 bg-clip-text text-transparent">
            {translations.hero.title[language]}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
          {translations.hero.subtitle[language]}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp animation-delay-400">
          <button
            onClick={() => onNavigate('contact')}
            className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover-lift btn-ripple"
          >
            <span className="relative z-10">{translations.hero.cta[language]}</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="group inline-flex items-center space-x-2 px-8 py-4 rounded-full text-lg font-semibold text-gray-700 border-2 border-gray-300 hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300 hover-lift"
          >
            <span>{language === 'en' ? 'Learn More' : 'Mehr erfahren'}</span>
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-500">
          <div className="group">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">
              50+
            </div>
            <div className="text-sm text-gray-600">{language === 'en' ? 'Projects' : 'Projekte'}</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">
              100%
            </div>
            <div className="text-sm text-gray-600">{language === 'en' ? 'Satisfaction' : 'Zufriedenheit'}</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">
              24/7
            </div>
            <div className="text-sm text-gray-600">{language === 'en' ? 'Support' : 'Support'}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
