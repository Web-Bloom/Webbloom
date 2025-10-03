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
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        {translations.contact.title[language]}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {translations.contact.subtitle[language]}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            {translations.contact.name[language]}
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            {translations.contact.email[language]}
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                            {translations.contact.message[language]}
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            required
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-cyan-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                        <span>{translations.contact.send[language]}</span>
                        <Send className="w-5 h-5"/>
                    </button>
                </form>
            </div>
        </section>
    );
};
