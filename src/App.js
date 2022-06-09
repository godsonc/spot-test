import { Stack } from "@mui/material";
import React from "react";
import "./App.css";
import League from "./Component/league";
import Spotify from "./Component/spot";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Spotify />
        <League />
      </header>
      <Stack />
    </div>
  );
}

export default App;
