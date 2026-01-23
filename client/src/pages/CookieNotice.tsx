import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function CookieNotice() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-brand-gradient py-16 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        COOKIE NOTICE
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-blue-100"
                    >
                        Last Updated: 24th January 2026
                    </motion.p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-12">
                        <div className="prose prose-slate max-w-none">
                            <p className="lead text-lg text-slate-600 mb-8">
                                This website uses cookies and similar technologies to ensure proper functionality, enhance user experience, and analyze website usage.
                            </p>
                            <p className="text-slate-600 mb-8">
                                By continuing to use this website, you consent to the use of cookies in accordance with this Cookie Notice, unless you disable them through your browser settings or cookie preferences (where available).
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies?</h2>
                            <p className="text-slate-600 mb-8">
                                Cookies are small text files placed on your device when you visit a website. They help websites recognize your device, remember preferences, and improve performance.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Types of Cookies We Use</h2>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">a. Strictly Necessary Cookies</h3>
                            <p className="text-slate-600 mb-4">
                                These cookies are essential for the website to function properly and cannot be disabled. They enable core functionality such as security, accessibility, and page navigation.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">b. Analytics and Performance Cookies</h3>
                            <p className="text-slate-600 mb-4">
                                These cookies help us understand how visitors interact with our website by collecting aggregated and anonymized usage data (e.g., pages visited, time spent, traffic sources). This information is used to improve website performance and usability.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">c. Functional Cookies</h3>
                            <p className="text-slate-600 mb-8">
                                These cookies allow the website to remember your preferences and settings to provide a more personalized experience.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cookies We Do Not Use</h2>
                            <p className="text-slate-600 mb-4">Eazytaxes Inc. does not use cookies for:</p>
                            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
                                <li>Behavioral advertising</li>
                                <li>Cross-site tracking</li>
                                <li>Selling or sharing personal data</li>
                                <li>Automated profiling or decision-making</li>
                            </ul>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Third-Party Cookies</h2>
                            <p className="text-slate-600 mb-4">Some cookies may be placed by third-party service providers that assist with:</p>
                            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
                                <li>Website analytics</li>
                                <li>Performance monitoring</li>
                                <li>Security and fraud prevention</li>
                            </ul>
                            <p className="text-slate-600 mb-8 text-sm italic">
                                These providers process data in accordance with their own privacy policies.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Managing Cookies</h2>
                            <p className="text-slate-600 mb-4">
                                You may control or disable cookies through your browser settings. Please note that disabling certain cookies may impact website functionality and user experience.
                            </p>
                            <p className="text-slate-600 mb-8">
                                If required by applicable law, cookie preference controls will be provided through a cookie banner or consent manager.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. International Users</h2>
                            <p className="text-slate-600 mb-8">
                                Visitors from jurisdictions with data protection laws (including the EU and UK) may have additional rights regarding cookie consent. Where required, we will obtain consent before placing non-essential cookies.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Updates to This Cookie Notice</h2>
                            <p className="text-slate-600 mb-8">
                                This Cookie Notice may be updated periodically to reflect changes in technology, legal requirements, or website practices. Continued use of the website constitutes acceptance of the updated notice.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Information</h2>
                            <p className="text-slate-600 mb-2">For questions regarding this Cookie Notice or our data practices, contact:</p>
                            <p className="text-lg font-semibold text-primary">
                                <a href="mailto:contact@eazytaxes.com" className="hover:underline">
                                    contact@eazytaxes.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
