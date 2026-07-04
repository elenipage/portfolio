import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Your message should be at least 10 characters.")
    .max(2000, "Your message is too long — please keep it under 2000 characters."),
  // Honeypot: real visitors never fill this in; bots often do.
  company: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string }
  | { status: "invalid"; fieldErrors: Partial<Record<keyof ContactFormValues, string>> };

export const initialContactFormState: ContactFormState = { status: "idle" };
