import { motion } from "framer-motion";

export const AnimatedBackground = () => {

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Light/Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br
                      from-slate-50 via-white to-cyan-50
                      dark:from-slate-950 dark:via-gray-950 dark:to-cyan-950"></div>

            {/* Floating blobs */}
            <motion.div
                className="absolute w-64 h-64 rounded-full blur-3xl
                   bg-cyan-500/20 dark:bg-cyan-400/20"
                animate="float"
                style={{ top: "15%", left: "10%" }}
            />
            <motion.div
                className="absolute w-48 h-48 rounded-full blur-2xl
                   bg-blue-400/15 dark:bg-blue-500/15"
                animate="float"
                style={{ top: "50%", left: "60%" }}
            />
            <motion.div
                className="absolute w-72 h-72 rounded-full blur-3xl
                   bg-teal-400/10 dark:bg-teal-500/10"
                animate="float"
                style={{ top: "35%", left: "30%" }}
            />

            {/* Morphing triangles */}
            <svg className="absolute inset-0 w-full h-full">
                <polygon
                    points="50,0 100,100 0,100"
                    className="fill-cyan-300/10 dark:fill-cyan-500/10"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 50 50"
                        to="360 50 50"
                        dur="25s"
                        repeatCount="indefinite"
                    />
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        values="0 0; 50 20; -20 10; 0 0"
                        dur="20s"
                        repeatCount="indefinite"
                        additive="sum"
                    />
                </polygon>
                <polygon
                    points="50,0 100,100 0,100"
                    className="fill-blue-300/5 dark:fill-blue-500/5"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="360 50 50"
                        to="0 50 50"
                        dur="30s"
                        repeatCount="indefinite"
                    />
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        values="0 0; -50 30; 20 15; 0 0"
                        dur="25s"
                        repeatCount="indefinite"
                        additive="sum"
                    />
                </polygon>
            </svg>

            {/* Tech particles */}
            <svg className="absolute inset-0 w-full h-full">
                {Array.from({ length: 20 }).map((_, i) => (
                    <circle
                        key={i}
                        cx={`${Math.random() * 100}%`}
                        cy={`${Math.random() * 100}%`}
                        r={1 + Math.random() * 3}
                        className="fill-cyan-400 dark:fill-cyan-300"
                        opacity={0.1 + Math.random() * 0.1}
                    >
                        <animate
                            attributeName="cy"
                            values={`${Math.random() * 100}%;${Math.random() * 100}%;${Math.random() * 100}%`}
                            dur={`${8 + Math.random() * 10}s`}
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="cx"
                            values={`${Math.random() * 100}%;${Math.random() * 100}%;${Math.random() * 100}%`}
                            dur={`${10 + Math.random() * 12}s`}
                            repeatCount="indefinite"
                        />
                    </circle>
                ))}
            </svg>
        </div>
    );
};
