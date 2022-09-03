import { AppContext } from "@azwaaji/front/ui-shared";
import { useContext } from "react";

const MyAccount = () => {

  const { currentUser } = useContext(AppContext);

  console.log(currentUser);


  return (
    <h3>mes MyAccount</h3>
  )
};

export default MyAccount;
