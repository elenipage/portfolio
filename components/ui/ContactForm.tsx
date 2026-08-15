"use client";

import { useActionState, useEffect, useRef, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContactForm } from "@/app/actions/contact";
import {
  contactSchema,
  initialContactFormState,
  type ContactFormValues,
} from "@/lib/validation";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { Button } from "./Button";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactFormState
  );
  const [, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", company: "" },
  });

  const successRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      reset();
      successRef.current?.focus();
    } else if (state.status === "error") {
      errorRef.current?.focus();
    } else if (state.status === "invalid") {
      const firstField = Object.keys(state.fieldErrors)[0] as
        | keyof ContactFormValues
        | undefined;
      if (firstField) setFocus(firstField);
    }
  }, [state, reset, setFocus]);

  function onValid(data: ContactFormValues) {
    const formData = new FormData();
    formData.set("name", data.name);
    formData.set("email", data.email);
    formData.set("message", data.message);
    formData.set("company", data.company ?? "");
    startTransition(() => {
      formAction(formData);
    });
  }

  if (state.status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="border border-border border-l-4 border-l-accent-gold bg-background p-6 text-foreground outline-none"
      >
        <p className="font-heading text-lg font-semibold">Message sent — thank you.</p>
        <p className="mt-2 text-muted">
          I read every enquiry myself and&apos;ll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onValid)} noValidate className="flex flex-col gap-5">
      {state.status === "error" && (
        <div
          ref={errorRef}
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
          className="border border-border border-l-4 border-l-accent-rose bg-background p-4 text-sm text-foreground outline-none"
        >
          {state.message}
        </div>
      )}

      <Input
        label="Name"
        autoComplete="name"
        error={errors.name?.message ?? (state.status === "invalid" ? state.fieldErrors.name : undefined)}
        {...register("name")}
      />

      <Input
        label="Email"
        type="email"
        autoComplete="email"
        error={errors.email?.message ?? (state.status === "invalid" ? state.fieldErrors.email : undefined)}
        {...register("email")}
      />

      <TextArea
        label="Message"
        error={errors.message?.message ?? (state.status === "invalid" ? state.fieldErrors.message : undefined)}
        {...register("message")}
      />

      {/* Honeypot — hidden from sighted and assistive-tech users, present for naive bots. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <Button pending={pending} className="self-start">
        Send message
      </Button>
    </form>
  );
}
