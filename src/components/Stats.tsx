import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
    { number: 5, suffix: "+", label: "Years Experience", description: "Building scalable solutions" },
    { number: 200, suffix: "+", label: "Students Mentored", description: "At CSULB as TA" },
    { number: 15, suffix: "+", label: "Projects Completed", description: "Full stack applications" },
    { number: 92, suffix: "%", label: "ML Accuracy", description: "OCR invoice extraction" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const stepValue = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += stepValue;
                if (current >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, target]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-bold text-accent">
            {count}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="py-20 bg-background relative">
            {/* Quote Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 md:px-12 lg:px-24 mb-16"
            >
                <blockquote className="text-center max-w-4xl mx-auto">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-relaxed">
                        "I enjoy the process of solving problems with a{" "}
                        <span className="text-gradient">clean and scalable solution</span>.
                        I have a genuine passion for building innovative applications that make
                        a real difference."
                    </p>
                </blockquote>
            </motion.div>

            {/* Stats Grid */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                            <h3 className="text-lg font-semibold text-foreground mt-2">
                                {stat.label}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
