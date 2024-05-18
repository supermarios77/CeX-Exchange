import { CryptoPriceCard } from "@/components/HomeComponents/cryptoPriceCard";
import { Features } from "@/components/HomeComponents/features";
import { Hero } from "@/components/HomeComponents/hero";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Hero />
      <CryptoPriceCard />
      <Features />
    </main>
  );
}
