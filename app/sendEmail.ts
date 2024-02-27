import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from "resend";
import { redirect } from "next/navigation";
import emailSchema from "./emailSchema";

const sendEmail = async (formData: FormData) => {
  "use server";

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailBody = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      number: parseInt(formData.get("number") as string, 10),
      message: formData.get("message") as string,
    };

    const parsed = emailSchema.safeParse(emailBody);

    if (parsed.success) {
      const { data, error } = await resend.emails.send({
        from: "info <info@krushanu.com>",
        to: ["me@krushanu.com"],
        bcc: ["mohapatrakrushanu@gmail.com"],
        subject: `Email from ${emailBody.name}`,
        react: EmailTemplate(emailBody) as React.ReactElement,
      });
      if (error) {
        console.log("Resend Error ", error);
        redirect("/");
      }
      console.log("Resend success ", data);
      redirect("/thankyou");
    } else {
      console.log("Parse error ", parsed.error);
      redirect("/universe");
    }
  } catch (error) {
    console.log("EmailBody Error ", error);
    // redirect("/work");
  }
};

export default sendEmail;
