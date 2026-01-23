import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Shield, User, Globe, Clock, Layers, HelpCircle, CheckCircle2, AlertTriangle, FileText, DollarSign, Scale, Handshake, ClipboardCheck, Quote } from "lucide-react";
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

export default function TaxResolution() {
    const pricingOptions = [
        {
            title: "Notice Response",
            bestFor: "IRS letters, CP notices, state tax notices",
            price: "Starting at $249",
            features: [
                "Notice analysis and account research",
                "Written response preparation",
                "Direct IRS/state correspondence",
                "Power of Attorney filing (Form 2848)",
                "Follow-up until matter is resolved"
            ],
            whoNeeds: [
                "Received a CP notice or IRS letter",
                "Balance due notices",
                "Proposed adjustments or audits",
                "Missing return notices"
            ],
            cta: "Get Started",
            variant: "notice"
        },
        {
            title: "Back Tax Resolution",
            bestFor: "Multiple years unfiled, large balances, liens/levies",
            price: "Starting at $1,500",
            featured: true,
            features: [
                "Complete account assessment",
                "Unfiled return preparation (if needed)",
                "Collection alternative analysis (OIC, installment agreement, CNC)",
                "Lien/levy release negotiation",
                "Penalty abatement requests",
                "Long-term compliance planning"
            ],
            whoNeeds: [
                "Years of unfiled returns",
                "Tax liens or levies in place",
                "Wage garnishment or bank levy",
                "Large balance owed (over $50,000)"
            ],
            cta: "Request Assessment",
            variant: "backtax"
        },
        {
            title: "Audit Representation",
            bestFor: "IRS or state audits, examinations",
            price: "Starting at $2,500",
            features: [
                "Audit defense strategy development",
                "Document preparation and organization",
                "Direct communication with auditor on your behalf",
                "In-person or virtual audit representation",
                "Appeals representation if needed",
                "Negotiation of audit findings"
            ],
            whoNeeds: [
                "Under IRS or state audit",
                "Document requests received",
                "Field audit scheduled",
                "Correspondence audit notice"
            ],
            cta: "Start Audit Defense",
            variant: "audit"
        }
    ];

    const deliverables = [
        { icon: <ShieldCheck />, title: "Professional Representation", desc: "Licensed tax professionals handle all IRS communication on your behalf" },
        { icon: <FileText />, title: "Correspondence Management", desc: "We manage all notices, letters, and documentation requirements" },
        { icon: <DollarSign />, title: "Penalty Abatement", desc: "Assessment and filing of penalty reduction requests where applicable" },
        { icon: <Scale />, title: "Resolution Roadmap", desc: "Clear strategy and timeline for resolving your tax issues" },
        { icon: <Shield />, title: "Secure Document Exchange", desc: "Encrypted portal for sharing sensitive tax documents" },
        { icon: <CheckCircle2 />, title: "Case Closure Report", desc: "Final documentation showing resolution and compliance status" }
    ];

    const situations = [
        { title: "Received an IRS Notice", case: "notice" },
        { title: "Being Audited", case: "audit" },
        { title: "Have Unfiled Returns", case: "unfiled" },
        { title: "Owe Back Taxes", case: "debt" },
        { title: "Payroll Tax Issues", case: "payroll" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* 1. HERO */}
            <section className="bg-white min-h-screen flex items-center justify-center text-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/START%20HERE%20SECTION%20PHOTOS/TAX-RESOLUTION.jpg')" }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Resolve Your IRS Tax Problems
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 font-light"
                    >
                        Expert representation for audits, notices, back taxes, and enforcement actions. We handle the IRS so you don't have to.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a href="#pricing">
                            <Button size="lg" className="bg-[#3FB9CB] text-white hover:bg-[#34a0b0] border-0 font-bold px-8 h-14 rounded-xl text-lg shadow-lg">
                                Get Started
                            </Button>
                        </a>
                        <a href="https://calendly.com/nikunj-eazytaxes/meeting-with-nikunj-eazytaxes" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 h-14 rounded-xl text-lg">
                                Book a Call
                            </Button>
                        </a>
                    </motion.div>
                    <div className="scroll-down-container mt-12">
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                    </div>
                </div>
            </section>

            {/* 2. URGENT ALERT BAR */}
            <section className="py-6 bg-amber-50 border-y border-amber-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center gap-3 text-center">
                        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                        <div>
                            <h3 className="font-bold text-amber-900 text-lg">Received an IRS Notice? Time Matters.</h3>
                            <p className="text-amber-700 text-sm">Response deadlines are strict. Don't wait until it's too late. We can help you understand your options and respond appropriately.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TRUST BAR */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">$2.5M+</div>
                            <div className="text-slate-600 font-medium">Tax Debt Resolved</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">500+</div>
                            <div className="text-slate-600 font-medium">IRS Cases Handled</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">98%</div>
                            <div className="text-slate-600 font-medium">Penalty Abatement Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PRICING */}
            <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">How We Can Help</h2>
                    <p className="text-slate-600 mt-2">Choose the service that matches your IRS situation</p>
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
                                    Most Purchased
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

                            <Link href={`/contact?service=Tax Resolution&plan=${opt.title}#form`} className="w-full">
                                <Button className={`w-full h-14 rounded-full font-bold text-base transition-all duration-300 ${opt.featured
                                    ? 'bg-brand-gradient hover:brightness-110 text-white shadow-[0_0_20px_rgba(63,185,203,0.3)] border-0'
                                    : 'bg-black hover:bg-slate-800 text-white border-0'
                                    }`}>
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

            {/* 5. WHAT YOU GET */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">What You Get with Tax Resolution</h2>
                    <p className="text-center text-slate-600 mb-12">Comprehensive support from initial consultation to final resolution</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {deliverables.map((item, i) => (
                            <div key={i} className="text-center p-6">
                                <div className="w-16 h-16 mx-auto bg-cyan-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. COMMON SITUATIONS */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Common Tax Problems We Solve</h2>
                    <p className="text-center text-slate-600 mb-12">Identify your situation and get immediate help</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {situations.map((sit, i) => (
                            <Link key={i} href={`/contact?service=Tax Resolution&case=${sit.case}#form`}>
                                <div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer h-full flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg mb-2">{sit.title}</h3>
                                        <div className="h-1 w-12 bg-slate-100 group-hover:bg-primary transition-colors rounded-full mb-4"></div>
                                    </div>
                                    <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                                        Resolve Now <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. WHAT WE COVER */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">IRS Issues We Handle</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-cyan-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">IRS Notices & Letters</h3>
                            <p className="text-slate-600 text-sm">CP2000, CP504, Letter 525, and all other IRS correspondence</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-cyan-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Audits & Examinations</h3>
                            <p className="text-slate-600 text-sm">Individual, business, and correspondence audits at federal and state levels</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-cyan-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                <DollarSign className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Unpaid Taxes & Back Returns</h3>
                            <p className="text-slate-600 text-sm">Multiple years unfiled, late filing penalties, failure to pay penalties</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-cyan-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                <AlertTriangle className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Levies & Liens</h3>
                            <p className="text-slate-600 text-sm">Bank levies, wage garnishments, federal tax liens, asset seizures</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-cyan-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                <Handshake className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Payment Plans & Settlements</h3>
                            <p className="text-slate-600 text-sm">Installment agreements, offers in compromise, currently not collectible status</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-cyan-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                <ClipboardCheck className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Penalty Abatement</h3>
                            <p className="text-slate-600 text-sm">First-time penalty abatement, reasonable cause requests, administrative waivers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. WHY CHOOSE US */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Choose Our Tax Resolution Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Shield />, title: "Licensed Professionals", desc: "CPAs and Enrolled Agents authorized to represent you before the IRS" },
                            { icon: <Clock />, title: "Fast Response", desc: "We understand deadlines matter. Quick turnaround on urgent cases" },
                            { icon: <DollarSign />, title: "Transparent Pricing", desc: "No hidden fees. Clear pricing based on your specific situation" },
                            { icon: <CheckCircle2 />, title: "Proven Track Record", desc: "$2.5M+ in tax debt resolved with 98% penalty abatement success" }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 mx-auto bg-cyan-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. HOW IT WORKS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">How Tax Resolution Works</h2>
                    <p className="text-center text-slate-600 mb-16">From consultation to resolution in four clear steps</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-slate-300 z-0"></div>

                        {[
                            { title: "Free Consultation", desc: "We review your situation, notices, and IRS account status at no cost or obligation." },
                            { title: "Case Strategy", desc: "We develop a resolution strategy and provide transparent pricing for your specific situation." },
                            { title: "Power of Attorney", desc: "We file Form 2848 to represent you directly with the IRS. You no longer have to deal with them." },
                            { title: "Resolution", desc: "We handle all communication, negotiate on your behalf, and work toward the best possible outcome." }
                        ].map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center text-2xl font-bold shadow-lg text-white mb-6 border-4 border-white">
                                    {i + 1}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. COMPARISON TABLE */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Notice Response vs. Audit vs. Back Tax Resolution</h2>
                    <p className="text-center text-slate-600 mb-12">Understanding which service matches your situation</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-brand-gradient text-white">
                                    <th className="p-4 text-left font-bold">Feature</th>
                                    <th className="p-4 text-center font-bold">Notice Response</th>
                                    <th className="p-4 text-center font-bold">Audit Defense</th>
                                    <th className="p-4 text-center font-bold">Back Tax Resolution</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Best For", "IRS Letters/Notices", "Under Audit", "Multiple Years/Large Debt"],
                                    ["Complexity", "Low-Medium", "Medium-High", "High"],
                                    ["Timeline", "2-4 weeks", "3-6 months", "6-12 months"],
                                    ["Power of Attorney", "Yes", "Yes", "Yes"],
                                    ["IRS Representation", "Written", "Direct/In-Person", "Comprehensive"],
                                    ["Penalty Abatement", "Yes", "Yes", "Yes"],
                                    ["Payment Plans", "Optional", "Optional", "Yes"],
                                    ["Starting Price", "$1,500", "$3,500", "$5,000+"]
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

            {/* 11. FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What happens if I ignore an IRS notice?</AccordionTrigger>
                            <AccordionContent>
                                Ignoring IRS notices escalates the situation. The IRS can assess additional penalties, file liens, levy your bank accounts, or garnish wages. Every notice has a response deadline—it's critical to act quickly.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Can you stop a wage garnishment or bank levy?</AccordionTrigger>
                            <AccordionContent>
                                Yes. We can request levy releases and negotiate alternative collection methods like installment agreements. Time is critical—contact us immediately if you've received a levy notice.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>What is an Offer in Compromise?</AccordionTrigger>
                            <AccordionContent>
                                An OIC allows you to settle your tax debt for less than the full amount owed if you meet specific financial hardship criteria. We evaluate your eligibility and prepare the application if appropriate.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>How long does tax resolution take?</AccordionTrigger>
                            <AccordionContent>
                                Simple notice responses: 2-4 weeks. Audits: 3-6 months. Complex resolution (OIC, multiple years): 6-12 months. Timeline varies based on IRS workload and case complexity.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Do I need to speak with the IRS myself?</AccordionTrigger>
                            <AccordionContent>
                                No. Once we file Power of Attorney (Form 2848), all IRS communication goes through us. You won't need to speak with IRS agents directly.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>What if I haven't filed taxes in years?</AccordionTrigger>
                            <AccordionContent>
                                We can prepare prior-year returns and negotiate resolution for both filing and payment obligations. The IRS typically requires 6 years of back returns before considering collection alternatives.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* 12. TESTIMONIALS */}
            <section className="py-32 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Quote className="w-12 h-12 text-primary/30 mx-auto mb-10" />
                    <h2 className="text-3xl font-bold mb-16">Trusted by Forward-Thinking Founders</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        {[
                            {
                                text: "Eazytaxes has been instrumental in managing our US compliance while we focus on our global product launch. Their expertise is unmatched.",
                                role: "Tech CEO",
                                company: "Series B Startup",
                                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100"
                            },
                            {
                                text: "The strategic advisory services helped us navigate complex cross-border tax implications during our expansion. Highly recommended.",
                                role: "Founder",
                                company: "Fintech Scale-up",
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"
                            },
                            {
                                text: "Reliable, precise, and proactive. They handled our multi-state nexus issues with ease. A true partner for growth.",
                                role: "CFO",
                                company: "E-commerce Brand",
                                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100"
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 relative group hover:shadow-md transition-all">
                                <div className="text-primary mb-6">
                                    <Quote className="w-8 h-8 fill-current opacity-20" />
                                </div>
                                <p className="text-slate-600 mb-8 italic relative z-10">"{testimonial.text}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={testimonial.image} alt={testimonial.role} className="w-12 h-12 rounded-full object-cover border-2 border-slate-100" />
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">{testimonial.role}</div>
                                        <div className="text-slate-500 text-xs uppercase tracking-wider">{testimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TestimonialsSection />

            {/* 13. FINAL CTA */}
            <section className="py-24 bg-brand-gradient text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4">Don't Face the IRS Alone</h2>
                    <p className="text-blue-100 text-lg mb-8">Get expert representation and peace of mind. Free consultation, no obligation.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/contact?service=Tax Resolution&plan=Get Started#form">
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
                </div>
            </section>

            <Footer />
        </div>
    );
}
