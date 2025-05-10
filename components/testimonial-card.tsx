"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, ThumbsUp } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  testimonial: {
    quote: string
    name: string
    title: string
    image: string
    rating: number
  }
  friendly?: boolean
}

export function TestimonialCard({ testimonial, friendly = false }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const primaryColor = friendly ? "orange" : "purple"
  const secondaryColor = friendly ? "pink" : "blue"

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        className={`bg-background/60 backdrop-blur-sm border-${primaryColor}-500/10 hover:border-${primaryColor}-500/30 transition-all duration-300 h-full overflow-hidden rounded-xl`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br from-${primaryColor}-500/5 via-${secondaryColor}-500/5 to-yellow-500/5 opacity-0 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : ""
          }`}
        />
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className={`relative h-12 w-12 rounded-full overflow-hidden border-2 border-${primaryColor}-500/50`}>
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              <div className="flex mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-400"} mr-0.5`}
                  />
                ))}
              </div>
            </div>
            <motion.button
              className="ml-auto h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsLiked(!isLiked)}
            >
              <ThumbsUp
                className={`h-4 w-4 ${isLiked ? `text-${secondaryColor}-500 fill-${secondaryColor}-500` : "text-muted-foreground"}`}
              />
            </motion.button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className={`absolute -top-2 -left-2 text-4xl text-${primaryColor}-500/20`}>"</div>
            <p className="italic relative z-10 pt-2">{testimonial.quote}</p>
            <div className={`absolute -bottom-4 -right-2 text-4xl text-${primaryColor}-500/20`}>"</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
