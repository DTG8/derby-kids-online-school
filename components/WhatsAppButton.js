import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const whatsappNumber = "2348062630979";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:block font-semibold text-sm pr-2">
        Chat on WhatsApp
      </span>
      <motion.div
        className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </motion.a>
  );
}

