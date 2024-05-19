import { RefreshCwIcon } from "@/config/icons";
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

const Wallet = () => {
  return (
    <div className="col-span-3 flex flex-col gap-4 border-t bg-gray-100/40 p-4 dark:bg-card">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Wallet</h2>
        <Button size="icon" variant="ghost">
          <RefreshCwIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>BTC</CardTitle>
            <CardDescription>0.5 BTC</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="font-semibold">$25,000.00</span>
              <div className="flex items-center gap-2">
                <ArrowUpIcon className="h-5 w-5 text-green-500" />
                <span className="text-green-500">+2.5%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ETH</CardTitle>
            <CardDescription>2.0 ETH</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="font-semibold">$3,600.00</span>
              <div className="flex items-center gap-2">
                <ArrowDownIcon className="h-5 w-5 text-red-500" />
                <span className="text-red-500">-1.2%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>LTC</CardTitle>
            <CardDescription>10 LTC</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="font-semibold">$2,000.00</span>
              <div className="flex items-center gap-2">
                <ArrowUpIcon className="h-5 w-5 text-green-500" />
                <span className="text-green-500">+0.5%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
