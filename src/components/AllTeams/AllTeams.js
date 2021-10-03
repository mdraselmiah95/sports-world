import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllTeams.css";
const AllTeams = () => {
  const [teams, setTeams] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, [searchText]);

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };
  console.log(searchText);
  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <div className="search-box">
        <input
          onChange={handleOnChange}
          type="text"
          name=""
          id=""
          placeholder="Enter team name"
          className="py-1"
        />
        <button className="btn btn-danger">Search</button>
      </div>
      <div className="row">
        {teams?.map((team) => (
          <div className="col-md-4">
            <div className="cart">
              <div className="logo-image">
                <img src={team.strTeamBadge} alt="" className="w-50" />
              </div>
              key = {team.idTeam}
              <h2>{team.strTeam}</h2>
              <p>{team.strLeague}</p>
              <p>{team.strCountry}</p>
              <p>{team.strGender}</p>
              <Link to={`/details/${team.idTeam}`}>
                <button className="btn btn-success">Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTeams;
