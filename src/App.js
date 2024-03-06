import React from "react";
import Weather from "./weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather city="Afghanistan" />

      <footer>
        Cooded by{" "}
        <a href="www.linkedin.com/in/tamana-farzami-" rel="noopener noreferrer">
          Tamana Farzami
        </a>
        <br /> ,this project is{" "}
        <a
          href="https://github.com/Tamana543/-Weather-react-app 
        "
          rel="noopener noreferrer"
        >
          open-sorced
        </a>{" "}
        and is hosted in
        <a
          href="https://splendorous-pastelito-d4805a.netlify.app/"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
