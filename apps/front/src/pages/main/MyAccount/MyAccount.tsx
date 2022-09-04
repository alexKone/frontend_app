import { AppContext } from "@azwaaji/front/ui-shared";
import { useContext } from "react";

const MyAccount = () => {

  const { currentUser } = useContext(AppContext);

  console.log(currentUser);


  return (
    <section>
      <h3>Mon Compte</h3>
      <div>
        <p>confirmed: {currentUser?.id}</p>
        <p>Gender: {currentUser?.profile.data.attributes.gender}</p>
      </div>

    </section>
  )
};

export default MyAccount;
