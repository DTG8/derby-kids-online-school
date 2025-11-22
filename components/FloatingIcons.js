import React from "react";
import { motion } from "framer-motion";
import { Star, GraduationCap, Cloud, Circle } from "lucide-react";

export default function FloatingIcons() {
  const icons = [
    { Icon: Star, color: "#FBBF24", size: 28 },
    { Icon: Star, color: "#F59E0B", size: 26 },
    { Icon: Circle, color: "#1E40AF", size: 24, fill: true },
    { Icon: GraduationCap, color: "#2563EB", size: 28 },
    { Icon: Cloud, color: "#93C5FD", size: 32 },
    { Icon: Star, color: "#FBBF24", size: 24 },
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
              className="opacity-55 hover:opacity-70 transition-opacity"
              size={icon.size}
              color={icon.color}
              fill={icon.fill ? icon.color : "none"}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

