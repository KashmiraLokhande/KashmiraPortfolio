import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
    {
        degree: "Master of Science in Computer Science",
        institution: "California State University, Long Beach",
        period: "2020 - 2022",
        gpa: "GPA: 3.8",
    },
    {
        degree: "Bachelor of Engineering in Computer Science",
        institution: "Dr. Babasaheb Ambedkar Marathwada University",
        period: "2015 - 2019",
        gpa: "GPA: 3.5",
    },
];

const skillCategories = [
    {
        title: "Programming",
        skills: ["Python", "Java", "SQL", "Bash/Shell"],
        color: "bg-accent",
    },
    {
        title: "Web Development",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "ReactJS", "Node.js", "Express", "PHP"],
        color: "bg-coral-light",
    },
    {
        title: "Frameworks & Core",
        skills: ["Django", "Flask", "REST API", "SOAP", "Microservices", "GraphQL"],
        color: "bg-primary",
    },
    {
        title: "DevOps & Cloud",
        skills: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "Jenkins", "Terraform", "CI/CD"],
        color: "bg-accent",
    },
    {
        title: "Databases",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "NoSQL", "Redis"],
        color: "bg-coral-light",
    },
    {
        title: "Machine Learning",
        skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "OCR", "OpenCV"],
        color: "bg-primary",
    },
];

export default function About() {
    return (
        <section id="about" className="section-padding bg-secondary">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                        About Me
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                        Passionate Computer Scientist
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Who I Am
                        </h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                I'm a dedicated Full Stack Developer with a Master's degree in Computer
                                Science from California State University, Long Beach. My journey in tech
                                is driven by a genuine passion for creating innovative solutions that
                                solve real-world problems.
                            </p>
                            <p>
                                With hands-on experience in both frontend and backend development,
                                I specialize in building scalable web applications, designing efficient
                                APIs, and integrating machine learning capabilities into modern software
                                systems.
                            </p>
                            <p>
                                I believe in writing clean, maintainable code and following best practices
                                to deliver high-quality products. Whether it's optimizing a complex payroll
                                system or developing an OCR solution with 92% accuracy, I'm committed to
                                excellence in every project I undertake.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.degree}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8 border-l-2 border-accent"
                                >
                                    <div className="absolute -left-3 top-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                                        <GraduationCap size={14} className="text-accent-foreground" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-foreground">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-muted-foreground">{edu.institution}</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm">
                                        <span className="flex items-center gap-1 text-accent">
                                            <Calendar size={14} />
                                            {edu.period}
                                        </span>
                                        <span className="text-muted-foreground">{edu.gpa}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                        Technical Skills
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-card rounded-xl p-6 shadow-lg border border-border"
                            >
                                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                    <span className={`w-3 h-3 rounded-full ${category.color}`} />
                                    {category.title}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
