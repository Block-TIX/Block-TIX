"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Shield, Heart, PartyPopper, Zap, Music, Wallet } from "lucide-react"
import { cn } from "@/lib/utils"

interface Feature {
  id: string
  icon: JSX.Element
  title: string
  description: string
  color: string
  glowColor: string
}

export function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [autoplayEnabled, setAutoplayEnabled] = useState(true)
  const controls = useAnimation()

  const features: Feature[] = [
    {
      id: "authentic",
      icon: <Shield className="h-full w-full" />,
      title: "100% Authentic Tickets",
      description: "No more worries about fake tickets! Every ticket is verified on the blockchain.",
      color: "text-orange-500",
      glowColor: "from-orange-500/20 to-orange-500/0",
    },
    {
      id: "support",
      icon: <Heart className="h-full w-full" />,
      title: "Support Your Favorite Projects",
      description: "Projects receive royalties when tickets are resold on the blockchain.",
      color: "text-pink-500",
      glowColor: "from-pink-500/20 to-pink-500/0",
    },
    {
      id: "memories",
      icon: <PartyPopper className="h-full w-full" />,
      title: "Collect Fun Memories",
      description: "Each ticket becomes a digital collectible to remember your favorite events.",
      color: "text-yellow-500",
      glowColor: "from-yellow-500/20 to-yellow-500/0",
    },
    {
      id: "transfers",
      icon: <Zap className="h-full w-full" />,
      title: "Quick & Easy Transfers",
      description: "Send tickets to friends in seconds - no printing or complicated transfers.",
      color: "text-orange-500",
      glowColor: "from-orange-500/20 to-orange-500/0",
    },
    {
      id: "perks",
      icon: <Music className="h-full w-full" />,
      title: "Exclusive Fan Perks",
      description: "Get special access, merchandise discounts, and unique experiences.",
      color: "text-pink-500",
      glowColor: "from-pink-500/20 to-pink-500/0",
    },
    {
      id: "wallet",
      icon: <Wallet className="h-full w-full" />,
      title: "Simple Wallet Connection",
      description: "Easy setup with popular wallets - no technical knowledge required!",
      color: "text-yellow-500",
      glowColor: "from-yellow-500/20 to-yellow-500/0",
    },
  ]

  // Handle resize and determine if mobile
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Autoplay functionality
  useEffect(() => {
    if (!autoplayEnabled || hoveredFeature) return

    const interval = setInterval(() => {
      const currentIndex = activeFeature ? features.findIndex((f) => f.id === activeFeature) : -1
      const nextIndex = (currentIndex + 1) % features.length
      setActiveFeature(features[nextIndex].id)
    }, 4000)

    return () => clearInterval(interval)
  }, [activeFeature, autoplayEnabled, hoveredFeature, features])

  // Handle initial animation
  useEffect(() => {
    const animateIcons = async () => {
      await controls.start({
        opacity: 1,
        scale: [0, 1.2, 1],
        transition: { duration: 0.5 },
      })
    }

    animateIcons()
  }, [controls])

  // Floating particles for background effect
  const Particles = () => {
    const particleCount = 30
    const particles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: ["orange", "pink", "yellow"][Math.floor(Math.random() * 3)],
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${
              particle.color === "orange"
                ? "bg-orange-500"
                : particle.color === "pink"
                  ? "bg-pink-500"
                  : "bg-yellow-500"
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    )
  }

  // Render feature icon with glow effect
  const FeatureIcon = ({
    feature,
    isActive,
    isHovered,
  }: { feature: Feature; isActive: boolean; isHovered: boolean }) => {
    return (
      <motion.div
        className={cn(
          "relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full",
          isActive || isHovered ? "scale-110" : "scale-100",
          feature.color,
        )}
        animate={controls}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Glow effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-full blur-xl opacity-70 transition-opacity duration-300",
            isActive || isHovered ? "opacity-100" : "opacity-50",
            `bg-gradient-radial ${feature.glowColor}`,
          )}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10"
          animate={isActive || isHovered ? { rotate: [0, 10, -10, 0] } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {feature.icon}
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="relative py-24 overflow-hidden" ref={containerRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-black/90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/5 to-background"></div>
      <Particles />

      {/* Radial gradient for active feature */}
      {activeFeature && !isMobile && (
        <motion.div
          className={cn(
            "absolute inset-0 opacity-20 bg-gradient-radial",
            features.find((f) => f.id === activeFeature)?.glowColor,
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.5 }}
        />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
            Why You'll Love BlockTix
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've reimagined ticketing to make your event experience more fun, secure, and rewarding!
          </p>
        </motion.div>

        {/* Mobile view - vertical scrolling cards */}
        {isMobile && (
          <div className="space-y-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                onHoverStart={() => {
                  setHoveredFeature(feature.id)
                  setAutoplayEnabled(false)
                }}
                onHoverEnd={() => {
                  setHoveredFeature(null)
                  setAutoplayEnabled(true)
                }}
              >
                <div className="flex items-center mb-4">
                  <FeatureIcon
                    feature={feature}
                    isActive={activeFeature === feature.id}
                    isHovered={hoveredFeature === feature.id}
                  />
                  <h3 className={cn("text-xl font-semibold ml-4", feature.color)}>{feature.title}</h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Desktop view - interactive hexagon layout */}
        {!isMobile && (
          <div className="relative h-[600px]">
            {/* Central showcase */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeFeature && (
                  <motion.div
                    key={`content-${activeFeature}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="text-center p-6 backdrop-blur-md rounded-xl"
                  >
                    <h3 className={cn("text-2xl font-bold mb-4", features.find((f) => f.id === activeFeature)?.color)}>
                      {features.find((f) => f.id === activeFeature)?.title}
                    </h3>
                    <p className="text-gray-300">{features.find((f) => f.id === activeFeature)?.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hexagon layout for icons */}
            {features.map((feature, index) => {
              // Calculate position in a hexagon pattern
              const angle = (Math.PI * 2 * index) / features.length
              const radius = 220 // Distance from center
              const x = Math.cos(angle) * radius + containerWidth / 2 - 40 // Adjust for icon size
              const y = Math.sin(angle) * radius + 300 - 40 // Center vertically in the 600px container

              return (
                <motion.div
                  key={feature.id}
                  className="absolute cursor-pointer"
                  style={{ left: x, top: y }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setActiveFeature(feature.id)
                    setAutoplayEnabled(false)
                    setTimeout(() => setAutoplayEnabled(true), 10000) // Resume autoplay after 10 seconds
                  }}
                  onHoverStart={() => setHoveredFeature(feature.id)}
                  onHoverEnd={() => setHoveredFeature(null)}
                >
                  <FeatureIcon
                    feature={feature}
                    isActive={activeFeature === feature.id}
                    isHovered={hoveredFeature === feature.id}
                  />

                  {/* Connection line to center when active */}
                  {activeFeature === feature.id && (
                    <motion.div
                      className={cn("absolute top-1/2 left-1/2 h-0.5 origin-left z-0", feature.color)}
                      style={{
                        width: radius,
                        rotate: `${angle * (180 / Math.PI)}deg`,
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Small label under icon */}
                  <motion.div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeFeature === feature.id || hoveredFeature === feature.id ? 1 : 0.7 }}
                  >
                    <span className={cn("text-sm font-medium", feature.color)}>{feature.title}</span>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
