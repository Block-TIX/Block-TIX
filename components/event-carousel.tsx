"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface EventCarouselProps {
  className?: string
}

export function EventCarousel({ className }: EventCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const events = [
    {
      image: "/images/events/superai-event.jpeg",
      alt: "SuperAI Event - 5-6 June 2024, Marina Bay Sands, Singapore",
      slug: "superai-event",
    },
    {
      image: "/images/events/metav-summit.jpeg",
      alt: "MetaV Summit - Dubai, Jan 10-11 2024",
      slug: "metav-summit",
    },
    {
      image: "/images/events/webx-visionary.jpeg",
      alt: "WebX 2025 - Visionary Night",
      slug: "webx-visionary",
    },
    {
      image: "/images/events/token2049-singapore.jpeg",
      alt: "TOKEN2049 Singapore - 18-19 September 2024, Marina Bay Sands",
      slug: "token2049-singapore",
    },
    {
      image: "/images/events/token2049-panel.jpeg",
      alt: "TOKEN2049 Singapore Panel Discussion",
      slug: "token2049-panel",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [events.length, isAutoPlaying])

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-xl ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={events[currentIndex].image || "/placeholder.svg"}
            alt={events[currentIndex].alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-background/10"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/40 backdrop-blur-sm p-2 rounded-full z-10 hover:bg-background/60 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/40 backdrop-blur-sm p-2 rounded-full z-10 hover:bg-background/60 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
              setTimeout(() => setIsAutoPlaying(true), 5000)
            }}
            className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "bg-white w-4" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* View Event button */}
      <div className="absolute bottom-8 right-8 z-20">
        <Link href={`/events/${events[currentIndex].slug}`} key={`event-link-${currentIndex}`}>
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 rounded-full">
            View Event <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
