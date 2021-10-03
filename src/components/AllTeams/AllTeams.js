import React, { useEffect, useState } from "react";
import "./AllTeams.css";
const AllTeams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal")
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  return (
    <div className="team-container">
      <h1>Our Team {teams.length}</h1>
      <div className="search-box">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter team name"
          className="py-1"
        />
        <button className="btn btn-danger">Search</button>
      </div>
      <div className="row">
        {teams.map((team) => (
          <div className="col-md-4">
            <div className="cart">
              <div className="logo-image">
                <img src={team.strTeamBadge} alt="" className="w-50" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTeams;
