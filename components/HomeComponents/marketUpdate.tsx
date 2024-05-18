import React from "react";
import { useCoinData } from "@/config/coinDataFetcher";

export function MarketUpdate() {
  const marketData = useCoinData();

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Market Update</h2>
        </div>
        <div className="overflow-x-auto rounded-lg shadow-sm border border-accent">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="w-[60px] py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="hidden md:table-cell py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                <th className="text-right py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="text-right hidden md:table-cell py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
              {marketData.map((item) => (
                <tr key={item.id}>
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="hidden md:table-cell py-4 px-6 whitespace-nowrap text-sm text-gray-500">{item.symbol}</td>
                  <td className="text-right py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">{item.price}</td>
                  <td className={`text-right hidden md:table-cell py-4 px-6 whitespace-nowrap text-sm font-medium ${item.change.includes("-") ? "text-red-500" : "text-green-500"}`}>{item.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}