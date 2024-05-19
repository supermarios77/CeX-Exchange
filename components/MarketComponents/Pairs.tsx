import React from "react";
import { Button } from "../ui/button";
import { FilterIcon, ListIcon } from "@/config/icons";
import Image from "next/image";

import eth from "@/public/assets/images/coin/eth.png";
import btc from "@/public/assets/images/coin/btc.png";
import matic from "@/public/assets/images/coin/matic.png";
import bnb from "@/public/assets/images/coin/bnb.png";

const Pairs = () => {
  const pairsData = [
    { name: "BTC", price: "59,800.00", volume: "10,000.00", change: "+2.5%", total: "$29,900.00", image: btc },
    { name: "ETH", price: "1,800.00", volume: "5,000.00", change: "-1.2%", total: "$4,500.00", image: eth },
    { name: "BNB", price: "1.00", volume: "50,000.00", change: "0.0%", total: "$50,000.00", image: bnb },
    { name: "MATIC", price: "180.00", volume: "1,000.00", change: "+0.8%", total: "$9,000.00", image: matic },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm dark:bg-card md:h-full">
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
        {pairsData.map((pair, index) => (
          <div key={index} className="grid grid-cols-5 items-center text-sm font-medium">
            <div className="flex items-center gap-2">
              <Image
                alt={pair.name}
                height={24}
                src={pair.image}
                style={{
                  aspectRatio: "24/24",
                  objectFit: "cover",
                }}
                width={24}
              />
              <span>{pair.name}</span>
            </div>
            <div className="text-right">{pair.price}</div>
            <div className="text-right">{pair.volume}</div>
            <div className={`text-right ${pair.change.includes("-") ? 'text-red-500' : 'text-green-500'}`}>{pair.change}</div>
            <div className="text-right">{pair.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pairs;
