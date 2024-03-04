/*
 * This API is currently not in use
 */

import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

import { EmailTemplate } from "@/app/components/email-template";
import emailSchema from "@/app/emailSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, number, message } = await request.json();

    const emailBody = {
      name,
      email,
      message,
      number: parseInt(number),
    };

    const parsed = await emailSchema.safeParse(emailBody);

    if (!parsed.success) {
      return NextResponse.json({
        message: "Error while parsing email data",
        parsed,
      });
    }

    const { data, error } = await resend.emails.send({
      from: "info <info@krushanu.com>",
      to: ["me@krushanu.com"],
      bcc: ["mohapatrakrushanu@gmail.com"],
      subject: `Email from ${name}`,
      react: EmailTemplate({
        name,
        email,
        number,
        message,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({
        message: "Error while sending email",
        error,
      });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ message: "api errror", error });
  }
}
