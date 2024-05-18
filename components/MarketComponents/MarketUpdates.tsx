import { SettingsIcon } from "@/config/icons";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

const MarketUpdates = () => {
  return (
    <div className="flex flex-col gap-4 border-l bg-gray-100/40 p-4 dark:bg-black">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Market Updates</h2>
        <Button size="icon" variant="ghost">
          <SettingsIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>BTC/USD</CardTitle>
              <CardDescription>$50,000.00 (+2.5%)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowUpIcon className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">$50,000.00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">+2.5%</span>
                  <ArrowUpIcon className="h-5 w-5 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>ETH/USD</CardTitle>
              <CardDescription>$1,800.00 (-1.2%)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowDownIcon className="h-5 w-5 text-red-500" />
                  <span className="font-semibold">$1,800.00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">-1.2%</span>
                  <ArrowDownIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>LTC/USD</CardTitle>
              <CardDescription>$200.00 (+0.5%)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowUpIcon className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">$200.00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">+0.5%</span>
                  <ArrowUpIcon className="h-5 w-5 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MarketUpdates;
