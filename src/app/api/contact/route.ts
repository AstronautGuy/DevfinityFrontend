import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

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

    // We will attempt to send via nodemailer if configured, otherwise just log
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("[MAIL_MOCK] Missing SMTP variables. Payload:", validatedData.data);
      // Faking success for local dev if missing vars
      return NextResponse.json({ message: "Successfully received message!" }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || "system@devfinity.net",
      to: "info@devfinity.net",
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
    };

    await transporter.sendMail(mailOptions);
    console.log("Successfully sent email to info@devfinity.net via SMTP.");

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
