import {
  LockIcon,
  MonitorStopIcon,
  ReplaceIcon,
  SettingsIcon,
  StoreIcon,
} from "@/config/icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "../ui/button";

const BuySell = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm dark:bg-card col-span-1 md:col-span-2 w-full">
      <div className="px-4 py-3 border-b dark:border-accent flex items-center justify-between">
        <h3 className="text-lg font-semibold">Buy/Sell</h3>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost">
            <LockIcon className="h-5 w-5" />
            <span className="sr-only">Limit</span>
          </Button>
          <Button size="sm" variant="ghost">
            <StoreIcon className="h-5 w-5" />
            <span className="sr-only">Market</span>
          </Button>
          <Button size="sm" variant="ghost">
            <MonitorStopIcon className="h-5 w-5" />
            <span className="sr-only">Stop</span>
          </Button>
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium" htmlFor="buy-price">
              Buy Price (USDT)
            </Label>
            <Input defaultValue="59,800.00" id="buy-price" type="number" />
          </div>
          <div>
            <Label className="text-sm font-medium" htmlFor="buy-amount">
              Buy Amount (BTC)
            </Label>
            <Input defaultValue="0.5000" id="buy-amount" type="number" />
          </div>
          <Button className="w-full">
            Buy BTC
          </Button>
        </div>
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium" htmlFor="sell-price">
              Sell Price (USDT)
            </Label>
            <Input defaultValue="59,800.00" id="sell-price" type="number" />
          </div>
          <div>
            <Label className="text-sm font-medium" htmlFor="sell-amount">
              Sell Amount (BTC)
            </Label>
            <Input defaultValue="0.5000" id="sell-amount" type="number" />
          </div>
          <Button className="w-full">
            Sell BTC
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuySell;
