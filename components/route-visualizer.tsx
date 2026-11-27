"use client";
import * as React from "react";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Plane, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const cities = [
  { code: "JFK", name: "New York (JFK)" },
  { code: "LAX", name: "Los Angeles (LAX)" },
  { code: "LHR", name: "London (LHR)" },
  { code: "DXB", name: "Dubai (DXB)" },
  { code: "HND", name: "Tokyo (HND)" },
  { code: "FRA", name: "Frankfurt (FRA)" },
];

const aircraft = [
  {
    name: "Light Jet",
    range: "1,500 mi",
    class: "Light",
    price: "$2,500 / hr",
  },
  {
    name: "Midsize Jet",
    range: "2,400 mi",
    class: "Midsize",
    price: "$3,800 / hr",
  },
  {
    name: "Heavy Jet",
    range: "3,700 mi",
    class: "Heavy",
    price: "$5,200 / hr",
  },
  {
    name: "Ultra Long-Range",
    range: "6,000 mi",
    class: "Ultra Long-Range",
    price: "$7,500 / hr",
  },
];

function Globe() {
  return (
    <div className="relative size-[320px] overflow-hidden rounded-full bg-[#0F192E]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1A2744] via-[#0F192E] to-[#0B1426]" />
      {/* Abstract continents */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-white/5" />
      <div className="absolute top-1/3 right-1/4 w-20 h-24 rounded-full bg-white/5" />
      <div className="absolute bottom-1/3 left-1/3 w-28 h-20 rounded-full bg-white/5" />
      {/* Flight lines */}
      <div className="absolute top-1/2 left-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 w-[1px] h-[120%] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export function RouteVisualizer() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [selected, setSelected] = useState(aircraft[0]);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Where will you go?
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Pick your origin and destination. We'll suggest the right aircraft for the journey.
          </p>

          <form onSubmit={handleSearch} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="origin">Origin</Label>
                <div className="relative">
                  <Plane className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="origin"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="New York (JFK)"
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <div className="relative">
                  <Plane className="absolute right-3 top-1/2 size-4 -translate-y-1/2 rotate-180 text-muted-foreground" />
                  <Input
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="London (LHR)"
                    className="pr-9"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Aircraft Class</Label>
              <div className="grid gap-2 sm:grid-cols-2">
                {aircraft.map((a) => (
                  <Button
                    key={a.name}
                    type="button"
                    variant={selected.name === a.name ? "default" : "outline"}
                    onClick={() => setSelected(a)}
                  >
                    {a.name}
                  </Button>
                ))}
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">
              {showResult ? "Visualize Route" : "Visualize Route"} <ArrowRight className="ml-2 size-4" />
            </Button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Globe />

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 w-full max-w-md space-y-4"
            >
              <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Plane className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Estimated Flight Time</p>
                    <p className="text-2xl font-semibold">4h 15m</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Range</p>
                  <p className="text-lg font-medium">{selected.range}</p>
                </div>
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm font-medium mb-2">Recommended Aircraft</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{selected.name}</p>
                    <p className="text-sm text-muted-foreground">{selected.class}</p>
                  </div>
                  <p className="text-sm font-medium">{selected.price}</p>
                </div>
              </div>

              <Button variant="outline" onClick={() => setShowResult(false)}>
                <X className="size-4" /> Clear
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
