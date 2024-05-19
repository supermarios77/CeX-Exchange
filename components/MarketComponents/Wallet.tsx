import { CurrencyIcon, LogOutIcon } from "@/config/icons";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Wallet = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm dark:bg-card col-span-1 md:col-span-3">
      <div className="px-4 py-3 border-b dark:border-accent flex items-center justify-between">
        <h3 className="text-lg font-semibold">Wallet</h3>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost">
            <CurrencyIcon className="h-5 w-5" />
            <span className="sr-only">Deposit</span>
          </Button>
          <Button size="sm" variant="ghost">
            <LogOutIcon className="h-5 w-5" />
            <span className="sr-only">Withdraw</span>
          </Button>
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-100 rounded-lg p-4 dark:bg-card">
          <div className="flex items-center justify-between">
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
              <span className="font-medium">BTC</span>
            </div>
            <div className="text-green-500 font-medium">+2.5%</div>
          </div>
          <div className="text-2xl font-bold">0.5000</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            $29,900.00
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 dark:bg-card">
          <div className="flex items-center justify-between">
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
              <span className="font-medium">ETH</span>
            </div>
            <div className="text-red-500 font-medium">-1.2%</div>
          </div>
          <div className="text-2xl font-bold">2.5000</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            $4,500.00
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 dark:bg-card">
          <div className="flex items-center justify-between">
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
              <span className="font-medium">USDT</span>
            </div>
            <div className="text-gray-500 font-medium">0.0%</div>
          </div>
          <div className="text-2xl font-bold">10,000.00</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            $10,000.00
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 dark:bg-card">
          <div className="flex items-center justify-between">
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
              <span className="font-medium">LTC</span>
            </div>
            <div className="text-green-500 font-medium">+0.8%</div>
          </div>
          <div className="text-2xl font-bold">50.0000</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            $9,000.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
