import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export function CryptoPriceCard() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-4 px-4 md:px-6">
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="flex items-center justify-between p-6 shadow-sm transition-all hover:shadow-md dark:border-accent dark:bg-card">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  alt="Bitcoin"
                  className="rounded-full"
                  src="/placeholder.svg"
                />
                <AvatarFallback>BTC</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-50">
                  Bitcoin
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">BTC</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900 dark:text-gray-50">
                $56,789.00
              </p>
              <p className="text-sm text-green-500 dark:text-green-400">
                +2.5%
              </p>
            </div>
          </Card>
          <Card className="flex items-center justify-between p-6 shadow-sm transition-all hover:shadow-md dark:border-accent dark:bg-card">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  alt="Ethereum"
                  className="rounded-full"
                  src="/placeholder.svg"
                />
                <AvatarFallback>ETH</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-50">
                  Ethereum
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">ETH</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900 dark:text-gray-50">
                $1,789.00
              </p>
              <p className="text-sm text-red-500 dark:text-red-400">-1.2%</p>
            </div>
          </Card>
          <Card className="flex items-center justify-between p-6 shadow-sm transition-all hover:shadow-md dark:border-accent dark:bg-card">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  alt="Litecoin"
                  className="rounded-full"
                  src="/placeholder.svg"
                />
                <AvatarFallback>LTC</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-50">
                  Litecoin
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">LTC</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900 dark:text-gray-50">
                $234.00
              </p>
              <p className="text-sm text-green-500 dark:text-green-400">
                +0.8%
              </p>
            </div>
          </Card>
          <Card className="flex items-center justify-between p-6 shadow-sm transition-all hover:shadow-md dark:border-accent dark:bg-card">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  alt="Ripple"
                  className="rounded-full"
                  src="/placeholder.svg"
                />
                <AvatarFallback>XRP</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-50">
                  Ripple
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">XRP</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900 dark:text-gray-50">
                $0.50
              </p>
              <p className="text-sm text-green-500 dark:text-green-400">
                +0.5%
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}