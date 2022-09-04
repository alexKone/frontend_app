import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROFILE } from "../../../graphql/queries";
import { Helmet } from 'react-helmet';
import { AppContext, Loading } from "@azwaaji/front/ui-shared";
import { GetProfileType } from '../../../types';
import { useContext } from "react";
import { getAgeByDate } from '../../../../../../libs/front/ui-shared/src/utils/formatDate';

const ProfileDetails = () => {
  const { addProfile, profile } = useContext(AppContext);
  const { id } = useParams();

  const { data, error, loading } = useQuery<GetProfileType>(GET_PROFILE, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return <div>error</div>;
  if (data) {
    addProfile(data);
  }

  return (
    <>
      <Helmet>
        <title>Profil de {data?.profile.data.attributes.user.data.attributes.username} - Azwaaji</title>
      </Helmet>
      <div>
        <section>
          <h3>Infos générales</h3>
          <p>Lieu: {profile?.profile.data.attributes.address?.data.attributes.city}</p>
          <p>Age: {getAgeByDate(profile?.profile.data.attributes.birthdate)}</p>
          <p>Nombre d'enfants: {profile?.profile.data.attributes.information.data.attributes.children}</p>
          <p>Origine: {JSON.stringify(profile?.profile.data.attributes.information.data.attributes.origin)}</p>
        </section>
        <section>
          <h3>Personnalité</h3>
          <p>{profile?.profile.data.attributes.information.data.attributes.description}</p>
        </section>
        <section>
          <h3>Critères et style de vie</h3>
          <p>Fume: {profile?.profile.data.attributes.information.data.attributes.smoke ? 'oui' : 'non'}</p>
          <p>Accepte femme avec enfants</p>
          <p>Hijra: {profile?.profile.data.attributes.information.data.attributes.hijra}</p>
          <p>Langue(s) parlée(s): {JSON.stringify(profile?.profile.data.attributes.information.data.attributes.language)}</p>
          <p>Sport: {profile?.profile.data.attributes.information.data.attributes.sport}</p>
        </section>
        <section>
          <h3>Recherche</h3>
          <p>{profile?.profile.data.attributes.information.data.attributes.profileSearch}</p>
        </section>
      </div>
    </>
)}

export default ProfileDetails;
