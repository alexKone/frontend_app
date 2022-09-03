import { useState } from 'react';

export interface UseSidenav {
  isOpen: boolean;
  toggle: () => void;
}

export function useSidenav(): UseSidenav {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return { toggle, isOpen };
}

export default useSidenav;
