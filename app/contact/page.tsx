"use client";
import * as React from "react";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const contact = {
  email: "contact@cabinaltitude.example",
  phone: "+1 (555) 123-4567",
  address: "123 Aviation Way, Suite 100, New York, NY 10001",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Let's talk
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            Our concierge team is ready to help you plan your journey. Reach out with any questions or to request a quote.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{contact.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{contact.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Plane className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Office</p>
                <p className="font-medium">{contact.address}</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell us about your journey..."
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message <ArrowRight className="ml-2 size-4" />
            </Button>
          </form>
        </Card>
      </div>

      <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <h2 className="text-2xl font-semibold">Request a Quote</h2>
        <p className="mt-2 text-muted-foreground">
          Not sure what you need? Our concierge team will help you find the perfect aircraft for your journey.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Button size="lg" asChild>
            <a href={`mailto:${contact.email}`}>
              Email Us <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={`tel:${contact.phone}`}>
              Call Us <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
