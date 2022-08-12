import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import constants from "../constants";
import { AuthGoogleStateType } from "../types";

const GoogleAuthCallback = () => {
  const [auth, setAuth] = useState<AuthGoogleStateType>();
  const location = useLocation();

  useEffect(() => {
    if (!location) return;
    const { search } = location;

    fetch(`${constants.server_url}/auth/google/callback?${search}`)
      .then(res => res.json())
      .then((data: any) => setAuth({ jwt: data.jwt, user: data.user }))
      .catch(err => <Navigate to="/auth/login" />)
  }, [location])

  return (
    <div>
      {auth && (
        <>
          <div>Jwt: {auth.jwt}</div>
          <div>User Id: {auth.user.id}</div>
          <div>Provider: {auth.user.provider}</div>
        </>
      )}
    </div>
  )
}

export default GoogleAuthCallback;
