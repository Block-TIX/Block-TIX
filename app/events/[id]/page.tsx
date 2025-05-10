"use client"

import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Ticket, Heart, Share2, ArrowLeft, Info } from "lucide-react"
import { CheckoutModal } from "@/components/checkout-modal"
import { useState, useEffect } from "react"

export default function EventDetailPage({ params }: { params: { id: string } }) {
  // Event data with our new events
  const events = [
    {
      id: "1",
      title: "SuperAI Conference",
      image: "/images/events/superai-event.jpeg",
      date: "June 5-6, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Marina Bay Sands Convention Center",
      address: "10 Bayfront Avenue, Singapore 018956",
      price: "1.2 SOL",
      category: "AI",
      description:
        "Join us for the premier AI event in Asia! SuperAI Conference brings together the brightest minds in artificial intelligence for two days of inspiring talks, workshops, and networking opportunities. Discover the latest advancements in AI technology and explore how it's transforming industries around the world.",
      lineup: [
        "Dr. Sarah Chen - OpenAI",
        "Mark Johnson - Google DeepMind",
        "Priya Patel - Microsoft AI",
        "David Kim - Tesla AI",
        "Olivia Martinez - Stanford AI Lab",
      ],
      organizer: "SuperAI Events",
      attendees: 1500,
      ticketTypes: [
        {
          name: "General Admission",
          price: "1.2 SOL",
          description: "Access to all general conference areas, talks, and exhibitions",
          available: true,
        },
        {
          name: "VIP Experience",
          price: "2.5 SOL",
          description: "Premium seating, exclusive networking events, and speaker meet & greets",
          available: true,
        },
        {
          name: "Workshop Pass",
          price: "0.8 SOL",
          description: "Add-on for hands-on AI workshops (requires General Admission or VIP ticket)",
          available: false,
        },
      ],
    },
    {
      id: "2",
      title: "MetaV Summit",
      image: "/images/events/metav-summit.jpeg",
      date: "January 10-11, 2024",
      time: "10:00 AM - 7:00 PM",
      location: "Dubai World Trade Centre",
      address: "Sheikh Zayed Road, Dubai, United Arab Emirates",
      price: "0.9 SOL",
      category: "Metaverse",
      description:
        "MetaV Summit is the ultimate gathering for metaverse enthusiasts, creators, and investors. Explore the intersection of crypto, metaverse, and AI technologies that are shaping our digital future. Experience immersive demos, connect with industry leaders, and discover new opportunities in the expanding metaverse ecosystem.",
      lineup: [
        "Emma Roberts - Meta",
        "James Wilson - Decentraland",
        "Sophia Lee - The Sandbox",
        "Michael Brown - Roblox",
        "Aisha Khan - NVIDIA Omniverse",
      ],
      organizer: "MetaV Global",
      attendees: 1200,
      ticketTypes: [
        {
          name: "Standard Access",
          price: "0.9 SOL",
          description: "Full access to conference talks, expo area, and networking events",
          available: true,
        },
        {
          name: "Premium Access",
          price: "1.8 SOL",
          description: "Standard access plus VIP lounge, priority seating, and exclusive workshops",
          available: true,
        },
        {
          name: "Virtual Access",
          price: "0.3 SOL",
          description: "Stream all talks and panels live from anywhere in the world",
          available: true,
        },
      ],
    },
    {
      id: "3",
      title: "WebX Visionary Night",
      image: "/images/events/webx-visionary.jpeg",
      date: "March 15, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Tokyo Tower Conference Hall",
      address: "4 Chome-2-8 Shibakoen, Minato City, Tokyo, Japan",
      price: "0.8 SOL",
      category: "Web3",
      description:
        "WebX Visionary Night is an exclusive evening event celebrating the future of Web3 technology. Set against the iconic Tokyo skyline, this gathering brings together visionaries, founders, and investors for an unforgettable night of inspiration and connection. Enjoy thought-provoking talks, immersive experiences, and high-level networking opportunities.",
      lineup: [
        "Satoshi Nakamura - Web3 Foundation",
        "Lisa Chen - Ethereum Foundation",
        "Robert Kim - Polkadot",
        "Yuki Tanaka - SoftBank Vision Fund",
        "Elena Rodriguez - Coinbase Ventures",
      ],
      organizer: "WebX Foundation",
      attendees: 500,
      ticketTypes: [
        {
          name: "Visionary Pass",
          price: "0.8 SOL",
          description: "Full event access including dinner, drinks, and all activities",
          available: true,
        },
        {
          name: "Founder's Circle",
          price: "2.0 SOL",
          description: "Exclusive access to private founder's reception and priority networking",
          available: true,
        },
        {
          name: "Corporate Table",
          price: "5.0 SOL",
          description: "Reserved table for 8 guests with premium positioning and service",
          available: false,
        },
      ],
    },
    {
      id: "4",
      title: "TOKEN2049 Singapore",
      image: "/images/events/token2049-singapore.jpeg",
      date: "September 18-19, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Marina Bay Sands",
      address: "10 Bayfront Avenue, Singapore 018956",
      price: "1.5 SOL",
      category: "Crypto",
      description:
        "TOKEN2049 Singapore is the premier crypto event in Asia, bringing together the global Web3 industry, uniting entrepreneurs, investors, developers, industry insiders, and global media. The event showcases the latest developments in blockchain technology and cryptocurrency markets with an impressive lineup of speakers from across the globe.",
      lineup: [
        "Vitalik Buterin - Ethereum",
        "Changpeng Zhao - Binance",
        "Michael Saylor - MicroStrategy",
        "Kathleen Breitman - Tezos",
        "Charles Hoskinson - Cardano",
      ],
      organizer: "TOKEN2049",
      attendees: 10000,
      ticketTypes: [
        {
          name: "General Admission",
          price: "1.5 SOL",
          description: "Access to all conference areas, talks, and exhibition hall",
          available: true,
        },
        {
          name: "VIP Pass",
          price: "3.0 SOL",
          description: "Premium access with VIP lounge, priority seating, and exclusive networking events",
          available: true,
        },
        {
          name: "Investor Pass",
          price: "5.0 SOL",
          description: "All VIP benefits plus access to private investor meetings and deal rooms",
          available: false,
        },
      ],
    },
    {
      id: "5",
      title: "TOKEN2049 Panel Discussion",
      image: "/images/events/token2049-panel.jpeg",
      date: "September 19, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Marina Bay Sands, Main Stage",
      address: "10 Bayfront Avenue, Singapore 018956",
      price: "0.6 SOL",
      category: "Crypto",
      description:
        "Join this special panel discussion at TOKEN2049 Singapore featuring leading experts discussing 'Global Macro Uncertainty: The Crypto Narrative'. This session will explore how cryptocurrency markets are responding to global economic challenges and the evolving narrative around digital assets as a hedge against traditional market volatility.",
      lineup: [
        "Will Peets - 100 Acre Ventures",
        "Zaheer Ebtikar - LedgerPrime",
        "Darius Sit - QCP Capital",
        "Jordi Alexander - Selini Capital",
      ],
      organizer: "TOKEN2049",
      attendees: 1000,
      ticketTypes: [
        {
          name: "Panel Access",
          price: "0.6 SOL",
          description: "Access to this specific panel discussion only",
          available: true,
        },
        {
          name: "Panel + Networking",
          price: "0.9 SOL",
          description: "Panel access plus post-discussion networking reception with speakers",
          available: true,
        },
        {
          name: "Digital Access",
          price: "0.2 SOL",
          description: "Virtual streaming access to the panel discussion",
          available: true,
        },
      ],
    },
    {
      id: "6",
      title: "Finance Summit",
      image: "/placeholder.svg?key=z49g7",
      date: "August 15, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Financial District Conference Center",
      address: "123 Finance St, Chicago, IL 60601",
      price: "1.5 SOL",
      category: "Conference",
      description:
        "The Finance Summit brings together leaders in traditional finance and blockchain technology to explore the future of financial services. Discuss trends in DeFi, regulatory challenges, institutional adoption, and more.",
      lineup: [
        "Janet Rivera - JP Morgan",
        "Robert Chen - BlackRock",
        "Sarah Johnson - Federal Reserve",
        "Michael Lee - Coinbase",
        "David Wilson - Goldman Sachs",
      ],
      organizer: "Global Finance Institute",
      attendees: 800,
      ticketTypes: [
        {
          name: "Standard Admission",
          price: "1.5 SOL",
          description: "Access to all summit sessions and networking events",
          available: true,
        },
        {
          name: "Executive Pass",
          price: "3.0 SOL",
          description: "Premium access with executive lounge and private meeting opportunities",
          available: true,
        },
        {
          name: "Academic Pass",
          price: "0.8 SOL",
          description: "Discounted rate for professors and researchers",
          available: true,
        },
      ],
    },
  ]

  // Find the event based on the ID
  const event = events.find((e) => e.id === params.id) || events[0]

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<any>(null)

  // Override the Buy Ticket button click
  useEffect(() => {
    const buyButtons = document.querySelectorAll("button:not([disabled])")
    buyButtons.forEach((button) => {
      if (button.textContent?.includes("Buy Ticket")) {
        const originalClick = button.onclick
        button.onclick = (e) => {
          e.preventDefault()
          // Get ticket info from the closest parent div
          const ticketDiv = button.closest("div")
          if (ticketDiv) {
            const name = ticketDiv.querySelector("h3")?.textContent || "General Admission"
            const price = ticketDiv.querySelector("span")?.textContent || "1.0 SOL"
            const eventName = document.querySelector("h1")?.textContent || "Event"
            const eventDate = document.querySelector(".flex .items-center:nth-child(1) span")?.textContent || "Upcoming"
            const eventLocation =
              document.querySelector(".flex .items-center:nth-child(3) span")?.textContent || "Venue"

            setSelectedTicket({
              name,
              price,
              eventName,
              eventDate,
              eventLocation,
            })
            setIsCheckoutOpen(true)
          }
          // Call original click handler if it exists
          if (originalClick) originalClick.call(button, e)
        }
      }
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="group">
              <Link href="/events" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Events
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-pink-500">{event.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                {event.title}
              </h1>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-background/40 backdrop-blur-sm rounded-full px-4 py-2">
                  <Calendar className="h-5 w-5 text-orange-500 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center bg-background/40 backdrop-blur-sm rounded-full px-4 py-2">
                  <Clock className="h-5 w-5 text-pink-500 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center bg-background/40 backdrop-blur-sm rounded-full px-4 py-2">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-orange-500/30 hover:border-orange-500/60"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-orange-500/30 hover:border-orange-500/60"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">{event.description}</p>

              <Tabs defaultValue="details" className="w-full">
                <TabsList className="rounded-full bg-muted/50 backdrop-blur-sm">
                  <TabsTrigger
                    value="details"
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                  >
                    Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="lineup"
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                  >
                    Lineup
                  </TabsTrigger>
                  <TabsTrigger
                    value="location"
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                  >
                    Location
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="mt-6">
                  <Card className="bg-background/60 backdrop-blur-sm border-orange-500/20 rounded-xl">
                    <CardHeader>
                      <CardTitle>Event Details</CardTitle>
                      <CardDescription>Everything you need to know about this event</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium">Organizer</h3>
                          <p>{event.organizer}</p>
                        </div>
                        <div>
                          <h3 className="font-medium">Date & Time</h3>
                          <p>
                            {event.date}, {event.time}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Location</h3>
                          <p>{event.location}</p>
                          <p className="text-muted-foreground">{event.address}</p>
                        </div>
                        <div>
                          <h3 className="font-medium">What to Bring</h3>
                          <ul className="list-disc list-inside text-muted-foreground">
                            <li>Valid ID matching your ticket name</li>
                            <li>Comfortable shoes</li>
                            <li>Business cards for networking</li>
                            <li>Fully charged devices</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="lineup" className="mt-6">
                  <Card className="bg-background/60 backdrop-blur-sm border-orange-500/20 rounded-xl">
                    <CardHeader>
                      <CardTitle>Event Lineup</CardTitle>
                      <CardDescription>Speakers and presenters at this event</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {event.lineup.map((speaker, index) => (
                          <div key={index} className="flex items-center p-3 rounded-lg bg-background/40">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold mr-3">
                              {speaker.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-medium">{speaker}</h3>
                              <p className="text-sm text-muted-foreground">Featured Speaker</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="location" className="mt-6">
                  <Card className="bg-background/60 backdrop-blur-sm border-orange-500/20 rounded-xl">
                    <CardHeader>
                      <CardTitle>Event Location</CardTitle>
                      <CardDescription>How to get to the venue</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="relative h-[300px] rounded-lg overflow-hidden">
                          <Image
                            src="/placeholder.svg?key=nczt4"
                            alt="Event location map"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">Address</h3>
                          <p>{event.location}</p>
                          <p className="text-muted-foreground">{event.address}</p>
                        </div>
                        <div>
                          <h3 className="font-medium">Getting There</h3>
                          <ul className="list-disc list-inside text-muted-foreground">
                            <li>Parking available at the venue</li>
                            <li>Public transportation: Check local transit options</li>
                            <li>Rideshare drop-off at the main entrance</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="bg-background/60 backdrop-blur-sm border-orange-500/20 sticky top-24 rounded-xl">
                <CardHeader>
                  <CardTitle>Get Your Tickets</CardTitle>
                  <CardDescription>Secure your spot at this amazing event!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {event.ticketTypes.map((ticket, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{ticket.name}</h3>
                        <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                          {ticket.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{ticket.description}</p>
                      <Button
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full"
                        disabled={!ticket.available}
                      >
                        {ticket.available ? "Buy Ticket" : "Sold Out"}
                      </Button>
                    </div>
                  ))}

                  <div className="flex items-start mt-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <Info className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-yellow-500">Ticket Information</p>
                      <p className="text-muted-foreground">
                        All tickets are digital NFTs that will be delivered to your connected wallet. Each ticket
                        includes a unique collectible that you'll keep after the event!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Events Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
            You Might Also Like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events
              .filter((e) => e.id !== params.id)
              .slice(0, 3)
              .map((similarEvent) => (
                <Card
                  key={similarEvent.id}
                  className="overflow-hidden bg-background/60 backdrop-blur-sm hover:shadow-lg transition-all h-full flex flex-col rounded-xl border-orange-500/20 hover:border-orange-500/40"
                >
                  <div className="relative h-40">
                    <Image
                      src={similarEvent.image || "/placeholder.svg"}
                      alt={similarEvent.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-pink-500">
                      {similarEvent.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{similarEvent.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                        <span>{similarEvent.date}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                        <span>{similarEvent.location}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between mt-auto">
                    <div className="flex items-center">
                      <Ticket className="h-4 w-4 mr-2 text-orange-500" />
                      <span className="font-semibold">{similarEvent.price}</span>
                    </div>
                    <Button
                      asChild
                      size="sm"
                      className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full"
                    >
                      <Link href={`/events/${similarEvent.id}`}>View Event</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </section>
      {/* Checkout Modal */}
      {selectedTicket && (
        <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} ticket={selectedTicket} />
      )}
    </div>
  )
}
