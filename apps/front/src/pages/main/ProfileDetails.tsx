import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROFILE } from "../../graphql/queries";

const ProfileDetails = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery(GET_PROFILE, { variables: { id } });

  if (loading) return <div>loading ...</div>;
  if (error) return <div>error</div>;

  console.log(data);


  return (
  <span>profile details</span>
)}

export default ProfileDetails;
