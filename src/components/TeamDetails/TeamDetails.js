import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import female from "../../images/female.png";
import male from "../../images/male.png";
import MenuBar from "../MenuBar/MenuBar";
import "./TeamDetails.css";
const TeamDetails = (props) => {
  const { teamId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data.teams[0]));
  }, []);
  return (
    <div className="details">
      <MenuBar></MenuBar>
      <div className="male-female p-3">
        {details.strGender === "Male" ? (
          <img className="w-50 img-fluid" src={male} alt="" />
        ) : (
          <img className="w-50 img-fluid" src={female} alt="" />
        )}
      </div>
      <div className="row">
        <div className="col-md-6 text-info">
          <div className="logo-img">
            <img className="w-50" src={details.strTeamBadge} alt="" />
            <h1>{details.strLeague}</h1>
            <p>{details.strDescriptionEN}</p>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default TeamDetails;
