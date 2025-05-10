import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Search, Filter, Ticket, Heart } from "lucide-react"
import { YouTubeBackground } from "@/components/youtube-background"

export default function EventsPage() {
  // Updated event data with our new events
  const events = [
    {
      id: 1,
      title: "SuperAI Conference",
      image: "/images/events/superai-event.jpeg",
      date: "June 5-6, 2024",
      time: "9:00 AM",
      location: "Marina Bay Sands",
      city: "Singapore",
      price: "1.2 SOL",
      category: "AI",
      featured: true,
    },
    {
      id: 2,
      title: "MetaV Summit",
      image: "/images/events/metav-summit.jpeg",
      date: "January 10-11, 2024",
      time: "10:00 AM",
      location: "Dubai World Trade Centre",
      city: "Dubai, UAE",
      price: "0.9 SOL",
      category: "Metaverse",
      featured: true,
    },
    {
      id: 3,
      title: "WebX Visionary Night",
      image: "/images/events/webx-visionary.jpeg",
      date: "March 15, 2025",
      time: "7:00 PM",
      location: "Tokyo Tower",
      city: "Tokyo, Japan",
      price: "0.8 SOL",
      category: "Web3",
      featured: true,
    },
    {
      id: 4,
      title: "TOKEN2049 Singapore",
      image: "/images/events/token2049-singapore.jpeg",
      date: "September 18-19, 2024",
      time: "9:00 AM",
      location: "Marina Bay Sands",
      city: "Singapore",
      price: "1.5 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 5,
      title: "TOKEN2049 Panel Discussion",
      image: "/images/events/token2049-panel.jpeg",
      date: "September 19, 2024",
      time: "2:00 PM",
      location: "Marina Bay Sands",
      city: "Singapore",
      price: "0.6 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 6,
      title: "Finance Summit",
      image: "/placeholder.svg?key=z49g7",
      date: "August 15, 2023",
      time: "9:00 AM",
      location: "Financial District Conference Center",
      city: "Chicago, IL",
      price: "1.5 SOL",
      category: "Conference",
      featured: false,
    },
    // New crypto events
    {
      id: 7,
      title: "Bitcoin PP Austin",
      image: "/images/events/bitcoin-pp-austin.webp",
      date: "May 7-9, 2025",
      time: "9:00 AM",
      location: "Convention Center",
      city: "Austin, USA",
      price: "1.0 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 8,
      title: "ETHDam",
      image: "/images/events/ethdam-2025.jpeg",
      date: "May 9-11, 2025",
      time: "9:00 AM",
      location: "Conference Center",
      city: "Amsterdam, Netherlands",
      price: "1.0 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 9,
      title: "ETHWomen",
      image: "/images/events/ethwomen.jpeg",
      date: "May 13, 2025",
      time: "9:00 AM",
      location: "Metro Convention Center",
      city: "Toronto, Canada",
      price: "0.8 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 10,
      title: "Consensus 2025",
      image: "/images/events/consensus-2025.jpeg",
      date: "May 14-16, 2025",
      time: "9:00 AM",
      location: "Metro Convention Center",
      city: "Toronto, Canada",
      price: "1.2 SOL",
      category: "Crypto",
      featured: true,
    },
    {
      id: 11,
      title: "CME XRP Futures Launch",
      image: "/placeholder.svg?key=k87eg",
      date: "May 19, 2025",
      time: "9:00 AM",
      location: "Chicago Mercantile Exchange",
      city: "Chicago, USA",
      price: "0.7 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 12,
      title: "Digital Assets Week",
      image: "/images/events/digital-assets-week.jpeg",
      date: "May 20-21, 2025",
      time: "9:00 AM",
      location: "Javits Center",
      city: "New York, USA",
      price: "1.1 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 13,
      title: "Crypto Expo Dubai",
      image: "/images/events/crypto-expo-dubai.webp",
      date: "May 21-22, 2025",
      time: "10:00 AM",
      location: "Dubai World Trade Centre",
      city: "Dubai, UAE",
      price: "1.0 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 14,
      title: "ETHDublin 2025",
      image: "/images/events/eth-dublin-2025.jpeg",
      date: "May 23-25, 2025",
      time: "9:00 AM",
      location: "Convention Centre Dublin",
      city: "Dublin, Ireland",
      price: "0.9 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 15,
      title: "Bitcoin 2025",
      image: "/placeholder.svg?key=qhsr3",
      date: "May 27-29, 2025",
      time: "9:00 AM",
      location: "Las Vegas Convention Center",
      city: "Las Vegas, USA",
      price: "1.5 SOL",
      category: "Crypto",
      featured: true,
    },
    {
      id: 16,
      title: "Permissionless 4",
      image: "/images/events/permissionless-iv.jpeg",
      date: "May 29-31, 2025",
      time: "9:00 AM",
      location: "Barclays Center",
      city: "Brooklyn, USA",
      price: "1.2 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 17,
      title: "Non-Fungible Conference",
      image: "/images/events/nfc-summit-2025.webp",
      date: "June 4-6, 2025",
      time: "10:00 AM",
      location: "Lisbon Congress Center",
      city: "Lisbon, Portugal",
      price: "1.0 SOL",
      category: "NFT",
      featured: false,
    },
    {
      id: 18,
      title: "BTC Prague",
      image: "/images/events/btc-prague-2025.webp",
      date: "June 19-21, 2025",
      time: "9:00 AM",
      location: "O2 Universum",
      city: "Prague, Czech Republic",
      price: "1.1 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 19,
      title: "EthCC Cannes",
      image: "/images/events/ethcc-cannes.jpeg",
      date: "June 30-July 3, 2025",
      time: "9:00 AM",
      location: "Palais des Festivals",
      city: "Cannes, France",
      price: "1.3 SOL",
      category: "Crypto",
      featured: true,
    },
    {
      id: 20,
      title: "Web3 Summit",
      image: "/images/events/webx-2025.png",
      date: "August 1-3, 2025",
      time: "9:00 AM",
      location: "Moscone Center",
      city: "San Francisco, USA",
      price: "1.2 SOL",
      category: "Web3",
      featured: false,
    },
    {
      id: 21,
      title: "Korea Blockchain Week",
      image: "/images/events/balkans-crypto-tech.png",
      date: "September 22-27, 2025",
      time: "9:00 AM",
      location: "COEX Convention Center",
      city: "Seoul, South Korea",
      price: "1.0 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 22,
      title: "TOKEN2049 Singapore 2025",
      image: "/images/events/token2049-singapore-2025.png",
      date: "October 1-2, 2025",
      time: "9:00 AM",
      location: "Marina Bay Sands",
      city: "Singapore",
      price: "1.5 SOL",
      category: "Crypto",
      featured: true,
    },
    {
      id: 23,
      title: "Future Blockchain Summit",
      image: "/placeholder.svg?key=35w7t",
      date: "October 12-15, 2025",
      time: "10:00 AM",
      location: "Dubai World Trade Centre",
      city: "Dubai, UAE",
      price: "1.1 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 24,
      title: "Blockchain Life 2025",
      image: "/images/events/blockchain-life-2025.webp",
      date: "October 28-29, 2025",
      time: "9:00 AM",
      location: "Dubai World Trade Centre",
      city: "Dubai, UAE",
      price: "1.0 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 25,
      title: "Blockchain Futurist Conference",
      image: "/images/events/blockchain-futurist-conference.jpeg",
      date: "November 5-6, 2025",
      time: "9:00 AM",
      location: "Miami Beach Convention Center",
      city: "Miami, USA",
      price: "1.2 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 26,
      title: "Solana Breakpoint",
      image: "/images/events/solana-breakpoint.png",
      date: "December 11-13, 2025",
      time: "9:00 AM",
      location: "Etihad Arena",
      city: "Abu Dhabi, UAE",
      price: "1.4 SOL",
      category: "Crypto",
      featured: true,
    },
    {
      id: 27,
      title: "NFT Expo",
      image: "/placeholder.svg?key=6df9i",
      date: "December 1-3, 2025",
      time: "10:00 AM",
      location: "Los Angeles Convention Center",
      city: "Los Angeles, USA",
      price: "1.0 SOL",
      category: "NFT",
      featured: false,
    },
    {
      id: 28,
      title: "Crypto Finance Conference",
      image: "/placeholder.svg?key=radf8",
      date: "December 5-7, 2025",
      time: "9:00 AM",
      location: "Zurich Convention Center",
      city: "Zurich, Switzerland",
      price: "1.5 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 29,
      title: "Web3 Developer Summit",
      image: "/images/events/conference3.webp",
      date: "December 10-12, 2025",
      time: "9:00 AM",
      location: "Berlin Congress Center",
      city: "Berlin, Germany",
      price: "0.9 SOL",
      category: "Web3",
      featured: false,
    },
    {
      id: 30,
      title: "Blockchain & AI Summit",
      image: "/images/events/european-blockchain-convention.png",
      date: "December 15-17, 2025",
      time: "9:00 AM",
      location: "ExCeL London",
      city: "London, UK",
      price: "1.2 SOL",
      category: "Crypto",
      featured: false,
    },
    {
      id: 31,
      title: "Crypto Gaming Expo",
      image: "/placeholder.svg?key=s06r1",
      date: "December 20-22, 2025",
      time: "10:00 AM",
      location: "Tokyo Big Sight",
      city: "Tokyo, Japan",
      price: "1.0 SOL",
      category: "Gaming",
      featured: false,
    },
    {
      id: 32,
      title: "Year-End Crypto Review",
      image: "/placeholder.svg?key=1wavj",
      date: "December 25-27, 2025",
      time: "9:00 AM",
      location: "Online",
      city: "Virtual Event",
      price: "0.5 SOL",
      category: "Crypto",
      featured: false,
    },
  ]

  // Filter events to only show those with actual images (not placeholders)
  const filteredEvents = events.filter((event) => !event.image.includes("/placeholder.svg"))

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Replace the EventsHeroCarousel with YouTubeBackground */}
          <YouTubeBackground
            videoId="n04NCJ9jZS8"
            fallbackImageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%203.36.19%E2%80%AFPM-tg8wEGvYBpEevzIw2QOFpqYjH499zv.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/90 to-background" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
              Find Your Next Adventure
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Discover amazing events happening near you and secure your tickets with just a few clicks!
            </p>

            {/* Search and Filter */}
            <div className="w-full max-w-4xl bg-background/80 backdrop-blur-sm p-4 rounded-xl border border-orange-500/20">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search events..."
                    className="pl-10 rounded-full border-orange-500/30 focus:border-orange-500/60"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full sm:w-[180px] rounded-full border-orange-500/30 focus:border-orange-500/60">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="ai">AI</SelectItem>
                      <SelectItem value="metaverse">Metaverse</SelectItem>
                      <SelectItem value="web3">Web3</SelectItem>
                      <SelectItem value="crypto">Crypto</SelectItem>
                      <SelectItem value="conference">Conference</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full sm:w-[180px] rounded-full border-orange-500/30 focus:border-orange-500/60">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="singapore">Singapore</SelectItem>
                      <SelectItem value="dubai">Dubai, UAE</SelectItem>
                      <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                      <SelectItem value="chicago">Chicago, IL</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hidden sm:flex rounded-full border-orange-500/30 hover:border-orange-500/60"
                  >
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="pt-8 pb-16 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-8">
              <TabsList className="rounded-full bg-muted/50 backdrop-blur-sm w-full overflow-x-auto flex-nowrap max-w-full pl-0">
                <TabsTrigger
                  value="all"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white pl-4"
                >
                  All Events
                </TabsTrigger>
                <TabsTrigger
                  value="featured"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                >
                  Featured
                </TabsTrigger>
                <TabsTrigger
                  value="upcoming"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                >
                  Upcoming
                </TabsTrigger>
                <TabsTrigger
                  value="past"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                >
                  Past
                </TabsTrigger>
              </TabsList>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[120px] sm:w-[180px] rounded-full border-orange-500/30 focus:border-orange-500/60">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="featured" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents
                  .filter((e) => e.featured)
                  .map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.slice(0, 4).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.slice(4, 6).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="rounded-full border-orange-500/30 hover:border-orange-500/60">
              Load More Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function EventCard({ event }: { event: any }) {
  return (
    <Card className="overflow-hidden bg-background/60 backdrop-blur-sm hover:shadow-lg transition-all h-full flex flex-col rounded-xl border-orange-500/20 hover:border-orange-500/40">
      <div className="relative h-48">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        {event.featured && (
          <Badge className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-pink-500">Featured</Badge>
        )}
        <button className="absolute top-2 left-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
          <Heart className="h-4 w-4 text-muted-foreground hover:text-pink-500 transition-colors" />
        </button>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{event.title}</CardTitle>
        <CardDescription>
          <div className="flex items-center mt-2">
            <Calendar className="h-4 w-4 mr-2 text-orange-500" />
            <span>
              {event.date} • {event.time}
            </span>
          </div>
          <div className="flex items-center mt-1">
            <MapPin className="h-4 w-4 mr-2 text-orange-500" />
            <span>
              {event.location}, {event.city}
            </span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <Badge variant="outline" className="bg-muted/50 border-orange-500/30">
          {event.category}
        </Badge>
      </CardContent>
      <CardFooter className="flex justify-between mt-auto">
        <div className="flex items-center">
          <Ticket className="h-4 w-4 mr-2 text-orange-500" />
          <span className="font-semibold">{event.price}</span>
        </div>
        <Button
          asChild
          size="sm"
          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full"
        >
          <Link href={`/events/${event.id}`}>Get Tickets</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
