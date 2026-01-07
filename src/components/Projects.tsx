import { motion } from "framer-motion";
import { ExternalLink, Github, BarChart3, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Retail Market Analysis",
        description:
            "AI-powered sales forecasting system using CNN and ARIMA models. Features interactive Streamlit interface for real-time predictions and comprehensive Tableau reports for business insights.",
        technologies: ["Python", "TensorFlow", "ARIMA", "Streamlit", "Tableau"],
        icon: BarChart3,
        gradient: "from-accent to-coral-light",
        github: "#",
        demo: "#",
    },
    {
        title: "Pixagram",
        description:
            "Full-stack photo-sharing web application built with MEAN stack. Includes secure file upload, JWT authentication, infinite scroll pagination, and deployed on AWS infrastructure.",
        technologies: ["MongoDB", "Express", "Angular", "Node.js", "AWS"],
        icon: Camera,
        gradient: "from-primary to-navy-light",
        github: "#",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section id="portfolio" className="section-padding bg-secondary">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Showcasing my best work in full-stack development and machine learning applications
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:border-accent/50 transition-all duration-300">
                                {/* Project Header with Gradient */}
                                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <project.icon
                                            size={80}
                                            className="text-white/20 group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <Button
                                            variant="coral"
                                            size="sm"
                                            asChild
                                            className="flex-1"
                                        >
                                            <a href={project.demo} className="flex items-center justify-center gap-2">
                                                <ExternalLink size={14} />
                                                Live Demo
                                            </a>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="flex-1"
                                        >
                                            <a href={project.github} className="flex items-center justify-center gap-2">
                                                <Github size={14} />
                                                View Code
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
