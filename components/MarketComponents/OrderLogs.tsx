import { FilterIcon, ListIcon } from "@/config/icons";
import React from "react";
import { Button } from "../ui/button";

const OrderLogs = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm dark:bg-card col-span-1 md:col-span-1">
      <div className="px-4 py-3 border-b dark:border-accent flex items-center justify-between">
        <h3 className="text-lg font-semibold">Order Log</h3>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost">
            <FilterIcon className="h-5 w-5" />
            <span className="sr-only">Filter</span>
          </Button>
          <Button size="sm" variant="ghost">
            <ListIcon className="h-5 w-5" />
            <span className="sr-only">Sort</span>
          </Button>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          <div>Time</div>
          <div>Type</div>
          <div>Price (USDT)</div>
          <div>Amount (BTC)</div>
        </div>
        <div className="grid grid-cols-4 text-sm font-medium text-green-500">
          <div>12:34:56</div>
          <div>Buy</div>
          <div>59,700.00</div>
          <div>0.1000</div>
        </div>
        <div className="grid grid-cols-4 text-sm font-medium text-red-500">
          <div>12:32:11</div>
          <div>Sell</div>
          <div>59,750.00</div>
          <div>0.2500</div>
        </div>
        <div className="grid grid-cols-4 text-sm font-medium text-green-500">
          <div>12:29:45</div>
          <div>Buy</div>
          <div>59,650.00</div>
          <div>0.0750</div>
        </div>
      </div>
    </div>
  );
};

export default OrderLogs;
