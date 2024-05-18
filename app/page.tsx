import { CryptoPriceCard } from "@/components/HomeComponents/cryptoPriceCard";
import { Features } from "@/components/HomeComponents/features";
import { Hero } from "@/components/HomeComponents/hero";
import { MarketUpdate } from "@/components/HomeComponents/marketUpdate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-5" id="home-containet">
      <Hero />
      <CryptoPriceCard />
      <Features />
      <MarketUpdate />
    </main>
  );
}
