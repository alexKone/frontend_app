import { useQuery } from "@apollo/client";
import { Bottomnav, Loading, NavItem } from "@azwaaji/front/ui-shared";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ME } from "../graphql/queries";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();

  const { data, loading, error } = useQuery(ME);

  useEffect(() => {
    if (!loading) setIsLoading(loading)
    if (error) navigate('/auth/login')
    // console.log(data, loading, error);

    if (data) {
      console.log('data =>', data);
    }
  }, [data, loading, error, navigate])

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
    {isLoading ? (
      <Loading />
    ) : (
      <>
        <Outlet />
        <Bottomnav color="green">
          <NavItem label="menu" isButton={true} iconName="menu" />
          <NavItem path="/" label="accueil" iconName="home" />
          <NavItem path="/messages" label="message" iconName="mail" />
          <NavItem path="/my-account" label="profile" iconName="person" />
          <NavItem path="/favoris" label="favoris" iconName="favorite" />
        </Bottomnav>
      </>
    )}
    </>
  )
}

export default MainLayout;
