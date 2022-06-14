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
    </div>
  );
}

export default App;
