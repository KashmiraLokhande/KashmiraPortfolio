import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary border-t border-primary-foreground/10">
            <div className="container mx-auto px-6 md:px-12 py-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <p className="text-primary-foreground/60 text-sm">
                        © {new Date().getFullYear()} Kashmira Lokhande. All rights reserved.
                    </p>
                    <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
                        Built with <Heart size={14} className="text-accent fill-accent" /> using React & TypeScript
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
