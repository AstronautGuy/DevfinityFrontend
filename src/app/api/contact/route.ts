import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  scopes: z.array(z.string()).optional(),
  capacity: z.string().optional(),
  briefing: z.string().min(10),
});

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

    // The access key for Web3Forms is required to route to info@devfinity.net
    const accessKey = process.env.WEB3FORMS_KEY;

    if (!accessKey) {
      console.warn("[MAIL_MOCK] Missing WEB3FORMS_KEY. Payload:", validatedData.data);
      return NextResponse.json({ message: "Successfully received message! (Simulated)" }, { status: 200 });
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        capacity: capacity || "N/A",
        scopes: (scopes || []).join(", "),
        message: briefing,
        subject: `[SYSTEM_INTAKE] New Pipeline from ${name}`,
      }),
    });

    const result = await res.json();
    
    if (!res.ok || !result.success) {
      console.error("Web3Forms API Error:", result);
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
