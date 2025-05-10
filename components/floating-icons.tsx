"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Shield, Ticket, Wallet, Coins, Music, Heart, Star, PartyPopper } from "lucide-react"

interface FloatingIconsProps {
  friendly?: boolean
}

export function FloatingIcons({ friendly = false }: FloatingIconsProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const defaultIcons = [
    { Icon: Shield, color: "#9333ea", x: "10%", y: "20%", size: 24, duration: 8 },
    { Icon: Ticket, color: "#3b82f6", x: "80%", y: "15%", size: 28, duration: 10 },
    { Icon: Wallet, color: "#ec4899", x: "25%", y: "85%", size: 26, duration: 9 },
    { Icon: Coins, color: "#9333ea", x: "70%", y: "75%", size: 30, duration: 12 },
    { Icon: Shield, color: "#3b82f6", x: "15%", y: "60%", size: 22, duration: 7 },
    { Icon: Wallet, color: "#ec4899", x: "85%", y: "40%", size: 32, duration: 11 },
  ]

  const friendlyIcons = [
    { Icon: PartyPopper, color: "#f97316", x: "10%", y: "20%", size: 24, duration: 8 },
    { Icon: Ticket, color: "#ec4899", x: "80%", y: "15%", size: 28, duration: 10 },
    { Icon: Music, color: "#eab308", x: "25%", y: "85%", size: 26, duration: 9 },
    { Icon: Heart, color: "#f97316", x: "70%", y: "75%", size: 30, duration: 12 },
    { Icon: Star, color: "#ec4899", x: "15%", y: "60%", size: 22, duration: 7 },
    { Icon: PartyPopper, color: "#eab308", x: "85%", y: "40%", size: 32, duration: 11 },
  ]

  const icons = friendly ? friendlyIcons : defaultIcons

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => {
        const { Icon, color, x, y, size, duration } = item
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: x, top: y }}
            animate={{
              y: ["-20px", "20px", "-20px"],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-xl opacity-30" style={{ backgroundColor: color }} />
              <Icon size={size} color={color} />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
