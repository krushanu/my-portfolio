import { z } from "zod";

const emailSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .max(32),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Please enter a valid and complete email ID",
    })
    .email(),
  number: z
    .number({
      invalid_type_error:
        "Please enter a valid contact number in the form of +xxxxxxxxxxx ",
    })
    .max(99999999999),
  message: z.string({
    required_error: "Message is required",
  }),
});

export default emailSchema;
