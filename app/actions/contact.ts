"use server";

import { contactSchema, type ContactFormState, type ContactFormValues } from "@/lib/validation";
import { getResendClient } from "@/lib/resend";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    company: formData.get("company"),
  });

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !(key in fieldErrors)) {
        fieldErrors[key as keyof typeof fieldErrors] = issue.message;
      }
    }
    return { status: "invalid", fieldErrors };
  }

  const { name, email, message, company } = parsed.data;

  // Honeypot field: real visitors leave it empty. If it's filled, pretend
  // success without sending anything, rather than tipping the bot off.
  if (company) {
    return { status: "success" };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!toEmail || !fromEmail) {
    console.error("Contact form is missing CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL env vars");
    return {
      status: "error",
      message: "The contact form isn't fully configured yet. Please email me directly instead.",
    };
  }

  try {
    const resend = getResendClient();
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `${message}\n\n—\nFrom: ${name} <${email}>`,
    });
    return { status: "success" };
  } catch (error) {
    console.error("Failed to send contact email", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again or email me directly.",
    };
  }
}
