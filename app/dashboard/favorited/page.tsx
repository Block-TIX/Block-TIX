export default function FavoritedPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Favorited Events</h1>

      <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4].map((event) => (
            <div
              key={event}
              className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-orange-500 transition-colors"
            >
              <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">EVENT #{event}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white">Blockchain Conference</h3>
                <p className="text-sm text-gray-400">June {event * 5}, 2025 • Virtual</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs bg-orange-500/20 text-orange-500 px-2 py-1 rounded-full">
                    {event % 2 === 0 ? "Free" : "Paid"}
                  </span>
                  <button className="text-sm text-white bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-1 rounded-md">
                    View
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
