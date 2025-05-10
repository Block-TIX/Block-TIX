import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-purple-500/10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image src="/logo.png" alt="BlockTix Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                BlockTix
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Revolutionizing event ticketing with blockchain technology. Secure, transparent, and fan-focused.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-purple-500/10 hover:text-purple-500 transition-colors duration-300"
                asChild
              >
                <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-purple-500/10 hover:text-purple-500 transition-colors duration-300"
                asChild
              >
                <Link href="https://github.com" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-purple-500/10 hover:text-purple-500 transition-colors duration-300"
                asChild
              >
                <Link href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-purple-500/10 hover:text-purple-500 transition-colors duration-300"
                asChild
              >
                <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Platform
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/events"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Subscribe
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">Stay updated with the latest events and features.</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background/60 border-purple-500/20 focus:border-purple-500/50"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-purple-500/10 pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} BlockTix. All rights reserved. Powered by Solana.
          </p>
        </div>
      </div>
    </footer>
  )
}
