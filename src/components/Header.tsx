import {Moon, Sun} from 'lucide-react';
import {Language} from '../types';
import {Theme} from '../hooks/useTheme';
import {translations} from '../translations';
import clsx from 'clsx';
import ReactCountryFlag from "react-country-flag";
import logo from '../assets/logo.webp';

interface HeaderProps {
    language: Language;
    onLanguageToggle: () => void;
    onNavigate: (section: string) => void;
    theme: Theme;
    onThemeToggle: () => void;
}

export const Header = ({
                           language,
                           onLanguageToggle,
                           onNavigate,
                           theme,
                           onThemeToggle,
                       }: HeaderProps) => {
    const navItems = [
        {key: 'hero', label: 'home' as const},
        {key: 'services', label: 'services' as const},
        {key: 'about', label: 'about' as const},
        {key: 'contact', label: 'contact' as const},
    ];

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-lg border-b border-transparent',
                theme === 'light'
                    ? 'bg-white/80 text-gray-900 shadow-sm'
                    : 'bg-gray-900/70 text-white'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div
                        className="flex items-center space-x-3 cursor-pointer group"
                        onClick={() => onNavigate('hero')}
                    >
                        <img
                            src={logo}
alt="WebBloom logo – Web design and SEO for small businesses"
                            className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                        />
                        <span
                            className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-cyan-700 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent">
                            WebBloom
                        </span>
                    </div>

                    {/* Nav */}
                    <nav className="hidden md:flex items-center space-x-2">
                        {navItems.map(({key, label}) => (
                            <button
                                key={key}
                                onClick={() => onNavigate(key)}
                                className="relative px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 group"
                            >
                                {translations.nav[label][language]}
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                            </button>
                        ))}
                    </nav>

                    {/* Controls */}
                    <div className="flex items-center space-x-2">
                        {/* Theme toggle */}
                        <button
                            onClick={onThemeToggle}
                            className="p-2 rounded-full hover:bg-cyan-50 dark:hover:bg-cyan-900/30 transition-all duration-300 hover-lift"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? (
                                <Moon className="w-5 h-5 text-cyan-600"/>
                            ) : (
                                <Sun className="w-5 h-5 text-cyan-400"/>
                            )}
                        </button>

                        {/* Language toggle — flags only */}

                        <button
                            onClick={onLanguageToggle}
                            className="flex items-center justify-center text-2xl px-4 py-2 rounded-full hover:bg-cyan-50 dark:hover:bg-cyan-900/30 transition-all duration-300 hover-lift"
                            aria-label="Toggle language"
                        >
                            {language === 'en' ? (
                                <ReactCountryFlag countryCode="GB" svg style={{width: '1em', height: '1em'}}/>
                            ) : (
                                <ReactCountryFlag countryCode="DE" svg style={{width: '1em', height: '1em'}}/>
                            )}
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
};
