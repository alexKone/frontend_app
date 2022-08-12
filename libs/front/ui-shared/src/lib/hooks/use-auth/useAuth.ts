import { useState, useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseAuth {
  isAuth: boolean;
  authenticate: () => void;
  logout: () => void;
  currentUser: any;
  addUser: (data: any) => void;
}

export function useAuth(): UseAuth {
  // const [count, setCount] = useState(0);
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const authenticate = useCallback(() => setIsAuth(true), []);
  const logout = useCallback(() => setIsAuth(false), []);
  const addUser = useCallback((user: any) => setCurrentUser(user), [])
  return { isAuth, authenticate, logout, addUser, currentUser };
}

export default useAuth;
