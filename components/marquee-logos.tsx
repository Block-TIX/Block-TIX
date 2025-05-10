"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useMotionValue } from "framer-motion"

export function MarqueeLogos() {
  const containerRef = useRef<HTMLDivElement>(null)
  const xTranslation = useMotionValue(0)

  const logos = [
    { name: "Solana", image: "/placeholder.svg?key=solana-logo" },
    { name: "Phantom", image: "/placeholder.svg?key=phantom-logo" },
    { name: "Live Nation", image: "/placeholder.svg?key=livenation-logo" },
    { name: "Ticketmaster", image: "/placeholder.svg?key=ticketmaster-logo" },
    { name: "AEG", image: "/placeholder.svg?key=aeg-logo" },
    { name: "Madison Square Garden", image: "/placeholder.svg?key=msg-logo" },
    { name: "Coachella", image: "/placeholder.svg?key=coachella-logo" },
    { name: "Ultra Music Festival", image: "/placeholder.svg?key=ultra-logo" },
  ]

  // Duplicate the logos to create a seamless loop
  const allLogos = [...logos, ...logos]

  useEffect(() => {
    const marqueeAnimation = () => {
      if (!containerRef.current) return

      const currentTranslation = xTranslation.get()
      const containerWidth = containerRef.current.offsetWidth / 2

      // Reset position when we've scrolled the width of the container
      if (Math.abs(currentTranslation) >= containerWidth) {
        xTranslation.set(0)
      } else {
        xTranslation.set(currentTranslation - 1)
      }

      requestAnimationFrame(marqueeAnimation)
    }

    const animationId = requestAnimationFrame(marqueeAnimation)

    return () => cancelAnimationFrame(animationId)
  }, [xTranslation])

  return (
    <div className="w-full overflow-hidden py-8" ref={containerRef}>
      <motion.div className="flex items-center gap-16" style={{ x: xTranslation }}>
        {allLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 h-12 w-32 relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
          >
            <Image src={logo.image || "/placeholder.svg"} alt={logo.name} fill className="object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
