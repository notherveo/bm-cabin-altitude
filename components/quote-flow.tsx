"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const steps = [
  { id: "type", label: "Trip Type" },
  { id: "passengers", label: "Passengers" },
  { id: "dates", label: "Dates" },
  { id: "preferences", label: "Preferences" },
  { id: "review", label: "Review" },
];

const tripTypes = [
  { id: "point-to-point", label: "Point-to-Point" },
  { id: "multi-leg", label: "Multi-Leg" },
  { id: "positioning", label: "Positioning" },
  { id: "repositioning", label: "Repositioning" },
];

const preferences = [
  { id: "catering", label: "Catering" },
  { id: "ground-transport", label: "Ground Transport" },
  { id: "crew", label: "Crew" },
  { id: "pet", label: "Pet Travel" },
];

export function QuoteFlow() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    type: tripTypes[0].id,
    passengers: 1,
    dates: "",
    preferences: [] as string[],
  });

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const progress = ((step + 1) / steps.length) * 100;

  const handleInputChange = (field: keyof typeof data, value: string) => {
    setData((d) => ({ ...d, [field]: value }));
  };

  const handlePreferenceToggle = (id: string) => {
    setData((d) => ({
      ...d,
      preferences: d.preferences.includes(id)
        ? d.preferences.filter((p) => p !== id)
        : [...d.preferences, id],
    }));
  };

  const currentStep = steps[step];

  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Plane className="size-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Step {step + 1} of {steps.length}</p>
            <p className="font-medium">{currentStep.label}</p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          {progress.toFixed(0)}%
        </div>
      </div>

      <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full rounded-full bg-primary"
        />
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            {step === 0 && (
              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Trip Type</h3>
                <div className="grid gap-3">
                  {tripTypes.map((t) => (
                    <Button
                      key={t.id}
                      variant={data.type === t.id ? "default" : "outline"}
                      onClick={() => handleInputChange("type", t.id)}
                    >
                      {t.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Number of Passengers</h3>
                <div className="flex items-center gap-4">
                  <Button variant="outline" onClick={() => handleInputChange("passengers", String(Math.max(1, parseInt(data.passengers) - 1)))}>
                    −
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    max="15"
                    value={data.passengers}
                    onChange={(e) => handleInputChange("passengers", e.target.value)}
                    className="w-20 text-center"
                  />
                  <Button variant="outline" onClick={() => handleInputChange("passengers", String(Math.min(15, parseInt(data.passengers) + 1)))}>
                    +
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Travel Dates</h3>
                <Input
                  type="date"
                  value={data.dates}
                  onChange={(e) => handleInputChange("dates", e.target.value)}
                  placeholder="Select departure date"
                />
              </div>
            )}

            {step === 3 && (
              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Preferences</h3>
                <div className="grid gap-2">
                  {preferences.map((p) => (
                    <Button
                      key={p.id}
                      variant={data.preferences.includes(p.id) ? "default" : "outline"}
                      onClick={() => handlePreferenceToggle(p.id)}
                    >
                      {p.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-medium">Review Your Trip</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trip Type</span>
                    <span className="font-medium">{tripTypes.find((t) => t.id === data.type)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Passengers</span>
                    <span className="font-medium">{data.passengers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Departure Date</span>
                    <span className="font-medium">{data.dates || "Not specified"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Preferences</span>
                    <span className="font-medium">{data.preferences.length > 0 ? data.preferences.length : "None"}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  This is an estimate. Final pricing will be provided by our concierge after review.
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={prev} disabled={step === 0}>
              <ArrowRight className="size-4 rotate-180" /> Previous
            </Button>
            <Button onClick={next} disabled={step === steps.length - 1}>
              {step === steps.length - 1 ? "Submit" : "Next"} <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24 space-y-4">
            <h3 className="font-medium">What's Next?</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              {[
                "Our concierge will review your trip details.",
                "We'll suggest the best aircraft for your journey.",
                "Receive a detailed quote within 24 hours.",
                "Book your flight with confidence.",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="size-4 text-primary shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
