import { motion } from 'framer-motion';

const IsometricRoom = () => {
    return (
        <motion.div
            className="absolute bottom-0 left-0 right-0 pointer-events-none -z-10 flex items-end justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
        >
            <svg
                viewBox="0 0 500 420"
                className="w-full max-w-4xl h-auto opacity-40"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* ── Floor ── */}
                <polygon points="250,385 55,270 250,155 445,270" fill="#0d2137" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.8" />

                {/* ── Back Left Wall ── */}
                <polygon points="250,155 55,270 55,115 250,0" fill="#071526" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />

                {/* ── Back Right Wall ── */}
                <polygon points="250,155 445,270 445,115 250,0" fill="#091c30" stroke="#00bcd4" strokeWidth="1.5" strokeOpacity="0.6" />

                {/* ── Window (left wall) ── */}
                <g transform="translate(90,90) skewY(-30)">
                    <rect x="0" y="0" width="55" height="48" rx="3" fill="#0a2040" stroke="#38bdf8" strokeWidth="1.5" />
                    <line x1="27" y1="0" x2="27" y2="48" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
                    <line x1="0" y1="24" x2="55" y2="24" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
                    <rect x="0" y="0" width="55" height="48" rx="3" fill="#1e6fa8" fillOpacity="0.3">
                        <animate attributeName="fillOpacity" values="0.3;0.55;0.3" dur="5s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* ── Desk ── */}
                <polygon points="200,180 315,245 385,205 270,140" fill="#0f2540" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
                <polygon points="200,180 200,210 315,275 315,245" fill="#09192e" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" />
                <polygon points="315,245 315,275 385,235 385,205" fill="#071428" stroke="#00bcd4" strokeWidth="1" strokeOpacity="0.5" />
                <line x1="205" y1="210" x2="205" y2="290" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="312" y1="275" x2="312" y2="345" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="382" y1="235" x2="382" y2="310" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.5" />

                {/* ── Monitor 1 — cyan code ── */}
                <polygon points="235,165 225,159 225,122 235,128" fill="#0d2544" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.8" />
                <polygon points="235,165 282,192 282,155 235,128" fill="#091c38" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.8" />
                <polygon points="225,159 235,165 282,192 272,186 272,149 225,122" fill="#050e1e" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.9" />
                <polygon points="227,158 231,152 269,172 269,178" fill="#00e5ff" fillOpacity="0.15">
                    <animate attributeName="fillOpacity" values="0.15;0.3;0.15" dur="2s" repeatCount="indefinite" />
                </polygon>
                <line x1="229" y1="154" x2="249" y2="164" stroke="#00e5ff" strokeWidth="1.2" strokeOpacity="0.9" />
                <line x1="229" y1="159" x2="265" y2="175" stroke="#4dd0e1" strokeWidth="0.8" strokeOpacity="0.7">
                    <animate attributeName="strokeOpacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" />
                </line>
                <line x1="229" y1="164" x2="253" y2="176" stroke="#00e5ff" strokeWidth="1" strokeOpacity="0.8" />
                <line x1="229" y1="169" x2="268" y2="182" stroke="#80cbc4" strokeWidth="0.7" strokeOpacity="0.6" />
                <line x1="229" y1="174" x2="245" y2="182" stroke="#00e5ff" strokeWidth="0.9" strokeOpacity="0.7" />

                {/* ── Monitor 2 — orange UI ── */}
                <polygon points="288,185 280,180 280,148 288,153" fill="#0d2544" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.8" />
                <polygon points="288,185 328,208 328,176 288,153" fill="#091c38" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.8" />
                <polygon points="280,180 288,185 328,208 320,203 320,171 280,148" fill="#050e1e" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.9" />
                <polygon points="282,176 286,170 316,185 316,191" fill="#ff6d3b" fillOpacity="0.18">
                    <animate attributeName="fillOpacity" values="0.18;0.32;0.18" dur="2.8s" repeatCount="indefinite" />
                </polygon>
                <line x1="284" y1="173" x2="313" y2="188" stroke="#ff6d3b" strokeWidth="1.1" strokeOpacity="0.9">
                    <animate attributeName="strokeOpacity" values="0.9;0.5;0.9" dur="1.4s" repeatCount="indefinite" />
                </line>
                <line x1="284" y1="178" x2="308" y2="190" stroke="#ffffff" strokeWidth="0.6" strokeOpacity="0.5" />
                <line x1="284" y1="183" x2="314" y2="197" stroke="#ff6d3b" strokeWidth="0.9" strokeOpacity="0.6" />

                {/* ── Desk Lamp ── */}
                <line x1="342" y1="200" x2="342" y2="225" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />
                <line x1="342" y1="200" x2="326" y2="188" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />
                <ellipse cx="323" cy="186" rx="9" ry="5" fill="#0a2540" stroke="#38bdf8" strokeWidth="1.5" />
                <polygon points="316,186 330,186 322,215 309,209" fill="#ffd54f" fillOpacity="0.12">
                    <animate attributeName="fillOpacity" values="0.12;0.28;0.12" dur="3s" repeatCount="indefinite" />
                </polygon>
                <circle cx="323" cy="186" r="4" fill="#ffd54f" fillOpacity="1">
                    <animate attributeName="fillOpacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* ── Chair ── */}
                <polygon points="215,285 230,294 256,280 241,271" fill="#0d2137" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" />
                <polygon points="215,285 215,298 230,307 230,294" fill="#091c30" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" />
                <polygon points="230,294 230,307 256,293 256,280" fill="#071428" stroke="#00bcd4" strokeWidth="1" strokeOpacity="0.5" />
                <line x1="230" y1="294" x2="230" y2="268" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.7" />
                <line x1="244" y1="287" x2="244" y2="261" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.7" />
                <line x1="230" y1="268" x2="244" y2="261" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
                <line x1="235" y1="298" x2="235" y2="320" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.5" />

                {/* ── Campfire ── */}
                <ellipse cx="275" cy="363" rx="14" ry="5" fill="#8d6e52" />
                <ellipse cx="267" cy="361" rx="6" ry="3" fill="#6e5240" />
                <ellipse cx="283" cy="361" rx="5" ry="2.5" fill="#6e5240" />
                <ellipse cx="275" cy="351" rx="7" ry="12" fill="#ff6d3b" fillOpacity="0.95">
                    <animate attributeName="ry" values="12;16;11;14;12" dur="0.7s" repeatCount="indefinite" />
                    <animate attributeName="cx" values="275;273;276;274;275" dur="0.7s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="272" cy="355" rx="4.5" ry="8" fill="#ffb300" fillOpacity="0.9">
                    <animate attributeName="ry" values="8;11;7;10;8" dur="0.55s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="278" cy="356" rx="3.5" ry="7" fill="#ff8a00" fillOpacity="0.85">
                    <animate attributeName="ry" values="7;10;6;9;7" dur="0.85s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="275" cy="353" rx="2" ry="5" fill="#fff9c4" fillOpacity="0.8">
                    <animate attributeName="ry" values="5;8;4;6;5" dur="0.5s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="275" cy="360" rx="22" ry="10" fill="#ff6d3b" fillOpacity="0.07">
                    <animate attributeName="fillOpacity" values="0.07;0.16;0.07" dur="0.9s" repeatCount="indefinite" />
                    <animate attributeName="rx" values="22;28;20;25;22" dur="0.9s" repeatCount="indefinite" />
                </ellipse>

                {/* ── Welcome sign ── */}
                <polygon points="150,328 150,343 205,373 205,358" fill="#e8e2da" stroke="#c5bdb5" strokeWidth="1" />
                <polygon points="150,328 205,358 205,343 150,313" fill="#ede8e2" stroke="#c5bdb5" strokeWidth="1" />
                <text x="155" y="350" fontSize="7.5" fill="#5a5248" fontFamily="serif" fontWeight="bold" transform="skewY(-10)">Welcome</text>

                {/* ── Street lamp ── */}
                <line x1="105" y1="185" x2="105" y2="268" stroke="#d8d0c8" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M105,185 Q95,168 82,172" stroke="#d8d0c8" strokeWidth="2" fill="none" strokeLinecap="round" />
                <circle cx="81" cy="171" r="7" fill="#fff9c4" fillOpacity="0.9">
                    <animate attributeName="fillOpacity" values="0.9;1;0.9" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="81" cy="171" r="7" fill="#ffd54f" fillOpacity="0.5">
                    <animate attributeName="r" values="7;11;7" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="fillOpacity" values="0.5;0.0;0.5" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="81" cy="171" r="28" fill="#ffd54f" fillOpacity="0.04">
                    <animate attributeName="fillOpacity" values="0.04;0.10;0.04" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="r" values="28;38;28" dur="2.5s" repeatCount="indefinite" />
                </circle>

                {/* ── Tree ── */}
                <line x1="415" y1="235" x2="415" y2="148" stroke="#c8c0b8" strokeWidth="2.5" strokeLinecap="round" />
                <ellipse cx="408" cy="133" rx="32" ry="24" fill="#1a2d1a" stroke="#c8c0b8" strokeWidth="1" strokeOpacity="0.4">
                    <animate attributeName="rx" values="32;35;32" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="ry" values="24;27;24" dur="6s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="425" cy="118" rx="22" ry="16" fill="#1e3320" stroke="#c8c0b8" strokeWidth="1" strokeOpacity="0.35">
                    <animate attributeName="rx" values="22;24;22" dur="7s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="400" cy="120" rx="16" ry="12" fill="#1a2d1a" stroke="#c8c0b8" strokeWidth="0.8" strokeOpacity="0.3">
                    <animate attributeName="ry" values="12;15;12" dur="5s" repeatCount="indefinite" />
                </ellipse>

                {/* ── Sparkle particles ── */}
                {[
                    { cx: 165, cy: 210, dur: '4s', dy: -20, color: '#ffd54f' },
                    { cx: 390, cy: 175, dur: '5.5s', dy: -25, color: '#00e5ff' },
                    { cx: 128, cy: 310, dur: '3.8s', dy: -15, color: '#ffd54f' },
                    { cx: 348, cy: 345, dur: '6s', dy: -18, color: '#ff6d3b' },
                    { cx: 295, cy: 128, dur: '4.5s', dy: -12, color: '#e8e2da' },
                    { cx: 72, cy: 250, dur: '5s', dy: -22, color: '#ffd54f' },
                ].map((p, i) => (
                    <circle key={i} cx={p.cx} cy={p.cy} r="2.2" fill={p.color} fillOpacity="0.8">
                        <animate attributeName="cy" values={`${p.cy};${p.cy + p.dy};${p.cy}`} dur={p.dur} repeatCount="indefinite" />
                        <animate attributeName="fillOpacity" values="0.8;0.1;0.8" dur={p.dur} repeatCount="indefinite" />
                        <animate attributeName="r" values="2.2;3.2;2.2" dur={p.dur} repeatCount="indefinite" />
                    </circle>
                ))}
            </svg>
        </motion.div>
    );
};

export default IsometricRoom;
