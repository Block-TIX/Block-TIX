export default function NFTCollectionPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">My NFT Collection</h1>

      <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              id: 1,
              name: "Solana Breakpoint VIP Access",
              date: "May 3, 2025",
              rarity: "Common",
              image: "/solana-breakpoint-nft.png",
            },
            {
              id: 2,
              name: "Token2049 Exclusive Panel",
              date: "May 6, 2025",
              rarity: "Uncommon",
              image: "/token2049-nft-ticket.png",
            },
            {
              id: 3,
              name: "ETH Dublin Limited Edition",
              date: "May 9, 2025",
              rarity: "Rare",
              image: "/eth-dublin-nft.png",
            },
            {
              id: 5,
              name: "WebX Visionary Summit",
              date: "May 15, 2025",
              rarity: "Common",
              image: "/webx-summit-nft.png",
            },
          ].map((nft) => (
            <div
              key={nft.id}
              className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-orange-500 transition-colors"
            >
              <div className="aspect-square relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${nft.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-3">
                      <div className="text-white text-lg font-bold">NFT #{nft.id}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white">{nft.name}</h3>
                <p className="text-sm text-gray-400">Acquired: {nft.date}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      nft.rarity === "Rare"
                        ? "bg-purple-500/20 text-purple-500"
                        : nft.rarity === "Uncommon"
                          ? "bg-blue-500/20 text-blue-500"
                          : "bg-green-500/20 text-green-500"
                    }`}
                  >
                    {nft.rarity}
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
