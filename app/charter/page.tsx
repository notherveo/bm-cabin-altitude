import { QuoteFlow } from "@/components/quote-flow";

export const metadata = { title: "Charter" };

export default function CharterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Private Charter
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Your journey, your way. Flexible options for every trip, from point-to-point to multi-leg itineraries.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <QuoteFlow />
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-medium">How It Works</h3>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">1</span>
                <span>Share your trip details</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">2</span>
                <span>We suggest the perfect aircraft</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">3</span>
                <span>Receive a detailed quote</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">4</span>
                <span>Board and enjoy your journey</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-medium">Why Charter</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>✓ Complete schedule flexibility</li>
              <li>✓ Direct flights to smaller airports</li>
              <li>✓ Privacy and security</li>
              <li>✓ Tailored amenities and catering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
