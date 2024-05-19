"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { FilterIcon } from "@/config/icons";

interface Order {
  price: string;
  amount: string;
  total: string;
}

const OrderBook = () => {
  const [buyOrders, setBuyOrders] = useState<Order[]>([]);
  const [sellOrders, setSellOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const coreUrl = process.env.NEXT_PUBLIC_CORE_URL;
        if (!coreUrl) {
          throw new Error("Core URL is not defined");
        }

        const response = await fetch(`${coreUrl}/api/schema/swagger-ui/`);
        const data = await response.json();
        setBuyOrders(data.buyOrders);
        setSellOrders(data.sellOrders);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm dark:bg-card">
      <div className="px-4 py-3 border-b dark:border-accent">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Orderbook</h3>
          <Button size="sm" variant="ghost">
            <FilterIcon className="h-5 w-5" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-3 text-sm font-medium text-gray-500 dark:text-gray-400">
          <div>Price (USDT)</div>
          <div className="text-right">Amount (BTC)</div>
          <div className="text-right">Total (USDT)</div>
        </div>
        <div className="grid grid-cols-3 text-sm font-medium text-red-500">
          <div>59,800.00</div>
          <div className="text-right">0.5000</div>
          <div className="text-right">29,900.00</div>
        </div>
        <div className="grid grid-cols-3 text-sm font-medium text-red-500">
          <div>59,750.00</div>
          <div className="text-right">0.2500</div>
          <div className="text-right">14,937.50</div>
        </div>
        <div className="grid grid-cols-3 text-sm font-medium text-green-500">
          <div>59,700.00</div>
          <div className="text-right">0.1000</div>
          <div className="text-right">5,970.00</div>
        </div>
        <div className="grid grid-cols-3 text-sm font-medium text-green-500">
          <div>59,650.00</div>
          <div className="text-right">0.0750</div>
          <div className="text-right">4,473.75</div>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
