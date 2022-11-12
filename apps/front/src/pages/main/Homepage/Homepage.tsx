import { Fragment, useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_PROFILES } from "../../../graphql/queries";
import { ProfileListType, ProfileListItemType } from '../../../types';
import styles from './Homepage.module.scss';
import { AppContext, Loading, UserCard } from "@azwaaji/front/ui-shared";
import { Helmet } from 'react-helmet';

const Homepage = () => {
  const { currentUser, addUser } = useContext(AppContext);
  const { data, loading, error } = useQuery<ProfileListType>(GET_PROFILES, {
    variables: { gender: JSON.parse(localStorage.getItem('currentUser') ?? '').gender }
  });

  if (loading) <Loading />

  return (
    <div>
      <Helmet>
        <title>Homepage - Azwaaji app</title>
      </Helmet>
      <section className={styles['profile__list']}>
      <UserCard
        username="samasa"
        age={25}
        city="Paris"
        country="fr"
        gender="male"
      />
      <UserCard
        username="samasa"
        age={25}
        city="Paris"
        country="fr"
        gender="female"
      />
      <UserCard
        username="samasa"
        age={25}
        city="Paris"
        country="fr"
        gender="male"
      />
      <UserCard
        username="samasa"
        age={25}
        city="Paris"
        country="fr"
        gender="male"
      />
      <UserCard
        username="samasa"
        age={25}
        city="Paris"
        country="fr"
        gender="male"
      />
        {/* {data && data.profiles.data.map((p: ProfileListItemType, i: number) => (
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
          </Fragment>
        ))} */}
      </section>
    </div>
  )
}

export default Homepage;


