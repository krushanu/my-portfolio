import { z } from "zod";

const emailSchema = z.object({
  name: z.string().min(1, "Name is required").max(32),
  email: z.string().min(1, "Email is required").email(),
  number: z
    .number()
    .min(1, "Please enter a valid contact number in the form of +xxxxxxxxxxx ")
    .max(99999999999),
  message: z.string().min(1, "Please enter a valid message ").max(99999999999),
});

export default emailSchema;
