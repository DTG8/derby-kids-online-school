import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react";
import FloatingIcons from "@/components/FloatingIcons";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, titleKey: "about.values.passion", descKey: "about.values.passionDesc" },
    { icon: Users, titleKey: "about.values.studentCentered", descKey: "about.values.studentCenteredDesc" },
    { icon: Award, titleKey: "about.values.excellence", descKey: "about.values.excellenceDesc" },
    { icon: Lightbulb, titleKey: "about.values.innovation", descKey: "about.values.innovationDesc" },
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">{t('about.hero.title')}</h1>
            <div className="w-24 h-1 bg-[#FBBF24] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#1E40AF] to-[#2563EB] rounded-3xl overflow-hidden shadow-2xl relative p-5 lg:p-6"
            >
              <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center">
                <div className="flex-1 flex flex-col">
                  <div className="w-10 h-10 bg-[#FBBF24] rounded-xl flex items-center justify-center mb-3">
                    <Target className="w-5 h-5 text-[#1E40AF]" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-white">{t('about.mission.title')}</h2>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {t('about.mission.description')}
                  </p>
                </div>
                <div className="flex-shrink-0 w-full lg:w-64 h-64 relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/ourmission.png"
                    alt="Our Mission"
                    fill
                    sizes="(min-width: 1024px) 256px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-3xl overflow-hidden shadow-2xl relative p-5 lg:p-6"
            >
              <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center">
                <div className="flex-1 flex flex-col">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3">
                    <Eye className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-white">{t('about.vision.title')}</h2>
                  <p className="text-amber-100 text-sm leading-relaxed">
                    {t('about.vision.description')}
                  </p>
                </div>
                <div className="flex-shrink-0 w-full lg:w-64 h-64 relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/ourvision.png"
                    alt="Our Vision"
                    fill
                    sizes="(min-width: 1024px) 256px, 100vw"
                    className="object-cover"
                  />
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
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent px-4">
              {t('about.story.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              {t('about.story.description1')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto min-h-[400px] overflow-hidden rounded-t-3xl lg:rounded-3xl">
                <Image
                  src="/teens.png"
                  alt="Teenage students learning together"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {t('about.story.description2')}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('about.story.description3')}
                </p>
              </div>
            </div>
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
              {t('about.values.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {t('about.values.subtitle')}
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
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={["/kids.png", "/hero.jpeg", "/books.jpeg", "/teens.png"][index]}
                    alt={t(value.titleKey)}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF] to-[#2563EB] opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#FBBF24] rounded-2xl flex items-center justify-center relative z-10">
                      <value.icon className="w-8 h-8 text-[#1E40AF]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1E40AF] mb-3">{t(value.titleKey)}</h3>
                  <p className="text-gray-600">{t(value.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
