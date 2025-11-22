import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Calculator, Globe, Music, Beaker, Code, GraduationCap, FileText, Book, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingIcons from "@/components/FloatingIcons";

export default function Courses() {
  const coreSubjects = [
    {
      icon: BookOpen,
      title: "English Language Arts (ELA)",
      description: "Reading, Writing, Grammar, Comprehension, and Creative Writing",
      color: "from-blue-500 to-blue-600",
      image: "/english.png",
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Problem Solving, Algebra, Geometry, Fractions, and Data Handling",
      color: "from-purple-500 to-purple-600",
      image: "/mathematics.png",
    },
    {
      icon: Beaker,
      title: "Science",
      description: "Earth Science, Life Science, and Physical Science",
      color: "from-green-500 to-green-600",
      image: "/science.png",
    },
    {
      icon: Music,
      title: "Music",
      description: "Rhythm, Instruments, and Musical Expression",
      color: "from-indigo-500 to-indigo-600",
      image: "/music.png",
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "History, Geography, and Global Awareness",
      color: "from-orange-500 to-orange-600",
      image: "/social.png",
    },
    {
      icon: Code,
      title: "ICT & Coding",
      description: "Digital Skills, Online Safety, and Basic Programming",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  const examPrep = [
    {
      icon: GraduationCap,
      title: "11+ Preparation (UK)",
      description: "Verbal and Non-Verbal Reasoning, English, and Maths",
      color: "from-red-500 to-red-600",
    },
    {
      icon: FileText,
      title: "GCSE Foundation & Higher Tier (UK)",
      description: "English, Maths, Science",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: GraduationCap,
      title: "SAT Prep (US)",
      description: "Reading, Writing, and Mathematics Readiness",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: FileText,
      title: "Cambridge Checkpoint Exams",
      description: "English, Science, and Mathematics",
      color: "from-violet-500 to-violet-600",
    },
  ];

  const enrichment = [
    {
      icon: Book,
      title: "Phonics and Early Reading",
      description: "Building strong reading foundations",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: FileText,
      title: "Creative Writing & Public Speaking",
      description: "Develop communication and expression skills",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Book,
      title: "Bible and Character Studies",
      description: "Building faith, values, and integrity",
      color: "from-rose-500 to-rose-600",
    },
    {
      icon: Gamepad2,
      title: "Chess",
      description: "Strategic thinking and problem-solving",
      color: "from-slate-500 to-slate-600",
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
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <FloatingIcons />
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">Our Courses and Programs</h1>
            <div className="w-24 h-1 bg-[#FBBF24] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
              Comprehensive curriculum designed to nurture young minds and prepare them for success
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Core Academic Subjects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent px-4">
              Core Academic Subjects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {coreSubjects.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={course.image || (index % 2 === 0 ? "/books.jpeg" : "/teens.png")}
                      alt={course.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <course.icon className="w-16 h-16 text-white relative z-10" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1E40AF] mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Exam Preparation Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent px-4">
              Exam Preparation Programs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {examPrep.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={index % 2 === 0 ? "/books.jpeg" : "/teens.png"}
                      alt={course.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <course.icon className="w-12 h-12 text-white relative z-10" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#1E40AF] mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm">{course.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enrichment and Skill-Based Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent px-4">
              Enrichment and Skill-Based Programs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {enrichment.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.title === "Chess" ? "/chess.png" : (index % 2 === 0 ? "/kids.png" : "/hero.jpeg")}
                      alt={course.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <course.icon className="w-16 h-16 text-white relative z-10" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1E40AF] mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm">{course.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
                  <p className="text-2xl font-bold text-[#FBBF24]">1 hour</p>
                </div>
                <div>
                  <p className="text-blue-100 mb-2">Class Size</p>
                  <p className="text-lg font-bold text-[#FBBF24]">One-on-one for all classes</p>
                  <p className="text-sm text-blue-200 mt-1">(Coding, Chess, and Bible Studies available in groups)</p>
                </div>
                <div>
                  <p className="text-blue-100 mb-2">Schedule</p>
                  <p className="text-2xl font-bold text-[#FBBF24]">Flexible timing</p>
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
