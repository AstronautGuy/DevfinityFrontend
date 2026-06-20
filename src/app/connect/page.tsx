import type { Metadata } from "next";
import ConnectClient from "@/components/ConnectClient";

export const metadata: Metadata = {
  title: "Initialize System Deployment | Custom Technical Consultation",
  description: "Submit your software infrastructure blueprints to Devfinity's intake terminal. Secure, structured onboarding for high-performance software projects.",
};

export default function ConnectPage() {
  return <ConnectClient />;
}
