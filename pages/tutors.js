import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Users, Quote } from "lucide-react";
import FloatingIcons from "@/components/FloatingIcons";
import { useLanguage } from "@/lib/LanguageContext";

export default function Tutors() {
  const { t } = useLanguage();

  const tutors = [
    {
      name: "Mrs. Olukemi Kehinde",
      title: "Lead Tutor and Educational Consultant",
      qualifications: "M.Sc in Microbiology • B.Sc in Microbiology • PGDE in English Language • TRCN Certified Professional Educator",
      experience: "15 years of outstanding teaching experience across multiple subjects and grade levels.",
      expertise: [
        "Microbiology",
        "English Language",
        "Curriculum Design",
        "Learner Psychology",
        "Cultural Diversity in Education",
        "Socratic Questioning",
      ],
      bio: "Olukemi Kehinde is an intentional, dynamic, and highly seasoned tutor with 15 years of outstanding teaching experience. She brings a wealth of expertise across multiple subjects and grade levels, backed by a strong command of curriculum design, learner psychology, and cultural diversity. Her teaching journey has equipped her with the versatility and depth needed to support learners from different backgrounds, abilities, and learning styles.",
      testimonials: [
        {
          quote:
            "My teaching philosophy is firmly rooted in student-centered learning, where each child's unique strengths and growth areas are intentionally nurtured. I design interactive, engaging, and inquiry-driven lessons that ignite curiosity and deepen understanding. Through Socratic questioning, I challenge learners to think critically, analyze ideas, and take ownership of their learning. I am passionate about creating an inclusive, supportive, and motivating learning environment, one where every student feels valued, confident, and empowered to reach their fullest potential.",
          author: "Teaching Philosophy – Mrs. Olukemi Kehinde",
        },
      ],
      quoteLabel: "Teaching Philosophy",
      avatar: "OK",
      image: "/tutors/olukemi.jpg",
    },
    {
      name: "Mrs. Kofoworola Martins",
      title: "English Language and Phonics Tutor",
      qualifications:
        "M.Sc in Communication • B.A. English • PGDE in Educational Management • TRCN Certified",
      experience: "16 years of dedicated teaching experience across multiple subjects and age groups.",
      expertise: [
        "English Language & Communication",
        "Curriculum Design",
        "Educational Management",
        "Culturally Responsive Teaching",
      ],
      bio: "Kofoworola Martins is a seasoned tutor with sixteen years of classroom and coaching experience. She combines deep subject knowledge with a strong understanding of curriculum design and cultural nuances to create learning experiences that truly meet each child where they are.",
      testimonials: [
        {
          quote:
            "My teaching philosophy is that every child should be given the opportunity to explore the world and express their own perceptions about life according to their experiences in life.",
          author: "Teaching Philosophy – Mrs. Kofoworola Martins",
        },
      ],
      quoteLabel: "Teaching Philosophy",
      avatar: "KM",
      image: "/tutors/kofoworola.jpg",
    },
    {
      name: "Mr. Ikechukwu Ozoemena",
      title: "ICT, Coding & Mathematics Tutor",
      qualifications: "B.Sc in Computer Science",
      experience: "2 years of online ICT and coding teaching experience (Grades 1–6).",
      expertise: [
        "Scratch Coding",
        "Python (Beginner – Intermediate)",
        "Web Development Basics",
        "Mathematics (Grades 1–6)",
        "Virtual Classroom Instruction",
      ],
      bio: "Mr. Ikechukwu Ozoemena is an enthusiastic ICT educator who designs engaging, age-appropriate lessons in Scratch, Python, web development, and mathematics for primary school learners. He focuses on building core problem‑solving skills and digital literacy in a fun, supportive environment.",
      testimonials: [
        {
          quote:
            "I believe in making learning fun, interactive, and relevant, empowering students to become creative problem-solvers and critical thinkers.",
          author: "Teaching Philosophy – Mr. Ikechukwu Ozoemena",
        },
      ],
      quoteLabel: "Teaching Philosophy",
      avatar: "IO",
      image: "/tutors/ikechukwu.jpg",
    },
    {
      name: "Mrs. Adeniran Grace",
      title: "Early Years Tutor",
      qualifications: "B.Sc in Biology • N.C.E Biology/Computer • EYFS Certificate",
      experience: "21 years of dedicated teaching experience with deep understanding of curriculum design and cultural nuances.",
      expertise: [
        "Biology",
        "Science Education",
        "Early Years Foundation Stage (EYFS)",
        "Curriculum Design",
        "Learner-Centered Instruction",
      ],
      bio: "Adeniran Grace is an excellent and committed tutor who opens minds, touches hearts, and plants the seed of knowledge that lasts a lifetime. With 21 years of experience, she brings a deep understanding of curriculum design and cultural nuances to her teaching practice.",
      testimonials: [
        {
          quote:
            "My teaching philosophy encompasses learner-centered instruction, inspiring, guiding, empowering minds and stimulating learners to meet their full potential by fostering critical thinking.",
          author: "Teaching Philosophy – Mrs. Adeniran Grace",
        },
      ],
      quoteLabel: "Teaching Philosophy",
      avatar: "AG",
      image: "/tutors/grace.jpg",
    },
    {
      name: "Mrs. Agboola Dorcas Bunmi",
      title: "Guidance and Counseling/Elementary School Subjects Tutor",
      qualifications: "M.Ed Guidance and Counseling • B.Ed Guidance and Counseling • National Certificate in Primary Education studies/CRS • TRCN Certified",
      experience: "23 years of seasoned teaching experience across various subjects and age groups.",
      expertise: [
        "Guidance and Counseling",
        "Differentiated Learning",
        "Cultural Diversity Awareness",
        "Primary Education",
        "Christian Religious Studies (CRS)",
      ],
      bio: "Agboola Dorcas Bunmi is a seasoned educator with 23 years of experience. Her expertise spans teaching various subjects and age groups, with a deep understanding of differentiated learning patterns and flexibility, being conscious of cultural diversity.",
      testimonials: [
        {
          quote:
            "I believe every word, every contact, and every learning counts; these can be achieved via impactful teaching and learning to produce a total child.",
          author: "Teaching Philosophy – Mrs. Agboola Dorcas Bunmi",
        },
      ],
      quoteLabel: "Teaching Philosophy",
      avatar: "ADB",
      image: "/tutors/dorcas.jpg",
    },
    {
      name: "Mrs. Anthonia Adamma Orji",
      title: "Science and Mathematics Tutor",
      qualifications: "M.Ed in Educational Administration • B.Sc in Chemistry Education • Cambridge/Check Point International Examinations Professional",
      experience: "32+ years of dedicated educational leadership and teaching experience.",
      expertise: [
        "Chemistry Education",
        "Educational Administration",
        "Curriculum Design",
        "International Examinations (Cambridge/Check Point)",
        "Cultural Sensitivity in Education",
      ],
      bio: "Anthonia Adamma Orji is a motivated and intentional educational leader who has dedicated over 32 years to improving the education, culture and climate of the schools she has worked with. Her skills encompass teaching diverse subjects and age groups, with expertise in designing curricula that respect and incorporate cultural sensitivities.",
      testimonials: [
        {
          quote:
            "I inspire students to become critical thinkers, problem-solvers, and compassionate individuals providing ongoing support, feedback, and encouragement. I also prepare students for success in an ever-changing world.",
          author: "Teaching Philosophy – Mrs. Anthonia Adamma Orji",
        },
      ],
      quoteLabel: "Teaching Philosophy",
      avatar: "AAO",
      image: "/tutors/anthonia.jpg",
    },
    {
      name: "Mrs. Tolorunloju Isioma",
      title: "Biology, Basic Sciences & Grammar Tutor",
      qualifications: "B.Sc. Botany • PGDE Biology • Cambridge Certification (in view, January batch) • TRCN (awaiting)",
      experience: "15+ years on-site and 1+ year online teaching experience (Elementary, Middle School, High school, Exam preparatory classes).",
      expertise: [
        "Biology",
        "Basic Sciences",
        "Grammar",
        "Child Development",
        "Teaching Strategies",
        "Multiple Intelligence",
      ],
      bio: "Tolorunloju Isioma is an experienced tutor specializing in Biology, Basic Sciences and Grammar. With a knack for making complex concepts absorbable, she is skilled in creating engaging lessons and adapting to students' learning styles. She has extensive training in child development, teaching strategies, and multiple intelligence, with a proven track record of helping students achieve excellent grades.",
      testimonials: [
        {
          quote:
            "My teaching style focuses on interactive and engaging lessons, personalized approach to meet individual needs, and building confidence and understanding in every student.",
          author: "Teaching Philosophy – Mrs. Tolorunloju Isioma",
        },
      ],
      quoteLabel: "Teaching Philosophy",
      avatar: "TI",
      image: "/tutors/isioma.jpg",
    },
    {
      name: "Mrs. Bibian Onyinye Nwo",
      title: "Elementary School Subjects Tutor",
      qualifications: "B.Sc. Economics • PGDE • TEFL • TRCN (awaiting)",
      experience: "13+ years on-site and 2+ years online teaching experience (Elementary, Middle School, High school, Exam preparatory classes).",
      expertise: [
        "English",
        "Mathematics",
        "Social Studies",
        "Civic Education",
        "Basic Science",
        "Child Development",
        "Teaching Strategies",
        "Multiple Intelligence",
        "Thinking Routines",
        "Effective Class Management",
        "Ethical Thinking",
      ],
      bio: "Bibian Onyinye Nwo is an experienced educator with 13 years of teaching, dedicated to simplifying complex ideas into clear, engaging, and easy-to-understand lessons. She is passionate about helping learners grasp concepts confidently through creative and student-friendly teaching methods. She has extensive training in child development, teaching strategies, multiple intelligence, thinking routines, effective class management and ethical thinking.",
      testimonials: [
        {
          quote:
            "My teaching style focuses on interactive and engaging lessons, personalized approach to meet individual needs, and building confidence and understanding in every student.",
          author: "Teaching Philosophy – Mrs. Bibian Onyinye Nwo",
        },
      ],
      quoteLabel: "Teaching Philosophy",
      avatar: "BON",
      image: "/tutors/bibian.jpg",
    },
    {
      name: "Ms. Joy Ijabiyi",
      title: "Elementary School Subjects Tutor",
      qualifications: "B.A. in History and International Studies",
      experience: "5 years of dedicated teaching experience.",
      expertise: [
        "History",
        "International Studies",
        "Critical Thinking",
        "Student-Centered Learning",
        "Personal Development",
      ],
      bio: "Joy Ijabiyi is a dedicated, innovative and student-centered educator with five years of teaching experience. She creates a supportive, learner-centered environment that promotes critical thinking, active participation and personal growth.",
      testimonials: [
        {
          quote:
            "My philosophy is built on the belief that every learner has the potential to succeed when guided with patience, structure and encouragement.",
          author: "Teaching Philosophy – Ms. Joy Ijabiyi",
        },
      ],
      quoteLabel: "Teaching Philosophy",
      avatar: "JI",
      image: "/tutors/joy.jpg",
    }
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">{t('tutors.hero.title')}</h1>
            <div className="w-24 h-1 bg-[#FBBF24] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
              {t('tutors.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((tutor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Tutor header with full-width image (or gradient fallback) */}
                {tutor.image ? (
                  <div className="relative h-60 w-full">
                    <Image
                      src={tutor.image}
                      alt={tutor.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-[center_30%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E40AF]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold leading-snug">{tutor.name}</h3>
                      <p className="text-blue-100 text-xs sm:text-sm">{tutor.title}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-[#1E40AF] to-[#2563EB] p-6 text-white">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 border-2 border-white/30">
                        <span className="text-white font-bold text-xl">{tutor.avatar}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold leading-snug">{tutor.name}</h3>
                        <p className="text-blue-100 text-xs sm:text-sm">{tutor.title}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-[#1E40AF]" />
                    <p className="text-sm font-semibold text-[#1E40AF]">{t('tutors.labels.qualifications')}</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{tutor.qualifications}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-[#F59E0B]" />
                    <p className="text-sm font-semibold text-[#1E40AF]">{t('tutors.labels.experience')}</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{tutor.experience}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-[#F59E0B]" />
                    <p className="text-sm font-semibold text-[#1E40AF]">{t('tutors.labels.expertise')}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutor.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-[#1E40AF]/10 to-[#2563EB]/10 rounded-full text-xs font-medium text-[#1E40AF] border border-[#1E40AF]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{tutor.bio}</p>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Quote className="w-5 h-5 text-[#F59E0B]" />
                      <p className="text-sm font-semibold text-[#1E40AF]">
                        {t('tutors.labels.teachingPhilosophy')}
                      </p>
                    </div>
                    <div className="space-y-3">
                      {tutor.testimonials.map((testimonial, testimonialIndex) => (
                        <div
                          key={testimonialIndex}
                          className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                        >
                          <p className="text-gray-700 text-xs leading-relaxed mb-2 italic">
                            &quot;{testimonial.quote}&quot;
                          </p>
                          <p className="text-gray-500 text-xs font-medium">{testimonial.author}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1E40AF] to-[#2563EB] rounded-3xl p-8 md:p-12 text-white shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-10 h-10 text-[#FBBF24]" />
                  <h2 className="text-3xl font-bold">{t('tutors.joinTeam.title')}</h2>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  {t('tutors.joinTeam.description1')}
                </p>
                <p className="text-blue-100 text-lg leading-relaxed">
                  {t('tutors.joinTeam.description2')}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">{t('tutors.joinTeam.requirementsTitle')}</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FBBF24]">✓</span>
                    <span>{t('tutors.joinTeam.requirement1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FBBF24]">✓</span>
                    <span>{t('tutors.joinTeam.requirement2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FBBF24]">✓</span>
                    <span>{t('tutors.joinTeam.requirement3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FBBF24]">✓</span>
                    <span>{t('tutors.joinTeam.requirement4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
