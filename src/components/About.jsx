import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const About = () => {
    const experiences = [
        {
            title: "Flutter Developer Intern",
            company: "Technical Hub Private Limited",
            period: "May 2025 - Present",
            description: "Developing cross-platform mobile applications using Flutter in a Full Stack environment."
        },
        {
            title: "Mobile App Developer Intern",
            company: "Cognifyz Technologies",
            period: "Nov 2025 - Feb 2026",
            description: "Implemented real-time features and backend integration for Flutter applications."
        },
        {
            title: "Java Full Stack Intern",
            company: "HQ Edutech",
            period: "Nov 2023 - May 2024",
            description: "Hands-on experience in front-end and back-end development using Java technologies."
        }
    ];

    const education = [
        {
            school: "Aditya College of Engineering and Technology",
            degree: "B.Tech in AI & ML",
            period: "2024 - 2027",
            score: "8.59 CGPA"
        },
        {
            school: "BVC College of Engineering",
            degree: "Diploma in Computer Engineering",
            period: "Completed",
            score: "84.49%"
        }
    ];

    // Mouse parallax
    const sectionRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
    const blobX = useTransform(springX, [-1, 1], [-60, 60]);
    const blobY = useTransform(springY, [-1, 1], [-40, 40]);

    // Stars
    const [stars] = useState(() =>
        Array.from({ length: 40 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 5,
            duration: Math.random() * 3 + 2,
        }))
    );

    const handleMouseMove = (e) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="section-padding scroll-mt-20 relative overflow-hidden"
        >
            {/* Stars */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                {stars.map(star => (
                    <motion.div
                        key={star.id}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: star.size,
                            height: star.size,
                        }}
                        animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.4, 1] }}
                        transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: 'easeInOut' }}
                    />
                ))}
            </div>

            {/* Glowing Cosmic Orb - moves autonomously + follows mouse */}
            <motion.div
                className="absolute pointer-events-none -z-10"
                style={{ x: blobX, y: blobY, right: '-10%', top: '5%' }}
            >
                <motion.div
                    className="w-72 h-96 md:w-96 md:h-[500px] rounded-[60%_40%_55%_45%/50%_60%_40%_50%]"
                    animate={{
                        borderRadius: [
                            '60% 40% 55% 45% / 50% 60% 40% 50%',
                            '40% 60% 45% 55% / 60% 40% 60% 40%',
                            '55% 45% 40% 60% / 45% 55% 45% 55%',
                            '60% 40% 55% 45% / 50% 60% 40% 50%',
                        ],
                        y: [-30, 30, -20, 30, -30],
                        rotate: [-5, 5, -3, 5, -5],
                    }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        background: 'radial-gradient(ellipse at 40% 35%, rgba(251,113,133,0.9) 0%, rgba(249,115,22,0.7) 35%, rgba(234,179,8,0.5) 60%, rgba(168,85,247,0.3) 80%, transparent 100%)',
                        filter: 'blur(2px)',
                        boxShadow: '0 0 80px rgba(249,115,22,0.4), 0 0 160px rgba(251,113,133,0.2)',
                    }}
                />
                {/* Outer atmospheric glow */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        background: 'radial-gradient(circle, rgba(251,113,133,0.3) 0%, rgba(249,115,22,0.1) 50%, transparent 75%)',
                        filter: 'blur(30px)',
                        transform: 'scale(1.4)',
                    }}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-12 flex items-center">
                    <span className="text-primary mr-2">01.</span> About Me
                </h2>

                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-6 text-[#b3b3b3] text-lg">
                        <p>
                            I am a <span className="text-white">Flutter & Full Stack Developer</span> with a deep interest in Artificial Intelligence and Machine Learning. Currently in my final year of B.Tech, I bridge the gap between clean UI and robust backend architecture.
                        </p>
                        <p>
                            I enjoy building real-world applications that solve practical problems, following industry standards like <span className="text-white">MVVM, Clean Architecture, and Event Sourcing</span>.
                        </p>

                        <div className="pt-8 space-y-8">
                            <h3 className="text-xl font-semibold text-white flex items-center">
                                <GraduationCap className="mr-3 text-primary" size={24} /> Education
                            </h3>
                            <div className="space-y-6 border-l-2 border-border pl-6 ml-3">
                                {education.map((edu, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 80 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false, margin: '-50px' }}
                                        transition={{ delay: i * 0.15, duration: 0.5, ease: 'easeOut' }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-primary" />
                                        <h4 className="font-bold text-white">{edu.school}</h4>
                                        <p className="text-sm text-zinc-400">{edu.degree} • {edu.period}</p>
                                        <p className="text-primary font-medium mt-1">{edu.score}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div id="experience" className="space-y-8">
                        <h3 className="text-xl font-semibold text-white flex items-center">
                            <Briefcase className="mr-3 text-primary" size={24} /> Experience
                        </h3>
                        <div className="space-y-8">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 120 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, margin: '-60px' }}
                                    transition={{ delay: i * 0.15, duration: 0.55, ease: 'easeOut' }}
                                    className="glass-card p-6 hover:border-[#4d4d4d] transition-colors"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-white">{exp.title}</h4>
                                        <span className="text-xs font-medium text-zinc-500 flex items-center">
                                            <Calendar size={14} className="mr-1" /> {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-primary text-sm font-medium mb-3">{exp.company}</p>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
