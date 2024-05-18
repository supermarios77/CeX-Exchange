import { CryptoPriceCard } from "@/components/Home/cryptoPriceCard";
import { Hero } from "@/components/Home/hero";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Hero />
      <CryptoPriceCard />
    </main>
  );
}
