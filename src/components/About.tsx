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
        title: "Programming Languages",
        skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "Bash/Shell"],
        color: "bg-accent",
    },
    {
        title: "Backend & APIs",
        skills: ["Django", "Flask", "Node.js", "Express", "REST APIs", "GraphQL", "gRPC", "Protobuf"],
        color: "bg-coral-light",
    },
    {
        title: "Frontend Development",
        skills: ["React", "Angular", "HTML", "CSS", "Bootstrap"],
        color: "bg-primary",
    },
    {
        title: "Distributed Systems",
        skills: ["Microservices", "Apache Kafka", "Event-Driven Architecture"],
        color: "bg-accent",
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS", "Amazon EKS", "Docker", "Kubernetes", "Jenkins", "Terraform", "CI/CD"],
        color: "bg-coral-light",
    },
    {
        title: "Observability",
        skills: ["OpenTelemetry", "Grafana Tempo", "Sentry", "OpenSearch"],
        color: "bg-primary",
    },
    {
        title: "Databases & Caching",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
        color: "bg-accent",
    },
    {
        title: "Developer Tools",
        skills: ["Git", "GitHub", "GitHub Copilot", "Claude Code"],
        color: "bg-coral-light",
    },
    {
        title: "Machine Learning",
        skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "OCR", "OpenCV"],
        color: "bg-coral-light",
    },
    {
        title: "Agentic AI",
        skills: ["LLM APIs", "Tool Calling", "LangChain", "LangGraph", "Retrieval-Augmented Generation (RAG)", "Model Context Protocol (MCP)", "Agent Workflows"],
        color: "bg-coral-light",
    },
];

export default function About() {
    return (
        <section id="about" className="section-padding bg-secondary">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                        About Me
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 tracking-tight">
                        Curious Mind. Systems Thinker. Builder.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-12">
                    {/* Biography */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed mb-5">
                            I like figuring out how things work—and making them work better.
                        </p>

                        <div className="space-y-4 text-base text-muted-foreground leading-7 max-w-prose">
                            <p>
                                I’m a Software Engineer based in Atlanta, building payroll
                                and platform solutions at{" "}
                                <span className="font-semibold text-foreground">TriNet</span>.
                                My work connects React interfaces, Python services, and
                                distributed systems supporting 1,858 small and midsize
                                businesses.
                            </p>

                            <p>
                                I enjoy the engineering behind the experience: designing APIs,
                                connecting services with gRPC and Kafka, and following traces
                                to uncover problems. My observability work helped reduce
                                incident resolution time by{" "}
                                <span className="font-semibold text-foreground">35%</span>.
                            </p>

                            <p>
                                I care about what happens after code ships—how it scales,
                                how it recovers, and how easily another engineer can build
                                on it. That’s what makes a good solution exciting to me.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education Card */}
                    <motion.aside
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 md:p-7"
                    >
                        <h3 className="flex items-center gap-3 text-xl font-semibold text-foreground mb-6">
                            <GraduationCap size={22} className="text-accent shrink-0" />
                            Education
                        </h3>

                        <div className="space-y-6">
                            {education.map((edu) => (
                                <div
                                    key={edu.degree}
                                    className="border-l-2 border-accent/40 pl-4"
                                >
                                    <h4 className="text-base font-semibold text-foreground leading-snug">
                                        {edu.degree}
                                    </h4>

                                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                        {edu.institution}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs">
                                        <span className="inline-flex items-center gap-1.5 text-accent">
                                            <Calendar size={13} />
                                            {edu.period}
                                        </span>

                                        <span className="text-muted-foreground">
                                            {edu.gpa}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.aside>
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
