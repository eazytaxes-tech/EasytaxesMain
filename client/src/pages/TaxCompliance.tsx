import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, FileText, Shield, User, Building, Globe, Clock, AlertTriangle, Layers, HelpCircle, CheckCircle2, Quote } from "lucide-react";
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

export default function TaxCompliance() {
  const pricingOptions = [
    {
      title: "Individual Filing",
      bestFor: "W-2, investment income, basic cross-border items",
      price: "$250",
      features: [
        "Federal return preparation and filing",
        "State filing (if applicable)",
        "Secure onboarding + document checklist",
        "E-filing with IRS confirmation",
        "Basic tax planning guidance"
      ],
      cta: "Start Individual Filing",
      variant: "individual"
    },
    {
      title: "Business Filing",
      bestFor: "LLCs, corporations, partnerships",
      price: "$500",
      featured: true,
      features: [
        "Entity return preparation and filing",
        "State compliance (if applicable)",
        "Secure onboarding + document checklist",
        "Multi-state filing support",
        "Quarterly estimated tax guidance"
      ],
      cta: "Start Business Filing",
      variant: "business"
    },
    {
      title: "Cross-border / International",
      bestFor: "Foreign income/assets, non-US entities",
      price: "$1,500",
      features: [
        "Return + cross-border compliance intake",
        "Reporting scope confirmation",
        "Secure onboarding + checklist",
        "FBAR and FATCA reporting",
        "Treaty position analysis"
      ],
      cta: "Start Cross-border Filing",
      variant: "crossborder"
    }
  ];

  const deliverables = [
    "Prepared and filed returns (as applicable)",
    "Compliance requirement confirmation",
    "Secure client onboarding checklist",
    "Request list for missing items",
    "Final deliverables shared securely",
    "Support for follow-up questions"
  ];

  const situations = [
    { title: "Behind on filings (catch-up)", case: "catchup" },
    { title: "Foreign income or overseas assets", case: "foreign" },
    { title: "Multiple states involved", case: "multistate" },
    { title: "Self-employed / contractor income", case: "selfemployed" },
    { title: "New entity filing", case: "newentity" },
    { title: "Not sure (Start Here)", link: "/start" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* 1. HERO */}
      <section className="bg-white min-h-screen flex items-center justify-center text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/START HERE SECTION PHOTOS/TAX-COMPILENCE.jpg"
            alt="Tax Compliance"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            US Tax & Compliance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 font-light"
          >
            Buy, onboard, and get started immediately for US tax filings and compliance matters.
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
          <div className="mt-6">
            <Link href="/start" className="text-sm text-slate-500 hover:text-[#3FB9CB] underline underline-offset-4">
              Not sure which service applies?
            </Link>
          </div>
          <div className="scroll-down-container mt-12">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-slate-600 font-medium">Returns Filed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50 States</div>
              <div className="text-slate-600 font-medium">Coverage Nationwide</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">99%</div>
              <div className="text-slate-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRICING OPTIONS */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Pricing options</h2>
          <p className="text-slate-600 mt-2">Transparent packages for every situation.</p>
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

              <Link href={`/contact?service=Tax%20%26%20Compliance&plan=${opt.title}#form`} className="w-full">
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

      {/* 4. WHAT YOU GET */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What you get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CHOOSE YOUR SITUATION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Choose your situation</h2>
        <p className="text-center text-slate-600 mb-12">Fast paths to the right solution</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((sit, i) => (
            <Link key={i} href={sit.link || `/checkout?service=tax-compliance&case=${sit.case}`}>
              <div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{sit.title}</h3>
                  <div className="h-1 w-12 bg-slate-100 group-hover:bg-primary transition-colors rounded-full mb-4"></div>
                </div>
                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                  Start Now <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. WHAT WE COVER */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">What we cover</h2>
          <ul className="space-y-4 text-left inline-block">
            {[
              "US federal and state tax filings",
              "Individual, business, and entity compliance",
              "Cross-border filing obligations triggered by foreign activity",
              "Prior-year corrections and catch-up filings",
              "Ongoing compliance support where requirements evolve"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-slate-700">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. PROOF / TRUST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Why clients choose Eazytaxes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Globe />, text: "US-based firm supporting domestic and cross-border clients" },
              { icon: <Layers />, text: "Work spanning tax, assurance, and advisory service lines" },
              { icon: <Clock />, text: "Experience with recurring compliance and multi-year catch-up matters" },
              { icon: <Shield />, text: "Structured onboarding designed to reduce back-and-forth" }
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
              "Purchase and create your account",
              "Complete onboarding and upload documents",
              "We review and proceed with the filing scope"
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
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Individual vs Business vs Cross-Border</h2>
          <p className="text-center text-slate-600 mb-12">Understanding the differences in scope and requirements</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-brand-gradient text-white">
                  <th className="p-4 text-left font-bold">Feature</th>
                  <th className="p-4 text-center font-bold">Individual</th>
                  <th className="p-4 text-center font-bold">Business</th>
                  <th className="p-4 text-center font-bold">Cross-Border</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Starting Price", "$500", "$1,500", "$2,500"],
                  ["Federal Filing", "Yes", "Yes", "Yes"],
                  ["State Filing", "If applicable", "If applicable", "If applicable"],
                  ["Multi-State Support", "No", "Yes", "Yes"],
                  ["FBAR/FATCA", "No", "No", "Yes"],
                  ["Entity Returns", "No", "Yes", "Yes"],
                  ["Treaty Analysis", "No", "No", "Yes"],
                  ["Typical Timeline", "2-3 weeks", "3-4 weeks", "4-6 weeks"]
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
            <AccordionTrigger>What happens after I pay?</AccordionTrigger>
            <AccordionContent>
              You’ll be taken to onboarding immediately to confirm details and receive a document checklist.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What if I’m not sure which option applies?</AccordionTrigger>
            <AccordionContent>
              Use <Link href="/start" className="text-primary hover:underline">Start Here</Link> or book a call, and we’ll guide you to the right service.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you handle state filings?</AccordionTrigger>
            <AccordionContent>
              If your situation requires state filings, they are handled as part of the engagement based on scope.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can you handle prior-year filings?</AccordionTrigger>
            <AccordionContent>
              Yes. Choose “Behind on filings (catch-up)” to begin.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Do you handle cross-border compliance?</AccordionTrigger>
            <AccordionContent>
              Yes. Choose the Cross-border option or “Foreign income or overseas assets.”
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <TestimonialsSection />

      {/* 12. FINAL CTA */}
      <section className="py-24 bg-brand-gradient text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Get started now</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact?service=Tax%20%26%20Compliance&plan=Get Started#form">
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
