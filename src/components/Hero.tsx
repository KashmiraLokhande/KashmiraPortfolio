import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/kashmira-profile.jpg";
import resumePdf from "@/assets/kashmira-lokhande-resume.pdf";

export default function Hero() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center bg-primary overflow-hidden"
        >
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
                <div className="absolute inset-0 gradient-blob rounded-full opacity-30 blur-3xl animate-pulse-slow" />
                <div className="absolute top-10 right-10 w-32 h-32 bg-coral/40 rounded-full blur-2xl animate-float" />
                <div className="absolute bottom-20 right-40 w-24 h-24 bg-coral-light/30 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-accent text-lg font-medium"
                        >
                            Hi there, I am
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2 mb-4"
                        >
                            Kashmira Lokhande
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-primary-foreground/80 mb-6"
                        >
                            Full Stack Web Developer & Computer Science Specialist
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-primary-foreground/60 max-w-md mb-8 leading-relaxed"
                        >
                            Solving complex problems with innovative web and ML solutions.
                            Passionate about creating scalable, high-performance applications
                            that make a real impact.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button
                                variant="coral"
                                size="lg"
                                onClick={() => scrollToSection("#contact")}
                            >
                                <Mail size={18} />
                                Contact Me
                            </Button>
                            <Button
                                variant="coral-outline"
                                size="lg"
                                asChild
                            >
                                <a href="/KashmiraPortfolio/kashmira-lokhande-resume.pdf" className="flex items-center gap-2">
                                    <Download size={18} />
                                    Download CV
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:flex justify-center items-center"
                    >
                        <div className="relative">
                            {/* Gradient Background Circle */}
                            <div className="absolute inset-0 gradient-blob rounded-full blur-md scale-105" />

                            {/* Profile Image */}
                            <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-accent/30">
                                <img
                                    src={profileImage}
                                    alt="Kashmira Lokhande"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 w-16 h-16 bg-accent/80 rounded-full flex items-center justify-center shadow-lg"
                            >
                                <span className="text-2xl">👩‍💻</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 -left-4 w-14 h-14 bg-coral-light/80 rounded-full flex items-center justify-center shadow-lg"
                            >
                                <span className="text-xl">🚀</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.button
                    onClick={() => scrollToSection("#about")}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-primary-foreground/60 hover:text-accent transition-colors"
                >
                    <ArrowDown size={24} />
                </motion.button>
            </motion.div>
        </section>
    );
}
