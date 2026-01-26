import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, TrendingUp, BarChart3, Briefcase, Globe, Layers, Users, PieChart, Wallet, LineChart, Handshake, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function CfoAdvisory() {
    const pricingOptions = [
        {
            title: "Advisory",
            bestFor: "Early-stage, basic oversight",
            price: "$3,500",
            period: "/month",
            features: [
                "Monthly financial review",
                "KPI tracking & dashboard",
                "Cash flow forecasting",
                "Basic financial modeling",
                "Quarterly board material prep"
            ],
            cta: "Start Advisory",
            variant: "advisory"
        },
        {
            title: "Strategic CFO",
            bestFor: "Growth-stage, fundraising",
            price: "$6,500",
            period: "/month",
            featured: true,
            features: [
                "All Advisory features",
                "Fundraising strategy & decks",
                "3-statement financial model",
                "Unit economics & cohorts",
                "Bi-weekly strategy calls"
            ],
            cta: "Start Strategic CFO",
            variant: "strategic"
        },
        {
            title: "Full-Service CFO",
            bestFor: "Scale-ups, M&A, Complex",
            price: "$12,000+",
            period: "/month",
            features: [
                "All Strategic features",
                "Team management (FP&A)",
                "M&A due diligence",
                "Audit coordination",
                "Board participation"
            ],
            cta: "Request Proposal",
            variant: "full"
        }
    ];

    const services = [
        { icon: <PieChart />, title: "Financial Planning & Analysis", desc: "Budget vs. actual, forecasting, scenario modeling, KPI dashboards" },
        { icon: <Wallet />, title: "Fundraising Support", desc: "Pitch deck financials, data room prep, investor questions, cap table management" },
        { icon: <TrendingUp />, title: "Strategic Planning", desc: "Annual planning, growth strategy, pricing analysis, market expansion modeling" },
        { icon: <LineChart />, title: "Cash Management", desc: "Cash flow forecasting, working capital optimization, banking relationships" },
        { icon: <Users />, title: "Team Building", desc: "Accounting team oversight, FP&A hiring, process documentation" },
        { icon: <Handshake />, title: "M&A & Transactions", desc: "Buy-side/sell-side diligence, valuation support, deal structure analysis" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* 1. HERO */}
            <section className="bg-[#6366f1] min-h-screen flex items-center justify-center text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/START HERE SECTION PHOTOS/CFO-Advisory.jpg"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.parentElement) {
                                e.currentTarget.parentElement.style.backgroundColor = '#6366f1';
                                e.currentTarget.parentElement.style.background = 'linear-gradient(to right, #6366f1, #14b8a6)';
                            }
                        }}
                        alt="Generic CFO Office"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/90 to-[#14b8a6]/80"></div>
                </div>
                <div className="w-full px-8 md:px-12 lg:px-16 relative z-10 text-left py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30"
                    >
                        FRACTIONAL CFO SERVICES
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-3xl"
                    >
                        Fractional CFO Services for Growing Businesses
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-2xl mb-10 font-light"
                    >
                        Strategic financial leadership without the full-time cost. Get expert CFO guidance tailored to your business stage.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 items-start mb-8"
                    >
                        <a href="#pricing">
                            <Button size="lg" className="bg-white text-[#6366f1] hover:bg-blue-50 border-0 font-bold px-8 h-14 rounded-xl text-lg shadow-lg">
                                Get Started
                            </Button>
                        </a>
                        <a href="https://calendly.com/nikunj-eazytaxes/meeting-with-nikunj-eazytaxes" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 h-14 rounded-xl text-lg">
                                Book Discovery Call
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* 2. TRUST BAR */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-[#6366f1] mb-2">50+</div>
                            <div className="text-slate-600 font-medium">Companies Advised</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-[#6366f1] mb-2">$200M+</div>
                            <div className="text-slate-600 font-medium">Capital Raised</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-[#6366f1] mb-2">20+ Years</div>
                            <div className="text-slate-600 font-medium">Combined CFO Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHO NEEDS A CFO */}
            <section className="py-24 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Who needs a Fractional CFO?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Briefcase className="text-[#6366f1]" /> Company Stage
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Pre-seed and seed stage startups",
                                "Series A/B growth companies",
                                "Bootstrapped profitable businesses",
                                "Companies preparing for fundraising",
                                "Businesses planning exits or acquisitions"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Zap className="text-[#6366f1]" /> Common Triggers
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Raised or raising capital",
                                "Revenue $1M-$50M annual",
                                "Board requesting better financials",
                                "Outgrown your bookkeeper's capabilities",
                                "Need strategic finance, not just accounting"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>


            {/* 4. CFO SERVICES WE PROVIDE (GRID) */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">CFO Services We Provide</h2>
                        <p className="text-slate-600 text-lg">Comprehensive financial leadership tailored to your needs.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-[#6366f1] mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-3">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PRICING OPTIONS */}
            <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Choose Your Engagement Level</h2>
                    <p className="text-slate-600 mt-2">Flexible CFO support that scales with your business.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {pricingOptions.map((opt, i) => (
                        <motion.div
                            key={opt.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative rounded-[2.5rem] p-10 flex flex-col ${opt.featured
                                ? 'bg-white text-slate-900 shadow-2xl border-2 border-[#6366f1] scale-105 z-10'
                                : 'bg-white text-slate-900 border border-slate-200 shadow-sm'
                                }`}
                        >
                            {opt.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6366f1] text-white px-6 py-2 rounded-full text-sm font-bold">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-2">
                                <h3 className="text-xl font-bold mb-2 text-slate-900">{opt.title}</h3>
                                <p className="text-sm h-10 text-slate-500">{opt.bestFor}</p>
                            </div>

                            <div className="mb-8">
                                <div className="text-4xl font-bold text-slate-900">
                                    {opt.price}<span className="text-lg font-normal text-slate-500">{opt.period}</span>
                                </div>
                            </div>

                            <Link href={opt.title.includes("Full") ? "/contact" : `/contact?service=CFO&plan=${opt.title}#form`} className="w-full">
                                <Button className={`w-full h-14 rounded-xl font-bold text-base transition-all duration-300 border-0 ${opt.featured ? 'bg-[#6366f1] hover:bg-[#4f46e5] text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}>
                                    {opt.cta}
                                </Button>
                            </Link>

                            <div className="h-px w-full my-8 bg-slate-100"></div>

                            <div className="flex-grow">
                                <p className="text-sm font-semibold mb-6 text-slate-900">
                                    Includes:
                                </p>
                                <ul className="space-y-4">
                                    {opt.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm">
                                            <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-slate-100 text-slate-500">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="text-slate-600">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 6. PROCESS */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-700 z-0"></div>

                        {[
                            { title: "Discovery Call", desc: "We discuss your business, current state, and financial needs" },
                            { title: "Scope & Proposal", desc: "Custom engagement plan with clear deliverables and pricing" },
                            { title: "Onboarding", desc: "Access to systems, context gathering, initial assessment (Week 1)" },
                            { title: "Ongoing Partnership", desc: "Regular deliverables, strategic counsel, and proactive guidance" }
                        ].map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366f1] to-[#14b8a6] flex items-center justify-center text-2xl font-bold shadow-lg mb-6 border-4 border-slate-800">
                                    {i + 1}
                                </div>
                                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-400">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FAQ */}
            <section className="py-24 max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">FAQ</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What's the difference between a CFO and a bookkeeper?</AccordionTrigger>
                        <AccordionContent>
                            Bookkeepers record transactions. Accountants ensure compliance. CFOs provide strategic financial leadership—forecasting, fundraising, modeling, and helping you make better business decisions.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Do I need a full-time CFO or fractional CFO?</AccordionTrigger>
                        <AccordionContent>
                            If your revenue is under $50M and you don't need 40+ hours/week of strategic finance work, fractional is more cost-effective. You get senior-level expertise at a fraction of the cost.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Can you work with our existing accounting team?</AccordionTrigger>
                        <AccordionContent>
                            Yes. We collaborate with your bookkeeper, controller, or accounting firm. We focus on strategy and analysis while they handle day-to-day transaction processing.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Do you help with fundraising?</AccordionTrigger>
                        <AccordionContent>
                            Yes. We build financial models, create investor-ready materials, prepare data rooms, and help you answer investor diligence questions confidently.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            <TestimonialsSection />

            {/* 9. FINAL CTA */}
            <section className="py-24 bg-gradient-to-br from-[#6366f1] to-[#14b8a6] text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Ready for Strategic Financial Leadership?</h2>
                    <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto">Book a discovery call to discuss how fractional CFO services can accelerate your growth.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/contact?service=CFO#form">
                            <Button size="lg" className="bg-white text-[#6366f1] hover:bg-blue-50 border-0 font-bold px-10 h-14 rounded-xl text-lg shadow-xl hover:-translate-y-1 transition-all">
                                Get Started
                            </Button>
                        </Link>
                        <a href="https://calendly.com/nikunj-eazytaxes/meeting-with-nikunj-eazytaxes" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-10 h-14 rounded-xl text-lg backdrop-blur-sm">
                                Book Discovery Call
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
