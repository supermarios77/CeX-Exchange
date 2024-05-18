import { Button } from "@/components/ui/button"
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";

import Image from "next/image";

export function MarketUpdate() {
  return (
    <section className=" py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Market Update</h2>
        </div>
        <div className="overflow-x-auto rounded-lg shadow-sm border border-accent">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Symbol</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right hidden md:table-cell">Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Image
                      alt="Bitcoin"
                      className="rounded-full"
                      height={28}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "28/28",
                        objectFit: "cover",
                      }}
                      width={28}
                    />
                    <span className="font-medium text-gray-900 dark:text-white">Bitcoin</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">BTC</TableCell>
                <TableCell className="text-right text-gray-900 dark:text-white">$56,789.00</TableCell>
                <TableCell className="text-right hidden md:table-cell text-green-500">+2.5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Image
                      alt="Ethereum"
                      className="rounded-full"
                      height={28}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "28/28",
                        objectFit: "cover",
                      }}
                      width={28}
                    />
                    <span className="font-medium text-gray-900 dark:text-white">Ethereum</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">ETH</TableCell>
                <TableCell className="text-right text-gray-900 dark:text-white">$1,789.00</TableCell>
                <TableCell className="text-right hidden md:table-cell text-red-500">-1.2%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Image
                      alt="Litecoin"
                      className="rounded-full"
                      height={28}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "28/28",
                        objectFit: "cover",
                      }}
                      width={28}
                    />
                    <span className="font-medium text-gray-900 dark:text-white">Litecoin</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">LTC</TableCell>
                <TableCell className="text-right text-gray-900 dark:text-white">$234.00</TableCell>
                <TableCell className="text-right hidden md:table-cell text-green-500">+0.8%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Image
                      alt="Ripple"
                      className="rounded-full"
                      height={28}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "28/28",
                        objectFit: "cover",
                      }}
                      width={28}
                    />
                    <span className="font-medium text-gray-900 dark:text-white">Ripple</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">XRP</TableCell>
                <TableCell className="text-right text-gray-900 dark:text-white">$0.56</TableCell>
                <TableCell className="text-right hidden md:table-cell text-red-500">-0.5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Image
                      alt="Chainlink"
                      className="rounded-full"
                      height={28}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "28/28",
                        objectFit: "cover",
                      }}
                      width={28}
                    />
                    <span className="font-medium text-gray-900 dark:text-white">Chainlink</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">LINK</TableCell>
                <TableCell className="text-right text-gray-900 dark:text-white">$28.00</TableCell>
                <TableCell className="text-right hidden md:table-cell text-green-500">+3.2%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}