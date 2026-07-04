export function FieldError({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <p id={id} role="alert" className="text-sm text-accent-rose">
      {children}
    </p>
  );
}
