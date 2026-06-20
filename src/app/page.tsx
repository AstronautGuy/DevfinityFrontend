import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Devfinity | Custom Web Development & Type-Safe Enterprise Architectures",
  description: "Bespoke full-stack web application engineering for complex corporate infrastructures. We replace rigid templates with low-latency, role-based database environments.",
};

export default function Home() {
  return <HomeClient />;
}
