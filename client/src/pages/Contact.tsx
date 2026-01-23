import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { Loader2, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Contact() {
  const mutation = useSubmitContact();
  const [location] = useLocation();
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      serviceInterest: ""
    }
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    const plan = params.get('plan');
    
    if (service) {
      form.setValue('serviceInterest', service);
    }
    
    if (plan === 'Book a Call') {
      form.setValue('serviceInterest', 'Other');
      form.setValue('subject', 'Interested in Book a Call');
      form.setValue('message', `I would like to schedule a call to discuss ${service || 'your services'}.`);
    } else if (plan) {
      form.setValue('subject', `Interested in ${plan}`);
      form.setValue('message', `I would like to know more about the ${plan} plan for ${service}.`);
    }

    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const onSubmit = (data: InsertContactInquiry) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* Contact Section */}
      <section id="form" className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">CONTACT US</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 md:mb-10 tracking-tight leading-tight max-w-3xl">
                Have questions? We're here to help.
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                  Reach out and we'll respond within 24 hours. Whether you need tax compliance, advisory services, or just have questions about our offerings.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 group-hover:text-[#3FB9CB] transition-colors">Email</h3>
                      <a href="mailto:contact@eazytaxes.com" className="text-slate-600 hover:text-primary transition-colors text-sm">
                        contact@eazytaxes.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 group-hover:text-[#3FB9CB] transition-colors">Phone</h3>
                      <a href="tel:+12068860475" className="text-slate-600 hover:text-primary transition-colors text-sm">
                        +1 206-886-0475
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 group-hover:text-[#3FB9CB] transition-colors">Registered Address</h3>
                      <p className="text-slate-600 text-sm">
                        8 The Green, STE A,<br />
                        Dover, DE 19901
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-slate-50 p-8 md:p-10 rounded-2xl">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-12 rounded-lg border-slate-300 focus:border-primary bg-white" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Email Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="h-12 rounded-lg border-slate-300 focus:border-primary bg-white" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Service Interest</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                            <FormControl>
                              <SelectTrigger className="h-12 rounded-lg border-slate-300 bg-white">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Tax & Compliance">Tax & Compliance</SelectItem>
                              <SelectItem value="Tax Resolution">Tax Resolution</SelectItem>
                              <SelectItem value="Assurance">Assurance</SelectItem>
                              <SelectItem value="CFO Advisory">CFO Advisory</SelectItem>
                              <SelectItem value="Valuations">Valuations</SelectItem>
                              <SelectItem value="US Formation">US Formation</SelectItem>
                              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Subject *</FormLabel>
                          <FormControl>
                            <Input placeholder="How can we help?" className="h-12 rounded-lg border-slate-300 focus:border-primary bg-white" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your situation and how we can help..." 
                              className="min-h-[150px] rounded-lg resize-none border-slate-300 focus:border-primary bg-white" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={mutation.isPending}
                      className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl text-base"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending Message...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
