import {useState} from 'react';
import {Send} from 'lucide-react';
import {Language} from '../types';
import {translations} from '../translations';

interface ContactProps {
    language: Language;
}

export const Contact = ({language}: ContactProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await fetch("https://script.google.com/macros/s/AKfycbysR3TfsqHPd3_biXxergPZSvH8VFJxdysBxMiMLr2wl2OQ_x9uKBY7011P_x5IKqqBNg/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            alert("Danke für ihre Nachricht, wir melden uns in den kommenden Tagen bei Ihnen!");
            setFormData({name: "", email: "", message: ""});
        } catch (err) {

            console.error(err);
            alert("Failed to send message.");
        }
    };


    return (
        <section id="contact" className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-cyan-50/30 dark:from-gray-950 dark:to-cyan-950/20">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16 animate-fadeInUp">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-gray-900 to-cyan-700 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent">
                            {translations.contact.title[language]}
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                        {translations.contact.subtitle[language]}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="relative animate-fadeInUp animation-delay-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 dark:from-cyan-900/10 dark:to-blue-900/10 rounded-[2rem] blur-2xl"></div>
                    <div className="relative glass-effect dark:bg-gray-900/50 p-10 rounded-[2rem]">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                {translations.contact.name[language]}
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 dark:focus:ring-cyan-900/50 outline-none transition-all duration-300 bg-white/70"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                {translations.contact.email[language]}
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 dark:focus:ring-cyan-900/50 outline-none transition-all duration-300 bg-white/70"
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                {translations.contact.message[language]}
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                required
                                rows={5}
                                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none transition-all duration-300 resize-none bg-white/70"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group relative w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-5 rounded-2xl font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden hover-lift btn-ripple"
                        >
                            <span className="relative z-10">{translations.contact.send[language]}</span>
                            <Send className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"/>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
