// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import GoogleAuthCallback from '../components/GoogleAuthCallback';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/auth/Login';
import Favoris from '../pages/main/Favoris/Favoris';
import Homepage from '../pages/main/Homepage/Homepage';
import Messages from '../pages/main/Messages/Messages';
import MyAccount from '../pages/main/MyAccount/MyAccount';
import ProfileDetails from '../pages/main/ProfileDetails/ProfileDetails';
import NotFound from '../pages/NotFound';
// import styles from './app.module.scss';

export function App() {

  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/profiles', element: <Homepage /> },
      { path: '/profiles/:id', element: <ProfileDetails /> },
      { path: '/messages', element: <Messages /> },
      { path: '/my-account', element: <MyAccount /> },
      { path: '/favoris', element: <Favoris /> },
      { path: '/404', element: <NotFound /> },
      { path: 'auth', element: <Navigate to='/login' /> },
      { path: '*', element: <Navigate to='/404' /> },
    ]
  };

  const authRoutes = {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'google/callback', element: <GoogleAuthCallback />},
      { path: '*', element: <Navigate to='/404' />},
    ]
  };

  return useRoutes([mainRoutes, authRoutes]);
}

export default App;
