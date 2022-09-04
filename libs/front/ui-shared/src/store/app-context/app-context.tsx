import { createContext, useCallback, useState } from 'react';
import { CurrentUserType, GetProfileType } from '../../../../../../apps/front/src/types';

interface AppContextProps {
  isAuth: boolean;
  currentUser: CurrentUserType | null;
  authenticate: () => void;
  logout: () => void;
  addUser: (data: any) => void;
  profile: GetProfileType | null;
  addProfile: (profile: GetProfileType|null) => void | null;
}
interface AppProviderProps {
  children: React.ReactNode
}

const defaultContext = {
  profile: null,
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
  },
  addProfile: () => null
}
export const AppContext = createContext<AppContextProps>(defaultContext);

const AppProvider = ({ children }: AppProviderProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [profile, setProfile] = useState<GetProfileType | null>(null);
  const [currentUser, setCurrentUser] = useState<CurrentUserType | null>(null);
  const authenticate = useCallback(() => setIsAuth(true), []);
  const logout = useCallback(() => setIsAuth(false), []);
  const addUser = (user: any) => setCurrentUser(user);
  const addProfile = (profile: any) => setProfile(profile);

  return (
    <AppContext.Provider value={{
      isAuth,
      currentUser,
      authenticate,
      logout,
      addUser,
      profile,
      addProfile
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
