import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, TrendingUp, BarChart3, Briefcase, Globe, Layers, Users, PieChart, Wallet, LineChart, Handshake, Target, Zap, DollarSign } from "lucide-react";
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

    const deliverables = [
        { name: "Financial Planning", desc: "Budget vs. actual, forecasting, scenario modeling" },
        { name: "Fundraising Support", desc: "Pitch deck financials and investor materials" },
        { name: "Strategic Planning", desc: "Annual planning and growth strategy" },
        { name: "Cash Management", desc: "Cash flow forecasting and optimization" },
        { name: "Team Building", desc: "Accounting team oversight and hiring" },
        { name: "M&A Support", desc: "Due diligence and deal structure analysis" }
    ];

    const situations = [
        { title: "Pre-seed & Seed Stage", subtitle: "Get financial foundations right from the start with expert CFO guidance.", case: "preseed" },
        { title: "Series A/B Growth", subtitle: "Scale your finance function as you grow revenue and headcount.", case: "growth" },
        { title: "Fundraising Preparation", subtitle: "Build investor-ready financials and data rooms that close deals.", case: "fundraising" },
        { title: "M&A & Transactions", subtitle: "Navigate buy-side or sell-side diligence with confidence.", case: "ma" },
        { title: "Board & Investor Reporting", subtitle: "Deliver professional board packages and investor updates.", case: "reporting" },
        { title: "General Advisory", subtitle: "Not seeing your situation? Let's discuss your unique requirements.", link: "/start" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* 1. HERO */}
            <section className="bg-[#3FB9CB] min-h-screen flex items-center justify-center text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/START HERE SECTION PHOTOS/CFO-Advisory.jpg"
                        alt="CFO Advisory"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#3FB9CB]/70"></div>
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
                            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 border-0 font-bold px-8 h-14 rounded-xl text-lg shadow-lg">
                                Get Started Today
                            </Button>
                        </a>
                        <a href="https://calendly.com/nikunj-eazytaxes/meeting-with-nikunj-eazytaxes" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 h-14 rounded-xl text-lg">
                                Book a Free Call
                            </Button>
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6"
                    >
                        <Link href="/start" className="text-sm text-white/90 hover:text-white underline underline-offset-4">
                            Not sure which service? Start Here.
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. HOW CAN WE HELP YOU TODAY */}
            <section className="py-24 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">How can we help you today?</h2>
                <p className="text-center text-slate-600 mb-12">Select the scenario that best describes your current needs to find a tailored path forward.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {situations.map((sit, i) => (
                        <Link key={i} href={sit.link || `/contact?service=CFO&plan=${encodeURIComponent(sit.title)}#form`}>
                            <div className="group bg-slate-50 p-6 rounded-xl hover:bg-slate-100 transition-all cursor-pointer h-full flex flex-col justify-center items-center text-center">
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#3FB9CB] transition-colors">{sit.title}</h3>
                                    {sit.subtitle && <p className="text-sm text-slate-600 mb-4">{sit.subtitle}</p>}
                                </div>
                                <div className="flex items-center text-[#3FB9CB] font-medium text-sm group-hover:translate-x-2 transition-transform mt-4">
                                    Start Now <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 3. FULL SPECTRUM COVERAGE */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Strategic Finance Without the Full-Time Cost</h2>
                        <p className="text-slate-600 text-lg">Get senior-level CFO expertise tailored to your growth stage.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Fractional Flexibility", desc: "Scale CFO hours up or down as your business needs evolve—no long-term employment commitment.", icon: Layers },
                            { title: "Fundraising Expertise", desc: "We've helped clients raise over $200M combined. We know what investors want to see.", icon: TrendingUp },
                            { title: "Operational Focus", desc: "We integrate with your team and tools, becoming an extension of your operations, not an outsider.", icon: Users },
                            { title: "Data-Driven Decisions", desc: "Real-time dashboards, scenario modeling, and KPI tracking to guide strategic choices.", icon: BarChart3 },
                            { title: "Cross-Industry Experience", desc: "SaaS, e-commerce, professional services, and more—we understand diverse business models.", icon: Globe },
                            { title: "Beyond the Numbers", desc: "We don't just report financials; we help you understand unit economics, burn rate, and growth levers.", icon: Briefcase }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-slate-900" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE EAZYTAXES ADVANTAGE */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What to expect</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {deliverables.map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#3FB9CB] to-[#34a0b0] flex items-center justify-center shadow-lg">
                                    <Check className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.name}</h3>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TRUST BAR */}
            <section className="py-16 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">50+</div>
                            <div className="text-slate-600 font-medium">Companies Advised</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">$200M+</div>
                            <div className="text-slate-600 font-medium">Capital Raised</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">20+ Years</div>
                            <div className="text-slate-600 font-medium">Combined CFO Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. PRICING OPTIONS */}
            <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Pricing options</h2>
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
                                ? 'bg-white text-slate-900 shadow-2xl border-2 border-slate-900 scale-105 z-10'
                                : 'bg-white text-slate-900 border border-slate-200 shadow-sm'
                                }`}
                        >
                            {opt.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold border-2 border-slate-900">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-2">
                                <h3 className="text-xl font-bold mb-2 text-slate-900">{opt.title}</h3>
                                <p className="text-sm h-10 text-slate-500">{opt.bestFor}</p>
                            </div>

                            <div className="mb-8">
                                <div className="text-5xl font-bold text-slate-900">
                                    {opt.price}
                                </div>
                            </div>

                            <Link href={opt.title.includes("Full") ? "/contact" : `/contact?service=CFO&plan=${opt.title}#form`} className="w-full">
                                <Button className="w-full h-14 rounded-xl font-bold text-base transition-all duration-300 bg-slate-900 hover:bg-slate-800 text-white border-0">
                                    Get Started
                                </Button>
                            </Link>

                            <div className="h-px w-full my-8 bg-slate-100"></div>

                            <div className="flex-grow">
                                <p className="text-sm font-semibold mb-6 text-slate-900">
                                    What you will get
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

            {/* 7. PROOF / TRUST */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Why clients choose Eazytaxes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Target />, text: "Senior-level CFO expertise at a fraction of full-time cost" },
                            { icon: <DollarSign />, text: "Proven track record helping clients raise over $200M" },
                            { icon: <Zap />, text: "Fast onboarding and immediate impact on financial operations" },
                            { icon: <Handshake />, text: "Collaborative approach that integrates with your existing team" }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-6">
                                <div className="w-16 h-16 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    {item.icon}
                                </div>
                                <p className="text-slate-700 font-medium leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. HOW IT WORKS */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-slate-700 z-0"></div>

                        {[
                            "Discovery call to discuss your business and financial needs",
                            "Custom engagement plan with clear deliverables and pricing",
                            "Onboarding and ongoing strategic partnership"
                        ].map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-500/20 mb-6 border-4 border-slate-800">
                                    {i + 1}
                                </div>
                                <p className="text-lg font-medium text-slate-200 max-w-xs">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. COMPARISON TABLE */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Advisory vs Strategic vs Full-Service</h2>
                    <p className="text-center text-slate-600 mb-12">Understanding the differences in scope and engagement level</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-brand-gradient text-white">
                                    <th className="p-4 text-left font-bold">Feature</th>
                                    <th className="p-4 text-center font-bold">Advisory</th>
                                    <th className="p-4 text-center font-bold">Strategic CFO</th>
                                    <th className="p-4 text-center font-bold">Full-Service</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Monthly Price", "$3,500", "$6,500", "$12,000+"],
                                    ["Hours/Month", "~10 hours", "~20 hours", "40+ hours"],
                                    ["Financial Review", "Yes", "Yes", "Yes"],
                                    ["Fundraising Support", "Basic", "Full", "Full"],
                                    ["Board Participation", "No", "Limited", "Yes"],
                                    ["Team Management", "No", "No", "Yes"],
                                    ["M&A Support", "No", "Limited", "Full"],
                                    ["Best For", "Early-stage", "Growth-stage", "Scale-ups"]
                                ].map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                                        <td className="p-4 font-semibold text-slate-700 border-t border-slate-200">{row[0]}</td>
                                        <td className="p-4 text-center text-slate-600 border-t border-slate-200">{row[1]}</td>
                                        <td className="p-4 text-center text-slate-600 border-t border-slate-200">{row[2]}</td>
                                        <td className="p-4 text-center text-slate-600 border-t border-slate-200">{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 10. FAQ */}
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

            {/* 12. FINAL CTA */}
            <section className="py-24 bg-brand-gradient text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Ready for Strategic Financial Leadership?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/contact?service=CFO#form">
                            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 border-0 font-bold px-10 h-14 rounded-xl text-lg shadow-xl hover:-translate-y-1 transition-all">
                                Get Started
                            </Button>
                        </Link>
                        <a href="https://calendly.com/nikunj-eazytaxes/meeting-with-nikunj-eazytaxes" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-10 h-14 rounded-xl text-lg backdrop-blur-sm">
                                Book a Call
                            </Button>
                        </a>
                    </div>
                    <div className="mt-8">
                        <Link href="/start" className="text-blue-100 hover:text-white underline underline-offset-4 font-medium">
                            Not sure? Start Here
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
