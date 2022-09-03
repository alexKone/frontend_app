import { Fragment, useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_PROFILES } from "../../../graphql/queries";
import { ProfileList } from "../../../types";
import styles from './Homepage.module.scss';
import { AppContext, Loading, UserCard } from "@azwaaji/front/ui-shared";
import { Helmet } from 'react-helmet';

const Homepage = () => {
  const { currentUser, addUser } = useContext(AppContext);
  const { data, loading, error } = useQuery<ProfileList>(GET_PROFILES, {
    variables: { gender: currentUser?.profile.data.attributes.gender }
  });

  if (loading) <Loading />

  return (
    <div>
      <Helmet>
        <title>Homepage - Azwaaji app</title>
      </Helmet>
      <section className={styles['profile__list']}>
        {data && data.profiles.data.map((p, i) => (
          <Fragment key={i}>
            <Link key={`a-${i}`} to={`/profiles/${p.id}`}>
              <UserCard
                username={p.attributes.user.data.attributes.username}
                age={30}
                city="Chilly Mazarin"
                country="fr"
                gender={p.attributes.gender}
              />
            </Link>
            {/* <Link key={`b-${i}`} to={`/profiles/${p.id}`}>
              <UserCard
                username={p.attributes.user.data.attributes.username}
                age={30}
                city="Chilly Mazarin"
                country="fr"
                gender="male"
              />
            </Link>
            <Link key={`c-${i}`} to={`/profiles/${p.id}`}>
              <UserCard
                username="abu issa"
                age={30}
                city="Chilly Mazarin"
                country="fr"
                gender="male"
              />
            </Link>
            <Link key={`d-${i}`} to={`/profiles/${p.id}`}>
              <UserCard
                username={p.attributes.user.data.attributes.username}
                age={30}
                city="Chilly Mazarin"
                country="fr"
                gender="male"
              />
            </Link>
            <Link key={`e-${i}`} to={`/profiles/${p.id}`}>
              <UserCard
                username="abu issa"
                age={30}
                city="Chilly Mazarin"
                country="fr"
                gender="male"
              />
            </Link>
            <Link key={`f-${i}`} to={`/profiles/${p.id}`}>
              <UserCard
                username={p.attributes.user.data.attributes.username}
                age={30}
                city="Chilly Mazarin"
                country="fr"
                gender="male"
              />
            </Link> */}
          </Fragment>
        ))}
      </section>
    </div>
  )
}

export default Homepage;


