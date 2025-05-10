"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface GlowingCardProps {
  children: React.ReactNode
  className?: string
  color?: "orange" | "pink" | "yellow" | "purple" | "blue"
}

export function GlowingCard({ children, className, color = "orange" }: GlowingCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setOpacity(0.15)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  const colorMap = {
    orange: "before:bg-orange-500",
    pink: "before:bg-pink-500",
    yellow: "before:bg-yellow-500",
    purple: "before:bg-purple-500",
    blue: "before:bg-blue-500",
  }

  return (
    <Card
      className={cn(
        "relative overflow-hidden bg-background/60 backdrop-blur-sm border-orange-500/10 hover:border-orange-500/30 transition-all duration-300 rounded-xl",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "absolute inset-0 before:absolute before:w-40 before:h-40 before:rounded-full before:opacity-0 before:blur-3xl before:-translate-x-1/2 before:-translate-y-1/2 transition-opacity duration-300",
          colorMap[color],
        )}
        style={
          {
            "--x": `${position.x}px`,
            "--y": `${position.y}px`,
            "--opacity": opacity,
          } as React.CSSProperties
        }
      />
      {children}
    </Card>
  )
}
