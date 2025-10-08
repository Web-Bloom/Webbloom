import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';

function App() {
    const { language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    const handleNavigate = (section: string) => {
        const element = document.getElementById(section);
        if (element) {
            const offset = 80;
            const top = element.getBoundingClientRect().top + window.scrollY - offset;

            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const isMobile = window.innerWidth < 768;

            window.scrollTo({
                top,
                behavior: prefersReducedMotion || isMobile ? 'auto' : 'smooth',
            });
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            <AnimatedBackground />
            <Header
                language={language}
                onLanguageToggle={toggleLanguage}
                onNavigate={handleNavigate}
                theme={theme}
                onThemeToggle={toggleTheme}
            />
            <main>
                <Hero language={language} onNavigate={handleNavigate} />
                <Services language={language} />
                <Benefits language={language} />
                <About language={language} />
                <Contact language={language} />
            </main>
            <Footer language={language} />
        </div>
    );
}

export default App;
