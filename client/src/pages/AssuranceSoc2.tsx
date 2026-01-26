import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, FileText, ClipboardCheck, ShieldCheck, BarChart3, FileCheck, Users, Clock, DollarSign, Quote, CheckCircle2 } from "lucide-react";
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

export default function AssuranceSoc2() {
    const pricingOptions = [
        {
            title: "Compilation",
            bestFor: "Internal use, basic reporting",
            price: "$1,500",
            features: [
                "Financial statement preparation",
                "Management representation letter",
                "Compilation report",
                "Basic formatting included",
                "No assurance provided"
            ],
            cta: "Start Compilation",
            variant: "compilation"
        },
        {
            title: "Review",
            bestFor: "Lenders & Investors",
            price: "$3,500",
            featured: true,
            features: [
                "Analytical procedures",
                "Limited assurance report",
                "Management inquiries",
                "Material modification check",
                "Bank-ready deliverables"
            ],
            cta: "Start Review",
            variant: "review"
        },
        {
            title: "Audit / SOC 2",
            bestFor: "Regulatory & Enterprise",
            price: "$10,000",
            features: [
                "Reasonable assurance",
                "Internal control offering",
                "Substantive testing",
                "Third-party confirmation",
                "Audit opinion letter"
            ],
            cta: "Request Proposal",
            variant: "audit"
        }
    ];

    const deliverables = [
        { name: "Engagement Plan", desc: "Upfront scoping and timeline discussion" },
        { name: "Fieldwork Exec", desc: "Efficient testing with minimal disruption" },
        { name: "Status Updates", desc: "Regular communication via dedicated manager" },
        { name: "Draft Review", desc: "Collaborative review before finalization" },
        { name: "Final Report", desc: "Formal opinion and formatted statements" },
        { name: "Mgmt Letter", desc: "Control recommendations (Audit only)" }
    ];

    const situations = [
        { title: "Bank Financing", subtitle: "Secure a loan or line of credit with reviewed financials.", case: "financing" },
        { title: "Investor Reporting", subtitle: "Meet quarterly or annual reporting obligations for VCs.", case: "investors" },
        { title: "SOC 2 Type 1 & 2", subtitle: "Prove your security controls to close enterprise deals.", case: "soc2" },
        { title: "M&A Diligence", subtitle: "Prepare your financials for sale or acquisition.", case: "ma" },
        { title: "Grant Compliance", subtitle: "Non-profit single audits and grant expenditure reporting.", case: "grant" },
        { title: "General Advisory", subtitle: "Not sure? Let's discuss your specific requirements.", link: "/start" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* 1. HERO */}
            <section className="bg-[#3FB9CB] min-h-screen flex items-center justify-center text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/START HERE SECTION PHOTOS/ASSURANCE-SOC2-REVIEW.jpg"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.parentElement) {
                                e.currentTarget.parentElement.style.backgroundColor = '#3FB9CB';
                            }
                        }}
                        alt="Assurance & SOC 2"
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
                        ASSURANCE & SOC 2
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-3xl"
                    >
                        Financial Assurance You Can Trust
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-2xl mb-10 font-light"
                    >
                        Independent audits, reviews, and SOC 2 reports for businesses seeking credibility with stakeholders.
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
                            Not sure which report you need? Start Here.
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. HOW CAN WE HELP YOU TODAY */}
            <section className="py-24 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">How can we help you today?</h2>
                <p className="text-center text-slate-600 mb-12">Select the scenario that best describes your compliance needs.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {situations.map((sit, i) => (
                        <Link key={i} href={sit.link || `/contact?service=Assurance&plan=${encodeURIComponent(sit.title)}#form`}>
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Minimize Disruption. Maximize Trust.</h2>
                        <p className="text-slate-600 text-lg">We handle the heavy lifting so you can focus on operations.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Tailored Engagements", desc: "We scope our work specifically to your stakeholders' requirements to avoid over-auditing." },
                            { title: "Tech-Forward Approach", desc: "We utilize secure portals and modern tools to streamline document collection." },
                            { title: "Experienced Team", desc: "Our team brings Big 4 experience to growing private companies." },
                            { title: "Proactive Communication", desc: "No surprises. We communicate findings as they arise, not just at the deadline." },
                            { title: "Regulatory Expertise", desc: "Deep knowledge of GAAP, GAAS, SSARS, and AICPA standards." },
                            { title: "Control Recommendations", desc: "We don't just find errors; we help you improve your internal processes." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
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
                            <div className="text-5xl font-bold text-primary mb-2">200+</div>
                            <div className="text-slate-600 font-medium">Engagements Completed</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">15 Years</div>
                            <div className="text-slate-600 font-medium">Combined Experience</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">Zero</div>
                            <div className="text-slate-600 font-medium">Qualified Opinions</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. PRICING OPTIONS */}
            <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Assurance Packages</h2>
                    <p className="text-slate-600 mt-2">Transparent options for every level of assurance.</p>
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

                            <Link href={`/contact?service=Assurance&plan=${opt.title}#form`} className="w-full">
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
                            { icon: <ShieldCheck />, text: "Rigorous standards compliant with AICPA guidelines" },
                            { icon: <Clock />, text: "Efficient timelines that respect your team's bandwidth" },
                            { icon: <Users />, text: "Dedicated engagement managers for every client" },
                            { icon: <BarChart3 />, text: "Actionable insights beyond just the compliance box" }
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
                            "Planning & Scoping",
                            "Fieldwork & Testing",
                            "Reporting & Delivery"
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
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Compare Engagement Levels</h2>
                    <p className="text-center text-slate-600 mb-12">Understanding the difference in scope and assurance</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-brand-gradient text-white">
                                    <th className="p-4 text-left font-bold">Feature</th>
                                    <th className="p-4 text-center font-bold">Compilation</th>
                                    <th className="p-4 text-center font-bold">Review</th>
                                    <th className="p-4 text-center font-bold">Audit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Assurance Level", "None", "Limited", "Reasonable"],
                                    ["Testing Depth", "None", "Analytical", "Extensive"],
                                    ["Internal Controls", "No", "No", "Evaluated"],
                                    ["3rd Party Confirmations", "No", "No", "Yes"],
                                    ["Turnaround", "2-3 Weeks", "3-5 Weeks", "6-10 Weeks"],
                                    ["Starting Price", "$1,500", "$3,500", "$10,000"],
                                    ["Bank Accepted", "Rarely", "Usually", "Always"]
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
                        <AccordionTrigger>How do I know if I need an audit or a review?</AccordionTrigger>
                        <AccordionContent>
                            It usually depends on who is asking for it. Banks frequently accept reviews for loans under a certain size. VCs and larger lenders often require audits. We can review your loan covenants or term sheets to help you decide.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What is a compilation?</AccordionTrigger>
                        <AccordionContent>
                            A compilation is the most basic service where we assist in presenting financial information in the form of financial statements without providing any assurance. It is often used for internal management use.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Do you handle SOC 2?</AccordionTrigger>
                        <AccordionContent>
                            Yes. We can assist with SOC 2 readiness and partner with CPA firms that issue the final SOC 2 Type 1 and Type 2 reports.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>How long does the process take?</AccordionTrigger>
                        <AccordionContent>
                            Compilations can take 1-2 weeks. Reviews typically take 3-4 weeks. Audits generally take 6-8 weeks depending on the complexity and readiness of your records.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>What do I need to prepare?</AccordionTrigger>
                        <AccordionContent>
                            We will provide a "Provided by Client" (PBC) list specific to your industry. Generally, you'll need your trial balance, bank statements, legal documents, and access to your accounting system.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            <TestimonialsSection />

            {/* 12. FINAL CTA */}
            <section className="py-24 bg-brand-gradient text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Get the assurance you need</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/contact?service=Assurance&plan=Get Started#form">
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
