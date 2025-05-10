"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Ticket, Heart } from "lucide-react"

interface EventCardProps {
  event: {
    title: string
    image: string
    date: string
    location: string
    price: string
    category: string
  }
  friendly?: boolean
}

export function EventCard3D({ event, friendly = false }: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null)

  // Motion values for the 3D tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth the motion values
  const springConfig = { damping: 20, stiffness: 300 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  // Transform the motion values to rotation values
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-10, 10])

  // Handle mouse move on the card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // Calculate the position of the mouse relative to the card
    const xValue = (e.clientX - rect.left) / width - 0.5
    const yValue = (e.clientY - rect.top) / height - 0.5

    // Update the motion values
    x.set(xValue)
    y.set(yValue)
  }

  // Reset the motion values when the mouse leaves the card
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const primaryColor = friendly ? "orange" : "purple"
  const secondaryColor = friendly ? "pink" : "blue"

  return (
    <motion.div
      ref={cardRef}
      className="relative h-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={`relative overflow-hidden rounded-xl border border-${primaryColor}-500/20 hover:border-${primaryColor}-500/40 bg-background/60 backdrop-blur-sm transition-all duration-300 h-full flex flex-col`}
      >
        <div className="relative h-48">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background to-transparent"
            style={{
              opacity: useTransform(ySpring, [-0.5, 0.5], [0.4, 0.7]),
            }}
          />
          <Badge
            className={`absolute top-2 right-2 bg-${primaryColor}-500/80 hover:bg-${primaryColor}-500 backdrop-blur-sm`}
            style={{
              transform: "translateZ(20px)",
            }}
          >
            {event.category}
          </Badge>

          <motion.button
            className="absolute top-2 left-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center"
            style={{ transform: "translateZ(20px)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              className={`h-4 w-4 ${isLiked ? `text-${secondaryColor}-500 fill-${secondaryColor}-500` : "text-muted-foreground"}`}
            />
          </motion.button>
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3
            className={`text-xl font-semibold mb-2 group-hover:text-${primaryColor}-500 transition-colors duration-300`}
            style={{ transform: "translateZ(30px)" }}
          >
            {event.title}
          </h3>

          <div className="space-y-2 mb-4 flex-1">
            <div className="flex items-center" style={{ transform: "translateZ(20px)" }}>
              <Calendar className={`h-4 w-4 mr-2 text-${primaryColor}-500`} />
              <span className="text-sm text-muted-foreground">{event.date}</span>
            </div>
            <div className="flex items-center" style={{ transform: "translateZ(20px)" }}>
              <MapPin className={`h-4 w-4 mr-2 text-${primaryColor}-500`} />
              <span className="text-sm text-muted-foreground">{event.location}</span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-auto">
            <div className="flex items-center" style={{ transform: "translateZ(25px)" }}>
              <Ticket className={`h-4 w-4 mr-2 text-${primaryColor}-500`} />
              <span className="font-semibold">{event.price}</span>
            </div>

            <motion.div
              style={{ transform: "translateZ(40px)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="sm"
                className={`bg-gradient-to-r from-${primaryColor}-500 to-${secondaryColor}-500 hover:from-${primaryColor}-600 hover:to-${secondaryColor}-600 shadow-sm shadow-${primaryColor}-500/20 hover:shadow-${primaryColor}-500/40 transition-all duration-300 rounded-full`}
              >
                <Link href={`/events/${event.title.toLowerCase().replace(/\s+/g, "-")}`}>Get Tickets</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
          style={
            {
              background: `radial-gradient(circle at var(--x) var(--y), ${friendly ? "rgba(249, 115, 22, 0.3)" : "rgba(147, 51, 234, 0.3)"} 0%, transparent 60%)`,
              opacity: isHovered ? 0.6 : 0,
              "--x": useTransform(x, [-0.5, 0.5], ["0%", "100%"]),
              "--y": useTransform(y, [-0.5, 0.5], ["0%", "100%"]),
            } as any
          }
        />
      </div>
    </motion.div>
  )
}
