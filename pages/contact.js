import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin, Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { emailService } from "@/lib/emailService";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await emailService.contactSubmission.send(formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      }, 5000);
    } catch (err) {
      setIsSubmitting(false);
      setError(err.message || 'Failed to send message. Please try again or contact us directly.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, title: "Email Us", content: "derbykidshouse@gmail.com", link: "mailto:derbykidshouse@gmail.com" },
    { icon: Phone, title: "Call or WhatsApp", content: "+234 806 263 0979", link: "https://wa.me/2348062630979" },
    { icon: Globe, title: "Visit Our Website", content: "www.derbykidsonlineschool.com", link: "https://www.derbykidsonlineschool.com" },
    { icon: MapPin, title: "Global Platform", content: "Serving students worldwide", link: null },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6] text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FBBF24] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <div className="w-24 h-1 bg-[#FBBF24] mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your child&apos;s learning journey? We&apos;re here to help!
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-700 mb-2">Message Sent!</h3>
                    <p className="text-green-600">We&apos;ll get back to you shortly.</p>
                  </motion.div>
                ) : error ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-700 mb-2">Error Sending Message</h3>
                    <p className="text-red-600 mb-4">{error}</p>
                    <Button onClick={() => setError(null)} className="mt-4 bg-red-600 hover:bg-red-700 text-white">Try Again</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full" placeholder="Your full name" disabled={isSubmitting} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full" placeholder="your.email@example.com" disabled={isSubmitting} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full" placeholder="+234 806 263 0979" disabled={isSubmitting} />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full" placeholder="What can we help you with?" disabled={isSubmitting} />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full" placeholder="Tell us more about your needs..." disabled={isSubmitting} />
                    </div>
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold py-6 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent">Contact Information</h2>
                <p className="text-gray-600 text-lg mb-8">We&apos;re available to answer your questions and help you get started with Derby Kids Online School.</p>
              </div>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1E40AF] to-[#2563EB] rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-[#FBBF24]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1E40AF] mb-1">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} target={info.link.startsWith("http") ? "_blank" : undefined} rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined} className="text-gray-700 hover:text-[#F59E0B] transition-colors">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-700">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
