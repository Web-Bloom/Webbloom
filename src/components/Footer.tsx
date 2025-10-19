import { Language } from '../types';
import { translations } from '../translations';
import logo from '../assets/logo.png';

interface FooterProps {
    language: Language;
}

export const Footer = ({ language }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="footer"
            className="relative bg-gradient-to-b from-slate-900 to-gray-900 text-white py-20 px-6 lg:px-8 overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-16 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-16 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
            </div>

            {/* Wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:justify-between">
                {/* Contact */}
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-2">
                    <h3 className="text-lg font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                        {language === 'en' ? 'Contact' : 'Kontakt'}
                    </h3>
                    <address className="not-italic text-gray-300 space-y-1 leading-relaxed">
                        <p>1210 Wien / Vienna</p>
                        <p>
                            <a
                                href="mailto:TODO"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                lukas.brainovic@web-bloom.com
                            </a>
                        </p>
                        <p>
                            <a
                                href="tel:+436766773780"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                +43 676 6773780
                            </a>
                        </p>
                    </address>
                </div>

                {/* Center Logo / Brand */}
                <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center mt-12 md:mt-0">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-3 group mb-3"
                    >
                        <img
                            src={logo}
alt="WebBloom logo – Web design and SEO for small businesses"
                            className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-3xl font-extrabold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              WebBloom
            </span>
                    </button>
                    <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                        {translations.footer.tagline[language]}
                    </p>
                </div>

                {/* Quick Links */}
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right space-y-2">
                    <h3 className="text-lg font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                        {language === 'en' ? 'Quick Links' : 'Schnellzugriff'}
                    </h3>
                    <ul className="space-y-1 text-gray-300">
                        <li>
                            <a href="#hero" className="hover:text-cyan-400 transition-colors">
                                {translations.nav.home[language]}
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-cyan-400 transition-colors">
                                {translations.nav.services[language]}
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-cyan-400 transition-colors">
                                {translations.nav.about[language]}
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-cyan-400 transition-colors">
                                {translations.nav.contact[language]}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="relative z-10 max-w-7xl mx-auto mt-14 border-t border-gray-800" />

            {/* Bottom note */}
            <div className="relative z-10 max-w-7xl mx-auto pt-6 text-center text-gray-500 text-sm">
                <p>
                    © {currentYear} WebBloom. All rights reserved. |{' '}
                    <a href="mailto:lukas.brainovic@web-bloom.com" className="text-cyan-400 hover:underline">
                        lukas.brainovic@web-bloom.com
                    </a>
                </p>
            </div>
        </footer>
    );
};
