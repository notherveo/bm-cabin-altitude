import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tiers = [
  {
    name: "Silver",
    price: "$15,000 / mo",
    flights: "10 flights",
    features: ["Standard aircraft access", "24/7 support", "Priority booking"],
  },
  {
    name: "Gold",
    price: "$30,000 / mo",
    flights: "25 flights",
    features: ["Midsize aircraft access", "Dedicated concierge", "Complimentary catering"],
  },
  {
    name: "Platinum",
    price: "$50,000 / mo",
    flights: "Unlimited",
    features: ["Heavy aircraft access", "Global support", "Exclusive airport lounges"],
  },
];

export const metadata = { title: "Jet Card" };

export default function JetCardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Jet Card Membership
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Flexible membership options designed for the modern traveler. Choose the level that fits your travel needs.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier, i) => (
          <Card key={tier.name} className={i === 1 ? "ring-2 ring-primary" : ""}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                {i === 1 && <Badge variant="secondary" className="bg-primary text-primary-foreground">Popular</Badge>}
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-medium">{tier.price}</p>
                <p className="text-sm text-muted-foreground">{tier.flights} flights included</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="w-full rounded-lg border border-white/10 py-2.5 text-sm font-medium text-primary hover:bg-primary/10">
                  Learn More
                </button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Why Choose a Jet Card?</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>✓ Predictable monthly costs</li>
              <li>✓ No long-term lease commitments</li>
              <li>✓ Priority booking and support</li>
              <li>✓ Flexible usage across our fleet</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
                Get Started <ArrowRight className="size-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
