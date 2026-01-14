import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, GraduationCap, Award, Users, CheckCircle, X, ChevronRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingIcons from "@/components/FloatingIcons";
import { useLanguage } from "@/lib/LanguageContext";
import { receptionCurriculumData } from "@/lib/receptionCurriculum";
import { grade1CurriculumData } from "@/lib/grade1Curriculum";
import { grade2CurriculumData } from "@/lib/grade2Curriculum";
import { grade3CurriculumData } from "@/lib/grade3Curriculum";
import { grade4CurriculumData } from "@/lib/grade4Curriculum";
import { grade5CurriculumData } from "@/lib/grade5Curriculum";
import { grade6CurriculumData } from "@/lib/grade6Curriculum";
import { grade7CurriculumData } from "@/lib/grade7Curriculum";
import { grade8CurriculumData } from "@/lib/grade8Curriculum";
import { grade9CurriculumData } from "@/lib/grade9Curriculum";
import { grade10CurriculumData } from "@/lib/grade10Curriculum";
import { grade11CurriculumData } from "@/lib/grade11Curriculum";
import { grade12CurriculumData } from "@/lib/grade12Curriculum";

export default function Curriculum() {
  const { t } = useLanguage();
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [currentCurriculumData, setCurrentCurriculumData] = useState(null);
  const [activeTerm, setActiveTerm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const gradeData = [
    { id: "reception", gradeKey: "curriculum.gradeData.reception.grade", ageRangeKey: "curriculum.gradeData.reception.ageRange", descKey: "curriculum.gradeData.reception.description", color: "from-pink-500 to-rose-500", subjects: ["Literacy", "Numeracy", "Science & Discovery", "PSED", "Creative Art", "Motor Skills"] },
    { id: "grade1", gradeKey: "curriculum.gradeData.grade1.grade", ageRangeKey: "curriculum.gradeData.grade1.ageRange", descKey: "curriculum.gradeData.grade1.description", color: "from-blue-500 to-indigo-500", subjects: ["Reading & Writing", "Mathematics", "Science", "Social Studies", "Arts & Creativity"] },
    { id: "grade2", gradeKey: "curriculum.gradeData.grade2.grade", ageRangeKey: "curriculum.gradeData.grade2.ageRange", descKey: "curriculum.gradeData.grade2.description", color: "from-purple-500 to-violet-500", subjects: ["English Language", "Mathematics", "Science Exploration", "History & Geography", "Creative Expression"] },
    { id: "grade3", gradeKey: "curriculum.gradeData.grade3.grade", ageRangeKey: "curriculum.gradeData.grade3.ageRange", descKey: "curriculum.gradeData.grade3.description", color: "from-cyan-500 to-teal-500", subjects: ["Advanced Reading", "Mathematics", "Science & Technology", "Social Studies", "Arts & Music"] },
    { id: "grade4", gradeKey: "curriculum.gradeData.grade4.grade", ageRangeKey: "curriculum.gradeData.grade4.ageRange", descKey: "curriculum.gradeData.grade4.description", color: "from-green-500 to-emerald-500", subjects: ["Literature & Writing", "Mathematics", "Scientific Inquiry", "World Studies", "Creative Arts"] },
    { id: "grade5", gradeKey: "curriculum.gradeData.grade5.grade", ageRangeKey: "curriculum.gradeData.grade5.ageRange", descKey: "curriculum.gradeData.grade5.description", color: "from-amber-500 to-orange-500", subjects: ["English & Literature", "Advanced Mathematics", "Science", "History & Geography", "Technology & Arts"] },
    { id: "grade6", gradeKey: "curriculum.gradeData.grade6.grade", ageRangeKey: "curriculum.gradeData.grade6.ageRange", descKey: "curriculum.gradeData.grade6.description", color: "from-red-500 to-pink-500", subjects: ["Language Arts", "Pre-Algebra", "Life & Physical Science", "World History", "Digital Literacy"] },
    { id: "grade7", gradeKey: "curriculum.gradeData.grade7.grade", ageRangeKey: "curriculum.gradeData.grade7.ageRange", descKey: "curriculum.gradeData.grade7.description", color: "from-indigo-600 to-purple-600", subjects: ["Advanced English", "Algebra", "Biology & Chemistry", "Geography & Civics", "Computer Science"] },
    { id: "grade8", gradeKey: "curriculum.gradeData.grade8.grade", ageRangeKey: "curriculum.gradeData.grade8.ageRange", descKey: "curriculum.gradeData.grade8.description", color: "from-blue-600 to-cyan-600", subjects: ["Literature & Composition", "Geometry", "Physical Science", "World Civilizations", "Technology"] },
    { id: "grade9", gradeKey: "curriculum.gradeData.grade9.grade", ageRangeKey: "curriculum.gradeData.grade9.ageRange", descKey: "curriculum.gradeData.grade9.description", color: "from-violet-600 to-fuchsia-600", subjects: ["English Literature", "Algebra II", "Biology", "World History", "Foreign Language"] },
    { id: "grade10", gradeKey: "curriculum.gradeData.grade10.grade", ageRangeKey: "curriculum.gradeData.grade10.ageRange", descKey: "curriculum.gradeData.grade10.description", color: "from-teal-600 to-green-600", subjects: ["Advanced Literature", "Pre-Calculus", "Chemistry", "Modern History", "Computer Programming"] },
    { id: "grade11", gradeKey: "curriculum.gradeData.grade11.grade", ageRangeKey: "curriculum.gradeData.grade11.ageRange", descKey: "curriculum.gradeData.grade11.description", color: "from-orange-600 to-red-600", subjects: ["AP English", "Calculus", "Physics", "Government & Economics", "Advanced Sciences"] },
    { id: "grade12", gradeKey: "curriculum.gradeData.grade12.grade", ageRangeKey: "curriculum.gradeData.grade12.ageRange", descKey: "curriculum.gradeData.grade12.description", color: "from-rose-600 to-pink-600", subjects: ["College-Level English", "Advanced Mathematics", "Advanced Sciences", "Electives", "College Prep"] }
  ];

  const curriculumFeatureKeys = [
    "curriculum.hero.feature1",
    "curriculum.hero.feature2",
    "curriculum.hero.feature3",
    "curriculum.hero.feature4",
    "curriculum.hero.feature5",
    "curriculum.hero.feature6"
  ];

  const openModal = (grade) => {
    setSelectedGrade(grade);
    let data = null;
    if (grade.id === 'reception') data = receptionCurriculumData;
    else if (grade.id === 'grade1') data = grade1CurriculumData;
    else if (grade.id === 'grade2') data = grade2CurriculumData;
    else if (grade.id === 'grade3') data = grade3CurriculumData;
    else if (grade.id === 'grade4') data = grade4CurriculumData;
    else if (grade.id === 'grade5') data = grade5CurriculumData;
    else if (grade.id === 'grade6') data = grade6CurriculumData;
    else if (grade.id === 'grade7') data = grade7CurriculumData;
    else if (grade.id === 'grade8') data = grade8CurriculumData;
    else if (grade.id === 'grade9') data = grade9CurriculumData;
    else if (grade.id === 'grade10') data = grade10CurriculumData;
    else if (grade.id === 'grade11') data = grade11CurriculumData;
    else if (grade.id === 'grade12') data = grade12CurriculumData;
    setCurrentCurriculumData(data);
    if (data && data.terms && data.terms.length > 0) {
      setActiveTerm(data.terms[0].term);
    } else {
      setActiveTerm(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedGrade(null);
    setActiveTab(0);
    setIsModalOpen(false);
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
              <span className="text-sm font-semibold">{t('curriculum.hero.badge')}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('curriculum.hero.title')}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t('curriculum.hero.subtitle')}
            </p>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 max-w-5xl mx-auto border border-white/20 mb-8">
              <p className="text-base sm:text-lg text-blue-50 leading-relaxed mb-6">
                {t('curriculum.hero.description')}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {curriculumFeatureKeys.map((key, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-left text-blue-50">{t(key)}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-xl sm:text-2xl font-semibold text-[#FBBF24] mb-2">
              {t('curriculum.hero.tagline')}
            </p>
            <p className="text-base sm:text-lg text-blue-100">
              {t('curriculum.hero.motto')}
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
              {t('curriculum.grades.title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('curriculum.grades.subtitle')}
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
                    <span className="text-2xl sm:text-3xl font-bold text-white/90 group-hover:scale-110 transition-transform text-center px-2">{t(grade.gradeKey)}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3 font-medium">{t(grade.ageRangeKey)}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {t(grade.descKey)}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB] group-hover:text-[#1E40AF] transition-colors">
                    <span>{t('curriculum.grades.viewCurriculum')}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Fullscreen Page Experience */}
      <AnimatePresence>
        {selectedGrade && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 overflow-hidden"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="h-full flex flex-col"
            >
              {/* Fixed Header/Navigation Bar */}
              <div className={`sticky top-0 z-10 bg-gradient-to-r ${selectedGrade.color} text-white shadow-lg`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                  <div className="flex items-center justify-between">
                    {/* Back Button */}
                    <button
                      onClick={closeModal}
                      className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 rotate-180" />
                      <span className="font-semibold">{t('curriculum.modal.backButton')}</span>
                    </button>

                    {/* Title */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <h1 className="text-2xl font-bold">{t(selectedGrade.gradeKey)}</h1>
                        <p className="text-sm text-blue-100">{t(selectedGrade.ageRangeKey)}</p>
                      </div>
                    </div>

                    {/* Close Button */}
                    <button
                      onClick={closeModal}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-blue-50 max-w-4xl">{t(selectedGrade.descKey)}</p>
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  {currentCurriculumData ? (
                    <>
                      {/* International Alignments */}
                      <div className="mb-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
                        <h3 className="text-xl font-bold text-[#1E40AF] mb-4 flex items-center gap-2">
                          <Globe className="w-5 h-5" />
                          {t('curriculum.modal.alignmentTitle')}
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {currentCurriculumData.alignments.map((alignment, index) => (
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
                          {currentCurriculumData.terms.map((term, index) => (
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
                        {currentCurriculumData.terms[activeTab].subjects.map((subject, index) => (
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
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700 w-16">{t('curriculum.modal.weekHeader')}</th>
                                    {subject.weeklyPlan[0].objective !== undefined ? (
                                      <>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-700">{t('curriculum.modal.objectiveHeader')}</th>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-700">{t('curriculum.modal.topicsHeader')}</th>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-700">{t('curriculum.modal.activitiesHeader')}</th>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-700">{t('curriculum.modal.assessmentHeader')}</th>
                                      </>
                                    ) : (
                                      <>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-700">{t('curriculum.modal.focusHeader')}</th>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-700">{t('curriculum.modal.activityHeader')}</th>
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
                      <h3 className="text-2xl font-bold text-[#1E40AF] mb-6">{t('curriculum.modal.coreSubjects')}</h3>

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
                          {t('curriculum.modal.learningOutcomes')}
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {t('curriculum.modal.learningOutcomesDesc').replace('{grade}', t(selectedGrade.gradeKey))}
                        </p>
                        <p className="text-gray-600 text-sm italic">
                          {t('curriculum.modal.learningOutcomesNote')}
                        </p>
                      </div>
                    </>
                  )}

                  <div className="mt-6 flex justify-center gap-3 pb-8">
                    {(selectedGrade.id === "reception" || selectedGrade.id === "grade1" || selectedGrade.id === "grade2" || selectedGrade.id === "grade3" || selectedGrade.id === "grade4" || selectedGrade.id === "grade5" || selectedGrade.id === "grade6" || selectedGrade.id === "grade7" || selectedGrade.id === "grade8" || selectedGrade.id === "grade9") && (
                      <Link href="/contact">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 shadow-xl"
                        >
                          {t('curriculum.modal.enrollButton')}
                        </Button>
                      </Link>
                    )}
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold py-4 px-8 shadow-xl"
                      onClick={closeModal}
                    >
                      {t('curriculum.modal.closeButton')}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
