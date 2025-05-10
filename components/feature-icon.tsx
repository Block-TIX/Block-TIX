"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeatureIconProps {
  icon: React.ReactNode
  color: "orange" | "pink" | "yellow"
  className?: string
}

export function FeatureIcon({ icon, color, className }: FeatureIconProps) {
  const colorMap = {
    orange: "text-orange-500",
    pink: "text-pink-500",
    yellow: "text-yellow-500",
  }

  const glowMap = {
    orange: "before:bg-orange-500",
    pink: "before:bg-pink-500",
    yellow: "before:bg-yellow-500",
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className={cn(
        "relative flex items-center justify-center w-16 h-16 mb-4",
        "before:absolute before:inset-0 before:rounded-full before:opacity-20 before:blur-md",
        glowMap[color],
        className,
      )}
    >
      <div className={cn("relative z-10", colorMap[color])}>{icon}</div>
    </motion.div>
  )
}
