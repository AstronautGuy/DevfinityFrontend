import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  scopes: z.array(z.string()).optional(),
  capacity: z.string().optional(),
  briefing: z.string().min(10),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const validatedData = contactSchema.safeParse(body);
    
    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Invalid data provided", details: validatedData.error.issues },
        { status: 400 }
      );
    }

    const { name, email, scopes, capacity, briefing } = validatedData.data;

    if (!process.env.RESEND_API_KEY) {
      console.warn("[MAIL_MOCK] Missing RESEND_API_KEY. Payload:", validatedData.data);
      return NextResponse.json({ message: "Successfully received message! (Simulated)" }, { status: 200 });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || "onboarding@resend.dev",
      to: ["info@devfinity.net"],
      subject: `[SYSTEM_INTAKE] New Pipeline from ${name}`,
      text: `
SYSTEM INTAKE PIPELINE:
-----------------------
CLIENT: ${name}
EMAIL: ${email}
CAPACITY: ${capacity || "N/A"}
SCOPES: ${(scopes || []).join(", ")}

CORE BRIEFING:
${briefing}
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Successfully executed connection pipeline!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
