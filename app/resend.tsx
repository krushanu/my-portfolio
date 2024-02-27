import { Resend } from "resend";

const resend = new Resend("re_F9w6zhTV_JfS9BESKsqeEmVxqGXqPceiQ");

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "mohapatrakrushanu@gmail.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});
