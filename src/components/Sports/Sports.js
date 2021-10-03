import React, { useContext } from "react";
import { userContext } from "../../App";
import AllTeams from "../AllTeams/AllTeams";

const Sports = () => {
  const [user, setUser] = useContext(userContext);
  console.log(user.name);
  return (
    <div>
      <h2>This is Sports Page.</h2>
      <AllTeams></AllTeams>
    </div>
  );
};

export default Sports;
