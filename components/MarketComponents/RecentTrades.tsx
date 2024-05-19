import React from "react";
import { Button } from "../ui/button";
import { FilterIcon, ListIcon } from "@/config/icons";

const RecentTrades = () => {
  const recentTradesData = [
    { time: "12:34:56", type: "Buy", price: "59,700.00", amount: "0.1000" },
    { time: "12:32:11", type: "Sell", price: "59,750.00", amount: "0.2500" },
    { time: "12:29:45", type: "Buy", price: "59,650.00", amount: "0.0750" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm dark:bg-card md:h-full mt-4">
      <div className="px-4 py-3 border-b dark:border-accent flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent Trades</h3>
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
        {recentTradesData.map((trade, index) => (
          <div key={index} className={`grid grid-cols-4 text-sm font-medium ${index % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
            <div>{trade.time}</div>
            <div>{trade.type}</div>
            <div>{trade.price}</div>
            <div>{trade.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTrades;
