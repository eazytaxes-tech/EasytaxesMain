import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, FileText, Shield, User, Building, Globe, Clock, AlertTriangle, Layers, HelpCircle, CheckCircle2, Quote, Calculator, PieChart, TrendingUp, Search, CheckSquare, Building2, Table, ShieldCheck } from "lucide-react";
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
import { Card } from "@/components/ui/card";

export default function Valuations() {
    const pricingOptions = [
        {
            title: "Seed Stage 409A",
            bestFor: "Early Stage Companies",
            price: "$1,500",
            features: [
                "Audit-defensible report",
                "Fast turnaround (5-7 days)",
                "Cap table integration",
                "Digital share issuance support",
                "Basic scenario modeling"
            ],
            cta: "Get 409A",
            variant: "409a-seed"
        },
        {
            title: "Series A+ 409A",
            bestFor: "Growth Stage Companies",
            price: "$3,500",
            featured: true,
            features: [
                "Comprehensive valuation analysis",
                "Multiple funding rounds support",
                "Detailed comparable analysis",
                "Complex capital structure modeling",
                "Audit support guarantee"
            ],
            cta: "Get Valuation",
            variant: "409a-series"
        },
        {
            title: "Business Valuation",
            bestFor: "M&A / Planning",
            price: "$5,000",
            features: [
                "Fair market value assessment",
                "Comparable analysis",
                "Detailed valuation report",
                "Income & market approach",
                "Strategy consultation included"
            ],
            cta: "Get Valuation",
            variant: "business"
        }
    ];

    const deliverables = [
        { name: "Certified Report", desc: "Audit-defensible valuation report" },
        { name: "Methodology", desc: "Clear breakdown of methods used" },
        { name: "Cap Table Analysis", desc: "Integration with your equity data" },
        { name: "Audit Support", desc: "We stand behind our numbers" },
        { name: "Market Data", desc: "Comprehensive comparable analysis" },
        { name: "Secure Delivery", desc: "Encrypted digital delivery platform" }
    ];

    const situations = [
        { title: "Issuing Stock Options", subtitle: "Grant options to employees tax-compliantly with a valid current 409A.", case: "options" },
        { title: "Raising Venture Capital", subtitle: "Update your valuation after a new financing round or material event.", case: "fundraise" },
        { title: "Selling the Business", subtitle: "Determine fair market value for M&A, exits, or partner buyouts.", case: "exit" },
        { title: "Gift & Estate Planning", subtitle: "Value private stock for trust, estate, and gifting purposes.", case: "estate" },
        { title: "Litigation Support", subtitle: "Expert valuation services for legal disputes and shareholder matters.", case: "litigation" },
        { title: "General Advisory", subtitle: "Not sure what you need? Let's discuss your specific situation.", link: "/start" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* 1. HERO */}
            <section className="bg-[#3FB9CB] min-h-screen flex items-center justify-center text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/START HERE SECTION PHOTOS/Valuation.jpg"
                        onError={(e) => {
                            // Fallback if image doesn't exist, using tax-compliance as placeholder or just hiding it
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.parentElement) {
                                e.currentTarget.parentElement.style.backgroundColor = '#3FB9CB';
                            }
                        }}
                        alt="Valuations"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#3FB9CB]/80"></div>
                </div>
                <div className="w-full px-8 md:px-12 lg:px-16 relative z-10 text-left py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30"
                    >
                        VALUATIONS & 409A
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-3xl"
                    >
                        Audit-Defensible Valuations & 409A
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-2xl mb-10 font-light"
                    >
                        Fast, accurate, and compliant valuations for startups and private companies issuing equity.
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
                            Not sure... do I need a valuation? Start Here.
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. HOW CAN WE HELP YOU TODAY */}
            <section className="py-24 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">How can we help you today?</h2>
                <p className="text-center text-slate-600 mb-12">Select the scenario that best describes your current needs.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {situations.map((sit, i) => (
                        <Link key={i} href={sit.link || `/contact?service=Valuations&plan=${encodeURIComponent(sit.title)}#form`}>
                            <div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer h-full flex flex-col justify-center items-center text-center">
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg mb-2">{sit.title}</h3>
                                    {sit.subtitle && <p className="text-sm text-slate-600 mb-4">{sit.subtitle}</p>}
                                    <div className="h-1 w-12 bg-slate-100 group-hover:bg-primary transition-colors rounded-full mx-auto"></div>
                                </div>
                                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform mt-4">
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Coverage. Audit Ready.</h2>
                        <p className="text-slate-600 text-lg">We handle the methodology so you can focus on building.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "AICPA Compliance", desc: "Fully compliant with AICPA practices for valuation of privately-held-company equity.", icon: CheckSquare },
                            { title: "Big 4 Standards", desc: "Methodologies derived from top-tier accounting firms ensures audit defensibility.", icon: Building2 },
                            { title: "Fast Turnaround", desc: "Receive your draft report in as little as 5-7 business days.", icon: Clock },
                            { title: "Cap Table Integration", desc: "We work directly with your cap table data to ensure accuracy.", icon: Table },
                            { title: "Scenario Modeling", desc: "Understand how new rounds or exits impact share price.", icon: TrendingUp },
                            { title: "Audit Support", desc: "We answer questions from your auditors at no extra charge.", icon: ShieldCheck }
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
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">The eazytaxes advantage</h2>
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
                            <div className="text-5xl font-bold text-primary mb-2">500+</div>
                            <div className="text-slate-600 font-medium">Valuations Delivered</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">5 Days</div>
                            <div className="text-slate-600 font-medium">Average Turnaround</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">100%</div>
                            <div className="text-slate-600 font-medium">Audit Acceptance</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. PRICING OPTIONS */}
            <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Valuation Packages</h2>
                    <p className="text-slate-600 mt-2">Transparent pricing for every stage.</p>
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
                                <div className="text-4xl font-bold text-slate-900">
                                    {opt.price}
                                </div>
                                {opt.title.includes("Starting") && <div className="text-xs text-slate-500 mt-1">Base price</div>}
                            </div>

                            <Link href={`/contact?service=Valuations&plan=${opt.title}#form`} className="w-full">
                                <Button className="w-full h-14 rounded-xl font-bold text-base transition-all duration-300 bg-slate-900 hover:bg-slate-800 text-white border-0">
                                    {opt.cta}
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
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Why clients trust us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Shield />, text: "Rigorous methodologies that stand up to Big 4 scrutiny" },
                            { icon: <TrendingUp />, text: "Deep expertise in VC-backed and high-growth startups" },
                            { icon: <Clock />, text: "Speed without sacrificing quality or defensibility" },
                            { icon: <Layers />, text: "Holistic view integrating tax, accounting, and equity data" }
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
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-slate-700 z-0"></div>

                        {[
                            "Submit your cap table and financials",
                            "We analyze and draft the report",
                            "You review and receive the final sign-off"
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
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Compare Valuation Types</h2>
                    <p className="text-center text-slate-600 mb-12">Choosing the right report for your stage</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-brand-gradient text-white">
                                    <th className="p-4 text-left font-bold">Feature</th>
                                    <th className="p-4 text-center font-bold">Seed 409A</th>
                                    <th className="p-4 text-center font-bold">Series A+ 409A</th>
                                    <th className="p-4 text-center font-bold">Business Val</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Price Point", "$1,500", "$3,500+", "$5,000+"],
                                    ["Primary Use", "Initial Options Grant", "Later Rounds / Growth", "M&A / Exit"],
                                    ["Methodology", "Market / Asset", "Market / Income / OPM", "Full Spectrum"],
                                    ["Turnaround", "5-7 Days", "7-10 Days", "10-14 Days"],
                                    ["Audit Defense", "Standard", "Enhanced", "Premium"],
                                    ["Complex Cap Table", "No", "Yes", "Yes"],
                                    ["Scenario Analysis", "Basic", "Advanced", "Custom"]
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
                        <AccordionTrigger>What is a 409A valuation?</AccordionTrigger>
                        <AccordionContent>
                            A 409A valuation determines the Fair Market Value (FMV) of your common stock. It is required by the IRS if you want to issue tax-free stock options to employees.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How often do I need a 409A?</AccordionTrigger>
                        <AccordionContent>
                            Generally, you need a new 409A every 12 months, or whenever you have a "material event" such as a new funding round, acquisition, or significant change in business model.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How long does it take?</AccordionTrigger>
                        <AccordionContent>
                            Our typically turnaround is 5-7 business days after we receive all necessary documentation (cap table, financials, etc.).
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>What documents do I need to provide?</AccordionTrigger>
                        <AccordionContent>
                            We typically need your current cap table, financial statements (P&L and Balance Sheet), articles of incorporation, and any pitch decks or term sheets from recent rounds.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Do you cover audit support?</AccordionTrigger>
                        <AccordionContent>
                            Yes. If your valuation is audited, we provide support to answer auditor questions and defend the methodology used in the report.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            <TestimonialsSection />

            {/* 12. FINAL CTA */}
            <section className="py-24 bg-brand-gradient text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Get your valuation today</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/contact?service=Valuations&plan=Get Started#form">
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
