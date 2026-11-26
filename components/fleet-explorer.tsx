"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const cabins = [
  {
    id: "light",
    name: "Light Jet",
    seats: 6,
    range: "1,500 mi",
    speed: "450 kts",
    image: "https://picsum.photos/seed/light/1200/800",
    interior: "https://picsum.photos/seed/light-int/1200/800",
  },
  {
    id: "midsize",
    name: "Midsize Jet",
    seats: 8,
    range: "2,400 mi",
    speed: "470 kts",
    image: "https://picsum.photos/seed/midsize/1200/800",
    interior: "https://picsum.photos/seed/midsize-int/1200/800",
  },
  {
    id: "heavy",
    name: "Heavy Jet",
    seats: 12,
    range: "3,700 mi",
    speed: "490 kts",
    image: "https://picsum.photos/seed/heavy/1200/800",
    interior: "https://picsum.photos/seed/heavy-int/1200/800",
  },
  {
    id: "ultra",
    name: "Ultra Long-Range",
    seats: 14,
    range: "6,000 mi",
    speed: "500 kts",
    image: "https://picsum.photos/seed/ultra/1200/800",
    interior: "https://picsum.photos/seed/ultra-int/1200/800",
  },
];

export function FleetExplorer() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % cabins.length);
  const prev = () => setIndex((i) => (i - 1 + cabins.length) % cabins.length);

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Explore the fleet
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Drag to rotate the cabin view. Each aircraft offers a different balance of range, speed, and comfort.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Button variant="outline" onClick={prev}>
              <ArrowLeft className="size-4" /> Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              {index + 1} / {cabins.length}
            </span>
            <Button variant="outline" onClick={next}>
              Next <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-white/10">
            <div className="relative aspect-[4/3]">
              <img
                src={cabins[index].image}
                alt={cabins[index].name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-muted-foreground">{cabins[index].name}</p>
                <p className="text-2xl font-semibold">{cabins[index].seats} seats · {cabins[index].range}</p>
              </div>
            </div>

            <div className="relative aspect-[4/3]">
              <img
                src={cabins[index].interior}
                alt={`${cabins[index].name} interior`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-muted-foreground">Cabin Interior</p>
                <p className="text-lg font-medium">{cabins[index].speed} · {cabins[index].range}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <Info className="size-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Drag to rotate the cabin view.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cabins.map((c, i) => (
          <Card key={c.id} className={cn(i === index && "ring-2 ring-primary")}>
            <div className="space-y-1">
              <p className="font-medium">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.class}</p>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{c.seats} seats</span>
              <span className="text-muted-foreground">{c.range}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
