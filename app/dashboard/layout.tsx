"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Ticket, Star, ImageIcon, Settings, Menu, X, User, LayoutDashboard, ScanLine } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export default function DashboardLayout({ children }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const routes = [
    {
      icon: <Home className="h-5 w-5" />,
      label: "Overview",
      href: "/dashboard",
    },
    {
      icon: <Ticket className="h-5 w-5" />,
      label: "My Tickets",
      href: "/dashboard/tickets",
    },
    {
      icon: <Star className="h-5 w-5" />,
      label: "Favorited",
      href: "/dashboard/favorited",
    },
    {
      icon: <ImageIcon className="h-5 w-5" />,
      label: "NFT Collection",
      href: "/dashboard/nft-collection",
    },
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Creator Dashboard",
      href: "/dashboard/creator",
    },
    {
      icon: <ScanLine className="h-5 w-5" />,
      label: "Scanner APP",
      href: "/dashboard/scanner",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Settings",
      href: "/dashboard/settings",
    },
  ]

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-16">
        {/* Sidebar Toggle Button - Improved for mobile */}
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          size="icon"
          className="fixed top-20 right-4 z-40 md:hidden bg-background/50 backdrop-blur-md border border-border/50 rounded-full shadow-md"
          aria-label="Toggle Sidebar"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Sidebar */}
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-30 w-64 bg-background/80 backdrop-blur-md pt-16 border-r border-border/20 transition-transform duration-300 ease-in-out md:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex flex-col h-full py-4 overflow-y-auto">
            <div className="px-4 py-2">
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                Profile
              </h2>
              <Button
                asChild
                variant="ghost"
                className="w-full mt-4 flex items-center justify-center gap-2"
                onClick={() => setSidebarOpen(false)}
              >
                <Link href="/dashboard">
                  <User className="h-5 w-5 mr-2" />
                  Profile
                </Link>
              </Button>
            </div>
            <nav className="flex-1 px-2 mt-5 space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    pathname === route.href
                      ? "bg-orange-500/10 text-orange-500"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  {route.icon}
                  <span className="ml-3">{route.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={cn(
            "flex-1 transition-all duration-300 ease-in-out px-4 py-8 md:px-8 md:py-12",
            sidebarOpen ? "md:ml-64" : "ml-0 md:ml-64",
          )}
        >
          {children}
        </div>
      </div>
    </>
  )
}
