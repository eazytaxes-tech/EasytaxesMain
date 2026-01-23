import { motion } from "framer-motion";
import { Calendar, Tag, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    title: "Prepare to File in 2026: Get Ready for Tax Season (IRS Official)",
    category: "Individual + General Filing",
    bestFor: "Everyone filing 2025 tax returns in 2026",
    published: "Jan 6, 2026",
    summary: "The IRS shared key preparation tips before tax season opens, including organizing documents early, using direct deposit, and checking major tax law updates. This guide helps reduce refund delays and filing errors.",
    highlights: [
      "Tax season opening day reminders",
      "Use IRS online account",
      "Direct deposit + e-filing advantages",
      "Keep W-2, 1099s, and deduction proof ready"
    ],
    source: "IRS Newsroom",
    link: "https://www.irs.gov"
  },
  {
    title: "Next Steps to Get Ready for the 2026 Tax Filing Season (IRS Tax Tip)",
    category: "Individual Taxes",
    bestFor: "People wanting faster filing + refunds",
    published: "Jan 14, 2026",
    summary: "This IRS Tax Tip focuses on practical steps taxpayers should take now—like updating personal details, gathering income records, and understanding when filing officially begins.",
    highlights: [
      "2026 filing season begins Jan 26, 2026",
      "Prepare documentation early",
      "Avoid common refund delays"
    ],
    source: "IRS Tax Tips",
    link: "https://www.irs.gov"
  },
  {
    title: "Year-End Tax Planning Strategies 2025–2026 (Lewis CPA)",
    category: "Business + Individual Tax Planning",
    bestFor: "Small business owners, high earners, proactive taxpayers",
    published: "Jan 9, 2026",
    summary: "This CPA-written blog focuses on bridging the year-end properly using smart tax strategies—like income timing, deductions, entity-level moves, and preparing before deadlines.",
    highlights: [
      "Plan deductions before year-end",
      "Strategic moves for 2025 vs 2026",
      "Business and personal savings opportunities"
    ],
    source: "Lewis.cpa",
    link: "https://lewis.cpa"
  },
  {
    title: "2025–2026 Tax Planning Guide for Business and Individuals (AAFCPAs)",
    category: "Individuals + Businesses",
    bestFor: "Tax planning and compliance guidance",
    published: "Oct 13, 2025",
    summary: "This comprehensive CPA firm guide shares tax-saving strategies and planning opportunities. It's structured for both individuals and businesses, making it perfect for blog reference.",
    highlights: [
      "Tax strategy updates for new changes",
      "Planning for business owners + individuals",
      "Year-end tax saving checklist ideas"
    ],
    source: "AAFCPAs",
    link: "https://www.aafcpa.com"
  },
  {
    title: "Tax Tips for Businesses in 2026 (Plunkett Cooney)",
    category: "Business Taxes",
    bestFor: "Business owners and decision-makers",
    published: "Jan 2026 (recent)",
    summary: "This blog gives business-focused tax tips and explains why planning early is important. It is helpful for businesses preparing for filing and structuring operations for tax efficiency.",
    highlights: [
      "Business tax planning priorities",
      "Year-ahead strategy suggestions",
      "Strong CPA-style recommendations"
    ],
    source: "Plunkett Cooney",
    link: "https://www.plunkettcooney.com"
  },
  {
    title: "One Big Beautiful Bill Act Resources (CPA Journal)",
    category: "Tax Law Updates (Individuals + Businesses)",
    bestFor: "CPAs, finance professionals, advanced taxpayers",
    published: "Jan 20, 2026",
    summary: "This resource roundup covers the One Big Beautiful Bill Act and its potential impact on the 2025 filing season, including both individual and business provisions. It's ideal for creating 'new law update' blog posts.",
    highlights: [
      "Tax law changes that may impact filings",
      "CPE webinars and expert guidance",
      "Individual + business impacts covered"
    ],
    source: "CPA Journal",
    link: "https://www.cpajournal.com"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd] text-[#0f172a]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Resources & Tax Insights
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
              Stay informed with the latest tax updates, planning strategies, and compliance tips
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-cyan-200 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-cyan-600" />
                    <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider">
                      {blog.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.published}</span>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-700">Best For:</p>
                    <p className="text-sm text-slate-600">{blog.bestFor}</p>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                    {blog.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6 flex-grow">
                    <p className="text-sm font-semibold text-slate-700 mb-2">Key Highlights:</p>
                    <ul className="space-y-1">
                      {blog.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0"></span>
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Source & Link */}
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Source: {blog.source}</span>
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-600 hover:text-cyan-700 font-semibold text-sm group-hover:gap-2 transition-all"
                      >
                        Read More
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Need Expert Tax Guidance?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
              Our team of experienced CPAs is ready to help you navigate complex tax situations
            </p>
            <a href="https://calendly.com/nikunj-eazytaxes/meeting-with-nikunj-eazytaxes" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-10 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                Schedule Consultation
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
