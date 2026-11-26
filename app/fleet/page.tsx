import { FleetExplorer } from "@/components/fleet-explorer";

export const metadata = { title: "Fleet" };

export default function FleetPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Our Fleet
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          From light jets to ultra long-range aircraft, we have the perfect aircraft for your journey.
        </p>
      </div>

      <FleetExplorer />
    </div>
  );
}
