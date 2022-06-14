import { Container } from "@mui/system";
import React, { useState } from "react";
import "./league.css";
import { fetchAllCompetitions } from "../Services/http";

const League = () => {
  const [match, setMatch] = useState([]);

  const getMatch = async () => {
    const { competitions } = await (await fetchAllCompetitions()).json();
    setMatch(competitions);
    console.log(competitions);
  };

  return (
    <div>
      <container>
        <div className="container-lg">
          <div class="container">
            <Container></Container>
          </div>
        </div>
      </container>
    </div>
  );
};

export default League;
