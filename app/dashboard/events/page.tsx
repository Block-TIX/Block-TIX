export default function MyEventsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">My Events</h1>

      <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Events You're Hosting</h2>
          <button className="text-sm text-white bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 rounded-md">
            Create New Event
          </button>
        </div>

        <div className="space-y-4">
          {[1, 2].map((event) => (
            <div key={event} className="bg-gray-900/50 rounded-lg p-4 flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-40 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">EVENT #{event}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white">Community Meetup #{event}</h3>
                <p className="text-sm text-gray-400">July {event * 10}, 2025 • Online</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    {event * 25} Attendees
                  </span>
                  <span className="text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded-full">
                    {event * 10} Tickets Sold
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="text-xs text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md">
                    Edit
                  </button>
                  <button className="text-xs text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md">
                    Manage Tickets
                  </button>
                  <button className="text-xs text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
