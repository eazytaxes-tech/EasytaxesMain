import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        text: "We engaged Eazytaxes for both personal and corporate tax strategy and compliance — the team's expertise in U.S. and international tax saved us time and provided clarity we hadn't experienced before. Their advice is practical, grounded, and always delivered with thoughtful explanation.",
        author: "Client in SaaS & Cross-Border Services",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
    },
    {
        text: "Eazytaxes didn't just prepare our returns — they helped us understand the tax implications of key business decisions. Their insights on entity structuring and planning have materially improved how we manage finances and compliance.",
        author: "Founder & CEO, Growth-Stage Startup",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces"
    },
    {
        text: "From IRS correspondence to multi-entity tax filings, Eazytaxes handled every challenge with precision and responsiveness. Their thorough approach and clear guidance made a complicated process feel manageable.",
        author: "Managing Partner, Investment Fund",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces"
    },
    {
        text: "We operate across multiple jurisdictions, and Eazytaxes has consistently provided expert guidance on both U.S. and international tax matters. They explain complex issues in a way that's practical and actionable.",
        author: "Global Operations Leader",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces"
    },
    {
        text: "Working with Eazytaxes feels like having a trusted advisor on our team. They're responsive, proactive, and genuinely invested in our long-term success — not just ticking boxes.",
        author: "Owner, Consulting Firm",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    },
    {
        text: "Clear communication and deep expertise set Eazytaxes apart. They always break things down in understandable terms and give us confidence that everything is handled correctly.",
        author: "VP of Finance, Professional Services Firm",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
    },
    {
        text: "Thanks to Eazytaxes, we resolved longstanding tax issues efficiently and strengthened our compliance framework. Their approach is professional, practical, and dependable.",
        author: "Entrepreneur & Small Business Owner",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces"
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-32 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Quote className="w-12 h-12 text-primary/30 mx-auto mb-10" />
                <h2 className="text-3xl font-bold mb-16">Trusted by Forward-Thinking Founders</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                    {testimonials.slice(0, 3).map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 relative group hover:shadow-md transition-all"
                        >
                            <div className="text-primary mb-6">
                                <Quote className="w-8 h-8 fill-current opacity-20" />
                            </div>
                            <p className="text-slate-600 mb-8 italic relative z-10">"{testimonial.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover border-2 border-slate-100" />
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">{testimonial.author}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
