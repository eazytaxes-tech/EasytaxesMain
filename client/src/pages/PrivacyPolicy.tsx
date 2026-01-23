import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
                        Privacy Policy
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
                                Eazytaxes Inc. ("Eazytaxes," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information obtained through our website.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">a. Information You Provide Voluntarily</h3>
                            <p className="text-slate-600 mb-4">We may collect information you voluntarily provide, including:</p>
                            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Business or personal details submitted via forms or inquiries</li>
                            </ul>
                            <p className="text-slate-600 mb-6">
                                Submission of information does not guarantee confidentiality unless a formal engagement agreement is established.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">b. Automatically Collected Information</h3>
                            <p className="text-slate-600 mb-4">We may automatically collect:</p>
                            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Device information</li>
                                <li>Pages visited and usage data</li>
                            </ul>
                            <p className="text-slate-600 mb-8">
                                This information is used for analytics, security, and website improvement.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use of Information</h2>
                            <p className="text-slate-600 mb-4">We may use collected information to:</p>
                            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
                                <li>Respond to inquiries</li>
                                <li>Evaluate potential engagements</li>
                                <li>Improve website functionality</li>
                                <li>Comply with legal obligations</li>
                                <li>Protect against fraud or misuse</li>
                            </ul>
                            <p className="text-slate-600 mb-8">
                                We do not use website data to provide professional advice.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. No Confidentiality Prior to Engagement</h2>
                            <p className="text-slate-600 mb-4">
                                Information submitted through this website is not considered confidential and does not establish privilege or confidentiality protections unless and until a formal engagement agreement is executed.
                            </p>
                            <p className="text-slate-600 mb-8">
                                You should not submit sensitive or confidential information unless requested as part of an established engagement.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Information Sharing</h2>
                            <p className="text-slate-600 mb-4">We do not sell personal information.</p>
                            <p className="text-slate-600 mb-4">We may share information:</p>
                            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
                                <li>With service providers assisting website operations</li>
                                <li>To comply with legal or regulatory requirements</li>
                                <li>To protect our rights, property, or safety</li>
                            </ul>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
                            <p className="text-slate-600 mb-8">
                                We implement reasonable administrative and technical safeguards to protect information. However, no website or electronic transmission is completely secure.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies and Tracking</h2>
                            <p className="text-slate-600 mb-8">
                                This website may use cookies or similar technologies to enhance user experience and analyze usage. You may adjust browser settings to limit cookies.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. International Users</h2>
                            <p className="text-slate-600 mb-8">
                                If you access this website from outside the United States, you acknowledge that your information may be processed and stored in the United States or other jurisdictions.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Your Choices</h2>
                            <p className="text-slate-600 mb-4">You may:</p>
                            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
                                <li>Request access to information you submitted</li>
                                <li>Request correction or deletion, subject to legal and operational limitations</li>
                            </ul>
                            <p className="text-slate-600 mb-8">
                                Requests may be made by contacting us at the email below.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Updates to This Policy</h2>
                            <p className="text-slate-600 mb-8">
                                This Privacy Policy may be updated periodically. Continued use of the website constitutes acceptance of the updated policy.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Information</h2>
                            <p className="text-slate-600 mb-2">For privacy-related questions, contact:</p>
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
