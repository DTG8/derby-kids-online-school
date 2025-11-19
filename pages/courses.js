import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Calculator, Globe, Palette, Music, Beaker, Code, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Courses() {
  const courses = [
    {
      icon: BookOpen,
      title: "English Language",
      description: "Comprehensive reading, writing, and communication skills",
      ages: "Ages 5-16",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "From basic arithmetic to advanced problem-solving",
      ages: "Ages 5-16",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Beaker,
      title: "Science",
      description: "Explore the wonders of biology, chemistry, and physics",
      ages: "Ages 7-16",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "Understanding history, geography, and cultures",
      ages: "Ages 7-16",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Code,
      title: "Computer Science",
      description: "Coding, programming, and digital literacy",
      ages: "Ages 8-16",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Palette,
      title: "Arts & Creativity",
      description: "Unleash imagination through visual arts",
      ages: "Ages 5-16",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Music,
      title: "Music",
      description: "Learn instruments, theory, and musical expression",
      ages: "Ages 6-16",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Languages,
      title: "Foreign Languages",
      description: "Learn new languages with native-speaking teachers",
      ages: "Ages 7-16",
      color: "from-rose-500 to-rose-600",
    },
  ];

  const features = [
    "Interactive live classes with experienced teachers",
    "Recorded sessions available for review",
    "Personalized learning pace and attention",
    "Regular assessments and progress reports",
    "Digital learning materials and resources",
    "Small class sizes for better engagement",
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <section className="relative bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6] text-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FBBF24] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">Our Courses</h1>
            <div className="w-24 h-1 bg-[#FBBF24] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
              Comprehensive curriculum designed to nurture young minds and prepare them for success
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent px-4">
              Explore Our Programs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From core subjects to enrichment programs, we offer a well-rounded education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${course.color} p-6 flex items-center justify-center`}>
                  <course.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1E40AF] mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#F59E0B] bg-amber-50 px-3 py-1 rounded-full">
                      {course.ages}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent">
                What Makes Our Courses Special
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                We combine proven teaching methods with modern technology to deliver
                exceptional learning experiences.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg">{feature}</p>
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
              <h3 className="text-3xl font-bold mb-6">Enrollment Information</h3>
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-blue-100 mb-2">Class Duration</p>
                  <p className="text-2xl font-bold">45-60 minutes</p>
                </div>
                <div>
                  <p className="text-blue-100 mb-2">Class Size</p>
                  <p className="text-2xl font-bold">Max 10 students</p>
                </div>
                <div>
                  <p className="text-blue-100 mb-2">Schedule</p>
                  <p className="text-2xl font-bold">Flexible timing</p>
                </div>
              </div>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold py-6 shadow-xl"
                >
                  Enroll Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#3B82F6] text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Ready to Begin Your Learning Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Contact us today to learn more about our courses and enrollment process.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold py-6 px-12 text-lg shadow-xl hover:shadow-2xl"
              >
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
