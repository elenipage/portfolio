import { PixelSpinner } from "@/components/ui/PixelSpinner";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <PixelSpinner />
    </div>
  );
}
