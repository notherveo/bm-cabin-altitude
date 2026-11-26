"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { KenBurns } from "@/components/kenburns";
import { RouteVisualizer } from "@/components/route-visualizer";
import { Reveal } from "@/components/reveal";

const hero = "https://picsum.photos/seed/hero/1920/1080";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <KenBurns
        src={hero}
        alt="Private jet interior at sunset"
        className="relative z-0"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            <Sparkles className="size-3" />
            Above the ordinary
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-7xl md:text-8xl">
            Your altitude.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/80">
            Private aviation reimagined. Seamless charter, flexible membership, and an aircraft that fits your journey.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105">
                Request a Quote <ArrowRight className="size-4" />
              </button>
            </Link>
            <Link href="/fleet">
              <button className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-transform hover:scale-105">
                Explore the Fleet
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <RouteVisualizer />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Membership for the modern traveler
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Flexible jet card options. No long-term commitments, just the flexibility you need when the moment calls.
            </p>
            <Link href="/jet-card">
              <button className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:underline">
                Explore Jet Cards <ArrowRight className="size-4" />
              </button>
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="size-6" />
              </div>
              <div>
                <p className="font-medium">Flexible Options</p>
                <p className="text-sm text-muted-foreground">No long-term commitments</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <p className="font-medium">Top-Tier Safety</p>
                <p className="text-sm text-muted-foreground">Every flight meets the highest standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "Curated Fleet",
              body: "From light jets to ultra long-range aircraft, we match the right aircraft to your journey.",
            },
            {
              icon: ShieldCheck,
              title: "Verified Safety",
              body: "Every aircraft and crew member undergoes rigorous safety checks and continuous training.",
            },
            {
              icon: ArrowRight,
              title: "Seamless Experience",
              body: "From the first call to landing, our concierge team handles every detail.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to take flight?
          </h2>
          <p className="mt-4 max-w-md mx-auto text-muted-foreground">
            Our concierge team is ready to help you plan your journey.
          </p>
          <Link href="/contact">
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105">
              Get in Touch <ArrowRight className="size-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
