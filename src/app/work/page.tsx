import type { Metadata } from "next";
import WorkClient from "@/components/WorkClient";

export const metadata: Metadata = {
  title: "Enterprise Production Deployments & Architectural Case Studies | Devfinity",
  description: "Real-world engineering case studies proving system stability across custom industrial ERP architectures, complex relational schemas, and lightweight UI platforms.",
};

export default function WorkPage() {
  return <WorkClient />;
}
