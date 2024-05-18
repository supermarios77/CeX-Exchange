import { useEffect, useState } from "react";

interface CoinData {
  id: number;
  icon: string;
  name: string;
  unit: string;
  price: string;
  sale: string;
  class: string;
}

export const useCoinData = () => {
  const [coinData, setCoinData] = useState<CoinData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ultronxchange.io/api/v1/home-page/");
        const data = await response.json();

        const processedCoinData = Object.entries(data.pairs_data).map(([pair, pairData]: [string, any], index) => ({
          id: index + 1,
          icon: `@/assets/images/coin/${pair.split("-")[0].toLowerCase()}.png`,
          name: pair.split("-")[0],
          unit: pair.split("-")[1],
          price: pairData.price,
          sale: `${pairData.price_24h.toFixed(2)}%`,
          class: pairData.price_24h < 0 ? "down" : "up",
        }));

        setCoinData(processedCoinData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return coinData;
};