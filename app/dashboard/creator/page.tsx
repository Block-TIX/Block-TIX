"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  BarChart3,
  Calendar,
  Clock,
  DollarSign,
  Download,
  Edit,
  MapPin,
  Plus,
  Save,
  Ticket,
  Trash2,
  Users,
} from "lucide-react"

export default function CreatorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [editingEvent, setEditingEvent] = useState(null)
  const [viewingAnalytics, setViewingAnalytics] = useState(null)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isAnalyticsDialogOpen, setIsAnalyticsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [eventToDelete, setEventToDelete] = useState(null)

  // Mock data for the dashboard
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Solana Breakpoint",
      date: "Dec 11-13, 2025",
      location: "Abu Dhabi, UAE",
      description:
        "The premier Solana ecosystem conference bringing together developers, founders, and industry leaders.",
      ticketsSold: 1250,
      totalCapacity: 2000,
      revenue: "1875 SOL",
      status: "Active",
      image: "/images/events/solana-breakpoint.png",
      ticketTypes: [
        { name: "General Admission", price: "1.5 SOL", available: 500, sold: 450 },
        { name: "VIP Access", price: "3 SOL", available: 200, sold: 150 },
        { name: "Early Bird", price: "1 SOL", available: 300, sold: 300 },
      ],
      analytics: {
        dailySales: [12, 18, 25, 32, 45, 50, 65, 72, 85, 92, 105, 120, 135, 142, 150],
        demographics: { male: 65, female: 32, other: 3 },
        ageGroups: { "18-24": 25, "25-34": 45, "35-44": 20, "45+": 10 },
        referrals: { direct: 40, social: 35, email: 15, other: 10 },
      },
    },
    {
      id: 2,
      title: "TOKEN2049 Singapore",
      date: "Sep 18-19, 2024",
      location: "Singapore",
      description:
        "Asia's premier crypto event, where founders and executives of leading Web3 companies share their view on the market.",
      ticketsSold: 1800,
      totalCapacity: 2500,
      revenue: "2700 SOL",
      status: "Active",
      image: "/images/events/token2049-singapore.jpeg",
      ticketTypes: [
        { name: "Standard", price: "1.5 SOL", available: 1500, sold: 1200 },
        { name: "Premium", price: "3 SOL", available: 500, sold: 350 },
        { name: "Ultimate", price: "5 SOL", available: 500, sold: 250 },
      ],
      analytics: {
        dailySales: [20, 25, 30, 40, 55, 70, 85, 100, 120, 140, 160, 180, 200, 220, 230],
        demographics: { male: 70, female: 25, other: 5 },
        ageGroups: { "18-24": 15, "25-34": 50, "35-44": 25, "45+": 10 },
        referrals: { direct: 30, social: 45, email: 20, other: 5 },
      },
    },
    {
      id: 3,
      title: "WebX Summit 2025",
      date: "Mar 15-17, 2025",
      location: "Dubai, UAE",
      description: "A global conference focused on the future of web technologies and digital innovation.",
      ticketsSold: 950,
      totalCapacity: 1500,
      revenue: "1425 SOL",
      status: "Draft",
      image: "/images/events/webx-2025.png",
      ticketTypes: [
        { name: "Early Access", price: "1.2 SOL", available: 500, sold: 450 },
        { name: "Regular", price: "1.8 SOL", available: 700, sold: 500 },
        { name: "Premium", price: "2.5 SOL", available: 300, sold: 0 },
      ],
      analytics: {
        dailySales: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
        demographics: { male: 60, female: 35, other: 5 },
        ageGroups: { "18-24": 20, "25-34": 40, "35-44": 30, "45+": 10 },
        referrals: { direct: 35, social: 40, email: 15, other: 10 },
      },
    },
  ])

  const recentActivity = [
    { action: "Ticket purchased", event: "Solana Breakpoint", time: "5 minutes ago", user: "0x7a...3d4f" },
    { action: "New event created", event: "WebX Summit 2025", time: "2 hours ago", user: "You" },
    { action: "Ticket transferred", event: "TOKEN2049 Singapore", time: "Yesterday", user: "0x3f...9e2a" },
    { action: "Ticket scanned", event: "Solana Breakpoint", time: "Yesterday", user: "Scanner App" },
    { action: "Payout received", event: "TOKEN2049 Singapore", time: "2 days ago", user: "System" },
  ]

  const handleEditEvent = (event) => {
    setEditingEvent({ ...event })
    setIsEditDialogOpen(true)
  }

  const handleViewAnalytics = (event) => {
    setViewingAnalytics(event)
    setIsAnalyticsDialogOpen(true)
  }

  const handleSaveEvent = () => {
    if (editingEvent) {
      setEvents(events.map((event) => (event.id === editingEvent.id ? editingEvent : event)))
      setIsEditDialogOpen(false)
      setEditingEvent(null)
    }
  }

  const handleDeleteEvent = (event) => {
    setEventToDelete(event)
    setIsDeleteDialogOpen(true)
  }

  const confirmDeleteEvent = () => {
    if (eventToDelete) {
      setEvents(events.filter((event) => event.id !== eventToDelete.id))
      setIsDeleteDialogOpen(false)
      setEventToDelete(null)
    }
  }

  const handleExportData = (event) => {
    // In a real app, this would generate and download a CSV/Excel file
    alert(`Exporting data for ${event.title}`)
  }

  return (
    <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Creator Dashboard</h1>
          <p className="text-muted-foreground">Manage your events, tickets, and analytics in one place.</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full">
                <Plus className="mr-2 h-4 w-4" /> Create New Event
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-6">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-xl">Create New Event</DialogTitle>
                <DialogDescription>
                  Fill in the details below to create a new event. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label htmlFor="event-title" className="md:text-right">
                    Title
                  </Label>
                  <Input id="event-title" placeholder="Event title" className="col-span-1 md:col-span-3" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label htmlFor="event-date" className="md:text-right">
                    Date
                  </Label>
                  <Input id="event-date" placeholder="Event date" className="col-span-1 md:col-span-3" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label htmlFor="event-location" className="md:text-right">
                    Location
                  </Label>
                  <Input id="event-location" placeholder="Event location" className="col-span-1 md:col-span-3" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label htmlFor="event-capacity" className="md:text-right">
                    Capacity
                  </Label>
                  <Input
                    id="event-capacity"
                    type="number"
                    placeholder="Total capacity"
                    className="col-span-1 md:col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-4">
                  <Label htmlFor="event-description" className="md:text-right pt-2">
                    Description
                  </Label>
                  <Textarea
                    id="event-description"
                    placeholder="Event description"
                    className="col-span-1 md:col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label htmlFor="event-status" className="md:text-right">
                    Status
                  </Label>
                  <Select defaultValue="draft">
                    <SelectTrigger className="col-span-1 md:col-span-3">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-6">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)} className="w-full sm:w-auto">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  onClick={() => setIsCreateDialogOpen(false)}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                >
                  Create Event
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-sm rounded-full p-1 border border-gray-800 flex w-full max-w-md mx-auto mb-6 mt-6">
        <button
          className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${
            activeTab === "overview"
              ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${
            activeTab === "events"
              ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("events")}
        >
          Events
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${
            activeTab === "analytics"
              ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics
        </button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="hidden">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6,000 SOL</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tickets Sold</CardTitle>
                <Ticket className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4,000</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Events</CardTitle>
                <Calendar className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Same as last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Attendees</CardTitle>
                <Users className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,850</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Your Events</CardTitle>
                <CardDescription>You have {events.length} events in total</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium truncate">{event.title}</p>
                        <Badge variant={event.status === "Active" ? "default" : "secondary"}>{event.status}</Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{event.date}</span>
                        <span className="mx-1 flex-shrink-0">•</span>
                        <Ticket className="mr-1 h-3 w-3 flex-shrink-0" />
                        <span className="truncate">
                          {event.ticketsSold}/{event.totalCapacity}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditEvent(event)}
                      className="flex-shrink-0"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => setActiveTab("events")}>
                  View All Events
                </Button>
              </CardFooter>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <p className="text-sm font-medium truncate">{activity.action}</p>
                      <div className="flex flex-wrap items-center text-xs text-muted-foreground gap-1">
                        <span className="truncate">{activity.event}</span>
                        <span className="flex-shrink-0">•</span>
                        <span className="flex-shrink-0">{activity.time}</span>
                        <span className="flex-shrink-0">•</span>
                        <span className="truncate">{activity.user}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-2">
                <CardTitle>Manage Events</CardTitle>
                <CardDescription>Create, edit, and manage your events</CardDescription>
                <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full mt-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full">
                      <Plus className="mr-2 h-4 w-4" /> Create New Event
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {events.map((event) => (
                  <Card key={event.id}>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col gap-4">
                        <div className="relative w-full h-48 rounded-md overflow-hidden">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0 space-y-3 w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <h3 className="font-bold text-lg truncate">{event.title}</h3>
                            <Badge variant={event.status === "Active" ? "default" : "secondary"} className="w-fit">
                              {event.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0" />
                              <span className="truncate">{event.date}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0" />
                              <span className="truncate">{event.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Ticket className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0" />
                              <span className="truncate">
                                {event.ticketsSold}/{event.totalCapacity} tickets sold
                              </span>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0" />
                              <span className="truncate">{event.revenue} revenue</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 w-full">
                          <Button variant="outline" size="sm" className="flex-1" onClick={() => handleEditEvent(event)}>
                            <Edit className="mr-2 h-4 w-4" /> Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => handleViewAnalytics(event)}
                          >
                            <BarChart3 className="mr-2 h-4 w-4" /> Analytics
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => handleExportData(event)}
                          >
                            <Download className="mr-2 h-4 w-4" /> Export
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleDeleteEvent(event)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Analytics</CardTitle>
              <CardDescription>View detailed analytics for your events</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground" />
                <div>
                  <h3 className="text-lg font-medium">Analytics Dashboard</h3>
                  <p className="text-sm text-muted-foreground">Detailed charts and analytics will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Creator Settings</CardTitle>
              <CardDescription>Manage your creator profile and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Creator/Organization Name</Label>
                <Input id="name" defaultValue="BlockTix Events" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Contact Email</Label>
                <Input id="email" type="email" defaultValue="creator@blocktix.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wallet">Connected Wallet</Label>
                <Input id="wallet" defaultValue="0x7a23...3d4f" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="payout">Default Payout Method</Label>
                <Input id="payout" defaultValue="Connected Wallet (SOL)" />
              </div>
              <Button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Edit Event Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px] p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl">Edit Event</DialogTitle>
            <DialogDescription>Make changes to your event details below.</DialogDescription>
          </DialogHeader>
          {editingEvent && (
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-title" className="md:text-right">
                  Title
                </Label>
                <Input
                  id="edit-title"
                  value={editingEvent.title}
                  onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
                  className="col-span-1 md:col-span-3"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-date" className="md:text-right">
                  Date
                </Label>
                <Input
                  id="edit-date"
                  value={editingEvent.date}
                  onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
                  className="col-span-1 md:col-span-3"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-location" className="md:text-right">
                  Location
                </Label>
                <Input
                  id="edit-location"
                  value={editingEvent.location}
                  onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })}
                  className="col-span-1 md:col-span-3"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-4">
                <Label htmlFor="edit-description" className="md:text-right pt-2">
                  Description
                </Label>
                <Textarea
                  id="edit-description"
                  value={editingEvent.description}
                  onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
                  className="col-span-1 md:col-span-3"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-capacity" className="md:text-right">
                  Capacity
                </Label>
                <Input
                  id="edit-capacity"
                  type="number"
                  value={editingEvent.totalCapacity}
                  onChange={(e) => setEditingEvent({ ...editingEvent, totalCapacity: Number.parseInt(e.target.value) })}
                  className="col-span-1 md:col-span-3"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="md:text-right">
                  Status
                </Label>
                <Select
                  value={editingEvent.status}
                  onValueChange={(value) => setEditingEvent({ ...editingEvent, status: value })}
                >
                  <SelectTrigger className="col-span-1 md:col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Draft">Draft</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-1 md:col-span-4 mt-2">
                <h4 className="font-medium mb-4">Ticket Types</h4>
                {editingEvent.ticketTypes.map((ticket, idx) => (
                  <div key={idx} className="grid grid-cols-4 gap-3 mb-3">
                    <Input
                      value={ticket.name}
                      onChange={(e) => {
                        const updatedTickets = [...editingEvent.ticketTypes]
                        updatedTickets[idx].name = e.target.value
                        setEditingEvent({ ...editingEvent, ticketTypes: updatedTickets })
                      }}
                      placeholder="Ticket name"
                    />
                    <Input
                      value={ticket.price}
                      onChange={(e) => {
                        const updatedTickets = [...editingEvent.ticketTypes]
                        updatedTickets[idx].price = e.target.value
                        setEditingEvent({ ...editingEvent, ticketTypes: updatedTickets })
                      }}
                      placeholder="Price"
                    />
                    <Input
                      type="number"
                      value={ticket.available}
                      onChange={(e) => {
                        const updatedTickets = [...editingEvent.ticketTypes]
                        updatedTickets[idx].available = Number.parseInt(e.target.value)
                        setEditingEvent({ ...editingEvent, ticketTypes: updatedTickets })
                      }}
                      placeholder="Available"
                    />
                    <Input
                      type="number"
                      value={ticket.sold}
                      onChange={(e) => {
                        const updatedTickets = [...editingEvent.ticketTypes]
                        updatedTickets[idx].sold = Number.parseInt(e.target.value)
                        setEditingEvent({ ...editingEvent, ticketTypes: updatedTickets })
                      }}
                      placeholder="Sold"
                    />
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => {
                    const updatedTickets = [
                      ...editingEvent.ticketTypes,
                      { name: "New Ticket", price: "1 SOL", available: 100, sold: 0 },
                    ]
                    setEditingEvent({ ...editingEvent, ticketTypes: updatedTickets })
                  }}
                >
                  <Plus className="mr-2 h-4 w-4" /> Add Ticket Type
                </Button>
              </div>
            </div>
          )}
          <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-6">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button
              onClick={handleSaveEvent}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
            >
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Analytics Dialog */}
      <Dialog open={isAnalyticsDialogOpen} onOpenChange={setIsAnalyticsDialogOpen}>
        <DialogContent className="sm:max-w-[800px] p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl">Event Analytics: {viewingAnalytics?.title}</DialogTitle>
            <DialogDescription>Detailed performance metrics for your event.</DialogDescription>
          </DialogHeader>
          {viewingAnalytics && (
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Tickets Sold</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{viewingAnalytics.ticketsSold}</div>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((viewingAnalytics.ticketsSold / viewingAnalytics.totalCapacity) * 100)}% of capacity
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{viewingAnalytics.revenue}</div>
                    <p className="text-xs text-muted-foreground">
                      Avg. {Number.parseFloat(viewingAnalytics.revenue) / viewingAnalytics.ticketsSold} SOL per ticket
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Page Views</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3,245</div>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((viewingAnalytics.ticketsSold / 3245) * 100)}% conversion rate
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Daily Sales</h3>
                <div className="h-[200px] w-full bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-10 w-10 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mt-2">Sales chart visualization</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Demographics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Male</span>
                      <span className="text-sm font-medium">{viewingAnalytics.analytics.demographics.male}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${viewingAnalytics.analytics.demographics.male}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm">Female</span>
                      <span className="text-sm font-medium">{viewingAnalytics.analytics.demographics.female}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div
                        className="bg-pink-500 h-2 rounded-full"
                        style={{ width: `${viewingAnalytics.analytics.demographics.female}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm">Other</span>
                      <span className="text-sm font-medium">{viewingAnalytics.analytics.demographics.other}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${viewingAnalytics.analytics.demographics.other}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Age Groups</h3>
                  <div className="space-y-2">
                    {Object.entries(viewingAnalytics.analytics.ageGroups).map(([age, percentage]) => (
                      <div key={age}>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{age}</span>
                          <span className="text-sm font-medium">{percentage}%</span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Ticket Type Performance</h3>
                <div className="space-y-4">
                  {viewingAnalytics.ticketTypes.map((ticket, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{ticket.name}</span>
                        <span>
                          {ticket.sold}/{ticket.available} sold
                        </span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full"
                          style={{ width: `${(ticket.sold / ticket.available) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-6">
            <Button variant="outline" onClick={() => handleExportData(viewingAnalytics)} className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" /> Export Data
            </Button>
            <Button onClick={() => setIsAnalyticsDialogOpen(false)} className="w-full sm:w-auto">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px] p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl">Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the event "{eventToDelete?.title}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-6">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDeleteEvent} className="w-full sm:w-auto">
              <Trash2 className="mr-2 h-4 w-4" /> Delete Event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
