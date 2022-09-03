import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROFILE } from "../../../graphql/queries";
import { Helmet } from 'react-helmet';
import { Loading } from "@azwaaji/front/ui-shared";

const ProfileDetails = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery(GET_PROFILE, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return <div>error</div>;

  return (
    <>
      <Helmet>
        <title>Profil de {data.profile.data.attributes.user.data.attributes.username} - Azwaaji</title>
      </Helmet>
      <span>profile details</span>
    </>
)}

export default ProfileDetails;
