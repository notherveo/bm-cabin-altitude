export const fleet = [
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

export function getFleet() {
  return fleet;
}
