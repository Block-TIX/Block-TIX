"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Heart, PartyPopper, Zap, Music, Wallet, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

// Update the Feature interface to include more detailed information
interface Feature {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  color: "orange" | "pink" | "yellow"
  detailedInfo: string[]
  benefits: string[]
  compatibleWith?: string[]
  callToAction?: string
}

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState<string | null>("authentic")
  const [autoplayEnabled, setAutoplayEnabled] = useState(true)

  // Replace the features array with this enhanced version
  const features: Feature[] = [
    {
      id: "authentic",
      icon: <Shield className="h-8 w-8" />,
      title: "100% Authentic Tickets",
      description: "No more worries about fake tickets! Every ticket is verified on the blockchain.",
      color: "orange",
      detailedInfo: [
        "Each ticket is a unique NFT on the Solana blockchain",
        "Cryptographic verification ensures tickets can't be duplicated",
        "QR codes are dynamically generated and tied to your wallet",
      ],
      benefits: [
        "Zero chance of counterfeit tickets",
        "Transparent ownership history",
        "Secure entry verification at venues",
      ],
      callToAction: "Buy with confidence",
    },
    {
      id: "support",
      icon: <Heart className="h-8 w-8" />,
      title: "Support Your Favorite Projects",
      description: "Projects receive royalties when tickets are resold on the blockchain.",
      color: "pink",
      detailedInfo: [
        "Smart contracts automatically distribute royalties on resales",
        "Projects receive 5-10% of secondary market sales via tokens",
        "Direct support without intermediaries taking large cuts",
      ],
      benefits: [
        "Projects earn sustainable revenue",
        "Token-based ecosystem for community growth",
        "Closer connection between users and blockchain projects",
      ],
      callToAction: "Support crypto innovation",
    },
    {
      id: "memories",
      icon: <PartyPopper className="h-8 w-8" />,
      title: "Collect Fun Memories",
      description: "Each ticket becomes a digital collectible to remember your favorite events.",
      color: "yellow",
      detailedInfo: [
        "Tickets transform into collectible NFTs after the event",
        "Special artwork and animations unique to each event",
        "Build your digital memory collection over time",
      ],
      benefits: [
        "Permanent record of your experiences",
        "Exclusive digital memorabilia",
        "Potential for increased value over time",
      ],
      callToAction: "Start your collection",
    },
    {
      id: "transfers",
      icon: <Zap className="h-8 w-8" />,
      title: "Quick & Easy Transfers",
      description: "Send tickets to friends in seconds - no printing or complicated transfers.",
      color: "orange",
      detailedInfo: [
        "Transfer tickets with just a few taps",
        "Recipients don't need crypto knowledge to receive tickets",
        "Instant delivery with email or phone number",
      ],
      benefits: [
        "No more meeting up to exchange physical tickets",
        "Easy group coordination for events",
        "Secure transfers with confirmation receipts",
      ],
      compatibleWith: ["Email", "SMS", "WhatsApp", "Telegram"],
      callToAction: "Share the experience",
    },
    {
      id: "perks",
      icon: <Music className="h-8 w-8" />,
      title: "Exclusive Fan Perks",
      description: "Get special access, merchandise discounts, and unique experiences.",
      color: "pink",
      detailedInfo: [
        "VIP access unlocked through ticket ownership",
        "Early access to merchandise and future events",
        "Special meet-and-greet opportunities",
      ],
      benefits: ["Rewards for loyal fans", "Enhanced event experiences", "Exclusive content and opportunities"],
      callToAction: "Unlock exclusive benefits",
    },
    {
      id: "wallet",
      icon: <Wallet className="h-8 w-8" />,
      title: "Simple Wallet Connection",
      description: "Easy setup with popular wallets - no technical knowledge required!",
      color: "yellow",
      detailedInfo: [
        "One-click connection with major Solana wallets",
        "Guided setup process for new users",
        "Secure, non-custodial design protects your assets",
      ],
      benefits: [
        "Get started in under 2 minutes",
        "Full control of your digital assets",
        "Seamless experience across devices",
      ],
      compatibleWith: ["Phantom", "Solflare", "Backpack", "Glow"],
      callToAction: "Connect and explore",
    },
  ]

  // Autoplay functionality
  useEffect(() => {
    if (!autoplayEnabled) return

    const interval = setInterval(() => {
      const currentIndex = activeFeature ? features.findIndex((f) => f.id === activeFeature) : -1
      const nextIndex = (currentIndex + 1) % features.length
      setActiveFeature(features[nextIndex].id)
    }, 3000)

    return () => clearInterval(interval)
  }, [activeFeature, autoplayEnabled, features])

  // Color mapping
  const getColorClasses = (color: Feature["color"], isActive: boolean) => {
    const baseColors = {
      orange: "text-orange-500",
      pink: "text-pink-500",
      yellow: "text-yellow-500",
    }

    const bgColors = {
      orange: isActive ? "bg-orange-500" : "bg-orange-500/20",
      pink: isActive ? "bg-pink-500" : "bg-pink-500/20",
      yellow: isActive ? "bg-yellow-500" : "bg-yellow-500/20",
    }

    const borderColors = {
      orange: "border-orange-500/50",
      pink: "border-pink-500/50",
      yellow: "border-yellow-500/50",
    }

    return {
      text: baseColors[color],
      bg: bgColors[color],
      border: borderColors[color],
    }
  }

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/5 to-background"></div>

      {/* Subtle network pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      ></div>

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
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We've reimagined ticketing to make your event experience more fun, secure, and rewarding!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Feature icons grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {features.map((feature) => {
              const isActive = activeFeature === feature.id
              const colors = getColorClasses(feature.color, isActive)

              return (
                <motion.div
                  key={feature.id}
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer transition-all",
                    "border-2 hover:border-opacity-100",
                    isActive ? colors.border : "border-transparent",
                  )}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setActiveFeature(feature.id)
                    setAutoplayEnabled(false)
                    setTimeout(() => setAutoplayEnabled(true), 10000)
                  }}
                >
                  <motion.div
                    className={cn(
                      "relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full mb-3",
                      colors.bg,
                      isActive ? "text-white" : colors.text,
                    )}
                    animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5, repeat: isActive ? Number.POSITIVE_INFINITY : 0, repeatDelay: 2 }}
                  >
                    {/* Glow effect */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full blur-xl opacity-70"
                        style={{
                          backgroundColor:
                            feature.color === "orange" ? "#f97316" : feature.color === "pink" ? "#ec4899" : "#eab308",
                        }}
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    )}

                    {/* Icon */}
                    <div className="relative z-10">{feature.icon}</div>
                  </motion.div>

                  <p className={cn("text-sm font-medium text-center", colors.text)}>{feature.title}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Feature details */}
          <div className="flex items-center justify-center">
            <div className="bg-black/50 backdrop-blur-md rounded-xl p-8 border border-gray-800 w-full h-[600px] overflow-y-auto flex items-center">
              <AnimatePresence mode="wait">
                {activeFeature ? (
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    {features.map((feature) => {
                      if (feature.id !== activeFeature) return null

                      const colors = getColorClasses(feature.color, true)

                      return (
                        <div key={feature.id} className="text-center md:text-left">
                          <div className="flex flex-col md:flex-row items-center mb-6">
                            <div
                              className={cn(
                                "flex items-center justify-center w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-4",
                                colors.bg,
                              )}
                            >
                              <div className="text-white">{feature.icon}</div>
                            </div>
                            <h3 className={cn("text-2xl font-bold", colors.text)}>{feature.title}</h3>
                          </div>
                          <p className="text-gray-300 text-lg mb-6">{feature.description}</p>

                          {/* Enhanced content */}
                          <div className="mt-6 space-y-6">
                            {/* Detailed information */}
                            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                              <h4 className="text-lg font-semibold mb-3">How It Works</h4>
                              <ul className="space-y-2">
                                {feature.detailedInfo.map((info, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <div
                                      className={cn(
                                        "h-5 w-5 rounded-full flex items-center justify-center mr-2 mt-0.5",
                                        colors.bg,
                                      )}
                                    >
                                      <span className="text-xs text-white font-bold">{idx + 1}</span>
                                    </div>
                                    <span className="text-gray-300">{info}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Benefits */}
                            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                              <h4 className="text-lg font-semibold mb-3">Benefits</h4>
                              <ul className="space-y-2">
                                {feature.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <CheckCircle className={cn("h-5 w-5 mr-2 mt-0.5", colors.text)} />
                                    <span className="text-gray-300">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Compatible with (if available) */}
                            {feature.compatibleWith && (
                              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                                <h4 className="text-lg font-semibold mb-3">Compatible With</h4>
                                <div className="flex flex-wrap gap-2">
                                  {feature.compatibleWith.map((item, idx) => (
                                    <span
                                      key={idx}
                                      className={cn("px-3 py-1 rounded-full text-sm", colors.text, "bg-gray-800")}
                                    >
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Call to action */}
                            {feature.callToAction && (
                              <motion.div
                                className={cn(
                                  "mt-6 p-4 rounded-lg text-center",
                                  `bg-${feature.color}-500/10`,
                                  `border border-${feature.color}-500/30`,
                                )}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <span className={cn("font-bold", colors.text)}>{feature.callToAction}</span>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-gray-400">
                    <p className="text-xl">Select a feature to learn more</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile view - additional cards for small screens */}
        <div className="md:hidden space-y-6 mt-8">
          {features.map((feature) => {
            const colors = getColorClasses(feature.color, false)
            const isActive = isActiveFeature(feature.id)

            return (
              <motion.div
                key={`mobile-${feature.id}`}
                className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-center mb-4">
                  <div className={cn("flex items-center justify-center w-12 h-12 rounded-full mr-4", colors.bg)}>
                    <div className={isActive ? "text-white" : colors.text}>{feature.icon}</div>
                  </div>
                  <h3 className={cn("text-xl font-semibold", colors.text)}>{feature.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{feature.description}</p>

                {/* Add a few key points for mobile */}
                <div className="mt-4 space-y-2">
                  {feature.detailedInfo.slice(0, 2).map((info, idx) => (
                    <div key={idx} className="flex items-start">
                      <div
                        className={cn("h-5 w-5 rounded-full flex items-center justify-center mr-2 mt-0.5", colors.bg)}
                      >
                        <span className="text-xs text-white font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{info}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )

  function isActiveFeature(id: string) {
    return activeFeature === id
  }
}
