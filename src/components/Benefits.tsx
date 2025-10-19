import {Zap, DollarSign, HeartHandshake} from 'lucide-react';
import {Language} from '../types';
import {translations} from '../translations';

interface BenefitsProps {
    language: Language;
}

export const Benefits = ({language}: BenefitsProps) => {
    const benefits = [
        {
            icon: Zap,
            title: translations.benefits.fast.title[language],
            desc: translations.benefits.fast.description[language],
            gradient: 'from-cyan-500 to-blue-500',
            delay: 'animation-delay-100'
        },
        {
            icon: DollarSign,
            title: translations.benefits.affordable.title[language],
            desc: translations.benefits.affordable.description[language],
            gradient: 'from-teal-500 to-cyan-500',
            delay: 'animation-delay-200'
        },
        {
            icon: HeartHandshake,
            title: translations.benefits.support.title[language],
            desc: translations.benefits.support.description[language],
            gradient: 'from-blue-500 to-cyan-500',
            delay: 'animation-delay-300'
        },
    ];

    return (
        <section
            className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white via-cyan-50/20 to-white dark:from-gray-950 dark:via-cyan-950/10 dark:to-gray-950">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-20 text-center">
          <span
              className="bg-gradient-to-r from-gray-900 to-cyan-700 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent">
            {translations.benefits.title[language]}
          </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className={`group text-center animate-fadeInUp ${benefit.delay}`}
                            >
                                <div className="relative inline-block mb-8">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                                    <div
                                        className={`relative w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                        <Icon className="w-10 h-10 text-white"/>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mx-auto">
                                    {benefit.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
