import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Returns false during SSR/first client render, true after hydration —
// without the setState-in-effect cascade of the classic mounted-flag pattern.
export function useHasMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
