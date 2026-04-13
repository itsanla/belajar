import Image from "next/image"
import Pricing from "@/components/home/pricing"

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
        <div className="relative h-screen">
          <Image
            src="/hero.webp"
            alt="hero"
            fill
            className="object-cover"
          />
          <p className="absolute z-10 text-white text-6xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            BRING YOU TO THE FITURE
          </p>
        </div>
        <Pricing />
    </div>
  );
}
