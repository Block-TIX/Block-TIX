import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "NFT Collectibles | BlockTix",
  description:
    "Discover how BlockTix's NFT collectibles enhance event experiences with unique digital memorabilia that lives forever on the blockchain.",
}

export default function NFTCollectiblesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-background to-background/80">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                  NFT Collectibles
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
                  Transform event experiences with unique digital collectibles that live forever on the blockchain,
                  creating lasting memories and new revenue streams.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/dashboard/nft-collection">View Collection</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/nft-collectibles-hero.png"
                  alt="NFT Collectibles Types"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NFT Types Showcase */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-background to-background/90">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Types of NFT Collectibles</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore the various types of digital collectibles that can enhance your event experience
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col items-center p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-48 h-48 mb-6">
                  <Image src="/images/nft-collectibles/music-nft.png" alt="Music NFT" fill className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Music NFTs</h3>
                <p className="text-center text-muted-foreground">
                  Exclusive audio tracks, remixes, or live recordings from events that fans can own and treasure.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col items-center p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-48 h-48 mb-6">
                  <Image
                    src="/images/nft-collectibles/proof-of-attendance-nft.png"
                    alt="Proof of Attendance NFT"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Proof of Attendance</h3>
                <p className="text-center text-muted-foreground">
                  Digital badges that verify attendance at exclusive events, creating a permanent record on the
                  blockchain.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col items-center p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-48 h-48 mb-6">
                  <Image
                    src="/images/nft-collectibles/photo-collectible.png"
                    alt="Photo Collectible"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Photo Collectibles</h3>
                <p className="text-center text-muted-foreground">
                  Unique event photographs captured at special moments, transformed into limited edition digital
                  collectibles.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col items-center p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-48 h-48 mb-6">
                  <Image
                    src="/images/nft-collectibles/fan-generated-content-nft.png"
                    alt="Fan Generated Content NFT"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Fan Generated Content</h3>
                <p className="text-center text-muted-foreground">
                  Content created by fans during events that can be minted as NFTs, creating a community-driven
                  collection.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-col items-center p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-48 h-48 mb-6">
                  <Image src="/images/nft-collectibles/video-nft.png" alt="Video NFT" fill className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Video NFTs</h3>
                <p className="text-center text-muted-foreground">
                  Highlight clips, special moments, or behind-the-scenes footage from events preserved as digital
                  collectibles.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">NFT Collectibles</h2>
                <p className="text-muted-foreground">
                  NFT Collectibles are unique digital assets that represent ownership of a specific item or piece of
                  content. In the context of events, NFT collectibles can be digital memorabilia, exclusive content, or
                  special access tokens that attendees can own, trade, or showcase.
                </p>
                <p className="text-muted-foreground">
                  Unlike traditional physical collectibles, NFT collectibles exist on the blockchain, ensuring their
                  authenticity, scarcity, and provenance. This creates a new dimension of value and engagement for event
                  attendees and organizers alike.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>Unique Digital Memorabilia:</strong> Create lasting memories of events with digital
                      collectibles that can't be replicated or forged.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>New Revenue Streams:</strong> Generate additional income through the initial sale of NFT
                      collectibles and ongoing royalties from secondary market transactions.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>Enhanced Fan Engagement:</strong> Deepen connections with attendees by offering exclusive
                      digital collectibles that represent their participation and support.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>Community Building:</strong> Foster a sense of community among collectors who share an
                      interest in your event or brand.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>Long-term Value:</strong> Unlike physical merchandise that can deteriorate, NFT
                      collectibles maintain their condition and can appreciate in value over time.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter">Types of NFT Collectibles</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Event Memorabilia:</strong> Digital versions of traditional event memorabilia like
                      posters, tickets, or programs, enhanced with unique digital features.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Exclusive Content:</strong> Behind-the-scenes footage, interviews, or special performances
                      available only to NFT holders.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Digital Artwork:</strong> Unique digital art pieces created specifically for the event or
                      by artists associated with the event.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Collectible Series:</strong> Sets of related NFTs that attendees can collect, encouraging
                      repeat engagement and creating a collector's market.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Interactive NFTs:</strong> Digital collectibles with interactive elements or that evolve
                      based on certain conditions or actions.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter">Use Cases</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-purple-500/10 text-purple-500">•</div>
                    <div>
                      <strong>Music Concerts:</strong> Artists can offer exclusive NFT collectibles to fans who attend
                      their concerts, creating a new form of memorabilia and revenue stream.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-purple-500/10 text-purple-500">•</div>
                    <div>
                      <strong>Sports Events:</strong> Teams and leagues can create limited edition NFTs commemorating
                      special games, championships, or player achievements.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-purple-500/10 text-purple-500">•</div>
                    <div>
                      <strong>Conferences:</strong> Speakers and organizers can offer NFT certificates of attendance or
                      exclusive content to attendees.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-purple-500/10 text-purple-500">•</div>
                    <div>
                      <strong>Festivals:</strong> Create collectible series representing different aspects of the
                      festival experience, encouraging attendees to collect them all.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-purple-500/10 text-purple-500">•</div>
                    <div>
                      <strong>Brand Activations:</strong> Companies can use NFT collectibles as part of their marketing
                      strategy at events, creating lasting connections with consumers.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter">The Future of NFT Collectibles</h3>
                <p className="text-muted-foreground">
                  As blockchain technology and NFTs continue to evolve, we can expect to see more innovative and
                  interactive NFT collectibles that blur the line between digital and physical experiences. The
                  integration of augmented reality, virtual reality, and other emerging technologies will create new
                  possibilities for how attendees interact with and derive value from their NFT collectibles.
                </p>
                <p className="text-muted-foreground">
                  The growing acceptance and understanding of NFTs among mainstream audiences will also drive adoption,
                  making NFT collectibles a standard feature of events across industries.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Create Memorable NFT Collectibles
            </h2>
            <p className="text-muted-foreground text-lg max-w-[600px]">
              Transform your event experience with unique digital collectibles that create lasting memories and new
              revenue opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/dashboard/nft-collection">View Examples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
