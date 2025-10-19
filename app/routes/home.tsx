import type { Route } from "./+types/home";
import { Landing } from "../landing/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shipping Alone" },
    {
      name: "description",
      content:
        "Shipping Alone is a quiet journal on shipping products solo—field notes on momentum, tooling, and building without a team.",
    },
  ];
}

export default function Home() {
  return <Landing />;
}
