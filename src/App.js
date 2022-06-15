import React from "react";
import "./App.css";
import League from "./component/league";
import Spotify from "./component/spotify";

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
