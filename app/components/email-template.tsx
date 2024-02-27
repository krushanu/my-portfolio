import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  number: number;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  number,
  message,
}) => (
  <>
    <h1>Message from {name}</h1>
    <section>
      <h4>
        <strong>Name: {name}</strong>
      </h4>
    </section>
    <section>
      <h4>
        <strong>Email Id: {email}</strong>
      </h4>
    </section>
    <section>
      <h4>
        <strong>Contact Number: {number}</strong>
      </h4>
    </section>
    <section>
      <h4>Message: </h4>
      <article>
        <p>{message}</p>
      </article>
    </section>
  </>
);
