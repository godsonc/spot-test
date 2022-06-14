import React, { useEffect, useState } from "react";
import "./league.css";
import { fetchAllCompetitions } from "../Services/http";

const League = () => {
  const [league, setLeague] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllCompetitions()
      .then((res) => {
        setLeague(res.competitions);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <container>
        <div className="container-lg">
          <div class="container"></div>
        </div>
      </container>
    </div>
  );
};

export default League;
