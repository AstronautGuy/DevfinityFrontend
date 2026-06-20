import type { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Custom ERP Development & Low-Latency Software Engineering | Devfinity",
  description: "Deep-dive operational software design: from custom, multi-nested ERP systems featuring granular replacement registers to advanced relational database index tuning.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
