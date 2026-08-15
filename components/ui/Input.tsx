import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { FieldError } from "./FieldError";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, id, name, className, ...props },
  ref
) {
  const inputId = id ?? name;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium">
        {label}
      </label>
      <input
        ref={ref}
        id={inputId}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(
          "border border-border bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus-visible:border-accent-rose",
          error && "border-accent-rose",
          className
        )}
        {...props}
      />
      {error && <FieldError id={errorId}>{error}</FieldError>}
    </div>
  );
});
