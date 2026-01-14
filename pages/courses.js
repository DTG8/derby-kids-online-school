import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Calculator, Globe, Music, Beaker, Code, GraduationCap, FileText, Book, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingIcons from "@/components/FloatingIcons";
import { useLanguage } from "@/lib/LanguageContext";

export default function Courses() {
  const { t } = useLanguage();

  const coreSubjects = [
    { icon: BookOpen, titleKey: "courses.core.ela", descKey: "courses.core.elaDesc", color: "from-blue-500 to-blue-600", image: "/english.png" },
    { icon: Calculator, titleKey: "courses.core.math", descKey: "courses.core.mathDesc", color: "from-purple-500 to-purple-600", image: "/mathematics.png" },
    { icon: Beaker, titleKey: "courses.core.science", descKey: "courses.core.scienceDesc", color: "from-green-500 to-green-600", image: "/science.png" },
    { icon: Music, titleKey: "courses.core.music", descKey: "courses.core.musicDesc", color: "from-indigo-500 to-indigo-600", image: "/music.png" },
    { icon: Globe, titleKey: "courses.core.social", descKey: "courses.core.socialDesc", color: "from-orange-500 to-orange-600", image: "/social.png" },
    { icon: Code, titleKey: "courses.core.ict", descKey: "courses.core.ictDesc", color: "from-cyan-500 to-cyan-600", image: "/ict.png" },
  ];

  const examPrep = [
    { icon: GraduationCap, titleKey: "courses.exam.elevenPlus", descKey: "courses.exam.elevenPlusDesc", color: "from-red-500 to-red-600" },
    { icon: FileText, titleKey: "courses.exam.gcse", descKey: "courses.exam.gcseDesc", color: "from-yellow-500 to-yellow-600" },
    { icon: GraduationCap, titleKey: "courses.exam.sat", descKey: "courses.exam.satDesc", color: "from-teal-500 to-teal-600" },
    { icon: FileText, titleKey: "courses.exam.cambridge", descKey: "courses.exam.cambridgeDesc", color: "from-violet-500 to-violet-600" },
  ];

  const enrichment = [
    { icon: Book, titleKey: "courses.enrichment.phonics", descKey: "courses.enrichment.phonicsDesc", color: "from-pink-500 to-pink-600" },
    { icon: FileText, titleKey: "courses.enrichment.creative", descKey: "courses.enrichment.creativeDesc", color: "from-amber-500 to-amber-600" },
    { icon: Book, titleKey: "courses.enrichment.bible", descKey: "courses.enrichment.bibleDesc", color: "from-rose-500 to-rose-600" },
    { icon: Gamepad2, titleKey: "courses.enrichment.chess", descKey: "courses.enrichment.chessDesc", color: "from-slate-500 to-slate-600" },
  ];

  const featureKeys = [
    "courses.features.item1",
    "courses.features.item2",
    "courses.features.item3",
    "courses.features.item4",
    "courses.features.item5",
    "courses.features.item6",
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">{t('courses.hero.title')}</h1>
            <div className="w-24 h-1 bg-[#FBBF24] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
              {t('courses.hero.subtitle')}
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
              {t('courses.core.title')}
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
                      alt={t(course.titleKey)}
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
                    <h3 className="text-xl font-bold text-[#1E40AF] mb-2">{t(course.titleKey)}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{t(course.descKey)}</p>
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
              {t('courses.exam.title')}
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
                      alt={t(course.titleKey)}
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
                    <h3 className="text-lg font-bold text-[#1E40AF] mb-2">{t(course.titleKey)}</h3>
                    <p className="text-gray-600 text-sm">{t(course.descKey)}</p>
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
              {t('courses.enrichment.title')}
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
                      src={t(course.titleKey) === "Chess" || t(course.titleKey) === "Schaken" ? "/chess.png" : (index % 2 === 0 ? "/kids.png" : "/hero.jpeg")}
                      alt={t(course.titleKey)}
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
                    <h3 className="text-xl font-bold text-[#1E40AF] mb-2">{t(course.titleKey)}</h3>
                    <p className="text-gray-600 text-sm">{t(course.descKey)}</p>
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
                {t('courses.features.title')}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                {t('courses.features.description')}
              </p>
              <div className="space-y-4">
                {featureKeys.map((key, index) => (
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
                    <p className="text-gray-700 text-lg">{t(key)}</p>
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
              <h3 className="text-3xl font-bold mb-6">{t('courses.enrollment.title')}</h3>
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-blue-100 mb-2">{t('courses.enrollment.duration')}</p>
                  <p className="text-2xl font-bold text-[#FBBF24]">{t('courses.enrollment.durationValue')}</p>
                </div>
                <div>
                  <p className="text-blue-100 mb-2">{t('courses.enrollment.classSize')}</p>
                  <p className="text-lg font-bold text-[#FBBF24]">{t('courses.enrollment.classSizeValue')}</p>
                  <p className="text-sm text-blue-200 mt-1">{t('courses.enrollment.classSizeNote')}</p>
                </div>
                <div>
                  <p className="text-blue-100 mb-2">{t('courses.enrollment.schedule')}</p>
                  <p className="text-2xl font-bold text-[#FBBF24]">{t('courses.enrollment.scheduleValue')}</p>
                </div>
              </div>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold py-6 shadow-xl"
                >
                  {t('courses.enrollment.enrollButton')}
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
              {t('courses.cta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              {t('courses.cta.description')}
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold py-6 px-12 text-lg shadow-xl hover:shadow-2xl"
              >
                {t('courses.cta.button')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
