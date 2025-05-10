"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon" className="relative w-8 h-8">
        <Image src="/eagle-icon.webp" alt="Eagle Icon" width={24} height={24} className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="relative w-8 h-8">
        <Image src="/x-icon.png" alt="X Icon" width={24} height={24} className="w-5 h-5 invert dark:invert-0" />
      </Button>
    </div>
  )
}
