import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, GraduationCap, Award, Users, CheckCircle, X, ChevronRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingIcons from "@/components/FloatingIcons";
import { grade1CurriculumData } from "@/lib/grade1Curriculum";

const gradeData = [
  {
    id: "reception",
    grade: "Reception",
    ageRange: "3-5 years",
    description: "Foundation learning through play, exploration, and discovery",
    color: "from-pink-500 to-rose-500",
    subjects: ["Phonics & Early Reading", "Number Sense", "Physical Development", "Creative Arts", "Social Skills"]
  },
  {
    id: "grade1",
    grade: "Grade 1",
    ageRange: "6-7 years",
    description: "Building core literacy and numeracy foundations",
    color: "from-blue-500 to-indigo-500",
    subjects: ["Reading & Writing", "Mathematics", "Science", "Social Studies", "Arts & Creativity"]
  },
  {
    id: "grade2",
    grade: "Grade 2",
    ageRange: "7-8 years",
    description: "Developing reading fluency and mathematical reasoning",
    color: "from-purple-500 to-violet-500",
    subjects: ["English Language", "Mathematics", "Science Exploration", "History & Geography", "Creative Expression"]
  },
  {
    id: "grade3",
    grade: "Grade 3",
    ageRange: "8-9 years",
    description: "Expanding knowledge and critical thinking skills",
    color: "from-cyan-500 to-teal-500",
    subjects: ["Advanced Reading", "Mathematics", "Science & Technology", "Social Studies", "Arts & Music"]
  },
  {
    id: "grade4",
    grade: "Grade 4",
    ageRange: "9-10 years",
    description: "Deepening understanding across all subject areas",
    color: "from-green-500 to-emerald-500",
    subjects: ["Literature & Writing", "Mathematics", "Scientific Inquiry", "World Studies", "Creative Arts"]
  },
  {
    id: "grade5",
    grade: "Grade 5",
    ageRange: "10-11 years",
    description: "Preparing for middle school academic challenges",
    color: "from-amber-500 to-orange-500",
    subjects: ["English & Literature", "Advanced Mathematics", "Science", "History & Geography", "Technology & Arts"]
  },
  {
    id: "grade6",
    grade: "Grade 6",
    ageRange: "11-12 years",
    description: "Middle school foundation with independent learning",
    color: "from-red-500 to-pink-500",
    subjects: ["Language Arts", "Pre-Algebra", "Life & Physical Science", "World History", "Digital Literacy"]
  },
  {
    id: "grade7",
    grade: "Grade 7",
    ageRange: "12-13 years",
    description: "Advanced concepts and analytical thinking",
    color: "from-indigo-600 to-purple-600",
    subjects: ["Advanced English", "Algebra", "Biology & Chemistry", "Geography & Civics", "Computer Science"]
  },
  {
    id: "grade8",
    grade: "Grade 8",
    ageRange: "13-14 years",
    description: "Preparing for high school rigor and excellence",
    color: "from-blue-600 to-cyan-600",
    subjects: ["Literature & Composition", "Geometry", "Physical Science", "World Civilizations", "Technology"]
  },
  {
    id: "grade9",
    grade: "Grade 9",
    ageRange: "14-15 years",
    description: "High school foundation with college preparation focus",
    color: "from-violet-600 to-fuchsia-600",
    subjects: ["English Literature", "Algebra II", "Biology", "World History", "Foreign Language"]
  },
  {
    id: "grade10",
    grade: "Grade 10",
    ageRange: "15-16 years",
    description: "Core subjects with elective specialization",
    color: "from-teal-600 to-green-600",
    subjects: ["Advanced Literature", "Pre-Calculus", "Chemistry", "Modern History", "Computer Programming"]
  },
  {
    id: "grade11",
    grade: "Grade 11",
    ageRange: "16-17 years",
    description: "College-preparatory curriculum with advanced courses",
    color: "from-orange-600 to-red-600",
    subjects: ["AP English", "Calculus", "Physics", "Government & Economics", "Advanced Sciences"]
  },
  {
    id: "grade12",
    grade: "Grade 12",
    ageRange: "17-18 years",
    description: "Senior year excellence and college readiness",
    color: "from-rose-600 to-pink-600",
    subjects: ["College-Level English", "Advanced Mathematics", "Advanced Sciences", "Electives", "College Prep"]
  }
];

const curriculumFeatures = [
  "Strong reading, writing & communication skills",
  "Mathematical reasoning and problem-solving",
  "Scientific curiosity and real-world understanding",
  "Digital literacy and modern technology skills",
  "Art, creativity, music & performance expression",
  "Confidence, leadership & character development"
];

