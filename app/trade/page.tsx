import React from 'react';
import TradingChart from "@/components/MarketComponents/TradingChart";
import Pairs from "@/components/MarketComponents/Pairs";
import Wallet from "@/components/MarketComponents/Wallet";
import BuySell from '@/components/MarketComponents/BuySell';
import OrderLogs from "@/components/MarketComponents/OrderLogs";
import RecentTrades from '@/components/MarketComponents/RecentTrades';
import OrderBook from "@/components/MarketComponents/OrderBook";

export default function Market() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:gap-1 md:p-2">
      <div className="md:col-span-1">
        <OrderBook />
      </div>

      <div className="md:col-span-2 flex flex-col md:flex-row md:gap-4">
        <div className="flex-1">
          <TradingChart />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <Pairs />
          <RecentTrades />
        </div>
      </div>

      <div className="md:col-span-1">
        <OrderLogs />
        <Wallet />
        <BuySell />
      </div>
    </div>
  );
}