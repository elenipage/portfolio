import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about a project, a question, or an LIS collaboration.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="font-heading text-4xl font-bold tracking-tight">Get in touch</h1>
      <p className="mt-3 text-muted">
        Whether it&apos;s a project enquiry, a question about my work at LIS, or
        just to say hello — I&apos;d love to hear from you.
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
