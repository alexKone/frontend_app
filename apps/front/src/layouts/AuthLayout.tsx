import { AppContext } from "@azwaaji/front/ui-shared";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthHeader from "../components/Header/AuthHeader";
import {useEffect} from 'react';

const AuthLayout = () => {
  const { isAuth, authenticate } = useContext(AppContext);

  return (
    <div className={'auth-layout'}>
      <AuthHeader />
      {isAuth && <Navigate to="/" />}
      <Outlet />
      <div style={{
        position: 'absolute',
        bottom: '16px',
        textAlign: 'center',
        width: '100%',
        fontSize: '0.6em'
      }} className="copyright">2022 Azwaaji . Tous droits réservés.</div>
    </div>
  )
}

export default AuthLayout;
