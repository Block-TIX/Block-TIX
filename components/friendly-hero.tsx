"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Ticket, Users } from "lucide-react"
import { EventCarousel } from "./event-carousel"

export function FriendlyHero() {
  const [currentImage, setCurrentImage] = useState(0)
  const controls = useAnimation()

  const images = ["/placeholder.svg?key=jpzu5", "/placeholder.svg?key=0ed8o", "/placeholder.svg?key=qy7ci"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  useEffect(() => {
    controls.start({
      opacity: [0, 1, 1, 0],
      transition: { duration: 5, times: [0, 0.1, 0.9, 1] },
    })
  }, [currentImage, controls])

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center lg:text-left"
      >
        <Badge variant="outline" className="mb-4 border-orange-500 text-orange-500 bg-orange-500/5 backdrop-blur-sm">
          Demo Version of BlockTIX
        </Badge>
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 leading-tight">
          Create Memories, Collect Experiences
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8 lg:pr-8">
          BlockTix makes buying tickets simple, secure, and social. Attend events, collect digital memories, and connect
          with your favorite blockchain communities!
        </p>

        {/* Mobile App Coming Soon Banner - Updated for better mobile display */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mb-8 bg-background/30 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20"
        >
          <div className="text-sm font-medium mb-2 sm:mb-0 sm:mr-4">Mobile App coming soon:</div>
          <div className="flex gap-3">
            <Image
              src="/images/apple-app-store-badge.png"
              alt="Download on the App Store"
              width={135}
              height={40}
              className="h-8 sm:h-10 w-auto"
            />
            <Image
              src="/images/google-play-badge.png"
              alt="Get it on Google Play"
              width={135}
              height={40}
              className="h-8 sm:h-10 w-auto"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 justify-center lg:justify-start mb-8 w-full max-w-2xl mx-auto lg:mx-0">
          <div className="flex items-center bg-background/40 backdrop-blur-sm rounded-full px-4 py-2">
            <Ticket className="h-5 w-5 sm:h-5 sm:w-5 md:h-5 md:w-5 text-orange-500 mr-2 feature-icon" />
            <span>NFT Ticketing</span>
          </div>
          <div className="flex items-center bg-background/40 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="h-5 w-5 sm:h-5 sm:w-5 md:h-5 md:w-5 relative mr-2 feature-icon">
              <Image
                src="/solana-logo-gradient.png"
                alt="Solana Logo"
                width={20}
                height={20}
                className="object-contain w-full h-full"
              />
            </div>
            <span>Solana Powered</span>
          </div>
          <div className="flex items-center bg-background/40 backdrop-blur-sm rounded-full px-4 py-2">
            <Users className="h-5 w-5 sm:h-5 sm:w-5 md:h-5 md:w-5 text-yellow-500 mr-2 feature-icon" />
            <span>Instant Transfers</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 hover:from-orange-600 hover:via-pink-600 hover:to-yellow-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 rounded-full"
          >
            <Link href="/events">Find Your Next Event</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-orange-500/30 hover:border-orange-500/60 backdrop-blur-sm rounded-full"
          >
            <Link href="/how-it-works">See How It Works</Link>
          </Button>
          <div className="mt-4 sm:mt-0 w-full sm:w-auto flex justify-center">
            <Image
              src="/images/solana-breakpoint-logo.png"
              alt="Solana Breakpoint"
              width={180}
              height={80}
              className="object-contain max-h-12 sm:max-h-none"
            />
          </div>
        </div>

        {/* Stars and testimonial section removed */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 relative w-full h-[300px] sm:h-[350px] lg:h-[500px] rounded-3xl overflow-hidden block"
      >
        <div className="absolute inset-0 rounded-3xl overflow-hidden border-4 border-background/40 shadow-xl">
          <EventCarousel />
        </div>
      </motion.div>
    </div>
  )
}
