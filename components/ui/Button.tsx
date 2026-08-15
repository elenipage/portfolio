import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { PixelSpinner } from "./PixelSpinner";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  pending?: boolean;
};

export function Button({ pending, children, className, disabled, ...props }: ButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled || pending}
      aria-busy={pending || undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60",
        className
      )}
      {...props}
    >
      {pending ? (
        <>
          <PixelSpinner label="Sending" />
          Sending&hellip;
        </>
      ) : (
        children
      )}
    </button>
  );
}
