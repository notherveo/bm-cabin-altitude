import { ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const safety = [
  {
    title: "Rigorous Maintenance",
    body: "Every aircraft undergoes regular, comprehensive maintenance checks by certified professionals.",
  },
  {
    title: "Experienced Crew",
    body: "Our pilots and cabin crew are highly trained, experienced, and continuously updated on the latest safety protocols.",
  },
  {
    title: "Advanced Technology",
    body: "State-of-the-art avionics and safety systems ensure the highest level of flight safety.",
  },
  {
    title: "Emergency Protocols",
    body: "Comprehensive emergency procedures and regular drills ensure our team is prepared for any situation.",
  },
];

export const metadata = { title: "Safety" };

export default function SafetyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
          <ShieldCheck className="size-6" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Safety First
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Your safety is our highest priority. Every flight meets the highest industry standards.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {safety.map((item, i) => (
          <Card key={item.title} className="p-6">
            <h3 className="font-medium">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <h2 className="text-2xl font-semibold">Safety Commitment</h2>
        <p className="mt-4 text-muted-foreground">
          We maintain the highest safety standards across our entire fleet and operations. Every aircraft is certified, every crew member is trained, and every flight is monitored. Our commitment to safety extends beyond regulatory requirements — it's the foundation of everything we do.
        </p>
      </div>
    </div>
  );
}
