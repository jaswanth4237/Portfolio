import { motion } from 'framer-motion';

const IsometricRoom = () => {
    return (
        <motion.div
            className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
        >
            <svg
                viewBox="0 0 500 420"
                className="w-[90%] max-w-2xl h-auto"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* ── Floor ── */}
                <polygon points="250,380 60,270 250,160 440,270" fill="#0a1428" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />

                {/* ── Back Left Wall ── */}
                <polygon points="250,160 60,270 60,120 250,10" fill="#060f1e" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.5" />

                {/* ── Back Right Wall ── */}
                <polygon points="250,160 440,270 440,120 250,10" fill="#07111f" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.5" />

                {/* ── Window (left wall) ── */}
                <rect x="88" y="95" width="52" height="44" rx="3" fill="#0d1f35" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" transform="skewY(-30)" />
                <line x1="114" y1="95" x2="114" y2="139" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5" transform="skewY(-30)" />
                <line x1="88" y1="117" x2="140" y2="117" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5" transform="skewY(-30)" />
                {/* Window glow */}
                <g transform="skewY(-30)">
                    <rect x="88" y="95" width="52" height="44" rx="3" fill="#38bdf8" fillOpacity="0.04">
                        <animate attributeName="fillOpacity" values="0.04;0.09;0.04" dur="4s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* ── Desk (isometric box) ── */}
                {/* Desk top */}
                <polygon points="310,240 200,175 200,190 310,255" fill="#162236" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" />
                <polygon points="310,240 380,280 380,295 310,255" fill="#0f1c2e" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" />
                <polygon points="200,175 310,240 380,280 270,215" fill="#1a2d44" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
                {/* Desk legs */}
                <line x1="200" y1="190" x2="200" y2="280" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.4" />
                <line x1="310" y1="255" x2="310" y2="345" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.4" />
                <line x1="380" y1="295" x2="380" y2="370" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.4" />

                {/* ── Monitor 1 ── */}
                <polygon points="240,168 230,162 230,130 240,136" fill="#0a1a2e" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
                <polygon points="240,168 285,195 285,163 240,136" fill="#0d2040" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
                <polygon points="230,162 240,168 285,195 275,189 275,157 230,130" fill="#112840" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.8" />
                {/* Monitor screen glow */}
                <polygon points="232,161 236,155 278,179 278,184" fill="#00d4ff" fillOpacity="0.12">
                    <animate attributeName="fillOpacity" values="0.12;0.22;0.12" dur="2.5s" repeatCount="indefinite" />
                </polygon>
                {/* Code lines on monitor */}
                <line x1="236" y1="158" x2="255" y2="168" stroke="#00ffcc" strokeWidth="1" strokeOpacity="0.8" />
                <line x1="236" y1="163" x2="270" y2="175" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.6" />
                <line x1="236" y1="168" x2="258" y2="179" stroke="#00ffcc" strokeWidth="1" strokeOpacity="0.7" />
                <line x1="236" y1="173" x2="275" y2="185" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5" />

                {/* ── Monitor 2 (right) ── */}
                <polygon points="290,188 282,183 282,155 290,160" fill="#0a1a2e" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" />
                <polygon points="290,188 328,210 328,182 290,160" fill="#0d2040" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" />
                <polygon points="282,183 290,188 328,210 320,205 320,177 282,155" fill="#0f1e38" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
                {/* Screen 2 glow - orange/red theme */}
                <polygon points="284,179 288,174 320,191 320,196" fill="#ff6b35" fillOpacity="0.1">
                    <animate attributeName="fillOpacity" values="0.10;0.20;0.10" dur="3s" repeatCount="indefinite" />
                </polygon>
                <line x1="286" y1="176" x2="316" y2="192" stroke="#ff6b35" strokeWidth="0.8" strokeOpacity="0.7">
                    <animate attributeName="strokeOpacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
                </line>
                <line x1="286" y1="181" x2="310" y2="194" stroke="#fff" strokeWidth="0.7" strokeOpacity="0.4" />
                <line x1="286" y1="186" x2="318" y2="200" stroke="#ff6b35" strokeWidth="0.8" strokeOpacity="0.5" />

                {/* ── Desk Lamp ── */}
                <line x1="340" y1="207" x2="340" y2="232" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="340" y1="207" x2="325" y2="195" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
                {/* Lamp head */}
                <ellipse cx="322" cy="193" rx="8" ry="4" fill="#38bdf8" fillOpacity="0.3">
                    <animate attributeName="fillOpacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
                </ellipse>
                {/* Lamp cone light */}
                <polygon points="315,193 330,193 320,221 308,215" fill="#ffd700" fillOpacity="0.05">
                    <animate attributeName="fillOpacity" values="0.05;0.12;0.05" dur="3s" repeatCount="indefinite" />
                </polygon>

                {/* ── Chair ── */}
                <polygon points="220,285 235,294 235,278 220,270" fill="#0f1c2e" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" />
                <polygon points="235,294 260,308 260,292 235,278" fill="#0a1525" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" />
                <polygon points="220,270 235,278 260,292 245,284" fill="#162236" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" />
                {/* Chair back */}
                <line x1="235" y1="278" x2="235" y2="258" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="248" y1="285" x2="248" y2="265" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="235" y1="258" x2="248" y2="265" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.4" />

                {/* ── Campfire ── */}
                <g>
                    {/* Logs */}
                    <ellipse cx="270" cy="360" rx="15" ry="5" fill="#6b4226" fillOpacity="0.8" />
                    {/* Flames */}
                    <ellipse cx="270" cy="350" rx="6" ry="10" fill="#ff6b35" fillOpacity="0.8">
                        <animate attributeName="ry" values="10;14;10" dur="0.8s" repeatCount="indefinite" />
                        <animate attributeName="fillOpacity" values="0.8;1;0.8" dur="0.8s" repeatCount="indefinite" />
                    </ellipse>
                    <ellipse cx="266" cy="353" rx="4" ry="7" fill="#ffd700" fillOpacity="0.9">
                        <animate attributeName="ry" values="7;10;7" dur="0.6s" repeatCount="indefinite" />
                    </ellipse>
                    <ellipse cx="274" cy="354" rx="3" ry="6" fill="#ff4500" fillOpacity="0.7">
                        <animate attributeName="ry" values="6;9;6" dur="0.9s" repeatCount="indefinite" />
                    </ellipse>
                    {/* Glow */}
                    <ellipse cx="270" cy="355" rx="18" ry="10" fill="#ff6b35" fillOpacity="0.06">
                        <animate attributeName="fillOpacity" values="0.06;0.15;0.06" dur="1s" repeatCount="indefinite" />
                        <animate attributeName="ry" values="10;15;10" dur="1s" repeatCount="indefinite" />
                    </ellipse>
                </g>

                {/* ── Welcome sign ── */}
                <polygon points="155,325 155,340 205,368 205,353" fill="#0d2040" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" />
                <text x="158" y="362" fontSize="7" fill="#38bdf8" fillOpacity="0.8" fontFamily="monospace" transform="skewY(-10)">Welcome</text>

                {/* ── Floating particles ── */}
                {[
                    { cx: 170, cy: 200, dur: '4s', dy: -15 },
                    { cx: 400, cy: 180, dur: '5s', dy: -20 },
                    { cx: 130, cy: 300, dur: '3.5s', dy: -12 },
                    { cx: 350, cy: 340, dur: '6s', dy: -18 },
                    { cx: 290, cy: 130, dur: '4.5s', dy: -10 },
                ].map((p, i) => (
                    <circle key={i} cx={p.cx} cy={p.cy} r="2" fill="#38bdf8" fillOpacity="0.7">
                        <animate attributeName="cy" values={`${p.cy};${p.cy + p.dy};${p.cy}`} dur={p.dur} repeatCount="indefinite" />
                        <animate attributeName="fillOpacity" values="0.7;0.2;0.7" dur={p.dur} repeatCount="indefinite" />
                    </circle>
                ))}

                {/* ── Street lamp ── */}
                <line x1="100" y1="190" x2="100" y2="270" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.5" />
                <path d="M100,190 Q90,175 80,178" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
                <circle cx="80" cy="178" r="5" fill="#ffd700" fillOpacity="0.6">
                    <animate attributeName="fillOpacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="80" cy="178" r="12" fill="#ffd700" fillOpacity="0.05">
                    <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="fillOpacity" values="0.05;0.12;0.05" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* ── Tree (right side) ── */}
                <line x1="410" y1="230" x2="410" y2="150" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.3" />
                <ellipse cx="405" cy="135" rx="30" ry="22" fill="#0a2015" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.25">
                    <animate attributeName="rx" values="30;33;30" dur="5s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="420" cy="120" rx="20" ry="15" fill="#0d2a1a" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.2">
                    <animate attributeName="rx" values="20;22;20" dur="6s" repeatCount="indefinite" />
                </ellipse>
            </svg>
        </motion.div>
    );
};

export default IsometricRoom;
