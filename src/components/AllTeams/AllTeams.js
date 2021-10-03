import React from "react";
import "./AllTeams.css";
const AllTeams = () => {
  return (
    <div className="team-container">
      <h1>Our Team</h1>
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
    </div>
  );
};

export default AllTeams;
