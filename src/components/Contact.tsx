import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Send,
    CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import resumePdf from "@/assets/kashmira-lokhande-resume.pdf";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "kashmiralokhande1198@gmail.com",
        href: "mailto:kashmiralokhande1198@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (562) 514-2959",
        href: "tel:+15625142959",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Long Beach, CA, USA",
        href: "#",
    },
];

const socialLinks = [
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/kashmiralokhande/",
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/KashmiraLokhande",
    },
];

export default function Contact() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="section-padding bg-primary">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
                        Let's Work Together
                    </h2>
                    <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it. Send me a message
                        and let's discuss how we can collaborate.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent"
                                />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent"
                                />
                            </div>
                            <div>
                                <Textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent resize-none"
                                />
                            </div>
                            <Button
                                type="submit"
                                variant="coral"
                                size="lg"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <CheckCircle size={18} className="animate-pulse" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Contact Details */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                                        <info.icon size={20} className="text-accent group-hover:text-accent-foreground transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-primary-foreground/60 text-sm">
                                            {info.label}
                                        </p>
                                        <p className="text-primary-foreground font-medium">
                                            {info.value}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-6 border-t border-primary-foreground/10">
                            <p className="text-primary-foreground/60 text-sm mb-4">
                                Connect with me
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center hover:bg-accent transition-colors group"
                                    >
                                        <social.icon size={20} className="text-accent group-hover:text-accent-foreground transition-colors" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Download Resume CTA */}
                        <div className="pt-6">
                            <Button
                                variant="coral-outline"
                                size="lg"
                                asChild
                                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                            >
                                <a href="/KashmiraPortfolio/kashmira-lokhande-resume.pdf" download className="flex items-center gap-2">
                                    Download Resume
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