export default function Curriculum() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const openModal = (grade) => {
    setSelectedGrade(grade);
    setActiveTab(0);
  };

  const closeModal = () => {
    setSelectedGrade(null);
    setActiveTab(0);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <FloatingIcons />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6] text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FBBF24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-6">
              <GraduationCap className="w-6 h-6 text-[#FBBF24]" />
              <span className="text-sm font-semibold">World-Class Education</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-[#FBBF24]">Derby Kids</span> Online School
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Where children learn with joy, think deeply, and grow confidently into well-rounded global citizens.
            </p>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 max-w-5xl mx-auto border border-white/20 mb-8">
              <p className="text-base sm:text-lg text-blue-50 leading-relaxed mb-6">
                Our curriculum blends the best of the <strong className="text-[#FBBF24]">British National Curriculum</strong>,
                <strong className="text-[#FBBF24]"> American Common Core</strong>, and
                <strong className="text-[#FBBF24]"> Cambridge International Standards</strong>, ensuring your child can transition academically anywhere in the world.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {curriculumFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-left text-blue-50">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-xl sm:text-2xl font-semibold text-[#FBBF24] mb-2">
              Every lesson is interactive, engaging, and personalised for success.
            </p>
            <p className="text-base sm:text-lg text-blue-100">
              Derby Kids Online School — <em>preparing children for life, not just for exams.</em>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grade Cards Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent">
              Our Curriculum by Grade
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From Early Years to Grade 12 — carefully structured learning paths for every stage
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gradeData.map((grade, index) => (
              <motion.div
                key={grade.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => openModal(grade)}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
              >
                <div className={`h-32 bg-gradient-to-br ${grade.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white/90 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1E40AF] mb-2">{grade.grade}</h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">{grade.ageRange}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {grade.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB] group-hover:text-[#1E40AF] transition-colors">
                    <span>View Curriculum</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedGrade && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-br ${selectedGrade.color} text-white p-6 sm:p-8 relative`}>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold">{selectedGrade.grade}</h2>
                    <p className="text-blue-100">{selectedGrade.ageRange}</p>
                  </div>
                </div>
                <p className="text-lg text-blue-50">{selectedGrade.description}</p>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[60vh]">
                {selectedGrade.id === "grade1" && grade1CurriculumData ? (
                  <>
                    {/* International Alignments */}
                    <div className="mb-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
                      <h3 className="text-xl font-bold text-[#1E40AF] mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        Aligned with International Standards
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {grade1CurriculumData.alignments.map((alignment, index) => (
                          <a
                            key={index}
                            href={alignment.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 hover:underline transition-colors"
                          >
                            <CheckCircle className="w-4 h-4 flex-shrink-0" />
                            <span>{alignment.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Term Tabs */}
                    <div className="mb-6">
                      <div className="flex gap-2 border-b border-gray-200 overflow-x-auto">
                        {grade1CurriculumData.terms.map((term, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 font-semibold text-sm whitespace-nowrap transition-all ${activeTab === index
                              ? "text-[#1E40AF] border-b-2 border-[#1E40AF]"
                              : "text-gray-500 hover:text-gray-700"
                              }`}
                          >
                            {term.term}
                            <span className="block text-xs font-normal text-gray-500">{term.weeks}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Term Content */}
                    <div className="space-y-8">
                      {grade1CurriculumData.terms[activeTab].subjects.map((subject, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          {/* Subject Header */}
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl">{subject.icon}</span>
                              <div>
                                <h4 className="text-xl font-bold text-[#1E40AF]">{subject.name}</h4>
                                {subject.subtitle && (
                                  <p className="text-sm text-gray-600 mt-1">{subject.subtitle}</p>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Weekly Plan Table */}
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                  <th className="px-4 py-3 text-left font-semibold text-gray-700 w-16">Week</th>
                                  {subject.weeklyPlan[0].objective !== undefined ? (
                                    <>
                                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Objective</th>
                                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Topics</th>
                                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Activities</th>
                                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Assessment</th>
                                    </>
                                  ) : (
                                    <>
                                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Focus</th>
                                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Activity</th>
                                    </>
                                  )}
                                </tr>
                              </thead>
                              <tbody>
                                {subject.weeklyPlan.map((week, weekIndex) => (
                                  <tr
                                    key={weekIndex}
                                    className={`border-b border-gray-100 hover:bg-blue-50/30 transition-colors ${weekIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                                      }`}
                                  >
                                    <td className="px-4 py-3 font-medium text-gray-900">{week.week}</td>
                                    {week.objective !== undefined ? (
                                      <>
                                        <td className="px-4 py-3 text-gray-700">{week.objective}</td>
                                        <td className="px-4 py-3 text-gray-600">{week.topics}</td>
                                        <td className="px-4 py-3 text-gray-600">{week.activities}</td>
                                        <td className="px-4 py-3 text-gray-600">{week.assessment || "—"}</td>
                                      </>
                                    ) : (
                                      <>
                                        <td className="px-4 py-3 text-gray-700">{week.focus}</td>
                                        <td className="px-4 py-3 text-gray-600">{week.activity}</td>
                                      </>
                                    )}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Default modal content for other grades */}
                    <h3 className="text-2xl font-bold text-[#1E40AF] mb-6">Core Subjects</h3>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {selectedGrade.subjects.map((subject, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-[#1E40AF] to-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-gray-800">{subject}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                      <h4 className="text-lg font-bold text-[#D97706] mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Learning Outcomes
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Students in {selectedGrade.grade} will develop comprehensive skills across all subject areas,
                        building on previous knowledge while preparing for the next academic level.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        Detailed curriculum breakdown, lesson plans, and learning objectives are provided to enrolled families.
                      </p>
                    </div>
                  </>
                )}

                <div className="mt-6 flex justify-center gap-3">
                  {selectedGrade.id === "grade1" && (
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 shadow-xl"
                      >
                        Enroll Now
                      </Button>
                    </Link>
                  )}
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold py-4 px-8 shadow-xl"
                    onClick={closeModal}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
}
