import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Cloud,
    Brain,
    Layers,
    Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        icon: Code2,
        title: "Web Application Development",
        description:
            "Full-stack web applications with modern frameworks like React, Angular, and Node.js. Responsive, performant, and user-friendly interfaces.",
        color: "bg-accent",
    },
    {
        icon: Layers,
        title: "RESTful APIs & Microservices",
        description:
            "Scalable API architecture using REST, GraphQL, and gRPC. Microservices design for distributed systems with high availability.",
        color: "bg-coral-light",
    },
    {
        icon: Cloud,
        title: "Cloud Deployment",
        description:
            "End-to-end cloud solutions on AWS, GCP, and Azure. Infrastructure as code with Terraform, containerization with Docker and Kubernetes.",
        color: "bg-primary",
    },
    {
        icon: Database,
        title: "Database Design",
        description:
            "Efficient database architecture with PostgreSQL, MongoDB, and Redis. Query optimization, data modeling, and migration strategies.",
        color: "bg-accent",
    },
    {
        icon: Brain,
        title: "Machine Learning Integration",
        description:
            "AI/ML capabilities integrated into web applications. NLP, computer vision, and predictive analytics using TensorFlow and PyTorch.",
        color: "bg-coral-light",
    },
    {
        icon: Settings,
        title: "DevOps & CI/CD",
        description:
            "Automated deployment pipelines with Jenkins, GitHub Actions, and GitLab CI. Monitoring and logging with DataDog.",
        color: "bg-primary",
    },
];

export default function Services() {
    const scrollToContact = () => {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="services" className="section-padding bg-background">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                                Services
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                                What I Can Do For You
                            </h2>
                            <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
                                I offer comprehensive full-stack development services, from
                                initial concept to deployment and maintenance. Let's build
                                something amazing together.
                            </p>
                            <Button
                                variant="coral"
                                size="lg"
                                className="mt-6"
                                onClick={scrollToContact}
                            >
                                Get in Touch
                            </Button>
                        </div>
                        <div className="hidden lg:block" />
                    </div>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group"
                        >
                            <div className="bg-card rounded-xl p-6 h-full shadow-lg border border-border hover:border-accent/50 transition-all duration-300">
                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <service.icon size={24} className="text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-foreground mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
