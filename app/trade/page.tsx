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
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 md:gap-6 md:p-6">
      <OrderBook />
      <Pairs />
      <RecentTrades />
      <TradingChart />
      <OrderLogs />
      <Wallet />
      <BuySell />
    </div>
  );
}
