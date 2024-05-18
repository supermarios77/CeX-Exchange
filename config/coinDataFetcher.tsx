import { useEffect, useState } from "react";

export interface CoinData {
  id: number;
  icon: string;
  name: string;
  unit: string;
  price: string;
  sale: string;
  class: string;
  symbol: string;
  change: string;
}

export const useCoinData = () => {
  const [coinData, setCoinData] = useState<CoinData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ultronxchange.io/api/v1/home-page/");
        const data = await response.json();
        const coinPairs = ["ULC-USDT", "UARC-USDT", "BTC-USDT", "ETH-USDT", "BNB-USDT", "MATIC-USDT", "TRX-USDT"];

        const newData: CoinData[] = coinPairs.map((pair, index) => {
          const pairData = data.pairs_data[pair];
          return {
            id: index + 1,
            icon: `/public/assets/images/coin/${pair.split("-")[0].toLowerCase()}.png`,
            name: pair.split("-")[0],
            unit: pair.split("-")[0],
            price: pairData.price.toString(),
            sale: `${pairData.price_24h.toFixed(2)}%`,
            class: pairData.price_24h < 0 ? "down" : "up",
            symbol: pairData.pair_data.base.code,
            change: `${pairData.price_24h}%`,
          };
        });

        setCoinData(newData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return coinData;
};