import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, ArrowRight, Zap } from "lucide-react";

export default function Careers() {
    const positions = [
        {
            title: "US Tax Preparation Specialist - Senior Accountant",
            type: "Full-time",
            loc: "Remote / Nashik",
            dept: "Tax Services",
            experience: "4-7 years",
            salary: "₹6L - ₹10L per annum"
        },
        {
            title: "US Tax Resolution Specialist",
            type: "Full-time",
            loc: "Remote / Nashik",
            dept: "Tax Resolution",
            experience: "3-6 years",
            salary: "₹4.5L - ₹8L per annum"
        },
        {
            title: "Business Development Manager",
            type: "Full-time",
            loc: "Remote / Nashik",
            dept: "Business Development",
            experience: "3-5 years",
            salary: "₹4L - ₹7L per annum"
        },
        {
            title: "US Tax Accountant",
            type: "Full-time",
            loc: "Remote / Nashik",
            dept: "Tax Services",
            experience: "2-4 years",
            salary: "₹3.5L - ₹6L per annum"
        },
        {
            title: "Business Development Intern",
            type: "Internship",
            loc: "Remote / Nashik",
            dept: "Business Development",
            experience: "Entry Level",
            salary: "₹10,000 - ₹15,000/month"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero */}
            <section className="bg-white min-h-screen flex items-center justify-center text-slate-900 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
                        alt="Team collaboration"
                        className="w-full h-full object-cover opacity-10"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Join the Eazytaxes Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 font-light"
                    >
                        Join our growing team serving USA, UK, and Middle East clients. Build your career in international tax and accounting services.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <a href="#openings">
                            <Button size="lg" className="bg-[#3FB9CB] text-white hover:bg-[#34a0b0] border-0 font-bold px-8 h-14 rounded-xl text-lg shadow-lg">
                                View Openings
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

            {/* Values / Why Join */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">WHY JOIN US</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-10 tracking-tight leading-tight max-w-3xl">
                                Why Join Eazytaxes?
                            </h2>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { num: "01.", title: "International Exposure", desc: "Work with clients from USA, UK, and Middle East markets. Gain global experience." },
                                { num: "02.", title: "Remote Work Flexibility", desc: "Work from home or our Nashik office. We value results over location." },
                                { num: "03.", title: "Professional Growth", desc: "Certification support (EA, CPA), continuous training, and clear career progression paths." },
                                { num: "04.", title: "Competitive Benefits", desc: "Health insurance, performance bonuses, and modern tools & technology." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="p-5 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all group cursor-pointer"
                                >
                                    <p className="text-xs text-slate-400 mb-3">{item.num}</p>
                                    <h4 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-[#3FB9CB] transition-colors leading-snug mb-2">{item.title}</h4>
                                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Open Roles */}
            <section id="openings" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">CAREERS</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight max-w-3xl">Open Positions</h2>
                            <p className="text-lg text-slate-600 max-w-2xl">Join our team and help shape the future of financial services</p>
                        </motion.div>
                    </div>

                    {/* Desktop Table Header */}
                    <div className="hidden md:grid grid-cols-[2fr_1.5fr_2fr_140px] gap-6 px-6 pb-4 text-sm font-semibold text-slate-600">
                        <div>Job title</div>
                        <div>Job type</div>
                        <div>Location</div>
                        <div></div>
                    </div>

                    <div className="space-y-6">
                        {positions.map((pos, i) => (
                            <Link key={i} href={`/careers/${pos.title.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')}/apply`}>
                                <div className="group bg-white hover:shadow-lg rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-200">
                                    {/* Desktop Layout */}
                                    <div className="hidden md:grid grid-cols-[2fr_1.5fr_2fr_140px] gap-6 items-center p-6">
                                        <div>
                                            <h3 className="text-base font-semibold text-slate-900">{pos.title}</h3>
                                            <p className="text-sm text-slate-600 mt-1">{pos.experience} • {pos.salary}</p>
                                        </div>
                                        <div className="text-sm text-slate-700">{pos.type}</div>
                                        <div className="text-sm text-slate-700">{pos.loc}</div>
                                        <div className="flex justify-end">
                                            <button className="px-6 py-2.5 bg-[#3FB9CB] hover:bg-[#34a0b0] text-white font-semibold rounded-lg transition-colors">
                                                Apply now
                                            </button>
                                        </div>
                                    </div>

                                    {/* Mobile Layout */}
                                    <div className="md:hidden p-6 space-y-4">
                                        <h3 className="text-lg font-bold text-slate-900">{pos.title}</h3>
                                        <div className="space-y-2 text-sm text-slate-600">
                                            <div><span className="font-medium text-slate-700">Type:</span> {pos.type}</div>
                                            <div><span className="font-medium text-slate-700">Location:</span> {pos.loc}</div>
                                            <div><span className="font-medium text-slate-700">Experience:</span> {pos.experience}</div>
                                            <div><span className="font-medium text-slate-700">Salary:</span> {pos.salary}</div>
                                        </div>
                                        <button className="w-full px-6 py-3 bg-[#3FB9CB] hover:bg-[#34a0b0] text-white font-semibold rounded-lg transition-colors">
                                            Apply now
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-slate-600 mb-4">Don't see a role that fits?</p>
                        <Link href="/contact">
                            <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
                                Send us your resume
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
