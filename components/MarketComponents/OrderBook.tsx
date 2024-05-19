"use client"
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
    <div className="bg-white rounded-lg shadow-sm dark:bg-card md:w-[500px] md:mr-1">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Orderbook</h3>
          <Button size="sm" variant="ghost">
            <FilterIcon className="h-5 w-5" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
        <div className="grid grid-cols-3 text-sm font-medium text-gray-500 dark:text-gray-400">
          <div>Price (USDT)</div>
          <div className="text-left">Amount (BTC)</div>
          <div className="text-left">Total (USDT)</div>
        </div>
        {buyOrders.map((order, index) => (
          <div key={index} className="grid grid-cols-3 text-sm font-medium text-red-500">
            <div>{order.price}</div>
            <div className="text-left">{order.amount}</div>
            <div className="text-left">{order.total}</div>
          </div>
        ))}
        {sellOrders.map((order, index) => (
          <div key={index} className="grid grid-cols-3 text-sm font-medium text-green-500">
            <div>{order.price}</div>
            <div className="text-left">{order.amount}</div>
            <div className="text-left">{order.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBook;