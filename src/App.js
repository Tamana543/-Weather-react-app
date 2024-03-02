import React from "react";
import Weather from "./weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather city="Afghanistan" />

      <footer>
        Cooded by{" "}
        <a href="www.linkedin.com/in/tamana-farzami-">Tamana Farzami</a>
        <br /> ,this project is{" "}
        <a href="https://github.com/Tamana543/-Weather-react-app">
          open-sorced
        </a>{" "}
        and is hosted in
        <a href="/">Netlify</a>
      </footer>
    </div>
  );
}

export default App;
