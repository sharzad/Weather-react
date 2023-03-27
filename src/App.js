import "./App.css";
import React from "react";
import Search from "./Search";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <Search />
        <footer>
          This project was created by Shahrzad B. and it is open source {""}
          <a
            className="App-link"
            href="https://loquacious-yeot-0cdb50.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            netlify link
          </a>
          {" & "}
          <a
            className="App-link"
            href="https://github.com/sharzad/Weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Githublink
          </a>
        </footer>
      </div>
    </div>
  );
}
