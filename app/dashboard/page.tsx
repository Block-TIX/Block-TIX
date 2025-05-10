"use client"

import { useState } from "react"
import Image from "next/image"

export default function DashboardPage() {
  // Updated user data with real events from our platform
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "/abstract-geometric-shapes.png",
    joinedDate: "May 2023",
    ticketsOwned: 12,
    eventsAttended: 8,
    nftCollected: 5,
    upcomingEvents: [
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
        day: "11",
        month: "DEC",
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
        day: "30",
        month: "JUN",
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
        day: "14",
        month: "MAY",
      },
    ],
    recentActivity: [
      {
        type: "purchase",
        eventId: 22,
        eventTitle: "TOKEN2049 Singapore 2025",
        image: "/images/events/token2049-singapore-2025.png",
        date: "October 1-2, 2025",
        location: "Marina Bay Sands, Singapore",
        timeAgo: "2 days ago",
      },
      {
        type: "favorite",
        eventId: 3,
        eventTitle: "WebX Visionary Night",
        image: "/images/events/webx-visionary.jpeg",
        date: "March 15, 2025",
        location: "Tokyo Tower, Japan",
        timeAgo: "3 days ago",
      },
      {
        type: "nft",
        eventId: 1,
        eventTitle: "SuperAI Conference",
        image: "/images/events/superai-event.jpeg",
        date: "June 5-6, 2024",
        location: "Marina Bay Sands, Singapore",
        timeAgo: "1 week ago",
      },
    ],
  })

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-4">Profile</h1>

      <div className="bg-orange-500/20 border border-orange-500/50 rounded-xl p-4 mb-8">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-orange-100">
            <span className="font-medium">Notice:</span> Profile features are currently in demo mode. Full functionality
            will be available with the upcoming mobile app release.
          </p>
        </div>
      </div>

      <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500">
            <Image src={user.avatar || "/placeholder.svg"} alt="Profile" fill className="object-cover" />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">{user.name}</h2>
            <p className="text-gray-400">{user.email}</p>
            <p className="text-gray-400 mt-1">Member since {user.joinedDate}</p>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-orange-500">{user.ticketsOwned}</p>
                <p className="text-sm text-gray-400">Tickets Owned</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-orange-500">{user.eventsAttended}</p>
                <p className="text-sm text-gray-400">Events Attended</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-orange-500">{user.nftCollected}</p>
                <p className="text-sm text-gray-400">NFTs Collected</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {user.upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center gap-4 p-3 bg-gray-900/50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-md flex flex-col items-center justify-center text-white font-bold">
                  <span className="text-xs">{event.month}</span>
                  <span>{event.day}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white truncate">{event.title}</h4>
                  <p className="text-sm text-gray-400 truncate">
                    {event.date} • {event.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {user.recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-900/50 rounded-lg">
                <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center text-orange-500 relative overflow-hidden">
                  {activity.type === "purchase" && <Ticket className="w-6 h-6" />}
                  {activity.type === "favorite" && <Heart className="w-6 h-6" />}
                  {activity.type === "nft" && (
                    <Image
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.eventTitle}
                      fill
                      className="object-cover opacity-50"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white truncate">
                    {activity.type === "purchase" && "Purchased Ticket"}
                    {activity.type === "favorite" && "Favorited Event"}
                    {activity.type === "nft" && "Collected NFT"}
                  </h4>
                  <p className="text-sm text-gray-400 truncate">
                    {activity.eventTitle} • {activity.timeAgo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Import the Ticket and Heart icons
import { Ticket, Heart } from "lucide-react"
