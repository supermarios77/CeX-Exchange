import { FilterIcon, ListIcon } from "@/config/icons";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Pairs = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm dark:bg-card">
      <div className="px-4 py-3 border-b dark:border-accent flex items-center justify-between">
        <h3 className="text-lg font-semibold">Pairs</h3>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost">
            <ListIcon className="h-5 w-5" />
            <span className="sr-only">Sort</span>
          </Button>
          <Button size="sm" variant="ghost">
            <FilterIcon className="h-5 w-5" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-5 items-center text-sm font-medium">
          <div className="flex items-center gap-2">
            <Image
              alt="BTC"
              height={24}
              src="/placeholder.svg"
              style={{
                aspectRatio: "24/24",
                objectFit: "cover",
              }}
              width={24}
            />
            <span>BTC</span>
          </div>
          <div className="text-right">59,800.00</div>
          <div className="text-right">10,000.00</div>
          <div className="text-right text-green-500">+2.5%</div>
          <div className="text-right">$29,900.00</div>
        </div>
        <div className="grid grid-cols-5 items-center text-sm font-medium">
          <div className="flex items-center gap-2">
            <Image
              alt="ETH"
              height={24}
              src="/placeholder.svg"
              style={{
                aspectRatio: "24/24",
                objectFit: "cover",
              }}
              width={24}
            />
            <span>ETH</span>
          </div>
          <div className="text-right">1,800.00</div>
          <div className="text-right">5,000.00</div>
          <div className="text-right text-red-500">-1.2%</div>
          <div className="text-right">$4,500.00</div>
        </div>
        <div className="grid grid-cols-5 items-center text-sm font-medium">
          <div className="flex items-center gap-2">
            <Image
              alt="USDT"
              height={24}
              src="/placeholder.svg"
              style={{
                aspectRatio: "24/24",
                objectFit: "cover",
              }}
              width={24}
            />
            <span>USDT</span>
          </div>
          <div className="text-right">1.00</div>
          <div className="text-right">50,000.00</div>
          <div className="text-right text-gray-500">0.0%</div>
          <div className="text-right">$50,000.00</div>
        </div>
        <div className="grid grid-cols-5 items-center text-sm font-medium">
          <div className="flex items-center gap-2">
            <Image
              alt="LTC"
              height={24}
              src="/placeholder.svg"
              style={{
                aspectRatio: "24/24",
                objectFit: "cover",
              }}
              width={24}
            />
            <span>LTC</span>
          </div>
          <div className="text-right">180.00</div>
          <div className="text-right">1,000.00</div>
          <div className="text-right text-green-500">+0.8%</div>
          <div className="text-right">$9,000.00</div>
        </div>
      </div>
    </div>
  );
};

export default Pairs;
