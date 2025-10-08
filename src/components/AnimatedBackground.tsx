import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    if (isMobile) {
        // Lightweight static gradient for mobile devices
        return (
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-950 dark:to-cyan-950" />
        );
    }

    // Full animated background for desktop
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-950 dark:via-gray-950 dark:to-cyan-950"></div>

            {/* A few lightweight animated blobs */}
            <motion.div
                className="absolute w-64 h-64 rounded-full blur-3xl bg-cyan-500/20 dark:bg-cyan-400/20"
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{ top: "15%", left: "10%" }}
            />
            <motion.div
                className="absolute w-56 h-56 rounded-full blur-2xl bg-blue-400/15 dark:bg-blue-500/15"
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                style={{ top: "50%", left: "60%" }}
            />

            {/* Simple floating particles */}
            <svg className="absolute inset-0 w-full h-full">
                {Array.from({ length: 10 }).map((_, i) => (
                    <circle
                        key={i}
                        cx={`${Math.random() * 100}%`}
                        cy={`${Math.random() * 100}%`}
                        r={1 + Math.random() * 2}
                        className="fill-cyan-400 dark:fill-cyan-300"
                        opacity={0.1 + Math.random() * 0.1}
                    >
                        <animate
                            attributeName="cy"
                            values="0%;100%;0%"
                            dur={`${10 + Math.random() * 10}s`}
                            repeatCount="indefinite"
                        />
                    </circle>
                ))}
            </svg>
        </div>
    );
};
