import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Learning",
      description: "We believe every child deserves access to quality education that ignites their curiosity.",
    },
    {
      icon: Users,
      title: "Student-Centered",
      description: "Our approach puts students at the heart of everything we do.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in teaching and learning outcomes.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace modern teaching methods and technology to enhance learning.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6] text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FBBF24] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <div className="w-24 h-1 bg-[#FBBF24] mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transforming education through innovation, dedication, and a commitment to excellence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#1E40AF] to-[#2563EB] rounded-3xl p-10 text-white shadow-2xl"
            >
              <div className="w-16 h-16 bg-[#FBBF24] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#1E40AF]" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                To provide accessible, high-quality online education that empowers children
                to reach their full potential. We strive to create an engaging learning
                environment where every student can thrive, regardless of their location
                or circumstances.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-3xl p-10 text-white shadow-2xl"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-amber-100 text-lg leading-relaxed">
                To become the leading online education platform for children worldwide,
                recognized for our innovative teaching methods, dedicated educators, and
                outstanding student outcomes. We envision a future where quality education
                knows no boundaries.
              </p>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Derby Kids Online School was founded with a simple yet powerful vision:
              to make quality education accessible to every child, everywhere. What started
              as a small initiative has grown into a thriving online learning community,
              serving thousands of students across the globe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our team consists of experienced educators, technology experts, and passionate
              individuals who believe in the transformative power of education. We combine
              traditional teaching excellence with modern technology to create an engaging,
              effective learning experience.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every day, we work tirelessly to ensure that our students receive personalized
              attention, comprehensive curriculum coverage, and the support they need to
              succeed academically and personally. Our commitment extends beyond academics
              to nurturing well-rounded individuals prepared for the challenges of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E40AF] to-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-[#FBBF24]" />
                </div>
                <h3 className="text-xl font-bold text-[#1E40AF] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
