import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        | Download{" "}
        <a href="https://github.com/Aaditya-Kumar-Gupta/Real-Time-Weather-App.git">
          Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://github.com/Aaditya-Kumar-Gupta">
          Aditya Kumar Gupta
        </a>{" "}
        | Student of{" "}
        <a target="_blank" href="https://www.cuchd.in/">
          Chandigarh University |
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
