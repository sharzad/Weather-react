import "./App.css";
import React from "react";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>WEATHER APP</h1>
      <Search />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        netlify link
      </a>
      <br></br>
      <a
        className="App-link"
        href="https://github.com/sharzad/Weather-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Githublink
      </a>
    </div>
  );
}
