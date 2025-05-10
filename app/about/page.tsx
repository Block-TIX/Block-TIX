import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { YouTubeBackground } from "@/components/youtube-background"
import { ParticleBackground } from "@/components/particle-background"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Video Background */}
          <YouTubeBackground
            videoId="n04NCJ9jZS8"
            fallbackImageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%203.36.19%E2%80%AFPM-tg8wEGvYBpEevzIw2QOFpqYjH499zv.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/70 to-background" />
          <ParticleBackground friendly={true} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-4 border-orange-500 text-orange-500">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
              Revolutionizing the Ticketing Industry
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              We're a team of blockchain enthusiasts, event industry veterans, and tech innovators on a mission to
              transform how tickets are bought, sold, and experienced.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                BlockTix was founded with a clear mission: to create a more fair, transparent, and engaging ticketing
                ecosystem for everyone involved in live events.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Eliminate Fraud",
                    description: "Create a ticketing system where counterfeiting and scams are impossible.",
                  },
                  {
                    title: "Fair Revenue Distribution",
                    description: "Ensure artists and organizers benefit from secondary market sales.",
                  },
                  {
                    title: "Enhanced Fan Experience",
                    description: "Transform tickets into digital collectibles that increase fan engagement.",
                  },
                  {
                    title: "Democratize Access",
                    description: "Make event ticketing more accessible and equitable for all fans.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?key=gb7bg" alt="Our Mission" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From idea to blockchain ticketing revolution.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                year: "2021",
                title: "The Idea",
                description:
                  "BlockTix was conceived after our founders experienced firsthand the problems with traditional ticketing at major events.",
              },
              {
                year: "2022",
                title: "Research & Development",
                description:
                  "Our team spent a year researching blockchain technologies and developing the core smart contracts for our platform.",
              },
              {
                year: "2023",
                title: "Beta Launch",
                description:
                  "We launched our beta with select partner venues and artists, processing our first blockchain tickets for real events.",
              },
              {
                year: "2024",
                title: "Solana Integration",
                description:
                  "We migrated to the Solana blockchain for faster transactions and lower fees, dramatically improving the user experience.",
              },
              {
                year: "2025",
                title: "Global Expansion",
                description:
                  "BlockTix is now expanding globally, partnering with major venues and event organizers around the world.",
              },
            ].map((item, index, array) => (
              <div key={index} className="relative pl-8 pb-8">
                {index !== array.length - 1 && (
                  <div className="absolute top-0 left-3 h-full w-px bg-gradient-to-b from-purple-500 to-blue-500" />
                )}
                <div className="absolute top-0 left-0 h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                <div className="mb-2">
                  <span className="text-sm font-semibold text-purple-500">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible in ticketing technology.",
              },
              {
                title: "Transparency",
                description: "We believe in open, honest operations and clear communication with all stakeholders.",
              },
              {
                title: "Security",
                description: "Protecting our users' assets and data is our highest priority.",
              },
              {
                title: "Fairness",
                description: "We're committed to creating a more equitable ticketing ecosystem for fans and artists.",
              },
              {
                title: "Community",
                description: "We value and actively engage with our community of users, partners, and stakeholders.",
              },
              {
                title: "Sustainability",
                description: "We're building for the long-term with environmentally conscious blockchain solutions.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-background/60 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're an event organizer, artist, or fan, be part of the ticketing revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
