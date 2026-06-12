import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { GitHub, LinkedIn, LeetCode, HackerRank } from './BrandIcons';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form Submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" className="section-padding scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-[#b3b3b3] max-w-lg mx-auto">
                        I&apos;m currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-lg bg-surface border border-border text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold">Email</h4>
                                <a href="mailto:24p35a4237@acet.ac.in" className="text-[#808080] hover:text-white transition-colors">
                                    24p35a4237@acet.ac.in
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-lg bg-surface border border-border text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold">Phone</h4>
                                <p className="text-[#808080]">+91 9182845990</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-lg bg-surface border border-border text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold">Location</h4>
                                <p className="text-[#808080]">Andhra Pradesh, India</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-[#808080]">Social Profiles</h4>
                            <div className="flex space-x-4">
                                <a href="https://github.com/jaswanth4237" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-surface border border-border text-[#808080] hover:text-white hover:border-[#4d4d4d] transition-all">
                                    <GitHub size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/jaswanth-vasamsetti-997079297/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-surface border border-border text-[#808080] hover:text-white hover:border-[#4d4d4d] transition-all">
                                    <LinkedIn size={20} />
                                </a>
                                <a href="https://leetcode.com/u/Vasamsetti_Jaswanth/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-surface border border-border text-[#808080] hover:text-white hover:border-[#4d4d4d] transition-all">
                                    <LeetCode size={20} />
                                </a>
                                <a href="https://www.hackerrank.com/profile/hackmail2110" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-surface border border-border text-[#808080] hover:text-white hover:border-[#4d4d4d] transition-all">
                                    <HackerRank size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#808080]">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#808080]">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#808080]">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
                            {isSubmitted ? (
                                <CheckCircle2 className="ml-2" size={18} />
                            ) : (
                                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            )}
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
