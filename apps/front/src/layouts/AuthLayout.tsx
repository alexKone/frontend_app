import { AppContext } from "@azwaaji/front/ui-shared";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


const AuthLayout = () => {
  const { isAuth, authenticate } = useContext(AppContext);

  return (
    <>
      {isAuth && <Navigate to="/" />}
      <Outlet />
    </>
  )
}

export default AuthLayout;
