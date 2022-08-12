import { Outlet } from "react-router-dom";


const AuthLayout = () => {
  // const { isAuth, authenticate } = useAuth();

  // const [getCurrentUser, { data }] = useLazyQuery(ME);

  // console.log(isAuth);
  // useEffect(() => {
  //   if (localStorage.getItem(constants.token)) {
  //     getCurrentUser()
  //   }
  // }, [getCurrentUser])


  // useEffect(() => { if (data) authenticate() }, [data, authenticate])

  return (
    <>
      {/* {data && <Navigate to="/" />} */}
      <Outlet />
    </>
  )
}

export default AuthLayout;
