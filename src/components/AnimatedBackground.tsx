export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30"></div>

      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2">
              <animate attributeName="stopColor" values="#06b6d4;#0891b2;#06b6d4" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1">
              <animate attributeName="stopColor" values="#0891b2;#06b6d4;#0891b2" dur="8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="gradient3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.08" />
          </linearGradient>

          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          </filter>
        </defs>

        <g className="animate-morph1">
          <ellipse cx="20%" cy="30%" rx="300" ry="250" fill="url(#gradient1)">
            <animate attributeName="rx" values="300;350;280;300" dur="12s" repeatCount="indefinite" />
            <animate attributeName="ry" values="250;220;270;250" dur="12s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 20 -30; -10 20; 0 0"
              dur="20s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>

        <g className="animate-morph2">
          <circle cx="80%" cy="60%" r="200" fill="url(#gradient2)">
            <animate attributeName="r" values="200;240;190;200" dur="10s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; -25 20; 15 -25; 0 0"
              dur="18s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        <g className="animate-morph3">
          <polygon points="0,100 50,0 100,80" fill="url(#gradient3)" transform="translate(60%, 20%) scale(3)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="40s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="1000 100; 950 150; 1020 80; 1000 100"
              dur="15s"
              repeatCount="indefinite"
              additive="sum"
            />
          </polygon>
        </g>

        <g className="animate-morph4">
          <path
            d="M 300,200 Q 400,100 500,200 T 700,200"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="80"
            opacity="0.15"
          >
            <animate attributeName="d" values="M 300,200 Q 400,100 500,200 T 700,200; M 300,200 Q 400,300 500,200 T 700,200; M 300,200 Q 400,100 500,200 T 700,200" dur="14s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 30 40; 0 0"
              dur="16s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        <g filter="url(#goo)" opacity="0.4">
          <circle cx="15%" cy="70%" r="80" fill="#06b6d4" className="animate-float">
            <animate attributeName="cy" values="70%;65%;75%;70%" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="18%" cy="68%" r="60" fill="#0891b2" className="animate-float animation-delay-1000">
            <animate attributeName="cy" values="68%;73%;63%;68%" dur="7s" repeatCount="indefinite" />
          </circle>
        </g>

        <g className="animate-spin-slow" transform-origin="85% 85%">
          <circle cx="85%" cy="85%" r="120" fill="none" stroke="url(#gradient2)" strokeWidth="2" opacity="0.2">
            <animate attributeName="r" values="120;140;120" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="85%" cy="85%" r="90" fill="none" stroke="url(#gradient2)" strokeWidth="2" opacity="0.15">
            <animate attributeName="r" values="90;110;90" dur="6s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
    </div>
  );
};
