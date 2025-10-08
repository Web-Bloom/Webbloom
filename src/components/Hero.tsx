import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
    language: Language;
    onNavigate: (section: string) => void;
}

export const Hero = ({ language, onNavigate }: HeroProps) => {
    const [animateOnce, setAnimateOnce] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setAnimateOnce(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] flex items-center justify-center px-6 lg:px-8 overflow-hidden pt-[7rem]"
        >
            {/* Faint background logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10 pointer-events-none">
                <div className="text-[20rem] font-bold text-gray-300 dark:text-gray-700 select-none">WB</div>
            </div>

            {/* Main content */}
            <div className="max-w-5xl mx-auto text-center relative z-10 h-fit">
                <div
                    className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-900/30 border border-cyan-100 dark:border-cyan-800 mb-8 ${
                        animateOnce ? 'animate-fadeInScale' : ''
                    }`}
                >
                    <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 min-h-[1.5rem]">
            {language === 'en' ? 'Transform Your Business' : 'Transformieren Sie Ihr Unternehmen'}
          </span>
                </div>

                <h1
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight min-h-[6rem] ${
                        animateOnce ? 'animate-fadeInUp animation-delay-100' : ''
                    }`}
                >
          <span className="bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-900 dark:from-white dark:via-cyan-300 dark:to-blue-300 bg-clip-text text-transparent">
            {translations.hero.title[language]}
          </span>
                </h1>

                <p
                    className={`text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto min-h-[4.5rem] ${
                        animateOnce ? 'animate-fadeInUp animation-delay-200' : ''
                    }`}
                >
                    {translations.hero.subtitle[language]}
                </p>

                <div
                    className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
                        animateOnce ? 'animate-fadeInUp animation-delay-300' : ''
                    }`}
                >
                    <button
                        onClick={() => onNavigate('contact')}
                        className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover-lift btn-ripple h-[3.5rem]"
                    >
                        <span className="relative z-10">{translations.hero.cta[language]}</span>
                        <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button
                        onClick={() => onNavigate('about')}
                        className="group inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full text-lg font-semibold text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover-lift h-[3.5rem]"
                    >
                        <span>{language === 'en' ? 'Learn More' : 'Mehr erfahren'}</span>
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hidden sm:block absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};
