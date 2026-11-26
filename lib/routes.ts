export const cities = [
  { code: "JFK", name: "New York (JFK)" },
  { code: "LAX", name: "Los Angeles (LAX)" },
  { code: "LHR", name: "London (LHR)" },
  { code: "DXB", name: "Dubai (DXB)" },
  { code: "HND", name: "Tokyo (HND)" },
  { code: "FRA", name: "Frankfurt (FRA)" },
];

export const aircraft = [
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

export function getRoutes() {
  return { cities, aircraft };
}
