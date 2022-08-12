import { useQuery } from "@apollo/client";
import { Loading, useAuth } from "@azwaaji/front/ui-shared";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GET_PROFILES } from "../../graphql/queries";
import { ProfileList, ProfileListItem } from "../../types";

const Homepage = () => {
  const { data, loading, error } = useQuery<ProfileList>(GET_PROFILES, {
    variables: { gender: 'male' }
  })

  if (loading) <Loading />

  console.log(data && data.profiles.data)

  return (
    <div>
      <h1>homepage</h1>
      <section className="profile__list">
        {data?.profiles.data.map((p: ProfileListItem,i: number) => (
          <Link key={i} to={`/profiles/${p.id}`}>
            <span>username: {p.attributes.user.data.attributes.username}</span>
          </Link>
        ))}
      </section>
      <ul>{data && data.profiles.data.map((p: any, i: number) => <li key={i}>id: {p.id}</li>)}</ul>
      <Link to={`/auth/login`}>login</Link>
    </div>
  )
}

export default Homepage;


