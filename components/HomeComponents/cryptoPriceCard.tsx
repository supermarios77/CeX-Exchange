import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export function CryptoPriceCard() {

  const cryptocurrencies = [
    { name: "Bitcoin", symbol: "BTC", price: "$56,789.00", change: "+2.5%", placeholder: "/placeholder.svg" },
    { name: "Ethereum", symbol: "ETH", price: "$1,789.00", change: "-1.2%", placeholder: "/placeholder.svg" },
    { name: "Litecoin", symbol: "LTC", price: "$234.00", change: "+0.8%", placeholder: "/placeholder.svg" },
    { name: "Ripple", symbol: "XRP", price: "$0.50", change: "+0.5%", placeholder: "/placeholder.svg" }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-4 px-4 md:px-6">
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cryptocurrencies.map((crypto, index) => (
            <Card key={index} className="flex items-center justify-between p-6 shadow-sm transition-all hover:shadow-md dark:border-accent dark:bg-card">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    alt={crypto.name}
                    className="rounded-full"
                    src={crypto.placeholder}
                  />
                  <AvatarFallback>{crypto.symbol}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-50">
                    {crypto.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{crypto.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900 dark:text-gray-50">
                  {crypto.price}
                </p>
                <p className={`text-sm ${crypto.change.includes('-') ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}`}>
                  {crypto.change}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}