import React, { useEffect, useState } from "react";
import "./league.css";
import { fetchAllDev } from "../services/competitions";

const League = () => {
  const [dev, setDev] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllDev()
      .then((res) => {
        setDev(res.data);
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
