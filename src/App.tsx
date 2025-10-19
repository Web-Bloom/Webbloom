import {Helmet} from 'react-helmet-async';
import {useLanguage} from './hooks/useLanguage';
import {useTheme} from './hooks/useTheme';
import {Header} from './components/Header';
import {Hero} from './components/Hero';
import {Services} from './components/Services';
import {Benefits} from './components/Benefits';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
import {AnimatedBackground} from './components/AnimatedBackground';

function App() {
    const {language, toggleLanguage} = useLanguage();
    const {theme, toggleTheme} = useTheme();

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
            <Helmet>
                <html lang={language}/>
                <title>
                    {language === 'en'
                        ? 'WebBloom — Web Design & SEO for Local Businesses | web-bloom.com'
                        : 'WebBloom — Webdesign & SEO für lokale Unternehmen | web-bloom.com'}
                </title>

                <meta
                    name="description"
                    content={
                        language === 'en'
                            ? 'WebBloom builds fast, modern websites and SEO strategies for small businesses in Vienna and Germany. Get found online — affordable, beautiful, effective.'
                            : 'WebBloom erstellt schnelle, moderne Websites und SEO-Strategien für kleine Unternehmen in Wien und Deutschland. Werden Sie online gefunden — professionell und erschwinglich.'
                    }
                />

                <meta
                    name="keywords"
                    content={
                        language === 'en'
                            ? 'web design vienna, seo vienna, small business website, german web agency, affordable web design, web hosting, online presence'
                            : 'webdesign wien, seo agentur wien, website erstellen, webagentur deutschland, günstiges webdesign, hosting, online sichtbarkeit'
                    }
                />

                <meta name="author" content="WebBloom"/>
                <meta property="og:title" content="WebBloom — Web Design & SEO for Local Businesses"/>
                <meta
                    property="og:description"
                    content="Enhance your digital presence with WebBloom. Professional websites, SEO, and hosting for small businesses in Vienna and Germany."
                />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://web-bloom.com"/>
                <meta property="og:image" content="https://web-bloom.com/og-image.jpg"/>
                <link rel="canonical" href="https://web-bloom.com"/>

                {/* Schema.org structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "WebBloom",
                        url: "https://web-bloom.com",
                        logo: "https://web-bloom.com/logo.webp",
                        sameAs: [
                            "https://www.linkedin.com/company/webbloom",
                            "https://www.instagram.com/webbloom",
                        ],
                        contactPoint: {
                            "@type": "ContactPoint",
                            email: "lukas.brainovic@web-bloom.com",
                            telephone: "+43 6766773780",
                            contactType: "Customer Service",
                        },
                    })}
                </script>
            </Helmet>


            <AnimatedBackground/>
            <Header
                language={language}
                onLanguageToggle={toggleLanguage}
                onNavigate={handleNavigate}
                theme={theme}
                onThemeToggle={toggleTheme}
            />
            <main>
                <Hero language={language} onNavigate={handleNavigate}/>
                <Services language={language}/>
                <Benefits language={language}/>
                <About language={language}/>
                <Contact language={language}/>
            </main>
            <Footer language={language}/>
        </div>
    );
}

export default App;
