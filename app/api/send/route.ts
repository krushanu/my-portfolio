/*
* This API is currently not in use 
*/

import { Resend } from "resend";
import * as React from "react";
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  try {
    const { name, email, number, message } = await req.JSON();
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
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
