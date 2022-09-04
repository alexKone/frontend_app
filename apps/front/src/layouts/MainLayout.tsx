import { useQuery } from "@apollo/client";
import { BottomNav, Loading, Header, LinkItem, NavItem, SidenavMobile, AppContext } from "@azwaaji/front/ui-shared";
import { ReactNode, useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { CURRENT_USER } from "../graphql/queries";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { addUser } = useContext(AppContext);

  const { data, loading, error } = useQuery(CURRENT_USER);

  useEffect(() => {
    if (!loading) setIsLoading(loading);
    if (error) navigate('/auth/login');
    if (data) addUser(data.me);
  }, [data, loading, error, navigate, addUser])

  return (
    <ScrollToTop>
      {isLoading ? <Loading /> : (
        <>
          <Header />
          <div className="wrapper">
            <div className="sidenav">
              <Link to="/my-account">
                <LinkItem icon="person" label="mon profil" />
              </Link>
              <Link to="/messages">
                <LinkItem icon="mail" label="messages" />
              </Link>
              <Link to="/favoris">
                <LinkItem icon="star" label="profil enregistrés" />
              </Link>
              <Link to="/">
                <LinkItem icon="filter_list" label="filtre de recherche" />
              </Link>
              <Link to="/">
                <LinkItem icon="person_search" label="qui a consulté mon profil" />
              </Link>
              <Link to="/">
                <LinkItem icon="notifications" label="notifications" />
              </Link>
            </div>
            {/* <Sidenav /> */}
            <SidenavMobile />
            <Outlet />
            <BottomNav color="#fff">
              <NavItem label="menu" isButton={true} iconName="menu" />
              <Link to="/">
                <NavItem path="/" label="accueil" iconName="home" />
              </Link>
              <Link to="/messages">
                <NavItem path="/messages" label="message" iconName="mail" />
              </Link>
              <Link to="/my-account">
                <NavItem path="/my-account" label="profile" iconName="person" />
              </Link>
              <Link to="/favoris">
                <NavItem path="/favoris" label="favoris" iconName="favorite" />
              </Link>
            </BottomNav>
          </div>
        </>
      )}
    </ScrollToTop>
  )
}

export default MainLayout;

interface ScrollToTopProps {
  children: ReactNode;
}
const ScrollToTop = (props: ScrollToTopProps) => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{props.children}</>;
}
