import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Users, Star, Quote } from "lucide-react";

export default function Tutors() {
  const tutors = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Mathematics & Science Specialist",
      qualifications: "Ph.D. in Mathematics Education, M.Ed. in Curriculum Design",
      experience: "15+ years of teaching experience",
      expertise: ["Mathematics", "Physics", "Chemistry", "Advanced Problem Solving"],
      bio: "Passionate educator with a proven track record of helping students excel in STEM subjects. Specializes in making complex concepts accessible and engaging.",
      testimonials: [
        {
          quote: "Dr. Mitchell helped my daughter overcome her fear of math. Now she's one of the top students in her class!",
          author: "Mrs. Johnson, Parent"
        },
        {
          quote: "The way she explains physics concepts is amazing. I finally understand everything!",
          author: "David, Grade 11 Student"
        }
      ],
      avatar: "SM"
    },
    {
      name: "Mr. James Adewale",
      title: "English Language & Literature Expert",
      qualifications: "M.A. in English Literature, B.Ed. in Language Arts",
      experience: "12+ years of teaching experience",
      expertise: ["English Language", "Creative Writing", "Literary Analysis", "Communication Skills"],
      bio: "Dedicated to nurturing confident communicators and critical thinkers through interactive and engaging language instruction.",
      testimonials: [
        {
          quote: "My son's reading and writing skills have improved dramatically since working with Mr. Adewale.",
          author: "Mrs. Thompson, Parent"
        },
        {
          quote: "Best English teacher ever! He makes every lesson interesting and fun.",
          author: "Emma, Grade 9 Student"
        }
      ],
      avatar: "JA"
    },
    {
      name: "Ms. Emily Chen",
      title: "Early Childhood & Primary Education",
      qualifications: "M.Ed. in Early Childhood Education, Certified Montessori Teacher",
      experience: "10+ years of teaching experience",
      expertise: ["Early Literacy", "Numeracy", "Creative Arts", "Social Development"],
      bio: "Specializes in creating a nurturing and stimulating learning environment for young learners, building strong foundations for lifelong learning.",
      testimonials: [
        {
          quote: "Ms. Chen has a wonderful way with children. My 6-year-old absolutely loves her classes!",
          author: "Mr. Williams, Parent"
        },
        {
          quote: "She makes learning so much fun! I love going to her classes every day.",
          author: "Sophie, Grade 2 Student"
        }
      ],
      avatar: "EC"
    },
    {
      name: "Dr. Michael Okafor",
      title: "History & Social Studies Specialist",
      qualifications: "Ph.D. in History, M.A. in Social Studies Education",
      experience: "18+ years of teaching experience",
      expertise: ["World History", "Geography", "Civics", "Research Methods"],
      bio: "Brings history to life through engaging storytelling and interactive learning experiences, helping students understand the world around them.",
      testimonials: [
        {
          quote: "Dr. Okafor makes history fascinating. My daughter now wants to study history in college!",
          author: "Mrs. Robinson, Parent"
        },
        {
          quote: "I never thought history could be this interesting. His classes are amazing!",
          author: "Alex, Grade 10 Student"
        }
      ],
      avatar: "MO"
    },
    {
      name: "Ms. Priya Sharma",
      title: "Computer Science & Coding Instructor",
      qualifications: "M.Sc. in Computer Science, Certified Coding Educator",
      experience: "8+ years of teaching experience",
      expertise: ["Programming", "Web Development", "Data Science", "Digital Literacy"],
      bio: "Passionate about preparing students for the digital age through hands-on coding projects and real-world applications.",
      testimonials: [
        {
          quote: "Ms. Sharma helped my son discover his passion for coding. He's now building his own apps!",
          author: "Mr. Patel, Parent"
        },
        {
          quote: "Learning to code with Ms. Sharma is the best part of my week. So fun and exciting!",
          author: "Ryan, Grade 8 Student"
        }
      ],
      avatar: "PS"
    },
    {
      name: "Mrs. Fatima Al-Hassan",
      title: "French & Spanish Language Teacher",
      qualifications: "M.A. in Modern Languages, Native Speaker Certifications",
      experience: "14+ years of teaching experience",
      expertise: ["French", "Spanish", "Language Immersion", "Cultural Studies"],
      bio: "Native speaker with extensive experience in language instruction, helping students achieve fluency through interactive and immersive methods.",
      testimonials: [
        {
          quote: "Mrs. Al-Hassan's teaching methods are excellent. My daughter is now fluent in French!",
          author: "Mrs. Davis, Parent"
        },
        {
          quote: "Learning Spanish with her is amazing. I can now have conversations in Spanish!",
          author: "Maria, Grade 7 Student"
        }
      ],
      avatar: "FA"
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Expert Tutors</h1>
            <div className="w-24 h-1 bg-[#FBBF24] mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet our team of qualified, experienced, and passionate educators dedicated to your child's success
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="bg-gradient-to-br from-[#1E40AF] to-[#2563EB] p-6 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white/30">
                      <span className="text-white font-bold text-xl">{tutor.avatar}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{tutor.name}</h3>
                      <p className="text-blue-100 text-sm">{tutor.title}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-[#1E40AF]" />
                    <p className="text-sm font-semibold text-[#1E40AF]">Qualifications</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{tutor.qualifications}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-[#F59E0B]" />
                    <p className="text-sm font-semibold text-[#1E40AF]">Experience</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{tutor.experience}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-[#F59E0B]" />
                    <p className="text-sm font-semibold text-[#1E40AF]">Expertise</p>
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
                      <p className="text-sm font-semibold text-[#1E40AF]">Testimonials</p>
                    </div>
                    <div className="space-y-3">
                      {tutor.testimonials.map((testimonial, testimonialIndex) => (
                        <div key={testimonialIndex} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="flex gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-[#FBBF24] text-[#FBBF24]" />
                            ))}
                          </div>
                          <p className="text-gray-700 text-xs leading-relaxed mb-2 italic">&quot;{testimonial.quote}&quot;</p>
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

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <h2 className="text-3xl font-bold">Join Our Team</h2>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Are you a passionate educator looking to make a difference? We're always looking for qualified, experienced tutors to join our team and help shape the future of online education.
                </p>
                <p className="text-blue-100 text-lg leading-relaxed">
                  If you're dedicated to student success and excited about online teaching, we'd love to hear from you!
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Requirements:</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FBBF24]">✓</span>
                    <span>Relevant teaching qualifications and certifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FBBF24]">✓</span>
                    <span>Minimum 5 years of teaching experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FBBF24]">✓</span>
                    <span>Strong communication and interpersonal skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FBBF24]">✓</span>
                    <span>Passion for online education and student success</span>
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

