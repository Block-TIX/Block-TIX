"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, User, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Solutions",
    href: "#",
    dropdown: true,
    items: [
      { name: "Ticketing", href: "/solutions/ticketing" },
      { name: "NFT Collectibles", href: "/solutions/nft-collectibles" },
      { name: "NFT Utilities", href: "/solutions/nft-utilities" },
    ],
  },
  { name: "Events", href: "/events" },
  { name: "Technology", href: "/technology" },
  { name: "About", href: "/about" },
  { name: "Whitepaper", href: "/whitepaper" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(name)
    }
  }

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    router.push(href)
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-purple-500/10"
          : "bg-transparent border-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <div className="relative h-10 w-10 overflow-hidden">
                <Image src="/logo.png" alt="BlockTix Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                BlockTix
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
              >
                {link.dropdown ? (
                  <div className="relative group">
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                        pathname.startsWith(`/${link.name.toLowerCase()}`) ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary relative group",
                      pathname === link.href ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-4"
          >
            <ThemeToggle />
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-purple-500/10 transition-all duration-300"
            >
              <Link href="/dashboard" aria-label="Profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              asChild
              variant="default"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
            >
              <Link href="/connect">Connect Wallet</Link>
            </Button>
          </motion.div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-b border-purple-500/10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={cn(
                        "flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium",
                        openDropdown === link.name ? "bg-primary/10 text-primary" : "text-muted-foreground",
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", openDropdown === link.name ? "rotate-180" : "")}
                      />
                    </button>
                    {openDropdown === link.name && (
                      <div className="pl-4 space-y-1 mt-1">
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
            >
              <Button
                asChild
                variant="ghost"
                className="w-full mt-4 flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/dashboard">
                  <User className="h-5 w-5 mr-2" />
                  Profile
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
            >
              <Button
                asChild
                variant="outline"
                className="w-full mt-4 border-purple-500/50 hover:bg-purple-500/10"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/login">Login</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 + 0.1 }}
            >
              <Button
                asChild
                variant="default"
                className="w-full mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/connect">Connect Wallet</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
