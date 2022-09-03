import { createContext, useCallback, useState } from 'react';
import styles from './app-context.module.scss';

interface AppContextProps {
  isAuth: boolean;
  currentUser: CurrentUserProps | null;
  authenticate: () => void;
  logout: () => void;
  addUser: (data: any) => void;
}
interface AppProviderProps {
  children: React.ReactNode
}

interface CurrentUserProps {
  id: string;
  profile: {
    data: {
      attributes: {
        firstname: string;
        gender: string;
      }
    }
  }
}

const defaultContext = {
  isAuth: false,
  currentUser: null,
  authenticate: () => {
    return false;
  },
  logout: () => {
    return null;
  },
  addUser: () => {
    return null;
  }
}
export const AppContext = createContext<AppContextProps>(defaultContext);

const AppProvider = ({ children }: AppProviderProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUserProps | null>(null);
  const authenticate = useCallback(() => setIsAuth(true), []);
  const logout = useCallback(() => setIsAuth(false), []);
  const addUser = (user: any) => setCurrentUser(user);

  return (
    <AppContext.Provider value={{
      isAuth,
      currentUser,
      authenticate,
      logout,
      addUser
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
