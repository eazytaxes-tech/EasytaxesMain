import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Target, Shield, Users, CheckCircle2 } from "lucide-react";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero */}
            <section className="bg-brand-gradient py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 pattern-grid-lg opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        About Eazytaxes Inc.
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto font-light">
                        A US-based professional services firm offering tax, compliance, assurance, and advisory services to businesses and individuals.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Approach</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">We provide clarity, control, and accountability across all service lines.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                        <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-slate-900">Clarity</h3>
                        <p className="text-slate-600">Clear communication and transparent processes in every engagement.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                        <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-slate-900">Control</h3>
                        <p className="text-slate-600">Structured workflows and defined deliverables you can rely on.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-slate-900">Accountability</h3>
                        <p className="text-slate-600">Responsive service and ownership of outcomes from start to finish.</p>
                    </div>
                </div>
            </section>

            {/* Who We Work With */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Who We Work With</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <span className="text-slate-700 text-lg">Founders and owner-led businesses</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <span className="text-slate-700 text-lg">Growing companies with US operations</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <span className="text-slate-700 text-lg">Cross-border individuals and families</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <span className="text-slate-700 text-lg">Teams requiring ongoing compliance or advisory support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engagement Types */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Engagements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold mb-3 text-slate-900">One-time engagements</h3>
                            <p className="text-slate-600">Project-based work with defined scope and deliverables</p>
                        </div>
                        <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Ongoing advisory relationships</h3>
                            <p className="text-slate-600">Continuous support and strategic guidance</p>
                        </div>
                        <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Project-based and recurring work</h3>
                            <p className="text-slate-600">Flexible arrangements matching your needs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Scope</h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        US regulatory and advisory work for domestic and international clients.
                    </p>
                    <p className="text-lg text-slate-500 mt-6">
                        US-based professional services firm · Cross-border and domestic matters · Project-based and ongoing engagements
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}