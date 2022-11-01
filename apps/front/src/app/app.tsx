import { Navigate, Routes, useRoutes } from 'react-router-dom';
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
import Checkout from '../pages/main/Checkout/Checkout';
import Register from '../pages/auth/Register';
import ROUTES from '../routes';
import Products from '../pages/main/Products/Products';
import ProductDetails from '../pages/main/Products/ProductDetails';
import Payment from '../pages/main/Payment';

export function App() {

  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: ROUTES.home, element: <Homepage /> },
      { path: ROUTES.profiles, element: <Homepage /> },
      { path: ROUTES.profileDetails, element: <ProfileDetails /> },
      { path: ROUTES.messages, element: <Messages /> },
      { path: ROUTES.myAccount, element: <MyAccount /> },
      { path: ROUTES.favoris, element: <Favoris /> },
      { path: ROUTES.products, element: <Products /> },
      { path: ROUTES.productDetails, element: <ProductDetails /> },
      { path: ROUTES.checkout, element: <Checkout /> },
      { path: ROUTES.payment, element: <Payment /> },
      { path: ROUTES.notFound, element: <NotFound /> },
      { path: 'auth', element: <Navigate to='/login' /> },
      { path: '*', element: <Navigate to='/404' /> },
    ]
  };

  const authRoutes = {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'google/callback', element: <GoogleAuthCallback />},
      { path: '*', element: <Navigate to='/404' />},
    ]
  };

  return useRoutes([mainRoutes, authRoutes]);
}

export default App;
