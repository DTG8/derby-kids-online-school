import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Video, Clock, Globe, Award, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePageContent() {
  const features = [
    { icon: Video, title: "Live Interactive Classes", description: "Real-time learning with experienced teachers" },
    { icon: Globe, title: "Global Curriculum", description: "International standards for quality education" },
    { icon: Clock, title: "Flexible Schedule", description: "Learn at your own pace, anytime, anywhere" },
    { icon: Award, title: "Certified Programs", description: "Recognized qualifications and certificates" },
  ];

  const benefits = [
    "One-on-one attention from dedicated teachers",
    "Safe and comfortable learning environment",
    "Access to digital learning resources 24/7",
    "Regular progress reports and assessments",
    "Interactive and engaging curriculum",
    "Affordable tuition with flexible payment plans",
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FBBF24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Welcome to <span className="text-[#FBBF24]">Derby Kids</span> Online School
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Empowering young minds with quality education from the comfort of home.
                Join thousands of students learning and growing with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold py-6 px-8 text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto">
                    Start Your Journey
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button
                    size="lg"
                    style={{ color: "#1E40AF" }}
                    className="border-2 border-white bg-white !text-[#1E40AF] hover:bg-white/90 font-bold py-6 px-8 text-lg w-full sm:w-auto shadow-xl hover:shadow-2xl"
                  >
                    <span className="text-[#1E40AF]">Explore Courses</span>
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-96 bg-white/10 backdrop-blur-lg rounded-3xl p-4 border border-white/20 shadow-2xl">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/hero.jpeg"
                      alt="Children learning online together"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1E40AF]/50 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent">
              Why Choose Derby Kids?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide world-class education with personalized attention for every student
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E40AF] to-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-[#FBBF24]" />
                </div>
                <h3 className="text-xl font-bold text-[#1E40AF] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent">
                What You&apos;ll Get
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Derby Kids Online School offers comprehensive education with numerous benefits
                for students and parents alike.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#1E40AF] to-[#2563EB] rounded-3xl p-8 md:p-12 text-white shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-[#FBBF24]" />
                <h3 className="text-3xl font-bold">Student Success</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-5xl font-bold text-[#FBBF24] mb-2">1000+</p>
                  <p className="text-blue-100">Active Students</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#FBBF24] mb-2">50+</p>
                  <p className="text-blue-100">Expert Teachers</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#FBBF24] mb-2">98%</p>
                  <p className="text-blue-100">Parent Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#3B82F6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join Derby Kids Online School today and give your child the gift of quality education.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold py-6 px-12 text-lg shadow-xl hover:shadow-2xl">
                Enroll Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

