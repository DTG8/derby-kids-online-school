import React from "react";
import { motion } from "framer-motion";
import { Star, BookOpen, GraduationCap, Cloud } from "lucide-react";

export default function FloatingIcons() {
  const icons = [
    { Icon: Star, color: "#FBBF24", size: 20 },
    { Icon: Star, color: "#F59E0B", size: 18 },
    { Icon: BookOpen, color: "#1E40AF", size: 22 },
    { Icon: GraduationCap, color: "#2563EB", size: 20 },
    { Icon: Cloud, color: "#93C5FD", size: 24 },
    { Icon: Star, color: "#FBBF24", size: 16 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 15 }).map((_, index) => {
        const icon = icons[index % icons.length];
        const delay = index * 0.4;
        const duration = 4 + (index % 4);
        const x = 5 + (index * 7) % 85;
        const y = 5 + (index * 11) % 85;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(index) * 25, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          >
            <icon.Icon
              className="opacity-15 hover:opacity-30 transition-opacity"
              size={icon.size}
              color={icon.color}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

