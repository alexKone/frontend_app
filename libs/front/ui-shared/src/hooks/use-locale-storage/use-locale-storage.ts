import { useState, useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseLocaleStorage {
  count: number;
  increment: () => void;
}

export function useLocaleStorage(): UseLocaleStorage {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  return { count, increment };
}

export default useLocaleStorage;
