import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GraduationCap, Mail, Phone } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

export default function Layout({ children }) {
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Tutors", href: "/tutors" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#3B82F6] text-white sticky top-0 z-50 shadow-lg">
        <nav className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 w-full gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FBBF24] rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-[#1E40AF]" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold">Derby Kids</h1>
                <p className="text-[10px] sm:text-xs text-blue-200">Online School</p>
              </div>
            </Link>

            {/* Navigation - Always visible, text only */}
            <div className="flex flex-1 items-center justify-end gap-3 sm:gap-4 lg:gap-6">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-medium transition-[color,background-color,transform] duration-200 ease-in-out relative group whitespace-nowrap px-3 sm:px-4 py-2 rounded-xl focus:outline-none focus:ring-0 will-change-[color,background-color,transform] ${
                      active
                        ? "text-[#FBBF24] font-semibold bg-white/10"
                        : "text-white hover:text-[#FBBF24] hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    {!active && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FBBF24] group-hover:w-full transition-[width] duration-200 ease-in-out rounded-full"></span>
                    )}
                  </Link>
                );
              })}
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold py-2 px-4 sm:px-6 text-sm sm:text-base shadow-xl hover:shadow-2xl whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-0">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full overflow-x-hidden">{children}</main>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 lg:gap-12 mb-6">
            {/* Left Column - About Section */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-[#FBBF24] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#1E40AF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Derby Kids Online School</h3>
                  <p className="text-xs text-blue-100">Global Online Learning Platform</p>
                </div>
              </div>
              <p className="text-blue-100 text-xs leading-relaxed max-w-xs">
                Nurturing confident, creative, and high-achieving learners<br />
                through engaging online education designed for the global child.
              </p>
            </div>

            {/* Middle Column - Quick Links */}
            <div className="flex-shrink-0">
              <h3 className="text-base font-bold mb-3 text-[#FBBF24]">Quick Links</h3>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-[#FBBF24] transition-colors text-xs"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Us */}
            <div className="flex-shrink-0">
              <h3 className="text-base font-bold mb-3 text-[#FBBF24]">Contact Us</h3>
              <div className="flex flex-col gap-2 text-white text-xs mb-3">
                <a 
                  href="mailto:derbykidshouse@gmail.com" 
                  className="hover:text-[#FBBF24] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3 h-3" />
                  derbykidshouse@gmail.com
                </a>
                <a 
                  href="tel:+2348062630979" 
                  className="hover:text-[#FBBF24] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3 h-3" />
                  +234 806 263 0979 (WhatsApp)
                </a>
              </div>
              {/* Social Media Buttons */}
              <div className="flex gap-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-400/40 hover:bg-blue-400/60 rounded-lg flex items-center justify-center text-white font-semibold text-xs transition-colors"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-400/40 hover:bg-blue-400/60 rounded-lg flex items-center justify-center text-white font-semibold text-xs transition-colors"
                  aria-label="Instagram"
                >
                  ig
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-400/40 hover:bg-blue-400/60 rounded-lg flex items-center justify-center text-white font-semibold text-xs transition-colors"
                  aria-label="YouTube"
                >
                  yt
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-blue-400/30 text-center text-white text-sm space-y-1">
            <p>&copy; {new Date().getFullYear()} Derby Kids Online School. All rights reserved.</p>
            <p className="text-blue-100">Learning Without Borders, Growing Beyond Limits.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
