import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Video, Clock, Globe, Award, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingIcons from "@/components/FloatingIcons";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const features = [
    { icon: Video, titleKey: "home.features.liveClasses", descKey: "home.features.liveClassesDesc" },
    { icon: Globe, titleKey: "home.features.globalCurriculum", descKey: "home.features.globalCurriculumDesc" },
    { icon: Clock, titleKey: "home.features.flexibleSchedule", descKey: "home.features.flexibleScheduleDesc" },
    { icon: Award, titleKey: "home.features.certifiedPrograms", descKey: "home.features.certifiedProgramsDesc" },
  ];

  const benefitKeys = [
    "home.benefits.item1",
    "home.benefits.item2",
    "home.benefits.item3",
    "home.benefits.item4",
    "home.benefits.item5",
    "home.benefits.item6",
  ];

  // Background slideshow state
  const backgrounds = [
    { type: "gradient", value: "from-[#1E40AF] via-[#2563EB] to-[#3B82F6]" },
    { type: "image", value: "/confident.png" },
    { type: "image", value: "/kids.png" },
    { type: "image", value: "/teens.png" },
    { type: "image", value: "/music.png" },
    { type: "image", value: "/hero.jpeg" },
  ];

  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    let timeout;

    const scheduleNextTransition = (currentIndex) => {
      const next = (currentIndex + 1) % backgrounds.length;
      const delay = currentIndex === 0 ? 1500 : 5000;

      timeout = setTimeout(() => {
        setCurrentBackground(next);
        scheduleNextTransition(next);
      }, delay);
    };

    const initialDelay = setTimeout(() => {
      setCurrentBackground(1);
      scheduleNextTransition(1);
    }, 1500);

    return () => {
      clearTimeout(initialDelay);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const currentBg = backgrounds[currentBackground];
  const prevBg = backgrounds[(currentBackground - 1 + backgrounds.length) % backgrounds.length];

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <FloatingIcons />
      <section className="relative text-white py-8 sm:py-12 md:py-16 lg:py-32 overflow-hidden">
        {/* Previous background */}
        <div className="absolute inset-0">
          {prevBg.type === "gradient" ? (
            <div className={`absolute inset-0 bg-gradient-to-br ${prevBg.value}`}></div>
          ) : (
            <div className="absolute inset-0">
              <Image src={prevBg.value} alt="Background" fill sizes="100vw" className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/80 via-[#2563EB]/70 to-[#3B82F6]/80"></div>
            </div>
          )}
        </div>
        {/* Current background fading in */}
        <motion.div
          key={currentBackground}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {currentBg.type === "gradient" ? (
            <div className={`absolute inset-0 bg-gradient-to-br ${currentBg.value}`}></div>
          ) : (
            <div className="absolute inset-0">
              <Image src={currentBg.value} alt="Background" fill sizes="100vw" className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/80 via-[#2563EB]/70 to-[#3B82F6]/80"></div>
            </div>
          )}
        </motion.div>
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#FBBF24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                {t('home.hero.title')} <span className="text-[#FBBF24]">{t('home.hero.schoolName')}</span> {t('home.hero.subtitle')}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                {t('home.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto">
                    {t('home.hero.enrollButton')}
                  </Button>
                </Link>
                <Link href="/courses" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    style={{ color: "#1E40AF" }}
                    className="border-2 border-white bg-white !text-[#1E40AF] hover:bg-white/90 font-bold py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg w-full sm:w-auto shadow-xl hover:shadow-2xl"
                  >
                    <span className="text-[#1E40AF]">{t('home.hero.exploreButton')}</span>
                  </Button>
                </Link>
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
                  <Image src="/kids.png" alt="Children learning together" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1E40AF]">
                  {t('home.about.title')}
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  {t('home.about.description1')}
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {t('home.about.description2')}
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
              {t('home.features.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {t('home.features.subtitle')}
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
                <h3 className="text-xl font-bold text-[#1E40AF] mb-3">{t(feature.titleKey)}</h3>
                <p className="text-gray-600">{t(feature.descKey)}</p>
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
                {t('home.benefits.title')}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                {t('home.benefits.description')}
              </p>
              <div className="space-y-4">
                {benefitKeys.map((key, index) => (
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
                    <p className="text-gray-700 text-base sm:text-lg">{t(key)}</p>
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
                <h3 className="text-3xl font-bold">{t('home.stats.title')}</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-5xl font-bold text-[#FBBF24] mb-2">100+</p>
                  <p className="text-blue-100">{t('home.stats.students')}</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#FBBF24] mb-2">50+</p>
                  <p className="text-blue-100">{t('home.stats.teachers')}</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#FBBF24] mb-2">98%</p>
                  <p className="text-blue-100">{t('home.stats.satisfaction')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white w-full relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent px-4">
              {t('home.showcase.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {t('home.showcase.subtitle')}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { src: "/kids.png", alt: "Students learning together", titleKey: "home.showcase.interactive", descKey: "home.showcase.interactiveDesc" },
              { src: "/onesupport.png", alt: "Online learning session", titleKey: "home.showcase.support", descKey: "home.showcase.supportDesc" },
              { src: "/academic.png", alt: "Teenage students", titleKey: "home.showcase.excellence", descKey: "home.showcase.excellenceDesc" },
              { src: "/resources.png", alt: "Educational materials", titleKey: "home.showcase.resources", descKey: "home.showcase.resourcesDesc" },
              { src: "/confident.png", alt: "Happy students", titleKey: "home.showcase.confident", descKey: "home.showcase.confidentDesc" },
              { src: "/global.png", alt: "Global education", titleKey: "home.showcase.global", descKey: "home.showcase.globalDesc" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1E40AF] mb-2">{t(item.titleKey)}</h3>
                  <p className="text-gray-600 text-sm">{t(item.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent px-4">
              {t('home.howItWorks.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {t('home.howItWorks.subtitle')}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", titleKey: "home.howItWorks.step1Title", descKey: "home.howItWorks.step1Desc", image: "/hero.jpeg" },
              { step: "02", titleKey: "home.howItWorks.step2Title", descKey: "home.howItWorks.step2Desc", image: "/assessment.png" },
              { step: "03", titleKey: "home.howItWorks.step3Title", descKey: "home.howItWorks.step3Desc", image: "/schedule.png" },
              { step: "04", titleKey: "home.howItWorks.step4Title", descKey: "home.howItWorks.step4Desc", image: "/onelearn.png" },
              { step: "05", titleKey: "home.howItWorks.step5Title", descKey: "home.howItWorks.step5Desc", image: "/updates.png" },
              { step: "06", titleKey: "home.howItWorks.step6Title", descKey: "home.howItWorks.step6Desc", image: "/goals.png" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.image} alt={t(item.titleKey)} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#FBBF24] rounded-full flex items-center justify-center">
                    <span className="text-[#1E40AF] font-bold text-lg">{item.step}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1E40AF] mb-3">{t(item.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(item.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[#1E40AF] px-4">{t('home.testimonials.title')}</h2>
            <div className="w-24 h-1 bg-[#F59E0B] mx-auto mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">{t('home.testimonials.subtitle')}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quoteKey: "home.testimonials.quote1", nameKey: "home.testimonials.parent1", locationKey: "home.testimonials.location1", initial: "M" },
              { quoteKey: "home.testimonials.quote2", nameKey: "home.testimonials.parent2", locationKey: "home.testimonials.location2", initial: "M" },
              { quoteKey: "home.testimonials.quote3", nameKey: "home.testimonials.parent3", locationKey: "home.testimonials.location3", initial: "M" },
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
                <p className="text-gray-700 text-lg leading-relaxed mb-6">&quot;{t(testimonial.quoteKey)}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E40AF] to-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{testimonial.initial}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#1E40AF]">{t(testimonial.nameKey)}</p>
                    <p className="text-gray-500 text-sm">{t(testimonial.locationKey)}</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">{t('home.cta.title')}</h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              {t('home.cta.description')}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold py-6 px-12 text-lg shadow-xl hover:shadow-2xl">
                {t('home.cta.button')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
