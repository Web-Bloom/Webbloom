import { Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  language: Language;
  onLanguageToggle: () => void;
  onNavigate: (section: string) => void;
}

export const Header = ({ language, onLanguageToggle, onNavigate }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('hero')}>
            <Sparkles className="w-7 h-7 text-cyan-600" />
            <span className="text-xl font-bold text-gray-900">WebBloom</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('hero')}
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              {translations.nav.home[language]}
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              {translations.nav.services[language]}
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              {translations.nav.about[language]}
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              {translations.nav.contact[language]}
            </button>
          </nav>

          <button
            onClick={onLanguageToggle}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700 uppercase">
              {language}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
