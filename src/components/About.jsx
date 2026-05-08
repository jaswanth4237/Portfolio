import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

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

    return (
        <section id="about" className="section-padding scroll-mt-20">
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
                    <div className="space-y-6 text-zinc-400 text-lg">
                        <p>
                            I am a <span className="text-white">Flutter & Full Stack Developer</span> with a deep interest in Artificial Intelligence and Machine Learning. Currently in my second year of B.Tech, I bridge the gap between clean UI and robust backend architecture.
                        </p>
                        <p>
                            I enjoy building real-world applications that solve practical problems, following industry standards like <span className="text-white">MVVM, Clean Architecture, and Event Sourcing</span>.
                        </p>

                        <div className="pt-8 space-y-8">
                            <h3 className="text-xl font-semibold text-white flex items-center">
                                <GraduationCap className="mr-3 text-primary" size={24} /> Education
                            </h3>
                            <div className="space-y-6 border-l-2 border-zinc-800 pl-6 ml-3">
                                {education.map((edu, i) => (
                                    <div key={i} className="relative">
                                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-zinc-900 border-2 border-primary" />
                                        <h4 className="font-bold text-white">{edu.school}</h4>
                                        <p className="text-sm text-zinc-400">{edu.degree} • {edu.period}</p>
                                        <p className="text-primary font-medium mt-1">{edu.score}</p>
                                    </div>
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
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-6 hover:border-zinc-700 transition-colors"
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
