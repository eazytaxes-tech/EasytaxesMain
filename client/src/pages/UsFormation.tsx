import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, Building2, CreditCard, FileCheck, Globe, Layers, ShieldCheck, Zap, Laptop, BookOpen, CheckCircle2, Flag, Hash, FileSignature, CheckSquare, Landmark } from "lucide-react";
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

export default function UsFormation() {
    const pricingOptions = [
        {
            title: "LLC Formation",
            bestFor: "Small Business / E-commerce",
            price: "$499",
            features: [
                "Certificate of Formation",
                "Operating Agreement",
                "EIN (Tax ID) setup",
                "Registered Agent (1 year)",
                "Banking Introduction"
            ],
            cta: "Form LLC",
            variant: "llc"
        },
        {
            title: "C-Corp Formation",
            bestFor: "VC-Backed Startups",
            price: "$1,499",
            featured: true,
            features: [
                "Delaware Incorporation",
                "Bylaws & Action by Incorporator",
                "Stock Issuance & 83(b) Filing",
                "Registered Agent (1 year)",
                "Post-Incorporation Checklist"
            ],
            cta: "Form C-Corp",
            variant: "ccorp"
        },
        {
            title: "Full Setup Package",
            bestFor: "International Founders",
            price: "$2,499",
            features: [
                "Entity Formation (LLC or C-Corp)",
                "EIN & Tax Registration",
                "US Bank Account Assistance",
                "Virtual Address Setup",
                "Compliance Calendar"
            ],
            cta: "Get Full Package",
            variant: "fullpackage"
        }
    ];

    const deliverables = [
        { name: "State Filing", desc: "All state filing fees included" },
        { name: "Registered Agent", desc: "Premium registered agent service (1st year included)" },
        { name: "EIN Acquisition", desc: "Obtain your Federal Tax ID from the IRS" },
        { name: "Corporate Kit", desc: "Digital bylaws, resolutions, and stock certificates" },
        { name: "Banking Intro", desc: "Direct referrals to Mercury, Brex, or Relay" },
        { name: "Compliance Kit", desc: "Reminders for annual franchise tax reports" }
    ];

    const situations = [
        { title: "Tech Startup", subtitle: "Form a Delaware C-Corp to raise venture capital.", case: "tech" },
        { title: "E-commerce", subtitle: "Launch your dropshipping or FBA business with an LLC.", case: "ecom" },
        { title: "Foreign Founder", subtitle: "Start a US company remotely without visiting the US.", case: "foreign" },
        { title: "Freelancer", subtitle: "Protect your personal assets by wrapping your work in an LLC.", case: "freelance" },
        { title: "Real Estate", subtitle: "Hold property in a dedicated LLC for liability protection.", case: "realestate" },
        { title: "General Advisory", subtitle: "Not sure which entity is right for you? Let's talk.", link: "/start" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* 1. HERO */}
            <section className="bg-[#3FB9CB] min-h-screen flex items-center justify-center text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/START HERE SECTION PHOTOS/Formation-Banking.jpg"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.parentElement) {
                                e.currentTarget.parentElement.style.backgroundColor = '#3FB9CB';
                            }
                        }}
                        alt="US Formation & Banking"
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
                        US FORMATION & BANKING
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-3xl"
                    >
                        Launch Your US Business. From Any Country.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-2xl mb-10 font-light"
                    >
                        Fast, reliable incorporation and banking setup for global entrepreneurs and US founders.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 items-start mb-8"
                    >
                        <a href="#pricing">
                            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 border-0 font-bold px-8 h-14 rounded-xl text-lg shadow-lg">
                                Incorporate Now
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
                            Not sure... LLC or C-Corp? Start Here.
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. HOW CAN WE HELP YOU TODAY */}
            <section className="py-24 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Launch your business</h2>
                <p className="text-center text-slate-600 mb-12">Select the path that fits your goals.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {situations.map((sit, i) => (
                        <Link key={i} href={sit.link || `/contact?service=US%20Formation&plan=${encodeURIComponent(sit.title)}#form`}>
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">From Registration to Revenue.</h2>
                        <p className="text-slate-600 text-lg">We don't just file forms; we build your business infrastructure.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Instant Filing", desc: "We submit your documents to Delaware or Wyoming within 24 business hours.", icon: Flag },
                            { title: "Bank Account Access", desc: "Our partners accept Eazytaxes-formed companies. No US visit required.", icon: Landmark },
                            { title: "Stripe & PayPal Ready", desc: "Get all the documents you need to activate payment processors instantly.", icon: CreditCard },
                            { title: "Address & Mail", desc: "We can set you up with a virtual business address to receive official mail.", icon: Globe },
                            { title: "Post-Incorporation Docs", desc: "Operating agreements, bylaws, and banking resolutions included.", icon: FileSignature },
                            { title: "Long-Term Compliance", desc: "We remind you of annual report due dates so you stay in good standing.", icon: CheckSquare }
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
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Included in every package</h2>
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
                            <div className="text-5xl font-bold text-primary mb-2">50 States</div>
                            <div className="text-slate-600 font-medium">Coverage Available</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">24 Hours</div>
                            <div className="text-slate-600 font-medium">Fast Filing Speed</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">100%</div>
                            <div className="text-slate-600 font-medium">Satisfaction Guarantee</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. PRICING OPTIONS */}
            <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Formation Packages</h2>
                    <p className="text-slate-600 mt-2">Everything you need to be official.</p>
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

                            <Link href={`/contact?service=Formation&plan=${opt.title}#form`} className="w-full">
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
                            { icon: <Globe />, text: "Serving founders from 50+ countries worldwide" },
                            { icon: <Zap />, text: "Lightning fast processing times for all filings" },
                            { icon: <ShieldCheck />, text: "Bank-grade security for your personal data" },
                            { icon: <Laptop />, text: "Fully digital process - no paper or fax machines" }
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
                            "Choose your entity and fill out the form",
                            "We file with the state and get your EIN",
                            "You open your bank account and start selling"
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
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">LLC vs C-Corp</h2>
                    <p className="text-center text-slate-600 mb-12">Which entity is right for your business?</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-brand-gradient text-white">
                                    <th className="p-4 text-left font-bold">Feature</th>
                                    <th className="p-4 text-center font-bold">LLC</th>
                                    <th className="p-4 text-center font-bold">C-Corp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Primary Use Case", "Small Business / E-com / Lifestyle", "Venture Capital / Hyper-Growth"],
                                    ["Ownership", "Members (Flexible)", "Shareholders (Strict)"],
                                    ["Taxation", "Pass-through (Avoids Double Tax)", "Double Taxation (Corp + Dividend)"],
                                    ["Raising Capital", "Difficult", "Standard (Preferred Stock)"],
                                    ["Documentation", "Operating Agreement", "Bylaws & Shareholder Agreements"],
                                    ["Maintenance Effort", "Low", "High"],
                                ].map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                                        <td className="p-4 font-semibold text-slate-700 border-t border-slate-200">{row[0]}</td>
                                        <td className="p-4 text-center text-slate-600 border-t border-slate-200">{row[1]}</td>
                                        <td className="p-4 text-center text-slate-600 border-t border-slate-200">{row[2]}</td>
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
                        <AccordionTrigger>Should I form an LLC or C-Corp?</AccordionTrigger>
                        <AccordionContent>
                            If you plan to raise venture capital, a Delaware C-Corp is the standard. For small businesses, e-commerce, or holding companies, an LLC is often preferred due to its flexibility and tax benefits.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Do I need to be in the US to form a company?</AccordionTrigger>
                        <AccordionContent>
                            No. You do not need to be a US citizen or resident. We can help international founders form a US entity remotely.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Can you open the bank account for me?</AccordionTrigger>
                        <AccordionContent>
                            We cannot legally sign opening documents for you, but we introduce you to our banking partners (like Mercury or Brex) and provide all the compliance documents they require to approve your account.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>What is a Registered Agent?</AccordionTrigger>
                        <AccordionContent>
                            A Registered Agent is a person or service designated to receive official legal mail on behalf of your company. It is required by law. We provide this service for free for your first year.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>How long does it take?</AccordionTrigger>
                        <AccordionContent>
                            Standard processing is 5-7 business days. We offer expedited filing (24-48 hours) for an additional state fee.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            <TestimonialsSection />

            {/* 12. FINAL CTA */}
            <section className="py-24 bg-brand-gradient text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Your US business starts here</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/contact?service=Formation&plan=Get Started#form">
                            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 border-0 font-bold px-10 h-14 rounded-xl text-lg shadow-xl hover:-translate-y-1 transition-all">
                                Form Entity
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
