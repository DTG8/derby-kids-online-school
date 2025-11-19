import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Video, Clock, Globe, Award, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <section className="relative bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6] text-white py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#FBBF24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Welcome to <span className="text-[#FBBF24]">Derby Kids</span> Online School
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                Empowering young minds with quality education from the comfort of home.
                Join over 100 students learning and growing with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold py-4 sm:py-6 px-6 sm:px-8 text-base sm:text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto">
                    Enroll Your Child Now
                  </Button>
                </Link>
                <Link href="/courses" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    style={{ color: "#1E40AF" }}
                    className="border-2 border-white bg-white !text-[#1E40AF] hover:bg-white/90 font-bold py-4 sm:py-6 px-6 sm:px-8 text-base sm:text-lg w-full sm:w-auto shadow-xl hover:shadow-2xl"
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

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src="/kids.png"
                    alt="Children learning together"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1E40AF]">
                  Learning Without Borders, Growing <span className="relative">
                    Beyond Limits
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#F59E0B] -mt-1"></span>
                  </span>
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  Where learning meets inspiration! We believe every child deserves access to a quality education that is flexible, engaging, and globally relevant. Our experienced teachers use proven learning strategies and interactive tools to help learners build strong academic foundations and the confidence to succeed.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Whether your child needs full-time online schooling, support in English and Math, or exam preparation, Derby Kids provides the guidance, structure, and care that help learners thrive.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent px-4">
              Why Choose Derby Kids?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
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

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent">
                What You&apos;ll Get
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
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
                    <p className="text-gray-700 text-base sm:text-lg">{benefit}</p>
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
                  <p className="text-5xl font-bold text-[#FBBF24] mb-2">100+</p>
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

      <section className="py-12 sm:py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[#1E40AF] px-4">What Parents Say</h2>
            <div className="w-24 h-1 bg-[#F59E0B] mx-auto mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">Real stories from real families.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "My daughter used to struggle with math, but after a few months with Derby Kids, she's more confident and now enjoys solving problems!",
                name: "Mrs. A. Thompson",
                location: "UK",
                initial: "M"
              },
              {
                quote: "The teachers are patient, professional, and know how to keep kids focused online. I've seen so much improvement in my son's reading.",
                name: "Mr. J. Adewale",
                location: "Nigeria",
                initial: "M"
              },
              {
                quote: "Derby Kids has been a blessing! My kids are learning international content right from home  with excellent results.",
                name: "Mrs. L. Robinson",
                location: "Canada",
                initial: "M"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E40AF] to-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{testimonial.initial}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#1E40AF]">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#3B82F6] text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">Ready to Start Learning?</h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
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