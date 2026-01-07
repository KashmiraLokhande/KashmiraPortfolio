import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        title: "Software Engineer",
        company: "Mouri Tech",
        location: "USA",
        period: "Aug 2023 – Present",
        description: [
            "Built scalable payroll platform processing thousands of transactions",
            "Automated tax modules reducing manual intervention by 60%",
            "Integrated GraphQL for optimized data fetching",
            "Optimized microservices architecture improving system performance",
        ],
        technologies: ["Python", "GraphQL", "Microservices", "AWS"],
    },
    {
        title: "Python Developer",
        company: "Feuji",
        location: "USA",
        period: "Aug 2023 – Dec 2024",
        description: [
            "Developed core payroll features handling complex calculations",
            "Integrated gRPC for efficient inter-service communication",
            "Deployed RESTful APIs serving 10K+ daily requests",
            "Modernized legacy codebase improving maintainability",
        ],
        technologies: ["Python", "gRPC", "REST API", "PostgreSQL"],
    },
    {
        title: "Graduate Teaching Assistant",
        company: "California State University, Long Beach",
        location: "Long Beach, CA",
        period: "Jun 2021 – Dec 2022",
        description: [
            "Mentored 200+ students in programming fundamentals",
            "Created comprehensive lab assignments and materials",
            "Provided constructive feedback through grading",
            "Held office hours for one-on-one student support",
        ],
        technologies: ["Python", "Java", "Data Structures", "Algorithms"],
    },
    {
        title: "Associate Software Engineer",
        company: "Xoriant Solutions",
        location: "India",
        period: "Jul 2019 – Feb 2020",
        description: [
            "Developed Employee Management Dashboard for HR operations",
            "Built REST APIs for seamless data integration",
            "Created interactive data visualizations using D3.js",
            "Collaborated with cross-functional teams on requirements",
        ],
        technologies: ["JavaScript", "REST API", "D3.js", "Node.js"],
    },
    {
        title: "Machine Learning Intern",
        company: "Gauss and Riemann Scientific",
        location: "India",
        period: "Aug 2018 – Apr 2019",
        description: [
            "Developed OCR-based invoice data extraction system",
            "Achieved 92% accuracy in text recognition",
            "Implemented preprocessing pipelines for image enhancement",
            "Trained and fine-tuned ML models for document processing",
        ],
        technologies: ["Python", "TensorFlow", "OCR", "OpenCV"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding bg-background">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                        Career Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                        Work Experience
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${exp.title}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                                }`}
                        >
                            <div
                                className={`ml-8 md:ml-0 ${index % 2 === 0
                                        ? "md:mr-12 md:text-right"
                                        : "md:ml-12"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div
                                    className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 border-4 border-background`}
                                />

                                {/* Card */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-accent/50 transition-colors"
                                >
                                    <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                                        <span className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-2">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-bold text-foreground">
                                            {exp.title}
                                        </h3>
                                        <div className={`flex items-center gap-2 text-muted-foreground mt-1 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                            <Briefcase size={14} />
                                            <span>{exp.company}</span>
                                            <span>•</span>
                                            <MapPin size={14} />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>

                                    <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                                                <span className={`text-accent mt-1.5 ${index % 2 === 0 ? "md:order-last" : ""}`}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
